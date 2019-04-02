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

async function main() {
  const template = await fetchTemplate()
  await appendTemplate(template)
  await generateCanvas()
}

main()
