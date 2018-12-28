document.querySelectorAll('.attendee-item .text--bold').forEach(i => {
  i.parentElement.innerHTML +=
    '<button onClick="print(\'' +
    i.textContent +
    '\'); return false;">Print</button>'
})
function print(name) {
  fetch('http://localhost:9000/print?name=' + name)
    .then(r => r.text())
    .then(r => console.log(r))
}
