webpackJsonpCoveo__temporary([58],{

/***/ 265:
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
var Assert_1 = __webpack_require__(5);
var QueryEvents_1 = __webpack_require__(10);
var Dom_1 = __webpack_require__(1);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var QueryStateModel_1 = __webpack_require__(13);
var Initialization_1 = __webpack_require__(2);
var _ = __webpack_require__(0);
var GlobalExports_1 = __webpack_require__(3);
__webpack_require__(625);
/**
 * The Triggers component enables the use of triggers (`notify`, `execute`, `query`, `redirect`) generated by the Coveo
 * Search API (see [Trigger](https://developers.coveo.com/x/lIM9AQ)) in the query pipeline (see
 * [Managing the Query Pipeline](https://developers.coveo.com/x/KYOy)).
 */
var Triggers = /** @class */ (function (_super) {
    __extends(Triggers, _super);
    /**
     * Creates a new Triggers component.
     * @param element The HTMLElement on which to instantiate the component.
     * @param options The options for the Triggers component.
     * @param bindings The bindings that the component requires to function normally. If not set, these will be
     * automatically resolved (with a slower execution time).
     * @param _window The window on which to execute the triggers.
     */
    function Triggers(element, options, bindings, _window) {
        var _this = _super.call(this, element, Triggers.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this._window = _window;
        _this._window = _this._window || window;
        _this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Triggers, options);
        Assert_1.Assert.exists(element);
        Assert_1.Assert.exists(_this.options);
        _this.notifications = [];
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.querySuccess, _this.handleProcessNewQueryResults);
        return _this;
    }
    Triggers.prototype.handleProcessNewQueryResults = function (data) {
        var _this = this;
        Assert_1.Assert.exists(data);
        Assert_1.Assert.exists(data.results);
        Dom_1.$$(this.element).empty();
        this.notifications.length = 0;
        var showElement = false;
        if (data.results.triggers === undefined) {
            Dom_1.$$(this.element).toggleClass('coveo-visible', showElement);
            return;
        }
        this.executeTriggers(data.results.triggers, 'notify', function (trigger) {
            _this.usageAnalytics.logCustomEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.triggerNotify, {
                notification: trigger.content
            }, _this.element);
            _this.notifications.push(trigger.content);
            _this.element.appendChild(Dom_1.$$('div', { className: 'coveo-trigger-notify' }, trigger.content).el);
            showElement = true;
        });
        this.executeTriggers(data.results.triggers, 'redirect', function (trigger) {
            _this.usageAnalytics.logCustomEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.triggerRedirect, {
                redirectedTo: trigger.content
            }, _this.element);
            _this._window.location.replace(trigger.content);
        }, true);
        this.executeTriggers(data.results.triggers, 'query', function (trigger) {
            _this.queryStateModel.set(QueryStateModel_1.QueryStateModel.attributesEnum.q, trigger.content);
            _this.queryController.executeQuery({
                beforeExecuteQuery: function () {
                    _this.usageAnalytics.logCustomEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.triggerQuery, {
                        query: trigger.content
                    }, _this.element);
                }
            });
        }, true);
        this.executeTriggers(data.results.triggers, 'execute', function (trigger) {
            try {
                var func = _this._window['' + trigger.content.name];
                if (typeof func === 'function') {
                    var params = _.object(_.map(trigger.content.params, function (value, index) {
                        return ['param' + (index + 1), value];
                    }));
                    params['element'] = _this.element;
                    _this.usageAnalytics.logCustomEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.triggerExecute, {
                        executed: trigger.content.name
                    }, _this.element);
                    func.apply(_this._window, [params]);
                }
                else {
                    _this.logger.error("A trigger tried to call the function '" + trigger.content.name + "', which doesn't exist.", _this, data.query, trigger);
                }
            }
            catch (error) {
                _this.logger.error("A trigger called the function '" + trigger.content.name + "', which threw an error.", _this, data.query, trigger);
            }
        });
        Dom_1.$$(this.element).toggleClass('coveo-visible', showElement);
    };
    Triggers.prototype.executeTriggers = function (trigger, type, func, single) {
        if (single === void 0) { single = false; }
        var triggersOfType = _.filter(trigger, function (trigger) {
            return trigger.type == type;
        });
        var oneOrAllTriggers = _.take(triggersOfType, single ? 1 : Number.MAX_VALUE);
        _.each(oneOrAllTriggers, func);
    };
    Triggers.ID = 'Triggers';
    Triggers.options = {};
    Triggers.doExport = function () {
        GlobalExports_1.exportGlobally({
            Triggers: Triggers
        });
    };
    return Triggers;
}(Component_1.Component));
exports.Triggers = Triggers;
Initialization_1.Initialization.registerAutoCreateComponent(Triggers);


/***/ }),

/***/ 625:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=Triggers__0e0504a965c87ce7bb27.js.map