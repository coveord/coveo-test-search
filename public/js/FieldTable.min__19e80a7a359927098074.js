webpackJsonpCoveo__temporary([26,36],{117:function(module,exports,__webpack_require__){"use strict";function showOnlyWithHelper(e,t){return null==t&&(t={}),t.helpers=e,t}var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var underscore_1=__webpack_require__(0),GlobalExports_1=__webpack_require__(3),Assert_1=__webpack_require__(5),Strings_1=__webpack_require__(6),AccessibleButton_1=__webpack_require__(16),DateUtils_1=__webpack_require__(31),Dom_1=__webpack_require__(1),StringUtils_1=__webpack_require__(19),Utils_1=__webpack_require__(4),AnalyticsActionListMeta_1=__webpack_require__(10),Component_1=__webpack_require__(7),ComponentOptions_1=__webpack_require__(8),Initialization_1=__webpack_require__(2),FacetUtils_1=__webpack_require__(43),TemplateFieldsEvaluator_1=__webpack_require__(130),TemplateHelpers_1=__webpack_require__(114),IFieldValueCompatibleFacet_1=__webpack_require__(522),ComponentsTypes_1=__webpack_require__(44),FieldValue=function(_super){function FieldValue(e,t,n,i,o){void 0===o&&(o=FieldValue.ID);var l=_super.call(this,e,o,n)||this;return l.element=e,l.options=t,l.result=i,l.options=ComponentOptions_1.ComponentOptions.initOptions(e,FieldValue.simpleOptions,t,FieldValue.ID),null!=l.options.helper&&l.normalizeHelperAndOptions(),l.result=l.result||l.resolveResult(),Assert_1.Assert.exists(l.result),TemplateFieldsEvaluator_1.TemplateFieldsEvaluator.evaluateFieldsToMatch(l.options.conditions,l.result)&&l.getValue()?l.initialize():null!=l.element.parentElement&&l.element.parentElement.removeChild(l.element),l}return __extends(FieldValue,_super),FieldValue.prototype.initialize=function(){var e,t=this.getValue();underscore_1.isArray(t)?e=t:this.options.splitValues?underscore_1.isString(t)&&(e=underscore_1.map(t.split(this.options.separator),function(e){return e.trim()})):(t=t.toString(),e=[t]),this.appendValuesToDom(e),null!=this.options.textCaption&&this.prependTextCaptionToDom()},FieldValue.prototype.getValue=function(){var e=Utils_1.Utils.getFieldValue(this.result,this.options.field);return!underscore_1.isArray(e)&&underscore_1.isObject(e)&&(e=null),e},FieldValue.prototype.renderOneValue=function(e){var t=Dom_1.$$("span").el,n=FacetUtils_1.FacetUtils.tryToGetTranslatedCaption(this.options.field,e);if(this.options.helper){var i=TemplateHelpers_1.TemplateHelpers.getHelper(this.options.helper+"v2")||TemplateHelpers_1.TemplateHelpers.getHelper(""+this.options.helper);Utils_1.Utils.exists(i)?n=i.call(this,e,this.getHelperOptions()):this.logger.warn("Helper "+this.options.helper+" is not found in available helpers. The list of supported helpers is :",underscore_1.keys(TemplateHelpers_1.TemplateHelpers.getHelpers()));var o=this.getFullDate(e,this.options.helper);o&&t.setAttribute("title",o),"date"!=this.options.helper&&"dateTime"!=this.options.helper&&"emailDateTime"!=this.options.helper||(n=StringUtils_1.StringUtils.capitalizeFirstLetter(n))}return this.options.htmlValue?t.innerHTML=n:t.appendChild(document.createTextNode(n)),this.bindEventOnValue(t,e,n),t},FieldValue.prototype.getValueContainer=function(){return this.element},FieldValue.prototype.normalizeHelperAndOptions=function(){var e=this;this.options=ComponentOptions_1.ComponentOptions.initOptions(this.element,FieldValue.helperOptions,this.options,FieldValue.ID);var t=underscore_1.keys(FieldValue.options.helperOptions.subOptions),n=underscore_1.filter(t,function(t){var n=FieldValue.options.helperOptions.subOptions[t];if(n){var i=n.helpers;return null!=i&&underscore_1.contains(i,e.options.helper)}return!1});this.options.helperOptions=underscore_1.omit(this.options.helperOptions,function(e,t){return!underscore_1.contains(n,t)})},FieldValue.prototype.getHelperOptions=function(){var inlineOptions=ComponentOptions_1.ComponentOptions.loadStringOption(this.element,"helperOptions",{});return Utils_1.Utils.isNonEmptyString(inlineOptions)?underscore_1.extend({},this.options.helperOptions,eval("("+inlineOptions+")")):this.options.helperOptions},FieldValue.prototype.getFullDate=function(e,t){var n={useLongDateFormat:!0,useTodayYesterdayAndTomorrow:!1,useWeekdayIfThisWeek:!1,omitYearIfCurrentOne:!1};return"date"==t?DateUtils_1.DateUtils.dateToString(new Date(parseInt(e)),n):"dateTime"==t||"emailDateTime"==t?DateUtils_1.DateUtils.dateTimeToString(new Date(parseInt(e)),n):""},FieldValue.prototype.appendValuesToDom=function(e){var t=this;underscore_1.each(e,function(n,i){void 0!=n&&(t.getValueContainer().appendChild(t.renderOneValue(n)),i!==e.length-1&&t.getValueContainer().appendChild(document.createTextNode(t.options.displaySeparator)))})},FieldValue.prototype.renderTextCaption=function(){return Dom_1.$$("span",{className:"coveo-field-caption"},underscore_1.escape(this.options.textCaption)).el},FieldValue.prototype.prependTextCaptionToDom=function(){var e=this.getValueContainer();Dom_1.$$(e).prepend(this.renderTextCaption()),Dom_1.$$(e).addClass("coveo-with-label")},FieldValue.prototype.bindEventOnValue=function(e,t,n){this.bindFacets(e,t,n)},FieldValue.prototype.getFacets=function(){var e=this,t=ComponentsTypes_1.ComponentsTypes.getAllFacetsFromSearchInterface(this.searchInterface).filter(IFieldValueCompatibleFacet_1.isFacetFieldValueCompatible).filter(function(e){return!e.disabled}),n=t.filter(function(t){return t.options.id===e.options.facet});return n.length?n:t.filter(function(t){return t.options.field===e.options.field})},FieldValue.prototype.bindFacets=function(e,t,n){var i=this,o=this.getFacets();if(o.length){var l=!!underscore_1.find(o,function(e){return e.hasSelectedValue(t)}),s=function(){return i.handleFacetSelection(l,o,t)};this.buildClickableElement(e,l,n,s)}},FieldValue.prototype.buildClickableElement=function(e,t,n,i){var o=t?Strings_1.l("RemoveFilterOn",n):Strings_1.l("FilterOn",n);(new AccessibleButton_1.AccessibleButton).withTitle(o).withLabel(o).withElement(e).withSelectAction(i).build(),t&&Dom_1.$$(e).addClass("coveo-selected"),Dom_1.$$(e).addClass("coveo-clickable")},FieldValue.prototype.handleFacetSelection=function(e,t,n){t.forEach(function(t){e?t.deselectValue(n):t.selectValue(n)}),this.executeQuery(n)},FieldValue.prototype.executeQuery=function(e){var t=this;this.queryController.deferExecuteQuery({beforeExecuteQuery:function(){return t.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.documentField,{facetId:t.options.facet,facetField:t.options.field.toString(),facetValue:e.toLowerCase()})}})},FieldValue.ID="FieldValue",FieldValue.doExport=function(){GlobalExports_1.exportGlobally({FieldValue:FieldValue})},FieldValue.options={field:ComponentOptions_1.ComponentOptions.buildFieldOption({defaultValue:"@field",required:!0}),facet:ComponentOptions_1.ComponentOptions.buildStringOption({postProcessing:function(e,t){return e||t.field}}),htmlValue:ComponentOptions_1.ComponentOptions.buildBooleanOption({defaultValue:!1}),splitValues:ComponentOptions_1.ComponentOptions.buildBooleanOption({defaultValue:!1}),separator:ComponentOptions_1.ComponentOptions.buildStringOption({depend:"splitValues",defaultValue:";"}),displaySeparator:ComponentOptions_1.ComponentOptions.buildStringOption({depend:"splitValues",defaultValue:", "}),helper:ComponentOptions_1.ComponentOptions.buildHelperOption(),helperOptions:ComponentOptions_1.ComponentOptions.buildObjectOption({subOptions:{text:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["anchor"])),target:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["anchor"])),class:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["anchor"])),format:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["number"])),decimals:ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(["currency"],{min:0})),symbol:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["currency"])),useTodayYesterdayAndTomorrow:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!0})),useWeekdayIfThisWeek:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!0})),omitYearIfCurrentOne:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!0})),useLongDateFormat:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!1})),includeTimeIfToday:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!0})),includeTimeIfThisWeek:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!0})),alwaysIncludeTime:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!1})),predefinedFormat:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"])),companyDomain:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["email"])),me:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["email"])),lengthLimit:ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(["email"],{min:1})),truncateName:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["email"])),alt:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["image"])),height:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["image"])),width:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["image"])),srcTemplate:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["image"])),precision:ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(["size"],{min:0,defaultValue:2})),base:ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(["size"],{min:0,defaultValue:0})),isMilliseconds:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["timeSpan"])),length:ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(["shorten","shortenPath","shortenUri"],{defaultValue:200}))}}),textCaption:ComponentOptions_1.ComponentOptions.buildLocalizedStringOption(),conditions:ComponentOptions_1.ComponentOptions.buildFieldConditionOption()},FieldValue.simpleOptions=underscore_1.omit(FieldValue.options,"helperOptions"),FieldValue.helperOptions={helperOptions:FieldValue.options.helperOptions},FieldValue}(Component_1.Component);exports.FieldValue=FieldValue,Initialization_1.Initialization.registerAutoCreateComponent(FieldValue)},248:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0}),n(602);var o=n(0),l=n(3),s=n(6),a=n(16),r=n(1),p=n(22),u=n(14),d=n(12),c=n(7),h=n(8),m=n(2),g=n(117),_=function(e){function t(n,i,l,s){var a=e.call(this,n,O.ID,l)||this;a.element=n,a.options=i,a.result=s,a.options=h.ComponentOptions.initComponentOptions(n,t,i);var p=r.$$(a.element).findAll("tr[data-field]");if(o.each(p,function(e){new O(e,{},l,s)}),null==r.$$(a.element).find("tr")&&r.$$(n).detach(),a.isTogglable()){var u="coveo-field-table-toggle-container";a.toggleContainer=r.$$("div",{className:u,id:o.uniqueId(u)}).el,a.buildToggle(),r.$$(a.toggleContainer).insertBefore(a.element),a.toggleContainer.appendChild(a.element),a.toggleContainer.appendChild(a.toggleButtonInsideTable)}return a}return i(t,e),Object.defineProperty(t.prototype,"isExpanded",{get:function(){return!this.toggleButton||"true"===this.toggleButton.getAttribute("aria-expanded")},set:function(e){this.toggleButton&&this.toggleButton.setAttribute("aria-expanded",e.toString())},enumerable:!0,configurable:!0}),t.prototype.toggle=function(e){void 0===e&&(e=!1),this.isExpanded?this.minimize(e):this.expand(e)},t.prototype.expand=function(e){void 0===e&&(e=!1),this.isTogglable()&&(this.isExpanded=!0,this.toggleCaption.textContent=this.options.expandedTitle,u.SVGDom.addClassToSVGInContainer(this.toggleButtonSVGContainer,"coveo-opened"),u.SVGDom.addClassToSVGInContainer(this.toggleButtonInsideTable,"coveo-opened"),e?this.slideToggle(!0):this.slideToggle(!0,!1))},t.prototype.minimize=function(e){void 0===e&&(e=!1),this.isTogglable()&&(this.isExpanded=!1,this.toggleCaption.textContent=this.options.minimizedTitle,u.SVGDom.removeClassFromSVGInContainer(this.toggleButtonSVGContainer,"coveo-opened"),u.SVGDom.removeClassFromSVGInContainer(this.toggleButtonInsideTable,"coveo-opened"),e?this.slideToggle(!1):this.slideToggle(!1,!1))},t.prototype.updateToggleHeight=function(){this.updateToggleContainerHeight(),this.isExpanded?this.expand():this.minimize()},t.prototype.isTogglable=function(){return!!this.options.allowMinimization},t.prototype.buildToggle=function(){var e=this;this.toggleCaption=r.$$("span",{className:"coveo-field-table-toggle-caption"}).el,this.toggleButton=r.$$("div",{className:"coveo-field-table-toggle coveo-field-table-toggle-down",ariaControls:this.toggleContainer.id}).el,this.toggleButtonSVGContainer=r.$$("span",null,d.SVGIcons.icons.arrowDown).el,u.SVGDom.addClassToSVGInContainer(this.toggleButtonSVGContainer,"coveo-field-table-toggle-down-svg"),this.toggleButton.appendChild(this.toggleCaption),this.toggleButton.appendChild(this.toggleButtonSVGContainer),r.$$(this.toggleButton).insertBefore(this.element),this.toggleButtonInsideTable=r.$$("span",{className:"coveo-field-table-toggle coveo-field-table-toggle-up"},d.SVGIcons.icons.arrowUp).el,u.SVGDom.addClassToSVGInContainer(this.toggleButtonInsideTable,"coveo-field-table-toggle-up-svg"),!0===this.options.minimizedByDefault?this.isExpanded=!1:!1===this.options.minimizedByDefault?this.isExpanded=!0:this.isExpanded=!p.QueryUtils.hasExcerpt(this.result),requestAnimationFrame(function(){return e.updateToggleHeight()});var t=function(){return e.toggle(!0)};(new a.AccessibleButton).withElement(this.toggleButton).withSelectAction(function(){return t()}).withOwner(this.bind).withLabel(s.l("Details")).build(),r.$$(this.toggleButtonInsideTable).on("click",t)},t.prototype.slideToggle=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0),t||r.$$(this.toggleContainer).addClass("coveo-no-transition"),e?(this.toggleContainer.style.display="block",this.toggleContainer.style.height=this.containerHeight):this.toggleContainer.style.height="0",t||(this.toggleContainer.offsetHeight,r.$$(this.toggleContainer).removeClass("coveo-no-transition"))},Object.defineProperty(t.prototype,"containerHeight",{get:function(){return this.toggleContainerHeight||this.updateToggleContainerHeight(),this.toggleContainerHeight+"px"},enumerable:!0,configurable:!0}),t.prototype.updateToggleContainerHeight=function(){this.toggleContainerHeight=this.toggleContainer.scrollHeight},t.ID="FieldTable",t.doExport=function(){l.exportGlobally({FieldTable:t,FieldValue:g.FieldValue})},t.options={allowMinimization:h.ComponentOptions.buildBooleanOption({defaultValue:!0}),expandedTitle:h.ComponentOptions.buildLocalizedStringOption({localizedString:function(){return s.l("Details")},depend:"allowMinimization"}),minimizedTitle:h.ComponentOptions.buildLocalizedStringOption({localizedString:function(){return s.l("Details")},depend:"allowMinimization"}),minimizedByDefault:h.ComponentOptions.buildBooleanOption({depend:"allowMinimization"})},t}(c.Component);t.FieldTable=_,m.Initialization.registerAutoCreateComponent(_);var O=function(e){function t(n,i,o,l){var s=e.call(this,n,i,o,l,t.ID)||this;s.element=n,s.options=i,s.result=l,s.options=h.ComponentOptions.initComponentOptions(n,t,i);var a=r.$$("th").el;return a.appendChild(document.createTextNode(s.options.caption.toLocaleString())),s.element.insertBefore(a,s.getValueContainer()),s}return i(t,e),t.prototype.getValueContainer=function(){return null==this.valueContainer&&(this.valueContainer=document.createElement("td"),this.element.appendChild(this.valueContainer)),this.valueContainer},t.ID="ValueRow",t.options={caption:h.ComponentOptions.buildStringOption({postProcessing:function(e,t){return e||t.field.substr(1)}})},t.parent=g.FieldValue,t}(g.FieldValue)},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(19),o=n(22),l=n(112),s=n(31),a=n(4),r=n(1),p=n(0),u=n(6),d=function(){function e(){}return e.getRegexToUseForFacetSearch=function(e,t){return new RegExp(i.StringUtils.stringToRegex(e,t),"i")},e.getDisplayValueFromValueCaption=function(e,t,n){var i=this.tryToGetTranslatedCaption(t,e);return n[e]||i},e.getValuesToUseForSearchInFacet=function(e,t){var n=[e],i=this.getRegexToUseForFacetSearch(e,t.options.facetSearchIgnoreAccents);return t.options.valueCaption?(p.chain(t.options.valueCaption).pairs().filter(function(e){return i.test(e[1])}).each(function(e){n.push(e[0])}),(o.QueryUtils.isStratusAgnosticField(t.options.field,"@objecttype")||o.QueryUtils.isStratusAgnosticField(t.options.field,"@filetype"))&&p.each(l.FileTypes.getFileTypeCaptions(),function(e,o){o in t.options.valueCaption||!i.test(e)||n.push(o)})):o.QueryUtils.isStratusAgnosticField(t.options.field,"@objecttype")||o.QueryUtils.isStratusAgnosticField(t.options.field,"@filetype")?p.each(p.filter(p.pairs(l.FileTypes.getFileTypeCaptions()),function(e){return i.test(e[1])}),function(e){n.push(e[0])}):o.QueryUtils.isStratusAgnosticField(t.options.field,"@month")&&p.each(p.range(1,13),function(e){i.test(s.DateUtils.monthToString(e-1))&&n.push(("0"+e.toString()).substr(-2))}),n},e.buildFacetSearchPattern=function(e){return e=p.map(e,function(e){return a.Utils.escapeRegexCharacter(e)}),e[0]=".*"+e[0]+".*",e.join("|")},e.needAnotherFacetSearch=function(e,t,n,i){return e<t&&e<i&&e>n},e.addNoStateCssClassToFacetValues=function(e,t){if(0!=e.values.getSelected().length){var n=r.$$(t).findAll("li:not(.coveo-selected)");p.each(n,function(e){r.$$(e).addClass("coveo-no-state")})}},e.tryToGetTranslatedCaption=function(t,n){var i;if(o.QueryUtils.isStratusAgnosticField(t.toLowerCase(),"@filetype"))i=l.FileTypes.getFileType(n).caption;else if(o.QueryUtils.isStratusAgnosticField(t.toLowerCase(),"@objecttype"))i=l.FileTypes.getObjectType(n).caption;else if(e.isMonthFieldValue(t,n)){var r=parseInt(n,10);i=s.DateUtils.monthToString(r-1)}else i=u.l(n);return void 0!=i&&a.Utils.isNonEmptyString(i)?i:n},e.isMonthFieldValue=function(e,t){if(!o.QueryUtils.isStratusAgnosticField(e.toLowerCase(),"@month"))return!1;var n=parseInt(t,10);return!isNaN(n)&&!(n<1||n>12)},e}();t.FacetUtils=d},522:function(e,t,n){"use strict";function i(e){return!!(e.hasSelectedValue&&e.selectValue&&e.deselectValue)}Object.defineProperty(t,"__esModule",{value:!0}),t.isFacetFieldValueCompatible=i},602:function(e,t){}});