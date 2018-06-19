const express = require('express')
const { execSync, exec } = require('child_process')
let app = express()
app.use(express.static('.'))
app.use(require('cors')())
app.get('/', (req, res) => {
  res.send('OK')
})
app.get('/test', (req, res) => {
  res.send({test: req.query.name})
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
app.listen(9000, () => {
  console.log('Listening..')
})
