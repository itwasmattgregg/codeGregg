const marked = require('marked');
const { readFileSync } = require('fs');
const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text) => twemoji.parse(text, twOptions);

const monad = readFileSync(`./static/fonts/Monad.woff`).toString('base64');

function getCss(theme, fontSize) {
  let background = 'white';
  let foreground = 'black';

  if (theme === 'dark') {
    background = 'black';
    foreground = 'white';
  }

  return `
    @font-face {
        font-family: 'Monad';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff;charset=utf-8;base64,${monad}) format('woff');
    }

    body {
      margin: 0;
    }

    .bodywrapper {
      background: ${background};
      background-image: url("https://codegregg.com/images/matt.jpg");
      background-size: 600px;
      background-position: right;
      background-repeat: no-repeat;
      border: 12px solid transparent;
      border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
      border-image-slice: 1;
      padding-left: 1rem;
      height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }
    .bodywrapper::before {
      content: "";
      position: absolute;
      top: 0;
      height: 0;
      width: 0;
      z-index: 0;
      right: 440px;
      border-top: 600px solid white;
      border-right: 160px solid transparent;
    }

    .spacer {
      display: flex;
      flex-direction: row;
    }

    .emoji {
      height: 1em;
      width: 1em;
      margin: 0 .05em 0 .1em;
      vertical-align: -0.1em;
    }

    p {
      margin: 0;
      font-weight: bold;
    }

    .heading {
      font-family: 'Monad', sans-serif;
      font-size: ${sanitizeHtml(fontSize)};
      font-style: normal;
      color: ${foreground};
      line-height: 1.25;
      width: 55vw;
      z-index: 1;
    }

    .footer {
      font-family: sans-serif;
      width: 55vw;
      font-size: 2rem;
      display: flex;
      justify-content: space-between;
      z-index: 1;
      margin-bottom: 5px;
    }
    `;
}

module.exports = function getHtml(parsedReq) {
  const { text, theme, md, fontSize, typeText } = parsedReq;
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(theme, fontSize)}
    </style>
    <body>
      <div class="bodywrapper">
        <div class="heading">${emojify(
          md ? marked.parse(typeText + text) : sanitizeHtml(typeText + text)
        )}</div>
        <div class="footer">
        <div>codegregg.com</div>
        <div>@itwasmattgregg</div>
        </div>
      </div>
    </body>
</html>`;
};

const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};

function sanitizeHtml(html) {
  return String(html).replace(/[&<>"'\/]/g, (key) => entityMap[key]);
}
