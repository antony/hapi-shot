'use strict'

const Joi = require('joi')

module.exports = [{
  method: 'GET',
  path: '/hello/{name}',
  config: {
    validate: {
      params: {
        name: Joi.string().required().description('Your name')
      }
    }
  },
  handler: request => {
    return `Hello, ${request.params.name}!`
  }
}]
