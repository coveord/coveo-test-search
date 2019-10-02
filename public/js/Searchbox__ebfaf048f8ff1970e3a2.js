webpackJsonpCoveo__temporary([6,8,13,18,20,48],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(6);
var ResultList_1 = __webpack_require__(84);
var Dom_1 = __webpack_require__(1);
var underscore_1 = __webpack_require__(0);
var Logger_1 = __webpack_require__(11);
var ResultListUtils = /** @class */ (function () {
    function ResultListUtils() {
    }
    ResultListUtils.hideIfInfiniteScrollEnabled = function (cmp) {
        var infiniteScrollEnabled = ResultListUtils.isInfiniteScrollEnabled(cmp.searchInterface.element);
        if (infiniteScrollEnabled) {
            cmp.disable();
            Dom_1.$$(cmp.element).hide();
            ResultListUtils.warnIfComponentNotNeeded(cmp);
        }
        else {
            cmp.enable();
            Dom_1.$$(cmp.element).unhide();
        }
    };
    ResultListUtils.isInfiniteScrollEnabled = function (root) {
        var resultList = ResultListUtils.getActiveResultList(root);
        return resultList ? !!resultList.options.enableInfiniteScroll : false;
    };
    ResultListUtils.scrollToTop = function (root) {
        var resultList = ResultListUtils.getActiveResultList(root);
        if (!resultList) {
            new Logger_1.Logger(this).warn('No active ResultList, scrolling to the top of the Window');
            return window.scrollTo(0, 0);
        }
        var scrollContainer = resultList.options.infiniteScrollContainer;
        if (typeof scrollContainer.scrollTo === 'function') {
            var searchInterfacePosition = resultList.searchInterface.element.getBoundingClientRect().top;
            scrollContainer.scrollTo(0, window.pageYOffset + searchInterfacePosition);
        }
        else {
            scrollContainer.scrollTop = 0;
        }
    };
    ResultListUtils.getActiveResultList = function (root) {
        var resultLists = ResultListUtils.getResultLists(root);
        return underscore_1.find(resultLists, function (resultList) { return !resultList.disabled; });
    };
    ResultListUtils.getResultLists = function (root) {
        return Dom_1.$$(root)
            .findAll("." + ResultListUtils.cssClass())
            .map(function (el) { return Component_1.Component.get(el, ResultList_1.ResultList); });
    };
    ResultListUtils.cssClass = function () {
        return Component_1.Component.computeCssClassName(ResultList_1.ResultList);
    };
    ResultListUtils.warnIfComponentNotNeeded = function (cmp) {
        var root = cmp.searchInterface.root;
        var allListsUseInfiniteScroll = ResultListUtils.allResultListsUseInfiniteScroll(root);
        allListsUseInfiniteScroll && ResultListUtils.notNeededComponentWarning(cmp);
    };
    ResultListUtils.allResultListsUseInfiniteScroll = function (root) {
        var listsWithInfiniteScrollDisabled = ResultListUtils.getResultLists(root).filter(function (resultList) { return !resultList.options.enableInfiniteScroll; });
        return listsWithInfiniteScrollDisabled.length === 0;
    };
    ResultListUtils.notNeededComponentWarning = function (cmp) {
        var cmpCssClass = Component_1.Component.computeCssClassNameForType(cmp.type);
        var message = "The " + cmpCssClass + " component is not needed because all " + ResultListUtils.cssClass() + " components have enableInfiniteScroll set to 'true'.\n    For the best performance, remove the " + cmpCssClass + " component from your search page.";
        new Logger_1.Logger(cmp).warn(message);
    };
    return ResultListUtils;
}());
exports.ResultListUtils = ResultListUtils;


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Result_1 = __webpack_require__(47);
var Result_2 = __webpack_require__(47);
exports.notWordStart = ' ()[],$@\'"';
exports.notInWord = ' ()[],:';
exports.Basic = {
    basicExpressions: ['Word', 'DoubleQuoted'],
    grammars: {
        DoubleQuoted: '"[NotDoubleQuote]"',
        NotDoubleQuote: /[^"]*/,
        SingleQuoted: "'[NotSingleQuote]'",
        NotSingleQuote: /[^']*/,
        Number: /-?(0|[1-9]\d*)(\.\d+)?/,
        Word: function (input, end, expression) {
            var regex = new RegExp('[^' + exports.notWordStart.replace(/(.)/g, '\\$1') + '][^' + exports.notInWord.replace(/(.)/g, '\\$1') + ']*');
            var groups = input.match(regex);
            if (groups != null && groups.index != 0) {
                groups = null;
            }
            var result = new Result_1.Result(groups != null ? groups[0] : null, expression, input);
            if (result.isSuccess() && end && input.length > result.value.length) {
                return new Result_2.EndOfInputResult(result);
            }
            return result;
        }
    }
};


/***/ }),

/***/ 132:
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
var GlobalExports_1 = __webpack_require__(3);
var QueryEvents_1 = __webpack_require__(10);
var StandaloneSearchInterfaceEvents_1 = __webpack_require__(90);
var Assert_1 = __webpack_require__(5);
var Model_1 = __webpack_require__(16);
var QueryStateModel_1 = __webpack_require__(13);
var Strings_1 = __webpack_require__(7);
var Dom_1 = __webpack_require__(1);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var Component_1 = __webpack_require__(6);
var ComponentOptions_1 = __webpack_require__(8);
var Initialization_1 = __webpack_require__(2);
var QueryboxQueryParameters_1 = __webpack_require__(469);
var MagicBox_1 = __webpack_require__(208);
var Grammar_1 = __webpack_require__(170);
var QueryboxOptionsProcessing_1 = __webpack_require__(470);
__webpack_require__(529);
/**
 * The `Querybox` component renders an input which the end user can interact with to enter and submit queries.
 *
 * When the end user submits a search request, the `Querybox` component triggers a query and logs the corresponding
 * usage analytics data.
 *
 * For technical reasons, it is necessary to instantiate this component on a `div` element rather than on an `input`
 * element.
 *
 * See also the [`Searchbox`]{@link Searchbox} component, which can automatically instantiate a `Querybox` along with an
 * optional [`SearchButton`]{@link SearchButton} component.
 */
var Querybox = /** @class */ (function (_super) {
    __extends(Querybox, _super);
    /**
     * Creates a new `Querybox component`. Creates a new `Coveo.Magicbox` instance and wraps the Magicbox methods
     * (`onblur`, `onsubmit` etc.). Binds event on `buildingQuery` and before redirection (for standalone box).
     * @param element The HTMLElement on which to instantiate the component. This cannot be an HTMLInputElement for
     * technical reasons.
     * @param options The options for the `Querybox` component.
     * @param bindings The bindings that the component requires to function normally. If not set, these will be
     * automatically resolved (with a slower execution time).
     */
    function Querybox(element, options, bindings) {
        var _this = _super.call(this, element, Querybox.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        if (element instanceof HTMLInputElement) {
            _this.logger.error('Querybox cannot be used on an HTMLInputElement');
        }
        _this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Querybox, options);
        new QueryboxOptionsProcessing_1.QueryboxOptionsProcessing(_this).postProcess();
        Dom_1.$$(_this.element).toggleClass('coveo-query-syntax-disabled', _this.options.enableQuerySyntax == false);
        _this.magicBox = MagicBox_1.createMagicBox(element, new Grammar_1.Grammar('Query', {
            Query: '[Term*][Spaces?]',
            Term: '[Spaces?][Word]',
            Spaces: / +/,
            Word: /[^ ]+/
        }), {
            inline: true
        });
        var input = Dom_1.$$(_this.magicBox.element).find('input');
        if (input) {
            Dom_1.$$(input).setAttribute('aria-label', _this.options.placeholder || Strings_1.l('Search'));
        }
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
        _this.bind.onRootElement(StandaloneSearchInterfaceEvents_1.StandaloneSearchInterfaceEvents.beforeRedirect, function () { return _this.updateQueryState(); });
        _this.bind.onQueryState(Model_1.MODEL_EVENTS.CHANGE_ONE, QueryStateModel_1.QUERY_STATE_ATTRIBUTES.Q, function (args) {
            return _this.handleQueryStateChanged(args);
        });
        if (_this.options.enableSearchAsYouType) {
            Dom_1.$$(_this.element).addClass('coveo-search-as-you-type');
            _this.magicBox.onchange = function () {
                _this.searchAsYouType();
            };
        }
        _this.magicBox.onsubmit = function () {
            _this.submit();
        };
        _this.magicBox.onblur = function () {
            _this.updateQueryState();
        };
        _this.magicBox.onclear = function () {
            _this.updateQueryState();
            if (_this.options.triggerQueryOnClear) {
                _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxClear, {});
                _this.triggerNewQuery(false);
            }
        };
        return _this;
    }
    /**
     * Adds the current content of the input to the query and triggers a query if the current content of the input has
     * changed since last submit.
     *
     * Also logs the `serachboxSubmit` event in the usage analytics.
     */
    Querybox.prototype.submit = function () {
        this.magicBox.clearSuggestion();
        this.updateQueryState();
        this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxSubmit, {});
        this.triggerNewQuery(false);
    };
    /**
     * Sets the content of the input.
     *
     * @param text The string to set in the input.
     */
    Querybox.prototype.setText = function (text) {
        this.magicBox.setText(text);
        this.updateQueryState();
    };
    /**
     * Clears the content of the input.
     *
     * See also the [`triggerQueryOnClear`]{@link Querybox.options.triggerQueryOnClear} option.
     */
    Querybox.prototype.clear = function () {
        this.magicBox.clear();
    };
    /**
     * Gets the content of the input.
     *
     * @returns {string} The content of the input.
     */
    Querybox.prototype.getText = function () {
        return this.magicBox.getText();
    };
    /**
     * Gets the result from the input.
     *
     * @returns {Result} The result.
     */
    Querybox.prototype.getResult = function () {
        return this.magicBox.getResult();
    };
    /**
     * Gets the displayed result from the input.
     *
     * @returns {Result} The displayed result.
     */
    Querybox.prototype.getDisplayedResult = function () {
        return this.magicBox.getDisplayedResult();
    };
    /**
     * Gets the current cursor position in the input.
     *
     * @returns {number} The cursor position (index starts at 0).
     */
    Querybox.prototype.getCursor = function () {
        return this.magicBox.getCursor();
    };
    /**
     * Gets the result at cursor position.
     *
     * @param match {string | { (result): boolean }} The match condition.
     *
     * @returns {Result[]} The result.
     */
    Querybox.prototype.resultAtCursor = function (match) {
        return this.magicBox.resultAtCursor(match);
    };
    Querybox.prototype.handleBuildingQuery = function (args) {
        Assert_1.Assert.exists(args);
        Assert_1.Assert.exists(args.queryBuilder);
        this.updateQueryState();
        this.lastQuery = this.magicBox.getText();
        new QueryboxQueryParameters_1.QueryboxQueryParameters(this.options).addParameters(args.queryBuilder, this.lastQuery);
    };
    Querybox.prototype.triggerNewQuery = function (searchAsYouType) {
        clearTimeout(this.searchAsYouTypeTimeout);
        var text = this.magicBox.getText();
        if (this.lastQuery != text && text != null) {
            this.lastQuery = text;
            this.queryController.executeQuery({
                searchAsYouType: searchAsYouType,
                logInActionsHistory: true
            });
        }
    };
    Querybox.prototype.updateQueryState = function () {
        this.queryStateModel.set(QueryStateModel_1.QueryStateModel.attributesEnum.q, this.magicBox.getText());
    };
    Querybox.prototype.handleQueryStateChanged = function (args) {
        Assert_1.Assert.exists(args);
        var q = args.value;
        if (q != this.magicBox.getText()) {
            this.magicBox.setText(q);
        }
    };
    Querybox.prototype.searchAsYouType = function () {
        var _this = this;
        clearTimeout(this.searchAsYouTypeTimeout);
        this.searchAsYouTypeTimeout = window.setTimeout(function () {
            _this.usageAnalytics.logSearchAsYouType(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxAsYouType, {});
            _this.triggerNewQuery(true);
        }, this.options.searchAsYouTypeDelay);
    };
    Querybox.ID = 'Querybox';
    Querybox.doExport = function () {
        GlobalExports_1.exportGlobally({
            Querybox: Querybox,
            QueryboxQueryParameters: QueryboxQueryParameters_1.QueryboxQueryParameters
        });
    };
    /**
     * The options for the Querybox.
     * @componentOptions
     */
    Querybox.options = {
        /**
         * Whether to enable the search-as-you-type feature.
         *
         * Default value is `false`.
         */
        enableSearchAsYouType: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, section: 'Advanced Options' }),
        /**
         * If the [`enableSearchAsYouType`]{@link Querybox.options.enableSearchAsYouType} option is `true`, specifies how
         * long to wait (in milliseconds) between each key press before triggering a new query.
         *
         * Default value is `50`. Minimum value is `0`
         */
        searchAsYouTypeDelay: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 50, min: 0, section: 'Advanced Options' }),
        /**
         * Specifies whether to interpret special query syntax (e.g., `@objecttype=message`) when the end user types
         * a query in the `Querybox` (see
         * [Coveo Query Syntax Reference](http://www.coveo.com/go?dest=adminhelp70&lcid=9&context=10005)). Setting this
         * option to `true` also causes the `Querybox` to highlight any query syntax.
         *
         * Regardless of the value of this option, the Coveo Cloud REST Search API always interprets expressions surrounded
         * by double quotes (`"`) as exact phrase match requests.
         *
         * See also [`enableLowercaseOperators`]{@link Querybox.options.enableLowercaseOperators}.
         *
         * **Notes:**
         * > * End user preferences can override the value you specify for this option.
         * >
         * > If the end user selects a value other than **Automatic** for the **Enable query syntax** setting (see
         * > the [`enableQuerySyntax`]{@link ResultsPreferences.options.enableQuerySyntax} option of the
         * > [`ResultsPreferences`]{@link ResultsPreferences} component), the end user preference takes precedence over this
         * > option.
         * >
         * > * On-premises versions of the Coveo Search API require this option to be set to `true` in order to interpret
         * > expressions surrounded by double quotes (`"`) as exact phrase match requests.
         *
         * Default value is `false`.
         */
        enableQuerySyntax: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, section: 'Advanced Options' }),
        /**
         * Specifies whether to expand basic expression keywords containing wildcards characters (`*`) to the possible
         * matching keywords in order to broaden the query (see
         * [Using Wildcards in Queries](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=359)).
         *
         * See also [`enableQuestionMarks`]{@link Querybox.options.enableQuestionMarks}.
         *
         *  **Note:**
         * > If you are using an on-premises version of the Coveo Search API, you need to set the
         * > [`enableQuerySyntax`]{@link Querybox.options.enableQuerySyntax} option to `true` to be able to set
         * > `enableWildcards` to `true`.
         *
         * Default value is `false`.
         */
        enableWildcards: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, section: 'Advanced Options' }),
        /**
         * If [`enableWildcards`]{@link Querybox.options.enableWildcards} is `true`, specifies whether to expand basic
         * expression keywords containing question mark characters (`?`) to the possible matching keywords in order to
         * broaden the query (see
         * [Using Wildcards in Queries](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=359)).
         *
         * **Note:**
         * > If you are using an on-premises version of the Coveo Search API, you also need to set the
         * > [`enableQuerySyntax`]{@link Querybox.options.enableQuerySyntax} option to `true` in order to be able to set
         * > `enableQuestionMarks` to `true`.
         *
         * Default value is `false`.
         */
        enableQuestionMarks: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, depend: 'enableWildcards' }),
        /**
         * If the [`enableQuerySyntax`]{@link Querybox.options.enableQuerySyntax} option is `true`, specifies whether to
         * interpret the `AND`, `NOT`, `OR`, and `NEAR` keywords in the `Querybox` as query operators in the query, even if
         * the end user types those keywords in lowercase.
         *
         * This option applies to all query operators (see
         * [Coveo Query Syntax Reference](http://www.coveo.com/go?dest=adminhelp70&lcid=9&context=10005)).
         *
         * **Example:**
         * > If this option and the `enableQuerySyntax` option are both `true`, the Coveo Platform interprets the `near`
         * > keyword in a query such as `service center near me` as the `NEAR` query operator (not as a query term).
         *
         * > Otherwise, if the `enableQuerySyntax` option is `true` and this option is `false`, the end user has to type the
         * > `NEAR` keyword in uppercase for the Coveo Platform to interpret it as a query operator.
         *
         * Default value is `false`.
         */
        enableLowercaseOperators: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, depend: 'enableQuerySyntax' }),
        /**
         * Whether to convert a basic expression containing at least a certain number of keywords (see the
         * [`partialMatchKeywords`]{@link Querybox.options.partialMatchKeywords} option) to a *partial match expression*, so
         * that items containing at least a certain number of those keywords (see the
         * [`partialMatchThreshold`]{@link Querybox.options.partialMatchThreshold} option) will match the expression.
         *
         * **Notes:**
         *
         * > - Only the basic expression of the query (see [`q`]{@link q}) can be converted to a partial match expression.
         * > - When the [`enableQuerySyntax`]{@link Querybox.options.enableQuerySyntax} option is set to `true`, this
         * > feature has no effect on a basic expression containing query syntax (field expressions, operators, etc.).
         *
         * **Example:**
         *
         * > With the following markup configuration, if a basic expression contains at least 4 keywords, items containing
         * > at least 75% of those keywords (round up) will match the query.
         * > ```html
         * > <div class='CoveoQuerybox' data-enable-partial-match='true' data-partial-match-keywords='4' data-partial-match-threshold='75%'></div>
         * > ```
         * > For instance, if the basic expression is `Coveo custom component configuration help`, items containing
         * > all 5 of those keywords, or 4 of them (75% of 5 rounded up) will match the query.
         *
         * Default value is `false`, which implies that an item must contain all of the basic expression keywords to match
         * the query.
         * @notSupportedIn salesforcefree
         */
        enablePartialMatch: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
        /**
         * The minimum number of keywords that need to be present in a basic expression to convert it to a partial match
         * expression.
         *
         * See also the [`partialMatchThreshold`]{@link Querybox.options.partialMatchThreshold} option.
         *
         * **Notes:**
         * > - This option has no meaning unless the [`enablePartialMatch`]{@link Querybox.options.enablePartialMatch}
         * > option is set to `true`.
         * > - Repeated keywords in a basic expression count as a single keyword.
         * > - Thesaurus expansions in a basic expression count towards the `partialMatchKeywords` count.
         * > - Stemming expansions **do not** count towards the `partialMatchKeywords` count.
         *
         * **Example:**
         * > If the `partialMatchKeywords` value is `7`, the basic expression will have to contain at least 7 keywords
         * > to be converted to a partial match expression.
         *
         * Default value is `5`.
         * @notSupportedIn salesforcefree
         */
        partialMatchKeywords: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 5, min: 1, depend: 'enablePartialMatch' }),
        /**
         * An absolute or relative value indicating the minimum number (rounded up) of partial match expression keywords an
         * item must contain to match the expression.
         *
         * See also the [`partialMatchKeywords`]{@link Querybox.options.partialMatchKeywords} option.
         *
         * **Notes:**
         * > - This option has no meaning unless the [`enablePartialMatch`]{@link Querybox.options.enablePartialMatch}
         * > option is set to `true`.
         * > - A keyword and its stemming expansions count as a single keyword when evaluating whether an item meets the
         * > `partialMatchThreshold`.
         *
         * **Examples:**
         * > If the `partialMatchThreshold` value is `50%` and the partial match expression contains exactly 9 keywords,
         * > items will have to contain at least 5 of those keywords to match the query (50% of 9, rounded up).
         *
         * > With the same configuration, if the partial match expression contains exactly 12 keywords, items will have to
         * > contain at least 6 of those keywords to match the query (50% of 12).
         *
         * > If the `partialMatchThreshold` value is `2`, items will always have to contain at least 2 of the partial match
         * > expression keywords to match the query, no matter how many keywords the partial match expression actually
         * > contains.
         *
         * Default value is `50%`.
         * @notSupportedIn salesforcefree
         */
        partialMatchThreshold: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: '50%', depend: 'enablePartialMatch' }),
        /**
         * Specifies whether to trigger a query when clearing the `Querybox`.
         *
         * Default value is `false`.
         */
        triggerQueryOnClear: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false })
    };
    return Querybox;
}(Component_1.Component));
exports.Querybox = Querybox;
Initialization_1.Initialization.registerAutoCreateComponent(Querybox);


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var SVGDom = /** @class */ (function () {
    function SVGDom() {
    }
    SVGDom.addClassToSVGInContainer = function (svgContainer, classToAdd) {
        var svgElement = svgContainer.querySelector('svg');
        svgElement.setAttribute('class', "" + SVGDom.getClass(svgElement) + classToAdd);
    };
    SVGDom.removeClassFromSVGInContainer = function (svgContainer, classToRemove) {
        var svgElement = svgContainer.querySelector('svg');
        svgElement.setAttribute('class', SVGDom.getClass(svgElement).replace(classToRemove, ''));
    };
    SVGDom.addStyleToSVGInContainer = function (svgContainer, styleToAdd) {
        var svgElement = svgContainer.querySelector('svg');
        _.each(styleToAdd, function (styleValue, styleKey) {
            svgElement.style[styleKey] = styleValue;
        });
    };
    SVGDom.getClass = function (svgElement) {
        var className = svgElement.getAttribute('class');
        return className ? className + ' ' : '';
    };
    return SVGDom;
}());
exports.SVGDom = SVGDom;


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpressionRef_1 = __webpack_require__(454);
var ExpressionOptions_1 = __webpack_require__(456);
var ExpressionRegExp_1 = __webpack_require__(458);
var _ = __webpack_require__(0);
var ExpressionFunction_1 = __webpack_require__(459);
var ExpressionConstant_1 = __webpack_require__(205);
var ExpressionList_1 = __webpack_require__(460);
var Grammar = /** @class */ (function () {
    function Grammar(start, expressions) {
        if (expressions === void 0) { expressions = {}; }
        this.expressions = {};
        this.start = new ExpressionRef_1.ExpressionRef(start, null, 'start', this);
        this.addExpressions(expressions);
    }
    Grammar.prototype.addExpressions = function (expressions) {
        var _this = this;
        _.each(expressions, function (basicExpression, id) {
            _this.addExpression(id, basicExpression);
        });
    };
    Grammar.prototype.addExpression = function (id, basicExpression) {
        if (id in this.expressions) {
            throw new Error('Grammar already contain the id:' + id);
        }
        this.expressions[id] = Grammar.buildExpression(basicExpression, id, this);
    };
    Grammar.prototype.getExpression = function (id) {
        return this.expressions[id];
    };
    Grammar.prototype.parse = function (value) {
        return this.start.parse(value, true);
    };
    Grammar.buildExpression = function (value, id, grammar) {
        var type = typeof value;
        if (type == 'undefined') {
            throw new Error('Invalid Expression: ' + value);
        }
        if (_.isString(value)) {
            return this.buildStringExpression(value, id, grammar);
        }
        if (_.isArray(value)) {
            return new ExpressionOptions_1.ExpressionOptions(_.map(value, function (v, i) { return new ExpressionRef_1.ExpressionRef(v, null, id + '_' + i, grammar); }), id);
        }
        if (_.isRegExp(value)) {
            return new ExpressionRegExp_1.ExpressionRegExp(value, id, grammar);
        }
        if (_.isFunction(value)) {
            return new ExpressionFunction_1.ExpressionFunction(value, id, grammar);
        }
        throw new Error('Invalid Expression: ' + value);
    };
    Grammar.buildStringExpression = function (value, id, grammar) {
        var matchs = Grammar.stringMatch(value, Grammar.spliter);
        var expressions = _.map(matchs, function (match, i) {
            if (match[1]) {
                // Ref
                var ref = match[1];
                var occurrence = match[3] ? Number(match[3]) : match[2] || null;
                return new ExpressionRef_1.ExpressionRef(ref, occurrence, id + '_' + i, grammar);
            }
            else {
                // Constant
                return new ExpressionConstant_1.ExpressionConstant(match[4], id + '_' + i);
            }
        });
        if (expressions.length == 1) {
            var expression = expressions[0];
            expression.id = id;
            return expression;
        }
        else {
            return new ExpressionList_1.ExpressionList(expressions, id);
        }
    };
    Grammar.stringMatch = function (str, re) {
        var groups = [];
        var cloneRegExp = new RegExp(re.source, 'g');
        var group = cloneRegExp.exec(str);
        while (group !== null) {
            groups.push(group);
            group = cloneRegExp.exec(str);
        }
        return groups;
    };
    Grammar.spliter = /\[(\w+)(\*|\+|\?|\{([1-9][0-9]*)\})?\]|(.[^\[]*)/;
    return Grammar;
}());
exports.Grammar = Grammar;


/***/ }),

/***/ 171:
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalExports_1 = __webpack_require__(3);
var Core_1 = __webpack_require__(25);
__webpack_require__(524);
var TemplateComponentOptions_1 = __webpack_require__(58);
var ResultListTableRenderer_1 = __webpack_require__(428);
var TemplateToHtml_1 = __webpack_require__(429);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
exports.resultPerRow = 3;
/**
 * This component renders a preview of the top query results matching the currently focused query suggestion in the search box.
 *
 * As such, this component only works when an [`Omnibox`]{@link Omnibox} whose [`enableQuerySuggestAddon`]{@link Omnibox.options.enableQuerySuggestAddon} option is set to `true` is present in the search interface.
 *
 * Moreover, this component requires at least one [result template](https://docs.coveo.com/en/413/) in its markup configuration to be able to render previews.
 *
 * **Example**
 * ```
 *   <div class="CoveoQuerySuggestPreview">
 *    <script class="result-template" type="text/html">
 *      <div class="coveo-result-frame">
 *        <a class="CoveoResultLink"></a>
 *      </div>
 *    </script>
 *   </div>
 * ```
 *
 * See [Providing Query Suggestion Result Previews](https://docs.coveo.com/en/340/#providing-query-suggestion-result-previews).
 */
var QuerySuggestPreview = /** @class */ (function (_super) {
    __extends(QuerySuggestPreview, _super);
    /**
     * Creates a new QuerySuggestPreview component.
     * @param element The HTMLElement on which to instantiate the component.
     * @param options The options for the QuerySuggestPreview component.
     * @param bindings The bindings that the component requires to function normally. If not set, these will be
     * automatically resolved (with a slower execution time).
     */
    function QuerySuggestPreview(element, options, bindings) {
        var _this = _super.call(this, element, QuerySuggestPreview.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.currentlyDisplayedResults = [];
        _this.options = Core_1.ComponentOptions.initComponentOptions(element, QuerySuggestPreview, options);
        if (!_this.options.resultTemplate) {
            _this.logger.warn("Specifying a result template is required for the 'QuerySuggestPreview' component to work properly. See ", "https://docs.coveo.com/340/#providing-query-suggestion-result-previews");
        }
        _this.bind.onRootElement(Core_1.OmniboxEvents.querySuggestGetFocus, function (args) { return _this.querySuggestGetFocus(args); });
        _this.bind.onRootElement(Core_1.OmniboxEvents.querySuggestRendered, function () {
            _this.handleAfterComponentInit();
        });
        _this.bind.onRootElement(Core_1.OmniboxEvents.querySuggestLoseFocus, function () {
            _this.handleFocusOut();
        });
        _this.omniboxAnalytics = _this.searchInterface.getOmniboxAnalytics();
        return _this;
    }
    Object.defineProperty(QuerySuggestPreview.prototype, "displayedResults", {
        /**
         * Gets the list of currently displayed result.
         * @returns {IQueryResult[]}
         */
        get: function () {
            return this.currentlyDisplayedResults;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestPreview.prototype, "templateToHtml", {
        get: function () {
            var templateToHtmlArgs = {
                searchInterface: this.searchInterface,
                queryStateModel: this.queryStateModel,
                resultTemplate: this.options.resultTemplate
            };
            return new TemplateToHtml_1.TemplateToHtml(templateToHtmlArgs);
        },
        enumerable: true,
        configurable: true
    });
    QuerySuggestPreview.prototype.handleFocusOut = function () {
        clearTimeout(this.timer);
        this.timer = null;
        this.previousSuggestionHovered = null;
        this.currentlyDisplayedResults = [];
    };
    QuerySuggestPreview.prototype.updatePreviewContainer = function (container) {
        if (!this.options.previewWidth) {
            return;
        }
        container.style.width = this.options.previewWidth + "px";
    };
    QuerySuggestPreview.prototype.updateWidthOfSuggestionContainer = function (container) {
        if (!this.options.suggestionWidth) {
            return;
        }
        container.style.width = this.options.suggestionWidth + "px";
    };
    QuerySuggestPreview.prototype.handleAfterComponentInit = function () {
        var suggestionContainer = Core_1.$$(this.root).find('.coveo-magicbox-suggestions');
        if (suggestionContainer) {
            this.updateWidthOfSuggestionContainer(suggestionContainer);
        }
        var previewContainer = Core_1.$$(this.root).find('.coveo-preview-container');
        if (previewContainer) {
            this.updatePreviewContainer(previewContainer);
        }
    };
    QuerySuggestPreview.prototype.buildPreviewHeader = function (suggestion) {
        var text = this.options.headerText + " \"" + suggestion + "\"";
        var header = Core_1.$$('h4', { className: 'coveo-preview-header' }, text).el;
        this.previewContainer.appendChild(header);
    };
    QuerySuggestPreview.prototype.buildResultsContainer = function () {
        return Core_1.$$('div', { className: 'coveo-preview-results' }).el;
    };
    Object.defineProperty(QuerySuggestPreview.prototype, "previewContainer", {
        get: function () {
            return Core_1.$$(this.root).find('.coveo-preview-container');
        },
        enumerable: true,
        configurable: true
    });
    QuerySuggestPreview.prototype.querySuggestGetFocus = function (args) {
        var _this = this;
        if (!this.previewContainer) {
            return;
        }
        if (this.previousSuggestionHovered === args.suggestion) {
            return;
        }
        if (args.suggestion === '') {
            return;
        }
        this.previousSuggestionHovered = args.suggestion;
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.currentlyRenderedSuggestion = args.suggestion;
            _this.logShowQuerySuggestPreview();
            _this.executeQueryHover();
        }, this.options.executeQueryDelay);
    };
    QuerySuggestPreview.prototype.executeQueryHover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var previousQueryOptions, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        previousQueryOptions = this.queryController.getLastQuery();
                        previousQueryOptions.q = this.currentlyRenderedSuggestion;
                        previousQueryOptions.numberOfResults = this.options.numberOfPreviewResults;
                        return [4 /*yield*/, this.queryController.getEndpoint().search(previousQueryOptions)];
                    case 1:
                        results = _a.sent();
                        Core_1.$$(this.previewContainer).empty();
                        this.currentlyDisplayedResults = [];
                        if (!results) {
                            return [2 /*return*/];
                        }
                        this.buildPreviewHeader(this.currentlyRenderedSuggestion);
                        this.buildResultsPreview(results);
                        return [2 /*return*/];
                }
            });
        });
    };
    QuerySuggestPreview.prototype.buildResultsPreview = function (results) {
        return __awaiter(this, void 0, void 0, function () {
            var resultsContainer, buildResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultsContainer = this.buildResultsContainer();
                        this.previewContainer.appendChild(resultsContainer);
                        this.setupRenderer(resultsContainer);
                        return [4 /*yield*/, this.templateToHtml.buildResults(results, 'preview', this.currentlyDisplayedResults)];
                    case 1:
                        buildResults = _a.sent();
                        if (!(buildResults.length > 0)) {
                            return [2 /*return*/];
                        }
                        this.updateResultElement(buildResults);
                        this.addOnClickListener(buildResults);
                        this.renderer.renderResults(buildResults, true, function (result) { });
                        return [2 /*return*/];
                }
            });
        });
    };
    QuerySuggestPreview.prototype.updateResultElement = function (elements) {
        var _this = this;
        var resultAvailableSpace = elements.length === 4 ? '50%' : '33%';
        elements.forEach(function (element) {
            Core_1.$$(element).addClass('coveo-preview-selectable');
            Core_1.$$(element).on('keyboardSelect', function () {
                _this.handleSelect(element);
            });
            _this.updateResultPerRow(element, resultAvailableSpace);
        });
    };
    QuerySuggestPreview.prototype.handleSelect = function (element) {
        element.click();
        var link = Core_1.$$(element).find("." + Core_1.Component.computeCssClassNameForType('ResultLink'));
        if (link) {
            var resultLink = Core_1.Component.get(link);
            resultLink.openLinkAsConfigured() || resultLink.openLink();
        }
    };
    QuerySuggestPreview.prototype.addOnClickListener = function (results) {
        var _this = this;
        results.forEach(function (result) {
            var rank = results.indexOf(result);
            _this.bind.on(result, 'click', function (e) {
                _this.handleOnClick(e, result, rank);
            });
        });
    };
    QuerySuggestPreview.prototype.handleOnClick = function (e, element, rank) {
        this.logClickQuerySuggestPreview(rank, element);
    };
    QuerySuggestPreview.prototype.updateResultPerRow = function (element, value) {
        element.style.flex = "0 0 " + value;
    };
    QuerySuggestPreview.prototype.setupRenderer = function (resultsContainer) {
        var rendererOption = {
            resultsContainer: resultsContainer
        };
        var initParameters = {
            options: this.searchInterface.options.originalOptionsObject,
            bindings: this.bindings
        };
        var autoCreateComponentsFn = function (elem) { return Core_1.Initialization.automaticallyCreateComponentsInside(elem, initParameters); };
        this.renderer = new ResultListTableRenderer_1.ResultListTableRenderer(rendererOption, autoCreateComponentsFn);
    };
    QuerySuggestPreview.prototype.logShowQuerySuggestPreview = function () {
        this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.showQuerySuggestPreview, this.omniboxAnalytics.buildCustomDataForPartialQueries());
    };
    QuerySuggestPreview.prototype.logClickQuerySuggestPreview = function (displayedRank, element) {
        this.usageAnalytics.logCustomEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.clickQuerySuggestPreview, {
            suggestion: this.currentlyRenderedSuggestion,
            displayedRank: displayedRank
        }, element);
    };
    QuerySuggestPreview.ID = 'QuerySuggestPreview';
    QuerySuggestPreview.doExport = function () {
        GlobalExports_1.exportGlobally({
            QuerySuggestPreview: QuerySuggestPreview
        });
    };
    /**
     * The options for the component
     * @componentOptions
     */
    QuerySuggestPreview.options = {
        resultTemplate: TemplateComponentOptions_1.TemplateComponentOptions.buildTemplateOption(),
        /**
         * The maximum number of query results to render in the preview.
         *
         * **Minimum:** `1`
         * **Maximum:** `6`
         * **Default:** `3`
         */
        numberOfPreviewResults: Core_1.ComponentOptions.buildNumberOption({
            defaultValue: 3,
            min: 1,
            max: 6
        }),
        /**
         * The width of the preview container (in pixels).
         *
         * If this option is `undefined` or lower than the remaning space left by the suggestion,
         * the component takes all the space left by the query suggestions.
         */
        previewWidth: Core_1.ComponentOptions.buildNumberOption(),
        /**
         *  The width of the suggestion container (in pixels).
         *
         *  If the value is set to `0`, the width will adjust to the longest displayed query suggestion.
         *
         * **Default:** `250`
         * **Minimum:** `0`
         */
        suggestionWidth: Core_1.ComponentOptions.buildNumberOption({ defaultValue: 250, min: 0 }),
        /**
         *  The text to display at the top of the preview, which is followed by "`<SUGGESTION>`", where `<SUGGESTION>` is the hovered query suggestion.
         *
         * **Default:** The localized string `Query result items for`
         */
        headerText: Core_1.ComponentOptions.buildLocalizedStringOption({ defaultValue: 'QuerySuggestPreview' }),
        /**
         *  The amount of focus time (in milliseconds) required on a query suggestion before requesting a preview of its top results.
         *
         * **Default:** `200`
         */
        executeQueryDelay: Core_1.ComponentOptions.buildNumberOption({ defaultValue: 200 })
    };
    return QuerySuggestPreview;
}(Core_1.Component));
exports.QuerySuggestPreview = QuerySuggestPreview;
Core_1.Initialization.registerAutoCreateComponent(QuerySuggestPreview);


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

///<reference path="FieldAddon.ts" />
///<reference path="QueryExtensionAddon.ts" />
///<reference path="QuerySuggestAddon.ts" />
///<reference path="OldOmniboxAddon.ts" />
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(532);
var _ = __webpack_require__(0);
var underscore_1 = __webpack_require__(0);
var BreadcrumbEvents_1 = __webpack_require__(37);
var OmniboxEvents_1 = __webpack_require__(32);
var QueryEvents_1 = __webpack_require__(10);
var StandaloneSearchInterfaceEvents_1 = __webpack_require__(90);
var GlobalExports_1 = __webpack_require__(3);
var Grammar_1 = __webpack_require__(170);
var Complete_1 = __webpack_require__(467);
var Expressions_1 = __webpack_require__(468);
var MagicBox_1 = __webpack_require__(208);
var Assert_1 = __webpack_require__(5);
var ComponentOptionsModel_1 = __webpack_require__(28);
var Model_1 = __webpack_require__(16);
var QueryStateModel_1 = __webpack_require__(13);
var Strings_1 = __webpack_require__(7);
var Dom_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(4);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var PendingSearchAsYouTypeSearchEvent_1 = __webpack_require__(119);
var SharedAnalyticsCalls_1 = __webpack_require__(117);
var Component_1 = __webpack_require__(6);
var ComponentOptions_1 = __webpack_require__(8);
var Initialization_1 = __webpack_require__(2);
var Querybox_1 = __webpack_require__(132);
var QueryboxOptionsProcessing_1 = __webpack_require__(470);
var QueryboxQueryParameters_1 = __webpack_require__(469);
var SearchInterface_1 = __webpack_require__(18);
var FieldAddon_1 = __webpack_require__(533);
var OldOmniboxAddon_1 = __webpack_require__(534);
var QueryExtensionAddon_1 = __webpack_require__(535);
var QuerySuggestAddon_1 = __webpack_require__(536);
var MINIMUM_EXECUTABLE_CONFIDENCE = 0.8;
/**
 * The `Omnibox` component extends the [`Querybox`]{@link Querybox}, and thus provides the same basic options and
 * behaviors. Furthermore, the `Omnibox` adds a type-ahead capability to the search input.
 *
 * You can configure the type-ahead feature by enabling or disabling certain addons, which the Coveo JavaScript Search
 * Framework provides out-of-the-box (see the [`enableFieldAddon`]{@link Omnibox.options.enableFieldAddon},
 * [`enableQueryExtension`]{@link Omnibox.options.enableQueryExtensionAddon}, and
 * [`enableQuerySuggestAddon`]{@link Omnibox.options.enableQuerySuggestAddon} options).
 *
 * Custom components and external code can also extend or customize the type-ahead feature and the query completion
 * suggestions it provides by attaching their own handlers to the
 * [`populateOmniboxSuggestions`]{@link OmniboxEvents.populateOmniboxSuggestions} event.
 *
 * See also the [`Searchbox`]{@link Searchbox} component, which can automatically instantiate an `Omnibox` along with an
 * optional {@link SearchButton}.
 */
var Omnibox = /** @class */ (function (_super) {
    __extends(Omnibox, _super);
    /**
     * Creates a new Omnibox component. Also enables necessary addons and binds events on various query events.
     * @param element The HTMLElement on which to instantiate the component.
     * @param options The options for the Omnibox component.
     * @param bindings The bindings that the component requires to function normally. If not set, these will be
     * automatically resolved (with a slower execution time).
     */
    function Omnibox(element, options, bindings) {
        var _this = _super.call(this, element, Omnibox.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.lastSuggestions = [];
        _this.movedOnce = false;
        _this.skipAutoSuggest = false;
        _this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Omnibox, options);
        var originalValueForQuerySyntax = _this.options.enableQuerySyntax;
        new QueryboxOptionsProcessing_1.QueryboxOptionsProcessing(_this).postProcess();
        _this.omniboxAnalytics = _this.searchInterface.getOmniboxAnalytics();
        Dom_1.$$(_this.element).toggleClass('coveo-query-syntax-disabled', _this.options.enableQuerySyntax == false);
        _this.suggestionAddon = _this.options.enableQuerySuggestAddon ? new QuerySuggestAddon_1.QuerySuggestAddon(_this) : new QuerySuggestAddon_1.VoidQuerySuggestAddon();
        new OldOmniboxAddon_1.OldOmniboxAddon(_this);
        _this.createMagicBox();
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.newQuery, function (args) { return _this.handleNewQuery(args); });
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
        _this.bind.onRootElement(StandaloneSearchInterfaceEvents_1.StandaloneSearchInterfaceEvents.beforeRedirect, function () { return _this.handleBeforeRedirect(); });
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.querySuccess, function () { return _this.handleQuerySuccess(); });
        _this.bind.onQueryState(Model_1.MODEL_EVENTS.CHANGE_ONE, QueryStateModel_1.QUERY_STATE_ATTRIBUTES.Q, function (args) {
            return _this.handleQueryStateChanged(args);
        });
        if (_this.isAutoSuggestion()) {
            _this.bind.onRootElement(QueryEvents_1.QueryEvents.duringQuery, function (args) { return _this.handleDuringQuery(args); });
        }
        _this.bind.onComponentOptions(Model_1.MODEL_EVENTS.CHANGE_ONE, ComponentOptionsModel_1.COMPONENT_OPTIONS_ATTRIBUTES.SEARCH_BOX, function (args) {
            if (args.value.enableQuerySyntax != null) {
                _this.options.enableQuerySyntax = args.value.enableQuerySyntax;
            }
            else {
                _this.options.enableQuerySyntax = originalValueForQuerySyntax;
            }
            _this.updateGrammar();
        });
        _this.bind.onRootElement(OmniboxEvents_1.OmniboxEvents.querySuggestGetFocus, function (args) { return _this.handleQuerySuggestGetFocus(args); });
        return _this;
    }
    /**
     * Adds the current content of the input to the query and triggers a query if the current content of the input has
     * changed since last submit.
     *
     * Also logs a `searchboxSubmit` event in the usage analytics.
     */
    Omnibox.prototype.submit = function () {
        var _this = this;
        this.magicBox.clearSuggestion();
        this.updateQueryState();
        this.triggerNewQuery(false, function () {
            SharedAnalyticsCalls_1.logSearchBoxSubmitEvent(_this.usageAnalytics);
        });
        this.magicBox.blur();
    };
    /**
     * Gets the current content of the input.
     * @returns {string} The current content of the input.
     */
    Omnibox.prototype.getText = function () {
        return this.magicBox.getText();
    };
    /**
     * Sets the content of the input
     * @param text The string to set in the input.
     */
    Omnibox.prototype.setText = function (text) {
        this.magicBox.setText(text);
        this.updateQueryState();
    };
    /**
     * Clears the content of the input.
     */
    Omnibox.prototype.clear = function () {
        this.magicBox.clear();
    };
    /**
     * Gets the `HTMLInputElement` of the Omnibox.
     */
    Omnibox.prototype.getInput = function () {
        return this.magicBox.element.querySelector('input');
    };
    Omnibox.prototype.getResult = function () {
        return this.magicBox.getResult();
    };
    Omnibox.prototype.getDisplayedResult = function () {
        return this.magicBox.getDisplayedResult();
    };
    Omnibox.prototype.getCursor = function () {
        return this.magicBox.getCursor();
    };
    Omnibox.prototype.resultAtCursor = function (match) {
        return this.magicBox.resultAtCursor(match);
    };
    Omnibox.prototype.createGrammar = function () {
        var grammar = null;
        if (this.options.enableQuerySyntax) {
            grammar = Expressions_1.Expressions(Complete_1.Complete);
            if (this.options.enableFieldAddon) {
                new FieldAddon_1.FieldAddon(this);
            }
            if (this.options.fieldAlias != null) {
                this.options.listOfFields = this.options.listOfFields || [];
                this.options.listOfFields = this.options.listOfFields.concat(_.keys(this.options.fieldAlias));
            }
            if (this.options.enableQueryExtensionAddon) {
                new QueryExtensionAddon_1.QueryExtensionAddon(this);
            }
        }
        else {
            grammar = { start: 'Any', expressions: { Any: /.*/ } };
        }
        if (this.options.grammar != null) {
            grammar = this.options.grammar(grammar);
        }
        return grammar;
    };
    Omnibox.prototype.updateGrammar = function () {
        var grammar = this.createGrammar();
        this.magicBox.grammar = new Grammar_1.Grammar(grammar.start, grammar.expressions);
        this.magicBox.setText(this.magicBox.getText());
    };
    Omnibox.prototype.createMagicBox = function () {
        var grammar = this.createGrammar();
        this.magicBox = MagicBox_1.createMagicBox(this.element, new Grammar_1.Grammar(grammar.start, grammar.expressions), {
            inline: this.options.inline,
            selectableSuggestionClass: 'coveo-omnibox-selectable',
            selectedSuggestionClass: 'coveo-omnibox-selected',
            suggestionTimeout: this.options.omniboxTimeout
        });
        var input = Dom_1.$$(this.magicBox.element).find('input');
        if (input) {
            Dom_1.$$(input).setAttribute('aria-label', Strings_1.l('SubmitSearch'));
        }
        this.setupMagicBox();
    };
    Omnibox.prototype.setupMagicBox = function () {
        var _this = this;
        this.magicBox.onmove = function () {
            // We assume that once the user has moved its selection, it becomes an explicit omnibox analytics event
            if (_this.isAutoSuggestion()) {
                _this.modifyEventTo = _this.getOmniboxAnalyticsEventCause();
            }
            _this.movedOnce = true;
        };
        this.magicBox.onfocus = function () {
            if (_this.isAutoSuggestion()) {
                // This flag is used to block the automatic query when the UI is loaded with a query (#q=foo)
                // and then the input is focused. We want to block that query, even if it match the suggestion
                // Only when there is an actual change in the input (user typing something) is when we want the automatic query to kick in
                _this.skipAutoSuggest = true;
            }
        };
        this.magicBox.onsuggestions = function (suggestions) {
            // If text is empty, this can mean that user selected text from the search box
            // and hit "delete" : Reset the partial queries in this case
            if (Utils_1.Utils.isEmptyString(_this.getText())) {
                _this.omniboxAnalytics.partialQueries = [];
            }
            _this.movedOnce = false;
            _this.lastSuggestions = suggestions;
            if (_this.isAutoSuggestion() && !_this.skipAutoSuggest) {
                _this.searchAsYouType();
            }
        };
        if (this.options.enableSearchAsYouType) {
            Dom_1.$$(this.element).addClass('coveo-magicbox-search-as-you-type');
        }
        this.magicBox.onchange = function () {
            _this.skipAutoSuggest = false;
            var text = _this.getText();
            if (text != undefined && text != '') {
                if (_this.isAutoSuggestion()) {
                    if (_this.movedOnce) {
                        _this.searchAsYouType(true);
                    }
                }
                else if (_this.options.enableSearchAsYouType) {
                    _this.searchAsYouType(true);
                }
            }
            else {
                _this.clear();
            }
        };
        if (this.options.placeholder) {
            this.magicBox.element.querySelector('input').placeholder = this.options.placeholder;
        }
        this.magicBox.onsubmit = function () { return _this.submit(); };
        this.magicBox.onselect = function (suggestion) {
            var index = _.indexOf(_this.lastSuggestions, suggestion);
            var suggestions = _.compact(_.map(_this.lastSuggestions, function (suggestion) { return suggestion.text; }));
            _this.magicBox.clearSuggestion();
            _this.updateQueryState();
            // A bit tricky here : When it's machine learning auto suggestions
            // the mouse selection and keyboard selection acts differently :
            // keyboard selection will automatically do the query (which will log a search as you type event -> further modified by this.modifyEventTo if needed)
            // mouse selection will not "auto" send the query.
            // the movedOnce variable detect the keyboard movement, and is used to differentiate mouse vs keyboard
            if (!_this.isAutoSuggestion()) {
                _this.usageAnalytics.cancelAllPendingEvents();
                _this.triggerNewQuery(false, function () {
                    _this.usageAnalytics.logSearchEvent(_this.getOmniboxAnalyticsEventCause(), _this.buildCustomDataForPartialQueries(index, suggestions));
                });
            }
            else if (_this.isAutoSuggestion() && _this.movedOnce) {
                _this.handleAutoSuggestionWithKeyboard(index, suggestions);
            }
            else if (_this.isAutoSuggestion() && !_this.movedOnce) {
                _this.handleAutoSuggestionsWithMouse(index, suggestions);
            }
            // Consider a selection like a reset of the partial queries (it's the end of a suggestion pattern)
            if (_this.isAutoSuggestion()) {
                _this.omniboxAnalytics.partialQueries = [];
            }
        };
        this.magicBox.onblur = function () {
            if (_this.isAutoSuggestion()) {
                _this.setText(_this.getQuery(true));
                _this.usageAnalytics.sendAllPendingEvents();
            }
        };
        this.magicBox.onclear = function () {
            _this.updateQueryState();
            if (_this.options.triggerQueryOnClear || _this.options.enableSearchAsYouType) {
                _this.triggerNewQuery(false, function () {
                    _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxClear, {});
                });
            }
        };
        this.magicBox.ontabpress = function () {
            _this.handleTabPress();
        };
        this.magicBox.getSuggestions = function () { return _this.handleSuggestions(); };
    };
    Omnibox.prototype.handleAutoSuggestionWithKeyboard = function (index, suggestions) {
        var _this = this;
        if (this.searchAsYouTypeTimeout) {
            // Here, there is currently a search as you typed queued up :
            // Think : user typed very quickly, then very quickly selected a suggestion (without waiting for the search as you type)
            // Cancel the search as you type query, then immediately do the query with the selection (+analytics event with the selection)
            this.usageAnalytics.cancelAllPendingEvents();
            clearTimeout(this.searchAsYouTypeTimeout);
            this.searchAsYouTypeTimeout = undefined;
            this.triggerNewQuery(false, function () {
                _this.usageAnalytics.logSearchEvent(_this.getOmniboxAnalyticsEventCause(), _this.buildCustomDataForPartialQueries(index, suggestions));
            });
        }
        else {
            // Here, the search as you type query has returned, but the analytics event has not ye been sent.
            // Think : user typed slowly, the query returned, and then the user selected a suggestion.
            // Since the analytics event has not yet been sent (search as you type event have a 5 sec delay)
            // modify the pending event, then send the newly modified analytics event immediately.
            this.modifyEventTo = this.getOmniboxAnalyticsEventCause();
            this.modifyCustomDataOnPending(index, suggestions);
            this.modifyQueryContentOnPending();
            this.usageAnalytics.sendAllPendingEvents();
        }
    };
    Omnibox.prototype.handleAutoSuggestionsWithMouse = function (index, suggestions) {
        var _this = this;
        if (this.searchAsYouTypeTimeout || index != 0) {
            // Here : the user either very quickly chose the first suggestion, and the search as you type is still queued up.
            // OR
            // the user chose something different then the first suggestion.
            // Remove the search as you type if it's there, and do the query with the suggestion directly.
            this.clearSearchAsYouType();
            this.usageAnalytics.cancelAllPendingEvents();
            this.triggerNewQuery(false, function () {
                _this.usageAnalytics.logSearchEvent(_this.getOmniboxAnalyticsEventCause(), _this.buildCustomDataForPartialQueries(index, suggestions));
            });
        }
        else {
            // Here : the user either very slowly chose a suggestion, and there is no search as you typed queued up
            // AND
            // the user chose the first suggestion.
            // this means the query is already returned, but the analytics event is still queued up.
            // modify the analytics event, and send it.
            this.modifyEventTo = this.getOmniboxAnalyticsEventCause();
            this.modifyCustomDataOnPending(index, suggestions);
            this.modifyQueryContentOnPending();
            this.usageAnalytics.sendAllPendingEvents();
            // This should happen if :
            // users did a (short) query first, which does not match the first suggestion. (eg: typed "t", then search)
            // then, refocus the search box. The same suggestion(s) will re-appear.
            // By selecting the first one with the mouse, we need to retrigger a query because this means the search as you type could not
            // kick in and do the query automatically.
            if (this.lastQuery != this.getText()) {
                this.triggerNewQuery(false, function () {
                    _this.usageAnalytics.logSearchEvent(_this.getOmniboxAnalyticsEventCause(), _this.buildCustomDataForPartialQueries(index, suggestions));
                });
            }
        }
    };
    Omnibox.prototype.modifyCustomDataOnPending = function (index, suggestions) {
        var pendingEvt = this.usageAnalytics.getPendingSearchEvent();
        if (pendingEvt instanceof PendingSearchAsYouTypeSearchEvent_1.PendingSearchAsYouTypeSearchEvent) {
            var newCustomData_1 = this.buildCustomDataForPartialQueries(index, suggestions);
            _.each(_.keys(newCustomData_1), function (k) {
                pendingEvt.modifyCustomData(k, newCustomData_1[k]);
            });
        }
    };
    Omnibox.prototype.modifyQueryContentOnPending = function () {
        var pendingEvt = this.usageAnalytics.getPendingSearchEvent();
        if (pendingEvt instanceof PendingSearchAsYouTypeSearchEvent_1.PendingSearchAsYouTypeSearchEvent) {
            var queryContent = this.getQuery(this.options.enableSearchAsYouType);
            pendingEvt.modifyQueryContent(queryContent);
        }
    };
    Omnibox.prototype.buildCustomDataForPartialQueries = function (index, suggestions) {
        this.updateOmniboxAnalytics(suggestions, index);
        return this.omniboxAnalytics.buildCustomDataForPartialQueries();
    };
    Omnibox.prototype.handleQuerySuggestGetFocus = function (_a) {
        var suggestion = _a.suggestion;
        var suggestions = _.compact(_.map(this.lastSuggestions, function (suggestion) { return suggestion.text; }));
        var ranking = this.lastSuggestions.indexOf(underscore_1.findWhere(this.lastSuggestions, { text: suggestion }));
        this.updateOmniboxAnalytics(suggestions, ranking);
    };
    Omnibox.prototype.updateOmniboxAnalytics = function (suggestions, suggestionRanking) {
        this.omniboxAnalytics.suggestions = suggestions;
        this.omniboxAnalytics.suggestionRanking = suggestionRanking;
    };
    Omnibox.prototype.handleSuggestions = function () {
        var text = this.getText();
        if (this.options.querySuggestCharacterThreshold <= text.length) {
            var suggestionsEventArgs = {
                suggestions: [],
                omnibox: this
            };
            this.triggerOmniboxSuggestions(suggestionsEventArgs);
            if (!Utils_1.Utils.isNullOrEmptyString(text)) {
                this.omniboxAnalytics.partialQueries.push(text);
            }
            return _.compact(suggestionsEventArgs.suggestions);
        }
        else {
            return [];
        }
    };
    Omnibox.prototype.triggerOmniboxSuggestions = function (args) {
        this.bind.trigger(this.element, OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, args);
        if (!Dom_1.$$(this.element).isDescendant(this.root)) {
            this.bind.trigger(this.root, OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, args);
        }
    };
    Omnibox.prototype.handleBeforeRedirect = function () {
        this.updateQueryState();
    };
    Omnibox.prototype.handleBuildingQuery = function (data) {
        var _this = this;
        Assert_1.Assert.exists(data);
        Assert_1.Assert.exists(data.queryBuilder);
        this.updateQueryState();
        this.lastQuery = this.getQuery(data.searchAsYouType);
        var result = this.lastQuery == this.magicBox.getDisplayedResult().input
            ? this.magicBox.getDisplayedResult().clone()
            : this.magicBox.grammar.parse(this.lastQuery).clean();
        var preprocessResultForQueryArgs = {
            result: result
        };
        if (this.options.enableQuerySyntax) {
            var notQuotedValues = preprocessResultForQueryArgs.result.findAll('FieldValueNotQuoted');
            _.each(notQuotedValues, function (value) { return (value.value = '"' + value.value.replace(/"|\u00A0/g, ' ') + '"'); });
            if (this.options.fieldAlias) {
                var fieldNames = preprocessResultForQueryArgs.result.findAll(function (result) { return result.expression.id == 'FieldName' && result.isSuccess(); });
                _.each(fieldNames, function (result) {
                    var alias = _.find(_.keys(_this.options.fieldAlias), function (alias) { return alias.toLowerCase() == result.value.toLowerCase(); });
                    if (alias != null) {
                        result.value = _this.options.fieldAlias[alias];
                    }
                });
            }
        }
        this.triggerOmniboxPreprocessResultForQuery(preprocessResultForQueryArgs);
        var query = preprocessResultForQueryArgs.result.toString();
        new QueryboxQueryParameters_1.QueryboxQueryParameters(this.options).addParameters(data.queryBuilder, query);
    };
    Omnibox.prototype.triggerOmniboxPreprocessResultForQuery = function (args) {
        this.bind.trigger(this.element, OmniboxEvents_1.OmniboxEvents.omniboxPreprocessResultForQuery, args);
        if (!Dom_1.$$(this.element).isDescendant(this.root)) {
            this.bind.trigger(this.root, OmniboxEvents_1.OmniboxEvents.omniboxPreprocessResultForQuery, args);
        }
    };
    Omnibox.prototype.handleNewQuery = function (data) {
        Assert_1.Assert.exists(data);
        this.options.clearFiltersOnNewQuery && this.clearFiltersIfNewQuery(data);
    };
    Omnibox.prototype.clearFiltersIfNewQuery = function (_a) {
        var origin = _a.origin, searchAsYouType = _a.searchAsYouType;
        if (this.queryController.firstQuery) {
            return;
        }
        // Prevent queries triggered by unrelated components to clear the the filters
        // e.g., a facet selection
        var validOrigins = [Omnibox.ID, 'SearchButton'];
        if (!origin || validOrigins.indexOf(origin.type) === -1) {
            return;
        }
        var lastQuery = this.queryController.getLastQuery().q || '';
        var newQuery = this.getQuery(searchAsYouType);
        if (lastQuery !== newQuery) {
            this.bind.trigger(this.root, BreadcrumbEvents_1.BreadcrumbEvents.clearBreadcrumb);
        }
    };
    Omnibox.prototype.handleTabPress = function () {
        if (this.options.enableQuerySuggestAddon) {
            this.handleTabPressForSuggestions();
        }
        this.handleTabPressForOldOmniboxAddon();
    };
    Omnibox.prototype.handleTabPressForSuggestions = function () {
        if (!this.options.enableSearchAsYouType) {
            var suggestions = _.compact(_.map(this.lastSuggestions, function (suggestion) { return suggestion.text; }));
            this.usageAnalytics.logCustomEvent(this.getOmniboxAnalyticsEventCause(), this.buildCustomDataForPartialQueries(0, suggestions), this.element);
        }
        else {
            this.setText(this.getQuery(true));
        }
    };
    Omnibox.prototype.handleTabPressForOldOmniboxAddon = function () {
        var domSuggestions = this.lastSuggestions.filter(function (suggestions) { return suggestions.dom; }).map(function (suggestions) { return Dom_1.$$(suggestions.dom); });
        var selected = this.findAllElementsWithClass(domSuggestions, '.coveo-omnibox-selected');
        if (selected.length > 0) {
            Dom_1.$$(selected[0]).trigger('tabSelect');
        }
        else if (!this.options.enableQuerySuggestAddon) {
            var selectable = this.findAllElementsWithClass(domSuggestions, '.coveo-omnibox-selectable');
            if (selectable.length > 0) {
                Dom_1.$$(selectable[0]).trigger('tabSelect');
            }
        }
    };
    Omnibox.prototype.findAllElementsWithClass = function (elements, className) {
        return elements
            .map(function (element) { return element.find(className); })
            .filter(function (s) { return s; })
            .reduce(function (total, s) { return total.concat(s); }, []);
    };
    Omnibox.prototype.triggerNewQuery = function (searchAsYouType, analyticsEvent) {
        clearTimeout(this.searchAsYouTypeTimeout);
        var shouldExecuteQuery = this.shouldExecuteQuery(searchAsYouType);
        this.lastQuery = this.getQuery(searchAsYouType);
        shouldExecuteQuery && analyticsEvent();
        this.queryController.executeQuery({
            searchAsYouType: searchAsYouType,
            logInActionsHistory: true,
            cancel: !shouldExecuteQuery,
            origin: this
        });
    };
    Omnibox.prototype.getQuery = function (searchAsYouType) {
        if (this.lastQuery == this.magicBox.getText()) {
            return this.lastQuery;
        }
        if (!searchAsYouType) {
            return this.magicBox.getText();
        }
        var wordCompletion = this.magicBox.getWordCompletion();
        if (wordCompletion != null) {
            return wordCompletion;
        }
        var currentOmniboxSuggestion = this.magicBox.getWordCompletion() || this.getFirstSuggestion();
        if (currentOmniboxSuggestion) {
            return currentOmniboxSuggestion;
        }
        if (this.isAutoSuggestion()) {
            return this.lastQuery || this.magicBox.getText();
        }
        return this.magicBox.getText();
    };
    Omnibox.prototype.getFirstSuggestion = function () {
        if (this.lastSuggestions == null) {
            return '';
        }
        if (this.lastSuggestions.length <= 0) {
            return '';
        }
        var textSuggestion = _.find(this.lastSuggestions, function (suggestion) { return suggestion.text != null; });
        if (textSuggestion == null) {
            return '';
        }
        return textSuggestion.text;
    };
    Omnibox.prototype.updateQueryState = function () {
        this.queryStateModel.set(QueryStateModel_1.QueryStateModel.attributesEnum.q, this.magicBox.getText());
    };
    Omnibox.prototype.handleQueryStateChanged = function (args) {
        Assert_1.Assert.exists(args);
        var q = args.value;
        if (q != this.magicBox.getText()) {
            this.magicBox.setText(q);
        }
    };
    Omnibox.prototype.handleQuerySuccess = function () {
        if (!this.isAutoSuggestion()) {
            this.omniboxAnalytics.partialQueries = [];
        }
    };
    Omnibox.prototype.handleDuringQuery = function (args) {
        var _this = this;
        // When the query results returns ... (args.promise)
        args.promise.then(function () {
            // Get a handle on a pending search as you type (those events are delayed, not sent instantly)
            var pendingEvent = _this.usageAnalytics.getPendingSearchEvent();
            if (pendingEvent instanceof PendingSearchAsYouTypeSearchEvent_1.PendingSearchAsYouTypeSearchEvent) {
                pendingEvent.beforeResolve.then(function (evt) {
                    // Check if we need to modify the event type beforeResolving it
                    args.promise.then(function () {
                        if (_this.modifyEventTo) {
                            evt.modifyEventCause(_this.modifyEventTo);
                            _this.modifyEventTo = null;
                        }
                    });
                });
            }
        });
    };
    Omnibox.prototype.searchAsYouType = function (forceExecuteQuery) {
        var _this = this;
        if (forceExecuteQuery === void 0) { forceExecuteQuery = false; }
        this.clearSearchAsYouType();
        if (this.shouldExecuteQuery(true)) {
            this.searchAsYouTypeTimeout = window.setTimeout(function () {
                if (_this.suggestionShouldTriggerQuery() || forceExecuteQuery) {
                    var suggestions_1 = _.map(_this.lastSuggestions, function (suggestion) { return suggestion.text; });
                    var index_1 = _.indexOf(suggestions_1, _this.magicBox.getWordCompletion());
                    _this.triggerNewQuery(true, function () {
                        _this.usageAnalytics.logSearchAsYouType(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxAsYouType, _this.buildCustomDataForPartialQueries(index_1, suggestions_1));
                    });
                    _this.clearSearchAsYouType();
                }
            }, this.options.searchAsYouTypeDelay);
        }
    };
    Omnibox.prototype.isAutoSuggestion = function () {
        return this.options.enableSearchAsYouType && this.options.enableQuerySuggestAddon;
    };
    Omnibox.prototype.shouldExecuteQuery = function (searchAsYouType) {
        var text = this.getQuery(searchAsYouType);
        if (this.searchInterface.options.allowQueriesWithoutKeywords === false) {
            return this.lastQuery != text && Utils_1.Utils.isNonEmptyString(text);
        }
        return this.lastQuery != text && text != null;
    };
    Omnibox.prototype.suggestionShouldTriggerQuery = function (suggestions) {
        if (suggestions === void 0) { suggestions = this.lastSuggestions; }
        if (this.shouldExecuteQuery(true)) {
            if (suggestions && suggestions[0]) {
                var suggestion = suggestions[0];
                // If we have access to a confidence level, return true if we are equal or above the minimum confidence level.
                if (suggestion && suggestion.executableConfidence != undefined) {
                    return suggestion.executableConfidence >= MINIMUM_EXECUTABLE_CONFIDENCE;
                }
                // If we don't have access to a confidence level, return true only if it "starts with" the content of the search box
                if (suggestion.text && suggestion.text.indexOf(this.magicBox.getText()) == 0) {
                    return true;
                }
            }
        }
        return false;
    };
    Omnibox.prototype.clearSearchAsYouType = function () {
        clearTimeout(this.searchAsYouTypeTimeout);
        this.searchAsYouTypeTimeout = undefined;
    };
    Omnibox.prototype.getOmniboxAnalyticsEventCause = function () {
        if (this.searchInterface instanceof SearchInterface_1.StandaloneSearchInterface) {
            return AnalyticsActionListMeta_1.analyticsActionCauseList.omniboxFromLink;
        }
        return AnalyticsActionListMeta_1.analyticsActionCauseList.omniboxAnalytics;
    };
    Omnibox.ID = 'Omnibox';
    Omnibox.doExport = function () {
        GlobalExports_1.exportGlobally({
            Omnibox: Omnibox,
            QueryboxQueryParameters: QueryboxQueryParameters_1.QueryboxQueryParameters
        });
    };
    /**
     * The options for the omnibox
     * @componentOptions
     */
    Omnibox.options = {
        /**
         * Specifies whether query completion suggestions appearing in the `Omnibox` should push the result list and facets
         * down, rather than rendering themselves over them (and partially hiding them).
         *
         * Set this option as well as {@link Omnibox.options.enableSearchAsYouType} and
         * {@link Omnibox.options.enableQuerySuggestAddon} to `true` for a cool effect!
         *
         * Default value is `false`.
         */
        inline: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
        /**
         * Whether to automatically trigger a new query whenever the end user types additional text in the search box input.
         *
         * See also the [`searchAsYouTypeDelay`]{@link Omnibox.options.searchAsYouTypeDelay} option.
         *
         * **Note:**
         * > If you set this option and the [`enableQuerySuggestAddon`]{@link Omnibox.options.enableQuerySuggestAddon}
         * > option to `true`, the query suggestion feature returns the auto-completion of the currently typed keyword as
         * > its first suggestion.
         *
         * Default value is `false`.
         */
        enableSearchAsYouType: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, section: 'Advanced Options' }),
        /**
         * If {@link Omnibox.options.enableSearchAsYouType} is `true`, specifies the delay (in milliseconds) before
         * triggering a new query when the end user types in the `Omnibox`.
         *
         * Default value is `2000`. Minimum value is `0`.
         */
        searchAsYouTypeDelay: ComponentOptions_1.ComponentOptions.buildNumberOption({
            defaultValue: 2000,
            min: 0,
            depend: 'enableSearchAsYouType',
            section: 'Advanced Options'
        }),
        /**
         * The `field` addon makes the `Omnibox` highlight and complete field syntax. Setting this option to `true` automatically sets
         * the [enableQuerySyntax]{@link Querybox.options.enableQuerySyntax} option to `true` as a side effect.
         *
         * **Example:**
         * > Suppose you want to search for PDF files. You start typing `@f` in the search box. The `Omnibox` provides
         * > you with several matching fields. You select the `@filetype` field. Then, you start typing `=p` in the input.
         * > This time, the `Omnibox` provides you with several matching values for the `@filetype` field. You select the
         * > `pdf` suggestion, and submit your search request. Since the `enableQuerySyntax` option is set to `true`, the
         * > Coveo Search API interprets the basic expression as query syntax and returns the items whose `@filetype` field
         * > matches the `pdf` value.
         *
         * Default value is `false`.
         */
        enableFieldAddon: ComponentOptions_1.ComponentOptions.buildBooleanOption({
            defaultValue: false,
            depend: 'enableQuerySyntax',
            postProcessing: function (value, options) {
                if (value) {
                    options.enableQuerySyntax = true;
                }
                return value;
            },
            section: 'Advanced Options'
        }),
        enableSimpleFieldAddon: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, depend: 'enableFieldAddon' }),
        listOfFields: ComponentOptions_1.ComponentOptions.buildFieldsOption({ depend: 'enableFieldAddon' }),
        /**
         * Whether to display Coveo Machine Learning (Coveo ML) query suggestions in the `Omnibox`.
         *
         * The corresponding Coveo ML model must be properly configured in your Coveo Cloud organization, otherwise this
         * option has no effect (see
         * [Managing Machine Learning Query Suggestions in a Query Pipeline](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=168)).
         *
         * **Note:**
         * > When you set this option and the [`enableSearchAsYouType`]{@link Omnibox.options.enableSearchAsYouType} option
         * > to `true`, the query suggestion feature returns the auto-completion of the currently typed keyword as its first
         * > query suggestion.
         *
         * Default value is `true`.
         */
        enableQuerySuggestAddon: ComponentOptions_1.ComponentOptions.buildBooleanOption({
            defaultValue: true,
            alias: ['enableTopQueryAddon', 'enableRevealQuerySuggestAddon']
        }),
        /**
         * If {@link Querybox.options.enableQuerySyntax} is `true`, specifies whether to enable the `query extension` addon.
         *
         * The `query extension` addon allows the Omnibox to complete the syntax for query extensions.
         *
         * Default value is `false`.
         */
        enableQueryExtensionAddon: ComponentOptions_1.ComponentOptions.buildBooleanOption({
            defaultValue: false,
            depend: 'enableQuerySyntax',
            postProcessing: function (value, options) {
                if (value) {
                    options.enableQuerySyntax = true;
                }
                return value;
            },
            section: 'Advanced Options'
        }),
        /**
         * Specifies a placeholder for the input.
         */
        placeholder: ComponentOptions_1.ComponentOptions.buildLocalizedStringOption(),
        /**
         * Specifies a timeout (in milliseconds) before rejecting suggestions in the Omnibox.
         *
         * Default value is `2000`. Minimum value is `0`.
         */
        omniboxTimeout: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 2000, min: 0 }),
        /**
         * Specifies whether the Coveo Platform should try to interpret special query syntax such as field references in the
         * query that the user enters in the Querybox (see
         * [Coveo Query Syntax Reference](http://www.coveo.com/go?dest=adminhelp70&lcid=9&context=10005)).
         *
         * Setting this option to `true` also causes the query syntax in the Querybox to highlight.
         *
         * Default value is `false`.
         */
        enableQuerySyntax: ComponentOptions_1.ComponentOptions.buildBooleanOption({
            defaultValue: false,
            section: 'Advanced Options'
        }),
        /**
         * Specifies the number of suggestions that should appear in standard ML-powered query suggestions.
         *
         * This option only affects the number of suggestions that appear with the {@link Omnibox.options.enableQuerySuggestAddon} option.
         *
         * This options does not affect the {@link AnalyticsSuggestions} or the {@link FieldSuggestions} component, which expose their own dedicated options for this parameter.
         *
         * Default value is `5`.
         *
         * Minimum value is `1`.
         */
        numberOfSuggestions: ComponentOptions_1.ComponentOptions.buildNumberOption({
            defaultValue: 5,
            min: 1
        }),
        /**
         * The minimum number of characters required in the in the text input before displaying available query suggestions when focus is on the component.
         *
         * Note: Only effective when [enableQuerySuggestAddon]{@link Omnibox.options.enableQuerySuggestAddon} is true.
         *
         * depend: 'enableQuerySuggestAddon'
         *
         * Default (and minimum): 0, meaning that trending query suggestions are displayed when focus is on the component, even if its text input is empty.
         */
        querySuggestCharacterThreshold: ComponentOptions_1.ComponentOptions.buildNumberOption({
            defaultValue: 0,
            min: 0
        }),
        /**
         * Whether to clear all active query filters when the end user submits a new query from the search box.
         *
         * Note: This does not include the filter expression enforced by the currently selected tab, if any.
         *
         * **Default:** `false`
         */
        clearFiltersOnNewQuery: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false })
    };
    return Omnibox;
}(Component_1.Component));
exports.Omnibox = Omnibox;
Omnibox.options = __assign({}, Omnibox.options, Querybox_1.Querybox.options);
Initialization_1.Initialization.registerAutoCreateComponent(Omnibox);


/***/ }),

/***/ 182:
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
var GlobalExports_1 = __webpack_require__(3);
var Strings_1 = __webpack_require__(7);
var AccessibleButton_1 = __webpack_require__(17);
var Dom_1 = __webpack_require__(1);
var SVGDom_1 = __webpack_require__(14);
var SVGIcons_1 = __webpack_require__(12);
var Utils_1 = __webpack_require__(4);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var Component_1 = __webpack_require__(6);
var Initialization_1 = __webpack_require__(2);
/**
 * The SearchButton component renders a search icon that the end user can click to trigger a new query.
 *
 * See also the {@link Searchbox} component, which can automatically instantiate a SearchButton component along with a
 * {@link Querybox} component or an {@link Omnibox} component.
 */
var SearchButton = /** @class */ (function (_super) {
    __extends(SearchButton, _super);
    /**
     * Creates a new SearchButton. Binds a `click` event on the element. Adds a search icon on the element.
     * @param element The HTMLElement on which to instantiate the component.
     * @param options The options for the SearchButton component.
     * @param bindings The bindings that the component requires to function normally. If not set, these will be
     * automatically resolved (with a slower execution time).
     */
    function SearchButton(element, options, bindings) {
        var _this = _super.call(this, element, SearchButton.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        new AccessibleButton_1.AccessibleButton()
            .withElement(element)
            .withOwner(_this.bind)
            .withLabel(Strings_1.l('Search'))
            .withSelectAction(function () { return _this.handleClick(); })
            .build();
        // Provide a magnifier icon if element contains nothing
        if (Utils_1.Utils.trim(Dom_1.$$(_this.element).text()) == '') {
            var svgMagnifierContainer = Dom_1.$$('span', { className: 'coveo-search-button' }, SVGIcons_1.SVGIcons.icons.search).el;
            SVGDom_1.SVGDom.addClassToSVGInContainer(svgMagnifierContainer, 'coveo-search-button-svg');
            var svgLoadingAnimationContainer = Dom_1.$$('span', { className: 'coveo-search-button-loading' }, SVGIcons_1.SVGIcons.icons.loading).el;
            SVGDom_1.SVGDom.addClassToSVGInContainer(svgLoadingAnimationContainer, 'coveo-search-button-loading-svg');
            element.appendChild(svgMagnifierContainer);
            element.appendChild(svgLoadingAnimationContainer);
        }
        return _this;
    }
    /**
     * Triggers the `click` event handler, which logs a `searchboxSubmit` event in the usage analytics and executes a
     * query.
     */
    SearchButton.prototype.click = function () {
        this.handleClick();
    };
    SearchButton.prototype.handleClick = function () {
        this.logger.debug('Performing query following button click');
        this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxSubmit, {});
        this.queryController.executeQuery({ origin: this });
    };
    SearchButton.ID = 'SearchButton';
    SearchButton.doExport = function () {
        GlobalExports_1.exportGlobally({
            SearchButton: SearchButton
        });
    };
    SearchButton.options = {};
    return SearchButton;
}(Component_1.Component));
exports.SearchButton = SearchButton;
Initialization_1.Initialization.registerAutoCreateComponent(SearchButton);


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(6);
var _ = __webpack_require__(0);
var ResultListRenderer = /** @class */ (function () {
    function ResultListRenderer(resultListOptions, autoCreateComponentsFn) {
        this.resultListOptions = resultListOptions;
        this.autoCreateComponentsFn = autoCreateComponentsFn;
    }
    ResultListRenderer.prototype.renderResults = function (resultElements, append, resultDisplayedCallback) {
        var _this = this;
        if (append === void 0) { append = false; }
        return Promise.all([this.getStartFragment(resultElements, append), this.getEndFragment(resultElements, append)]).then(function (_a) {
            var startFrag = _a[0], endFrag = _a[1];
            var resultsFragment = document.createDocumentFragment();
            if (startFrag) {
                resultsFragment.appendChild(startFrag);
            }
            _.each(resultElements, function (resultElement) {
                resultsFragment.appendChild(resultElement);
                resultDisplayedCallback(Component_1.Component.getResult(resultElement), resultElement);
            });
            if (endFrag) {
                resultsFragment.appendChild(endFrag);
            }
            _this.resultListOptions.resultsContainer.appendChild(resultsFragment);
        });
    };
    ResultListRenderer.prototype.getStartFragment = function (resultElements, append) {
        return Promise.resolve(document.createDocumentFragment());
    };
    ResultListRenderer.prototype.getEndFragment = function (resultElements, append) {
        return Promise.resolve(document.createDocumentFragment());
    };
    return ResultListRenderer;
}());
exports.ResultListRenderer = ResultListRenderer;


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionEndOfInput = {
    id: 'end of input',
    parse: null
};


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Result_1 = __webpack_require__(47);
var Result_2 = __webpack_require__(47);
var ExpressionConstant = /** @class */ (function () {
    function ExpressionConstant(value, id) {
        this.value = value;
        this.id = id;
    }
    ExpressionConstant.prototype.parse = function (input, end) {
        // the value must be at the start of the input
        var success = input.indexOf(this.value) == 0;
        var result = new Result_1.Result(success ? this.value : null, this, input);
        // if is successful and we require the end but the length of parsed is
        // lower than the input length, return a EndOfInputExpected Result
        if (success && end && input.length > this.value.length) {
            return new Result_2.EndOfInputResult(result);
        }
        return result;
    };
    ExpressionConstant.prototype.toString = function () {
        return this.value;
    };
    return ExpressionConstant;
}());
exports.ExpressionConstant = ExpressionConstant;


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Basic_1 = __webpack_require__(128);
var Date_1 = __webpack_require__(462);
exports.Field = {
    basicExpressions: ['FieldSimpleQuery', 'FieldQuery', 'Field'],
    grammars: {
        FieldQuery: '[Field][OptionalSpaces][FieldQueryOperation]',
        FieldQueryOperation: ['FieldQueryValue', 'FieldQueryNumeric'],
        FieldQueryValue: '[FieldOperator][OptionalSpaces][FieldValue]',
        FieldQueryNumeric: '[FieldOperatorNumeric][OptionalSpaces][FieldValueNumeric]',
        FieldSimpleQuery: '[FieldName]:[OptionalSpaces][FieldValue]',
        Field: '@[FieldName]',
        FieldName: /[a-zA-Z][a-zA-Z0-9\.\_]*/,
        FieldOperator: /==|=|<>/,
        FieldOperatorNumeric: /<=|>=|<|>/,
        FieldValue: ['DateRange', 'NumberRange', 'DateRelative', 'Date', 'Number', 'FieldValueList', 'FieldValueString'],
        FieldValueNumeric: ['DateRelative', 'Date', 'Number'],
        FieldValueString: ['DoubleQuoted', 'FieldValueNotQuoted'],
        FieldValueList: '([FieldValueString][FieldValueStringList*])',
        FieldValueStringList: '[FieldValueSeparator][FieldValueString]',
        FieldValueSeparator: / *, */,
        FieldValueNotQuoted: /[^ \(\),]+/,
        NumberRange: '[Number][Spaces?]..[Spaces?][Number]'
    },
    include: [Date_1.Date, Basic_1.Basic]
};


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __webpack_require__(0);
var Core_1 = __webpack_require__(25);
var Dom_1 = __webpack_require__(1);
var doMagicBoxExport_1 = __webpack_require__(526);
var InputManager_1 = __webpack_require__(465);
var MagicBoxClear_1 = __webpack_require__(528);
var SuggestionsManager_1 = __webpack_require__(466);
var MagicBoxInstance = /** @class */ (function () {
    function MagicBoxInstance(element, grammar, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.element = element;
        this.grammar = grammar;
        this.options = options;
        this.lastSuggestions = [];
        if (underscore_1.isUndefined(this.options.inline)) {
            this.options.inline = false;
        }
        Dom_1.$$(element).addClass('magic-box');
        if (this.options.inline) {
            Dom_1.$$(element).addClass('magic-box-inline');
        }
        this.result = this.grammar.parse('');
        this.displayedResult = this.result.clean();
        var inputContainer = Dom_1.$$(element).find('.magic-box-input');
        if (!inputContainer) {
            inputContainer = document.createElement('div');
            inputContainer.className = 'magic-box-input';
            element.appendChild(inputContainer);
        }
        this.inputManager = new InputManager_1.InputManager(inputContainer, function (text, wordCompletion) {
            if (!wordCompletion) {
                _this.setText(text);
                _this.showSuggestion();
                _this.onchange && _this.onchange();
            }
            else {
                _this.setText(text);
                _this.onselect && _this.onselect(_this.getFirstSuggestionText());
            }
        }, this);
        this.inputManager.ontabpress = function () {
            _this.ontabpress && _this.ontabpress();
        };
        var existingValue = this.inputManager.getValue();
        if (existingValue) {
            this.displayedResult.input = existingValue;
        }
        this.inputManager.setResult(this.displayedResult);
        var suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'magic-box-suggestions';
        this.element.appendChild(suggestionsContainer);
        this.suggestionsManager = new SuggestionsManager_1.SuggestionsManager(suggestionsContainer, this.element, this.inputManager, {
            selectableClass: this.options.selectableSuggestionClass,
            selectedClass: this.options.selectedSuggestionClass,
            timeout: this.options.suggestionTimeout
        });
        this.magicBoxClear = new MagicBoxClear_1.MagicBoxClear(this);
        this.setupHandler();
    }
    MagicBoxInstance.prototype.getResult = function () {
        return this.result;
    };
    MagicBoxInstance.prototype.getDisplayedResult = function () {
        return this.displayedResult;
    };
    MagicBoxInstance.prototype.setText = function (text) {
        Dom_1.$$(this.element).toggleClass('magic-box-notEmpty', text.length > 0);
        this.magicBoxClear.toggleTabindexAndAriaHidden(text.length > 0);
        this.result = this.grammar.parse(text);
        this.displayedResult = this.result.clean();
        this.inputManager.setResult(this.displayedResult);
    };
    MagicBoxInstance.prototype.setCursor = function (index) {
        this.inputManager.setCursor(index);
    };
    MagicBoxInstance.prototype.getCursor = function () {
        return this.inputManager.getCursor();
    };
    MagicBoxInstance.prototype.resultAtCursor = function (match) {
        return this.displayedResult.resultAt(this.getCursor(), match);
    };
    MagicBoxInstance.prototype.setupHandler = function () {
        var _this = this;
        this.inputManager.onblur = function () {
            Dom_1.$$(_this.element).removeClass('magic-box-hasFocus');
            _this.onblur && _this.onblur();
            if (!_this.options.inline) {
                _this.clearSuggestion();
            }
        };
        this.inputManager.onfocus = function () {
            Dom_1.$$(_this.element).addClass('magic-box-hasFocus');
            _this.showSuggestion();
            _this.onfocus && _this.onfocus();
        };
        this.inputManager.onkeydown = function (key) {
            if (key === Core_1.KEYBOARD.UP_ARROW || key === Core_1.KEYBOARD.DOWN_ARROW || key === Core_1.KEYBOARD.LEFT_ARROW || key === Core_1.KEYBOARD.RIGHT_ARROW) {
                return false;
            }
            if (key === Core_1.KEYBOARD.ENTER) {
                var suggestion = _this.suggestionsManager.selectAndReturnKeyboardFocusedElement();
                if (suggestion == null) {
                    _this.onsubmit && _this.onsubmit();
                }
                return false;
            }
            else if (key === Core_1.KEYBOARD.ESCAPE) {
                _this.clearSuggestion();
                _this.blur();
            }
            return true;
        };
        this.inputManager.onchangecursor = function () {
            _this.showSuggestion();
        };
        this.inputManager.onkeyup = function (key) {
            _this.onmove && _this.onmove();
            switch (key) {
                case Core_1.KEYBOARD.UP_ARROW:
                    _this.suggestionsManager.moveUp();
                    break;
                case Core_1.KEYBOARD.DOWN_ARROW:
                    _this.suggestionsManager.moveDown();
                    break;
                case Core_1.KEYBOARD.LEFT_ARROW:
                    _this.suggestionsManager.moveLeft();
                    break;
                case Core_1.KEYBOARD.RIGHT_ARROW:
                    _this.suggestionsManager.moveRight();
                    break;
                default:
                    return true;
            }
            if (_this.suggestionsManager.selectedSuggestion) {
                _this.focusOnSuggestion(_this.suggestionsManager.selectedSuggestion);
            }
            _this.onchange && _this.onchange();
            return false;
        };
    };
    MagicBoxInstance.prototype.showSuggestion = function () {
        var _this = this;
        this.suggestionsManager.mergeSuggestions(this.getSuggestions != null ? this.getSuggestions() : [], function (suggestions) {
            _this.updateSuggestion(suggestions);
        });
    };
    MagicBoxInstance.prototype.updateSuggestion = function (suggestions) {
        var _this = this;
        this.lastSuggestions = suggestions;
        var firstSuggestion = this.getFirstSuggestionText();
        this.inputManager.setWordCompletion(firstSuggestion && firstSuggestion.text);
        this.onsuggestions && this.onsuggestions(suggestions);
        underscore_1.each(suggestions, function (suggestion) {
            if (suggestion.onSelect == null && suggestion.text != null) {
                suggestion.onSelect = function () {
                    _this.setText(suggestion.text);
                    _this.onselect && _this.onselect(suggestion);
                };
            }
        });
    };
    MagicBoxInstance.prototype.focus = function () {
        Dom_1.$$(this.element).addClass('magic-box-hasFocus');
        this.inputManager.focus();
    };
    MagicBoxInstance.prototype.blur = function () {
        this.inputManager.blur();
    };
    MagicBoxInstance.prototype.clearSuggestion = function () {
        var _this = this;
        this.suggestionsManager.mergeSuggestions([], function (suggestions) {
            _this.updateSuggestion(suggestions);
        });
        this.inputManager.setWordCompletion(null);
    };
    MagicBoxInstance.prototype.focusOnSuggestion = function (suggestion) {
        if (suggestion == null || suggestion.text == null) {
            suggestion = this.getFirstSuggestionText();
            this.inputManager.setResult(this.displayedResult, suggestion && suggestion.text);
        }
        else {
            this.inputManager.setResult(this.grammar.parse(suggestion.text).clean(), suggestion.text);
        }
    };
    MagicBoxInstance.prototype.getFirstSuggestionText = function () {
        return underscore_1.find(this.lastSuggestions, function (suggestion) { return suggestion.text != null; });
    };
    MagicBoxInstance.prototype.getText = function () {
        return this.inputManager.getValue();
    };
    MagicBoxInstance.prototype.getWordCompletion = function () {
        return this.inputManager.getWordCompletion();
    };
    MagicBoxInstance.prototype.clear = function () {
        this.setText('');
        this.showSuggestion();
        this.focus();
        this.onclear && this.onclear();
    };
    MagicBoxInstance.prototype.hasSuggestions = function () {
        return this.suggestionsManager.hasSuggestions;
    };
    return MagicBoxInstance;
}());
exports.MagicBoxInstance = MagicBoxInstance;
function createMagicBox(element, grammar, options) {
    return new MagicBoxInstance(element, grammar, options);
}
exports.createMagicBox = createMagicBox;
function requestAnimationFrame(callback) {
    if ('requestAnimationFrame' in window) {
        return window.requestAnimationFrame(callback);
    }
    return setTimeout(callback);
}
exports.requestAnimationFrame = requestAnimationFrame;
doMagicBoxExport_1.doMagicBoxExport();


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var MagicBoxUtils = /** @class */ (function () {
    function MagicBoxUtils() {
    }
    MagicBoxUtils.escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    };
    MagicBoxUtils.highlightText = function (text, highligth, ignoreCase, matchClass, doNotMatchClass) {
        var _this = this;
        if (ignoreCase === void 0) { ignoreCase = false; }
        if (matchClass === void 0) { matchClass = 'magic-box-hightlight'; }
        if (doNotMatchClass === void 0) { doNotMatchClass = ''; }
        if (highligth.length == 0) {
            return text;
        }
        var escaped = this.escapeRegExp(highligth);
        var stringRegex = '(' + escaped + ')|(.*?(?=' + escaped + ')|.+)';
        var regex = new RegExp(stringRegex, ignoreCase ? 'gi' : 'g');
        return text.replace(regex, function (text, match, notmatch) { return _this.escapeText(match != null ? matchClass : doNotMatchClass, text); });
    };
    MagicBoxUtils.escapeText = function (classname, text) {
        return "<span class=\"" + classname + "\">" + _.escape(text) + "</span>";
    };
    return MagicBoxUtils;
}());
exports.MagicBoxUtils = MagicBoxUtils;


/***/ }),

/***/ 263:
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(618);
var GlobalExports_1 = __webpack_require__(3);
var Dom_1 = __webpack_require__(1);
var SVGDom_1 = __webpack_require__(14);
var SVGIcons_1 = __webpack_require__(12);
var SearchBoxResize_1 = __webpack_require__(619);
var Component_1 = __webpack_require__(6);
var ComponentOptions_1 = __webpack_require__(8);
var Initialization_1 = __webpack_require__(2);
var Omnibox_1 = __webpack_require__(180);
var Querybox_1 = __webpack_require__(132);
var SearchButton_1 = __webpack_require__(182);
var underscore_1 = __webpack_require__(0);
/**
 * The `Searchbox` component allows you to conveniently instantiate two components which end users frequently use to
 * enter and submit queries.
 *
 * This component attaches itself to a `div` element and takes care of instantiating either a
 * [`Querybox`]{@link Querybox} or an [`Omnibox`]{@link Omnibox} component (see the
 * [`enableOmnibox`]{@link Searchbox.options.enableOmnibox} option). Optionally, the `Searchbox` can also instantiate a
 * [`SearchButton`]{@link SearchButton} component, and append it inside the same `div` (see the
 * [`addSearchButton`]{@link Searchbox.options.addSearchButton} option).
 */
var Searchbox = /** @class */ (function (_super) {
    __extends(Searchbox, _super);
    /**
     * Creates a new `Searchbox` component. Creates a new `Coveo.Magicbox` instance and wraps magic box methods (`onblur`,
     * `onsubmit`, etc.). Binds event on `buildingQuery` and on redirection (for standalone box).
     * @param element The HTMLElement on which to instantiate the component. This cannot be an HTMLInputElement for
     * technical reasons.
     * @param options The options for the `Searchbox component`. These will merge with the options from the component set
     * directly on the `HTMLElement`.
     * @param bindings The bindings that the component requires to function normally. If not set, these will be
     * automatically resolved (with a slower execution time).
     */
    function Searchbox(element, options, bindings) {
        var _this = _super.call(this, element, Searchbox.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, Searchbox, options);
        if (_this.options.inline) {
            Dom_1.$$(element).addClass('coveo-inline');
        }
        var div = document.createElement('div');
        _this.element.appendChild(div);
        if (_this.options.addSearchButton) {
            var anchor = Dom_1.$$('a');
            _this.element.appendChild(anchor.el);
            _this.searchButton = new SearchButton_1.SearchButton(anchor.el, undefined, bindings);
        }
        if (_this.options.enableOmnibox) {
            _this.searchbox = new Omnibox_1.Omnibox(div, _this.options, bindings);
        }
        else {
            _this.searchbox = new Querybox_1.Querybox(div, _this.options, bindings);
        }
        var magicBoxIcon = Dom_1.$$(_this.element).find('.magic-box-icon');
        magicBoxIcon.innerHTML = SVGIcons_1.SVGIcons.icons.mainClear;
        SVGDom_1.SVGDom.addClassToSVGInContainer(magicBoxIcon, 'magic-box-clear-svg');
        if (_this.options.height) {
            Dom_1.$$(element).addClass('coveo-custom-height');
            SearchBoxResize_1.SearchBoxResize.resize(_this.element, options.height);
        }
        return _this;
    }
    Searchbox.ID = 'Searchbox';
    Searchbox.parent = Omnibox_1.Omnibox;
    Searchbox.doExport = function () {
        GlobalExports_1.exportGlobally({
            Searchbox: Searchbox,
            SearchButton: SearchButton_1.SearchButton,
            Omnibox: Omnibox_1.Omnibox,
            Querybox: Querybox_1.Querybox
        });
    };
    /**
     * Possible options for the {@link Searchbox}
     * @componentOptions
     */
    Searchbox.options = {
        /**
         * Specifies whether to instantiate a [`SearchButton`]{@link SearchButton} component.
         *
         * Default value is `true`.
         */
        addSearchButton: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
        /**
         * A custom height for the search box (in pixels).
         *
         * Note: Avoid setting this option if you want to modify the search box styling through custom CSS.
         *
         * Minimum value is `25`
         *
         * Default behavior: The most specific CSS rules targeting HTML elements generated by the Searchbox component are used
         * (e.g., if you are only using the default CoveoFullSearch.css stylesheet with no further styling customizations,
         * the search box height will be set to 50 pixels by default).
         */
        height: ComponentOptions_1.ComponentOptions.buildNumberOption({ min: 25 }),
        /**
         * Specifies whether to instantiate an [`Omnibox`]{@link Omnibox} component.
         *
         * When this option is `false`, the `Searchbox` instantiates a [`Querybox`]{@link Querybox} component instead.
         *
         * **Note:**
         * > You can use configuration options specific to the component you choose to instantiate with the `Searchbox`.
         *
         * **Examples:**
         *
         * In this first case, the `Searchbox` instantiates a `Querybox` component. You can configure this `Querybox`
         * instance using any of the `Querybox` component options, such as
         * [`triggerQueryOnClear`]{@link Querybox.options.triggerQueryOnClear}.
         * ```html
         * <div class='CoveoSearchbox' data-trigger-query-on-clear='true'></div>
         * ```
         *
         * In this second case, the `Searchbox` instantiates an `Omnibox` component. You can configure this `Omnibox`
         * instance using any of the `Omnibox` component options, such as
         * [`placeholder`]{@link Omnibox.options.placeholder}.
         * Moreover, since the `Omnibox` component inherits all of the `Querybox` component options, the
         * `data-trigger-query-on-clear` option from the previous example would also work on this `Omnibox` instance.
         * ```html
         * <div class='CoveoSearchbox' data-enable-omnibox='true' data-placeholder='Please enter a query'></div>
         * ```
         *
         * Default value is `true`.
         */
        enableOmnibox: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true })
    };
    return Searchbox;
}(Component_1.Component));
exports.Searchbox = Searchbox;
Searchbox.options = __assign({}, Searchbox.options, Omnibox_1.Omnibox.options, Querybox_1.Querybox.options);
// Only parse omnibox option if omnibox is enabled
underscore_1.each(Searchbox.options, function (value, key) {
    if (key in Omnibox_1.Omnibox.options && !(key in Querybox_1.Querybox.options)) {
        Searchbox.options[key] = underscore_1.extend({ depend: 'enableOmnibox' }, value);
    }
});
Initialization_1.Initialization.registerAutoCreateComponent(Searchbox);


/***/ }),

/***/ 427:
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
var Template_1 = __webpack_require__(23);
var TemplateList_1 = __webpack_require__(85);
var _ = __webpack_require__(0);
var TableTemplate = /** @class */ (function (_super) {
    __extends(TableTemplate, _super);
    function TableTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultTemplate = "<td><a class=\"CoveoResultLink\"></a></td>\n                             <td><span class=\"CoveoExcerpt\"></span></td>\n                             <td><span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span></td>";
        _this.defaultRoledTemplates = {
            'table-header': "<th style=\"width: 40%\">Link</th>\n                     <th>Excerpt</th>\n                     <th style=\"width: 20%\"\n                         class=\"CoveoSort coveo-table-header-sort\"\n                         data-sort-criteria=\"date ascending,date descending\"\n                         data-display-unselected-icon=\"false\">Date</th>",
            'table-footer': "<th>Link</th>\n                     <th>Excerpt</th>\n                     <th>Date</th>"
        };
        return _this;
    }
    TableTemplate.prototype.instantiateRoleToString = function (role) {
        var roledTemplate = _.find(this.templates, function (t) { return t.role === role; });
        if (roledTemplate) {
            return roledTemplate.instantiateToString(undefined, {});
        }
        else {
            return this.defaultRoledTemplates[role];
        }
    };
    TableTemplate.prototype.instantiateRoleToElement = function (role) {
        var _this = this;
        var roledTemplate = _.find(this.templates, function (t) { return t.role === role; });
        if (roledTemplate) {
            return roledTemplate.instantiateToElement(undefined, {});
        }
        else {
            var tmpl = new Template_1.Template(function () { return _this.defaultRoledTemplates[role]; });
            tmpl.layout = 'table';
            return tmpl.instantiateToElement(undefined);
        }
    };
    TableTemplate.prototype.getFallbackTemplate = function () {
        var _this = this;
        return new Template_1.Template(function () { return _this.defaultTemplate; });
    };
    TableTemplate.prototype.hasTemplateWithRole = function (role) {
        return _.find(this.templates, function (t) { return t.role === role; });
    };
    return TableTemplate;
}(TemplateList_1.TemplateList));
exports.TableTemplate = TableTemplate;


/***/ }),

/***/ 428:
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResultListRenderer_1 = __webpack_require__(198);
var TableTemplate_1 = __webpack_require__(427);
var Dom_1 = __webpack_require__(1);
var _ = __webpack_require__(0);
var ResultListTableRenderer = /** @class */ (function (_super) {
    __extends(ResultListTableRenderer, _super);
    function ResultListTableRenderer(resultListOptions, autoCreateComponentsFn) {
        var _this = _super.call(this, resultListOptions, autoCreateComponentsFn) || this;
        _this.resultListOptions = resultListOptions;
        _this.autoCreateComponentsFn = autoCreateComponentsFn;
        _this.shouldDisplayHeader = true;
        _this.shouldDisplayFooter = false;
        if (_this.resultListOptions.resultTemplate instanceof TableTemplate_1.TableTemplate) {
            if (_this.resultListOptions.resultTemplate.hasTemplateWithRole('table-footer')) {
                _this.shouldDisplayFooter = true;
            }
            // If custom templates are defined but no header template, do not display it.
            if (_this.resultListOptions.resultTemplate.templates.length !== 0 &&
                !_this.resultListOptions.resultTemplate.hasTemplateWithRole('table-header')) {
                _this.shouldDisplayHeader = false;
            }
        }
        return _this;
    }
    ResultListTableRenderer.prototype.getStartFragment = function (resultElements, append) {
        if (!append && !_.isEmpty(resultElements) && this.shouldDisplayHeader) {
            return this.renderRoledTemplate('table-header');
        }
    };
    ResultListTableRenderer.prototype.getEndFragment = function (resultElements, append) {
        if (!append && !_.isEmpty(resultElements) && this.shouldDisplayFooter) {
            return this.renderRoledTemplate('table-footer');
        }
    };
    ResultListTableRenderer.prototype.renderRoledTemplate = function (role) {
        return __awaiter(this, void 0, void 0, function () {
            var elem, frag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resultListOptions.resultTemplate.instantiateRoleToElement(role)];
                    case 1:
                        elem = _a.sent();
                        Dom_1.$$(elem).addClass("coveo-result-list-" + role);
                        this.autoCreateComponentsFn(elem, undefined);
                        frag = document.createDocumentFragment();
                        frag.appendChild(elem);
                        return [2 /*return*/, frag];
                }
            });
        });
    };
    return ResultListTableRenderer;
}(ResultListRenderer_1.ResultListRenderer));
exports.ResultListTableRenderer = ResultListTableRenderer;


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Core_1 = __webpack_require__(25);
var ResultList_1 = __webpack_require__(84);
var underscore_1 = __webpack_require__(0);
var Dom_1 = __webpack_require__(1);
var Logger_1 = __webpack_require__(11);
var TemplateToHtml = /** @class */ (function () {
    function TemplateToHtml(args) {
        this.args = args;
    }
    TemplateToHtml.prototype.buildResults = function (results, layout, currentlyDisplayedResults) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, resultsPromises;
            return __generator(this, function (_a) {
                res = [];
                resultsPromises = underscore_1.map(results.results, function (result, index) {
                    return _this.buildResult(result, layout, currentlyDisplayedResults).then(function (resultElement) {
                        if (resultElement != null) {
                            res.push({ elem: resultElement, idx: index });
                        }
                        ResultList_1.ResultList.resultCurrentlyBeingRendered = null;
                        return resultElement;
                    });
                });
                // We need to sort by the original index order, because in lazy loading mode, it's possible that results does not gets rendered
                // in the correct order returned by the index, depending on the time it takes to load all the results component for a given result template
                return [2 /*return*/, Promise.all(resultsPromises).then(function () {
                        return underscore_1.pluck(underscore_1.sortBy(res, 'idx'), 'elem');
                    })];
            });
        });
    };
    TemplateToHtml.prototype.buildResult = function (result, layout, currentlyDisplayedResults) {
        return __awaiter(this, void 0, void 0, function () {
            var resultElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Core_1.Assert.exists(result);
                        Core_1.QueryUtils.setStateObjectOnQueryResult(this.args.queryStateModel.get(), result);
                        Core_1.QueryUtils.setSearchInterfaceObjectOnQueryResult(this.args.searchInterface, result);
                        ResultList_1.ResultList.resultCurrentlyBeingRendered = result;
                        return [4 /*yield*/, this.createHtmlElement(result, layout)];
                    case 1:
                        resultElement = _a.sent();
                        if (resultElement != null) {
                            Core_1.Component.bindResultToElement(resultElement, result);
                        }
                        currentlyDisplayedResults.push(result);
                        return [4 /*yield*/, this.autoCreateComponentsInsideResult(resultElement, result).initResult];
                    case 2:
                        _a.sent();
                        this.verifyChildren(resultElement);
                        return [2 /*return*/, resultElement];
                }
            });
        });
    };
    TemplateToHtml.prototype.autoCreateComponentsInsideResult = function (element, result) {
        Core_1.Assert.exists(element);
        return Core_1.Initialization.automaticallyCreateComponentsInsideResult(element, result);
    };
    TemplateToHtml.prototype.createHtmlElement = function (result, layout) {
        return this.args.resultTemplate.instantiateToElement(result, {
            wrapInDiv: true,
            checkCondition: true,
            currentLayout: layout,
            responsiveComponents: this.args.searchInterface.responsiveComponents
        });
    };
    TemplateToHtml.prototype.verifyChildren = function (element) {
        var containsResultLink = !!Dom_1.$$(element).find('.CoveoResultLink');
        if (containsResultLink) {
            return;
        }
        var msg = "Result does not contain a \"CoveoResultLink\" component, please verify the result template";
        new Logger_1.Logger(element).warn(msg, this.args.resultTemplate);
    };
    return TemplateToHtml;
}());
exports.TemplateToHtml = TemplateToHtml;


/***/ }),

/***/ 430:
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
var Template_1 = __webpack_require__(23);
var DefaultRecommendationTemplate = /** @class */ (function (_super) {
    __extends(DefaultRecommendationTemplate, _super);
    function DefaultRecommendationTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultRecommendationTemplate.prototype.instantiateToString = function (object) {
        var template = "<div class=\"coveo-result-frame\">\n        <div class=\"coveo-result-row\">\n          <div class=\"coveo-result-cell\" style=\"width:40px;text-align:center;vertical-align:middle;\">\n            <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\">\n            </span>\n          </div>\n          <div class=\"coveo-result-cell\" style=\"padding:0 0 3px 5px;vertical-align:middle\">\n            <div class=\"coveo-result-row\">\n              <div class=\"coveo-result-cell\" style=\"font-size:10pt;\">\n                <a class=\"CoveoResultLink\" style=\"display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\">\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>";
        return template;
    };
    DefaultRecommendationTemplate.prototype.instantiateToElement = function (object) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var div = document.createElement('div');
            div.innerHTML = _this.instantiateToString(object);
            resolve(div);
        });
    };
    return DefaultRecommendationTemplate;
}(Template_1.Template));
exports.DefaultRecommendationTemplate = DefaultRecommendationTemplate;


/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TemplateHelpers_1 = __webpack_require__(110);
var HighlightUtils_1 = __webpack_require__(64);
var DateUtils_1 = __webpack_require__(29);
var CurrencyUtils_1 = __webpack_require__(125);
var HtmlUtils_1 = __webpack_require__(168);
var Utils_1 = __webpack_require__(4);
var StringUtils_1 = __webpack_require__(19);
var TimeSpanUtils_1 = __webpack_require__(65);
var EmailUtils_1 = __webpack_require__(167);
var QueryUtils_1 = __webpack_require__(21);
var DeviceUtils_1 = __webpack_require__(22);
var Dom_1 = __webpack_require__(1);
var SearchEndpoint_1 = __webpack_require__(49);
var StreamHighlightUtils_1 = __webpack_require__(108);
var FacetUtils_1 = __webpack_require__(46);
var Globalize = __webpack_require__(20);
var _ = __webpack_require__(0);
var Component_1 = __webpack_require__(6);
var TemplateCache_1 = __webpack_require__(63);
var CoreHelpers = /** @class */ (function () {
    function CoreHelpers() {
    }
    /**
     * For backward compatibility reason, the "global" template helper should be available under the
     * coveo namespace.
     * @param scope
     */
    CoreHelpers.exportAllHelpersGlobally = function (scope) {
        _.each(TemplateHelpers_1.TemplateHelpers.getHelpers(), function (helper, name) {
            if (scope[name] == undefined) {
                scope[name] = helper;
            }
        });
    };
    return CoreHelpers;
}());
exports.CoreHelpers = CoreHelpers;
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('javascriptEncode', function (value) {
    return Utils_1.Utils.exists(value) ? StringUtils_1.StringUtils.javascriptEncode(value) : undefined;
});
var executeShorten = function (content, options) {
    var strAndHoles = HighlightUtils_1.StringAndHoles.shortenString(content, options.length, '...');
    if (Utils_1.Utils.exists(options.highlights)) {
        return HighlightUtils_1.HighlightUtils.highlightString(strAndHoles.value, options.highlights, strAndHoles.holes, options.cssClass || 'highlight');
    }
    else {
        return strAndHoles.value;
    }
};
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('shorten', function (content, length, highlights, cssClass) {
    return executeShorten(content, {
        length: length,
        highlights: highlights,
        cssClass: cssClass
    });
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('shortenv2', function (content, options) {
    return executeShorten(content, options);
});
var executeShortenPath = function (content, options) {
    var strAndHoles = HighlightUtils_1.StringAndHoles.shortenPath(content, options.length);
    if (Utils_1.Utils.exists(options.highlights)) {
        return HighlightUtils_1.HighlightUtils.highlightString(strAndHoles.value, options.highlights, strAndHoles.holes, options.cssClass || 'highlight');
    }
    else {
        return strAndHoles.value;
    }
};
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('shortenPath', function (content, length, highlights, cssClass) {
    return executeShortenPath(content, {
        length: length,
        highlights: highlights,
        cssClass: cssClass
    });
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('shortenPathv2', function (content, options) {
    return executeShortenPath(content, options);
});
var executeShortenUri = function (content, options) {
    var strAndHoles = HighlightUtils_1.StringAndHoles.shortenUri(content, options.length);
    if (Utils_1.Utils.exists(options.highlights)) {
        return HighlightUtils_1.HighlightUtils.highlightString(strAndHoles.value, options.highlights, strAndHoles.holes, options.cssClass || 'highlight');
    }
    else {
        return strAndHoles.value;
    }
};
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('shortenUri', function (content, length, highlights, cssClass) {
    return executeShortenUri(content, {
        length: length,
        highlights: highlights,
        cssClass: cssClass
    });
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('shortenUriv2', function (content, options) {
    return executeShortenUri(content, options);
});
var executeHighlight = function (content, options) {
    if (Utils_1.Utils.exists(content)) {
        if (Utils_1.Utils.exists(options.highlights)) {
            return HighlightUtils_1.HighlightUtils.highlightString(content, options.highlights, null, options.cssClass || 'highlight');
        }
        else {
            return content;
        }
    }
    else {
        return undefined;
    }
};
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('highlight', function (content, highlights, cssClass) {
    return executeHighlight(content, {
        highlights: highlights,
        cssClass: cssClass
    });
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('highlightv2', function (content, options) {
    return executeHighlight(content, options);
});
var executeHighlightStreamText = function (content, options) {
    if (Utils_1.Utils.exists(content) && Utils_1.Utils.exists(options.termsToHighlight) && Utils_1.Utils.exists(options.phrasesToHighlight)) {
        if (termsToHighlightAreDefined(options.termsToHighlight, options.phrasesToHighlight)) {
            return StreamHighlightUtils_1.StreamHighlightUtils.highlightStreamText(content, options.termsToHighlight, options.phrasesToHighlight, options.opts);
        }
        else {
            return content;
        }
    }
    else {
        return undefined;
    }
};
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('highlightStreamText', function (content, termsToHighlight, phrasesToHighlight, opts) {
    if (termsToHighlight === void 0) { termsToHighlight = resolveTermsToHighlight(); }
    if (phrasesToHighlight === void 0) { phrasesToHighlight = resolvePhrasesToHighlight(); }
    return executeHighlightStreamText(content, {
        termsToHighlight: termsToHighlight,
        phrasesToHighlight: phrasesToHighlight,
        opts: opts
    });
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('highlightStreamTextv2', function (content, options) {
    var mergedOptions = __assign({ termsToHighlight: resolveTermsToHighlight(), phrasesToHighlight: resolvePhrasesToHighlight() }, options);
    return executeHighlightStreamText(content, mergedOptions);
});
var executeHighlightStreamHTML = function (content, options) {
    if (Utils_1.Utils.exists(content) && Utils_1.Utils.exists(options.termsToHighlight) && Utils_1.Utils.exists(options.phrasesToHighlight)) {
        if (termsToHighlightAreDefined(options.termsToHighlight, options.phrasesToHighlight)) {
            return StreamHighlightUtils_1.StreamHighlightUtils.highlightStreamHTML(content, options.termsToHighlight, options.phrasesToHighlight, options.opts);
        }
        else {
            return content;
        }
    }
    else {
        return undefined;
    }
};
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('highlightStreamHTML', function (content, termsToHighlight, phrasesToHighlight, opts) {
    if (termsToHighlight === void 0) { termsToHighlight = resolveTermsToHighlight(); }
    if (phrasesToHighlight === void 0) { phrasesToHighlight = resolvePhrasesToHighlight(); }
    return executeHighlightStreamHTML(content, {
        termsToHighlight: termsToHighlight,
        phrasesToHighlight: phrasesToHighlight,
        opts: opts
    });
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('highlightStreamHTMLv2', function (content, options) {
    return executeHighlightStreamHTML(content, options);
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('number', function (value, options) {
    var numberValue = Number(value);
    if (Utils_1.Utils.exists(value)) {
        if (_.isString(options)) {
            return StringUtils_1.StringUtils.htmlEncode(Globalize.format(numberValue, options));
        }
        else {
            return StringUtils_1.StringUtils.htmlEncode(numberValue.toString());
        }
    }
    else {
        return undefined;
    }
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('date', function (value, options) {
    return DateUtils_1.DateUtils.dateToString(DateUtils_1.DateUtils.convertFromJsonDateIfNeeded(value), options);
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('time', function (value, options) {
    return DateUtils_1.DateUtils.timeToString(DateUtils_1.DateUtils.convertFromJsonDateIfNeeded(value), options);
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('dateTime', function (value, options) {
    return DateUtils_1.DateUtils.dateTimeToString(DateUtils_1.DateUtils.convertFromJsonDateIfNeeded(value), options);
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('emailDateTime', function (value, options) {
    var defaultOptions = {};
    defaultOptions.includeTimeIfThisWeek = true;
    var optionsToUse = _.extend(options, defaultOptions);
    return value ? DateUtils_1.DateUtils.dateTimeToString(DateUtils_1.DateUtils.convertFromJsonDateIfNeeded(value), optionsToUse) : undefined;
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('currency', function (value, options) {
    return CurrencyUtils_1.CurrencyUtils.currencyToString(value, options);
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('timeSpan', function (value, options) {
    if (options === void 0) { options = { isMilliseconds: false }; }
    return new TimeSpanUtils_1.TimeSpan(value, options.isMilliseconds).getHHMMSS();
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('email', function (value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // support old arguments (value: any, companyDomain: string, me: string, lengthLimit = 2, truncateName = false)
    var companyDomain;
    var me;
    var lengthLimit;
    var truncateName;
    if (_.isObject(args[0])) {
        companyDomain = args[0]['companyDomain'];
        me = args[0]['me'];
        lengthLimit = args[0]['lengthLimit'];
        truncateName = args[0]['truncateName'];
    }
    else {
        companyDomain = args[0];
        me = args[1];
        lengthLimit = args[2];
        truncateName = args[3];
    }
    if (lengthLimit == undefined) {
        lengthLimit = 2;
    }
    if (truncateName == undefined) {
        truncateName = false;
    }
    if (_.isString(value)) {
        var listOfAddresses = EmailUtils_1.EmailUtils.splitSemicolonSeparatedListOfEmailAddresses(value);
        return EmailUtils_1.EmailUtils.emailAddressesToHyperlinks(listOfAddresses, companyDomain, me, lengthLimit, truncateName);
    }
    else if (_.isArray(value)) {
        return EmailUtils_1.EmailUtils.emailAddressesToHyperlinks(value, companyDomain, me, lengthLimit, truncateName);
    }
    else {
        return undefined;
    }
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('excessEmailToggle', function (target) {
    Dom_1.$$(target).removeClass('coveo-active');
    if (Dom_1.$$(target).hasClass('coveo-emails-excess-collapsed')) {
        _.each(Dom_1.$$(target).siblings('.coveo-emails-excess-expanded'), function (sibling) {
            Dom_1.$$(sibling).addClass('coveo-active');
        });
    }
    else if (Dom_1.$$(target).hasClass('coveo-hide-expanded')) {
        Dom_1.$$(target.parentElement).addClass('coveo-inactive');
        _.each(Dom_1.$$(target.parentElement).siblings('.coveo-emails-excess-collapsed'), function (sibling) {
            Dom_1.$$(sibling).addClass('coveo-active');
        });
    }
    return undefined;
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('anchor', function (href, options) {
    return HtmlUtils_1.AnchorUtils.buildAnchor(href, options);
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('image', function (src, options) {
    return HtmlUtils_1.ImageUtils.buildImage(src, options);
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('thumbnail', function (result, endpoint, options) {
    if (result === void 0) { result = resolveQueryResult(); }
    if (endpoint === void 0) { endpoint = 'default'; }
    if (QueryUtils_1.QueryUtils.hasThumbnail(result)) {
        return HtmlUtils_1.ImageUtils.buildImageFromResult(result, SearchEndpoint_1.SearchEndpoint.endpoints[endpoint], options);
    }
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('fromFileTypeToIcon', function (result, options) {
    if (result === void 0) { result = resolveQueryResult(); }
    if (options === void 0) { options = {}; }
    var icon = Component_1.Component.getComponentRef('Icon');
    if (icon) {
        return icon.createIcon(result, options).outerHTML;
    }
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('attrEncode', function (value) {
    return ('' + value) /* Forces the conversion to string. */
        .replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
        .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
        .replace(/'/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('loadTemplates', function (templatesToLoad, once) {
    if (once === void 0) { once = true; }
    var ret = '';
    var data = resolveQueryResult();
    var atLeastOneWasLoaded = false;
    var toLoad = templatesToLoad;
    var defaultTmpl;
    _.each(templatesToLoad, function (value, key, obj) {
        if (value == 'default') {
            defaultTmpl = key;
        }
    });
    if (defaultTmpl != undefined) {
        toLoad = _.omit(templatesToLoad, defaultTmpl);
    }
    _.each(toLoad, function (condition, id, obj) {
        if (!atLeastOneWasLoaded || !once) {
            atLeastOneWasLoaded = atLeastOneWasLoaded || condition;
            ret += TemplateHelpers_1.TemplateHelpers.getHelper('loadTemplate')(id, condition, data);
        }
    });
    if (!atLeastOneWasLoaded && defaultTmpl != undefined) {
        ret += TemplateHelpers_1.TemplateHelpers.getHelper('loadTemplate')(defaultTmpl, true, data);
    }
    return ret;
});
var byteMeasure = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('size', function (value, options) {
    var size = parseInt(value, 10);
    var precision = options != null && options.precision != null ? options.precision : 2;
    var base = options != null && options.base != null ? options.base : 0;
    while (size > 1024 && base + 1 < byteMeasure.length) {
        size /= 1024;
        base++;
    }
    size = Math.floor(size * Math.pow(10, precision)) / Math.pow(10, precision);
    return size + ' ' + byteMeasure[base];
});
TemplateHelpers_1.TemplateHelpers.registerFieldHelper('translatedCaption', function (value) {
    return FacetUtils_1.FacetUtils.tryToGetTranslatedCaption('@filetype', value);
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('loadTemplate', function (id, condition, data) {
    if (condition === void 0) { condition = true; }
    if (Utils_1.Utils.isNullOrUndefined(data)) {
        data = resolveQueryResult();
    }
    if (condition) {
        return TemplateCache_1.TemplateCache.getTemplate(id).instantiateToString(data, {
            checkCondition: false
        });
    }
    return '';
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('encodeCarriageReturn', function (data) {
    if (Utils_1.Utils.isNullOrUndefined(data)) {
        return undefined;
    }
    else {
        return StringUtils_1.StringUtils.encodeCarriageReturn(data);
    }
});
TemplateHelpers_1.TemplateHelpers.registerTemplateHelper('isMobileDevice', function () {
    return DeviceUtils_1.DeviceUtils.isMobileDevice() ? DeviceUtils_1.DeviceUtils.getDeviceName() : null;
});
function resolveQueryResult() {
    var found;
    var resultList = Component_1.Component.getComponentRef('ResultList');
    if (resultList) {
        found = resultList.resultCurrentlyBeingRendered;
    }
    if (!found) {
        var quickview = Component_1.Component.getComponentRef('Quickview');
        if (quickview) {
            found = quickview.resultCurrentlyBeingRendered;
        }
    }
    return found;
}
function resolveTermsToHighlight() {
    var currentQueryResult = resolveQueryResult();
    if (currentQueryResult) {
        return currentQueryResult.termsToHighlight;
    }
}
function resolvePhrasesToHighlight() {
    var currentQueryResult = resolveQueryResult();
    if (currentQueryResult) {
        return currentQueryResult.phrasesToHighlight;
    }
}
function termsToHighlightAreDefined(termsToHighlight, phrasesToHighlight) {
    return Utils_1.Utils.isNonEmptyArray(_.keys(termsToHighlight)) || Utils_1.Utils.isNonEmptyArray(_.keys(phrasesToHighlight));
}


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Result_1 = __webpack_require__(47);
var RefResult_1 = __webpack_require__(455);
var ExpressionEndOfInput_1 = __webpack_require__(204);
var _ = __webpack_require__(0);
var ExpressionRef = /** @class */ (function () {
    function ExpressionRef(ref, occurrence, id, grammar) {
        this.ref = ref;
        this.occurrence = occurrence;
        this.id = id;
        this.grammar = grammar;
    }
    ExpressionRef.prototype.parse = function (input, end) {
        var ref = this.grammar.getExpression(this.ref);
        if (ref == null) {
            throw new Error('Expression not found:' + this.ref);
        }
        if (this.occurrence == '?' || this.occurrence == null) {
            return this.parseOnce(input, end, ref);
        }
        else {
            return this.parseMany(input, end, ref);
        }
    };
    ExpressionRef.prototype.parseOnce = function (input, end, ref) {
        var refResult = ref.parse(input, end);
        var success = refResult.isSuccess();
        if (!success && this.occurrence == '?') {
            if (end) {
                // if end was found
                if (input.length == 0) {
                    return new RefResult_1.RefResult([], this, input, refResult);
                }
                // if end was not found and all error expression are EndOfInput, reparse with end = false.
                if (_.all(refResult.getBestExpect(), function (expect) { return expect.expression == ExpressionEndOfInput_1.ExpressionEndOfInput; })) {
                    return new RefResult_1.RefResult([new Result_1.Result(null, ExpressionEndOfInput_1.ExpressionEndOfInput, input)], this, input, refResult);
                }
                return refResult;
            }
            // the ref is not required and it do not need to end the input
            return new RefResult_1.RefResult([], this, input, null);
        }
        return new RefResult_1.RefResult([refResult], this, input, success ? null : refResult);
    };
    ExpressionRef.prototype.parseMany = function (input, end, ref) {
        var subResults = [];
        var subResult;
        var subInput = input;
        var success;
        // try to parse until it do not match, do not manage the end yet
        do {
            subResult = ref.parse(subInput, false);
            success = subResult.isSuccess();
            if (success) {
                subResults.push(subResult);
                subInput = subInput.substr(subResult.getLength());
            }
        } while (success && subResult.input != subInput);
        // minimal occurance of a ref
        var requiredOccurance = _.isNumber(this.occurrence) ? this.occurrence : this.occurrence == '+' ? 1 : 0;
        // if the minimal occurance is not reached add the fail result to the list
        if (subResults.length < requiredOccurance) {
            subResults.push(subResult);
        }
        else if (end) {
            // if there is at least one match, check if the last match is at the end
            if (subResults.length > 0) {
                var last = _.last(subResults);
                subResult = ref.parse(last.input, true);
                if (subResult.isSuccess()) {
                    // if successful, replace the last subResult by the one with end
                    subResults[subResults.length - 1] = subResult;
                }
                else {
                    // if not successful, we keep the last successful result and we add a endOfInputExpected Result after it
                    subResults.push(new Result_1.Result(null, ExpressionEndOfInput_1.ExpressionEndOfInput, last.input.substr(last.getLength())));
                    // we parse back the last with the length of the successful Result (at the same place we put the endOfInputExpected) and put it in failAttempt
                    subResult = ref.parse(last.input.substr(last.getLength()), true);
                }
            }
            else if (input.length != 0) {
                // if there is no result at all and we are not at the end, return a endOfInputExpected Result
                var endOfInput = new Result_1.Result(null, ExpressionEndOfInput_1.ExpressionEndOfInput, input);
                return new RefResult_1.RefResult([endOfInput], this, input, subResult);
            }
        }
        return new RefResult_1.RefResult(subResults, this, input, subResult);
    };
    ExpressionRef.prototype.toString = function () {
        return this.id;
    };
    return ExpressionRef;
}());
exports.ExpressionRef = ExpressionRef;


/***/ }),

/***/ 455:
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
var Result_1 = __webpack_require__(47);
var _ = __webpack_require__(0);
var RefResult = /** @class */ (function (_super) {
    __extends(RefResult, _super);
    function RefResult(results, expression, input, lastResult) {
        var _this = _super.call(this, results, expression, input) || this;
        _this.expression = expression;
        _this.input = input;
        if (_.last(results) != lastResult) {
            _this.failAttempt = lastResult;
            if (_this.failAttempt != null) {
                _this.failAttempt.parent = _this;
            }
        }
        return _this;
    }
    /**
     * Return all fail result.
     */
    RefResult.prototype.getExpect = function () {
        var expect = _super.prototype.getExpect.call(this);
        // add the failAttempt to the expect
        if (this.failAttempt != null) {
            return expect.concat(this.failAttempt.getExpect());
        }
        return expect;
    };
    /**
     * Clean the result to have the most relevant result. If the result is successful just return a clone of it.
     */
    RefResult.prototype.clean = function (path) {
        // if there is no failAttempt, we will use the default clean
        if (this.failAttempt != null && (path != null || !this.isSuccess())) {
            path = path || _.last(this.getBestExpect()).path(this);
            var next = _.first(path);
            // if the next is in the subResults, not the failAttempt, do the default clean;
            if (next != null && next == this.failAttempt) {
                var last = _.last(this.subResults);
                // if the last is not successful, remove it because we want the failAttempt path
                var subResults = _.map(last != null && last.isSuccess() ? this.subResults : _.initial(this.subResults), function (subResult) {
                    return subResult.clean();
                });
                subResults.push(next.clean(_.rest(path)));
                return new Result_1.Result(subResults, this.expression, this.input);
            }
        }
        return _super.prototype.clean.call(this, path);
    };
    return RefResult;
}(Result_1.Result));
exports.RefResult = RefResult;


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OptionResult_1 = __webpack_require__(457);
var ExpressionOptions = /** @class */ (function () {
    function ExpressionOptions(parts, id) {
        this.parts = parts;
        this.id = id;
    }
    ExpressionOptions.prototype.parse = function (input, end) {
        var failAttempt = [];
        for (var i = 0; i < this.parts.length; i++) {
            var subResult = this.parts[i].parse(input, end);
            if (subResult.isSuccess()) {
                return new OptionResult_1.OptionResult(subResult, this, input, failAttempt);
            }
            failAttempt.push(subResult);
        }
        return new OptionResult_1.OptionResult(null, this, input, failAttempt);
    };
    ExpressionOptions.prototype.toString = function () {
        return this.id;
    };
    return ExpressionOptions;
}());
exports.ExpressionOptions = ExpressionOptions;


/***/ }),

/***/ 457:
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
var Result_1 = __webpack_require__(47);
var _ = __webpack_require__(0);
var OptionResult = /** @class */ (function (_super) {
    __extends(OptionResult, _super);
    function OptionResult(result, expression, input, failAttempt) {
        var _this = _super.call(this, result != null ? [result] : null, expression, input) || this;
        _this.result = result;
        _this.expression = expression;
        _this.input = input;
        _this.failAttempt = failAttempt;
        _.forEach(_this.failAttempt, function (subResult) {
            subResult.parent = _this;
        });
        return _this;
    }
    /**
     * Return all fail result.
     */
    OptionResult.prototype.getExpect = function () {
        var _this = this;
        var expect = [];
        if (this.result != null) {
            expect = this.result.getExpect();
        }
        expect = _.reduce(this.failAttempt, function (expect, result) { return expect.concat(result.getExpect()); }, expect);
        if (expect.length > 0 && _.all(expect, function (result) { return result.input == _this.input; })) {
            return [this];
        }
        return expect;
    };
    /**
     * Clean the result to have the most relevant result. If the result is successful just return a clone of it.
     */
    OptionResult.prototype.clean = function (path) {
        if (path != null || !this.isSuccess()) {
            // Result will be a ref. We skip it for cleaner tree.
            path = _.rest(path || _.last(this.getBestExpect()).path(this));
            // next can be Result or one of the failAttempt. In both case we have only one child
            var next = _.first(path);
            if (next == null) {
                return new Result_1.Result(null, this.expression, this.input);
            }
            return new Result_1.Result([next.clean(_.rest(path))], this.expression, this.input);
        }
        // Result will be a ref. We skip it for cleaner tree.
        return new Result_1.Result(_.map(this.result.subResults, function (subResult) { return subResult.clean(); }), this.expression, this.input);
    };
    return OptionResult;
}(Result_1.Result));
exports.OptionResult = OptionResult;


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Result_1 = __webpack_require__(47);
var Result_2 = __webpack_require__(47);
var ExpressionRegExp = /** @class */ (function () {
    function ExpressionRegExp(value, id, grammar) {
        this.value = value;
        this.id = id;
    }
    ExpressionRegExp.prototype.parse = function (input, end) {
        var groups = input.match(this.value);
        // if the RegExp do not match at the start, ignore it
        if (groups != null && groups.index != 0) {
            groups = null;
        }
        var result = new Result_1.Result(groups != null ? groups[0] : null, this, input);
        // if is successful and we require the end but the length of parsed is
        // lower than the input length, return a EndOfInputExpected Result
        if (result.isSuccess() && end && input.length > result.value.length) {
            return new Result_2.EndOfInputResult(result);
        }
        return result;
    };
    ExpressionRegExp.prototype.toString = function () {
        return this.id;
    };
    return ExpressionRegExp;
}());
exports.ExpressionRegExp = ExpressionRegExp;


/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpressionFunction = /** @class */ (function () {
    function ExpressionFunction(func, id, grammar) {
        this.func = func;
        this.id = id;
        this.grammar = grammar;
    }
    ExpressionFunction.prototype.parse = function (input, end) {
        return this.func(input, end, this);
    };
    ExpressionFunction.prototype.toString = function () {
        return this.id;
    };
    return ExpressionFunction;
}());
exports.ExpressionFunction = ExpressionFunction;


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path='Facet.ts' />
var StringUtils_1 = __webpack_require__(19);
var QueryUtils_1 = __webpack_require__(21);
var FileTypes_1 = __webpack_require__(107);
var DateUtils_1 = __webpack_require__(29);
var Utils_1 = __webpack_require__(4);
var Dom_1 = __webpack_require__(1);
var _ = __webpack_require__(0);
var Strings_1 = __webpack_require__(7);
var FacetUtils = /** @class */ (function () {
    function FacetUtils() {
    }
    FacetUtils.getRegexToUseForFacetSearch = function (value, ignoreAccent) {
        return new RegExp(StringUtils_1.StringUtils.stringToRegex(value, ignoreAccent), 'i');
    };
    FacetUtils.getValuesToUseForSearchInFacet = function (original, facet) {
        var ret = [original];
        var regex = this.getRegexToUseForFacetSearch(original, facet.options.facetSearchIgnoreAccents);
        if (facet.options.valueCaption) {
            _.chain(facet.options.valueCaption)
                .pairs()
                .filter(function (pair) {
                return regex.test(pair[1]);
            })
                .each(function (match) {
                ret.push(match[0]);
            });
            if (QueryUtils_1.QueryUtils.isStratusAgnosticField(facet.options.field, '@objecttype') ||
                QueryUtils_1.QueryUtils.isStratusAgnosticField(facet.options.field, '@filetype')) {
                _.each(FileTypes_1.FileTypes.getFileTypeCaptions(), function (value, key) {
                    if (!(key in facet.options.valueCaption) && regex.test(value)) {
                        ret.push(key);
                    }
                });
            }
        }
        else if (QueryUtils_1.QueryUtils.isStratusAgnosticField(facet.options.field, '@objecttype') ||
            QueryUtils_1.QueryUtils.isStratusAgnosticField(facet.options.field, '@filetype')) {
            _.each(_.filter(_.pairs(FileTypes_1.FileTypes.getFileTypeCaptions()), function (pair) {
                return regex.test(pair[1]);
            }), function (match) {
                ret.push(match[0]);
            });
        }
        else if (QueryUtils_1.QueryUtils.isStratusAgnosticField(facet.options.field, '@month')) {
            _.each(_.range(1, 13), function (month) {
                if (regex.test(DateUtils_1.DateUtils.monthToString(month - 1))) {
                    ret.push(('0' + month.toString()).substr(-2));
                }
            });
        }
        return ret;
    };
    FacetUtils.buildFacetSearchPattern = function (values) {
        values = _.map(values, function (value) {
            return Utils_1.Utils.escapeRegexCharacter(value);
        });
        values[0] = '.*' + values[0] + '.*';
        return values.join('|');
    };
    FacetUtils.needAnotherFacetSearch = function (currentSearchLength, newSearchLength, oldSearchLength, desiredSearchLength) {
        // Something was removed (currentSearch < newSearch)
        // && we might want to display more facet search result(currentSearch < desiredSearch)
        // && the new query returned more stuff than the old one so there's still more results(currentSearchLength > oldLength)
        return currentSearchLength < newSearchLength && currentSearchLength < desiredSearchLength && currentSearchLength > oldSearchLength;
    };
    FacetUtils.addNoStateCssClassToFacetValues = function (facet, container) {
        // This takes care of adding the correct css class on each facet value checkbox (empty white box) if at least one value is selected in that facet
        if (facet.values.getSelected().length != 0) {
            var noStates = Dom_1.$$(container).findAll('li:not(.coveo-selected)');
            _.each(noStates, function (noState) {
                Dom_1.$$(noState).addClass('coveo-no-state');
            });
        }
    };
    FacetUtils.tryToGetTranslatedCaption = function (field, value) {
        var found;
        if (QueryUtils_1.QueryUtils.isStratusAgnosticField(field.toLowerCase(), '@filetype')) {
            found = FileTypes_1.FileTypes.getFileType(value).caption;
        }
        else if (QueryUtils_1.QueryUtils.isStratusAgnosticField(field.toLowerCase(), '@objecttype')) {
            found = FileTypes_1.FileTypes.getObjectType(value).caption;
        }
        else if (FacetUtils.isMonthFieldValue(field, value)) {
            var month = parseInt(value, 10);
            found = DateUtils_1.DateUtils.monthToString(month - 1);
        }
        else {
            found = Strings_1.l(value);
        }
        return found != undefined && Utils_1.Utils.isNonEmptyString(found) ? found : value;
    };
    FacetUtils.isMonthFieldValue = function (field, value) {
        if (!QueryUtils_1.QueryUtils.isStratusAgnosticField(field.toLowerCase(), '@month')) {
            return false;
        }
        var asInt = parseInt(value, 10);
        if (isNaN(asInt)) {
            return false;
        }
        if (asInt < 1 || asInt > 12) {
            return false;
        }
        return true;
    };
    return FacetUtils;
}());
exports.FacetUtils = FacetUtils;


/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Result_1 = __webpack_require__(47);
var ExpressionList = /** @class */ (function () {
    function ExpressionList(parts, id) {
        this.parts = parts;
        this.id = id;
        if (parts.length == 0) {
            throw new Error(JSON.stringify(id) + ' should have at least 1 parts');
        }
    }
    ExpressionList.prototype.parse = function (input, end) {
        var subResults = [];
        var subResult;
        var subInput = input;
        for (var i = 0; i < this.parts.length; i++) {
            var part = this.parts[i];
            subResult = part.parse(subInput, end && i == this.parts.length - 1);
            subResults.push(subResult);
            // if the subResult do not succeed, stop the parsing
            if (!subResult.isSuccess()) {
                break;
            }
            else {
                subInput = subInput.substr(subResult.getLength());
            }
        }
        return new Result_1.Result(subResults, this, input);
    };
    ExpressionList.prototype.toString = function () {
        return this.id;
    };
    return ExpressionList;
}());
exports.ExpressionList = ExpressionList;


/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Field_1 = __webpack_require__(206);
exports.NestedQuery = {
    basicExpressions: ['NestedQuery'],
    grammars: {
        NestedQuery: '[[NestedField][OptionalSpaces][Expressions]]',
        NestedField: '[[Field]]',
        FieldValue: ['NestedQuery']
    },
    include: [Field_1.Field]
};


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Basic_1 = __webpack_require__(128);
exports.Date = {
    grammars: {
        Date: '[DateYear]/[DateMonth]/[DateDay]',
        DateYear: /([0-9]{4})/,
        DateMonth: /(1[0-2]|0?[1-9])/,
        DateDay: /([1-2][0-9]|3[0-1]|0?[1-9])/,
        DateRange: '[Date][Spaces?]..[Spaces?][Date]',
        DateRelative: ['DateRelativeNegative', 'DateRelativeTerm'],
        DateRelativeTerm: /now|today|yesterday/,
        DateRelativeNegative: '[DateRelativeTerm][DateRelativeNegativeRef]',
        DateRelativeNegativeRef: /([\-\+][0-9]+(s|m|h|d|mo|y))/
    },
    include: [Basic_1.Basic]
};


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Basic_1 = __webpack_require__(128);
exports.QueryExtension = {
    basicExpressions: ['QueryExtension'],
    grammars: {
        QueryExtension: '$[QueryExtensionName]([QueryExtensionArguments])',
        QueryExtensionName: /\w+/,
        QueryExtensionArguments: '[QueryExtensionArgumentList*][QueryExtensionArgument]',
        QueryExtensionArgumentList: '[QueryExtensionArgument][Spaces?],[Spaces?]',
        QueryExtensionArgument: '[QueryExtensionArgumentName]:[Spaces?][QueryExtensionArgumentValue]',
        QueryExtensionArgumentName: /\w+/,
        QueryExtensionArgumentValue: ['SingleQuoted', 'Expressions']
    },
    include: [Basic_1.Basic]
};


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SubExpression = {
    basicExpressions: ['SubExpression'],
    grammars: {
        SubExpression: '([Expressions])'
    }
};


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var Core_1 = __webpack_require__(25);
var Strings_1 = __webpack_require__(7);
var Dom_1 = __webpack_require__(1);
var KeyboardUtils_1 = __webpack_require__(26);
var InputManager = /** @class */ (function () {
    function InputManager(element, onchange, magicBox) {
        this.onchange = onchange;
        this.magicBox = magicBox;
        this.hasFocus = false;
        this.root = Core_1.Component.resolveRoot(element);
        this.underlay = document.createElement('div');
        this.underlay.className = 'magic-box-underlay';
        this.highlightContainer = document.createElement('span');
        this.highlightContainer.className = 'magic-box-highlight-container';
        this.underlay.appendChild(this.highlightContainer);
        this.ghostTextContainer = document.createElement('span');
        this.ghostTextContainer.className = 'magic-box-ghost-text';
        this.underlay.appendChild(this.ghostTextContainer);
        this.input = Dom_1.$$(element).find('input');
        if (!this.input) {
            this.input = document.createElement('input');
            element.appendChild(this.underlay);
            element.appendChild(this.input);
        }
        else {
            element.insertBefore(this.underlay, this.input);
        }
        this.setupHandler();
        this.addAccessibilitiesProperties();
    }
    /**
     * Update the input with the result value
     */
    InputManager.prototype.updateInput = function () {
        if (this.input.value != this.result.input) {
            this.input.value = this.result.input;
            if (this.hasFocus) {
                this.setCursor(this.getValue().length);
            }
        }
    };
    /**
     * Update the highlight with the result value
     */
    InputManager.prototype.updateHighlight = function () {
        Dom_1.$$(this.highlightContainer).empty();
        this.highlightContainer.appendChild(this.result.toHtmlElement());
    };
    /**
     * Update the ghostText with the wordCompletion
     */
    InputManager.prototype.updateWordCompletion = function () {
        Dom_1.$$(this.ghostTextContainer).empty();
        this.ghostTextContainer.innerHTML = '';
        if (this.wordCompletion != null) {
            this.ghostTextContainer.appendChild(document.createTextNode(this.wordCompletion.substr(this.result.input.length)));
        }
    };
    /**
     * Set the result and update visual if needed
     */
    InputManager.prototype.setResult = function (result, wordCompletion) {
        this.result = result;
        this.updateInput();
        this.updateHighlight();
        // reuse last wordCompletion for a better visual
        if (_.isUndefined(wordCompletion) && this.wordCompletion != null && this.wordCompletion.indexOf(this.result.input) == 0) {
            this.updateWordCompletion();
        }
        else {
            this.setWordCompletion(wordCompletion);
        }
        this.updateScroll();
    };
    /**
     * Set the word completion. will be ignore if the word completion do not start with the result input
     */
    InputManager.prototype.setWordCompletion = function (wordCompletion) {
        if (wordCompletion != null && wordCompletion.toLowerCase().indexOf(this.result.input.toLowerCase()) != 0) {
            wordCompletion = null;
        }
        this.wordCompletion = wordCompletion;
        this.updateWordCompletion();
        this.updateScroll();
    };
    /**
     * Set cursor position
     */
    InputManager.prototype.setCursor = function (index) {
        this.input.focus();
        if (this.input.createTextRange) {
            var range = this.input.createTextRange();
            range.move('character', index);
            range.select();
        }
        else if (this.input.selectionStart != null) {
            this.input.focus();
            this.input.setSelectionRange(index, index);
        }
    };
    InputManager.prototype.getCursor = function () {
        return this.input.selectionStart;
    };
    InputManager.prototype.updateScroll = function (defer) {
        var _this = this;
        if (defer === void 0) { defer = true; }
        var callback = function () {
            // this is the cheapest call we can do before update scroll
            if (_this.underlay.clientWidth < _this.underlay.scrollWidth) {
                _this.underlay.style.visibility = 'hidden';
                _this.underlay.scrollLeft = _this.input.scrollLeft;
                _this.underlay.scrollTop = _this.input.scrollTop;
                _this.underlay.style.visibility = 'visible';
            }
            _this.updateScrollDefer = null;
            // one day we will have to remove this
            if (_this.hasFocus) {
                _this.updateScroll();
            }
        };
        // sometime we want it to be updated as soon as posible to have no flickering
        if (!defer) {
            callback();
        }
        else if (this.updateScrollDefer == null) {
            this.updateScrollDefer = requestAnimationFrame(callback);
        }
    };
    InputManager.prototype.setupHandler = function () {
        var _this = this;
        this.input.onblur = function () {
            _this.hasFocus = false;
            setTimeout(function () {
                if (!_this.hasFocus) {
                    _this.onblur && _this.onblur();
                }
            }, 300);
            _this.updateScroll();
        };
        this.input.onfocus = function () {
            if (!_this.hasFocus) {
                _this.hasFocus = true;
                _this.updateScroll();
                _this.onfocus && _this.onfocus();
            }
        };
        this.input.onkeydown = function (e) {
            _this.keydown(e);
        };
        this.input.onkeyup = function (e) {
            _this.keyup(e);
        };
        this.input.onclick = function () {
            _this.onchangecursor();
        };
        this.input.oncut = function () {
            setTimeout(function () {
                _this.onInputChange();
            });
        };
        this.input.onpaste = function () {
            setTimeout(function () {
                _this.onInputChange();
            });
        };
    };
    InputManager.prototype.addAccessibilitiesProperties = function () {
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('role', 'searchbox');
        this.input.setAttribute('form', 'coveo-dummy-form');
        this.input.setAttribute('aria-autocomplete', 'list');
        this.input.setAttribute('title', Strings_1.l('InsertAQuery') + ". " + Strings_1.l('PressEnterToSend'));
    };
    InputManager.prototype.focus = function () {
        var _this = this;
        this.hasFocus = true;
        // neet a timeout for IE8-9
        setTimeout(function () {
            _this.input.focus();
            _this.setCursor(_this.getValue().length);
        });
    };
    InputManager.prototype.blur = function () {
        if (this.hasFocus) {
            this.input.blur();
        }
    };
    InputManager.prototype.keydown = function (e) {
        var _this = this;
        switch (e.keyCode || e.which) {
            case KeyboardUtils_1.KEYBOARD.TAB:
                // Take care of not "preventing" the default event behaviour : For accessibility reasons, it is much simpler
                // to simply let the browser do it's standard action (which is to focus out of the input).
                // Instead, handle "tabPress" immediately instead of "keyup".
                // The focus will be on the next element in the page when the key is released, so keyup on the input will never be triggered.
                this.tabPress();
                this.magicBox.clearSuggestion();
                break;
            default:
                e.stopPropagation();
                if (this.onkeydown == null || this.onkeydown(e.keyCode || e.which)) {
                    requestAnimationFrame(function () {
                        _this.onInputChange();
                    });
                }
                else {
                    e.preventDefault();
                }
                break;
        }
    };
    InputManager.prototype.keyup = function (e) {
        switch (e.keyCode || e.which) {
            case KeyboardUtils_1.KEYBOARD.LEFT_ARROW:
            case KeyboardUtils_1.KEYBOARD.RIGHT_ARROW:
                this.handleLeftRightArrow(e);
                break;
            default:
                if (this.onkeydown == null || this.onkeyup(e.keyCode || e.which)) {
                    this.onInputChange();
                }
                else {
                    e.preventDefault();
                }
                break;
        }
    };
    InputManager.prototype.handleLeftRightArrow = function (e) {
        var querySuggestPreview = Dom_1.$$(this.root).find("." + Core_1.Component.computeCssClassNameForType('QuerySuggestPreview'));
        if (!querySuggestPreview) {
            this.onchangecursor();
        }
        var inputChanged = this.onkeydown == null || this.onkeyup(e.keyCode || e.which);
        inputChanged ? this.onInputChange() : e.preventDefault();
    };
    InputManager.prototype.tabPress = function () {
        this.ontabpress && this.ontabpress();
        this.onblur && this.onblur();
    };
    InputManager.prototype.onInputChange = function () {
        if (this.result.input != this.input.value) {
            this.onchange(this.input.value, false);
        }
    };
    InputManager.prototype.getValue = function () {
        return this.input.value;
    };
    InputManager.prototype.getWordCompletion = function () {
        return this.wordCompletion;
    };
    return InputManager;
}());
exports.InputManager = InputManager;


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __webpack_require__(0);
var OmniboxEvents_1 = __webpack_require__(32);
var Component_1 = __webpack_require__(6);
var QuerySuggestPreview_1 = __webpack_require__(171);
var Dom_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(4);
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
var SuggestionsManager = /** @class */ (function () {
    function SuggestionsManager(element, magicBoxContainer, inputManager, options) {
        var _this = this;
        this.element = element;
        this.magicBoxContainer = magicBoxContainer;
        this.inputManager = inputManager;
        this.root = Component_1.Component.resolveRoot(element);
        this.options = underscore_1.defaults(options, {
            selectableClass: 'magic-box-suggestion',
            selectedClass: 'magic-box-selected'
        });
        // Put in a sane default, so as to not reject every suggestions if not set on initialization
        if (this.options.timeout == undefined) {
            this.options.timeout = 500;
        }
        this.hasSuggestions = false;
        Dom_1.$$(this.element).on('mouseover', function (e) {
            _this.handleMouseOver(e);
        });
        Dom_1.$$(this.element).on('mouseout', function (e) {
            _this.handleMouseOut(e);
        });
        this.suggestionsListbox = this.buildSuggestionsContainer();
        this.suggestionsPreviewContainer = this.initPreviewForSuggestions(this.suggestionsListbox);
        Dom_1.$$(this.element).append(this.suggestionsPreviewContainer.el);
        this.addAccessibilityPropertiesForCombobox();
        this.appendEmptySuggestionOption();
    }
    SuggestionsManager.prototype.handleMouseOver = function (e) {
        var target = Dom_1.$$(e.target);
        var parents = target.parents(this.options.selectableClass);
        if (target.hasClass(this.options.selectableClass)) {
            this.processMouseSelection(target.el);
        }
        else if (parents.length > 0 && this.element.contains(parents[0])) {
            this.processMouseSelection(parents[0]);
        }
    };
    SuggestionsManager.prototype.handleMouseOut = function (e) {
        var target = Dom_1.$$(e.target);
        var targetParents = target.parents(this.options.selectableClass);
        //e.relatedTarget is not available if moving off the browser window or is an empty object `{}` when moving out of namespace in LockerService.
        if (e.relatedTarget && Dom_1.$$(e.relatedTarget).isValid()) {
            var relatedTargetParents = Dom_1.$$(e.relatedTarget).parents(this.options.selectableClass);
            if (target.hasClass(this.options.selectedClass) && !Dom_1.$$(e.relatedTarget).hasClass(this.options.selectableClass)) {
                this.removeSelectedStatus(target.el);
            }
            else if (relatedTargetParents.length == 0 && targetParents.length > 0) {
                this.removeSelectedStatus(targetParents[0]);
            }
        }
        else {
            if (target.hasClass(this.options.selectedClass)) {
                this.removeSelectedStatus(target.el);
            }
            else if (targetParents.length > 0) {
                this.removeSelectedStatus(targetParents[0]);
            }
        }
        Dom_1.$$(this.root).trigger(OmniboxEvents_1.OmniboxEvents.querySuggestLoseFocus);
    };
    SuggestionsManager.prototype.moveDown = function () {
        this.move(Direction.Down);
    };
    SuggestionsManager.prototype.moveUp = function () {
        this.move(Direction.Up);
    };
    SuggestionsManager.prototype.moveLeft = function () {
        this.move(Direction.Left);
    };
    SuggestionsManager.prototype.moveRight = function () {
        this.move(Direction.Right);
    };
    SuggestionsManager.prototype.selectAndReturnKeyboardFocusedElement = function () {
        var selected = this.keyboardFocusedSuggestion;
        if (selected != null) {
            Dom_1.$$(selected).trigger('keyboardSelect');
            // By definition, once an element has been "selected" with the keyboard,
            // it is not longer "active" since the event has been processed.
            this.keyboardFocusedSuggestion = null;
        }
        return selected;
    };
    SuggestionsManager.prototype.mergeSuggestions = function (suggestions, callback) {
        var _this = this;
        var results = [];
        var timeout;
        var stillNeedToResolve = true;
        // clean empty / null values in the array of suggestions
        suggestions = underscore_1.compact(suggestions);
        var promise = (this.pendingSuggestion = new Promise(function (resolve, reject) {
            // Concat all promises results together in one flat array.
            // If one promise take too long to resolve, simply skip it
            underscore_1.each(suggestions, function (suggestion) {
                var shouldRejectPart = false;
                setTimeout(function () {
                    shouldRejectPart = true;
                    stillNeedToResolve = false;
                }, _this.options.timeout);
                suggestion.then(function (item) {
                    if (!shouldRejectPart && item) {
                        results = results.concat(item);
                    }
                });
            });
            // Resolve the promise when one of those conditions is met first :
            // - All suggestions resolved
            // - Timeout is reached before all promises have processed -> resolve with what we have so far
            // - No suggestions given (length 0 or undefined)
            var onResolve = function () {
                if (stillNeedToResolve) {
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    if (results.length == 0) {
                        resolve([]);
                    }
                    else if (promise == _this.pendingSuggestion || _this.pendingSuggestion == null) {
                        resolve(results.sort(function (a, b) { return b.index - a.index; }));
                    }
                    else {
                        reject('new request queued');
                    }
                }
                stillNeedToResolve = false;
            };
            if (suggestions.length == 0) {
                onResolve();
            }
            if (suggestions == undefined) {
                onResolve();
            }
            timeout = setTimeout(function () {
                onResolve();
            }, _this.options.timeout);
            Promise.all(suggestions).then(function () { return onResolve(); });
        }));
        promise
            .then(function (suggestions) {
            if (callback) {
                callback(suggestions);
            }
            _this.updateSuggestions(suggestions);
            return suggestions;
        })
            .catch(function () {
            return null;
        });
    };
    SuggestionsManager.prototype.updateSuggestions = function (suggestions) {
        var _this = this;
        this.suggestionsListbox.empty();
        this.inputManager.input.removeAttribute('aria-activedescendant');
        this.hasSuggestions = suggestions.length > 0;
        Dom_1.$$(this.element).toggleClass('magic-box-hasSuggestion', this.hasSuggestions);
        Dom_1.$$(this.magicBoxContainer).setAttribute('aria-expanded', this.hasSuggestions.toString());
        if (!this.hasSuggestions) {
            this.appendEmptySuggestionOption();
            Dom_1.$$(this.root).trigger(OmniboxEvents_1.OmniboxEvents.querySuggestLoseFocus);
            return;
        }
        underscore_1.each(suggestions, function (suggestion) {
            var dom = suggestion.dom ? _this.modifyDomFromExistingSuggestion(suggestion.dom) : _this.createDomFromSuggestion(suggestion);
            dom.setAttribute('id', "magic-box-suggestion-" + underscore_1.indexOf(suggestions, suggestion));
            dom.setAttribute('role', 'option');
            dom.setAttribute('aria-selected', 'false');
            dom.setAttribute('aria-label', dom.text());
            dom['suggestion'] = suggestion;
            _this.suggestionsListbox.append(dom.el);
        });
        Dom_1.$$(this.root).trigger(OmniboxEvents_1.OmniboxEvents.querySuggestRendered);
    };
    Object.defineProperty(SuggestionsManager.prototype, "selectedSuggestion", {
        get: function () {
            if (this.htmlElementIsSuggestion(this.keyboardFocusedSuggestion)) {
                return this.returnMoved(this.keyboardFocusedSuggestion);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    SuggestionsManager.prototype.processKeyboardSelection = function (suggestion) {
        this.addSelectedStatus(suggestion);
        this.updateSelectedSuggestion(suggestion.innerText);
        this.keyboardFocusedSuggestion = suggestion;
        Dom_1.$$(this.inputManager.input).setAttribute('aria-activedescendant', Dom_1.$$(suggestion).getAttribute('id'));
    };
    SuggestionsManager.prototype.processKeyboardPreviewSelection = function (suggestion) {
        this.addSelectedStatus(suggestion);
        this.keyboardFocusedSuggestion = suggestion;
    };
    SuggestionsManager.prototype.processMouseSelection = function (suggestion) {
        this.addSelectedStatus(suggestion);
        this.updateSelectedSuggestion(suggestion.innerText);
        this.keyboardFocusedSuggestion = null;
    };
    SuggestionsManager.prototype.buildSuggestionsContainer = function () {
        return Dom_1.$$('div', {
            className: 'coveo-magicbox-suggestions',
            id: 'coveo-magicbox-suggestions',
            role: 'listbox'
        });
    };
    SuggestionsManager.prototype.buildPreviewContainer = function () {
        return Dom_1.$$('div', {
            className: 'coveo-preview-container'
        }).el;
    };
    Object.defineProperty(SuggestionsManager.prototype, "querySuggestPreviewComponent", {
        get: function () {
            var querySuggestPreviewElement = Dom_1.$$(this.root).find("." + Component_1.Component.computeCssClassNameForType('QuerySuggestPreview'));
            if (!querySuggestPreviewElement) {
                return;
            }
            return Component_1.Component.get(querySuggestPreviewElement);
        },
        enumerable: true,
        configurable: true
    });
    SuggestionsManager.prototype.initPreviewForSuggestions = function (suggestions) {
        var querySuggestPreview = this.querySuggestPreviewComponent;
        if (!querySuggestPreview) {
            return suggestions;
        }
        var suggestionContainerParent = Dom_1.$$('div', {
            className: 'coveo-suggestion-container'
        });
        var previewContainer = this.buildPreviewContainer();
        suggestionContainerParent.append(suggestions.el);
        suggestionContainerParent.append(previewContainer);
        return suggestionContainerParent;
    };
    SuggestionsManager.prototype.createDomFromSuggestion = function (suggestion) {
        var _this = this;
        var dom = Dom_1.$$('div', {
            className: "magic-box-suggestion " + this.options.selectableClass
        });
        dom.on('click', function () {
            _this.selectSuggestion(suggestion);
        });
        dom.on('keyboardSelect', function () {
            _this.selectSuggestion(suggestion);
        });
        if (suggestion.html) {
            dom.el.innerHTML = suggestion.html;
            return dom;
        }
        if (suggestion.text) {
            dom.text(suggestion.text);
            return dom;
        }
        if (suggestion.separator) {
            dom.addClass('magic-box-suggestion-seperator');
            var suggestionLabel = Dom_1.$$('div', {
                className: 'magic-box-suggestion-seperator-label'
            }, suggestion.separator);
            dom.append(suggestionLabel.el);
            return dom;
        }
        return dom;
    };
    SuggestionsManager.prototype.selectSuggestion = function (suggestion) {
        suggestion.onSelect();
        Dom_1.$$(this.root).trigger(OmniboxEvents_1.OmniboxEvents.querySuggestSelection, { suggestion: suggestion.text });
    };
    SuggestionsManager.prototype.appendEmptySuggestionOption = function () {
        // Accessibility tools reports that a listbox element must always have at least one child with an option
        // Even if there is no suggestions to show.
        this.suggestionsListbox.append(Dom_1.$$('div', { role: 'option' }).el);
    };
    SuggestionsManager.prototype.modifyDomFromExistingSuggestion = function (dom) {
        // this need to be done if the selection is in cache and the dom is set in the suggestion
        this.removeSelectedStatus(dom);
        var found = Dom_1.$$(dom).find('.' + this.options.selectableClass);
        this.removeSelectedStatus(found);
        return Dom_1.$$(dom);
    };
    SuggestionsManager.prototype.move = function (direction) {
        var previewSelectables = Dom_1.$$(this.element).findAll(".coveo-preview-selectable");
        if (previewSelectables.length > 0) {
            this.moveWithQuerySuggestPreview(direction);
        }
        else {
            this.moveWithinSuggestion(direction);
        }
    };
    SuggestionsManager.prototype.moveWithinSuggestion = function (direction) {
        var currentlySelected = Dom_1.$$(this.element).find("." + this.options.selectedClass);
        var selectables = Dom_1.$$(this.element).findAll("." + this.options.selectableClass);
        var currentIndex = underscore_1.indexOf(selectables, currentlySelected);
        var index = direction === Direction.Up ? currentIndex - 1 : currentIndex + 1;
        index = (index + selectables.length) % selectables.length;
        this.lastSelectedSuggestion = selectables[index];
        this.selectQuerySuggest(this.lastSelectedSuggestion);
    };
    SuggestionsManager.prototype.selectQuerySuggest = function (suggestion) {
        if (suggestion) {
            this.processKeyboardSelection(suggestion);
        }
        else {
            this.keyboardFocusedSuggestion = null;
            this.inputManager.input.removeAttribute('aria-activedescendant');
        }
        return suggestion;
    };
    SuggestionsManager.prototype.moveWithQuerySuggestPreview = function (direction) {
        var currentlySelected = Dom_1.$$(this.element).find("." + this.options.selectedClass);
        var omniboxSelectables = Dom_1.$$(this.element).findAll("." + this.options.selectableClass);
        var previewSelectables = Dom_1.$$(this.element).findAll(".coveo-preview-selectable");
        var omniboxIndex = underscore_1.indexOf(omniboxSelectables, currentlySelected);
        var previewIndex = underscore_1.indexOf(previewSelectables, currentlySelected);
        var verticalMove = direction === Direction.Up || direction === Direction.Down;
        var suggestionIsSelected = omniboxIndex > -1;
        if (suggestionIsSelected && verticalMove) {
            this.moveWithinSuggestion(direction);
            return;
        }
        var noPreviewDisplayed = previewSelectables.length === 0;
        var directionIsLeft = direction === Direction.Left;
        var noPreviewSelected = previewIndex === -1;
        if (noPreviewDisplayed || (directionIsLeft && noPreviewSelected)) {
            return;
        }
        this.moveWithinPreview(direction);
    };
    SuggestionsManager.prototype.moveWithinPreview = function (direction) {
        var previewSelectables = Dom_1.$$(this.element).findAll(".coveo-preview-selectable");
        var newSelectedIndex;
        if (direction === Direction.Up || direction === Direction.Down) {
            newSelectedIndex = this.moveVerticallyInPreview(direction);
        }
        if (direction === Direction.Left || direction === Direction.Right) {
            newSelectedIndex = this.moveHorizontallyInPreview(direction);
        }
        if (Utils_1.Utils.isNullOrUndefined(newSelectedIndex)) {
            return;
        }
        newSelectedIndex = (newSelectedIndex + previewSelectables.length) % previewSelectables.length;
        this.processKeyboardPreviewSelection(previewSelectables[newSelectedIndex]);
    };
    SuggestionsManager.prototype.moveVerticallyInPreview = function (direction) {
        var currentlySelected = Dom_1.$$(this.element).find("." + this.options.selectedClass);
        var previewSelectables = Dom_1.$$(this.element).findAll(".coveo-preview-selectable");
        var previewIndex = underscore_1.indexOf(previewSelectables, currentlySelected);
        if (previewSelectables.length <= QuerySuggestPreview_1.resultPerRow) {
            return null;
        }
        var offset = Math.ceil(previewSelectables.length / 2);
        return direction === Direction.Up ? previewIndex - offset : previewIndex + offset;
    };
    SuggestionsManager.prototype.moveHorizontallyInPreview = function (direction) {
        var currentlySelected = Dom_1.$$(this.element).find("." + this.options.selectedClass);
        var previewSelectables = Dom_1.$$(this.element).findAll(".coveo-preview-selectable");
        var previewIndex = underscore_1.indexOf(previewSelectables, currentlySelected);
        if (previewIndex === 0 && direction === Direction.Left) {
            this.selectQuerySuggest(this.lastSelectedSuggestion);
            return;
        }
        return direction === Direction.Left ? previewIndex - 1 : previewIndex + 1;
    };
    SuggestionsManager.prototype.returnMoved = function (selected) {
        if (selected != null) {
            if (selected['suggestion']) {
                return selected['suggestion'];
            }
            if (selected['no-text-suggestion']) {
                return null;
            }
            if (selected instanceof HTMLElement) {
                return {
                    text: Dom_1.$$(selected).text()
                };
            }
        }
        return null;
    };
    SuggestionsManager.prototype.addSelectedStatus = function (suggestion) {
        var selected = this.element.getElementsByClassName(this.options.selectedClass);
        for (var i = 0; i < selected.length; i++) {
            var elem = selected.item(i);
            this.removeSelectedStatus(elem);
        }
        Dom_1.$$(suggestion).addClass(this.options.selectedClass);
        this.updateSelectedSuggestion(suggestion.innerText);
        this.updateAreaSelectedIfDefined(suggestion, 'true');
    };
    SuggestionsManager.prototype.updateSelectedSuggestion = function (suggestion) {
        Dom_1.$$(this.root).trigger(OmniboxEvents_1.OmniboxEvents.querySuggestGetFocus, {
            suggestion: suggestion
        });
    };
    SuggestionsManager.prototype.removeSelectedStatus = function (suggestion) {
        Dom_1.$$(suggestion).removeClass(this.options.selectedClass);
        this.updateAreaSelectedIfDefined(suggestion, 'false');
    };
    SuggestionsManager.prototype.updateAreaSelectedIfDefined = function (suggestion, value) {
        if (Dom_1.$$(suggestion).getAttribute('aria-selected')) {
            Dom_1.$$(suggestion).setAttribute('aria-selected', value);
        }
    };
    SuggestionsManager.prototype.addAccessibilityPropertiesForCombobox = function () {
        var combobox = Dom_1.$$(this.magicBoxContainer);
        var input = Dom_1.$$(this.inputManager.input);
        combobox.setAttribute('aria-expanded', 'false');
        combobox.setAttribute('role', 'combobox');
        combobox.setAttribute('aria-owns', 'coveo-magicbox-suggestions');
        combobox.setAttribute('aria-haspopup', 'listbox');
        input.el.removeAttribute('aria-activedescendant');
        input.setAttribute('aria-controls', 'coveo-magicbox-suggestions');
        input.setAttribute('aria-autocomplete', 'list');
    };
    SuggestionsManager.prototype.htmlElementIsSuggestion = function (selected) {
        var omniboxSelectables = Dom_1.$$(this.element).findAll("." + this.options.selectableClass);
        return underscore_1.indexOf(omniboxSelectables, selected) > -1;
    };
    return SuggestionsManager;
}());
exports.SuggestionsManager = SuggestionsManager;


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NestedQuery_1 = __webpack_require__(461);
var QueryExtension_1 = __webpack_require__(463);
var Basic_1 = __webpack_require__(128);
var Field_1 = __webpack_require__(206);
var SubExpression_1 = __webpack_require__(464);
exports.Complete = {
    include: [NestedQuery_1.NestedQuery, QueryExtension_1.QueryExtension, SubExpression_1.SubExpression, Field_1.Field, Basic_1.Basic]
};


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Grammar_1 = __webpack_require__(170);
var _ = __webpack_require__(0);
function loadSubGrammar(expressions, basicExpressions, grammars, subGrammar) {
    _.each(subGrammar.expressions, function (expression) {
        if (!_.contains(expressions, expression)) {
            expressions.push(expression);
        }
    });
    _.each(subGrammar.basicExpressions, function (expression) {
        if (!_.contains(basicExpressions, expression)) {
            basicExpressions.push(expression);
        }
    });
    _.each(subGrammar.grammars, function (expressionDef, id) {
        if (!(id in grammars)) {
            grammars[id] = expressionDef;
        }
        else {
            if (_.isArray(grammars[id]) && _.isArray(expressionDef)) {
                _.each(expressionDef, function (value) {
                    grammars[id].push(value);
                });
            }
            else {
                _.each(expressionDef, function (value) {
                    grammars[id].push(value);
                });
                throw new Error('Can not merge ' + id + '(' + JSON.stringify(expressionDef) + ' => ' + JSON.stringify(grammars[id]) + ')');
            }
        }
    });
}
function Expressions() {
    var subGrammars = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        subGrammars[_i] = arguments[_i];
    }
    var expressions = [];
    var BasicExpression = [];
    var grammars = {
        Start: ['Expressions', 'Empty'],
        Expressions: '[OptionalSpaces][Expression][ExpressionsList*][OptionalSpaces]',
        ExpressionsList: '[Spaces][Expression]',
        Expression: expressions,
        BasicExpression: BasicExpression,
        OptionalSpaces: / */,
        Spaces: / +/,
        Empty: /(?!.)/
    };
    for (var i = 0; i < subGrammars.length; i++) {
        loadSubGrammar(expressions, BasicExpression, grammars, subGrammars[i]);
        _.each(subGrammars[i].include, function (subGrammar) {
            if (!_.contains(subGrammars, subGrammar)) {
                subGrammars.push(subGrammar);
            }
        });
    }
    expressions.push('BasicExpression');
    return {
        start: 'Start',
        expressions: grammars
    };
}
exports.Expressions = Expressions;
function ExpressionsGrammar() {
    var subGrammars = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        subGrammars[_i] = arguments[_i];
    }
    var grammar = Expressions.apply(this, subGrammars);
    return new Grammar_1.Grammar(grammar.start, grammar.expressions);
}
exports.ExpressionsGrammar = ExpressionsGrammar;


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var MiscModules_1 = __webpack_require__(68);
var QueryboxQueryParameters = /** @class */ (function () {
    function QueryboxQueryParameters(options) {
        this.options = options;
    }
    QueryboxQueryParameters.queryIsBlocked = function () {
        // This code runs on some assumption :
        // Since all "buildingQuery" events would have to be run in the same call stack
        // We can add a static flag to block 2 or more query box/omnibox from trying to modify the query inside the same event.
        // If 2 query box are activated, we get duplicate terms in the query, or duplicate term correction with did you mean.
        // This means that only one query box/searchbox would be able to modify the query in a single search page.
        // This also means that if there is 2 search box enabled, the first one in the markup in the page would be able to do the job correctly as far as the query is concerned.
        // The second one is inactive as far as the query is concerned.
        // The flag gets reset in "defer" (setTimeout 0) so that it gets reset correctly when the query event has finished executing
        if (!QueryboxQueryParameters.queryIsCurrentlyBlocked) {
            QueryboxQueryParameters.queryIsCurrentlyBlocked = true;
            MiscModules_1.Defer.defer(function () { return QueryboxQueryParameters.allowDuplicateQuery(); });
            return false;
        }
        return true;
    };
    QueryboxQueryParameters.allowDuplicateQuery = function () {
        QueryboxQueryParameters.queryIsCurrentlyBlocked = false;
    };
    QueryboxQueryParameters.prototype.addParameters = function (queryBuilder, lastQuery) {
        if (!QueryboxQueryParameters.queryIsBlocked()) {
            if (this.options.enableWildcards) {
                queryBuilder.enableWildcards = true;
            }
            if (this.options.enableQuestionMarks) {
                queryBuilder.enableQuestionMarks = true;
            }
            if (this.options.enableLowercaseOperators) {
                queryBuilder.enableLowercaseOperators = true;
            }
            if (!_.isEmpty(lastQuery)) {
                queryBuilder.enableQuerySyntax = this.options.enableQuerySyntax;
                queryBuilder.expression.add(lastQuery);
                if (this.options.enablePartialMatch) {
                    queryBuilder.enablePartialMatch = this.options.enablePartialMatch;
                    if (this.options.partialMatchKeywords) {
                        queryBuilder.partialMatchKeywords = this.options.partialMatchKeywords;
                    }
                    if (this.options.partialMatchThreshold) {
                        queryBuilder.partialMatchThreshold = this.options.partialMatchThreshold;
                    }
                }
            }
        }
    };
    QueryboxQueryParameters.queryIsCurrentlyBlocked = false;
    return QueryboxQueryParameters;
}());
exports.QueryboxQueryParameters = QueryboxQueryParameters;


/***/ }),

/***/ 47:
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
var ExpressionEndOfInput_1 = __webpack_require__(204);
var ExpressionConstant_1 = __webpack_require__(205);
var _ = __webpack_require__(0);
var Result = /** @class */ (function () {
    function Result(value, expression, input) {
        var _this = this;
        this.expression = expression;
        this.input = input;
        if (_.isString(value)) {
            this.value = value;
        }
        else if (_.isArray(value)) {
            this.subResults = value;
            _.forEach(this.subResults, function (subResult) {
                subResult.parent = _this;
            });
        }
    }
    Result.prototype.isSuccess = function () {
        // if null is the value, this mean the expression could not parse this input
        return this.value != null || (this.subResults != null && _.all(this.subResults, function (subResult) { return subResult.isSuccess(); }));
    };
    /**
     * Return path to this result ([parent.parent, parent, this])
     */
    Result.prototype.path = function (until) {
        var path = this.parent != null && this.parent != until ? this.parent.path(until) : [];
        path.push(this);
        return path;
    };
    /**
     * Return the closest parent that match the condition (can be it-self). If match is a string, it will search for the result expresion id
     */
    Result.prototype.findParent = function (match) {
        var parent = this;
        var iterator = _.isString(match) ? function (result) { return match == result.expression.id; } : match;
        while (parent != null && !iterator(parent)) {
            parent = parent.parent;
        }
        return parent;
    };
    /**
     * Return the first child that match the condition (can be it-self). If match is a string, it will search for the result expresion id
     */
    Result.prototype.find = function (match) {
        var iterator = _.isString(match) ? function (result) { return match == result.expression.id; } : match;
        if (iterator(this)) {
            return this;
        }
        if (this.subResults) {
            for (var i = 0; i < this.subResults.length; i++) {
                var subResultFind = this.subResults[i].find(iterator);
                if (subResultFind) {
                    return subResultFind;
                }
            }
        }
        return null;
    };
    /**
     * Return all children that match the condition (can be it-self). If match is a string, it will search for the result expresion id
     */
    Result.prototype.findAll = function (match) {
        var results = [];
        var iterator = _.isString(match) ? function (result) { return match == result.expression.id; } : match;
        if (iterator(this)) {
            results.push(this);
        }
        if (this.subResults) {
            results = _.reduce(this.subResults, function (results, subResult) { return results.concat(subResult.findAll(iterator)); }, results);
        }
        return results;
    };
    /**
     * Return the first child that match the condition (can be it-self). If match is a string, it will search for the result expresion id
     */
    Result.prototype.resultAt = function (index, match) {
        if (index < 0 || index > this.getLength()) {
            return [];
        }
        if (match != null) {
            if (_.isString(match)) {
                if (match == this.expression.id) {
                    return [this];
                }
            }
            else {
                if (match(this)) {
                    return [this];
                }
            }
        }
        else {
            var value = this.value == null && this.subResults == null ? this.input : this.value;
            if (value != null) {
                return [this];
            }
        }
        if (this.subResults != null) {
            var results = [];
            for (var i = 0; i < this.subResults.length; i++) {
                var subResult = this.subResults[i];
                results = results.concat(subResult.resultAt(index, match));
                index -= subResult.getLength();
                if (index < 0) {
                    break;
                }
            }
            return results;
        }
        return [];
    };
    /**
     * Return all fail result.
     */
    Result.prototype.getExpect = function () {
        if (this.value == null && this.subResults == null) {
            return [this];
        }
        if (this.subResults != null) {
            return _.reduce(this.subResults, function (expect, result) { return expect.concat(result.getExpect()); }, []);
        }
        return [];
    };
    /**
     * Return the best fail result (The farthest result who got parsed). We also remove duplicate and always return the simplest result of a kind
     */
    Result.prototype.getBestExpect = function () {
        var expects = this.getExpect();
        var groups = _.groupBy(expects, function (expect) { return expect.input; });
        var key = _.last(_.keys(groups).sort(function (a, b) {
            return b.length - a.length;
        }));
        var bestResults = groups[key];
        var groups = _.groupBy(bestResults, function (expect) { return expect.expression.id; });
        return _.map(groups, function (bestResults) {
            return _.chain(bestResults)
                .map(function (result) {
                return {
                    path: result.path().length,
                    result: result
                };
            })
                .sortBy('path')
                .pluck('result')
                .first()
                .value();
        });
    };
    Result.prototype.getHumanReadableExpect = function () {
        var expect = this.getBestExpect();
        var input = expect.length > 0 ? _.last(expect).input : '';
        return ('Expected ' +
            _.map(expect, function (result) { return result.getHumanReadable(); }).join(' or ') +
            ' but ' +
            (input.length > 0 ? JSON.stringify(input[0]) : 'end of input') +
            ' found.');
    };
    /**
     * Return a string that represent what is before this result
     */
    Result.prototype.before = function () {
        if (this.parent == null) {
            return '';
        }
        var index = _.indexOf(this.parent.subResults, this);
        return (this.parent.before() +
            _.chain(this.parent.subResults)
                .first(index)
                .map(function (subResult) { return subResult.toString(); })
                .join('')
                .value());
    };
    /**
     * Return a string that represent what is after this result
     */
    Result.prototype.after = function () {
        if (this.parent == null) {
            return '';
        }
        var index = _.indexOf(this.parent.subResults, this);
        return (_.chain(this.parent.subResults)
            .last(this.parent.subResults.length - index - 1)
            .map(function (subResult) { return subResult.toString(); })
            .join('')
            .value() + this.parent.after());
    };
    /**
     * Return the length of the result
     */
    Result.prototype.getLength = function () {
        if (this.value != null) {
            return this.value.length;
        }
        if (this.subResults != null) {
            return _.reduce(this.subResults, function (length, subResult) { return length + subResult.getLength(); }, 0);
        }
        return this.input.length;
    };
    Result.prototype.toHtmlElement = function () {
        var element = document.createElement('span');
        var id = this.expression != null ? this.expression.id : null;
        if (id != null) {
            element.setAttribute('data-id', id);
        }
        element.setAttribute('data-success', this.isSuccess().toString());
        if (this.value != null) {
            element.appendChild(document.createTextNode(this.value));
            element.setAttribute('data-value', this.value);
        }
        else if (this.subResults != null) {
            _.each(this.subResults, function (subResult) {
                element.appendChild(subResult.toHtmlElement());
            });
        }
        else {
            element.appendChild(document.createTextNode(this.input));
            element.setAttribute('data-input', this.input);
            element.className = 'magic-box-error' + (this.input.length > 0 ? '' : ' magic-box-error-empty');
        }
        element['result'] = this;
        return element;
    };
    /**
     * Clean the result to have the most relevant result. If the result is successful just return a clone of it.
     */
    Result.prototype.clean = function (path) {
        if (path != null || !this.isSuccess()) {
            path = path || _.last(this.getBestExpect()).path(this);
            var next = _.first(path);
            if (next != null) {
                var nextIndex = _.indexOf(this.subResults, next);
                var subResults = nextIndex == -1 ? [] : _.map(_.first(this.subResults, nextIndex), function (subResult) { return subResult.clean(); });
                subResults.push(next.clean(_.rest(path)));
                return new Result(subResults, this.expression, this.input);
            }
            else {
                return new Result(null, this.expression, this.input);
            }
        }
        if (this.value != null) {
            return new Result(this.value, this.expression, this.input);
        }
        if (this.subResults != null) {
            return new Result(_.map(this.subResults, function (subResult) { return subResult.clean(); }), this.expression, this.input);
        }
    };
    Result.prototype.clone = function () {
        if (this.value != null) {
            return new Result(this.value, this.expression, this.input);
        }
        if (this.subResults != null) {
            return new Result(_.map(this.subResults, function (subResult) { return subResult.clone(); }), this.expression, this.input);
        }
        return new Result(null, this.expression, this.input);
    };
    Result.prototype.toString = function () {
        if (this.value != null) {
            return this.value;
        }
        if (this.subResults != null) {
            return _.map(this.subResults, function (subresult) { return subresult.toString(); }).join('');
        }
        return this.input;
    };
    Result.prototype.getHumanReadable = function () {
        if (this.expression instanceof ExpressionConstant_1.ExpressionConstant) {
            return JSON.stringify(this.expression.value);
        }
        return this.expression.id;
    };
    return Result;
}());
exports.Result = Result;
var EndOfInputResult = /** @class */ (function (_super) {
    __extends(EndOfInputResult, _super);
    function EndOfInputResult(result) {
        var _this = _super.call(this, [result], ExpressionEndOfInput_1.ExpressionEndOfInput, result.input) || this;
        var endOfInput = new Result(null, ExpressionEndOfInput_1.ExpressionEndOfInput, result.input.substr(result.getLength()));
        endOfInput.parent = _this;
        _this.subResults.push(endOfInput);
        return _this;
    }
    return EndOfInputResult;
}(Result));
exports.EndOfInputResult = EndOfInputResult;


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentOptionsModel_1 = __webpack_require__(28);
var QueryboxOptionsProcessing = /** @class */ (function () {
    function QueryboxOptionsProcessing(owner) {
        this.owner = owner;
    }
    Object.defineProperty(QueryboxOptionsProcessing.prototype, "options", {
        get: function () {
            return this.owner.options;
        },
        set: function (options) {
            this.owner.options = options;
        },
        enumerable: true,
        configurable: true
    });
    QueryboxOptionsProcessing.prototype.postProcess = function () {
        this.options = __assign({}, this.options, this.owner.componentOptionsModel.get(ComponentOptionsModel_1.ComponentOptionsModel.attributesEnum.searchBox));
        this.processQueryOnClearVersusEmptyQuery();
        this.processQueryOnClearVersusSearchAsYouType();
    };
    QueryboxOptionsProcessing.prototype.processQueryOnClearVersusEmptyQuery = function () {
        if (this.options.triggerQueryOnClear && this.owner.searchInterface.options.allowQueriesWithoutKeywords === false) {
            this.owner.logger.warn('Forcing option triggerQueryOnClear to false, as it is not supported when the search interface is configured to not allow queries without keywords (data-allow-queries-without-keywords="false")', this.owner);
            this.options.triggerQueryOnClear = false;
        }
    };
    QueryboxOptionsProcessing.prototype.processQueryOnClearVersusSearchAsYouType = function () {
        if (this.owner.searchInterface.options.allowQueriesWithoutKeywords === true &&
            this.options.triggerQueryOnClear === false &&
            this.options.enableSearchAsYouType === true) {
            this.owner.logger.warn('Forcing option triggerQueryOnClear to true, since search-as-you-type is enabled', this.owner);
            this.options.triggerQueryOnClear = true;
        }
    };
    return QueryboxOptionsProcessing;
}());
exports.QueryboxOptionsProcessing = QueryboxOptionsProcessing;


/***/ }),

/***/ 478:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResponsiveComponentsManager_1 = __webpack_require__(57);
var SearchInterface_1 = __webpack_require__(18);
var ResultList_1 = __webpack_require__(84);
var Dom_1 = __webpack_require__(1);
var Component_1 = __webpack_require__(6);
var Logger_1 = __webpack_require__(11);
var ResponsiveDefaultResultTemplate = /** @class */ (function () {
    function ResponsiveDefaultResultTemplate(coveoRoot, ID, options, responsiveDropdown) {
        this.coveoRoot = coveoRoot;
        this.ID = ID;
        this.searchInterface = Component_1.Component.get(this.coveoRoot.el, SearchInterface_1.SearchInterface, false);
        this.currentMode = 'large';
    }
    ResponsiveDefaultResultTemplate.init = function (root, component, options) {
        if (!Dom_1.$$(root).find("." + Component_1.Component.computeCssClassName(ResultList_1.ResultList))) {
            var logger = new Logger_1.Logger('ResponsiveDefaultResultTemplate');
            logger.trace('No ResultLayout component found : Cannot instantiate ResponsiveResultLayout');
            return;
        }
        ResponsiveComponentsManager_1.ResponsiveComponentsManager.register(ResponsiveDefaultResultTemplate, Dom_1.$$(root), ResultList_1.ResultList.ID, component, options);
    };
    ResponsiveDefaultResultTemplate.prototype.registerComponent = function (accept) {
        if (accept instanceof ResultList_1.ResultList) {
            this.resultList = accept;
            return true;
        }
        return false;
    };
    ResponsiveDefaultResultTemplate.prototype.handleResizeEvent = function () {
        var _this = this;
        var lastResults = this.resultList.queryController.getLastResults();
        if (this.needSmallMode()) {
            Dom_1.$$(this.resultList.options.resultsContainer).addClass('coveo-card-layout-container');
            Dom_1.$$(this.resultList.options.resultsContainer).removeClass("coveo-list-layout-container");
            if (this.currentMode != 'small') {
                if (lastResults) {
                    this.resultList.buildResults(lastResults).then(function (elements) {
                        _this.resultList.renderResults(elements);
                    });
                }
                this.currentMode = 'small';
            }
        }
        else {
            Dom_1.$$(this.resultList.options.resultsContainer).removeClass('coveo-card-layout-container');
            Dom_1.$$(this.resultList.options.resultsContainer).addClass("coveo-list-layout-container");
            if (this.currentMode != 'large') {
                if (lastResults) {
                    this.resultList.buildResults(lastResults).then(function (elements) {
                        _this.resultList.renderResults(elements);
                    });
                }
                this.currentMode = 'large';
            }
        }
    };
    ResponsiveDefaultResultTemplate.prototype.needSmallMode = function () {
        return this.coveoRoot.width() <= this.searchInterface.responsiveComponents.getSmallScreenWidth();
    };
    return ResponsiveDefaultResultTemplate;
}());
exports.ResponsiveDefaultResultTemplate = ResponsiveDefaultResultTemplate;


/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(1);
var ResultContainer = /** @class */ (function () {
    function ResultContainer(resultContainer, searchInterface) {
        this.searchInterface = searchInterface;
        this.resultContainerElement = Dom_1.$$(resultContainer);
    }
    ResultContainer.prototype.empty = function () {
        this.searchInterface.detachComponentsInside(this.resultContainerElement.el);
        Dom_1.$$(this.resultContainerElement).empty();
    };
    ResultContainer.prototype.addClass = function (classToAdd) {
        this.resultContainerElement.addClass(classToAdd);
    };
    ResultContainer.prototype.isEmpty = function () {
        return this.resultContainerElement.isEmpty();
    };
    ResultContainer.prototype.hideChildren = function () {
        this.resultContainerElement.children().forEach(function (child) { return Dom_1.$$(child).hide(); });
    };
    ResultContainer.prototype.getResultElements = function () {
        return this.resultContainerElement.findAll('.CoveoResult');
    };
    Object.defineProperty(ResultContainer.prototype, "el", {
        get: function () {
            return this.resultContainerElement.el;
        },
        enumerable: true,
        configurable: true
    });
    ResultContainer.resultCurrentlyBeingRendered = null;
    return ResultContainer;
}());
exports.ResultContainer = ResultContainer;


/***/ }),

/***/ 483:
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
var ResultListRenderer_1 = __webpack_require__(198);
var Dom_1 = __webpack_require__(1);
var _ = __webpack_require__(0);
var ResultListCardRenderer = /** @class */ (function (_super) {
    __extends(ResultListCardRenderer, _super);
    function ResultListCardRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultListCardRenderer.prototype.getEndFragment = function (resultElements) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_.isEmpty(resultElements)) {
                // with infinite scrolling, we want the additional results to append at the end of the previous query.
                // For this, we need to remove the padding.
                if (_this.resultListOptions.enableInfiniteScroll) {
                    var needToBeRemoved = Dom_1.$$(_this.resultListOptions.resultsContainer).findAll('.coveo-card-layout-padding');
                    _.each(needToBeRemoved, function (toRemove) { return Dom_1.$$(toRemove).remove(); });
                }
                // Used to prevent last card from spanning the grid's whole width
                var emptyCards_1 = document.createDocumentFragment();
                _.times(3, function () { return emptyCards_1.appendChild(Dom_1.$$('div', { className: 'coveo-card-layout coveo-card-layout-padding' }).el); });
                resolve(emptyCards_1);
            }
            resolve(null);
        });
    };
    return ResultListCardRenderer;
}(ResultListRenderer_1.ResultListRenderer));
exports.ResultListCardRenderer = ResultListCardRenderer;


/***/ }),

/***/ 524:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GlobalExports_1 = __webpack_require__(3);
var ExpressionConstant_1 = __webpack_require__(205);
var ExpressionEndOfInput_1 = __webpack_require__(204);
var ExpressionFunction_1 = __webpack_require__(459);
var ExpressionList_1 = __webpack_require__(460);
var ExpressionOptions_1 = __webpack_require__(456);
var ExpressionRef_1 = __webpack_require__(454);
var ExpressionRegExp_1 = __webpack_require__(458);
var Grammar_1 = __webpack_require__(170);
var Grammars_1 = __webpack_require__(527);
var InputManager_1 = __webpack_require__(465);
var MagicBox_1 = __webpack_require__(208);
var MagicBoxUtils_1 = __webpack_require__(209);
var OptionResult_1 = __webpack_require__(457);
var RefResult_1 = __webpack_require__(455);
var Result_1 = __webpack_require__(47);
var SuggestionsManager_1 = __webpack_require__(466);
exports.GrammarsImportedLocally = Grammars_1.Grammars;
function doMagicBoxExport() {
    GlobalExports_1.exportGlobally({
        MagicBox: {
            EndOfInputResult: Result_1.EndOfInputResult,
            ExpressionConstant: ExpressionConstant_1.ExpressionConstant,
            ExpressionEndOfInput: ExpressionEndOfInput_1.ExpressionEndOfInput,
            ExpressionFunction: ExpressionFunction_1.ExpressionFunction,
            ExpressionList: ExpressionList_1.ExpressionList,
            ExpressionOptions: ExpressionOptions_1.ExpressionOptions,
            ExpressionRef: ExpressionRef_1.ExpressionRef,
            ExpressionRegExp: ExpressionRegExp_1.ExpressionRegExp,
            Grammar: Grammar_1.Grammar,
            Grammars: Grammars_1.Grammars,
            InputManager: InputManager_1.InputManager,
            Instance: MagicBox_1.MagicBoxInstance,
            OptionResult: OptionResult_1.OptionResult,
            RefResult: RefResult_1.RefResult,
            Result: Result_1.Result,
            SuggestionsManager: SuggestionsManager_1.SuggestionsManager,
            Utils: MagicBoxUtils_1.MagicBoxUtils,
            create: MagicBox_1.createMagicBox,
            requestAnimationFrame: MagicBox_1.requestAnimationFrame
        }
    });
}
exports.doMagicBoxExport = doMagicBoxExport;


/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Basic_1 = __webpack_require__(128);
var Complete_1 = __webpack_require__(467);
var Date_1 = __webpack_require__(462);
var Expressions_1 = __webpack_require__(468);
var Field_1 = __webpack_require__(206);
var NestedQuery_1 = __webpack_require__(461);
var QueryExtension_1 = __webpack_require__(463);
var SubExpression_1 = __webpack_require__(464);
exports.Grammars = {
    Basic: Basic_1.Basic,
    notInWord: Basic_1.notInWord,
    notWordStart: Basic_1.notWordStart,
    Complete: Complete_1.Complete,
    Date: Date_1.Date,
    Expressions: Expressions_1.Expressions,
    ExpressionsGrammar: Expressions_1.ExpressionsGrammar,
    Field: Field_1.Field,
    NestedQuery: NestedQuery_1.NestedQuery,
    QueryExtension: QueryExtension_1.QueryExtension,
    SubExpression: SubExpression_1.SubExpression
};


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(1);
var Strings_1 = __webpack_require__(7);
var AccessibleButton_1 = __webpack_require__(17);
var MagicBoxClear = /** @class */ (function () {
    function MagicBoxClear(magicBox) {
        this.element = Dom_1.$$('div', {
            className: 'magic-box-clear'
        });
        var clearIcon = Dom_1.$$('div', {
            className: 'magic-box-icon'
        });
        this.element.append(clearIcon.el);
        this.element.insertAfter(Dom_1.$$(magicBox.element).find('input'));
        new AccessibleButton_1.AccessibleButton()
            .withElement(this.element)
            .withLabel(Strings_1.l('Clear'))
            .withSelectAction(function () { return magicBox.clear(); })
            .build();
        this.toggleTabindexAndAriaHidden(false);
    }
    MagicBoxClear.prototype.toggleTabindexAndAriaHidden = function (hasText) {
        var tabindex = hasText ? '0' : '-1';
        this.element.setAttribute('tabindex', tabindex);
        this.element.setAttribute('aria-hidden', "" + !hasText);
    };
    return MagicBoxClear;
}());
exports.MagicBoxClear = MagicBoxClear;


/***/ }),

/***/ 529:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OmniboxEvents_1 = __webpack_require__(32);
var _ = __webpack_require__(0);
var MagicBoxUtils_1 = __webpack_require__(209);
var FieldAddon = /** @class */ (function () {
    function FieldAddon(omnibox) {
        var _this = this;
        this.omnibox = omnibox;
        this.cache = {};
        this.omnibox.bind.on(this.omnibox.element, OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, function (args) {
            args.suggestions.push(_this.getSuggestion());
        });
    }
    FieldAddon.prototype.getSuggestion = function () {
        var _this = this;
        var hash = this.getHash();
        if (hash == null) {
            return null;
        }
        var hashString = this.hashToString(hash);
        if (this.cache[hashString] != null) {
            return this.hashValueToSuggestion(hash, this.cache[hashString]);
        }
        var values;
        if (hash.type == 'FieldName') {
            values = this.fieldNames(hash.current);
        }
        if (hash.type == 'FieldValue') {
            values = this.fieldValues(hash.field, hash.current);
        }
        if (hash.type == 'SimpleFieldName') {
            values = this.simpleFieldNames(hash.current);
        }
        this.cache[hashString] = values;
        values.catch(function () {
            delete _this.cache[hashString];
        });
        return this.hashValueToSuggestion(hash, values);
    };
    FieldAddon.prototype.getHash = function () {
        var fieldName = _.last(this.omnibox.resultAtCursor('FieldName'));
        if (fieldName != null) {
            fieldName = fieldName.findParent('Field') || fieldName;
            var currentField = fieldName.toString();
            var before = fieldName.before();
            var after = fieldName.after();
            return { type: 'FieldName', current: currentField, before: before, after: after };
        }
        var fieldValue = _.last(this.omnibox.resultAtCursor('FieldValue'));
        if (fieldValue) {
            var fieldQuery = fieldValue.findParent('FieldQuery') || (this.omnibox.options.enableSimpleFieldAddon && fieldValue.findParent('FieldSimpleQuery'));
            if (fieldQuery) {
                var field = fieldQuery.find('FieldName').toString();
                if (this.omnibox.options.fieldAlias) {
                    if (field in this.omnibox.options.fieldAlias) {
                        field = this.omnibox.options.fieldAlias[field];
                    }
                }
                var value = fieldValue.toString();
                var before = fieldValue.before();
                var after = fieldValue.after();
                return { type: 'FieldValue', field: field, current: value, before: before, after: after };
            }
        }
        if (this.omnibox.options.enableSimpleFieldAddon) {
            var word = _.last(this.omnibox.resultAtCursor('Word'));
            if (word != null) {
                var current = word.toString();
                var before = word.before();
                var after = word.after();
                return { type: 'SimpleFieldName', current: current, before: before, after: after };
            }
        }
    };
    FieldAddon.prototype.hashToString = function (hash) {
        if (hash == null) {
            return null;
        }
        return hash.type + hash.current + (hash.field || '');
    };
    FieldAddon.prototype.hashValueToSuggestion = function (hash, promise) {
        return promise.then(function (values) {
            var suggestions = _.map(values, function (value, i) {
                var suggestion = {
                    text: hash.before +
                        (hash.current.toLowerCase().indexOf(value.toLowerCase()) == 0 ? hash.current + value.substr(hash.current.length) : value) +
                        hash.after,
                    html: MagicBoxUtils_1.MagicBoxUtils.highlightText(value, hash.current, true),
                    index: FieldAddon.INDEX - i / values.length
                };
                return suggestion;
            });
            return suggestions;
        });
    };
    FieldAddon.prototype.getFields = function () {
        var _this = this;
        if (this.fields == null) {
            this.fields = new Promise(function (resolve, reject) {
                if (_this.omnibox.options.listOfFields != null) {
                    resolve(_this.omnibox.options.listOfFields);
                }
                else {
                    var promise = _this.omnibox.queryController.getEndpoint().listFields();
                    promise
                        .then(function (fieldDescriptions) {
                        var fieldNames = _.chain(fieldDescriptions)
                            .filter(function (fieldDescription) { return fieldDescription.includeInQuery && fieldDescription.groupByField; })
                            .map(function (fieldDescription) { return fieldDescription.name.substr(1); })
                            .value();
                        resolve(fieldNames);
                    })
                        .catch(function () {
                        reject();
                    });
                }
            });
        }
        return this.fields;
    };
    FieldAddon.prototype.fieldNames = function (current) {
        var withAt = current.length > 0 && current[0] == '@';
        var fieldName = withAt ? current.substr(1) : current;
        var fieldNameLC = fieldName.toLowerCase();
        return this.getFields().then(function (fields) {
            var matchFields = _.chain(fields)
                .map(function (fieldName) {
                var fieldNameBeginsWithAt = fieldName.length > 0 && fieldName[0] == '@';
                return {
                    index: fieldName.toLowerCase().indexOf(fieldNameLC),
                    field: fieldNameBeginsWithAt ? fieldName : '@' + fieldName
                };
            })
                .filter(function (field) {
                return field.index != -1 && field.field.length > current.length;
            })
                .sortBy('index')
                .map(function (field) { return field.field; })
                .value();
            matchFields = _.first(matchFields, 5);
            return matchFields;
        });
    };
    FieldAddon.prototype.fieldValues = function (field, current) {
        return this.omnibox.queryController
            .getEndpoint()
            .listFieldValues({
            pattern: '.*' + current + '.*',
            patternType: 'RegularExpression',
            sortCriteria: 'occurrences',
            field: '@' + field,
            maximumNumberOfValues: 5
        })
            .then(function (values) {
            return _.chain(values)
                .map(function (value) {
                return {
                    index: value.value.toLowerCase().indexOf(current),
                    value: value.value
                };
            })
                .filter(function (value) {
                return value.value.length > current.length;
            })
                .sortBy('index')
                .map(function (value) {
                return value.value.replace(/ /g, '\u00A0');
            })
                .value();
        });
    };
    FieldAddon.prototype.simpleFieldNames = function (current) {
        var fieldName = current;
        var fieldNameLC = fieldName.toLowerCase();
        return this.getFields().then(function (fields) {
            var matchFields = _.chain(fields)
                .map(function (field) {
                return {
                    index: field.toLowerCase().indexOf(fieldNameLC),
                    field: field + ':'
                };
            })
                .filter(function (field) {
                return field.index != -1 && field.field.length > current.length;
            })
                .sortBy('index')
                .map(function (field) { return field.field; })
                .value();
            matchFields = _.first(matchFields, 5);
            return matchFields;
        });
    };
    FieldAddon.INDEX = 64;
    return FieldAddon;
}());
exports.FieldAddon = FieldAddon;


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OmniboxEvents_1 = __webpack_require__(32);
var Dom_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(4);
var _ = __webpack_require__(0);
var OldOmniboxAddon = /** @class */ (function () {
    function OldOmniboxAddon(omnibox) {
        var _this = this;
        this.omnibox = omnibox;
        this.omnibox.bind.on(this.omnibox.element, OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, function (args) {
            _.each(_this.getSuggestion(), function (suggestion) {
                args.suggestions.push(suggestion);
            });
        });
    }
    OldOmniboxAddon.prototype.getSuggestion = function () {
        var text = this.omnibox.magicBox.getText();
        if (text.length == 0) {
            return null;
        }
        var eventArgs = this.buildPopulateOmniboxEventArgs();
        Dom_1.$$(this.omnibox.root).trigger(OmniboxEvents_1.OmniboxEvents.populateOmnibox, eventArgs);
        return this.rowsToSuggestions(eventArgs.rows);
    };
    OldOmniboxAddon.prototype.getCurrentQueryExpression = function () {
        var cursorPos = this.omnibox.getCursor();
        var value = this.omnibox.getText();
        var length = value.length;
        var start = cursorPos;
        var end = cursorPos;
        if (value[start] == ' ') {
            start--;
        }
        while (start > 0 && value[start] != ' ') {
            start--;
        }
        while (end < length && value[end] != ' ') {
            end++;
        }
        return value.substring(start, end);
    };
    OldOmniboxAddon.prototype.getRegexToSearch = function (strValue) {
        if (strValue == null) {
            strValue = this.omnibox.getText();
        }
        return new RegExp(Utils_1.Utils.escapeRegexCharacter(strValue), 'i');
    };
    OldOmniboxAddon.prototype.getQueryExpressionBreakDown = function () {
        var _this = this;
        var ret = [];
        var queryWords = this.omnibox.getText().split(' ');
        _.each(queryWords, function (word) {
            ret.push({
                word: word,
                regex: _this.getRegexToSearch(word)
            });
        });
        return ret;
    };
    OldOmniboxAddon.prototype.replace = function (searchValue, newValue) {
        this.omnibox.setText(this.omnibox.getText().replace(searchValue, newValue));
    };
    OldOmniboxAddon.prototype.clearCurrentExpression = function () {
        this.replace(this.getCurrentQueryExpression(), '');
    };
    OldOmniboxAddon.prototype.insertAt = function (at, toInsert) {
        var oldValue = this.omnibox.getText();
        var newValue = [oldValue.slice(0, at), toInsert, oldValue.slice(at)].join('');
        this.omnibox.setText(newValue);
    };
    OldOmniboxAddon.prototype.replaceCurrentExpression = function (newValue) {
        this.replace(this.getCurrentQueryExpression(), newValue);
    };
    OldOmniboxAddon.prototype.buildPopulateOmniboxEventArgs = function () {
        var _this = this;
        var currentQueryExpression = this.getCurrentQueryExpression();
        var ret = {
            rows: [],
            completeQueryExpression: {
                word: this.omnibox.getText(),
                regex: this.getRegexToSearch()
            },
            currentQueryExpression: {
                word: currentQueryExpression,
                regex: this.getRegexToSearch(currentQueryExpression)
            },
            allQueryExpressions: this.getQueryExpressionBreakDown(),
            cursorPosition: this.omnibox.getCursor(),
            clear: function () {
                _this.omnibox.clear();
            },
            clearCurrentExpression: function () {
                _this.clearCurrentExpression();
            },
            replace: function (searchValue, newValue) {
                _this.replace(searchValue, newValue);
            },
            replaceCurrentExpression: function (newValue) {
                _this.replaceCurrentExpression(newValue);
            },
            insertAt: function (at, toInsert) {
                _this.insertAt(at, toInsert);
            },
            closeOmnibox: function () {
                _this.omnibox.magicBox.blur();
            }
        };
        return ret;
    };
    OldOmniboxAddon.prototype.rowsToSuggestions = function (rows) {
        return _.map(rows, function (row) {
            if (!Utils_1.Utils.isNullOrUndefined(row.element)) {
                return new Promise(function (resolve) {
                    resolve([
                        {
                            dom: row.element,
                            index: row.zIndex
                        }
                    ]);
                });
            }
            else if (!Utils_1.Utils.isNullOrUndefined(row.deferred)) {
                return new Promise(function (resolve) {
                    row.deferred.then(function (row) {
                        if (row.element != null) {
                            resolve([
                                {
                                    dom: row.element,
                                    index: row.zIndex
                                }
                            ]);
                        }
                        else {
                            resolve(null);
                        }
                    });
                });
            }
            return null;
        });
    };
    return OldOmniboxAddon;
}());
exports.OldOmniboxAddon = OldOmniboxAddon;


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
///<reference path='Omnibox.ts'/>
var OmniboxEvents_1 = __webpack_require__(32);
var _ = __webpack_require__(0);
var MagicBoxUtils_1 = __webpack_require__(209);
var QueryExtensionAddon = /** @class */ (function () {
    function QueryExtensionAddon(omnibox) {
        var _this = this;
        this.omnibox = omnibox;
        this.cache = {};
        this.omnibox.bind.on(this.omnibox.element, OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, function (args) {
            args.suggestions.push(_this.getSuggestion());
        });
    }
    QueryExtensionAddon.prototype.getSuggestion = function () {
        var _this = this;
        var hash = this.getHash(this.omnibox.magicBox);
        if (hash == null) {
            return null;
        }
        var hashString = this.hashToString(hash);
        if (this.cache[hashString] != null) {
            return this.hashValueToSuggestion(hash, this.cache[hashString]);
        }
        var values = hash.type == 'QueryExtensionName' ? this.names(hash.current) : this.attributeNames(hash.name, hash.current, hash.used);
        this.cache[hashString] = values;
        values.catch(function () {
            delete _this.cache[hashString];
        });
        return this.hashValueToSuggestion(hash, values);
    };
    QueryExtensionAddon.prototype.getHash = function (magicBox) {
        var queryExtension = _.last(magicBox.resultAtCursor('QueryExtension'));
        if (queryExtension != null) {
            var queryExtensionArgumentResults = queryExtension.findAll('QueryExtensionArgument');
            var current = _.last(magicBox.resultAtCursor('QueryExtensionName'));
            if (current != null) {
                return {
                    type: 'QueryExtensionName',
                    current: current.toString(),
                    before: current.before(),
                    after: current.after()
                };
            }
            current = _.last(magicBox.resultAtCursor('QueryExtensionArgumentName'));
            if (current != null) {
                var used = _.chain(queryExtensionArgumentResults)
                    .map(function (result) {
                    var name = result.find('QueryExtensionArgumentName');
                    return name && name.toString();
                })
                    .compact()
                    .value();
                var name = queryExtension.find('QueryExtensionName').toString();
                return {
                    type: 'QueryExtensionArgumentName',
                    current: current.toString(),
                    before: current.before(),
                    after: current.after(),
                    name: name,
                    used: used
                };
            }
        }
        return null;
    };
    QueryExtensionAddon.prototype.hashToString = function (hash) {
        if (hash == null) {
            return null;
        }
        return [hash.type, hash.current, hash.name || '', hash.used ? hash.used.join() : ''].join();
    };
    QueryExtensionAddon.prototype.hashValueToSuggestion = function (hash, promise) {
        return promise.then(function (values) {
            var suggestions = _.map(values, function (value, i) {
                return {
                    html: MagicBoxUtils_1.MagicBoxUtils.highlightText(value, hash.current, true),
                    text: hash.before + value + hash.after,
                    index: QueryExtensionAddon.INDEX - i / values.length
                };
            });
            return suggestions;
        });
    };
    QueryExtensionAddon.prototype.getExtensions = function () {
        if (this.extensions == null) {
            this.extensions = this.omnibox.queryController.getEndpoint().extensions();
        }
        return this.extensions;
    };
    QueryExtensionAddon.prototype.names = function (current) {
        var extensionName = current.toLowerCase();
        return this.getExtensions().then(function (extensions) {
            var matchExtensions = _.chain(extensions)
                .map(function (extension) {
                return {
                    index: extension.name.toLowerCase().indexOf(extensionName),
                    extension: extension.name
                };
            })
                .filter(function (extension) {
                return extension.index != -1 && extension.extension.length > extensionName.length;
            })
                .sortBy('index')
                .pluck('extension')
                .value();
            matchExtensions = _.first(matchExtensions, 5);
            return matchExtensions;
        });
    };
    QueryExtensionAddon.prototype.attributeNames = function (name, current, used) {
        return this.getExtensions().then(function (extensions) {
            var extension = _.find(extensions, function (extension) { return extension.name == name; });
            if (extension == null) {
                return [];
            }
            else {
                return _.filter(_.difference(extension.argumentNames, used), function (argumentName) { return argumentName.indexOf(current) == 0; });
            }
        });
    };
    QueryExtensionAddon.prototype.hash = function () {
        return;
    };
    QueryExtensionAddon.INDEX = 62;
    return QueryExtensionAddon;
}());
exports.QueryExtensionAddon = QueryExtensionAddon;


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(1);
var ComponentOptionsModel_1 = __webpack_require__(28);
var OmniboxEvents_1 = __webpack_require__(32);
var StringUtils_1 = __webpack_require__(19);
var underscore_1 = __webpack_require__(0);
var QueryStateModel_1 = __webpack_require__(13);
var coveo_analytics_1 = __webpack_require__(92);
var CookieUtils_1 = __webpack_require__(70);
var Utils_1 = __webpack_require__(4);
var QuerySuggestAddon = /** @class */ (function () {
    function QuerySuggestAddon(omnibox) {
        var _this = this;
        this.omnibox = omnibox;
        Dom_1.$$(this.omnibox.element).on(OmniboxEvents_1.OmniboxEvents.populateOmniboxSuggestions, function (e, args) {
            args.suggestions.push(_this.getSuggestion());
        });
    }
    QuerySuggestAddon.suggestiontHtml = function (suggestion) {
        return suggestion.highlighted.replace(/\[(.*?)\]|\{(.*?)\}|\((.*?)\)/g, function (part, notMatched, matched, corrected) {
            var className = '';
            if (matched) {
                className = 'coveo-omnibox-hightlight';
            }
            if (corrected) {
                className = 'coveo-omnibox-hightlight2';
            }
            var ret;
            if (className) {
                ret = Dom_1.$$('span', {
                    className: className
                });
            }
            else {
                ret = Dom_1.$$('span');
            }
            ret.text(notMatched || matched || corrected);
            return ret.el.outerHTML;
        });
    };
    QuerySuggestAddon.isPartialMatch = function (suggestion) {
        // groups : 1=notMatched, 2=matched, 3=corrected
        var parts = StringUtils_1.StringUtils.match(suggestion.highlighted, /\[(.*?)\]|\{(.*?)\}|\((.*?)\)/g);
        var firstFail = underscore_1.find(parts, function (part) { return part[1] != null; });
        // if no fail found, this is a partial or a full match
        if (firstFail == null) {
            return true;
        }
        // if all right parts are notMatched, the right parts is autocomplete
        return underscore_1.every(underscore_1.last(parts, underscore_1.indexOf(parts, firstFail) - parts.length), function (part) { return part[1] != null; });
    };
    QuerySuggestAddon.prototype.getSuggestion = function () {
        var text = this.omnibox.magicBox.getText();
        if (text.length >= this.omnibox.options.querySuggestCharacterThreshold) {
            return this.getQuerySuggest(text);
        }
        return Promise.resolve([]);
    };
    QuerySuggestAddon.prototype.getQuerySuggest = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, results, _a, completions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        payload = {
                            q: text,
                            locale: this.locale,
                            searchHub: this.searchHub,
                            pipeline: this.pipeline,
                            enableWordCompletion: this.enableWordCompletion,
                            context: this.context,
                            count: this.count,
                            tab: this.tab,
                            referrer: document.referrer,
                            actionsHistory: this.actionsHistory,
                            timezone: this.timezone,
                            visitorId: this.visitorId,
                            isGuestUser: this.isGuestUser
                        };
                        Dom_1.$$(this.omnibox.getBindings().searchInterface.element).trigger(OmniboxEvents_1.OmniboxEvents.buildingQuerySuggest, {
                            payload: payload
                        });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.omnibox.queryController.getEndpoint().getQuerySuggest(payload)];
                    case 2:
                        results = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, []];
                    case 4:
                        completions = results.completions;
                        Dom_1.$$(this.omnibox.getBindings().searchInterface.element).trigger(OmniboxEvents_1.OmniboxEvents.querySuggestSuccess, {
                            completions: completions
                        });
                        return [2 /*return*/, underscore_1.map(completions, function (completion, i) {
                                return {
                                    html: QuerySuggestAddon.suggestiontHtml(completion),
                                    text: completion.expression,
                                    index: QuerySuggestAddon.INDEX - i / completions.length,
                                    partial: QuerySuggestAddon.isPartialMatch(completion),
                                    executableConfidence: completion.executableConfidence
                                };
                            })];
                }
            });
        });
    };
    Object.defineProperty(QuerySuggestAddon.prototype, "tab", {
        get: function () {
            var tab = this.omnibox.getBindings().queryStateModel.get(QueryStateModel_1.QUERY_STATE_ATTRIBUTES.T);
            if (Utils_1.Utils.isNonEmptyString(tab)) {
                return tab;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestAddon.prototype, "locale", {
        get: function () {
            return String['locale'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestAddon.prototype, "searchHub", {
        get: function () {
            return this.omnibox.getBindings().componentOptionsModel.get(ComponentOptionsModel_1.ComponentOptionsModel.attributesEnum.searchHub);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestAddon.prototype, "pipeline", {
        get: function () {
            return this.omnibox.getBindings().searchInterface.options.pipeline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestAddon.prototype, "enableWordCompletion", {
        get: function () {
            return this.omnibox.options.enableSearchAsYouType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestAddon.prototype, "context", {
        get: function () {
            return this.omnibox.getBindings().searchInterface.getQueryContext();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestAddon.prototype, "count", {
        get: function () {
            return this.omnibox.options.numberOfSuggestions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestAddon.prototype, "actionsHistory", {
        get: function () {
            var historyStore = new coveo_analytics_1.history.HistoryStore();
            var historyFromStore = historyStore.getHistory();
            if (historyFromStore == null) {
                return [];
            }
            return historyFromStore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestAddon.prototype, "timezone", {
        get: function () {
            return this.omnibox.getBindings().searchInterface.options.timezone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestAddon.prototype, "visitorId", {
        get: function () {
            return CookieUtils_1.Cookie.get('visitorId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuerySuggestAddon.prototype, "isGuestUser", {
        get: function () {
            return this.omnibox.getBindings().queryController.getEndpoint().options.isGuestUser;
        },
        enumerable: true,
        configurable: true
    });
    QuerySuggestAddon.INDEX = 60;
    return QuerySuggestAddon;
}());
exports.QuerySuggestAddon = QuerySuggestAddon;
var VoidQuerySuggestAddon = /** @class */ (function () {
    function VoidQuerySuggestAddon() {
    }
    VoidQuerySuggestAddon.prototype.getSuggestion = function () {
        return Promise.resolve([]);
    };
    return VoidQuerySuggestAddon;
}());
exports.VoidQuerySuggestAddon = VoidQuerySuggestAddon;


/***/ }),

/***/ 618:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(1);
var SearchBoxResize = /** @class */ (function () {
    function SearchBoxResize() {
    }
    SearchBoxResize.resize = function (element, size) {
        var _this = this;
        var searchbox = this.getSearchbox(element);
        var elementToResize = this.getElementsToResize(element);
        var magicboxInput = this.getInput(element);
        var searchboxStyle = "height: " + size + "px; line-height: " + size + "px;";
        var inputChangeStyle = "height: " + size + "px";
        //This need to be a little bit smaller because when the height become smaller than 38px or to big, the bottom border of the Searchbox dissapear
        var magicboxInputStyle = "height: " + (size - 2) + "px;";
        this.applyStyle(searchbox, searchboxStyle);
        this.applyStyle(magicboxInput, magicboxInputStyle);
        elementToResize.forEach(function (HtmlElement) {
            _this.applyStyle(HtmlElement, inputChangeStyle);
        });
    };
    SearchBoxResize.applyStyle = function (element, style) {
        element.style.cssText += style;
    };
    SearchBoxResize.getSearchbox = function (element) {
        return Dom_1.$$(element).find('.CoveoOmnibox') || Dom_1.$$(element).find('.CoveoQuerybox');
    };
    SearchBoxResize.getElementsToResize = function (element) {
        return [
            Dom_1.$$(element).find('.CoveoSearchButton'),
            Dom_1.$$(Dom_1.$$(element).find('.magic-box-input')).find('input'),
            Dom_1.$$(element).find('.magic-box-icon'),
            Dom_1.$$(element).find('.magic-box-clear'),
            Dom_1.$$(element).find('.magic-box-underlay')
        ];
    };
    SearchBoxResize.getInput = function (element) {
        return Dom_1.$$(element).find('.magic-box-input');
    };
    return SearchBoxResize;
}());
exports.SearchBoxResize = SearchBoxResize;


/***/ }),

/***/ 84:
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(478);
__webpack_require__(479);
__webpack_require__(480);
var underscore_1 = __webpack_require__(0);
var QueryEvents_1 = __webpack_require__(10);
var ResultLayoutEvents_1 = __webpack_require__(124);
var ResultListEvents_1 = __webpack_require__(31);
var GlobalExports_1 = __webpack_require__(3);
var Assert_1 = __webpack_require__(5);
var Defer_1 = __webpack_require__(30);
var Model_1 = __webpack_require__(16);
var QueryStateModel_1 = __webpack_require__(13);
var DeviceUtils_1 = __webpack_require__(22);
var Dom_1 = __webpack_require__(1);
var DomUtils_1 = __webpack_require__(79);
var Utils_1 = __webpack_require__(4);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var Component_1 = __webpack_require__(6);
var ComponentOptions_1 = __webpack_require__(8);
var Initialization_1 = __webpack_require__(2);
var InitializationPlaceholder_1 = __webpack_require__(166);
var TemplateComponentOptions_1 = __webpack_require__(58);
var ResponsiveDefaultResultTemplate_1 = __webpack_require__(481);
var CoreHelpers_1 = __webpack_require__(431);
var DefaultRecommendationTemplate_1 = __webpack_require__(430);
var DefaultResultTemplate_1 = __webpack_require__(111);
var TableTemplate_1 = __webpack_require__(427);
var TemplateCache_1 = __webpack_require__(63);
var TemplateList_1 = __webpack_require__(85);
var ResultContainer_1 = __webpack_require__(482);
var ResultListCardRenderer_1 = __webpack_require__(483);
var ResultListRenderer_1 = __webpack_require__(198);
var ResultListTableRenderer_1 = __webpack_require__(428);
var ResultListUtils_1 = __webpack_require__(121);
var TemplateToHtml_1 = __webpack_require__(429);
CoreHelpers_1.CoreHelpers.exportAllHelpersGlobally(window['Coveo']);
/**
 * The `ResultList` component is responsible for displaying query results by applying one or several result templates
 * (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
 *
 * It is possible to include multiple `ResultList` components along with a single `ResultLayout`
 * component in a search page to provide different result layouts (see
 * [Result Layouts](https://developers.coveo.com/x/yQUvAg)).
 *
 * This component supports infinite scrolling (see the
 * [`enableInfiniteScroll`]{@link ResultList.options.enableInfiniteScroll} option).
 */
var ResultList = /** @class */ (function (_super) {
    __extends(ResultList, _super);
    /**
     * Creates a new `ResultList` component. Binds various event related to queries (e.g., on querySuccess ->
     * renderResults). Binds scroll event if the [`enableInfiniteScroll`]{@link ResultList.options.enableInfiniteScroll}
     * option is `true`.
     * @param element The HTMLElement on which to instantiate the component.
     * @param options The options for the `ResultList` component.
     * @param bindings The bindings that the component requires to function normally. If not set, these will be
     * automatically resolved (with a slower execution time).
     * @param elementClassId The class that this component should instantiate. Components that extend the base ResultList
     * use this. Default value is `CoveoResultList`.
     */
    function ResultList(element, options, bindings, elementClassId) {
        if (elementClassId === void 0) { elementClassId = ResultList.ID; }
        var _this = _super.call(this, element, elementClassId, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.currentlyDisplayedResults = [];
        _this.reachedTheEndOfResults = false;
        _this.disableLayoutChange = false;
        // This variable serves to block some setup where the framework fails to correctly identify the "real" scrolling container.
        // Since it's not technically feasible to correctly identify the scrolling container in every possible scenario without some very complex logic, we instead try to add some kind of mechanism to
        // block runaway requests where UI will keep asking more results in the index, eventually bringing the browser to it's knee.
        // Those successive request are needed in "displayMoreResults" to ensure we fill the scrolling container correctly.
        // Since the container is not identified correctly, it is never "full", so we keep asking for more.
        // It is reset every time the user actually scroll the container manually.
        _this.successiveScrollCount = 0;
        _this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, ResultList, options);
        Assert_1.Assert.exists(element);
        Assert_1.Assert.exists(_this.options);
        Assert_1.Assert.exists(_this.options.resultTemplate);
        Assert_1.Assert.exists(_this.options.infiniteScrollContainer);
        _this.showOrHideElementsDependingOnState(false, false);
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.newQuery, function (args) { return _this.handleNewQuery(); });
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.buildingQuery, function (args) {
            return _this.handleBuildingQuery(args);
        });
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.querySuccess, function (args) {
            return _this.handleQuerySuccess(args);
        });
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.duringQuery, function (args) { return _this.handleDuringQuery(); });
        _this.bind.onRootElement(QueryEvents_1.QueryEvents.queryError, function (args) { return _this.handleQueryError(); });
        Dom_1.$$(_this.root).on(ResultListEvents_1.ResultListEvents.changeLayout, function (e, args) { return _this.handleChangeLayout(args); });
        if (_this.options.enableInfiniteScroll) {
            _this.handlePageChanged();
            _this.bind.on(_this.options.infiniteScrollContainer, 'scroll', function (e) {
                _this.successiveScrollCount = 0;
                _this.handleScrollOfResultList();
            });
        }
        _this.bind.onQueryState(Model_1.MODEL_EVENTS.CHANGE_ONE, QueryStateModel_1.QUERY_STATE_ATTRIBUTES.FIRST, function () { return _this.handlePageChanged(); });
        _this.resultContainer = _this.initResultContainer();
        Assert_1.Assert.exists(_this.options.resultsContainer);
        _this.initWaitAnimationContainer();
        Assert_1.Assert.exists(_this.options.waitAnimationContainer);
        _this.setupTemplatesVersusLayouts();
        Dom_1.$$(_this.root).on(ResultLayoutEvents_1.ResultLayoutEvents.populateResultLayout, function (e, args) {
            return args.layouts.push(_this.options.layout);
        });
        _this.setupRenderer();
        return _this;
    }
    ResultList.getDefaultTemplate = function (e) {
        var template = ResultList.loadTemplatesFromCache();
        if (template != null) {
            return template;
        }
        var component = Component_1.Component.get(e);
        if (Coveo['Recommendation'] && component.searchInterface instanceof Coveo['Recommendation']) {
            return new DefaultRecommendationTemplate_1.DefaultRecommendationTemplate();
        }
        return new DefaultResultTemplate_1.DefaultResultTemplate();
    };
    ResultList.loadTemplatesFromCache = function () {
        var pageTemplateNames = TemplateCache_1.TemplateCache.getResultListTemplateNames();
        if (pageTemplateNames.length > 0) {
            return new TemplateList_1.TemplateList(underscore_1.compact(underscore_1.map(pageTemplateNames, function (templateName) { return TemplateCache_1.TemplateCache.getTemplate(templateName); })));
        }
        return null;
    };
    /**
     * Get the fields needed to be automatically included in the query for this result list.
     * @returns {string[]}
     */
    ResultList.prototype.getAutoSelectedFieldsToInclude = function () {
        return underscore_1.chain(this.options.resultTemplate.getFields())
            .concat(this.getMinimalFieldsToInclude())
            .compact()
            .unique()
            .value();
    };
    ResultList.prototype.setupTemplatesVersusLayouts = function () {
        var _this = this;
        var layoutClassToAdd = "coveo-" + this.options.layout + "-layout-container";
        this.resultContainer.addClass(layoutClassToAdd);
        if (this.options.layout === 'table') {
            this.options.resultTemplate = new TableTemplate_1.TableTemplate(this.options.resultTemplate.templates || []);
        }
        // A TemplateList is the scenario where the result template are directly embedded inside the ResultList
        // This is the typical scenario when a page gets created by the interface editor, for example.
        // In that case, we try to stick closely that what is actually configured inside the page, and do no "special magic".
        // Stick to the "hardcoded" configuration present in the page.
        // We only add the correct layout options if it has not been set manually.
        if (this.options.resultTemplate instanceof TemplateList_1.TemplateList) {
            underscore_1.each(this.options.resultTemplate.templates, function (tmpl) {
                if (!tmpl.layout) {
                    tmpl.layout = _this.options.layout;
                }
            });
        }
        else if (this.options.resultTemplate instanceof DefaultResultTemplate_1.DefaultResultTemplate && this.options.layout == 'list') {
            ResponsiveDefaultResultTemplate_1.ResponsiveDefaultResultTemplate.init(this.root, this, {});
        }
    };
    /**
     * Empties the current result list content and appends the given array of HTMLElement.
     *
     * Can append to existing elements in the result list, or replace them.
     *
     * Triggers the `newResultsDisplayed` and `newResultDisplayed` events.
     * @param resultsElement
     * @param append
     */
    ResultList.prototype.renderResults = function (resultElements, append) {
        var _this = this;
        if (append === void 0) { append = false; }
        if (!append) {
            this.resultContainer.empty();
        }
        return this.renderer
            .renderResults(resultElements, append, this.triggerNewResultDisplayed.bind(this))
            .then(function () { return _this.triggerNewResultsDisplayed(); });
    };
    /**
     * Builds and returns an array of HTMLElement with the given result set.
     * @param results the result set to build an array of HTMLElement from.
     */
    ResultList.prototype.buildResults = function (results) {
        var layout = this.options.layout;
        return this.templateToHtml.buildResults(results, layout, this.currentlyDisplayedResults);
    };
    /**
     * Builds and returns an HTMLElement for the given result.
     * @param result the result to build an HTMLElement from.
     * @returns {HTMLElement}
     */
    ResultList.prototype.buildResult = function (result) {
        var layout = this.options.layout;
        return this.templateToHtml.buildResult(result, layout, this.currentlyDisplayedResults);
    };
    /**
     * Executes a query to fetch new results. After the query returns, renders the new results.
     *
     * Asserts that there are more results to display by verifying whether the last query has returned as many results as
     * requested.
     *
     * Asserts that the `ResultList` is not currently fetching results.
     * @param count The number of results to fetch and display.
     */
    ResultList.prototype.displayMoreResults = function (count) {
        var _this = this;
        Assert_1.Assert.isLargerOrEqualsThan(1, count);
        if (this.isCurrentlyFetchingMoreResults()) {
            this.logger.warn("Ignoring request to display more results since we're already doing so");
            return;
        }
        if (!this.hasPotentiallyMoreResultsToDisplay()) {
            this.logger.warn("Ignoring request to display more results since we know there aren't more to display");
            return;
        }
        if (this.options.enableInfiniteScrollWaitingAnimation) {
            this.showWaitingAnimationForInfiniteScrolling();
        }
        this.fetchingMoreResults = this.queryController.fetchMore(count);
        this.fetchingMoreResults.then(function (data) {
            Assert_1.Assert.exists(data);
            _this.usageAnalytics.logCustomEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.pagerScrolling, {}, _this.element);
            var results = data.results;
            _this.reachedTheEndOfResults = count > data.results.length;
            _this.buildResults(data).then(function (elements) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.renderResults(elements, true);
                    underscore_1.each(results, function (result) {
                        _this.currentlyDisplayedResults.push(result);
                    });
                    this.triggerNewResultsDisplayed();
                    return [2 /*return*/];
                });
            }); });
        });
        this.fetchingMoreResults.finally(function () {
            _this.hideWaitingAnimationForInfiniteScrolling();
            _this.fetchingMoreResults = undefined;
            Defer_1.Defer.defer(function () {
                _this.successiveScrollCount++;
                if (_this.successiveScrollCount <= ResultList.MAX_AMOUNT_OF_SUCESSIVE_REQUESTS) {
                    _this.handleScrollOfResultList();
                }
                else {
                    _this.logger.info("Result list has triggered 5 consecutive queries to try and fill up the scrolling container, but it is still unable to do so");
                    _this.logger.info("Try explicitly setting the 'data-infinite-scroll-container-selector' option on the result list. See : https://coveo.github.io/search-ui/components/resultlist.html#options.infinitescrollcontainer");
                }
            });
        });
        return this.fetchingMoreResults;
    };
    Object.defineProperty(ResultList.prototype, "templateToHtml", {
        get: function () {
            var templateToHtmlArgs = {
                resultTemplate: this.options.resultTemplate,
                searchInterface: this.searchInterface,
                queryStateModel: this.queryStateModel
            };
            return new TemplateToHtml_1.TemplateToHtml(templateToHtmlArgs);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the list of currently displayed result.
     * @returns {IQueryResult[]}
     */
    ResultList.prototype.getDisplayedResults = function () {
        return this.currentlyDisplayedResults;
    };
    /**
     * Gets the list of currently displayed result HTMLElement.
     * @returns {HTMLElement[]}
     */
    ResultList.prototype.getDisplayedResultsElements = function () {
        return this.resultContainer.getResultElements();
    };
    ResultList.prototype.enable = function () {
        var _this = this;
        _super.prototype.enable.call(this);
        this.disableLayoutChange = false;
        underscore_1.each(this.resultLayoutSelectors, function (resultLayoutSelector) {
            resultLayoutSelector.enableLayouts([_this.options.layout]);
        });
        Dom_1.$$(this.element).removeClass('coveo-hidden');
    };
    ResultList.prototype.disable = function () {
        var _this = this;
        _super.prototype.disable.call(this);
        var otherLayoutsStillActive = underscore_1.map(this.otherResultLists, function (otherResultList) { return otherResultList.options.layout; });
        if (!underscore_1.contains(otherLayoutsStillActive, this.options.layout) && !this.disableLayoutChange) {
            underscore_1.each(this.resultLayoutSelectors, function (resultLayoutSelector) {
                resultLayoutSelector.disableLayouts([_this.options.layout]);
            });
        }
        this.disableLayoutChange = false;
        Dom_1.$$(this.element).addClass('coveo-hidden');
    };
    ResultList.prototype.autoCreateComponentsInsideResult = function (element, result) {
        return this.templateToHtml.autoCreateComponentsInsideResult(element, result);
    };
    ResultList.prototype.triggerNewResultDisplayed = function (result, resultElement) {
        var args = {
            result: result,
            item: resultElement
        };
        Dom_1.$$(this.element).trigger(ResultListEvents_1.ResultListEvents.newResultDisplayed, args);
    };
    ResultList.prototype.triggerNewResultsDisplayed = function () {
        Dom_1.$$(this.element).trigger(ResultListEvents_1.ResultListEvents.newResultsDisplayed, {});
    };
    ResultList.prototype.handleDuringQuery = function () {
        this.logger.trace('Emptying the result container');
        this.cancelFetchingMoreResultsIfNeeded();
        this.showWaitingAnimation();
        this.showOrHideElementsDependingOnState(false, false);
    };
    ResultList.prototype.handleQueryError = function () {
        this.hideWaitingAnimation();
        this.resultContainer.empty();
        this.currentlyDisplayedResults = [];
        this.reachedTheEndOfResults = true;
    };
    ResultList.prototype.handleQuerySuccess = function (data) {
        var _this = this;
        Assert_1.Assert.exists(data);
        Assert_1.Assert.exists(data.results);
        var results = data.results;
        this.logger.trace('Received query results from new query', results);
        this.hideWaitingAnimation();
        ResultList.resultCurrentlyBeingRendered = undefined;
        this.reachedTheEndOfResults = data.query.numberOfResults > data.results.results.length;
        this.currentlyDisplayedResults = [];
        this.buildResults(data.results).then(function (elements) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.renderResults(elements)];
                    case 1:
                        _a.sent();
                        this.showOrHideElementsDependingOnState(true, this.currentlyDisplayedResults.length != 0);
                        if (DeviceUtils_1.DeviceUtils.isMobileDevice() && this.options.mobileScrollContainer != undefined) {
                            this.options.mobileScrollContainer.scrollTop = 0;
                        }
                        if (this.options.enableInfiniteScroll && results.results.length == data.queryBuilder.numberOfResults) {
                            // This will check right away if we need to add more results to make the scroll container full & scrolling.
                            this.scrollToTopIfEnabled();
                            this.handleScrollOfResultList();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ResultList.prototype.handleScrollOfResultList = function () {
        if (this.isCurrentlyFetchingMoreResults() || !this.options.enableInfiniteScroll) {
            return;
        }
        if (this.isScrollingOfResultListAlmostAtTheBottom() && this.hasPotentiallyMoreResultsToDisplay()) {
            this.displayMoreResults(this.options.infiniteScrollPageSize);
        }
    };
    ResultList.prototype.handlePageChanged = function () {
        var _this = this;
        this.bind.onRootElement(QueryEvents_1.QueryEvents.deferredQuerySuccess, function () {
            setTimeout(function () {
                _this.scrollToTopIfEnabled();
            }, 0);
        });
    };
    ResultList.prototype.scrollToTopIfEnabled = function () {
        if (!this.options.enableScrollToTop) {
            return;
        }
        ResultListUtils_1.ResultListUtils.scrollToTop(this.root);
    };
    ResultList.prototype.handleNewQuery = function () {
        Dom_1.$$(this.element).removeClass('coveo-hidden');
        ResultList.resultCurrentlyBeingRendered = undefined;
    };
    Object.defineProperty(ResultList.prototype, "otherResultLists", {
        get: function () {
            var allResultLists = this.searchInterface.getComponents(ResultList.ID);
            return underscore_1.without(allResultLists, this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultList.prototype, "resultLayoutSelectors", {
        get: function () {
            return this.searchInterface.getComponents('ResultLayoutSelector');
        },
        enumerable: true,
        configurable: true
    });
    ResultList.prototype.handleBuildingQuery = function (args) {
        if (this.options.fieldsToInclude != null) {
            // remove the @
            args.queryBuilder.addFieldsToInclude(underscore_1.map(this.options.fieldsToInclude, function (field) { return field.substr(1); }));
        }
        if (this.options.autoSelectFieldsToInclude) {
            var otherFields = underscore_1.flatten(underscore_1.map(this.otherResultLists, function (otherResultList) {
                return otherResultList.getAutoSelectedFieldsToInclude();
            }));
            args.queryBuilder.addRequiredFields(underscore_1.unique(otherFields.concat(this.getAutoSelectedFieldsToInclude())));
            args.queryBuilder.includeRequiredFields = true;
        }
    };
    ResultList.prototype.handleChangeLayout = function (args) {
        var _this = this;
        if (args.layout === this.options.layout) {
            this.disableLayoutChange = false;
            this.enable();
            this.options.resultTemplate.layout = this.options.layout;
            if (args.results) {
                // Prevent flickering when switching to a new layout that is empty
                // add a temporary placeholder, the same that is used on initialization
                if (this.resultContainer.isEmpty()) {
                    new InitializationPlaceholder_1.InitializationPlaceholder(this.root).withVisibleRootElement().withPlaceholderForResultList();
                }
                Defer_1.Defer.defer(function () { return __awaiter(_this, void 0, void 0, function () {
                    var elements;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.buildResults(args.results)];
                            case 1:
                                elements = _a.sent();
                                this.renderResults(elements);
                                this.showOrHideElementsDependingOnState(true, this.currentlyDisplayedResults.length !== 0);
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }
        else {
            this.disableLayoutChange = true;
            this.disable();
            this.resultContainer.empty();
        }
    };
    ResultList.prototype.isCurrentlyFetchingMoreResults = function () {
        return Utils_1.Utils.exists(this.fetchingMoreResults);
    };
    ResultList.prototype.getMinimalFieldsToInclude = function () {
        // these fields are needed for analytics click event
        return ['author', 'language', 'urihash', 'objecttype', 'collection', 'source', 'language', 'permanentid'];
    };
    ResultList.prototype.isScrollingOfResultListAlmostAtTheBottom = function () {
        // this is in a try catch because the unit test fail otherwise (Window does not exist for phantom js in the console)
        var isWindow;
        try {
            isWindow = this.options.infiniteScrollContainer instanceof Window;
        }
        catch (e) {
            isWindow = false;
        }
        return isWindow ? this.isScrollAtBottomForWindowElement() : this.isScrollAtBottomForHtmlElement();
    };
    ResultList.prototype.isScrollAtBottomForWindowElement = function () {
        var win = new Dom_1.Win(window);
        var windowHeight = win.height();
        var scrollTop = win.scrollY();
        var bodyHeight = new Dom_1.Doc(document).height();
        return bodyHeight - (windowHeight + scrollTop) < windowHeight / 2;
    };
    ResultList.prototype.isScrollAtBottomForHtmlElement = function () {
        var el = this.options.infiniteScrollContainer;
        var elementHeight = el.clientHeight;
        var scrollHeight = el.scrollHeight;
        var bottomPosition = el.scrollTop + elementHeight;
        return scrollHeight - bottomPosition < elementHeight / 2;
    };
    ResultList.prototype.hasPotentiallyMoreResultsToDisplay = function () {
        return this.currentlyDisplayedResults.length > 0 && !this.reachedTheEndOfResults;
    };
    ResultList.prototype.cancelFetchingMoreResultsIfNeeded = function () {
        if (this.isCurrentlyFetchingMoreResults()) {
            this.logger.trace('Cancelling fetching more results');
            Promise.reject(this.fetchingMoreResults);
            this.fetchingMoreResults = undefined;
        }
    };
    ResultList.prototype.showOrHideElementsDependingOnState = function (hasQuery, hasResults) {
        var showIfQuery = Dom_1.$$(this.element).findAll('.coveo-show-if-query');
        var showIfNoQuery = Dom_1.$$(this.element).findAll('.coveo-show-if-no-query');
        var showIfResults = Dom_1.$$(this.element).findAll('.coveo-show-if-results');
        var showIfNoResults = Dom_1.$$(this.element).findAll('.coveo-show-if-no-results');
        underscore_1.each(showIfQuery, function (s) {
            Dom_1.$$(s).toggle(hasQuery);
        });
        underscore_1.each(showIfNoQuery, function (s) {
            Dom_1.$$(s).toggle(!hasQuery);
        });
        underscore_1.each(showIfResults, function (s) {
            Dom_1.$$(s).toggle(hasQuery && hasResults);
        });
        underscore_1.each(showIfNoResults, function (s) {
            Dom_1.$$(s).toggle(hasQuery && !hasResults);
        });
    };
    Object.defineProperty(ResultList.prototype, "waitAnimation", {
        get: function () {
            return this.options.waitAnimation.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    ResultList.prototype.showWaitingAnimation = function () {
        switch (this.waitAnimation) {
            case 'fade':
                Dom_1.$$(this.options.waitAnimationContainer).addClass('coveo-fade-out');
                break;
            case 'spinner':
                this.resultContainer.hideChildren();
                if (Dom_1.$$(this.options.waitAnimationContainer).find('.coveo-wait-animation') == undefined) {
                    this.options.waitAnimationContainer.appendChild(DomUtils_1.DomUtils.getBasicLoadingAnimation());
                }
                break;
        }
    };
    ResultList.prototype.hideWaitingAnimation = function () {
        switch (this.waitAnimation) {
            case 'fade':
                Dom_1.$$(this.options.waitAnimationContainer).removeClass('coveo-fade-out');
                break;
            case 'spinner':
                var spinner = Dom_1.$$(this.options.waitAnimationContainer).find('.coveo-loading-spinner');
                if (spinner) {
                    Dom_1.$$(spinner).detach();
                }
                break;
        }
    };
    ResultList.prototype.showWaitingAnimationForInfiniteScrolling = function () {
        var spinner = DomUtils_1.DomUtils.getLoadingSpinner();
        if (this.options.layout == 'card' && this.options.enableInfiniteScroll) {
            var previousSpinnerContainer = Dom_1.$$(this.options.waitAnimationContainer).findAll('.coveo-loading-spinner-container');
            underscore_1.each(previousSpinnerContainer, function (previousSpinner) { return Dom_1.$$(previousSpinner).remove(); });
            var spinnerContainer = Dom_1.$$('div', {
                className: 'coveo-loading-spinner-container'
            });
            spinnerContainer.append(spinner);
            this.options.waitAnimationContainer.appendChild(spinnerContainer.el);
        }
        else {
            this.options.waitAnimationContainer.appendChild(DomUtils_1.DomUtils.getLoadingSpinner());
        }
    };
    ResultList.prototype.hideWaitingAnimationForInfiniteScrolling = function () {
        var spinners = Dom_1.$$(this.options.waitAnimationContainer).findAll('.coveo-loading-spinner');
        var containers = Dom_1.$$(this.options.waitAnimationContainer).findAll('.coveo-loading-spinner-container');
        underscore_1.each(spinners, function (spinner) { return Dom_1.$$(spinner).remove(); });
        underscore_1.each(containers, function (container) { return Dom_1.$$(container).remove(); });
    };
    ResultList.prototype.initResultContainer = function () {
        if (!this.options.resultsContainer) {
            var elemType = this.options.layout === 'table' ? 'table' : 'div';
            this.options.resultsContainer = Dom_1.$$(elemType, { className: 'coveo-result-list-container' }).el;
            this.initResultContainerAddToDom();
        }
        return new ResultContainer_1.ResultContainer(this.options.resultsContainer, this.searchInterface);
    };
    ResultList.prototype.initResultContainerAddToDom = function () {
        this.element.appendChild(this.options.resultsContainer);
    };
    ResultList.prototype.initWaitAnimationContainer = function () {
        if (!this.options.waitAnimationContainer) {
            this.options.waitAnimationContainer = this.resultContainer.el;
        }
    };
    ResultList.prototype.setupRenderer = function () {
        var initParameters = {
            options: this.searchInterface.options.originalOptionsObject,
            bindings: this.bindings
        };
        var autoCreateComponentsFn = function (elem) { return Initialization_1.Initialization.automaticallyCreateComponentsInside(elem, initParameters); };
        switch (this.options.layout) {
            case 'card':
                this.renderer = new ResultListCardRenderer_1.ResultListCardRenderer(this.options, autoCreateComponentsFn);
                break;
            case 'table':
                this.renderer = new ResultListTableRenderer_1.ResultListTableRenderer(this.options, autoCreateComponentsFn);
                break;
            case 'list':
            default:
                this.renderer = new ResultListRenderer_1.ResultListRenderer(this.options, autoCreateComponentsFn);
                break;
        }
    };
    ResultList.ID = 'ResultList';
    ResultList.doExport = function () {
        GlobalExports_1.exportGlobally({
            ResultList: ResultList
        });
    };
    /**
     * The options for the ResultList
     * @componentOptions
     */
    ResultList.options = {
        /**
         * Specifies the element inside which to insert the rendered result templates.
         *
         * Performing a new query clears the content of this element.
         *
         * You can change the container by specifying its selector (e.g.,
         * `data-result-container-selector='#someCssSelector'`).
         *
         * If you specify no value for this option, a `div` element will be dynamically created and appended to the result
         * list. This element will then be used as a result container.
         */
        resultsContainer: ComponentOptions_1.ComponentOptions.buildChildHtmlElementOption(),
        resultTemplate: TemplateComponentOptions_1.TemplateComponentOptions.buildTemplateOption({ defaultFunction: ResultList.getDefaultTemplate }),
        /**
         * Specifies the type of animation to display while waiting for a query to return.
         *
         * The possible values are:
         * - `fade`: Fades out the current list of results while the query is executing.
         * - `spinner`: Shows a spinning animation while the query is executing.
         * - `none`: Use no animation during queries.
         *
         * See also the [`waitAnimationContainer`]{@link ResultList.options.waitAnimationContainer} option.
         *
         * Default value is `none`.
         */
        waitAnimation: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: 'none' }),
        /**
         * Specifies the element inside which to display the [`waitAnimation`]{@link ResultList.options.waitAnimation}.
         *
         * You can change this by specifying a CSS selector (e.g.,
         * `data-wait-animation-container-selector='#someCssSelector'`).
         *
         * Default value is the value of the [`resultContainer`]{@link ResultList.options.resultContainer} option.
         */
        waitAnimationContainer: ComponentOptions_1.ComponentOptions.buildChildHtmlElementOption({
            postProcessing: function (value, options) { return value || options.resultsContainer; }
        }),
        /**
         * Specifies whether to automatically retrieve an additional page of results and append it to the
         * results that the `ResultList` is currently displaying when the user scrolls down to the bottom of the
         * [`infiniteScrollContainer`]{@link ResultList.options.infiniteScrollContainer}.
         *
         * See also the [`infiniteScrollPageSize`]{@link ResultList.options.infiniteScrollPageSize} and
         * [`enableInfiniteScrollWaitingAnimation`]{@link ResultList.options.enableInfiniteScrollWaitingAnimation} options.
         *
         * It is important to specify the `infiniteScrollContainer` option manually if you want the scrolling element to be
         * something else than the default `window` element. Otherwise, you might find yourself in a strange state where the
         * framework rapidly triggers multiple successive query.
         *
         * Default value is `false`.
         */
        enableInfiniteScroll: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
        /**
         * If the [`enableInfiniteScroll`]{@link ResultList.options.enableInfiniteScroll} option is `true`, specifies the
         * number of additional results to fetch when the user scrolls down to the bottom of the
         * [`infiniteScrollContainer`]{@link ResultList.options.infiniteScrollContainer}.
         *
         * Default value is `10`. Minimum value is `1`.
         */
        infiniteScrollPageSize: ComponentOptions_1.ComponentOptions.buildNumberOption({
            defaultValue: 10,
            min: 1,
            depend: 'enableInfiniteScroll'
        }),
        /**
         * If the [`enableInfiniteScroll`]{@link ResultList.options.enableInfiniteScroll} option is `true`, specifies the
         * element that triggers fetching additional results when the end user scrolls down to its bottom.
         *
         * You can change the container by specifying its selector (e.g.,
         * `data-infinite-scroll-container-selector='#someCssSelector'`).
         *
         * By default, the framework uses the first vertically scrollable parent element it finds, starting from the
         * `ResultList` element itself. A vertically scrollable element is an element whose CSS `overflow-y` attribute is
         * `scroll`.
         *
         * This implies that if the framework can find no scrollable parent, it uses the `window` itself as a scrollable
         * container.
         *
         * This heuristic is not perfect, for technical reasons. There are always some corner case CSS combination which the
         * framework will not be able to correctly detect as 'scrollable'.
         *
         * It is highly recommended that you manually set this option if you wish something else than the `window` to be the
         * scrollable element.
         */
        infiniteScrollContainer: ComponentOptions_1.ComponentOptions.buildChildHtmlElementOption({
            depend: 'enableInfiniteScroll',
            defaultFunction: function (element) { return ComponentOptions_1.ComponentOptions.findParentScrolling(element); }
        }),
        /**
         * If the [`enableInfiniteScroll`]{@link ResultList.options.enableInfiniteScroll} option is `true`, specifies
         * whether to display the [`waitingAnimation`]{@link ResultList.options.waitAnimation} while fetching additional
         * results.
         *
         * Default value is `true`.
         */
        enableInfiniteScrollWaitingAnimation: ComponentOptions_1.ComponentOptions.buildBooleanOption({
            depend: 'enableInfiniteScroll',
            defaultValue: true
        }),
        mobileScrollContainer: ComponentOptions_1.ComponentOptions.buildSelectorOption({
            defaultFunction: function () { return document.querySelector('.coveo-results-column'); }
        }),
        /**
         * Specifies whether the `ResultList` should scan its result templates to discover which fields it must request to
         * be able to render all results.
         *
         * Setting this option to `true` ensures that the Coveo Search API does not return fields that are unnecessary for
         * the UI to function.
         *
         * Default value is `false`, which means that for each result, the Coveo Search API returns all available fields
         * (unless you specify a list of values in the [`fieldsToInclude`]{@link ResultList.options.fieldsToInclude} option,
         * in which case the Coveo Search API only returns those fields, if they are available).
         *
         * **Notes:**
         * > * Many interfaces created with the JavaScript Search Interface Editor explicitly set this option to `true`.
         * > * You cannot set this option to `true` in the Coveo for Sitecore integration.
         */
        autoSelectFieldsToInclude: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies a list of fields to include in the query results.
         *
         * If you set the [`autoSelectFieldsToInclude`]{@link ResultList.options.autoSelectFieldsToInclude} option to
         * `true`, the Coveo Search API returns the fields you specify for this option (if those fields are available) in
         * addition to the fields which the `ResultList` automatically requests.
         *
         * Otherwise, the Coveo Search API only returns the fields you specify for this option (if those fields are
         * available), unless you leave this option undefined, in which case the Coveo Search API returns all available
         * fields.
         */
        fieldsToInclude: ComponentOptions_1.ComponentOptions.buildFieldsOption({ includeInResults: true }),
        /**
         * Specifies the layout to use when displaying results in this `ResultList` (see
         * [Result Layouts](https://developers.coveo.com/x/yQUvAg)). Specifying a value for this option automatically
         * populates a [`ResultLayout`]{@link ResultLayout} component with a switcher for the layout.
         *
         * For example, if there are two `ResultList` components in the page, one with its `layout` set to `list` and the
         * other with the same option set to `card`, then the `ResultLayout` component will render two buttons respectively
         * entitled **List** and **Card**.
         *
         * See the [`ValidLayout`]{@link ValidLayout} type for the list of possible values.
         *
         * Default value is `list`.
         */
        layout: ComponentOptions_1.ComponentOptions.buildStringOption({
            defaultValue: 'list',
            required: true
        }),
        /**
         * Whether to scroll back to the top of the page whenever the end-user interacts with a facet or with the pager.
         *
         * Default: `true`
         */
        enableScrollToTop: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true })
    };
    ResultList.resultCurrentlyBeingRendered = null;
    ResultList.MAX_AMOUNT_OF_SUCESSIVE_REQUESTS = 5;
    return ResultList;
}(Component_1.Component));
exports.ResultList = ResultList;
Initialization_1.Initialization.registerAutoCreateComponent(ResultList);


/***/ })

});
//# sourceMappingURL=Searchbox__ebfaf048f8ff1970e3a2.js.map