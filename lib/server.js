'use strict'

const Hapi = require('hapi')
const Joi = require('joi')
const health = require('./routes/health')
const hello = require('./routes/hello')

const server = Hapi.server({
  port: 3000
})

server.route(health)
server.route(hello)

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
  console.error(err)
  process.exit(1)
})

module.exports = {
  server,
  init
}
