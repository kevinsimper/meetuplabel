const express = require('express')
const { execSync, exec } = require('child_process')
let app = express()
app.use(express.static('./label'))
app.use(require('cors')())
let main = require('./src/main.bs')
let ConfigPage = require('./src/ConfigPage.bs')

app.get('/', (req, res) => {
  res.send(main.output())
})

app.get('/config', (req, res) => {
  res.send(ConfigPage.render())
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
    res.send('Done')
  }, 2000)
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
