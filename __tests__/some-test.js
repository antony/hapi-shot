'use strict'

const { server } = require('server')

describe('/hello/{name}', () => {
  let res

  beforeEach(async () => {
    res = await server.inject('/hello/mike')
  })

  it('responds with 200', () => {
    expect(res.statusCode).toEqual(200)
  })

  it('responds with name', () => {
    expect(res.result).toEqual('Hello, mike!')
  })
})