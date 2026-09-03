const BASE = "/IPED/infor_collect";

const loginView = document.getElementById("loginView");
const adminView = document.getElementById("adminView");
const loginForm = document.getElementById("loginForm");
const loginStatus = document.getElementById("loginStatus");
const stats = document.getElementById("stats");
const tbody = document.getElementById("tbody");
const empty = document.getElementById("empty");
const detail = document.getElementById("detail");
const typeFilter = document.getElementById("typeFilter");
const statusFilter = document.getElementById("statusFilter");
const q = document.getElementById("q");

const STATUS_LABEL = {
  pending: "待处理",
  reviewed: "已审阅",
  published: "已采用",
  rejected: "退回",
};

let schema = null;
let currentId = null;
let items = [];

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fmtTime(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

async function api(url, options) {
  const res = await fetch(`${BASE}${url}`, {
    credentials: "same-origin",
    ...options,
  });
  const json = await res.json().catch(() => ({ ok: false, error: "无法解析响应" }));
  if (res.status === 401) throw Object.assign(new Error("unauthorized"), { unauthorized: true });
  if (!json.ok) throw new Error(json.error || "请求失败");
  return json;
}

function showLogin() {
  loginView.hidden = false;
  adminView.hidden = true;
}

function showAdmin() {
  loginView.hidden = true;
  adminView.hidden = false;
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginStatus.textContent = "";
  try {
    await api("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: loginForm.password.value }),
    });
    await bootAdmin();
  } catch (err) {
    loginStatus.textContent = err.unauthorized ? "密码不正确。" : err.message;
    loginStatus.className = "status is-err";
  }
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await api("/api/admin/logout", { method: "POST" });
  showLogin();
});

document.getElementById("exportBtn").addEventListener("click", () => {
  window.location.href = `${BASE}/api/admin/export.csv`;
});

typeFilter.addEventListener("change", loadList);
statusFilter.addEventListener("change", loadList);
q.addEventListener("input", () => {
  clearTimeout(q._t);
  q._t = setTimeout(loadList, 240);
});

async function loadStats() {
  const json = await api("/api/admin/stats");
  const total = json.byStatus.reduce((sum, row) => sum + row.n, 0);
  const pending = json.byStatus.find((row) => row.status === "pending")?.n || 0;
  stats.innerHTML = `
    <div class="stat"><b>${total}</b><span>全部提交</span></div>
    <div class="stat"><b>${pending}</b><span>待处理</span></div>
    ${json.byType
      .slice(0, 2)
      .map((row) => `<div class="stat"><b>${row.n}</b><span>${escapeHtml(row.type_label)}</span></div>`)
      .join("")}
  `;
  const existing = new Set([...typeFilter.options].map((opt) => opt.value));
  for (const row of json.byType) {
    if (existing.has(row.type)) continue;
    const opt = document.createElement("option");
    opt.value = row.type;
    opt.textContent = row.type_label;
    typeFilter.appendChild(opt);
  }
}

async function loadList() {
  const params = new URLSearchParams({
    type: typeFilter.value,
    status: statusFilter.value,
    q: q.value.trim(),
  });
  const json = await api(`/api/admin/submissions?${params}`);
  items = json.items;
  tbody.innerHTML = items
    .map(
      (item) => `
        <tr data-id="${item.id}" class="${item.id === currentId ? "is-on" : ""}">
          <td>#${item.id}</td>
          <td>${escapeHtml(item.type_label)}</td>
          <td>${escapeHtml(item.submitter_name)}<br><span class="help">${escapeHtml(item.submitter_contact)}</span></td>
          <td>${escapeHtml(item.visibility)}</td>
          <td><span class="pill ${item.status}">${STATUS_LABEL[item.status] || item.status}</span></td>
          <td>${escapeHtml(fmtTime(item.created_at))}</td>
        </tr>
      `
    )
    .join("");
  empty.hidden = items.length > 0;
  for (const row of tbody.querySelectorAll("tr")) {
    row.addEventListener("click", () => openDetail(Number(row.dataset.id)));
  }
}

function fieldLabel(typeId, key) {
  if (!schema) return key;
  if (key === "notes") return schema.notes.label;
  const common = schema.common.find((field) => field.key === key);
  if (common) return common.label;
  const type = schema.types.find((item) => item.id === typeId);
  if (!type) return key;
  for (const section of type.sections) {
    const field = section.fields.find((item) => item.key === key);
    if (field) return field.label;
  }
  return key;
}

function renderValue(key, value, files, typeId) {
  const related = files.filter((file) => file.field_key === key);
  const chunks = [];
  if (Array.isArray(value) && value.length && value[0] && value[0].original_name) {
    // file metadata already in payload; prefer DB files for links
  } else if (value) {
    chunks.push(`<dd>${escapeHtml(typeof value === "string" ? value : JSON.stringify(value, null, 2))}</dd>`);
  }
  for (const file of related) {
    chunks.push(
      `<dd><a href="${BASE}/api/admin/files/${file.id}" target="_blank" rel="noreferrer">${escapeHtml(file.original_name)}</a> · ${(file.size / 1024).toFixed(0)} KB</dd>`
    );
  }
  if (!chunks.length) return "";
  return `<div><dt>${escapeHtml(fieldLabel(typeId, key))}</dt>${chunks.join("")}</div>`;
}

async function openDetail(id) {
  currentId = id;
  for (const row of tbody.querySelectorAll("tr")) {
    row.classList.toggle("is-on", Number(row.dataset.id) === id);
  }
  const json = await api(`/api/admin/submissions/${id}`);
  const item = json.item;
  const payload = item.payload || {};
  const files = item.files || [];
  const keys = Object.keys(payload);
  detail.innerHTML = `
    <h3>#${item.id} ${escapeHtml(item.type_label)}</h3>
    <p class="help">${escapeHtml(item.submitter_name)} · ${escapeHtml(item.submitter_contact)} · ${escapeHtml(fmtTime(item.created_at))}</p>
    <div class="actions" style="margin-top:12px">
      ${["pending", "reviewed", "published", "rejected"]
        .map(
          (status) =>
            `<button class="admin-link" type="button" data-status="${status}">${STATUS_LABEL[status]}</button>`
        )
        .join("")}
    </div>
    <dl class="kv">
      ${keys.map((key) => renderValue(key, payload[key], files, item.type)).join("")}
    </dl>
  `;
  for (const btn of detail.querySelectorAll("[data-status]")) {
    btn.addEventListener("click", async () => {
      await api(`/api/admin/submissions/${id}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: btn.dataset.status }),
      });
      await loadStats();
      await loadList();
      await openDetail(id);
    });
  }
}

async function bootAdmin() {
  showAdmin();
  if (!schema) {
    const json = await api("/api/schema");
    schema = json.schema;
    for (const type of schema.types) {
      const opt = document.createElement("option");
      opt.value = type.id;
      opt.textContent = type.label;
      typeFilter.appendChild(opt);
    }
  }
  await loadStats();
  await loadList();
}

async function start() {
  try {
    const session = await api("/api/admin/session");
    if (session.loggedIn) await bootAdmin();
    else showLogin();
  } catch (err) {
    showLogin();
  }
}

start();
