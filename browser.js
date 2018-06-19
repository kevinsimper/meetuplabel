const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:9000/label.html');
  await page.setViewport({width: 945, height: 732})
  await page.screenshot({path: 'label.png'});
  await browser.close();
})();
