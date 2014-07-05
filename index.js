var format = require('util').format
var clc = require('cli-color')

module.exports = function status_log(req, res) {
  res.once('finish', function () {
    var message = format('%s %s %s', res.statusCode, req.method, req.url)
    if (res.statusCode > 399) {
      console.log(clc.red(message))
    } else if (res.statusCode > 299) {
      console.log(clc.blue(message))
    } else {
      console.log(clc.green(message))
    }
  })
}