/// <reference path="typings/tsd.d.ts" />
"use strict";
var express = require('express');
var routers = require('./routers');
var port = process.argv[2] || 3000;
var app = express();
app.use('/', routers.router);
app.listen(port);
