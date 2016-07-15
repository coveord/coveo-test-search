"use strict";
var express = require('express');
var serveIndex = require('serve-index')
var serveStatic = require('serve-static')
var app = express();
app.set('port', (process.env.PORT || 5000));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};


app.use(allowCrossDomain);
app.use(
  serveStatic('public',
    {'index': ['_.html']}
  ),
  serveIndex('public',
    {'icons': true}
  )
)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
