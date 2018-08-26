const express = require('express')
const { readFileSync, writeFileSync, appendFile } = require('fs')
const { execSync, exec } = require('child_process')
let app = express()
app.use(express.static('./label'))
app.use(require('cors')())
let main = require('./src/main.bs')
let ConfigPage = require('./src/ConfigPage.bs')

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html>' + main.output())
})

let loadConfig = () =>  JSON.parse(readFileSync('./config.json'))
let saveConfig = data => writeFileSync('./config.json', JSON.stringify(data, null, 2))

app.get('/config', (req, res) => {
  let config = loadConfig()
  res.send('<!DOCTYPE html>' + ConfigPage.render(config))
})

app.get('/config/save', (req, res) => {
  saveConfig(req.query)
  res.redirect('/config')
})

app.get('/test', (req, res) => {
  const data = {name: req.query.name}
  console.log(data)
  res.send(data)
})

app.get('/print', (req, res) => {
  console.log('Prepare')
  execSync(`node prepare.js "${req.query.name}"`)
  console.log('Browser')
  try {
    exec('node browser.js', {
      shell: '/bin/bash'
    })
  } catch (e) {
    console.log(e)
  }
  setTimeout(() => {
    console.log('Convert')
    execSync('bash convert.sh')
    console.log('Print')
    execSync('bash print.sh')
    console.log('Done')

    let config = loadConfig()
    let file = `.data/${config.event}.json`
    let students = []
    try {
      students = JSON.parse(readFileSync(file))
    } catch(e) {
      console.log(e)
    }
    students.push([req.query.name, new Date().toISOString()])
    writeFileSync(file, JSON.stringify(students, null, 2))

    res.redirect('/')
  }, 2000)
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
