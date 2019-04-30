webpackJsonpCoveo__temporary([19],{14:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(0),n=function(){function e(){}return e.addClassToSVGInContainer=function(t,i){var o=t.querySelector("svg");o.setAttribute("class",""+e.getClass(o)+i)},e.removeClassFromSVGInContainer=function(t,i){var o=t.querySelector("svg");o.setAttribute("class",e.getClass(o).replace(i,""))},e.addStyleToSVGInContainer=function(e,t){var i=e.querySelector("svg");o.each(t,function(e,t){i.style[t]=e})},e.getClass=function(e){var t=e.getAttribute("class");return t?t+" ":""},e}();t.SVGDom=n},17:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(11),n=i(30),s=i(1);i(372);var r=function(){function e(){this.logger=new o.Logger(this)}return e.prototype.withOwner=function(e){return this.eventOwner=e,this},e.prototype.withElement=function(e){return e instanceof HTMLElement?this.element=s.$$(e):this.element=e,this},e.prototype.withLabel=function(e){return this.label=e,this},e.prototype.withTitle=function(e){return this.title=e,this},e.prototype.withSelectAction=function(e){return this.clickAction=e,this.enterKeyboardAction=e,this},e.prototype.withClickAction=function(e){return this.clickAction=e,this},e.prototype.withEnterKeyboardAction=function(e){return this.enterKeyboardAction=e,this},e.prototype.withFocusAndMouseEnterAction=function(e){return this.focusAction=e,this.mouseenterAction=e,this},e.prototype.withFocusAction=function(e){return this.focusAction=e,this},e.prototype.withMouseEnterAction=function(e){return this.mouseenterAction=e,this},e.prototype.withBlurAndMouseLeaveAction=function(e){return this.mouseleaveAction=e,this.blurAction=e,this},e.prototype.withMouseLeaveAction=function(e){return this.mouseleaveAction=e,this},e.prototype.withBlurAction=function(e){return this.blurAction=e,this},e.prototype.build=function(){return this.element||(this.element=s.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureTitle(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},e.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var e=this,t="coveo-accessible-button-pressed",i="coveo-accessible-button-focused";s.$$(this.element).addClass("coveo-accessible-button"),s.$$(this.element).on("mousedown",function(){s.$$(e.element).addClass(t),s.$$(e.element).removeClass(i)}),s.$$(this.element).on("mouseup",function(){return s.$$(e.element).removeClass(t)}),s.$$(this.element).on("focus",function(){s.$$(e.element).hasClass(t)||s.$$(e.element).addClass(i)}),s.$$(this.element).on("blur",function(){return s.$$(e.element).removeClass(i)})},e.prototype.ensureCorrectRole=function(){this.element.getAttribute("role")||this.element.setAttribute("role","button")},e.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label)},e.prototype.ensureTitle=function(){this.title&&this.element.setAttribute("title",this.title)},e.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},e.prototype.ensureSelectAction=function(){var e=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",n.KeyboardUtils.keypressAction(n.KEYBOARD.ENTER,function(t){return e.enterKeyboardAction(t)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},e.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},e.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},e.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},e.prototype.bindEvent=function(e,t){this.eventOwner?this.eventOwner.on(this.element,e,t):s.$$(this.element).on(e,t)},e}();t.AccessibleButton=r},229:function(e,t,i){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(t,i){function o(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0}),i(371);var n=i(0),s=i(38),r=i(10),l=i(3),c=i(5),u=i(7),a=i(17),p=i(1),h=i(14),d=i(13),f=i(9),m=i(6),b=i(8),v=i(2),y=i(47),g=i(59),C=i(504),$=function(e){function t(i,o,n){var l=e.call(this,i,t.ID,n)||this;return l.element=i,l.options=o,l.bindings=n,l.previouslySelected=[],l.groupByRequestValues=[],l.isSticky=!1,l.shouldTriggerQuery=!0,l.options=b.ComponentOptions.initComponentOptions(i,t,o),l.element.title=l.options.title,l.buildContent(),(new a.AccessibleButton).withElement(l.element).withClickAction(function(e){return l.handleClick(e)}).withEnterKeyboardAction(function(e){return l.handleKeyboardSelect(e)}).withBlurAction(function(e){return l.handleBlur(e)}).withLabel(l.options.title).build(),l.bind.onRootElement(s.BreadcrumbEvents.populateBreadcrumb,function(e){return l.handlePopulateBreadcrumb(e)}),l.bind.onRootElement(s.BreadcrumbEvents.clearBreadcrumb,function(){return l.handleClearBreadcrumb()}),l.bind.onRootElement(r.QueryEvents.buildingQuery,function(e){return l.handleBuildingQuery(e)}),l.bind.onRootElement(r.QueryEvents.doneBuildingQuery,function(e){return l.handleDoneBuildingQuery(e)}),l.bind.onRootElement(r.QueryEvents.querySuccess,function(e){return l.handleQuerySuccess(e)}),l}return o(t,e),t.prototype.getValueContainer=function(){return this.valueContainer},t.prototype.getValueCaption=function(e){var t=e;return n.contains(n.keys(this.options.valueCaption),e)?(t=this.options.valueCaption[t]||t,u.l(t)):y.FacetUtils.tryToGetTranslatedCaption(this.options.field.toString(),t)},t.prototype.getSelectedCaptions=function(){var e=this;return n.map(this.getSelectedValues(),function(t){return e.getValueCaption(t)})},t.prototype.toggleContainer=function(){p.$$(this.valueContainer).hasClass("coveo-simplefilter-value-container-expanded")?this.closeContainer():this.openContainer()},t.prototype.selectValue=function(e,t){var i=this;void 0===t&&(t=!0),n.each(this.checkboxes,function(o){var n=i.getValueCaption(o.label);o.label!=e&&n!=e||o.checkbox.select(t)})},t.prototype.deselectValue=function(e){var t=this;n.each(this.checkboxes,function(i){var o=t.getValueCaption(i.label);i.label!=e&&o!=e||i.checkbox.reset()})},t.prototype.toggleValue=function(e){var t=this;n.each(this.checkboxes,function(i){var o=t.getValueCaption(i.label);i.label!=e&&o!=e||i.checkbox.toggle()})},t.prototype.resetSimpleFilter=function(){var e=this;n.each(this.checkboxes,function(t){t.checkbox.isSelected()&&e.deselectValue(t.label)})},t.prototype.openContainer=function(){p.$$(this.element).addClass("coveo-simplefilter-value-container-expanded"),this.valueContainer.addClass("coveo-simplefilter-value-container-expanded"),this.refreshValueContainer(),this.isSticky=!0,this.backdrop.hasClass("coveo-dropdown-background-active")||this.showBackdrop()},t.prototype.closeContainer=function(){p.$$(this.element).removeClass("coveo-simplefilter-value-container-expanded"),this.valueContainer.removeClass("coveo-simplefilter-value-container-expanded"),this.backdrop.hasClass("coveo-dropdown-background-active")&&this.hideBackdrop(),0==this.getSelectedLabeledCheckboxes().length&&(this.isSticky=!1)},t.prototype.getSelectedValues=function(){return n.map(this.getSelectedLabeledCheckboxes(),function(e){return e.label})},t.prototype.handleClick=function(e){e.stopPropagation(),e.target==this.element&&this.toggleContainer()},t.prototype.handleKeyboardSelect=function(e){e.target==this.element?this.toggleContainer():this.toggleValue(p.$$(e.target).text())},t.prototype.handleBlur=function(e){var i=e.relatedTarget;i&&(p.$$(i).parent(m.Component.computeCssClassName(t))||this.closeContainer())},t.prototype.handleValueToggle=function(e){var t=this.getSelectedValues();this.circleElement.text(t.length.toString()),this.circleElement.removeClass("coveo-simplefilter-circle-hidden"),1==t.length?(this.setDisplayedTitle(this.getValueCaption(t[0])),this.element.title=this.getValueCaption(t[0])):(this.setDisplayedTitle(this.options.title),this.element.title=this.options.title,t.length<1&&this.circleElement.addClass("coveo-simplefilter-circle-hidden")),0==t.length&&(this.isSticky=!1);var i=e.isSelected()?f.analyticsActionCauseList.simpleFilterSelectValue:f.analyticsActionCauseList.simpleFilterDeselectValue;this.usageAnalytics.logSearchEvent(i,{simpleFilterTitle:this.options.title,simpleFilterSelectedValue:e.label,simpleFilterField:this.options.field}),this.shouldTriggerQuery&&this.queryController.executeQuery()},t.prototype.createCheckbox=function(e){var t=this,i=new g.Checkbox(function(){t.handleValueToggle(i)},this.getValueCaption(e));return i.getElement().title=u.l(e),p.$$(i.getElement()).setAttribute("tabindex","0"),{checkbox:i,label:e}},t.prototype.createCheckboxes=function(){var e=this;this.previouslySelected.length>0?(this.checkboxes=n.map(this.previouslySelected,function(t){return e.createCheckbox(t)}),n.each(this.checkboxes,function(t){e.previouslySelected.indexOf(t.label)>=0&&e.selectValue(t.label,!1)})):void 0!=this.options.values?this.checkboxes=n.map(this.options.values,function(t){return e.createCheckbox(t)}):void 0!=this.groupByRequestValues&&(this.checkboxes=n.map(this.groupByRequestValues,function(t){return e.createCheckbox(t)})),n.each(this.checkboxes,function(t){e.valueContainer.append(t.checkbox.getElement())}),this.checkboxes.length>0&&p.$$(p.$$(this.checkboxes[this.checkboxes.length-1].checkbox.getElement()).find(".coveo-checkbox-button")).on("blur",function(){e.closeContainer()})},t.prototype.createValueContainer=function(){this.valueContainer=p.$$("div",{className:"coveo-simplefilter-value-container"})},t.prototype.buildContent=function(){this.createValueContainer(),this.element.appendChild(this.buildSelect()),this.element.appendChild(this.valueContainer.el),this.findOrCreateWrapper().append(this.element),this.createBackdrop()},t.prototype.buildSelect=function(){var e=p.$$("span",{className:"coveo-simplefilter-select"});return this.selectTitle=p.$$("span",{className:"coveo-simplefilter-selecttext"},this.options.title),e.append(this.selectTitle.el),e.append(this.buildCircleElement()),e.append(this.buildSvgToggleUpIcon()),e.el},t.prototype.buildSvgToggleUpIcon=function(){var e=p.$$("span",{className:"coveo-simplefilter-toggle-svg-container"},d.SVGIcons.icons.arrowDown).el;return h.SVGDom.addClassToSVGInContainer(e,"coveo-simplefilter-toggle-down-svg"),e},t.prototype.buildCircleElement=function(){return this.circleElement=p.$$("span",{className:"coveo-simplefilter-circle coveo-simplefilter-circle-hidden"},this.getSelectedLabeledCheckboxes().length.toString()),this.circleElement.el},t.prototype.createBackdrop=function(){var e=this,t=p.$$(this.root).find(".coveo-dropdown-background");null==t?(this.backdrop=p.$$("div",{className:"coveo-dropdown-background"}),this.root.appendChild(this.backdrop.el)):this.backdrop=p.$$(t),this.backdrop.on("click",function(){return e.closeContainer()})},t.prototype.handlePopulateBreadcrumb=function(e){var t=this;if(this.getSelectedLabeledCheckboxes().length>0){var i=p.$$("div",{className:"coveo-simplefilter-breadcrumb"}),o=p.$$("span",{className:"coveo-simplefilter-breadcrumb-title"},this.options.title+":");i.append(o.el);var s=p.$$("span",{className:"coveo-simplefilter-breadcrumb-values"});i.append(s.el),n.each(this.getSelectedLabeledCheckboxes(),function(e){var i=p.$$("span",{className:"coveo-simplefilter-breadcrumb-value"},t.getValueCaption(e.label));s.append(i.el);var o=p.$$("span",{className:"coveo-simplefilter-breadcrumb-clear"},d.SVGIcons.icons.mainClear);i.append(o.el),i.el.title=t.getValueCaption(e.label),p.$$(i).on("click",function(){return t.handleRemoveFromBreadcrumb(e)})}),e.breadcrumbs.push({element:i.el})}},t.prototype.handleRemoveFromBreadcrumb=function(e){e.checkbox.reset(),this.refreshValueContainer()},t.prototype.handleClearBreadcrumb=function(){this.shouldTriggerQuery=!1,this.resetSimpleFilter(),this.shouldTriggerQuery=!0},t.prototype.handleQuerySuccess=function(e){e.results.results.length>0?this.findOrCreateWrapper().removeClass("coveo-no-results"):this.findOrCreateWrapper().addClass("coveo-no-results"),void 0==this.options.values&&(this.groupByBuilder.groupBy(e),this.groupByRequestValues=this.groupByBuilder.getValuesFromGroupBy(),this.refreshValueContainer(),p.$$(this.element).hasClass("coveo-simplefilter-value-container-expanded")||(this.isSticky=!1))},t.prototype.handleBuildingQuery=function(e){c.Assert.exists(e),c.Assert.exists(e.queryBuilder);var t=this.getSelectedValues();t.length>0&&e.queryBuilder.advancedExpression.addFieldExpression(this.options.field.toString(),"==",t)},t.prototype.handleDoneBuildingQuery=function(e){void 0==this.options.values&&(c.Assert.exists(e),c.Assert.exists(e.queryBuilder),this.previouslySelected=this.getSelectedValues(),this.groupByBuilder=new C.SimpleFilterValues(this,this.options),this.groupByBuilder.handleDoneBuildingQuery(e))},t.prototype.getSelectedLabeledCheckboxes=function(){return n.filter(this.checkboxes,function(e){return e.checkbox.isSelected()})},t.prototype.setDisplayedTitle=function(e){this.selectTitle.text(this.getValueCaption(e))},t.prototype.showBackdrop=function(){this.backdrop.addClass("coveo-dropdown-background-active")},t.prototype.hideBackdrop=function(){this.backdrop.removeClass("coveo-dropdown-background-active")},t.prototype.findOrCreateWrapper=function(){if(null==p.$$(this.root).find(".coveo-simplefilter-header-wrapper")){var e=p.$$("div",{className:"coveo-simplefilter-header-wrapper"});return e.insertBefore(this.element),e}var e=p.$$(this.root).find(".coveo-simplefilter-header-wrapper");return p.$$(e)},t.prototype.refreshValueContainer=function(){this.isSticky||(this.valueContainer.empty(),this.createCheckboxes()),0!=this.checkboxes.length||this.isSticky?p.$$(this.element).removeClass("coveo-simplefilter-empty"):p.$$(this.element).addClass("coveo-simplefilter-empty"),p.$$(this.circleElement).text(this.getSelectedLabeledCheckboxes().length.toString())},t.ID="SimpleFilter",t.doExport=function(){l.exportGlobally({SimpleFilter:t})},t.options={maximumNumberOfValues:b.ComponentOptions.buildNumberOption({defaultValue:5,min:0}),values:b.ComponentOptions.buildListOption(),field:b.ComponentOptions.buildFieldOption({required:!0}),title:b.ComponentOptions.buildLocalizedStringOption({defaultValue:"NoTitle"}),valueCaption:b.ComponentOptions.buildJsonOption()},t}(m.Component);t.SimpleFilter=$,v.Initialization.registerAutoCreateComponent($)},371:function(e,t){},372:function(e,t){},47:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(19),n=i(20),s=i(97),r=i(31),l=i(4),c=i(1),u=i(0),a=i(7),p=function(){function e(){}return e.getRegexToUseForFacetSearch=function(e,t){return new RegExp(o.StringUtils.stringToRegex(e,t),"i")},e.getValuesToUseForSearchInFacet=function(e,t){var i=[e],o=this.getRegexToUseForFacetSearch(e,t.options.facetSearchIgnoreAccents);return t.options.valueCaption?(u.chain(t.options.valueCaption).pairs().filter(function(e){return o.test(e[1])}).each(function(e){i.push(e[0])}),(n.QueryUtils.isStratusAgnosticField(t.options.field,"@objecttype")||n.QueryUtils.isStratusAgnosticField(t.options.field,"@filetype"))&&u.each(s.FileTypes.getFileTypeCaptions(),function(e,n){n in t.options.valueCaption||!o.test(e)||i.push(n)})):n.QueryUtils.isStratusAgnosticField(t.options.field,"@objecttype")||n.QueryUtils.isStratusAgnosticField(t.options.field,"@filetype")?u.each(u.filter(u.pairs(s.FileTypes.getFileTypeCaptions()),function(e){return o.test(e[1])}),function(e){i.push(e[0])}):n.QueryUtils.isStratusAgnosticField(t.options.field,"@month")&&u.each(u.range(1,13),function(e){o.test(r.DateUtils.monthToString(e-1))&&i.push(("0"+e.toString()).substr(-2))}),i},e.buildFacetSearchPattern=function(e){return e=u.map(e,function(e){return l.Utils.escapeRegexCharacter(e)}),e[0]=".*"+e[0]+".*",e.join("|")},e.needAnotherFacetSearch=function(e,t,i,o){return e<t&&e<o&&e>i},e.addNoStateCssClassToFacetValues=function(e,t){if(0!=e.values.getSelected().length){var i=c.$$(t).findAll("li:not(.coveo-selected)");u.each(i,function(e){c.$$(e).addClass("coveo-no-state")})}},e.tryToGetTranslatedCaption=function(t,i){var o;if(n.QueryUtils.isStratusAgnosticField(t.toLowerCase(),"@filetype"))o=s.FileTypes.getFileType(i).caption;else if(n.QueryUtils.isStratusAgnosticField(t.toLowerCase(),"@objecttype"))o=s.FileTypes.getObjectType(i).caption;else if(e.isMonthFieldValue(t,i)){var c=parseInt(i,10);o=r.DateUtils.monthToString(c-1)}else o=a.l(i);return void 0!=o&&l.Utils.isNonEmptyString(o)?o:i},e.isMonthFieldValue=function(e,t){if(!n.QueryUtils.isStratusAgnosticField(e.toLowerCase(),"@month"))return!1;var i=parseInt(t,10);return!isNaN(i)&&!(i<1||i>12)},e}();t.FacetUtils=p},504:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i(371);var o=i(0),n=function(){function e(e,t){this.simpleFilter=e,this.options=t,this.groupByRequestValues=[]}return e.prototype.getValuesFromGroupBy=function(){return this.groupByRequestValues},e.prototype.groupBy=function(e){var t=this;this.groupByRequestValues=[];var i=e.results.groupByResults;i.length>0&&void 0!=this.position&&o.each(i[this.position].values,function(e){t.groupByRequestValues.indexOf(e.lookupValue)<0&&t.groupByRequestValues.push(e.lookupValue)})},e.prototype.handleDoneBuildingQuery=function(e){var t=e.queryBuilder;this.putGroupByIntoQueryBuilder(t)},e.prototype.putGroupByIntoQueryBuilder=function(e){var t=this.createBasicGroupByRequest();e.groupByRequests.push(t),this.position=e.groupByRequests.length-1},e.prototype.createBasicGroupByRequest=function(){return{field:this.options.field,maximumNumberOfValues:this.options.maximumNumberOfValues,injectionDepth:1e3}},e}();t.SimpleFilterValues=n}});