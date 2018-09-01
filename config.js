const { readFileSync, writeFileSync } = require('fs')
exports.loadConfig = () =>  JSON.parse(readFileSync('./config.json'))
exports.saveConfig = data => writeFileSync('./config.json', JSON.stringify(data, null, 2))
