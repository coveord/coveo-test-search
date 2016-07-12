"use strict";
var bodyParser = require('body-parser');
var express = require('express');
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var page = _.template(fs.readFileSync(__dirname + '/page.ejs', { encoding: 'utf8' }));
var creator = _.template(fs.readFileSync(__dirname + '/creator.ejs', { encoding: 'utf8' }));
var toolbox = _.template(fs.readFileSync(__dirname + '/toolbox.ejs', { encoding: 'utf8' }));
var SAVE_DIR = __dirname + '/saves/';
var Router = (function () {
    function Router(id) {
        var _this = this;
        this.id = id;
        this.router = express.Router();
        this.router.use(bodyParser.urlencoded({ extended: true }));
        this.router.use(bodyParser.json());
        this.router.use('/interfaceEditor', express.static(__dirname + '/../target/interfaceEditor/package/'));
        this.router.use('/jsSearch', express.static(__dirname + '/../node_modules/coveo-search-ui/bin/'));
        this.router.use('/box', express.static(__dirname + '/../target/box/package/'));
        this.router.use('/caseCreation', express.static(__dirname + '/../target/caseCreation/package/'));
        // view or create
        this.router.get('/', function (req, res) {
            var file = _this.getFile();
            // Create new file
            if (file == null) {
                res.send(creator({
                    name: _this.id,
                    repositories: _.map(_this.getRepositories(), function (repo) {
                        return _.pick(repo, 'title', 'id', 'description', 'queries', 'icon'); // do not return everything
                    })
                }));
            }
            else {
                var pages = _this.getPages();
                var $ = cheerio.load(file.html);
                var head = $('head').append(toolbox({
                    pages: pages,
                    currentPage: _this.id
                }));
                res.send($.html());
            }
        });
        this.router.get('/edit', function (req, res) {
            if (_this.getFile() == null) {
                res.redirect('.');
            }
            else {
                res.send(_this.getEditPage());
            }
        });
        this.router.get('/load', function (req, res) {
            var file = _this.getFile();
            if (file == null) {
                res.sendStatus(404);
            }
            else {
                var $ = cheerio.load(file.html);
                res.send({ root: '/', head: $('head').html(), body: $('body').html(), lastPublished: file.modifiedTime });
            }
        });
        this.router.post('/save', function (req, res) {
            var file = _this.getFile();
            if (file == null) {
                res.sendStatus(404);
            }
            else {
                var $ = cheerio.load(file.html);
                $('body').html('<body>' + req.body.body + '</body>');
                _this.save($.html());
                res.sendStatus(200);
            }
        });
        this.router.get('/create', function (req, res) {
            var repositoriesId = req.query.repositories.split(',');
            var tabs = [];
            var facets = [];
            var sorts = [];
            var foldings = [];
            var templates = [];
            repositoriesId.forEach(function (repoId, i) {
                var repo = _.find(_this.getRepositories(), function (repo) { return repo.id == repoId; });
                if (repo != null) {
                    tabs = tabs.concat(repo.tabs);
                    facets = facets.concat(repo.facets);
                    sorts = sorts.concat(repo.sorts);
                    templates = templates.concat(repo.templates);
                    foldings = foldings.concat(repo.foldings);
                }
            });
            templates.sort(function (a, b) { return a.priority > b.priority ? -1 : 1; });
            var templatesHtml = templates.map(function (template) { return template.html; });
            sorts = _.unique(sorts);
            _this.save(_this.createPage(tabs, facets, sorts, foldings, templatesHtml));
            res.sendStatus(200);
        });
        this.router.get('/del', function (req, res) {
            fs.unlink(_this.getFilename(), function (err) {
                if (err)
                    console.log(err);
                res.sendStatus(200);
            });
        });
        this.router.get('/repositories', function (req, res) {
            res.json(_this.getRepositories());
        });
    }
    Router.prototype.getFilename = function () {
        return path.join(SAVE_DIR, this.id + '.html');
    };
    Router.prototype.getFile = function () {
        var filename = this.getFilename();
        if (fs.existsSync(filename)) {
            var stat = fs.statSync(filename);
            var content = fs.readFileSync(filename, { encoding: 'utf8' });
            return {
                html: content,
                modifiedTime: stat.mtime.getTime()
            };
        }
        return null;
    };
    Router.prototype.save = function (html) {
        var filename = this.getFilename();
        if (!fs.existsSync(SAVE_DIR)) {
            fs.mkdirSync(SAVE_DIR);
        }
        fs.writeFileSync(filename, html, { encoding: 'utf8' });
    };
    Router.prototype.getPages = function () {
        return fs.existsSync(this.getFilename()) ? [this.id] : [];
    };
    Router.prototype.createPage = function (tabs, facets, sorts, foldings, templates) {
        var body = this.getBody()
            .replace('[[tabs]]', tabs.join('\n'))
            .replace('[[facets]]', facets.join('\n'))
            .replace('[[sorts]]', sorts.join('\n'))
            .replace('[[foldings]]', foldings.join('\n'))
            .replace('[[templates]]', templates.join('\n'));
        return page({
            head: this.getHead(),
            body: body
        });
    };
    Router.prototype.getRepositories = function () {
        return [];
    };
    Router.prototype.getEditPage = function () {
        throw 'Not implemented';
    };
    Router.prototype.getBody = function () {
        throw 'Not implemented';
    };
    Router.prototype.getHead = function () {
        throw 'Not implemented';
    };
    Router.prototype.getRouter = function () {
        return this.router;
    };
    return Router;
}());
exports.__esModule = true;
exports["default"] = Router;
