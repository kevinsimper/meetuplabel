const { readFileSync, writeFileSync } = require('fs')
const name = process.argv[2].split(' ')
const first = name[0]
const last = name.length > 1 ? name[name.length - 1] : ''
let content = readFileSync('./label/template.html').toString()
content = content.replace('##FIRSTNAME##', first)
content = content.replace('##LASTNAME##', last)
writeFileSync('./label/label.html', content)
