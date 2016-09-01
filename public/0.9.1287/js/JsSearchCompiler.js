/// <reference path='../lib/node.d.ts' />
var gulp = require('gulp');
var gulpTsc = require('gulp-tsc');
var _ = require('underscore');
var fs = require('fs');
var child_process = require('child_process');
var Q = require('q');
var replace = require('gulp-replace');
var readFile = Q.denodeify(fs.readFile);
var writeFile = Q.denodeify(fs.writeFile);
var deleteFile = Q.denodeify(fs.unlink);
var exec = Q.denodeify(child_process.exec);
var availableComponents;
var fillAvailableComponents = function (componentsFile) {
    availableComponents = [];
    readFile(componentsFile).then(function (content) {
        var str = content.toString();
        var regex = new RegExp('path=".*\/(.*).ts"', "g");
        var match = regex.exec(str);
        while (match != null) {
            availableComponents.push(match[1]);
            match = regex.exec(str);
        }
    });
};
var getComponentsToCompileFromCommandArgs = function (argv) {
    var componentsToCompile;
    if (argv.with != undefined) {
        if (argv.with === 'all') {
            componentsToCompile = 'all';
        }
        else if (argv.with === 'none') {
            componentsToCompile = 'none';
        }
        else {
            componentsToCompile = argv.with.split(',');
        }
    }
    if (argv.without != undefined) {
        if (argv.without === 'all') {
            componentsToCompile = 'none';
        }
        else if (argv.without === 'none') {
            componentsToCompile = 'all';
        }
        else {
            componentsToCompile = _.difference(availableComponents, argv.without.split(','));
        }
    }
    if (argv.debugging != undefined) {
        componentsToCompile = 'debugging';
    }
    if (componentsToCompile == undefined) {
        componentsToCompile = 'all';
    }
    return componentsToCompile;
};
var createString = function (toCompileArray) {
    return _.chain(toCompileArray).map(function (toCompile) {
        return '\n/// <reference path="ui/' + toCompile + '/' + toCompile + '.ts" />';
    }).value().join('');
};
var createTempFile = function (tmpSrcFile, baseSrcFile, component) {
    return readFile(baseSrcFile).then(function (content) {
        var fileName = tmpSrcFile + Math.random() + '.ts';
        return writeFile(fileName, content.toString() + createString(component)).then(function () {
            return fileName;
        });
    });
};
var deleteTempFile = function (tmpSrcFile) {
    return deleteFile(tmpSrcFile);
};
var compilation = function (tmpFileName, message, out) {
    console.log('Compiling : ' + message);
    return gulp.src(tmpFileName).pipe(gulpTsc({ module: 'amd', out: out, declaration: true })).on('error', function () {
        deleteTempFile(tmpFileName);
    }).on('end', function () {
        deleteTempFile(tmpFileName);
    }).pipe(gulp.dest('./target/jsSearch/js/')).pipe(gulp.dest('./target/jsSearch/package/js/'));
};
var compileAllOneByOne = function (options) {
    var compiled = 0;
    availableComponents.forEach(function (component) {
        createTempFile(options.tmpSrcFile, options.baseSrcFile, [component]).done(function (fileName) {
            compilation(fileName, component, options.out).on('end', function () {
                compiled += 1;
                if (compiled == availableComponents.length) {
                    options.callback();
                }
            }).on('error', function () {
                options.callback();
            });
        });
    });
};
var compileSpecificComponents = function (componentsToCompile, options) {
    createTempFile(options.tmpSrcFile, options.baseSrcFile, componentsToCompile).done(function (fileName) {
        setTimeout(function () {
            var logMessage = componentsToCompile.join(',');
            if (availableComponents && componentsToCompile.length == availableComponents.length) {
                logMessage = 'all';
            }
            else if (componentsToCompile.length == 0) {
                logMessage = 'none';
            }
            compilation(fileName, logMessage, options.out).on('end', function () {
                options.callback();
            }).on('error', function () {
                options.callback();
            });
        }, 500);
    });
};
module.exports = {
    compile: {
        chooseFromCmdArgs: function (argv, options) {
            fillAvailableComponents(options.componentsFile);
            var toCompile = getComponentsToCompileFromCommandArgs(argv);
            switch (toCompile) {
                case 'all':
                    return module.exports.compile.all(options);
                    break;
                case 'debugging':
                    return module.exports.compile.debugging(options);
                    break;
                case 'none':
                    return module.exports.compile.none(options);
                    break;
                default:
                    return module.exports.compile.specificComponents(toCompile, options);
                    break;
            }
        },
        all: function (options) {
            fillAvailableComponents(options.componentsFile);
            return module.exports.compile.specificComponents(availableComponents, options);
        },
        none: function (options) {
            return module.exports.compile.specificComponents([], options);
        },
        debugging: function (options) {
            return compileAllOneByOne(options);
        },
        specificComponents: function (components, options) {
            return compileSpecificComponents(components, options);
        }
    },
    listOfComponents: availableComponents
};
