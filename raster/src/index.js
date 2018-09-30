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

const addRasterData = () => {
  return Buffer.from('', 'hex')
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
  // data.push(addRasterData())
  // data.push(addPrint())

  return Buffer.concat(data)
}
