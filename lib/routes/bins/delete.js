'use strict'

module.exports = function (req, res, next) {
  this.client.del('bin:' + req.params.uuid, function (err) {
    if (err) {
      throw err
    }
    next()
  })

  this.client.del('log:' + req.params.uuid, function (err) {
    if (err) {
      throw err
    }
    next()
  })
}
