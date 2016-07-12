"use strict";
var express = require('express');
var port = 80;
var app = express();
app.use(express.static('public'));
app.listen(port);
