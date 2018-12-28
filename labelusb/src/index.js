import { Buffer } from 'buffer/'
import raster from '../../raster/src/'
import { rotate } from '../../raster/src/rotateImage'

let device

// 04f9:209d (vendorid:productId)
const filters = [
  {
    vendorId: 0x04f9,
  },
]

window.connect = function() {
  let devices = navigator.usb.requestDevice({ filters: filters })

  devices
    .then(selectedDevice => {
      console.log(selectedDevice.productName)
      console.log(selectedDevice.manufacturerName)
      device = selectedDevice
      console.log('device', device)
      return device.open() // Begin a session.
    })
    .then(() => device.selectConfiguration(1))
    .then(() => device.claimInterface(0))
    // interfaceNumner, alternateSetting
    .then(() => device.selectAlternateInterface(0, 0))
    // endpoint number: 2 (out, bulk)
    .catch(e => console.log(e))
}

window.print = function() {
  const f = file.files[0]
  let reader = new FileReader()
  reader.onloadend = async function() {
    const result = await rotate(Buffer.from(reader.result))
    const rasterResult = raster(result)
    device.transferOut(2, rasterResult)
  }
  reader.readAsArrayBuffer(f)
}
