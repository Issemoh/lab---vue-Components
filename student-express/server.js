var express = require('express')
var bodyParser = require('body-parser')
var Sequelize = require('sequelize')

Sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite3'
})

Sequelize.authenticate()
.then(() => console.log('connected to sqlite'))
.catch(err => console.log('error connecting',err))


let Student = require('./model/student.js')(Sequelize, Sequelize)


var app = express()
app.use(bodyParser.json())

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})