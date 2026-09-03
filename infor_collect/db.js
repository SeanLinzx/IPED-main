const fs = require("fs");
const path = require("path");
const initSqlJs = require("sql.js");

function bind(stmt, params) {
  if (!params) return;
  if (Array.isArray(params)) {
    stmt.bind(params);
    return;
  }
  const named = {};
  for (const [key, value] of Object.entries(params)) {
    named[key.startsWith("@") || key.startsWith("$") || key.startsWith(":") ? key : `@${key}`] = value;
  }
  stmt.bind(named);
}

async function openDatabase(filePath) {
  const wasmDir = path.join(__dirname, "node_modules", "sql.js", "dist");
  const SQL = await initSqlJs({
    locateFile: (file) => path.join(wasmDir, file),
  });
  let db;
  if (fs.existsSync(filePath)) {
    db = new SQL.Database(fs.readFileSync(filePath));
  } else {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    db = new SQL.Database();
  }

  function persist() {
    const data = db.export();
    fs.writeFileSync(filePath, Buffer.from(data));
  }

  function run(sql, params) {
    if (params) db.run(sql, params);
    else db.run(sql);
    const id = lastId();
    persist();
    return id;
  }

  function all(sql, params) {
    const stmt = db.prepare(sql);
    bind(stmt, params);
    const rows = [];
    while (stmt.step()) rows.push(stmt.getAsObject());
    stmt.free();
    return rows;
  }

  function get(sql, params) {
    return all(sql, params)[0];
  }

  function exec(sql) {
    db.exec(sql);
    persist();
  }

  function lastId() {
    const row = get("SELECT last_insert_rowid() AS id");
    return Number(row && row.id) || 0;
  }

  return { run, all, get, exec, lastId };
}

module.exports = { openDatabase };
