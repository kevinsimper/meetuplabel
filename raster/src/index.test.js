const raster = require('./')
const { readFileSync } = require('fs')

test('raster function should be defined', () => {
  const data = readFileSync('./testdata/label0001.png')
  const newdata = raster(data)
  const raw = readFileSync('./testdata/label.bin')
  expect(newdata.length).toEqual(raw.length)
})
