const { writeFile } = require('fs');
const { resolve } = require('path');

const { createHash } = require('crypto');
const { promisify } = require('util');

const writeFileAsync = promisify(writeFile);

async function writeCachedFile(CACHE_DIR, key, contents, extension) {
  // I'm using the title as the key for the hash, because it's the only
  // thing which impacts the final image. If you were to have something
  // more elaborate, you should just use the HTML as the hash instead.
  const fileName =
    createHash('md5')
      .update(key)
      .digest('hex') +
    '.' +
    extension;
  const absolutePath = resolve(CACHE_DIR, fileName);
  await writeFileAsync(absolutePath, contents);
  return absolutePath;
}

module.exports = screenshot;
async function screenshot(CACHE_DIR, browser, node, type) {
  const getHtml = require('./template');
  const title = node.frontmatter.title;
  const html = getHtml({
    fileType: 'jpg',
    text: title,
    typeText: type === 'tinywins' ? 'Tiny Win: ' : '',
    theme: 'light',
    md: true,
    fontSize: Math.min(11, Math.max(5, Math.floor(100 / title.length))) + 'vw',
  });

  const filePath = await writeCachedFile(CACHE_DIR, title, html, 'html');

  const page = await browser.newPage();
  await page.goto(`file://${filePath}`);
  await page.evaluateHandle('document.fonts.ready');
  page.setViewport({ width: 1232, height: 616 });
  // await page.setViewport({ width: 2048, height: 1170 });

  const file = await page.screenshot({ type: 'png' });

  return writeCachedFile(CACHE_DIR, title, file, 'png');

  // await page.setContent(html);
  // const filePath = path.resolve(`static/og_image/${node.id}.png`);
  // ensureDirectoryExistence(filePath);
  // await page.screenshot({ path: filePath });
}
