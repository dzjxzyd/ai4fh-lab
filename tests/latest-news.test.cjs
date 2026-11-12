const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function loadNews() {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../data.js'), 'utf8'), context);
  return context.window;
}

test('uses the newest-first News entry and its bilingual keywords', () => {
  const site = loadNews();
  site.NEWS.unshift({ date: 'Nov 12, 2026', headline: { en: 'New database', zh: '新数据库' }, body: 'Full announcement.' });
  assert.equal(site.getLatestNews('en').headline, 'New database');
  assert.equal(site.getLatestNews('zh').headline, '新数据库');
  assert.equal(site.getLatestNews('en').date, 'Nov 12, 2026');
  assert.equal(site.NEWS[0].headline.en, 'New database');
});

test('falls back to English keywords when a translation is missing', () => {
  const site = loadNews();
  site.NEWS = [{ headline: { en: 'Database release' }, body: 'Detailed news.' }];
  assert.equal(site.getLatestNews('zh').headline, 'Database release');
});

test('uses the first sentence of news without keywords', () => {
  const site = loadNews();
  site.NEWS = [{ body: 'A new database is available! Read the full story.' }];
  assert.equal(site.getLatestNews('en').headline, 'A new database is available');
});

test('keeps long fallback text short', () => {
  const site = loadNews();
  site.NEWS = [{ body: 'Database research '.repeat(20) }];
  assert.ok(site.getLatestNews('en').headline.length <= 80);
  assert.ok(site.getLatestNews('en').headline.endsWith('…'));
});

test('returns no announcement when News is empty', () => {
  const site = loadNews();
  site.NEWS = [];
  assert.equal(site.getLatestNews('en'), null);
});
