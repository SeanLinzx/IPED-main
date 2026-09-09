import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html = fs.readFileSync('about.html', 'utf8');
const join = fs.readFileSync('join.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');
const publications = vm.runInNewContext(fs.readFileSync('projects-data.js', 'utf8') + '\nPUBLICATIONS');
assert.equal((html.match(/class="member-card"/g) || []).length, 49);
assert.equal((html.match(/class="faculty-card"/g) || []).length, 4);
assert.equal((html.match(/class="member-name"/g) || []).length, 49);
const memberNames = [...html.matchAll(/class="member-name" data-zh="([^"]+)" data-en="([^"]+)"/g)];
assert.equal(memberNames.length, 49);
assert.ok(memberNames.every(([, zh, en]) => /[\u4e00-\u9fff]/.test(zh) && /^[A-Z][a-z]+ [A-Z][a-z]+$/.test(en)));
assert.ok(html.includes('data-zh="林铮翔" data-en="Lin Zhengxiang"'));
assert.equal((html.match(/class="member-destination"/g) || []).length, 3);
assert.equal((html.match(/class="member-degree" data-zh="博士毕业生"/g) || []).length, 1);
assert.equal((html.match(/class="member-degree" data-zh="硕士毕业生"/g) || []).length, 9);
assert.ok(html.includes('data-zh="毕业生" data-en="Graduates"'));
assert.ok(html.includes('现任：西南交通大学设计艺术学院 · 助理教授'));
assert.ok(html.includes('深圳 · 阶跃星辰 · 用户研究员'));
assert.ok(html.includes('上海 · 华为 · 用户体验研究'));
assert.equal((html.match(/class="empty-portrait"/g) || []).length, 35);
assert.equal((html.match(/src="\.\/assets\/people\//g) || []).length, 14);
for (const match of html.matchAll(/src="(\.\/assets\/people\/[^"]+)"/g)) {
  assert.ok(fs.existsSync(match[1]), 'Missing portrait: ' + match[1]);
}
assert.equal(publications.length, 44);
assert.equal(new Set(publications.map(p => p.id)).size, publications.length);
const dois = publications.map(p => p.link.match(/^https:\/\/doi.org\/(.+)$/i)?.[1].toLowerCase()).filter(Boolean);
assert.equal(new Set(dois).size, dois.length);
assert.ok(publications.some(p => p.link === 'https://doi.org/10.1177/29776481261427591'));
assert.ok(publications.some(p => p.zh.title.includes('智能产品交互设计') && !p.year));
assert.ok(!/mountIpedAccount|account-widget/.test(script));
assert.ok(!/til@hnu.edu.cn|MuseTransfer|为便于/.test(join));
assert.equal((join.match(/href="mailto:wangwei1125@hnu.edu.cn"/g) || []).length, 1);
assert.equal((join.match(/<article>/g) || []).length, 4);
assert.ok(join.includes('class="join-compact"'));
assert.equal((join.match(/class="join-resource-grid"/g) || []).length, 1);
for (const file of ['index.html', 'about.html', 'projects.html', 'project.html', 'publications.html', 'join.html', 'demo-exhibit.html', 'demo-soft-panel.html', 'demo-touch-map.html']) {
  const page = fs.readFileSync(file, 'utf8');
  assert.ok(page.includes('script.js?v=20260910-copy'), file + ': stale script version');
  assert.ok(!/account-widget|mountIpedAccount/.test(page));
  assert.ok(!/收集表|已填的实验室成果|collection form|作品如何进入网站/.test(page), file + ': internal editorial copy');
}
assert.ok(!/收集表|collection form|作品如何进入网站|How does work enter the website/.test(script));
console.log('PASS: 4 faculty, 49 students, 14 portraits, 35 empty slots, 44 publications, contact and public navigation.');
