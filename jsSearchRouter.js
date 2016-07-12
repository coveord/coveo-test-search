"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fs = require('fs');
var _ = require('underscore');
var router_1 = require('./router');
var page = _.template(fs.readFileSync(__dirname + '/page.ejs', { encoding: 'utf8' }));
var editPage = fs.readFileSync(__dirname + '/edit/jsSearch.html', { encoding: 'utf8' });
var JsSearchRouter = (function (_super) {
    __extends(JsSearchRouter, _super);
    function JsSearchRouter() {
        _super.call(this, 'jsSearch');
    }
    JsSearchRouter.prototype.getHead = function () {
        return "<link rel=\"stylesheet\" href=\"./jsSearch/css/CoveoFullSearchNewDesign.css\">\n        <script src=\"./jsSearch/js/CoveoJsSearch.js\"></script>\n        <script src=\"./jsSearch/js/CoveoJsSearch.dependencies.js\"></script>\n        <script src=\"./jsSearch/js/templates/templatesNew.js\"></script>\n\n        <script type=\"text/javascript\">\n            document.addEventListener('DOMContentLoaded', function(){\n            Coveo.SearchEndpoint.configureSampleEndpoint();\n            Coveo.init(document.querySelector('#search'));\n          })\n        </script>";
    };
    JsSearchRouter.prototype.getBody = function () {
        return fs.readFileSync(__dirname + '/../target/interfaceEditor/package/DefaultSearch.html', { encoding: 'utf8' }).replace(/\[\[tag\]\]/g, 'div');
    };
    JsSearchRouter.prototype.getRepositories = function () {
        // use require each time otherwise you will have to reload the server to se the updated repositories
        return require('../target/interfaceEditor/package/repositories.json');
    };
    JsSearchRouter.prototype.getEditPage = function () {
        return editPage;
    };
    return JsSearchRouter;
}(router_1["default"]));
exports.__esModule = true;
exports["default"] = JsSearchRouter;
