const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

const cached = new Map();

const exePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function getOptions(isDev) {
  if (isDev) {
    return {
      product: 'chrome',
      args: [],
      executablePath: exePath,
      headless: true,
    };
  }
  return {
    product: 'chrome',
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  };
}

async function getScreenshot(url, isDev) {
  const cachedImage = cached.get(url);
  if (cachedImage) {
    return cachedImage;
  }
  const options = await getOptions(isDev);
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const pdf = await page.pdf({
    format: 'A3',
    printBackground: true,
  });
  const pdfBuffer = pdf.toString('base64');
  cached.set(url, pdfBuffer);
  return pdfBuffer;
}

exports.handler = async (event, context) => {
  const photoBuffer = await getScreenshot(
    `${process.env.URL || `http://localhost:8888`}/resume`,
    process.env.URL.includes('http://localhost')
  );
  return {
    statusCode: 200,
    headers: {
      'Content-type': 'application/pdf',
      'content-disposition': 'attachment; filename=matt-gregg-resume.pdf',
    },
    body: photoBuffer,
    isBase64Encoded: true,
  };
};
