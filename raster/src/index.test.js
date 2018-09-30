const raster = require('./')
const { readFileSync } = require('fs')

test('raster function should be defined', () => {
  const data = readFileSync('./label.png')
  console.log(data)
  const raw = readFileSync('./label.bin')
  console.log(raw)
  const newdata = raster()
  console.log(newdata)
  expect(newdata).toBeDefined()
})
