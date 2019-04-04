import html2canvas from 'html2canvas'
import { Buffer } from 'buffer/'
import raster from '../../raster/src/'
import { rotate } from '../../raster/src/rotateImage'
import fitty from './fitty.min.js'
import { connect, print } from '../../labelusb/src/index'

let device

window.connect = () => {
  connect().then(_device => {
    device = _device
    console.log(device)
  })
}

const capture = document.querySelector('#capture')

function fetchTemplate() {
  return fetch('../template.html').then(r => r.text())
}

function generateCanvas() {
  return html2canvas(capture, {}).then(canvas => {
    document.body.appendChild(canvas)
    return canvas
  })
}

function appendTemplate(html) {
  capture.innerHTML = html
}

function fitText() {
  fitty('.namefirst', {
    multiLine: true,
    maxSize: 200,
  })
  if (document.querySelector('.namefirst').innerText === '') {
    fitty('.namesecond', {
      multiLine: true,
      maxSize: 200,
    })
  } else {
    fitty('.namesecond', {
      multiLine: true,
      maxSize: 150,
    })
  }
  document.querySelectorAll('.name div').forEach(i => {
    i.style.display = ''
  })
}

function updateName(template, firstname, lastname) {
  return template
    .replace('##FIRSTNAME##', firstname)
    .replace('##LASTNAME##', lastname)
}

function generatePNG() {}

async function main() {
  const template = await fetchTemplate()
  await appendTemplate(updateName(template, 'Kevin', 'Simper'))
  fitText()
  setTimeout(async () => {
    const canvas = await generateCanvas()
    canvas.toBlob(blob => {
      let reader = new FileReader()
      reader.onloadend = async function() {
        console.log(reader.result)
        console.log(device)
        const result = await rotate(Buffer.from(reader.result))
        const rasterResult = raster(result)
        // device.transferOut(2, rasterResult)
      }
      reader.readAsArrayBuffer(blob)
    })
  }, 50)
}

window.main = main
