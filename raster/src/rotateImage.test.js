const { rotate } = require('./rotateImage')

test('rotate', () => {
  let data = require('fs').readFileSync('./testdata/label.png')
  return rotate(data).then(d => {
    expect(d).toBeDefined()
  })
})
