const addSwitchMode = () => {
  return Buffer.from('1B696101', 'hex')
}

const addInvalidate = () => {
  return Buffer.from('00'.repeat(200), 'hex')
}

const addInitialize = () => {
  return Buffer.from('1B40', 'hex')
}

module.exports = function (imagedata) {
  let data = []
  data.push(addSwitchMode())
  data.push(addInvalidate())
  data.push(addInitialize())
  data.push(addSwitchMode())
  return Buffer.concat(data)
}
