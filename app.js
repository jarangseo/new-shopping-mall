const express = require('express')
const nunjucks = require('nunjucks')
const admin = require('./routes/admin')
const path = require('path')

const db = require('./models')

db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
        return db.sequelize.sync()
    })
    .then(() => {
        console.log('DB Synv complte')
    })
    .catch(err => {
        console.error('Unbale to connect to teh database', err)
    })

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