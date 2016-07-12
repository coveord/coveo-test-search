"use strict";
var express = require('express');
var jsSearchRouter_1 = require('./jsSearchRouter');
var boxRouter_1 = require('./boxRouter');
var caseCreationRouter_1 = require('./caseCreationRouter');
var mobileRouter_1 = require('./mobileRouter');
exports.router = express.Router();
exports.router.use('/jsSearch', new jsSearchRouter_1["default"]().getRouter());
exports.router.use('/mobile', new mobileRouter_1["default"]().getRouter());
exports.router.use('/box', new boxRouter_1["default"]().getRouter());
exports.router.use('/caseCreation', new caseCreationRouter_1["default"]().getRouter());
exports.router.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
