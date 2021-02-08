const express = require('express')
const http = require('http')
const ws = require('socket.io')
const bodyParser = require('body-parser')
const path = require('path')
const { logInfo } = require('./utils/coloredLogs')
const { constants } = require('crypto')
const { userLeave, userJoin } = require('./utils/userMethods')

const app = express()
const server = http.createServer(app)
const io = ws(server)
const userList = []

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('port', 3000 || process.env.PORT)

io.on('connection', socket => {
  logInfo(`${socket.id} connected!`)
  const userList = userJoin(socket.id)
  io.emit('currentUsers', userList)

  socket.on('disconnect', () => {
    logInfo(`${socket.id} disconnected!`)
    const userList = userLeave(socket.id)
    io.emit('currentUsers', userList)
  })
})

server.listen(app.get('port'), () => {
  logInfo(`Server is listening on port ${app.get('port')}!`)
})