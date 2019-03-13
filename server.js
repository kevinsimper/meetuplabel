const express = require('express')
const { readFileSync, writeFileSync } = require('fs')
const { execSync, exec } = require('child_process')
const main = require('./src/main.bs')
const ConfigPage = require('./src/ConfigPage.bs')
const cors = require('cors')
const prompts = require('prompts')

let readConfig = () => {
  try {
    return JSON.parse(readFileSync('./config.json'))
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Did not find config.json - creating one now!')
      writeConfig({})
    } else {
      console.log(err)
      process.exit(1)
    }
  }
  return readConfig()
}

let writeConfig = obj => {
  let config = {
    event: '',
    url: '',
  }
  let saving = Object.assign(config, readConfig(), obj)
  writeFileSync('./config.json', JSON.stringify(saving, null, 2))
}

const config = readConfig()

let app = express()
app.use(express.static('./label'))
app.use(cors())
app.get('/', (req, res) => {
  res.send(main.output())
})

app.get('/config', (req, res) => {
  let config = JSON.parse(readFileSync('./config.json'))
  res.send('<!DOCTYPE html>' + ConfigPage.render(config))
})

app.get('/config/save', (req, res) => {
  writeFileSync('./config.json', JSON.stringify(req.query, null, 2))
  res.redirect('/config')
})

app.get('/test', (req, res) => {
  const data = { name: req.query.name }
  console.log(data)
  res.send(data)
})

app.get('/print', (req, res) => {
  console.log('Prepare')
  execSync(`node prepare.js "${req.query.name}"`)
  console.log('Browser')
  try {
    exec('node browser.js', {
      shell: '/bin/bash',
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
    res.send('Done')
  }, 2000)
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
