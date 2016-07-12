"use strict";
var express = require('express');
var serveIndex = require('serve-index')
var serveStatic = require('serve-static')
var app = express();
app.set('port', (process.env.PORT || 5000));
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
