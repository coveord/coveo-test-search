"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fs = require('fs');
var router_1 = require('./router');
var editPage = fs.readFileSync(__dirname + '/edit/caseCreation.html', { encoding: 'utf8' });
var JsSearchRouter = (function (_super) {
    __extends(JsSearchRouter, _super);
    function JsSearchRouter() {
        _super.call(this, 'caseCreation');
    }
    JsSearchRouter.prototype.getHead = function () {
        return "<script src=\"./jsSearch/js/CoveoJsSearch.Dependencies.js\"></script>\n  <script src=\"./caseCreation/js/CoveoJsSearch_CaseCreation.js\"></script>\n  <script src=\"./jsSearch/js/templates/templatesNew.js\"></script>\n  <script src=\"./interfaceEditor/js/cultures/en.js\"></script>\n  <link rel=\"stylesheet\" href=\"./caseCreation/css/CoveoCaseCreation.css\"/>\n\n  <script type=\"text/javascript\">\n    $(function () {\n      Coveo.SearchEndpoint.configureSampleEndpoint();\n      $('#search').coveo('initCaseCreation');\n    });\n  </script>";
    };
    JsSearchRouter.prototype.getBody = function () {
        return fs.readFileSync(__dirname + '/../target/caseCreation/package/DefaultCaseCreation.html', { encoding: 'utf8' }).replace(/\[\[tag\]\]/g, 'div');
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
