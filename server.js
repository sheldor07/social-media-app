const express = require('express')

const { db } = require('./src/db/models')
const {usersRoute} = require('./src/routes/users')
const {postsRoute} = require('./src/routes/posts')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/',express.static(__dirname + '/src/public'))

const SERV_PORT = process.env.PORT || 8484
db.sync()
  .then(() => {
    app.listen(SERV_PORT, () => {
      console.log('server started on http://localhost:8383')
    })
  })
  .catch((err) => {
    console.error(new Error('Could not start database'))
    console.error(err)
  })