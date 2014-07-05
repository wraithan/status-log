# status-log

Prints the status of a response with colors. Hooks into `res.on('finish')` in
order to make sure it happens at the end of the request and has enough data
available to it.

## usage

``` JavaScript
var http = require('http')
var status_log = require('status-log')

http.createServer(function (req, res) {
  // Call your router and such
  status_log(req, res)
})
```