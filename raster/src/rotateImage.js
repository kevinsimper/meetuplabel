var Jimp = require('jimp')

exports.rotate = data => {
  const read = Jimp.read(data)
  return read
    .then(image => {
      return image
        .rotate(90)
        .resize(720, 898)
        .flip(false, true)
    })
    .then(image => {
      return image.getBufferAsync('image/png')
    })
    .catch(e => console.log(e))
}
