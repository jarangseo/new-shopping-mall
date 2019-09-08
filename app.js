const express = require('express')
const nunjucks = require('nunjucks')
const admin = require('./routes/admin')
const path = require('path')

const app = express()
const port = 3000

nunjucks.configure('template', {
    autoescape: true,
    express: app
})

app.set('template', path.join(__dirname, 'template'))

app.get('/', function(req,res){
    res.send('first app')
})

app.use('/admin', admin)

app.listen(port, function(){
    console.log('Express Listening on port', port)
})