webpackJsonpCoveo__temporary([31,38],{118:function(module,exports,__webpack_require__){"use strict";function showOnlyWithHelper(e,t){return null==t&&(t={}),t.helpers=e,t}var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var underscore_1=__webpack_require__(0),GlobalExports_1=__webpack_require__(3),Assert_1=__webpack_require__(5),Strings_1=__webpack_require__(6),AccessibleButton_1=__webpack_require__(16),DateUtils_1=__webpack_require__(32),Dom_1=__webpack_require__(1),StringUtils_1=__webpack_require__(22),Utils_1=__webpack_require__(4),AnalyticsActionListMeta_1=__webpack_require__(9),Component_1=__webpack_require__(7),ComponentOptions_1=__webpack_require__(8),Initialization_1=__webpack_require__(2),FacetUtils_1=__webpack_require__(39),TemplateFieldsEvaluator_1=__webpack_require__(132),TemplateHelpers_1=__webpack_require__(115),IFieldValueCompatibleFacet_1=__webpack_require__(535),ComponentsTypes_1=__webpack_require__(45),FieldValue=function(_super){function FieldValue(e,t,o,n,i){void 0===i&&(i=FieldValue.ID);var l=_super.call(this,e,i,o)||this;return l.element=e,l.options=t,l.result=n,l.options=ComponentOptions_1.ComponentOptions.initOptions(e,FieldValue.simpleOptions,t,FieldValue.ID),null!=l.options.helper&&l.normalizeHelperAndOptions(),l.result=l.result||l.resolveResult(),Assert_1.Assert.exists(l.result),TemplateFieldsEvaluator_1.TemplateFieldsEvaluator.evaluateFieldsToMatch(l.options.conditions,l.result)&&l.getValue()?l.initialize():null!=l.element.parentElement&&l.element.parentElement.removeChild(l.element),l}return __extends(FieldValue,_super),FieldValue.prototype.initialize=function(){var e,t=this.getValue();underscore_1.isArray(t)?e=t:this.options.splitValues?underscore_1.isString(t)&&(e=underscore_1.map(t.split(this.options.separator),function(e){return e.trim()})):(t=t.toString(),e=[t]),this.appendValuesToDom(e),null!=this.options.textCaption&&this.prependTextCaptionToDom()},FieldValue.prototype.getValue=function(){var e=Utils_1.Utils.getFieldValue(this.result,this.options.field);return!underscore_1.isArray(e)&&underscore_1.isObject(e)&&(e=null),e},FieldValue.prototype.renderOneValue=function(e){var t=Dom_1.$$("span").el,o=this.getCaption(e);if(this.options.helper){var n=TemplateHelpers_1.TemplateHelpers.getHelper(this.options.helper+"v2")||TemplateHelpers_1.TemplateHelpers.getHelper(""+this.options.helper);Utils_1.Utils.exists(n)?o=n.call(this,e,this.getHelperOptions()):this.logger.warn("Helper "+this.options.helper+" is not found in available helpers. The list of supported helpers is :",underscore_1.keys(TemplateHelpers_1.TemplateHelpers.getHelpers()));var i=this.getFullDate(e,this.options.helper);i&&t.setAttribute("title",i),"date"!=this.options.helper&&"dateTime"!=this.options.helper&&"emailDateTime"!=this.options.helper||(o=StringUtils_1.StringUtils.capitalizeFirstLetter(o))}return this.options.htmlValue?t.innerHTML=o:t.appendChild(document.createTextNode(o)),this.bindEventOnValue(t,e,o),t},FieldValue.prototype.getValueContainer=function(){return this.element},FieldValue.prototype.normalizeHelperAndOptions=function(){var e=this;this.options=ComponentOptions_1.ComponentOptions.initOptions(this.element,FieldValue.helperOptions,this.options,FieldValue.ID);var t=underscore_1.keys(FieldValue.options.helperOptions.subOptions),o=underscore_1.filter(t,function(t){var o=FieldValue.options.helperOptions.subOptions[t];if(o){var n=o.helpers;return null!=n&&underscore_1.contains(n,e.options.helper)}return!1});this.options.helperOptions=underscore_1.omit(this.options.helperOptions,function(e,t){return!underscore_1.contains(o,t)})},FieldValue.prototype.getHelperOptions=function(){var inlineOptions=ComponentOptions_1.ComponentOptions.loadStringOption(this.element,"helperOptions",{});return Utils_1.Utils.isNonEmptyString(inlineOptions)?underscore_1.extend({},this.options.helperOptions,eval("("+inlineOptions+")")):this.options.helperOptions},FieldValue.prototype.getFullDate=function(e,t){var o={useLongDateFormat:!0,useTodayYesterdayAndTomorrow:!1,useWeekdayIfThisWeek:!1,omitYearIfCurrentOne:!1};return"date"==t?DateUtils_1.DateUtils.dateToString(new Date(parseInt(e)),o):"dateTime"==t||"emailDateTime"==t?DateUtils_1.DateUtils.dateTimeToString(new Date(parseInt(e)),o):""},FieldValue.prototype.appendValuesToDom=function(e){var t=this;underscore_1.each(e,function(o,n){void 0!=o&&(t.getValueContainer().appendChild(t.renderOneValue(o)),n!==e.length-1&&t.getValueContainer().appendChild(document.createTextNode(t.options.displaySeparator)))})},FieldValue.prototype.renderTextCaption=function(){return Dom_1.$$("span",{className:"coveo-field-caption"},underscore_1.escape(this.options.textCaption)).el},FieldValue.prototype.prependTextCaptionToDom=function(){var e=this.getValueContainer();Dom_1.$$(e).prepend(this.renderTextCaption()),Dom_1.$$(e).addClass("coveo-with-label")},FieldValue.prototype.bindEventOnValue=function(e,t,o){this.bindFacets(e,t,o)},FieldValue.prototype.getCaption=function(e){for(var t=0,o=this.getFacets();t<o.length;t++){var n=o[t],i=n.getCaptionForStringValue(e);if(i)return i}return FacetUtils_1.FacetUtils.tryToGetTranslatedCaption(this.options.field,e)},FieldValue.prototype.getFacets=function(){var e=this,t=ComponentsTypes_1.ComponentsTypes.getAllFacetsFromSearchInterface(this.searchInterface).filter(IFieldValueCompatibleFacet_1.isFacetFieldValueCompatible).filter(function(e){return!e.disabled}),o=t.filter(function(t){return t.options.id===e.options.facet});return o.length?o:t.filter(function(t){return t.options.field===e.options.field})},FieldValue.prototype.bindFacets=function(e,t,o){var n=this,i=this.getFacets();if(i.length){var l=!!underscore_1.find(i,function(e){return e.hasSelectedValue(t)}),s=function(){return n.handleFacetSelection(l,i,t)};this.buildClickableElement(e,l,o,s)}},FieldValue.prototype.buildClickableElement=function(e,t,o,n){var i=t?Strings_1.l("RemoveFilterOn",o):Strings_1.l("FilterOn",o);(new AccessibleButton_1.AccessibleButton).withTitle(i).withElement(e).withSelectAction(n).build(),t&&Dom_1.$$(e).addClass("coveo-selected"),Dom_1.$$(e).addClass("coveo-clickable")},FieldValue.prototype.handleFacetSelection=function(e,t,o){t.forEach(function(t){e?t.deselectValue(o):t.selectValue(o)}),this.executeQuery(o)},FieldValue.prototype.executeQuery=function(e){var t=this;this.queryController.deferExecuteQuery({beforeExecuteQuery:function(){return t.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.documentField,{facetId:t.options.facet,facetField:t.options.field.toString(),facetValue:e.toLowerCase()})}})},FieldValue.ID="FieldValue",FieldValue.doExport=function(){GlobalExports_1.exportGlobally({FieldValue:FieldValue})},FieldValue.options={field:ComponentOptions_1.ComponentOptions.buildFieldOption({defaultValue:"@field",required:!0}),facet:ComponentOptions_1.ComponentOptions.buildStringOption({postProcessing:function(e,t){return e||t.field}}),htmlValue:ComponentOptions_1.ComponentOptions.buildBooleanOption({defaultValue:!1}),splitValues:ComponentOptions_1.ComponentOptions.buildBooleanOption({defaultValue:!1}),separator:ComponentOptions_1.ComponentOptions.buildStringOption({depend:"splitValues",defaultValue:";"}),displaySeparator:ComponentOptions_1.ComponentOptions.buildStringOption({depend:"splitValues",defaultValue:", "}),helper:ComponentOptions_1.ComponentOptions.buildHelperOption(),helperOptions:ComponentOptions_1.ComponentOptions.buildObjectOption({subOptions:{text:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["anchor"])),target:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["anchor"])),class:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["anchor"])),format:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["number"])),decimals:ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(["currency"],{min:0})),symbol:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["currency"])),useTodayYesterdayAndTomorrow:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!0})),useWeekdayIfThisWeek:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!0})),omitYearIfCurrentOne:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!0})),useLongDateFormat:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!1})),includeTimeIfToday:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!0})),includeTimeIfThisWeek:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!0})),alwaysIncludeTime:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"],{defaultValue:!1})),predefinedFormat:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["date","dateTime","emailDateTime","time"])),companyDomain:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["email"])),me:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["email"])),lengthLimit:ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(["email"],{min:1})),truncateName:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["email"])),alt:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["image"])),height:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["image"])),width:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["image"])),srcTemplate:ComponentOptions_1.ComponentOptions.buildStringOption(showOnlyWithHelper(["image"])),precision:ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(["size"],{min:0,defaultValue:2})),base:ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(["size"],{min:0,defaultValue:0})),isMilliseconds:ComponentOptions_1.ComponentOptions.buildBooleanOption(showOnlyWithHelper(["timeSpan"])),length:ComponentOptions_1.ComponentOptions.buildNumberOption(showOnlyWithHelper(["shorten","shortenPath","shortenUri"],{defaultValue:200}))}}),textCaption:ComponentOptions_1.ComponentOptions.buildLocalizedStringOption(),conditions:ComponentOptions_1.ComponentOptions.buildFieldConditionOption()},FieldValue.simpleOptions=underscore_1.omit(FieldValue.options,"helperOptions"),FieldValue.helperOptions={helperOptions:FieldValue.options.helperOptions},FieldValue}(Component_1.Component);exports.FieldValue=FieldValue,Initialization_1.Initialization.registerAutoCreateComponent(FieldValue)},238:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=o(8),l=o(2),s=o(118),r=o(22),p=o(5),a=o(1),u=o(0),c=o(3),d=function(e){function t(o,n,l,s){var r=e.call(this,o,i.ComponentOptions.initComponentOptions(o,t,n),l,s,t.ID)||this;return r.options=n,u.isString(r.options.colors)&&(r.options.colors=t.parseColors(r.options.colors)),null==r.options.colors.values&&(r.options.colors.values={}),r}return n(t,e),t.parseColors=function(e){if(e){if(t.colorsRegex.test(e)){var o={values:{}},n=r.StringUtils.match(e,t.colorRegex);return u.each(n,function(e){var t=e[1],n=e[2];null!=t?o.values[t.replace(/\\(:|;)/g,"$1")]={icon:n}:o.icon=n}),o}try{return JSON.parse(e)}catch(t){p.Assert.fail("Invalid colors for badge '"+e+"'")}}return{}},t.prototype.getColor=function(e){void 0===e&&(e="");var t=u.find(u.keys(this.options.colors.values),function(t){return e.toLowerCase()==t.toLowerCase()}),o=t?this.options.colors.values[t]:{};return{icon:o.icon||this.options.colors.icon,text:o.text||this.options.colors.text}},t.prototype.renderOneValue=function(t){var o=e.prototype.renderOneValue.call(this,t);a.$$(o).addClass("coveo-value");var n=this.getColor(t),i=a.$$("span",{className:"coveo-badge-icon"}).el;null!=n.icon&&(i.style.color=n.icon);var l=a.$$("span",{className:"coveo-badge-label"},o.innerHTML).el;return null!=n.text&&(l.style.color=n.text),a.$$(o).empty(),o.appendChild(i),o.appendChild(l),o},t.prototype.prependTextCaptionToDom=function(){},t.ID="Badge",t.doExport=function(){c.exportGlobally({Badge:t})},t.options={colors:i.ComponentOptions.buildCustomOption(function(e){return t.parseColors(e)},{defaultValue:{values:{}}}),textCaption:i.ComponentOptions.buildLocalizedStringOption()},t.parent=s.FieldValue,t.colorRegex=/(?:\s*((?:[^:;]|\\[;:])*)\s*:\s*)?(\w+|#[A-Fa-f0-9]{6}|#[A-Fa-f0-9]{3})/g,t.colorsRegex=new RegExp("^(\\s*"+t.colorRegex.source+"\\s*;)*(\\s*"+t.colorRegex.source+")?\\s*$"),t}(s.FieldValue);t.Badge=d,d.options=u.omit(d.options,"textCaption"),l.Initialization.registerAutoCreateComponent(d)},39:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(22),i=o(21),l=o(114),s=o(32),r=o(4),p=o(1),a=o(0),u=o(6),c=function(){function e(){}return e.getRegexToUseForFacetSearch=function(e,t){return new RegExp(n.StringUtils.stringToRegex(e,t),"i")},e.getDisplayValueFromValueCaption=function(e,t,o){var n=this.tryToGetTranslatedCaption(t,e);return o[e]||n},e.getValuesToUseForSearchInFacet=function(e,t){var o=[e],n=this.getRegexToUseForFacetSearch(e,t.options.facetSearchIgnoreAccents);return t.options.valueCaption?(a.chain(t.options.valueCaption).pairs().filter(function(e){return n.test(e[1])}).each(function(e){o.push(e[0])}),(i.QueryUtils.isStratusAgnosticField(t.options.field,"@objecttype")||i.QueryUtils.isStratusAgnosticField(t.options.field,"@filetype"))&&a.each(l.FileTypes.getFileTypeCaptions(),function(e,i){i in t.options.valueCaption||!n.test(e)||o.push(i)})):i.QueryUtils.isStratusAgnosticField(t.options.field,"@objecttype")||i.QueryUtils.isStratusAgnosticField(t.options.field,"@filetype")?a.each(a.filter(a.pairs(l.FileTypes.getFileTypeCaptions()),function(e){return n.test(e[1])}),function(e){o.push(e[0])}):i.QueryUtils.isStratusAgnosticField(t.options.field,"@month")&&a.each(a.range(1,13),function(e){n.test(s.DateUtils.monthToString(e-1))&&o.push(("0"+e.toString()).substr(-2))}),o},e.buildFacetSearchPattern=function(e){return e=a.map(e,function(e){return r.Utils.escapeRegexCharacter(e)}),e[0]=".*"+e[0]+".*",e.join("|")},e.needAnotherFacetSearch=function(e,t,o,n){return e<t&&e<n&&e>o},e.addNoStateCssClassToFacetValues=function(e,t){if(0!=e.values.getSelected().length){var o=p.$$(t).findAll("li:not(.coveo-selected)");a.each(o,function(e){p.$$(e).addClass("coveo-no-state")})}},e.tryToGetTranslatedCaption=function(t,o){var n;if(i.QueryUtils.isStratusAgnosticField(t.toLowerCase(),"@filetype"))n=l.FileTypes.getFileType(o).caption;else if(i.QueryUtils.isStratusAgnosticField(t.toLowerCase(),"@objecttype"))n=l.FileTypes.getObjectType(o).caption;else if(e.isMonthFieldValue(t,o)){var p=parseInt(o,10);n=s.DateUtils.monthToString(p-1)}else n=u.l(o);return void 0!=n&&r.Utils.isNonEmptyString(n)?n:o},e.isMonthFieldValue=function(e,t){if(!i.QueryUtils.isStratusAgnosticField(e.toLowerCase(),"@month"))return!1;var o=parseInt(t,10);return!isNaN(o)&&!(o<1||o>12)},e}();t.FacetUtils=c},535:function(e,t,o){"use strict";function n(e){return!!e.isFieldValueCompatible}Object.defineProperty(t,"__esModule",{value:!0}),t.isFacetFieldValueCompatible=n}});
//# sourceMappingURL=Badge.min__10130b8bbdbe87aa2b95.js.map