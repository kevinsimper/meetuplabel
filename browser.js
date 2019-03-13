const puppeteer = require('puppeteer')

const main = async () => {
  try {
    const chromebookOptions = {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
    const options = {}
    console.log('Taking browser screenshot!')
    const browser = await puppeteer.launch(options)
    const page = await browser.newPage()
    await page.goto('http://localhost:9000/label.html')
    await page.setViewport({ width: 945, height: 732 })
    await page.waitFor(500)
    await page.screenshot({ path: 'output/label.png' })
    await browser.close()
  } catch (e) {
    console.log('puppeteer failed')
    console.log(e)
  }
}

main()
