const puppeteer = require('puppeteer');
const { loadConfig } = require('./config');

(async () => {
  const { chromebook } = loadConfig()
  const launchProp = chromebook === "on" ? {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  } : {}
  const browser = await puppeteer.launch(launchProp);
  const page = await browser.newPage();
  await page.goto('http://localhost:9000/label.html');
  await page.setViewport({width: 945, height: 732})
  await page.waitFor(500)
  await page.screenshot({path: 'output/label.png'});
  await browser.close();
})();
