const addSwitchMode = () => {
  return Buffer.from('1B696101', 'hex')
}

const addInvalidate = () => {
  return Buffer.from('00'.repeat(200), 'hex')
}

const addInitialize = () => {
  return Buffer.from('1B40', 'hex')
}

const addStatusInformation = () => {
  return Buffer.from('1B6953', 'hex')
}

const addMediaAndQuality = () => {
  return Buffer.from('1b697ace0a3e00820300000000', 'hex')
}

const addAutoCut = () => {
  return Buffer.from('1b694d40', 'hex')
}

const addCutEvery = () => {
  return Buffer.from('1b694101', 'hex')
}

const addExpandedMode = () => {
  return Buffer.from('1b694b08', 'hex')
}

const addMargins = () => {
  return Buffer.from('1b69642300', 'hex')
}

const addRasterData = imagedata => {
  const { PNG } = require('pngjs')
  var png = PNG.sync.read(imagedata)
  // console.log({ png })
  let data = []
  for (var y = 0; y < png.height; y++) {
    for (var x = 0; x < png.width; x++) {
      var idx = (png.width * y + x) << 2
      if (png.data[idx] === 255) {
        data.push(0)
      } else {
        data.push(1)
      }
    }
  }
  // require('fs').writeFileSync('./data3.txt', data)

  let raw = []
  let frameLength = data.length
  let rowLength = Math.floor(png.width / 8) * 8
  let start = 0
  while (start + rowLength <= frameLength) {
    let row = data.slice(start, start + rowLength)
    start = start + rowLength
    raw.push(Buffer.from('67', 'hex')[0], Buffer.from('00', 'hex')[0])
    raw.push(row.length / 8)
    for (let i = 0; i < row.length; i = i + 8) {
      let kevin =
        '' +
        row[i] +
        row[i + 1] +
        row[i + 2] +
        row[i + 3] +
        row[i + 4] +
        row[i + 5] +
        row[i + 6] +
        row[i + 7]

      raw.push(parseInt(kevin, 2))
    }
  }
  return Buffer.from(raw)
}

const addPrint = () => {
  return Buffer.from('1A', 'hex')
}

module.exports = function(imagedata) {
  let data = []
  data.push(addSwitchMode())
  data.push(addInvalidate())
  data.push(addInitialize())
  data.push(addSwitchMode())
  data.push(addStatusInformation())
  data.push(addMediaAndQuality())
  data.push(addAutoCut())
  data.push(addCutEvery())
  data.push(addExpandedMode())
  data.push(addMargins())
  data.push(addRasterData(imagedata))
  data.push(addPrint())

  return Buffer.concat(data)
}
