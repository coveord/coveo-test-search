webpackJsonpCoveo__temporary([11],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResponsiveDropdownContent_1 = __webpack_require__(103);
var ResponsiveComponentsUtils = /** @class */ (function () {
    function ResponsiveComponentsUtils() {
    }
    ResponsiveComponentsUtils.shouldDrawFacetSlider = function (root, facetSliderElement) {
        return ResponsiveDropdownContent_1.ResponsiveDropdownContent.isTargetInsideOpenedDropdown(facetSliderElement) || !this.isSmallFacetActivated(root);
    };
    ResponsiveComponentsUtils.isSmallTabsActivated = function (root) {
        return root.hasClass(this.smallTabsClassName);
    };
    ResponsiveComponentsUtils.isSmallFacetActivated = function (root) {
        return root.hasClass(this.smallFacetClassName);
    };
    ResponsiveComponentsUtils.isSmallRecommendationActivated = function (root) {
        return root.hasClass(this.smallRecommendationClassName);
    };
    ResponsiveComponentsUtils.activateSmallTabs = function (root) {
        root.addClass(this.smallTabsClassName);
    };
    ResponsiveComponentsUtils.deactivateSmallTabs = function (root) {
        root.removeClass(this.smallTabsClassName);
    };
    ResponsiveComponentsUtils.activateSmallFacet = function (root) {
        root.addClass(this.smallFacetClassName);
    };
    ResponsiveComponentsUtils.deactivateSmallFacet = function (root) {
        root.removeClass(this.smallFacetClassName);
    };
    ResponsiveComponentsUtils.activateSmallRecommendation = function (root) {
        root.addClass(this.smallRecommendationClassName);
    };
    ResponsiveComponentsUtils.deactivateSmallRecommendation = function (root) {
        root.removeClass(this.smallRecommendationClassName);
    };
    ResponsiveComponentsUtils.smallTabsClassName = 'coveo-small-tabs';
    ResponsiveComponentsUtils.smallFacetClassName = 'coveo-small-facets';
    ResponsiveComponentsUtils.smallRecommendationClassName = 'coveo-small-recommendation';
    return ResponsiveComponentsUtils;
}());
exports.ResponsiveComponentsUtils = ResponsiveComponentsUtils;


/***/ }),

/***/ 121:
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
__webpack_require__(467);
var underscore_1 = __webpack_require__(0);
var Dom_1 = __webpack_require__(1);
var GlobalExports_1 = __webpack_require__(3);
var Component_1 = __webpack_require__(6);
var ComponentOptions_1 = __webpack_require__(8);
var Initialization_1 = __webpack_require__(2);
var ResponsiveFacetOptions_1 = __webpack_require__(83);
var ResponsiveDynamicFacets_1 = __webpack_require__(468);
var DynamicFacetBreadcrumbs_1 = __webpack_require__(469);
var DynamicFacetHeader_1 = __webpack_require__(471);
var DynamicFacetValues_1 = __webpack_require__(474);
var QueryEvents_1 = __webpack_require__(10);
var QueryStateModel_1 = __webpack_require__(12);
var DynamicFacetQueryController_1 = __webpack_require__(478);
var Utils_1 = __webpack_require__(4);
var Model_1 = __webpack_require__(16);
var Assert_1 = __webpack_require__(5);
var FacetSortCriteria_1 = __webpack_require__(479);
var Strings_1 = __webpack_require__(7);
var DeviceUtils_1 = __webpack_require__(22);
var BreadcrumbEvents_1 = __webpack_require__(37);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var FacetPadding_1 = __webpack_require__(480);
/**
 * The `DynamicFacet` component displays a *facet* of the results for the current query. A facet is a list of values for a
 * certain field occurring in the results, ordered using a configurable criteria (e.g., number of occurrences).
 *
 * The list of values is obtained using an array of [`FacetRequest`]{@link IFacetRequest} operations performed at the same time
 * as the main query.
 *
 * The `DynamicFacet` component allows the end-user to drill down inside a result set by restricting the result to certain
 * field values.
 *
 * This facet is more easy to use than the original [`Facet`]{@link Facet} component. It implements additional Coveo Machine Learning (Coveo ML) features
 * such as dynamic navigation experience (DNE).
 */
var DynamicFacet = /** @class */ (function (_super) {
    __extends(DynamicFacet, _super);
    /**
     * Creates a new `DynamicFacet` instance.
     *
     * @param element The element from which to instantiate the component.
     * @param options The component options.
     * @param bindings The component bindings. Automatically resolved by default.
     */
    function DynamicFacet(element, options, bindings) {
        var _this = _super.call(this, element, DynamicFacet.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.listenToQueryStateChange = true;
        _this.position = null;
        _this.handleQueryStateChangedIncluded = function (querySelectedValues) {
            var currentSelectedValues = _this.values.selectedValues;
            var valuesToSelect = underscore_1.difference(querySelectedValues, currentSelectedValues);
            var valuesToDeselect = underscore_1.difference(currentSelectedValues, querySelectedValues);
            if (Utils_1.Utils.isNonEmptyArray(valuesToSelect)) {
                _this.selectMultipleValues(valuesToSelect);
                // Only one search event is sent, pick first facet value
                _this.logAnalyticsEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.dynamicFacetSelect, _this.values.get(valuesToSelect[0]).analyticsMeta);
            }
            if (Utils_1.Utils.isNonEmptyArray(valuesToDeselect)) {
                _this.deselectMultipleValues(valuesToDeselect);
                // Only one search event is sent, pick first facet value
                _this.logAnalyticsEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.dynamicFacetDeselect, _this.values.get(valuesToDeselect[0]).analyticsMeta);
            }
        };
        _this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, DynamicFacet, options);
        _this.initDynamicFacetQueryController();
        _this.initQueryEvents();
        _this.initQueryStateEvents();
        _this.initBreadCrumbEvents();
        _this.initComponentStateEvents();
        _this.values = new DynamicFacetValues_1.DynamicFacetValues(_this);
        _this.isCollapsed = _this.options.enableCollapse && _this.options.collapsedByDefault;
        ResponsiveDynamicFacets_1.ResponsiveDynamicFacets.init(_this.root, _this, _this.options);
        return _this;
    }
    Object.defineProperty(DynamicFacet.prototype, "fieldName", {
        get: function () {
            return this.options.field.slice(1);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects a single value in this facet.
     *
     * Does **not** trigger a query automatically.
     * Does **not** update the visual of the facet until a query is performed.
     *
     * @param value The name of the facet value to select.
     */
    DynamicFacet.prototype.selectValue = function (value) {
        Assert_1.Assert.exists(value);
        this.selectMultipleValues([value]);
    };
    /**
     * Selects multiple values in this facet.
     *
     * Does **not** trigger a query automatically.
     * Does **not** update the visual of the facet until a query is performed.
     *
     * @param values The names of the facet values to select.
     */
    DynamicFacet.prototype.selectMultipleValues = function (values) {
        var _this = this;
        Assert_1.Assert.exists(values);
        this.ensureDom();
        this.logger.info('Selecting facet value(s)', values);
        values.forEach(function (value) {
            _this.values.get(value).select();
        });
        this.handleFacetValuesChanged();
    };
    /**
     * Deselects a single value in this facet.
     *
     * Does **not** trigger a query automatically.
     * Does **not** update the visual of the facet until a query is performed.
     *
     * @param values The name of the facet value to deselect.
     */
    DynamicFacet.prototype.deselectValue = function (value) {
        Assert_1.Assert.exists(value);
        this.deselectMultipleValues([value]);
    };
    /**
     * Deselects multiple values in this facet.
     *
     * Does **not** trigger a query automatically.
     * Does **not** update the visual of the facet until a query is performed.
     *
     * @param values The names of the facet values to deselect.
     */
    DynamicFacet.prototype.deselectMultipleValues = function (values) {
        var _this = this;
        Assert_1.Assert.exists(values);
        this.ensureDom();
        this.logger.info('Deselecting facet value(s)', values);
        values.forEach(function (value) {
            _this.values.get(value).deselect();
        });
        this.handleFacetValuesChanged();
    };
    /**
     * Toggles the selection state of a single value in this facet.
     *
     * Does **not** trigger a query automatically.
     *
     * @param values The name of the facet value to toggle.
     */
    DynamicFacet.prototype.toggleSelectValue = function (value) {
        Assert_1.Assert.exists(value);
        this.ensureDom();
        this.logger.info('Toggle select facet value', this.values.get(value).toggleSelect());
        this.handleFacetValuesChanged();
    };
    /**
     * Requests additional values.
     *
     * Automatically triggers a query.
     * @param additionalNumberOfValues The number of additional values to request. Minimum value is 1. Defaults to the [numberOfValues]{@link DynamicFacet.options.numberOfValues} option value.
     */
    DynamicFacet.prototype.showMoreValues = function (additionalNumberOfValues) {
        if (additionalNumberOfValues === void 0) { additionalNumberOfValues = this.options.numberOfValues; }
        this.ensureDom();
        this.logger.info('Show more values');
        this.dynamicFacetQueryController.increaseNumberOfValuesToRequest(additionalNumberOfValues);
        this.triggerNewQuery();
        this.logAnalyticsFacetShowMoreLess(AnalyticsActionListMeta_1.analyticsActionCauseList.facetShowMore);
    };
    /**
     * Reduces the number of displayed facet values down to [numberOfValues]{@link DynamicFacet.options.numberOfValues}.
     *
     * Automatically triggers a query.
     */
    DynamicFacet.prototype.showLessValues = function () {
        this.ensureDom();
        this.logger.info('Show less values');
        this.dynamicFacetQueryController.resetNumberOfValuesToRequest();
        this.triggerNewQuery();
        this.logAnalyticsFacetShowMoreLess(AnalyticsActionListMeta_1.analyticsActionCauseList.facetShowLess);
    };
    /**
     * Deselects all values in this facet.
     *
     * Does **not** trigger a query automatically.
     * Updates the visual of the facet.
     *
     */
    DynamicFacet.prototype.reset = function () {
        this.ensureDom();
        this.logger.info('Deselect all values');
        this.values.clearAll();
        this.values.render();
        this.updateAppearance();
        this.updateQueryStateModel();
    };
    /**
     * Collapses or expands the facet depending on it's current state.
     */
    DynamicFacet.prototype.toggleCollapse = function () {
        this.isCollapsed ? this.expand() : this.collapse();
    };
    /**
     * Expands the facet, displaying all of its currently fetched values.
     */
    DynamicFacet.prototype.expand = function () {
        this.ensureDom();
        this.logger.info('Expand facet values');
        this.isCollapsed = false;
        this.updateAppearance();
    };
    /**
     * Collapses the facet, displaying only its currently selected values.
     */
    DynamicFacet.prototype.collapse = function () {
        this.ensureDom();
        this.logger.info('Collapse facet values');
        this.isCollapsed = true;
        this.updateAppearance();
    };
    /**
     * Sets a flag indicating whether the facet values should be returned in their current order.
     *
     * Setting the flag to `true` helps ensuring that the values do not move around while the end-user is interacting with them.
     *
     * The flag is automatically set back to `false` after a query is built.
     */
    DynamicFacet.prototype.enableFreezeCurrentValuesFlag = function () {
        Assert_1.Assert.exists(this.dynamicFacetQueryController);
        this.dynamicFacetQueryController.enableFreezeCurrentValuesFlag();
    };
    /**
     * For this method to work, the component has to be the child of a [DynamicFacetManager]{@link DynamicFacetManager} component.
     *
     * Sets a flag indicating whether the facets should be returned in their current order.
     *
     * Setting the flag to `true` helps ensuring that the facets do not move around while the end-user is interacting with them.
     *
     * The flag is automatically set back to `false` after a query is built.
     */
    DynamicFacet.prototype.enableFreezeFacetOrderFlag = function () {
        Assert_1.Assert.exists(this.dynamicFacetQueryController);
        this.dynamicFacetQueryController.enableFreezeFacetOrderFlag();
    };
    DynamicFacet.prototype.pinFacetPosition = function () {
        this.padding && this.padding.pin();
    };
    Object.defineProperty(DynamicFacet.prototype, "analyticsFacetState", {
        // Complete facet analytics meta
        get: function () {
            return this.values.activeFacetValues.map(function (facetValue) { return facetValue.analyticsMeta; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacet.prototype, "basicAnalyticsFacetState", {
        // Facet specific analytics meta
        get: function () {
            return {
                field: this.options.field.toString(),
                id: this.options.id,
                facetType: AnalyticsActionListMeta_1.AnalyticsDynamicFacetType.string,
                facetPosition: this.position
            };
        },
        enumerable: true,
        configurable: true
    });
    DynamicFacet.prototype.logAnalyticsEvent = function (actionCause, facetMeta) {
        this.usageAnalytics.logSearchEvent(actionCause, facetMeta);
    };
    DynamicFacet.prototype.putStateIntoQueryBuilder = function (queryBuilder) {
        Assert_1.Assert.exists(queryBuilder);
        this.dynamicFacetQueryController.putFacetIntoQueryBuilder(queryBuilder);
    };
    DynamicFacet.prototype.putStateIntoAnalytics = function () {
        var pendingEvent = this.usageAnalytics.getPendingSearchEvent();
        pendingEvent && pendingEvent.addFacetState(this.analyticsFacetState);
    };
    DynamicFacet.prototype.isCurrentlyDisplayed = function () {
        if (!Dom_1.$$(this.element).isVisible()) {
            return false;
        }
        if (Dom_1.$$(this.element).hasClass('coveo-hidden')) {
            return false;
        }
        return true;
    };
    DynamicFacet.prototype.initQueryEvents = function () {
        var _this = this;
        this.bind.onRootElement(QueryEvents_1.QueryEvents.duringQuery, function () { return _this.ensureDom(); });
        this.bind.onRootElement(QueryEvents_1.QueryEvents.doneBuildingQuery, function (data) { return _this.handleDoneBuildingQuery(data); });
        this.bind.onRootElement(QueryEvents_1.QueryEvents.querySuccess, function (data) { return _this.handleQuerySuccess(data); });
        this.bind.onRootElement(QueryEvents_1.QueryEvents.deferredQuerySuccess, function () { return _this.handleDeferredQuerySuccess(); });
        this.bind.onRootElement(QueryEvents_1.QueryEvents.queryError, function () { return _this.onQueryResponse(); });
    };
    DynamicFacet.prototype.initQueryStateEvents = function () {
        this.includedAttributeId = QueryStateModel_1.QueryStateModel.getFacetId(this.options.id);
        this.queryStateModel.registerNewAttribute(this.includedAttributeId, []);
        this.bind.onQueryState(Model_1.MODEL_EVENTS.CHANGE, undefined, this.handleQueryStateChanged);
    };
    DynamicFacet.prototype.initBreadCrumbEvents = function () {
        var _this = this;
        if (this.options.includeInBreadcrumb) {
            this.bind.onRootElement(BreadcrumbEvents_1.BreadcrumbEvents.populateBreadcrumb, function (args) {
                return _this.handlePopulateBreadcrumb(args);
            });
            this.bind.onRootElement(BreadcrumbEvents_1.BreadcrumbEvents.clearBreadcrumb, function () { return _this.reset(); });
        }
    };
    DynamicFacet.prototype.initComponentStateEvents = function () {
        var componentStateId = QueryStateModel_1.QueryStateModel.getFacetId(this.options.id);
        this.componentStateModel.registerComponent(componentStateId, this);
    };
    DynamicFacet.prototype.initDynamicFacetQueryController = function () {
        this.dynamicFacetQueryController = new DynamicFacetQueryController_1.DynamicFacetQueryController(this);
    };
    DynamicFacet.prototype.handleDoneBuildingQuery = function (data) {
        // If there is a DynamicFacetManager, it will take care of adding the facet's state
        if (this.dynamicFacetManager) {
            return;
        }
        Assert_1.Assert.exists(data);
        Assert_1.Assert.exists(data.queryBuilder);
        this.putStateIntoQueryBuilder(data.queryBuilder);
        this.putStateIntoAnalytics();
    };
    DynamicFacet.prototype.handleQuerySuccess = function (data) {
        if (Utils_1.Utils.isNullOrUndefined(data.results.facets)) {
            return this.notImplementedError();
        }
        var index = underscore_1.findIndex(data.results.facets, { facetId: this.options.id });
        var response = index !== -1 ? data.results.facets[index] : null;
        this.position = index + 1;
        this.onQueryResponse(response);
    };
    DynamicFacet.prototype.handleDeferredQuerySuccess = function () {
        this.header.hideLoading();
        this.values.render();
        this.updateAppearance();
        this.padding && this.padding.ensurePinnedFacetHasNotMoved();
    };
    DynamicFacet.prototype.onQueryResponse = function (response) {
        response ? this.values.createFromResponse(response) : this.values.resetValues();
    };
    DynamicFacet.prototype.handleQueryStateChanged = function (data) {
        if (!this.listenToQueryStateChange) {
            return;
        }
        var querySelectedValues = data.attributes[this.includedAttributeId];
        if (!querySelectedValues) {
            return;
        }
        this.handleQueryStateChangedIncluded(querySelectedValues);
    };
    DynamicFacet.prototype.handlePopulateBreadcrumb = function (args) {
        Assert_1.Assert.exists(args);
        if (!this.values.hasActiveValues) {
            return;
        }
        var breadcrumbs = new DynamicFacetBreadcrumbs_1.DynamicFacetBreadcrumbs(this);
        args.breadcrumbs.push({ element: breadcrumbs.element });
    };
    DynamicFacet.prototype.createDom = function () {
        this.createPadding();
        this.createContent();
        this.updateAppearance();
    };
    DynamicFacet.prototype.createPadding = function () {
        if (!this.options.preservePosition) {
            return;
        }
        var columnParent = Dom_1.$$(this.element).parent('coveo-facet-column');
        if (!columnParent) {
            return this.logger.info("Padding feature deactivated because facet doesn't have a parent with the class \"coveo-facet-column\"");
        }
        this.padding = new FacetPadding_1.FacetPadding(this.element, columnParent);
    };
    DynamicFacet.prototype.createContent = function () {
        this.header = this.createHeader();
        this.element.appendChild(this.header.element);
        this.element.appendChild(this.values.render());
    };
    DynamicFacet.prototype.createHeader = function () {
        return new DynamicFacetHeader_1.DynamicFacetHeader(this);
    };
    DynamicFacet.prototype.handleFacetValuesChanged = function () {
        this.updateQueryStateModel();
    };
    DynamicFacet.prototype.updateQueryStateModel = function () {
        this.listenToQueryStateChange = false;
        this.updateIncludedQueryStateModel();
        this.listenToQueryStateChange = true;
    };
    DynamicFacet.prototype.updateIncludedQueryStateModel = function () {
        this.queryStateModel.set(this.includedAttributeId, this.values.selectedValues);
    };
    DynamicFacet.prototype.updateAppearance = function () {
        this.header.toggleClear(this.values.hasSelectedValues);
        this.header.toggleCollapse(this.isCollapsed);
        Dom_1.$$(this.element).toggleClass('coveo-dynamic-facet-collapsed', this.isCollapsed);
        Dom_1.$$(this.element).toggleClass('coveo-active', this.values.hasSelectedValues);
        Dom_1.$$(this.element).toggleClass('coveo-hidden', this.values.isEmpty);
    };
    DynamicFacet.prototype.triggerNewQuery = function (beforeExecuteQuery) {
        this.beforeSendingQuery();
        var options = beforeExecuteQuery ? { beforeExecuteQuery: beforeExecuteQuery } : { ignoreWarningSearchEvent: true };
        this.queryController.executeQuery(options);
    };
    DynamicFacet.prototype.beforeSendingQuery = function () {
        this.header.showLoading();
        this.updateAppearance();
    };
    DynamicFacet.prototype.notImplementedError = function () {
        this.logger.error('DynamicFacets are not supported by your current search endpoint. Disabling this component.');
        this.disable();
        this.updateAppearance();
    };
    DynamicFacet.prototype.logAnalyticsFacetShowMoreLess = function (cause) {
        this.usageAnalytics.logCustomEvent(cause, {
            facetId: this.options.id,
            facetField: this.options.field.toString(),
            facetTitle: this.options.title
        }, this.element);
    };
    DynamicFacet.ID = 'DynamicFacet';
    DynamicFacet.doExport = function () { return GlobalExports_1.exportGlobally({ DynamicFacet: DynamicFacet }); };
    /**
     * The options for the DynamicFacet
     * @componentOptions
     */
    DynamicFacet.options = __assign({}, ResponsiveFacetOptions_1.ResponsiveFacetOptions, { 
        /**
         * The unique identifier for this facet.
         *
         * Among other things, this is used to record and read the facet
         * state in the URL fragment identifier (see the
         * [`enableHistory`]{@link SearchInterface.options.enableHistory} `SearchInterface`
         * option).
         *
         * **Tip:** When several facets in a given search interface are based on
         * the same field, ensure that each of those facets has a distinct `id`.
         *
         * If specified, must contain between 1 and 60 characters.
         * Only alphanumeric (A-Za-z0-9), underscore (_), and hyphen (-) characters are kept; other characters are automatically removed.
         *
         * **Default:** The [`field`]{@link DynamicFacet.options.field} option value.
         */
        id: ComponentOptions_1.ComponentOptions.buildStringOption({
            postProcessing: function (value, options) {
                if (value === void 0) { value = ''; }
                var maxCharLength = 60;
                var sanitizedValue = value.replace(/[^A-Za-z0-9-_@]+/g, '');
                if (Utils_1.Utils.isNonEmptyString(sanitizedValue)) {
                    return sanitizedValue.slice(0, maxCharLength - 1);
                }
                return options.field.slice(0, maxCharLength - 1);
            }
        }), 
        /**
         * The title to display for this facet.
         *
         * **Default:** The localized string for `NoTitle`.
         */
        title: ComponentOptions_1.ComponentOptions.buildLocalizedStringOption({
            defaultValue: Strings_1.l('NoTitle'),
            section: 'CommonOptions',
            priority: 10
        }), 
        /**
         * The name of the field on which to base this facet.
         *
         * Must be prefixed by `@`, and must reference an existing field whose
         * **Facet** option is enabled (see
         * [Add or Edit Fields](https://docs.coveo.com/en/1982/)).
         *
         * **Required:** Specifying a value for this option is required for the
         * component to work.
         */
        field: ComponentOptions_1.ComponentOptions.buildFieldOption({ required: true, section: 'CommonOptions' }), 
        /**
         * The sort criterion to use for this facet.
         *
         * See [`FacetSortCriteria`]{@link FacetSortCriteria} for the list and
         * description of allowed values.
         *
         * **Default:** `undefined`, and the following behavior applies:
         * - If the requested [`numberOfValues`]{@link DynamicFacet.options.numberOfValues}
         * is greater than or equal to the currently displayed number of values,
         * the [`alphanumeric`]{@link FacetSortCriteria.alphanumeric} criterion is
         * used.
         * - If the requested `numberOfValues` is less than the currently displayed
         * number of values and the facet is not currently expanded, the [`score`]{@link FacetSortCriteria.score}
         * criterion is used.
         * - Otherwise, the `alphanumeric` criterion is used.
         */
        sortCriteria: ComponentOptions_1.ComponentOptions.buildStringOption({
            postProcessing: function (value) { return (FacetSortCriteria_1.isFacetSortCriteria(value) ? value : undefined); },
            section: 'Sorting'
        }), 
        /**
         * The number of values to request for this facet.
         *
         * Also determines the default maximum number of additional values to request each time this facet is expanded,
         * and the maximum number of values to display when this facet is collapsed (see [enableCollapse]{@link DynamicFacet.options.enableCollapse}).
         *
         * **Default:** `8`
         */
        numberOfValues: ComponentOptions_1.ComponentOptions.buildNumberOption({ min: 0, defaultValue: 8, section: 'CommonOptions' }), 
        /**
         * Whether to allow the end-user to expand and collapse this facet.
         *
         * **Default:** `false`
         */
        enableCollapse: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, section: 'Filtering' }), 
        /**
         * Whether this facet should be collapsed by default.
         *
         * See also the [`enableCollapse`]{@link DynamicFacet.options.enableCollapse}
         * option.
         *
         * **Default:** `false`
         */
        collapsedByDefault: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false, section: 'Filtering' }), 
        /**
         * Whether to notify the [Breadcrumb]{@link Breadcrumb} component when toggling values in the facet.
         *
         * See also the [numberOfValuesInBreadcrumb]{@link DynamicFacet.options.numberOfValuesInBreadcrumb} option.
         *
         * **Default:** `true`
         */
        includeInBreadcrumb: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true, section: 'CommonOptions' }), 
        /**
         * The maximum number of selected values the [`Breadcrumb`]{@link Breadcrumb} component can display before outputting a **N more...** link for the facet.
         *
         * **Note:** This option only has a meaning when the [`includeInBreadcrumb`]{@link DynamicFacet.options.includeInBreadcrumb} option is set to `true`.
         *
         * **Minimum:** `0`
         * **Default:** `5` (desktop), or `3` (mobile)
         */
        numberOfValuesInBreadcrumb: ComponentOptions_1.ComponentOptions.buildNumberOption({
            defaultFunction: function () { return (DeviceUtils_1.DeviceUtils.isMobileDevice() ? 3 : 5); },
            min: 0,
            depend: 'includeInBreadcrumb',
            section: 'CommonOptions'
        }), 
        /**
         * A mapping of facet values to their desired captions.
         *
         * See [Normalizing Facet Value Captions](https://developers.coveo.com/x/jBsvAg).
         *
         */
        valueCaption: ComponentOptions_1.ComponentOptions.buildJsonOption(), 
        /**
         * Whether the facet should remain in its current position in the viewport when the mouse cursor is over it.
         *
         * Leaving this to `true` ensures that the facet does not move around in the search interface while the end-user is interacting with it.
         *
         * Default: `true`
         */
        preservePosition: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }) });
    return DynamicFacet;
}(Component_1.Component));
exports.DynamicFacet = DynamicFacet;
Initialization_1.Initialization.registerAutoCreateComponent(DynamicFacet);
DynamicFacet.doExport();


/***/ }),

/***/ 128:
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
var underscore_1 = __webpack_require__(0);
var GlobalExports_1 = __webpack_require__(3);
var Assert_1 = __webpack_require__(5);
var QueryStateModel_1 = __webpack_require__(12);
var AccessibleButton_1 = __webpack_require__(17);
var DateUtils_1 = __webpack_require__(31);
var Dom_1 = __webpack_require__(1);
var StringUtils_1 = __webpack_require__(19);
var Utils_1 = __webpack_require__(4);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var Component_1 = __webpack_require__(6);
var ComponentOptions_1 = __webpack_require__(8);
var Initialization_1 = __webpack_require__(2);
var FacetUtils_1 = __webpack_require__(46);
var TemplateHelpers_1 = __webpack_require__(108);
var Strings_1 = __webpack_require__(7);
var DynamicFacet_1 = __webpack_require__(121);
function showOnlyWithHelper(helpers, options) {
    if (options == null) {
        options = {};
    }
    options.helpers = helpers;
    return options;
}
/**
 * The FieldValue component displays the value of a field associated to its parent search result. It is normally usable
 * within a {@link FieldTable}.
 *
 * This component is a result template component (see [Result Templates](https://developers.coveo.com/x/aIGfAQ)).
 *
 * A common use of this component is to display a specific field value which also happens to be an existing
 * {@link Facet.options.field}. When the user clicks on the FieldValue component, it activates the corresponding Facet.
 */
var FieldValue = /** @class */ (function (_super) {
    __extends(FieldValue, _super);
    /**
     * Creates a new FieldValue.
     * @param element The HTMLElement on which to instantiate the component.
     * @param options The options for the FieldValue component.
     * @param bindings The bindings that the component requires to function normally. If not set, these will be
     * automatically resolved (with a slower execution time).
     * @param result The result to associate the component with.
     */
    function FieldValue(element, options, bindings, result, fieldValueClassId) {
        if (fieldValueClassId === void 0) { fieldValueClassId = FieldValue.ID; }
        var _this = _super.call(this, element, fieldValueClassId, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.result = result;
        _this.options = ComponentOptions_1.ComponentOptions.initOptions(element, FieldValue.simpleOptions, options);
        if (_this.options.helper != null) {
            _this.normalizeHelperAndOptions();
        }
        _this.result = _this.result || _this.resolveResult();
        Assert_1.Assert.exists(_this.result);
        var loadedValueFromComponent = _this.getValue();
        if (loadedValueFromComponent == null) {
            // Completely remove the element to ease stuff such as adding separators in CSS
            if (_this.element.parentElement != null) {
                _this.element.parentElement.removeChild(_this.element);
            }
        }
        else {
            var values = void 0;
            if (underscore_1.isArray(loadedValueFromComponent)) {
                values = loadedValueFromComponent;
            }
            else if (_this.options.splitValues) {
                if (underscore_1.isString(loadedValueFromComponent)) {
                    values = underscore_1.map(loadedValueFromComponent.split(_this.options.separator), function (v) {
                        return v.trim();
                    });
                }
            }
            else {
                loadedValueFromComponent = loadedValueFromComponent.toString();
                values = [loadedValueFromComponent];
            }
            _this.appendValuesToDom(values);
            if (_this.options.textCaption != null) {
                _this.prependTextCaptionToDom();
            }
        }
        return _this;
    }
    /**
     * Gets the current FieldValue from the current {@link IQueryResult}.
     *
     * @returns {any} The current FieldValue or `null` if value is and `Object`.
     */
    FieldValue.prototype.getValue = function () {
        var value = Utils_1.Utils.getFieldValue(this.result, this.options.field);
        if (!underscore_1.isArray(value) && underscore_1.isObject(value)) {
            value = null;
        }
        return value;
    };
    /**
     * Renders a value to HTML using all of the current FieldValue component options.
     * @param value The value to render.
     * @returns {HTMLElement} The element containing the rendered value.
     */
    FieldValue.prototype.renderOneValue = function (value) {
        var element = Dom_1.$$('span').el;
        var toRender = FacetUtils_1.FacetUtils.tryToGetTranslatedCaption(this.options.field, value);
        if (this.options.helper) {
            // Try to resolve and execute version 2 of each helper function if available
            var helper = TemplateHelpers_1.TemplateHelpers.getHelper(this.options.helper + "v2") || TemplateHelpers_1.TemplateHelpers.getHelper("" + this.options.helper);
            if (Utils_1.Utils.exists(helper)) {
                toRender = helper.call(this, value, this.getHelperOptions());
            }
            else {
                this.logger.warn("Helper " + this.options.helper + " is not found in available helpers. The list of supported helpers is :", underscore_1.keys(TemplateHelpers_1.TemplateHelpers.getHelpers()));
            }
            var fullDateStr = this.getFullDate(value, this.options.helper);
            if (fullDateStr) {
                element.setAttribute('title', fullDateStr);
            }
            if (this.options.helper == 'date' || this.options.helper == 'dateTime' || this.options.helper == 'emailDateTime') {
                toRender = StringUtils_1.StringUtils.capitalizeFirstLetter(toRender);
            }
        }
        if (this.options.htmlValue) {
            element.innerHTML = toRender;
        }
        else {
            element.appendChild(document.createTextNode(toRender));
        }
        this.bindEventOnValue(element, value, toRender);
        return element;
    };
    FieldValue.prototype.getValueContainer = function () {
        return this.element;
    };
    FieldValue.prototype.normalizeHelperAndOptions = function () {
        var _this = this;
        this.options = ComponentOptions_1.ComponentOptions.initOptions(this.element, FieldValue.helperOptions, this.options);
        var toFilter = underscore_1.keys(FieldValue.options.helperOptions['subOptions']);
        var toKeep = underscore_1.filter(toFilter, function (optionKey) {
            var optionDefinition = FieldValue.options.helperOptions['subOptions'][optionKey];
            if (optionDefinition) {
                var helpers = optionDefinition.helpers;
                return helpers != null && underscore_1.contains(helpers, _this.options.helper);
            }
            return false;
        });
        this.options.helperOptions = underscore_1.omit(this.options.helperOptions, function (value, key) {
            return !underscore_1.contains(toKeep, key);
        });
    };
    FieldValue.prototype.getHelperOptions = function () {
        var inlineOptions = ComponentOptions_1.ComponentOptions.loadStringOption(this.element, 'helperOptions', {});
        if (Utils_1.Utils.isNonEmptyString(inlineOptions)) {
            return underscore_1.extend({}, this.options.helperOptions, eval('(' + inlineOptions + ')'));
        }
        return this.options.helperOptions;
    };
    FieldValue.prototype.getFullDate = function (date, helper) {
        var fullDateOptions = {
            useLongDateFormat: true,
            useTodayYesterdayAndTomorrow: false,
            useWeekdayIfThisWeek: false,
            omitYearIfCurrentOne: false
        };
        if (helper == 'date') {
            return DateUtils_1.DateUtils.dateToString(new Date(parseInt(date)), fullDateOptions);
        }
        else if (helper == 'dateTime' || helper == 'emailDateTime') {
            return DateUtils_1.DateUtils.dateTimeToString(new Date(parseInt(date)), fullDateOptions);
        }
        return '';
    };
    FieldValue.prototype.appendValuesToDom = function (values) {
        var _this = this;
        underscore_1.each(values, function (value, index) {
            if (value != undefined) {
                _this.getValueContainer().appendChild(_this.renderOneValue(value));
                if (index !== values.length - 1) {
                    _this.getValueContainer().appendChild(document.createTextNode(_this.options.displaySeparator));
                }
            }
        });
    };
    FieldValue.prototype.renderTextCaption = function () {
        var element = Dom_1.$$('span', { className: 'coveo-field-caption' }, underscore_1.escape(this.options.textCaption));
        return element.el;
    };
    FieldValue.prototype.prependTextCaptionToDom = function () {
        var elem = this.getValueContainer();
        Dom_1.$$(elem).prepend(this.renderTextCaption());
        // Add a class to the container so the value and the caption wrap together.
        Dom_1.$$(elem).addClass('coveo-with-label');
    };
    FieldValue.prototype.bindEventOnValue = function (element, originalFacetValue, renderedFacetValue) {
        this.bindFacets(element, originalFacetValue, renderedFacetValue);
        this.bindDynamicFacets(element, originalFacetValue, renderedFacetValue);
    };
    FieldValue.prototype.bindFacets = function (element, originalFacetValue, renderedFacetValue) {
        var _this = this;
        var facetAttributeName = QueryStateModel_1.QueryStateModel.getFacetId(this.options.facet);
        var facets = underscore_1.filter(this.componentStateModel.get(facetAttributeName), function (possibleFacetComponent) {
            // Here, we need to check if a potential facet component (as returned by the component state model) is a "standard" facet.
            // It's also possible that the FacetRange and FacetSlider constructor are not available (lazy loading mode)
            // For that reason we also need to check that the constructor event exist before calling the instanceof operator or an exception would explode (cannot use instanceof "undefined")
            var componentIsAStandardFacet = true;
            var facetRangeConstructorExists = Component_1.Component.getComponentRef('FacetRange');
            var facetSliderConstructorExists = Component_1.Component.getComponentRef('FacetSlider');
            if (possibleFacetComponent.disabled) {
                return false;
            }
            if (componentIsAStandardFacet && facetRangeConstructorExists) {
                componentIsAStandardFacet = !(possibleFacetComponent instanceof facetRangeConstructorExists);
            }
            if (componentIsAStandardFacet && facetSliderConstructorExists) {
                componentIsAStandardFacet = !(possibleFacetComponent instanceof facetSliderConstructorExists);
            }
            return componentIsAStandardFacet;
        });
        if (facets.length) {
            var isValueSelected_1 = !!underscore_1.find(facets, function (facet) {
                var facetValue = facet.values.get(originalFacetValue);
                return facetValue && facetValue.selected;
            });
            var selectAction = function () { return _this.handleFacetSelection(isValueSelected_1, facets, originalFacetValue); };
            this.buildClickableElement(element, !!isValueSelected_1, renderedFacetValue, selectAction);
        }
    };
    FieldValue.prototype.getDynamicFacets = function () {
        var dynamicFacetAttributeName = QueryStateModel_1.QueryStateModel.getFacetId(this.options.facet);
        return underscore_1.filter(this.componentStateModel.get(dynamicFacetAttributeName), function (component) { return component.type === DynamicFacet_1.DynamicFacet.ID && !component.disabled; });
    };
    FieldValue.prototype.bindDynamicFacets = function (element, originalFacetValue, renderedFacetValue) {
        var _this = this;
        var dynamicFacets = this.getDynamicFacets();
        if (dynamicFacets.length) {
            var isValueSelected_2 = !!underscore_1.find(dynamicFacets, function (dynamicFacet) { return dynamicFacet.values.hasSelectedValue(originalFacetValue); });
            var selectAction = function () { return _this.handleDynamicFacetSelection(isValueSelected_2, dynamicFacets, originalFacetValue); };
            this.buildClickableElement(element, isValueSelected_2, renderedFacetValue, selectAction);
        }
    };
    FieldValue.prototype.buildClickableElement = function (element, isSelected, value, selectAction) {
        var label = isSelected ? Strings_1.l('RemoveFilterOn', value) : Strings_1.l('FilterOn', value);
        new AccessibleButton_1.AccessibleButton()
            .withTitle(label)
            .withLabel(label)
            .withElement(element)
            .withSelectAction(selectAction)
            .build();
        if (isSelected) {
            Dom_1.$$(element).addClass('coveo-selected');
        }
        Dom_1.$$(element).addClass('coveo-clickable');
    };
    FieldValue.prototype.handleFacetSelection = function (isValueSelected, facets, value) {
        facets.forEach(function (facet) {
            isValueSelected ? facet.deselectValue(value) : facet.selectValue(value);
        });
        this.executeQuery(value);
    };
    FieldValue.prototype.handleDynamicFacetSelection = function (isValueSelected, facets, value) {
        facets.forEach(function (facet) {
            isValueSelected ? facet.deselectValue(value) : facet.selectValue(value);
        });
        this.executeQuery(value);
    };
    FieldValue.prototype.executeQuery = function (value) {
        var _this = this;
        this.queryController.deferExecuteQuery({
            beforeExecuteQuery: function () {
                return _this.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.documentField, {
                    facetId: _this.options.facet,
                    facetField: _this.options.field.toString(),
                    facetValue: value.toLowerCase()
                });
            }
        });
    };
    FieldValue.ID = 'FieldValue';
    FieldValue.doExport = function () {
        GlobalExports_1.exportGlobally({
            FieldValue: FieldValue
        });
    };
    /**
     * The options for the component
     * @componentOptions
     */
    FieldValue.options = {
        /**
         * Specifies the field that the FieldValue should display.
         *
         * Specifying a value for this parameter is required in order for the FieldValue component to work.
         */
        field: ComponentOptions_1.ComponentOptions.buildFieldOption({ defaultValue: '@field', required: true }),
        /**
         * Specifies the {@link Facet} component to toggle when the end user clicks the FieldValue.
         *
         * Default value is the value of {@link FieldValue.options.field}.
         *
         * **Note:**
         * > If the target {@link Facet.options.id} is is not the same as its {@link Facet.options.field}), you must specify
         * > this option manually in order to link to the correct Facet.
         */
        facet: ComponentOptions_1.ComponentOptions.buildStringOption({ postProcessing: function (value, options) { return value || options.field; } }),
        /**
         * Specifies whether the content to display is an HTML element.
         *
         * Default value is `false`.
         */
        htmlValue: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies whether to split the FieldValue at each {@link FieldValue.options.separator}.
         *
         * This is useful for splitting groups using a {@link Facet.options.field}.
         *
         * When this option is `true`, the displayed values are split by the {@link FieldValue.options.displaySeparator}.
         *
         * Default value is `false`.
         */
        splitValues: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
        /**
         * If {@link FieldValue.options.splitValues} is `true`, specifies the separator string which separates multi-value
         * fields in the index.
         *
         * See {@link FieldValue.options.displaySeparator}.
         *
         * Default value is `";"`.
         */
        separator: ComponentOptions_1.ComponentOptions.buildStringOption({ depend: 'splitValues', defaultValue: ';' }),
        /**
         * If {@link FieldValue.options.splitValues} is `true`, specifies the string to use when displaying multi-value
         * fields in the UI.
         *
         * The component will insert this string between each value it displays from a multi-value field.
         *
         * See also {@link FieldValue.options.separator}.
         *
         * Default value is `", "`.
         */
        displaySeparator: ComponentOptions_1.ComponentOptions.buildStringOption({ depend: 'splitValues', defaultValue: ', ' }),
        /**
         * Specifies the helper that the FieldValue should use to display its content.
         *
         * While several helpers exist by default (see {@link ICoreHelpers}), it is also possible for you to create your own
         * custom helpers (see {@link TemplateHelpers}).
         */
        helper: ComponentOptions_1.ComponentOptions.buildHelperOption(),
        /**
         * Specifies the options to call on the specified helper.
         */
        helperOptions: ComponentOptions_1.ComponentOptions.buildObjectOption({
            subOptions: {
                text: ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(['anchor'])),
                target: ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(['anchor'])),
                class: ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(['anchor'])),
                decimals: ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(['currency'], { min: 0 })),
                symbol: ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(['currency'])),
                useTodayYesterdayAndTomorrow: ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(['date', 'dateTime', 'emailDateTime', 'time'], { defaultValue: true })),
                useWeekdayIfThisWeek: ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(['date', 'dateTime', 'emailDateTime', 'time'], { defaultValue: true })),
                omitYearIfCurrentOne: ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(['date', 'dateTime', 'emailDateTime', 'time'], { defaultValue: true })),
                useLongDateFormat: ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(['date', 'dateTime', 'emailDateTime', 'time'], { defaultValue: false })),
                includeTimeIfToday: ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(['date', 'dateTime', 'emailDateTime', 'time'], { defaultValue: true })),
                includeTimeIfThisWeek: ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(['date', 'dateTime', 'emailDateTime', 'time'], { defaultValue: true })),
                alwaysIncludeTime: ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(['date', 'dateTime', 'emailDateTime', 'time'], { defaultValue: false })),
                predefinedFormat: ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(['date', 'dateTime', 'emailDateTime', 'time'])),
                companyDomain: ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(['email'])),
                me: ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(['email'])),
                lengthLimit: ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(['email'], { min: 1 })),
                truncateName: ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(['email'])),
                alt: ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(['image'])),
                height: ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(['image'])),
                width: ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(['image'])),
                precision: ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(['size'], { min: 0, defaultValue: 2 })),
                base: ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(['size'], { min: 0, defaultValue: 0 })),
                isMilliseconds: ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(['timeSpan'])),
                length: ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(['shorten', 'shortenPath', 'shortenUri'], { defaultValue: 200 }))
            }
        }),
        /**
         * Specifies a caption to display before the value.
         *
         * Default value is `undefined`.
         */
        textCaption: ComponentOptions_1.ComponentOptions.buildLocalizedStringOption()
    };
    FieldValue.simpleOptions = underscore_1.omit(FieldValue.options, 'helperOptions');
    FieldValue.helperOptions = {
        helperOptions: FieldValue.options.helperOptions
    };
    return FieldValue;
}(Component_1.Component));
exports.FieldValue = FieldValue;
Initialization_1.Initialization.registerAutoCreateComponent(FieldValue);


/***/ }),

/***/ 15:
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

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(464);
var QueryEvents_1 = __webpack_require__(10);
var Logger_1 = __webpack_require__(11);
var Strings_1 = __webpack_require__(7);
var Dom_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(4);
var Component_1 = __webpack_require__(6);
var SearchInterface_1 = __webpack_require__(18);
var ResponsiveComponents_1 = __webpack_require__(49);
var ResponsiveComponentsManager_1 = __webpack_require__(55);
var ResponsiveComponentsUtils_1 = __webpack_require__(116);
var ResponsiveDropdown_1 = __webpack_require__(106);
var ResponsiveDropdownContent_1 = __webpack_require__(103);
var ResponsiveDropdownHeader_1 = __webpack_require__(122);
var underscore_1 = __webpack_require__(0);
var ComponentsTypes_1 = __webpack_require__(164);
var ResponsiveFacetColumn = /** @class */ (function () {
    function ResponsiveFacetColumn(coveoRoot, ID, options, responsiveDropdown) {
        this.coveoRoot = coveoRoot;
        this.ID = ID;
        this.componentsInFacetColumn = [];
        this.preservePositionOriginalValues = [];
        this.dropdownHeaderLabel = this.getDropdownHeaderLabel();
        this.dropdown = this.buildDropdown(responsiveDropdown);
        this.searchInterface = Component_1.Component.get(this.coveoRoot.el, SearchInterface_1.SearchInterface, false);
        this.bindDropdownContentEvents();
        this.registerOnCloseHandler();
        this.registerQueryEvents();
        this.breakpoint = options.responsiveBreakpoint;
    }
    ResponsiveFacetColumn.init = function (responsiveComponentConstructor, root, component, options, ID) {
        var column = this.findColumn(root);
        if (!column) {
            return;
        }
        ResponsiveComponentsManager_1.ResponsiveComponentsManager.register(ResponsiveFacetColumn, Dom_1.$$(root), 'ResponsiveFacetColumn', component, options);
        ResponsiveComponentsManager_1.ResponsiveComponentsManager.register(responsiveComponentConstructor, Dom_1.$$(root), ID, component, options);
    };
    ResponsiveFacetColumn.findColumn = function (root) {
        var column = Dom_1.$$(root).find('.coveo-facet-column');
        if (!column) {
            var logger = new Logger_1.Logger('ResponsiveFacets');
            logger.info('No element with class coveo-facet-column. Responsive facets cannot be enabled');
        }
        return column;
    };
    ResponsiveFacetColumn.prototype.registerComponent = function (accept) {
        this.componentsInFacetColumn.push(accept);
        this.preservePositionOriginalValues.push(accept.options.preservePosition);
        return true;
    };
    ResponsiveFacetColumn.prototype.needDropdownWrapper = function () {
        return this.needSmallMode();
    };
    ResponsiveFacetColumn.prototype.handleResizeEvent = function () {
        if (this.needSmallMode() && !ResponsiveComponentsUtils_1.ResponsiveComponentsUtils.isSmallFacetActivated(this.coveoRoot)) {
            this.changeToSmallMode();
        }
        else if (!this.needSmallMode() && ResponsiveComponentsUtils_1.ResponsiveComponentsUtils.isSmallFacetActivated(this.coveoRoot)) {
            this.changeToLargeMode();
        }
        if (this.dropdown.isOpened) {
            this.dropdown.dropdownContent.positionDropdown();
        }
    };
    ResponsiveFacetColumn.prototype.dismissFacetSearches = function () {
        underscore_1.each(this.componentsInFacetColumn, function (component) {
            if (component.facetSearch && component.facetSearch.currentlyDisplayedResults) {
                component.facetSearch.dismissSearchResults();
            }
        });
    };
    ResponsiveFacetColumn.prototype.needSmallMode = function () {
        if (!this.searchInterface) {
            return (this.coveoRoot.width() <=
                (Utils_1.Utils.isNullOrUndefined(this.breakpoint) ? new ResponsiveComponents_1.ResponsiveComponents().getMediumScreenWidth() : this.breakpoint));
        }
        switch (this.searchInterface.responsiveComponents.getResponsiveMode()) {
            case 'small':
            case 'medium':
                return true;
            case 'auto':
                return (this.coveoRoot.width() <=
                    (Utils_1.Utils.isNullOrUndefined(this.breakpoint) ? this.searchInterface.responsiveComponents.getMediumScreenWidth() : this.breakpoint));
            default:
                return false;
        }
    };
    ResponsiveFacetColumn.prototype.changeToSmallMode = function () {
        this.dropdown.close();
        this.disableFacetPreservePosition();
        Dom_1.$$(this.coveoRoot.find("." + ResponsiveComponentsManager_1.ResponsiveComponentsManager.DROPDOWN_HEADER_WRAPPER_CSS_CLASS)).append(this.dropdown.dropdownHeader.element.el);
        ResponsiveComponentsUtils_1.ResponsiveComponentsUtils.activateSmallFacet(this.coveoRoot);
    };
    ResponsiveFacetColumn.prototype.changeToLargeMode = function () {
        this.restoreFacetPreservePositionValue();
        this.dropdown.cleanUp();
        ResponsiveComponentsUtils_1.ResponsiveComponentsUtils.deactivateSmallFacet(this.coveoRoot);
    };
    ResponsiveFacetColumn.prototype.buildDropdown = function (responsiveDropdown) {
        var dropdownContent = this.buildDropdownContent();
        var dropdownHeader = this.buildDropdownHeader();
        var dropdown = responsiveDropdown ? responsiveDropdown : new ResponsiveDropdown_1.ResponsiveDropdown(dropdownContent, dropdownHeader, this.coveoRoot);
        return dropdown;
    };
    ResponsiveFacetColumn.prototype.buildDropdownContent = function () {
        var dropdownContentElement = Dom_1.$$(this.coveoRoot.find('.coveo-facet-column'));
        var filterByContainer = Dom_1.$$('div', { className: 'coveo-facet-header-filter-by-container', style: 'display: none' });
        var filterBy = Dom_1.$$('div', { className: 'coveo-facet-header-filter-by' });
        filterBy.text(Strings_1.l('Filter by:'));
        filterByContainer.append(filterBy.el);
        dropdownContentElement.prepend(filterByContainer.el);
        var dropdownContent = new ResponsiveDropdownContent_1.ResponsiveDropdownContent('facet', dropdownContentElement, this.coveoRoot, ResponsiveFacetColumn.DROPDOWN_MIN_WIDTH, ResponsiveFacetColumn.DROPDOWN_WIDTH_RATIO);
        return dropdownContent;
    };
    ResponsiveFacetColumn.prototype.buildDropdownHeader = function () {
        var dropdownHeaderElement = Dom_1.$$('a');
        var content = Dom_1.$$('p');
        content.text(this.dropdownHeaderLabel);
        dropdownHeaderElement.el.appendChild(content.el);
        var dropdownHeader = new ResponsiveDropdownHeader_1.ResponsiveDropdownHeader('facet', dropdownHeaderElement);
        return dropdownHeader;
    };
    ResponsiveFacetColumn.prototype.registerOnCloseHandler = function () {
        this.dropdown.registerOnCloseHandler(this.dismissFacetSearches, this);
    };
    ResponsiveFacetColumn.prototype.registerQueryEvents = function () {
        var _this = this;
        this.coveoRoot.on(QueryEvents_1.QueryEvents.noResults, function () { return _this.handleNoResults(); });
        this.coveoRoot.on(QueryEvents_1.QueryEvents.querySuccess, function (e, data) { return _this.handleQuerySuccess(data); });
        this.coveoRoot.on(QueryEvents_1.QueryEvents.queryError, function () { return _this.handleQueryError(); });
    };
    ResponsiveFacetColumn.prototype.bindDropdownContentEvents = function () {
        var _this = this;
        this.dropdown.dropdownContent.element.on('scroll', underscore_1.debounce(function () {
            underscore_1.each(_this.componentsInFacetColumn, function (component) {
                var facetSearch = component.facetSearch;
                if (facetSearch && facetSearch.currentlyDisplayedResults && !_this.isFacetSearchScrolledIntoView(facetSearch.search)) {
                    component.facetSearch.positionSearchResults(_this.dropdown.dropdownContent.element.el);
                }
                else if (facetSearch && component.facetSearch.currentlyDisplayedResults) {
                    component.facetSearch.positionSearchResults();
                }
            });
        }, ResponsiveFacetColumn.DEBOUNCE_SCROLL_WAIT));
    };
    ResponsiveFacetColumn.prototype.restoreFacetPreservePositionValue = function () {
        var _this = this;
        underscore_1.each(this.componentsInFacetColumn, function (component, index) {
            if (component.options) {
                component.options.preservePosition = _this.preservePositionOriginalValues[index];
            }
        });
    };
    ResponsiveFacetColumn.prototype.disableFacetPreservePosition = function () {
        underscore_1.each(this.componentsInFacetColumn, function (component) {
            if (component.options) {
                component.options.preservePosition = false;
            }
        });
    };
    ResponsiveFacetColumn.prototype.isFacetSearchScrolledIntoView = function (facetSearchElement) {
        var facetTop = facetSearchElement.getBoundingClientRect().top;
        var facetBottom = facetSearchElement.getBoundingClientRect().bottom;
        var dropdownTop = this.dropdown.dropdownContent.element.el.getBoundingClientRect().top;
        var dropdownBottom = this.dropdown.dropdownContent.element.el.getBoundingClientRect().bottom;
        dropdownTop = dropdownTop >= 0 ? dropdownTop : 0;
        return facetTop >= dropdownTop && facetBottom <= dropdownBottom;
    };
    ResponsiveFacetColumn.prototype.getDropdownHeaderLabel = function () {
        var dropdownHeaderLabel;
        ComponentsTypes_1.ComponentsTypes.getAllFacetsInstance(this.coveoRoot.find('.coveo-facet-column')).forEach(function (facet) {
            var options = facet.options;
            if (!dropdownHeaderLabel && options.dropdownHeaderLabel) {
                dropdownHeaderLabel = options.dropdownHeaderLabel;
            }
        });
        if (!dropdownHeaderLabel) {
            dropdownHeaderLabel = Strings_1.l(ResponsiveFacetColumn.DROPDOWN_HEADER_LABEL_DEFAULT_VALUE);
        }
        return dropdownHeaderLabel;
    };
    ResponsiveFacetColumn.prototype.handleNoResults = function () {
        this.dropdown.dropdownHeader.hide();
    };
    ResponsiveFacetColumn.prototype.handleQueryError = function () {
        this.dropdown.dropdownHeader.hide();
    };
    ResponsiveFacetColumn.prototype.handleQuerySuccess = function (data) {
        if (data.results.totalCount === 0) {
            this.dropdown.dropdownHeader.hide();
        }
        else {
            this.dropdown.dropdownHeader.show();
        }
    };
    ResponsiveFacetColumn.DEBOUNCE_SCROLL_WAIT = 250;
    ResponsiveFacetColumn.DROPDOWN_MIN_WIDTH = 280;
    ResponsiveFacetColumn.DROPDOWN_WIDTH_RATIO = 0.35; // Used to set the width relative to the coveo root.
    ResponsiveFacetColumn.DROPDOWN_HEADER_LABEL_DEFAULT_VALUE = 'Filters';
    return ResponsiveFacetColumn;
}());
exports.ResponsiveFacetColumn = ResponsiveFacetColumn;


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The allowed states of a facet value in a Search API facet
 * [request]{@link IFacetRequestValue.state} or
 * [response]{@link IFacetResponseValue.state}.
 */
var FacetValueState;
(function (FacetValueState) {
    /**
     * The facet value is not currently selected or excluded in the search
     * interface.
     */
    FacetValueState["idle"] = "idle";
    /**
     * The facet value is currently selected in the search interface.
     */
    FacetValueState["selected"] = "selected";
})(FacetValueState = exports.FacetValueState || (exports.FacetValueState = {}));


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(1);
var SVGDom_1 = __webpack_require__(15);
var DynamicFacetHeaderButton = /** @class */ (function () {
    function DynamicFacetHeaderButton(rootOptions) {
        this.rootOptions = rootOptions;
        this.create();
    }
    DynamicFacetHeaderButton.prototype.create = function () {
        var hasIcon = this.rootOptions.iconSVG && this.rootOptions.iconClassName;
        this.button = Dom_1.$$('button', { className: ("coveo-dynamic-facet-header-btn " + (this.rootOptions.className || '')).trim() }, hasIcon ? this.rootOptions.iconSVG : this.rootOptions.label);
        this.rootOptions.action && this.button.on('click', this.rootOptions.action);
        if (hasIcon) {
            this.button.setAttribute('aria-label', this.rootOptions.label);
            this.button.setAttribute('title', this.rootOptions.label);
            SVGDom_1.SVGDom.addClassToSVGInContainer(this.button.el, this.rootOptions.iconClassName);
        }
        if (this.rootOptions.shouldDisplay !== undefined) {
            this.toggle(this.rootOptions.shouldDisplay);
        }
        this.element = this.button.el;
    };
    DynamicFacetHeaderButton.prototype.toggle = function (shouldDisplay) {
        this.button.toggle(shouldDisplay);
    };
    return DynamicFacetHeaderButton;
}());
exports.DynamicFacetHeaderButton = DynamicFacetHeaderButton;


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path='Facet.ts' />
var StringUtils_1 = __webpack_require__(19);
var QueryUtils_1 = __webpack_require__(20);
var FileTypes_1 = __webpack_require__(120);
var DateUtils_1 = __webpack_require__(31);
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

/***/ 464:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 468:
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
var ResponsiveFacetColumn_1 = __webpack_require__(192);
var DynamicFacet_1 = __webpack_require__(121);
var ResponsiveDynamicFacets = /** @class */ (function (_super) {
    __extends(ResponsiveDynamicFacets, _super);
    function ResponsiveDynamicFacets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponsiveDynamicFacets.init = function (root, component, options) {
        ResponsiveFacetColumn_1.ResponsiveFacetColumn.init(ResponsiveDynamicFacets, root, component, options, DynamicFacet_1.DynamicFacet.ID);
    };
    return ResponsiveDynamicFacets;
}(ResponsiveFacetColumn_1.ResponsiveFacetColumn));
exports.ResponsiveDynamicFacets = ResponsiveDynamicFacets;


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(470);
var Dom_1 = __webpack_require__(1);
var Strings_1 = __webpack_require__(7);
var SVGIcons_1 = __webpack_require__(13);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var DynamicFacetBreadcrumbs = /** @class */ (function () {
    function DynamicFacetBreadcrumbs(facet) {
        this.facet = facet;
        this.create();
    }
    DynamicFacetBreadcrumbs.prototype.create = function () {
        this.element = Dom_1.$$('div', { className: 'coveo-dynamic-facet-breadcrumb coveo-breadcrumb-item' }).el;
        this.createAndAppendTitle();
        var activeFacetValues = this.facet.values.activeFacetValues;
        var breadcrumbFacetValues = activeFacetValues.slice(0, this.facet.options.numberOfValuesInBreadcrumb);
        var collapsedFacetValues = activeFacetValues.slice(this.facet.options.numberOfValuesInBreadcrumb);
        this.createAndAppendBreadcrumbValues(breadcrumbFacetValues);
        if (collapsedFacetValues.length) {
            this.createAndAppendCollapsedBreadcrumbs(collapsedFacetValues);
        }
    };
    DynamicFacetBreadcrumbs.prototype.createAndAppendTitle = function () {
        var titleElement = Dom_1.$$('h3', { className: 'coveo-dynamic-facet-breadcrumb-title' }, this.facet.options.title + ":").el;
        this.element.appendChild(titleElement);
    };
    DynamicFacetBreadcrumbs.prototype.createAndAppendBreadcrumbValues = function (facetValues) {
        var _this = this;
        facetValues.forEach(function (facetValue) { return _this.createAndAppendBreadcrumbValue(facetValue); });
    };
    DynamicFacetBreadcrumbs.prototype.createAndAppendBreadcrumbValue = function (facetValue) {
        var _this = this;
        var valueElement = Dom_1.$$('button', {
            className: 'coveo-dynamic-facet-breadcrumb-value',
            ariaLabel: Strings_1.l('RemoveFilterOn', facetValue.valueCaption)
        }, facetValue.valueCaption).el;
        var clearElement = Dom_1.$$('span', { className: 'coveo-dynamic-facet-breadcrumb-value-clear' }, SVGIcons_1.SVGIcons.icons.mainClear).el;
        valueElement.appendChild(clearElement);
        Dom_1.$$(valueElement).on('click', function () { return _this.valueSelectAction(facetValue); });
        this.element.appendChild(valueElement);
    };
    DynamicFacetBreadcrumbs.prototype.valueSelectAction = function (facetValue) {
        var _this = this;
        this.facet.deselectValue(facetValue.value);
        this.facet.triggerNewQuery(function () { return _this.logActionToAnalytics(facetValue); });
    };
    DynamicFacetBreadcrumbs.prototype.logActionToAnalytics = function (facetValue) {
        this.facet.logAnalyticsEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.breadcrumbDynamicFacet, facetValue.analyticsMeta);
    };
    DynamicFacetBreadcrumbs.prototype.createAndAppendCollapsedBreadcrumbs = function (facetValues) {
        var _this = this;
        var label = Strings_1.l('NMore', "" + facetValues.length);
        var title = facetValues.map(function (_a) {
            var value = _a.value;
            return value;
        }).join('\n');
        var collapsedElement = Dom_1.$$('button', {
            className: 'coveo-dynamic-facet-breadcrumb-collapse',
            title: title
        }, label).el;
        Dom_1.$$(collapsedElement).on('click', function () {
            Dom_1.$$(collapsedElement).remove();
            _this.createAndAppendBreadcrumbValues(facetValues);
        });
        this.element.appendChild(collapsedElement);
    };
    return DynamicFacetBreadcrumbs;
}());
exports.DynamicFacetBreadcrumbs = DynamicFacetBreadcrumbs;


/***/ }),

/***/ 470:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(472);
var Dom_1 = __webpack_require__(1);
var Strings_1 = __webpack_require__(7);
var SVGIcons_1 = __webpack_require__(13);
var SVGDom_1 = __webpack_require__(15);
var DynamicFacetHeaderButton_1 = __webpack_require__(420);
var DynamicFacetHeaderCollapseToggle_1 = __webpack_require__(473);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var DynamicFacetHeader = /** @class */ (function () {
    function DynamicFacetHeader(facet) {
        this.facet = facet;
        this.element = Dom_1.$$('div', { className: 'coveo-dynamic-facet-header' }).el;
        this.title = this.createTitle();
        Dom_1.$$(this.element).append(this.title.el);
        Dom_1.$$(this.element).append(this.createWaitAnimation());
        Dom_1.$$(this.element).append(this.createClearButton());
        this.facet.options.enableCollapse && this.enableCollapse();
    }
    DynamicFacetHeader.prototype.createClearButton = function () {
        var _this = this;
        this.clearButton = new DynamicFacetHeaderButton_1.DynamicFacetHeaderButton({
            label: Strings_1.l('Clear'),
            className: 'coveo-dynamic-facet-header-clear',
            shouldDisplay: false,
            action: function () { return _this.clear(); }
        });
        return this.clearButton.element;
    };
    DynamicFacetHeader.prototype.clear = function () {
        var _this = this;
        this.facet.reset();
        this.facet.enableFreezeFacetOrderFlag();
        this.facet.triggerNewQuery(function () { return _this.logClearAllToAnalytics(); });
    };
    DynamicFacetHeader.prototype.logClearAllToAnalytics = function () {
        this.facet.logAnalyticsEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.dynamicFacetClearAll, this.facet.basicAnalyticsFacetState);
    };
    DynamicFacetHeader.prototype.createCollapseToggle = function () {
        this.collapseToggle = new DynamicFacetHeaderCollapseToggle_1.DynamicFacetHeaderCollapseToggle(this.facet);
        return this.collapseToggle.element;
    };
    DynamicFacetHeader.prototype.enableCollapse = function () {
        var _this = this;
        Dom_1.$$(this.element).append(this.createCollapseToggle());
        Dom_1.$$(this.title).addClass('coveo-clickable');
        Dom_1.$$(this.title).on('click', function () { return _this.facet.toggleCollapse(); });
    };
    DynamicFacetHeader.prototype.toggleCollapse = function (isCollapsed) {
        this.facet.options.enableCollapse && this.collapseToggle.toggleButtons(isCollapsed);
    };
    DynamicFacetHeader.prototype.createTitle = function () {
        return Dom_1.$$('h2', {
            className: 'coveo-dynamic-facet-header-title',
            ariaLabel: "" + Strings_1.l('FacetTitle', this.facet.options.title)
        }, Dom_1.$$('span', { ariaHidden: true, title: this.facet.options.title }, this.facet.options.title));
    };
    DynamicFacetHeader.prototype.createWaitAnimation = function () {
        this.waitAnimation = Dom_1.$$('div', { className: 'coveo-dynamic-facet-header-wait-animation' }, SVGIcons_1.SVGIcons.icons.loading);
        SVGDom_1.SVGDom.addClassToSVGInContainer(this.waitAnimation.el, 'coveo-dynamic-facet-header-wait-animation-svg');
        this.waitAnimation.toggle(false);
        return this.waitAnimation.el;
    };
    DynamicFacetHeader.prototype.toggleClear = function (visible) {
        this.clearButton.toggle(visible);
    };
    DynamicFacetHeader.prototype.showLoading = function () {
        var _this = this;
        clearTimeout(this.showLoadingTimeout);
        this.showLoadingTimeout = window.setTimeout(function () { return _this.waitAnimation.toggle(true); }, DynamicFacetHeader.showLoadingDelay);
    };
    DynamicFacetHeader.prototype.hideLoading = function () {
        clearTimeout(this.showLoadingTimeout);
        this.waitAnimation.toggle(false);
    };
    DynamicFacetHeader.showLoadingDelay = 2000;
    return DynamicFacetHeader;
}());
exports.DynamicFacetHeader = DynamicFacetHeader;


/***/ }),

/***/ 472:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Strings_1 = __webpack_require__(7);
var SVGIcons_1 = __webpack_require__(13);
var Dom_1 = __webpack_require__(1);
var DynamicFacetHeaderButton_1 = __webpack_require__(420);
var DynamicFacetHeaderCollapseToggle = /** @class */ (function () {
    function DynamicFacetHeaderCollapseToggle(facet) {
        this.facet = facet;
        this.create();
    }
    DynamicFacetHeaderCollapseToggle.prototype.create = function () {
        var _this = this;
        var parent = Dom_1.$$('div');
        this.collapseButton = new DynamicFacetHeaderButton_1.DynamicFacetHeaderButton({
            label: Strings_1.l('Collapse'),
            iconSVG: SVGIcons_1.SVGIcons.icons.arrowUp,
            iconClassName: 'coveo-dynamic-facet-collapse-toggle-svg',
            className: 'coveo-dynamic-facet-header-collapse',
            shouldDisplay: true,
            action: function () { return _this.facet.collapse(); }
        });
        this.expandButton = new DynamicFacetHeaderButton_1.DynamicFacetHeaderButton({
            label: Strings_1.l('Expand'),
            iconSVG: SVGIcons_1.SVGIcons.icons.arrowDown,
            iconClassName: 'coveo-dynamic-facet-collapse-toggle-svg',
            className: 'coveo-dynamic-facet-header-expand',
            shouldDisplay: false,
            action: function () { return _this.facet.expand(); }
        });
        parent.append(this.collapseButton.element);
        parent.append(this.expandButton.element);
        this.element = parent.el;
    };
    DynamicFacetHeaderCollapseToggle.prototype.toggleButtons = function (isCollapsed) {
        this.collapseButton.toggle(!isCollapsed);
        this.expandButton.toggle(isCollapsed);
    };
    return DynamicFacetHeaderCollapseToggle;
}());
exports.DynamicFacetHeaderCollapseToggle = DynamicFacetHeaderCollapseToggle;


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(475);
var Dom_1 = __webpack_require__(1);
var underscore_1 = __webpack_require__(0);
var DynamicFacetValue_1 = __webpack_require__(476);
var FacetValueState_1 = __webpack_require__(193);
var Strings_1 = __webpack_require__(7);
var DynamicFacetValues = /** @class */ (function () {
    function DynamicFacetValues(facet) {
        this.facet = facet;
        this.list = Dom_1.$$('ul', { className: 'coveo-dynamic-facet-values' }).el;
        this.resetValues();
    }
    DynamicFacetValues.prototype.createFromResponse = function (response) {
        var _this = this;
        this.moreValuesAvailable = response.moreValuesAvailable;
        this.facetValues = response.values.map(function (facetValue, index) {
            return new DynamicFacetValue_1.DynamicFacetValue({
                value: facetValue.value,
                numberOfResults: facetValue.numberOfResults,
                state: facetValue.state,
                position: index + 1
            }, _this.facet);
        });
    };
    DynamicFacetValues.prototype.resetValues = function () {
        this.moreValuesAvailable = false;
        this.facetValues = [];
    };
    Object.defineProperty(DynamicFacetValues.prototype, "allFacetValues", {
        get: function () {
            return this.facetValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacetValues.prototype, "allValues", {
        get: function () {
            return this.facetValues.map(function (facetValue) { return facetValue.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacetValues.prototype, "selectedValues", {
        get: function () {
            return this.facetValues.filter(function (value) { return value.isSelected; }).map(function (_a) {
                var value = _a.value;
                return value;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacetValues.prototype, "activeFacetValues", {
        get: function () {
            return this.facetValues.filter(function (value) { return !value.isIdle; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacetValues.prototype, "hasSelectedValues", {
        get: function () {
            return !!underscore_1.findWhere(this.facetValues, { state: FacetValueState_1.FacetValueState.selected });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacetValues.prototype, "hasActiveValues", {
        get: function () {
            return !!this.activeFacetValues.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacetValues.prototype, "hasIdleValues", {
        get: function () {
            return !!underscore_1.findWhere(this.facetValues, { state: FacetValueState_1.FacetValueState.idle });
        },
        enumerable: true,
        configurable: true
    });
    DynamicFacetValues.prototype.clearAll = function () {
        this.facetValues.forEach(function (value) { return value.deselect(); });
    };
    Object.defineProperty(DynamicFacetValues.prototype, "isEmpty", {
        get: function () {
            return !this.facetValues.length;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFacetValues.prototype.hasSelectedValue = function (arg) {
        var value = typeof arg === 'string' ? arg : arg.value;
        var foundValue = underscore_1.find(this.facetValues, function (facetValue) { return facetValue.equals(value); });
        return foundValue && foundValue.isSelected;
    };
    DynamicFacetValues.prototype.get = function (arg) {
        var value = typeof arg === 'string' ? arg : arg.value;
        var facetValue = underscore_1.find(this.facetValues, function (facetValue) { return facetValue.equals(value); });
        if (facetValue) {
            return facetValue;
        }
        var position = this.facetValues.length + 1;
        var state = FacetValueState_1.FacetValueState.idle;
        var newFacetValue = new DynamicFacetValue_1.DynamicFacetValue({ value: value, state: state, numberOfResults: 0, position: position }, this.facet);
        this.facetValues.push(newFacetValue);
        return newFacetValue;
    };
    DynamicFacetValues.prototype.buildShowLess = function () {
        var _this = this;
        var showLessBtn = Dom_1.$$('button', { className: 'coveo-dynamic-facet-show-less' }, Strings_1.l('ShowLess'));
        var showLess = Dom_1.$$('li', null, showLessBtn);
        showLessBtn.on('click', function () {
            _this.facet.enableFreezeFacetOrderFlag();
            _this.facet.showLessValues();
        });
        return showLess.el;
    };
    DynamicFacetValues.prototype.buildShowMore = function () {
        var _this = this;
        var showMoreBtn = Dom_1.$$('button', { className: 'coveo-dynamic-facet-show-more' }, Strings_1.l('ShowMore'));
        var showMore = Dom_1.$$('li', null, showMoreBtn);
        showMoreBtn.on('click', function () {
            _this.facet.enableFreezeFacetOrderFlag();
            _this.facet.showMoreValues();
        });
        return showMore.el;
    };
    Object.defineProperty(DynamicFacetValues.prototype, "shouldEnableShowLess", {
        get: function () {
            var hasMoreValuesThenDefault = this.facetValues.length > this.facet.options.numberOfValues;
            return hasMoreValuesThenDefault && this.hasIdleValues;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFacetValues.prototype.render = function () {
        var fragment = document.createDocumentFragment();
        Dom_1.$$(this.list).empty();
        this.facetValues.forEach(function (facetValue) {
            fragment.appendChild(facetValue.render());
        });
        if (this.shouldEnableShowLess) {
            fragment.appendChild(this.buildShowLess());
        }
        if (this.moreValuesAvailable) {
            fragment.appendChild(this.buildShowMore());
        }
        this.list.appendChild(fragment);
        return this.list;
    };
    return DynamicFacetValues;
}());
exports.DynamicFacetValues = DynamicFacetValues;


/***/ }),

/***/ 475:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 476:
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
var Globalize = __webpack_require__(21);
var DynamicFacetValueRenderer_1 = __webpack_require__(477);
var FacetUtils_1 = __webpack_require__(46);
var FacetValueState_1 = __webpack_require__(193);
var DynamicFacetValue = /** @class */ (function () {
    function DynamicFacetValue(_a, facet) {
        var value = _a.value, state = _a.state, numberOfResults = _a.numberOfResults, position = _a.position;
        this.facet = facet;
        this.value = value;
        this.state = state;
        this.numberOfResults = numberOfResults;
        this.position = position;
        this.renderer = new DynamicFacetValueRenderer_1.DynamicFacetValueRenderer(this, facet);
    }
    Object.defineProperty(DynamicFacetValue.prototype, "isSelected", {
        get: function () {
            return this.state === FacetValueState_1.FacetValueState.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacetValue.prototype, "isIdle", {
        get: function () {
            return this.state === FacetValueState_1.FacetValueState.idle;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFacetValue.prototype.toggleSelect = function () {
        this.state = this.state === FacetValueState_1.FacetValueState.selected ? FacetValueState_1.FacetValueState.idle : FacetValueState_1.FacetValueState.selected;
    };
    DynamicFacetValue.prototype.select = function () {
        this.state = FacetValueState_1.FacetValueState.selected;
    };
    DynamicFacetValue.prototype.deselect = function () {
        this.state = FacetValueState_1.FacetValueState.idle;
    };
    DynamicFacetValue.prototype.equals = function (arg) {
        var value = typeof arg === 'string' ? arg : arg.value;
        return value.toLowerCase() === this.value.toLowerCase();
    };
    Object.defineProperty(DynamicFacetValue.prototype, "formattedCount", {
        get: function () {
            return Globalize.format(this.numberOfResults, 'n0');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacetValue.prototype, "valueCaption", {
        get: function () {
            var returnValue = FacetUtils_1.FacetUtils.tryToGetTranslatedCaption(this.facet.options.field, this.value);
            if (this.facet.options.valueCaption && typeof this.facet.options.valueCaption === 'object') {
                returnValue = this.facet.options.valueCaption[this.value] || returnValue;
            }
            return returnValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacetValue.prototype, "analyticsMeta", {
        get: function () {
            return __assign({}, this.facet.basicAnalyticsFacetState, { value: this.value, valuePosition: this.position, displayValue: this.valueCaption, state: this.state });
        },
        enumerable: true,
        configurable: true
    });
    DynamicFacetValue.prototype.render = function () {
        return this.renderer.render();
    };
    return DynamicFacetValue;
}());
exports.DynamicFacetValue = DynamicFacetValue;


/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(1);
var Checkbox_1 = __webpack_require__(57);
var Strings_1 = __webpack_require__(7);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var FacetValueState_1 = __webpack_require__(193);
var DynamicFacetValueRenderer = /** @class */ (function () {
    function DynamicFacetValueRenderer(facetValue, facet) {
        var _this = this;
        this.facetValue = facetValue;
        this.facet = facet;
        this.selectAction = function () {
            _this.facet.pinFacetPosition();
            _this.facet.toggleSelectValue(_this.facetValue.value);
            _this.toggleSelectedClass();
            _this.facet.enableFreezeCurrentValuesFlag();
            _this.facet.enableFreezeFacetOrderFlag();
            _this.facet.triggerNewQuery(function () { return _this.logActionToAnalytics(); });
        };
    }
    DynamicFacetValueRenderer.prototype.render = function () {
        this.dom = Dom_1.$$('li', {
            className: 'coveo-dynamic-facet-value coveo-dynamic-facet-selectable',
            dataValue: this.facetValue.value
        });
        this.createCheckbox();
        this.dom.append(this.checkbox.getElement());
        this.addFocusAndBlurEventListeners();
        this.toggleSelectedClass();
        return this.dom.el;
    };
    DynamicFacetValueRenderer.prototype.toggleSelectedClass = function () {
        this.dom.toggleClass('coveo-selected', this.facetValue.isSelected);
    };
    DynamicFacetValueRenderer.prototype.createCheckbox = function () {
        var _this = this;
        this.checkbox = new Checkbox_1.Checkbox(function () { return _this.selectAction(); }, this.facetValue.valueCaption, this.ariaLabel, "(" + this.facetValue.formattedCount + ")");
        var label = Dom_1.$$(this.checkbox.getElement()).find('.coveo-checkbox-span-label');
        var labelSuffix = Dom_1.$$(this.checkbox.getElement()).find('.coveo-checkbox-span-label-suffix');
        if (label && labelSuffix) {
            label.setAttribute('title', this.facetValue.valueCaption);
            label.setAttribute('aria-hidden', 'true');
            labelSuffix.setAttribute('aria-hidden', 'true');
        }
        this.facetValue.isSelected && this.checkbox.select(false);
    };
    DynamicFacetValueRenderer.prototype.addFocusAndBlurEventListeners = function () {
        var _this = this;
        var checkboxButton = Dom_1.$$(this.checkbox.getElement()).find('button');
        Dom_1.$$(checkboxButton).on('focusin', function () { return _this.dom.addClass('coveo-focused'); });
        Dom_1.$$(checkboxButton).on('focusout', function () { return _this.dom.removeClass('coveo-focused'); });
    };
    DynamicFacetValueRenderer.prototype.logActionToAnalytics = function () {
        var action = this.facetValue.state === FacetValueState_1.FacetValueState.selected
            ? AnalyticsActionListMeta_1.analyticsActionCauseList.dynamicFacetSelect
            : AnalyticsActionListMeta_1.analyticsActionCauseList.dynamicFacetDeselect;
        this.facet.logAnalyticsEvent(action, this.facetValue.analyticsMeta);
    };
    Object.defineProperty(DynamicFacetValueRenderer.prototype, "ariaLabel", {
        get: function () {
            var selectOrUnselect = !this.facetValue.isSelected ? 'SelectValueWithResultCount' : 'UnselectValueWithResultCount';
            var resultCount = Strings_1.l('ResultCount', this.facetValue.formattedCount);
            return "" + Strings_1.l(selectOrUnselect, this.facetValue.valueCaption, resultCount);
        },
        enumerable: true,
        configurable: true
    });
    return DynamicFacetValueRenderer;
}());
exports.DynamicFacetValueRenderer = DynamicFacetValueRenderer;


/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var QueryEvents_1 = __webpack_require__(10);
var DynamicFacetQueryController = /** @class */ (function () {
    function DynamicFacetQueryController(facet) {
        this.facet = facet;
        this.freezeCurrentValues = false;
        this.freezeFacetOrder = false;
        this.resetNumberOfValuesToRequest();
        this.resetFreezeCurrentValuesDuringQuery();
    }
    DynamicFacetQueryController.prototype.resetFreezeCurrentValuesDuringQuery = function () {
        var _this = this;
        this.facet.bind.onRootElement(QueryEvents_1.QueryEvents.duringQuery, function () {
            _this.freezeCurrentValues = false;
            _this.freezeFacetOrder = false;
        });
    };
    DynamicFacetQueryController.prototype.increaseNumberOfValuesToRequest = function (additionalNumberOfValues) {
        this.numberOfValuesToRequest += additionalNumberOfValues;
    };
    DynamicFacetQueryController.prototype.resetNumberOfValuesToRequest = function () {
        this.numberOfValuesToRequest = this.facet.options.numberOfValues;
    };
    DynamicFacetQueryController.prototype.enableFreezeCurrentValuesFlag = function () {
        this.freezeCurrentValues = true;
    };
    DynamicFacetQueryController.prototype.enableFreezeFacetOrderFlag = function () {
        this.freezeFacetOrder = true;
    };
    /**
     * Build the facets request for the DynamicFacet, and insert it in the query builder
     * @param queryBuilder
     */
    DynamicFacetQueryController.prototype.putFacetIntoQueryBuilder = function (queryBuilder) {
        Assert_1.Assert.exists(queryBuilder);
        var facetRequest = {
            facetId: this.facet.options.id,
            field: this.facet.fieldName,
            sortCriteria: this.facet.options.sortCriteria,
            currentValues: this.currentValues,
            numberOfValues: this.numberOfValues,
            freezeCurrentValues: this.freezeCurrentValues,
            isFieldExpanded: this.numberOfValuesToRequest > this.facet.options.numberOfValues
        };
        queryBuilder.facetRequests.push(facetRequest);
        if (this.freezeFacetOrder) {
            queryBuilder.facetOptions.freezeFacetOrder = true;
        }
    };
    Object.defineProperty(DynamicFacetQueryController.prototype, "currentValues", {
        get: function () {
            return this.facet.values.allFacetValues.map(function (_a) {
                var value = _a.value, state = _a.state;
                return ({
                    value: value,
                    state: state
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFacetQueryController.prototype, "numberOfValues", {
        get: function () {
            if (this.freezeCurrentValues) {
                return this.currentValues.length;
            }
            return Math.max(this.numberOfValuesToRequest, this.facet.values.activeFacetValues.length);
        },
        enumerable: true,
        configurable: true
    });
    return DynamicFacetQueryController;
}());
exports.DynamicFacetQueryController = DynamicFacetQueryController;


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The allowed sort criteria for a Search API
 * [facet request]{@link IFacetRequest}.
 */
var FacetSortCriteria;
(function (FacetSortCriteria) {
    /**
     * Sort facet values in descending score order.
     *
     * Facet value scores are based on number of occurrences and position in the
     * ranked query result set.
     *
     * The Coveo Machine Learning dynamic navigation experience feature only
     * works with this sort criterion.
     */
    FacetSortCriteria["score"] = "score";
    /**
     * Sort facet values in ascending alphanumeric order.
     */
    FacetSortCriteria["alphanumeric"] = "alphanumeric";
    FacetSortCriteria["occurrences"] = "occurrences";
})(FacetSortCriteria = exports.FacetSortCriteria || (exports.FacetSortCriteria = {}));
function isFacetSortCriteria(sortCriteria) {
    return !!FacetSortCriteria[sortCriteria];
}
exports.isFacetSortCriteria = isFacetSortCriteria;


/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(4);
var Dom_1 = __webpack_require__(1);
var FacetPadding = /** @class */ (function () {
    function FacetPadding(element, paddingContainer) {
        this.element = element;
        this.paddingContainer = paddingContainer;
        this.topSpaceClass = 'coveo-topSpace';
        this.animationClass = 'coveo-with-animation';
        this.initTopSpacer();
    }
    Object.defineProperty(FacetPadding.prototype, "isPinned", {
        get: function () {
            return Utils_1.Utils.exists(this.pinnedTopPosition);
        },
        enumerable: true,
        configurable: true
    });
    FacetPadding.prototype.initTopSpacer = function () {
        var _this = this;
        Dom_1.$$(this.paddingContainer).on('mouseleave', function () { return _this.unpin(); });
        this.topSpaceElement = Dom_1.$$(this.paddingContainer).find("." + this.topSpaceClass);
        if (!this.topSpaceElement) {
            this.createTopSpace();
        }
    };
    FacetPadding.prototype.createTopSpace = function () {
        this.topSpaceElement = Dom_1.$$('div', { className: this.topSpaceClass }).el;
        Dom_1.$$(this.topSpaceElement).insertBefore(this.paddingContainer.firstChild);
    };
    Object.defineProperty(FacetPadding.prototype, "facetTopPosition", {
        get: function () {
            return this.element.getBoundingClientRect().top;
        },
        enumerable: true,
        configurable: true
    });
    FacetPadding.prototype.pin = function () {
        this.pinnedTopPosition = this.facetTopPosition;
    };
    FacetPadding.prototype.setTopSpaceHeight = function (height) {
        this.topSpaceElement.style.height = height + "px";
    };
    FacetPadding.prototype.unpin = function () {
        if (!this.isPinned) {
            Dom_1.$$(this.topSpaceElement).addClass(this.animationClass);
            this.setTopSpaceHeight(0);
        }
        this.pinnedTopPosition = null;
    };
    Object.defineProperty(FacetPadding.prototype, "scrollYPosition", {
        get: function () {
            return new Dom_1.Win(window).scrollY();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacetPadding.prototype, "offset", {
        get: function () {
            return this.facetTopPosition - this.pinnedTopPosition;
        },
        enumerable: true,
        configurable: true
    });
    FacetPadding.prototype.ensurePinnedFacetHasNotMoved = function () {
        if (!this.isPinned) {
            return;
        }
        Dom_1.$$(this.topSpaceElement).removeClass(this.animationClass);
        this.setTopSpaceHeight(0);
        window.scrollTo(0, this.scrollYPosition + this.offset);
        if (this.offset < 0) {
            this.setTopSpaceHeight(this.offset * -1);
        }
        this.pinnedTopPosition = null;
    };
    return FacetPadding;
}());
exports.FacetPadding = FacetPadding;


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentOptions_1 = __webpack_require__(8);
/**
 * ResponsiveFacets options
 */
exports.ResponsiveFacetOptions = {
    /**
     * Specifies whether to enable *responsive mode* for facets. Setting this options to `false` on any `Facet`, or
     * [`FacetSlider`]{@link FacetSlider} component in a search interface disables responsive mode for all other facets
     * in the search interface.
     *
     * Responsive mode displays all facets under a single dropdown button whenever the width of the HTML element which
     * the search interface is bound to reaches or falls behind a certain threshold (see
     * {@link SearchInterface.responsiveComponents}).
     *
     * See also the [`dropdownHeaderLabel`]{@link Facet.options.dropdownHeaderLabel} option.
     *
     * Default value is `true`.
     */
    enableResponsiveMode: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true, section: 'ResponsiveOptions' }),
    responsiveBreakpoint: ComponentOptions_1.ComponentOptions.buildNumberOption({
        deprecated: 'This option is exposed for legacy reasons. It is not recommended to use this option. Instead, use `SearchInterface.options.responsiveMediumBreakpoint` options exposed on the `SearchInterface`.'
    }),
    /**
     * If the [`enableResponsiveMode`]{@link Facet.options.enableResponsiveMode} option is `true` for all facets and
     * {@link FacetSlider.options.enableResponsiveMode} is also `true` for all sliders, specifies the label of the
     * dropdown button that allows to display the facets when in responsive mode.
     *
     * If more than one `Facet` or {@link FacetSlider} component in the search interface specifies a value for this
     * option, the framework uses the first occurrence of the option.
     *
     * Default value is `Filters`.
     */
    dropdownHeaderLabel: ComponentOptions_1.ComponentOptions.buildLocalizedStringOption({ section: 'ResponsiveOptions' })
};


/***/ })

});
//# sourceMappingURL=FieldValue__681e99ab0b1a1812e1f7.js.map