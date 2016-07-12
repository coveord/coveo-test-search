"use strict";
var express = require('express');
var port = process.argv[2] || 3000;
var app = express();
app.use(express.static('public'));
app.listen(port);
