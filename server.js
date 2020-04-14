const express = require('express')
const { db } = require('./database/db')

const app = express()

app.use('/', express.static(__dirname + '/Public'))


app.listen(3232, function(){
    console.log("Listening to port 3232.")
})
