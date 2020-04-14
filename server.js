const express = require('express')
const { db } = require('./database/db')
const taskRoute = require('./routes/route')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/Public'))
app.use('/tasks', taskRoute)



db.sync()
  .then(() => {
    app.listen(8080, function(){
        console.log("Listening to port 3232.")
    })
  })
  .catch((err) => {
    console.error(err)
  })

