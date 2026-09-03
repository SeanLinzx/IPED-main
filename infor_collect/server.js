const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const express = require("express");
const multer = require("multer");
const { openDatabase } = require("./db");
const { getType, allFields, publicSchema } = require("./schema");

const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const UPLOAD_DIR = path.join(DATA_DIR, "uploads");
const DB_PATH = path.join(DATA_DIR, "collect.sqlite");

function loadEnv() {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnv();

const PORT = Number(process.env.PORT || 3078);
const BASE_PATH = process.env.BASE_PATH || "/IPED/infor_collect";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "IPED.Collect.2026";
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(24).toString("hex");

fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname || "").slice(0, 12);
      cb(null, `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${ext}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024, files: 24 },
});

const hits = new Map();
function limited(key, max, windowMs) {
  const now = Date.now();
  const row = hits.get(key) || [];
  const fresh = row.filter((t) => now - t < windowMs);
  if (fresh.length >= max) {
    hits.set(key, fresh);
    return false;
  }
  fresh.push(now);
  hits.set(key, fresh);
  return true;
}

function clientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) return forwarded.split(",")[0].trim();
  return req.socket.remoteAddress || "";
}

function nowIso() {
  return new Date().toISOString();
}

function signToken(exp) {
  const body = String(exp);
  const sig = crypto.createHmac("sha256", SESSION_SECRET).update(body).digest("hex");
  return `${body}.${sig}`;
}

function readToken(cookieHeader) {
  const match = String(cookieHeader || "").match(/(?:^|;\s*)iped_admin=([^;]+)/);
  if (!match) return null;
  const raw = decodeURIComponent(match[1]);
  const dot = raw.indexOf(".");
  if (dot < 0) return null;
  const exp = raw.slice(0, dot);
  const sig = raw.slice(dot + 1);
  const expected = crypto.createHmac("sha256", SESSION_SECRET).update(exp).digest("hex");
  const left = crypto.createHash("sha256").update(sig).digest();
  const right = crypto.createHash("sha256").update(expected).digest();
  if (!crypto.timingSafeEqual(left, right)) return null;
  if (Number(exp) < Date.now()) return null;
  return true;
}

function setAdminCookie(res, on) {
  if (!on) {
    res.setHeader(
      "Set-Cookie",
      `iped_admin=; Path=${BASE_PATH}; HttpOnly; SameSite=Lax; Max-Age=0`
    );
    return;
  }
  const token = signToken(Date.now() + 7 * 24 * 3600 * 1000);
  res.setHeader(
    "Set-Cookie",
    `iped_admin=${encodeURIComponent(token)}; Path=${BASE_PATH}; HttpOnly; SameSite=Lax; Max-Age=604800`
  );
}

function requireAdmin(req, res, next) {
  if (!readToken(req.headers.cookie)) {
    return res.status(401).json({ ok: false, error: "需要管理员登录" });
  }
  next();
}

function collectFiles(req) {
  const grouped = {};
  for (const file of req.files || []) {
    if (!grouped[file.fieldname]) grouped[file.fieldname] = [];
    grouped[file.fieldname].push(file);
  }
  return grouped;
}

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/schema", (_req, res) => {
  res.json({ ok: true, schema: publicSchema() });
});

app.post("/api/submit", upload.any(), (req, res) => {
  const ip = clientIp(req);
  if (!limited(`submit:${ip}`, 20, 60 * 60 * 1000)) {
    return res.status(429).json({ ok: false, error: "提交过于频繁，请稍后再试。" });
  }
  const type = getType(String(req.body.type || ""));
  if (!type) return res.status(400).json({ ok: false, error: "请先选择提交类型。" });

  const fields = allFields(type);
  const grouped = collectFiles(req);
  const payload = {};
  const missing = [];

  for (const field of fields) {
    if (field.type === "file") {
      const files = grouped[field.key] || [];
      payload[field.key] = files.map((file) => ({
        original_name: file.originalname,
        stored_name: file.filename,
        mime: file.mimetype,
        size: file.size,
      }));
      if (field.required && files.length === 0) {
        missing.push(field.label);
      }
      continue;
    }
    const value = typeof req.body[field.key] === "string" ? req.body[field.key].trim() : "";
    payload[field.key] = value;
    if (field.required && !value) missing.push(field.label);
  }

  for (const rule of type.requireAny || []) {
    const filled = (rule.keys || []).some((key) => String(payload[key] || "").trim());
    if (!filled) missing.push(rule.message || "请至少填写其中一项");
  }

  if (missing.length) {
    for (const list of Object.values(grouped)) {
      for (const file of list) {
        try {
          fs.unlinkSync(file.path);
        } catch (_err) {
          /* ignore */
        }
      }
    }
    return res.status(400).json({ ok: false, error: `请补全：${missing.join("、")}` });
  }

  const created = nowIso();
  const inserted = db.run(
    `INSERT INTO submissions
      (type, type_label, submitter_name, submitter_contact, visibility, payload, status, ip, created_at, updated_at)
     VALUES (?,?,?,?,?,?,?,?,?,?)`,
    [
      type.id,
      type.label,
      payload.submitter_name || "",
      payload.submitter_contact || "",
      payload.visibility || "待确认",
      JSON.stringify(payload),
      "pending",
      ip,
      created,
      created,
    ]
  );
  const newId = inserted || Number((db.get("SELECT MAX(id) AS id FROM submissions") || {}).id);

  for (const [fieldKey, files] of Object.entries(grouped)) {
    for (const file of files) {
      db.run(
        `INSERT INTO files
          (submission_id, field_key, original_name, mime, size, stored_name, created_at)
         VALUES (?,?,?,?,?,?,?)`,
        [newId, fieldKey, file.originalname, file.mimetype, file.size, file.filename, created]
      );
    }
  }

  res.json({ ok: true, id: newId });
});

app.post("/api/admin/login", (req, res) => {
  const ip = clientIp(req);
  if (!limited(`login:${ip}`, 12, 15 * 60 * 1000)) {
    return res.status(429).json({ ok: false, error: "尝试次数过多。" });
  }
  const password = String((req.body && req.body.password) || "");
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ ok: false, error: "密码不正确。" });
  }
  setAdminCookie(res, true);
  res.json({ ok: true });
});

app.post("/api/admin/logout", (_req, res) => {
  setAdminCookie(res, false);
  res.json({ ok: true });
});

app.get("/api/admin/session", (req, res) => {
  res.json({ ok: true, loggedIn: Boolean(readToken(req.headers.cookie)) });
});

app.get("/api/admin/stats", requireAdmin, (_req, res) => {
  res.json({
    ok: true,
    byType: db.all("SELECT type, type_label, COUNT(*) AS n FROM submissions GROUP BY type, type_label"),
    byStatus: db.all("SELECT status, COUNT(*) AS n FROM submissions GROUP BY status"),
  });
});

app.get("/api/admin/submissions", requireAdmin, (req, res) => {
  const type = String(req.query.type || "");
  const status = String(req.query.status || "");
  const q = String(req.query.q || "").trim();
  res.json({
    ok: true,
    items: db.all(
      `SELECT id, type, type_label, submitter_name, submitter_contact, visibility, status, created_at, updated_at
       FROM submissions
       WHERE (? = '' OR type = ?)
         AND (? = '' OR status = ?)
         AND (
           ? = '' OR submitter_name LIKE ? OR submitter_contact LIKE ? OR type_label LIKE ? OR payload LIKE ?
         )
       ORDER BY id DESC`,
      [type, type, status, status, q, `%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`]
    ),
  });
});

app.get("/api/admin/submissions/:id", requireAdmin, (req, res) => {
  const row = db.get("SELECT * FROM submissions WHERE id = ?", [Number(req.params.id)]);
  if (!row) return res.status(404).json({ ok: false, error: "记录不存在" });
  res.json({
    ok: true,
    item: {
      ...row,
      payload: JSON.parse(row.payload),
      files: db.all("SELECT * FROM files WHERE submission_id = ? ORDER BY id", [row.id]),
    },
  });
});

app.post("/api/admin/submissions/:id/status", requireAdmin, (req, res) => {
  const id = Number(req.params.id);
  const status = String((req.body && req.body.status) || "");
  if (!["pending", "reviewed", "published", "rejected"].includes(status)) {
    return res.status(400).json({ ok: false, error: "无效状态" });
  }
  const row = db.get("SELECT * FROM submissions WHERE id = ?", [id]);
  if (!row) return res.status(404).json({ ok: false, error: "记录不存在" });
  db.run("UPDATE submissions SET status = ?, updated_at = ? WHERE id = ?", [status, nowIso(), id]);
  res.json({ ok: true });
});

app.get("/api/admin/files/:id", requireAdmin, (req, res) => {
  const file = db.get("SELECT * FROM files WHERE id = ?", [Number(req.params.id)]);
  if (!file) return res.status(404).end("not found");
  const abs = path.join(UPLOAD_DIR, path.basename(file.stored_name));
  if (!fs.existsSync(abs)) return res.status(404).end("missing");
  res.setHeader("Content-Type", file.mime || "application/octet-stream");
  res.setHeader("Content-Disposition", `inline; filename*=UTF-8''${encodeURIComponent(file.original_name || file.stored_name)}`);
  fs.createReadStream(abs).pipe(res);
});

app.get("/api/admin/export.csv", requireAdmin, (_req, res) => {
  const rows = db.all("SELECT * FROM submissions ORDER BY id DESC");
  const lines = [["id", "type", "type_label", "submitter_name", "submitter_contact", "visibility", "status", "created_at", "payload"].join(",")];
  for (const row of rows) {
    const cells = [
      row.id,
      row.type,
      row.type_label,
      row.submitter_name,
      row.submitter_contact,
      row.visibility,
      row.status,
      row.created_at,
      row.payload,
    ].map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`);
    lines.push(cells.join(","));
  }
  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  res.setHeader("Content-Disposition", "attachment; filename=iped-infor-collect.csv");
  res.send(`\uFEFF${lines.join("\n")}`);
});

app.get("/admin", (_req, res) => {
  res.sendFile(path.join(ROOT, "public", "admin.html"));
});

app.use(express.static(path.join(ROOT, "public"), { index: "index.html", extensions: ["html"] }));

app.use((req, res) => {
  if (req.path.startsWith("/api/")) return res.status(404).json({ ok: false, error: "not found" });
  res.sendFile(path.join(ROOT, "public", "index.html"));
});

let db;

async function start() {
  db = await openDatabase(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL,
      type_label TEXT NOT NULL,
      submitter_name TEXT,
      submitter_contact TEXT,
      visibility TEXT,
      payload TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      ip TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS files (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      submission_id INTEGER NOT NULL,
      field_key TEXT NOT NULL,
      original_name TEXT,
      mime TEXT,
      size INTEGER,
      stored_name TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `);
  app.listen(PORT, "127.0.0.1", () => {
    console.log(`iped-infor-collect listening on 127.0.0.1:${PORT} base=${BASE_PATH}`);
  });
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
