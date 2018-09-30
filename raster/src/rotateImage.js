var Jimp = require('jimp')

exports.rotate = data => {
  const read = Jimp.read(data)
  return read
    .then(image => {
      return image.rotate(90)
    })
    .then(image => {
      return image.write('./testdata/rotated.png', () => {})
    })
    .catch(e => console.log(e))
}
