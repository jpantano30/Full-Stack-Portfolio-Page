// Dependancies 
const express = require('express')
const cors = require('cors')

//import json files 
const projects = require('./projects.json')
const about = require('./about.json')

// create app object 
const app = express()

// port variable 
const PORT = process.env.PORT || 4000


// set up middleware 
app.use(cors())
app.use(express.static('public'))


// testing home 
app.get('/', (req, res) => {
    res.send('hello world')
})

// route for getting projects 
app.get('/projects', (req, res) => {
  res.json(projects)
})

// route for getting about info 
app.get('/about', (req, res) => {
  res.json(about)
})


// listener 
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})