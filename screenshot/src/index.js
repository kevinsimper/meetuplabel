import html2canvas from 'html2canvas'

function fetchTemplate() {
  return fetch('/label/template.html').then(r => r.text())
}

function generateCanvas() {
  return html2canvas(document.querySelector('#capture'), {}).then(canvas => {
    document.body.appendChild(canvas)
  })
}

function appendTemplate(html) {
  document.querySelector('#capture').innerHTML = html
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

async function main() {
  const template = await fetchTemplate()
  await appendTemplate(template)
  fitText()
  setTimeout(() => {
    generateCanvas()
  }, 50)
}

main()
