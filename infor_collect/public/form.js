const BASE = "/IPED/infor_collect";

const typeGrid = document.getElementById("typeGrid");
const commonMount = document.getElementById("commonMount");
const typeMount = document.getElementById("typeMount");
const notesMount = document.getElementById("notesMount");
const form = document.getElementById("form");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");
const success = document.getElementById("success");
const successText = document.getElementById("successText");
const typeHint = document.getElementById("typeHint");

let schema = null;
let currentType = "member";

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function commonFields() {
  if (!schema) return [];
  if (currentType === "member" && schema.memberContact) {
    return schema.common.map((field) => (field.key === "submitter_contact" ? schema.memberContact : field));
  }
  return schema.common;
}

const IMAGE_ICON = `<svg class="uploader-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
  <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" stroke-width="2"/>
  <path d="M6 32l9-9 7 7 8-10 12 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="17" cy="19" r="3" stroke="currentColor" stroke-width="2"/>
  <path d="M34 8v8M30 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

const FILE_ICON = `<svg class="uploader-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
  <path d="M14 8h14l10 10v22a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="2"/>
  <path d="M28 8v10h10M18 28h12M18 34h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

function isImageAccept(accept) {
  return /image/i.test(accept || "image/*");
}

function fieldSpanClass(field, wide) {
  if (wide || field.type === "textarea") return " wide";
  if (field.type === "file") return field.multiple ? " wide" : "";
  if (field.type === "url" || field.key === "one_liner" || field.key === "title_line") return " span-2";
  return "";
}

function fieldHtml(field, wide) {
  const req = field.required ? "<em>必填</em>" : field.requireAny ? "<em>至少填一项</em>" : "";
  const help = field.help ? `<div class="help">${escapeHtml(field.help)}</div>` : "";
  const sameAsPlaceholder = field.example && field.placeholder && String(field.example) === String(field.placeholder);
  const example =
    field.example && !sameAsPlaceholder
      ? `<div class="example">例：${escapeHtml(String(field.example).replace(/\s+/g, " ").trim())}</div>`
      : "";
  const wideClass = fieldSpanClass(field, wide);
  let control = "";
  if (field.type === "textarea") {
    control = `<textarea name="${field.key}" rows="${field.rows || 4}" placeholder="${escapeHtml(field.placeholder || "")}" ${field.required ? "required" : ""}></textarea>`;
  } else if (field.type === "select") {
    const opts = (field.options || []).map((opt) => `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`).join("");
    control = `<select name="${field.key}" ${field.required ? "required" : ""}><option value="">请选择</option>${opts}</select>`;
  } else if (field.type === "file") {
    const image = isImageAccept(field.accept);
    control = `
      <div class="uploader${image ? " is-image" : " is-file"}">
        <div class="uploader-tiles">
          <label class="uploader-add">
            <input type="file" name="${field.key}" accept="${escapeHtml(field.accept || "")}" ${field.multiple ? "multiple" : ""} ${field.required ? "required" : ""} />
            ${image ? IMAGE_ICON : FILE_ICON}
            <span>${image ? "上传图片" : "上传文件"}</span>
            <small>${field.multiple ? "可多选，点击或拖入" : "点击或拖入"}</small>
          </label>
        </div>
      </div>`;
  } else {
    const inputType = field.type === "url" || field.type === "email" ? field.type : "text";
    control = `<input type="${inputType}" name="${field.key}" placeholder="${escapeHtml(field.placeholder || "")}" ${field.required ? "required" : ""} />`;
  }
  return `<div class="field${wideClass}"><label>${escapeHtml(field.label)}${req}</label>${control}${help}${example}</div>`;
}

function setInputFiles(input, files) {
  const data = new DataTransfer();
  for (const file of files) data.items.add(file);
  input.files = data.files;
}

function bindUploaders(root) {
  if (!root) return;
  for (const box of root.querySelectorAll(".uploader")) {
    if (box.dataset.bound) continue;
    box.dataset.bound = "1";
    const input = box.querySelector("input[type=file]");
    const add = box.querySelector(".uploader-add");
    if (!input || !add) continue;

    const refresh = () => renderUploadPreviews(box, input);
    input.addEventListener("change", refresh);

    add.addEventListener("dragover", (event) => {
      event.preventDefault();
      add.classList.add("is-over");
    });
    add.addEventListener("dragleave", () => add.classList.remove("is-over"));
    add.addEventListener("drop", (event) => {
      event.preventDefault();
      add.classList.remove("is-over");
      const dropped = [...event.dataTransfer.files];
      if (!dropped.length) return;
      if (input.multiple) setInputFiles(input, [...input.files, ...dropped]);
      else setInputFiles(input, dropped.slice(0, 1));
      refresh();
    });
  }
}

function renderUploadPreviews(box, input) {
  const tiles = box.querySelector(".uploader-tiles");
  const add = box.querySelector(".uploader-add");
  for (const node of box.querySelectorAll(".uploader-preview")) {
    const img = node.querySelector("img");
    if (img && img.src.startsWith("blob:")) URL.revokeObjectURL(img.src);
    node.remove();
  }
  [...input.files].forEach((file, index) => {
    const tile = document.createElement("div");
    tile.className = "uploader-preview";
    if (file.type.startsWith("image/")) {
      const img = document.createElement("img");
      img.alt = file.name;
      img.src = URL.createObjectURL(file);
      tile.appendChild(img);
    } else {
      const name = document.createElement("span");
      name.className = "uploader-doc";
      name.textContent = file.name;
      tile.appendChild(name);
    }
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "uploader-remove";
    remove.setAttribute("aria-label", `移除 ${file.name}`);
    remove.textContent = "×";
    remove.addEventListener("click", () => {
      setInputFiles(input, [...input.files].filter((_, i) => i !== index));
      renderUploadPreviews(box, input);
    });
    tile.appendChild(remove);
    tiles.insertBefore(tile, add);
  });
}

function renderTypes() {
  typeGrid.innerHTML = "";
  typeGrid.className = "type-choices";
  typeGrid.setAttribute("role", "radiogroup");
  typeGrid.setAttribute("aria-label", "提交类型");
  for (const type of schema.types) {
    const on = type.id === currentType;
    const choice = el(`
      <label class="type-choice${on ? " is-on" : ""}">
        <input type="radio" name="type_choice" value="${escapeHtml(type.id)}" ${on ? "checked" : ""} />
        <span>${escapeHtml(type.label)}</span>
      </label>
    `);
    choice.querySelector("input").addEventListener("change", () => selectType(type.id));
    typeGrid.appendChild(choice);
  }
}

function renderCommon() {
  commonMount.innerHTML = `
    <section class="section">
      <h2>2. 提交人</h2>
      <div class="fields">${commonFields().map((field) => fieldHtml(field)).join("")}</div>
    </section>
  `;
  bindUploaders(commonMount);
}

function renderType() {
  const type = schema.types.find((item) => item.id === currentType);
  typeHint.textContent = type ? type.summary : "";
  typeMount.innerHTML = type.sections
    .map(
      (section, index) => `
        <section class="section">
          <h2>${index + 3}. ${escapeHtml(section.title)}</h2>
          ${section.format ? `<p class="section-format">填写格式：${escapeHtml(section.format)}</p>` : ""}
          <div class="fields">${section.fields.map((field) => fieldHtml(field)).join("")}</div>
        </section>
      `
    )
    .join("");
  notesMount.innerHTML = `
    <section class="section">
      <h2>备注</h2>
      <div class="fields">${fieldHtml(schema.notes, true)}</div>
    </section>
  `;
  bindUploaders(typeMount);
  bindUploaders(notesMount);
}

function selectType(id) {
  const saved = {};
  for (const field of commonFields()) {
    const node = form.elements[field.key];
    if (node) saved[field.key] = node.value;
  }
  currentType = id;
  for (const choice of typeGrid.querySelectorAll(".type-choice")) {
    const input = choice.querySelector("input");
    const on = input && input.value === id;
    choice.classList.toggle("is-on", Boolean(on));
    if (input) input.checked = Boolean(on);
  }
  renderCommon();
  renderType();
  for (const [key, value] of Object.entries(saved)) {
    const node = form.elements[key];
    if (node && value) node.value = value;
  }
}

document.getElementById("againBtn").addEventListener("click", () => {
  success.classList.remove("is-on");
  form.classList.remove("is-hidden");
  form.reset();
  selectType(currentType);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function requireAnyMessage() {
  const type = schema.types.find((item) => item.id === currentType);
  for (const rule of type.requireAny || []) {
    const filled = (rule.keys || []).some((key) => String(form.elements[key]?.value || "").trim());
    if (!filled) return rule.message || "请至少填写其中一项";
  }
  return "";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.textContent = "";
  formStatus.className = "status";
  const anyErr = requireAnyMessage();
  if (anyErr) {
    formStatus.textContent = anyErr;
    formStatus.classList.add("is-err");
    return;
  }
  const data = new FormData(form);
  data.set("type", currentType);
  submitBtn.disabled = true;
  submitBtn.textContent = "正在提交…";
  try {
    const res = await fetch(`${BASE}/api/submit`, { method: "POST", body: data });
    const json = await res.json();
    if (!json.ok) throw new Error(json.error || "提交失败");
    form.classList.add("is-hidden");
    success.classList.add("is-on");
    successText.textContent = `编号 #${json.id} 已写入数据库。如需继续提交其他类型或另一个项目，点下面按钮即可。`;
  } catch (err) {
    formStatus.textContent = err.message;
    formStatus.classList.add("is-err");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "提交这份资料";
  }
});

async function boot() {
  const res = await fetch(`${BASE}/api/schema`);
  const json = await res.json();
  schema = json.schema;
  renderTypes();
  renderCommon();
  renderType();
}

boot().catch((err) => {
  formStatus.textContent = `无法加载表单：${err.message}`;
  formStatus.classList.add("is-err");
});
