webpackJsonpCoveo__temporary([63],{

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(6);
var ComponentOptions_1 = __webpack_require__(8);
var Initialization_1 = __webpack_require__(2);
var QueryEvents_1 = __webpack_require__(10);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var Assert_1 = __webpack_require__(5);
var Dom_1 = __webpack_require__(1);
var KeyboardUtils_1 = __webpack_require__(28);
var DeviceUtils_1 = __webpack_require__(22);
var _ = __webpack_require__(0);
var GlobalExports_1 = __webpack_require__(3);
var Strings_1 = __webpack_require__(7);
__webpack_require__(475);
var Model_1 = __webpack_require__(15);
var QueryStateModel_1 = __webpack_require__(12);
/**
 * The ResultsPerPage component attaches itself to a `div` and allows the end user to choose how many results to
 * display per page.
 *
 * **Note:** Adding a ResultPerPage component to your page overrides the value of
 * {@link SearchInterface.options.resultsPerPage}.
 */
var ResultsPerPage = /** @class */ (function (_super) {
    __extends(ResultsPerPage, _super);
    /**
     * Creates a new ResultsPerPage. The component renders itself on every query success.
     * @param element The HTMLElement on which to instantiate the component (normally a `div`).
     * @param options The options for the ResultsPerPage component.
     * @param bindings The bindings that the component requires to function normally. If not set, these will be
     * automatically resolved (with a slower execution time).
     */
    function ResultsPerPage(element, options, bindings) {
        var _this = _super.call(this, element, ResultsPerPage.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, ResultsPerPage, options);
        _this.currentResultsPerPage = _this.getInitialChoice();
        _this.queryController.options.resultsPerPage = _this.currentResultsPerPage;
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.querySuccess, function (args) { return _this.handleQuerySuccess(args); });
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.queryError, function () { return _this.handleQueryError(); });
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.noResults, function (args) { return _this.handleNoResults(); });
        _this.bind.onQueryState(Model_1.MODEL_EVENTS.CHANGE_ONE, QueryStateModel_1.QUERY_STATE_ATTRIBUTES.NUMBER_OF_RESULTS, function () { return _this.handleQueryStateModelChanged(); });
        _this.initComponent();
        return _this;
    }
    /**
     * Sets the current number of results per page, then executes a query.
     *
     * Also logs an event in the usage analytics (`pagerResize` by default) with the new current number of results per
     * page as meta data.
     * @param resultsPerPage The new number of results per page to select.
     * @param analyticCause The event to log in the usage analytics.
     */
    ResultsPerPage.prototype.setResultsPerPage = function (resultsPerPage, analyticCause) {
        if (analyticCause === void 0) { analyticCause = AnalyticsActionListMeta_1.analyticsActionCauseList.pagerResize; }
        Assert_1.Assert.exists(resultsPerPage);
        Assert_1.Assert.check(this.isValidChoice(resultsPerPage), 'The specified number of results is not available in the options.');
        this.updateResultsPerPage(resultsPerPage);
        this.updateQueryStateModelResultsPerPage();
        this.logAnalyticsEvent(analyticCause);
        this.executeQuery();
    };
    Object.defineProperty(ResultsPerPage.prototype, "resultsPerPage", {
        /**
         * Returns the current number of results per page.
         */
        get: function () {
            return this.currentResultsPerPage;
        },
        enumerable: true,
        configurable: true
    });
    ResultsPerPage.prototype.updateResultsPerPage = function (resultsPerPage) {
        this.searchInterface.resultsPerPage = resultsPerPage;
        this.currentResultsPerPage = resultsPerPage;
    };
    ResultsPerPage.prototype.updateQueryStateModelResultsPerPage = function () {
        this.queryStateModel.set(QueryStateModel_1.QueryStateModel.attributesEnum.numberOfResults, this.currentResultsPerPage);
    };
    ResultsPerPage.prototype.logAnalyticsEvent = function (analyticCause) {
        this.usageAnalytics.logCustomEvent(analyticCause, { currentResultsPerPage: this.currentResultsPerPage }, this.element);
    };
    ResultsPerPage.prototype.executeQuery = function () {
        this.queryController.executeQuery({
            ignoreWarningSearchEvent: true,
            keepLastSearchUid: true,
            origin: this
        });
    };
    ResultsPerPage.prototype.handleQueryStateModelChanged = function () {
        var resultsPerPage = this.getInitialChoice();
        this.updateResultsPerPage(resultsPerPage);
    };
    ResultsPerPage.prototype.getInitialChoice = function () {
        var firstDisplayedChoice = this.options.choicesDisplayed[0];
        var configuredChoice = this.options.initialChoice;
        var queryStateModelChoice = this.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.numberOfResults);
        var queryStateModelChoiceIsNotDefault = queryStateModelChoice !== firstDisplayedChoice;
        if (queryStateModelChoiceIsNotDefault && this.isValidChoice(queryStateModelChoice)) {
            return queryStateModelChoice;
        }
        if (configuredChoice !== undefined) {
            if (this.isValidChoice(configuredChoice)) {
                return configuredChoice;
            }
            this.logInvalidConfiguredChoiceWarning();
        }
        return firstDisplayedChoice;
    };
    ResultsPerPage.prototype.isValidChoice = function (choice) {
        return this.options.choicesDisplayed.indexOf(choice) !== -1;
    };
    ResultsPerPage.prototype.logInvalidConfiguredChoiceWarning = function () {
        var configuredChoice = this.options.initialChoice;
        var validChoices = this.options.choicesDisplayed;
        this.logger.warn("The choice " + configuredChoice + " is not within the choices displayed. Consider setting a value that is valid: " + validChoices + ". The first choice will be selected instead.");
    };
    ResultsPerPage.prototype.initComponent = function () {
        this.span = Dom_1.$$('span', {
            className: 'coveo-results-per-page-text'
        }, Strings_1.l('ResultsPerPage')).el;
        this.element.appendChild(this.span);
        this.list = Dom_1.$$('ul', {
            className: 'coveo-results-per-page-list'
        }).el;
        this.element.appendChild(this.list);
    };
    ResultsPerPage.prototype.render = function () {
        var _this = this;
        Dom_1.$$(this.span).removeClass('coveo-results-per-page-no-results');
        var numResultsList = this.options.choicesDisplayed;
        var _loop_1 = function () {
            var listItem = Dom_1.$$('li', {
                className: 'coveo-results-per-page-list-item',
                tabindex: 0,
                ariaLabel: Strings_1.l('DisplayResultsPerPage', numResultsList[i].toString())
            });
            if (numResultsList[i] == this_1.currentResultsPerPage) {
                listItem.addClass('coveo-active');
            }
            (function (resultsPerPage) {
                var clickAction = function () { return _this.handleClickPage(numResultsList[resultsPerPage]); };
                listItem.on('click', clickAction);
                listItem.on('keyup', KeyboardUtils_1.KeyboardUtils.keypressAction(KeyboardUtils_1.KEYBOARD.ENTER, clickAction));
            })(i);
            listItem.el.appendChild(Dom_1.$$('a', {
                className: 'coveo-results-per-page-list-item-text'
            }, numResultsList[i].toString()).el);
            this_1.list.appendChild(listItem.el);
        };
        var this_1 = this;
        for (var i = 0; i < numResultsList.length; i++) {
            _loop_1();
        }
    };
    ResultsPerPage.prototype.handleQueryError = function () {
        this.reset();
    };
    ResultsPerPage.prototype.handleNoResults = function () {
        this.reset();
    };
    ResultsPerPage.prototype.handleQuerySuccess = function (data) {
        if (this.searchInterface.isResultsPerPageModifiedByPipeline) {
            this.logger.info('Results per page was modified by backend code (query pipeline). ResultsPerPage component will be hidden', this);
            this.reset();
            var resultsPerPage = this.getInitialChoice();
            this.updateResultsPerPage(resultsPerPage);
            return;
        }
        if (data.results.results.length != 0) {
            this.reset();
            this.render();
        }
    };
    ResultsPerPage.prototype.handleClickPage = function (resultsPerPage) {
        Assert_1.Assert.exists(resultsPerPage);
        this.setResultsPerPage(resultsPerPage);
    };
    ResultsPerPage.prototype.reset = function () {
        Dom_1.$$(this.span).addClass('coveo-results-per-page-no-results');
        Dom_1.$$(this.list).empty();
    };
    ResultsPerPage.ID = 'ResultsPerPage';
    ResultsPerPage.doExport = function () {
        GlobalExports_1.exportGlobally({
            ResultsPerPage: ResultsPerPage
        });
    };
    /**
     * The options for the ResultsPerPage
     * @componentOptions
     */
    ResultsPerPage.options = {
        /**
         * Specifies the possible values of number of results to display per page that the end user can select from.
         *
         * See also {@link ResultsPerPage.options.initialChoice}.
         *
         * Default value is `[10, 25, 50, 100]`.
         */
        choicesDisplayed: ComponentOptions_1.ComponentOptions.buildCustomListOption(function (list) {
            var values = _.map(list, function (value) {
                return parseInt(value, 10);
            });
            return values.length == 0 ? null : values;
        }, {
            defaultFunction: function () {
                if (DeviceUtils_1.DeviceUtils.isMobileDevice()) {
                    return [10, 25, 50];
                }
                else {
                    return [10, 25, 50, 100];
                }
            }
        }),
        /**
         * Specifies the value to select by default for the number of results to display per page.
         *
         * Default value is the first value of {@link ResultsPerPage.options.choicesDisplayed}.
         */
        initialChoice: ComponentOptions_1.ComponentOptions.buildNumberOption()
    };
    return ResultsPerPage;
}(Component_1.Component));
exports.ResultsPerPage = ResultsPerPage;
Initialization_1.Initialization.registerAutoCreateComponent(ResultsPerPage);


/***/ }),

/***/ 475:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=ResultsPerPage__f1482a259202dfb4bd91.js.map