webpackJsonpCoveo__temporary([23,39,83],{193:function(t,e,i){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0}),i(579);var n=i(3),r=i(11),s=i(5),u=i(18),a=i(13),c=i(1),l=i(15),p=i(12),d=i(4),h=i(122),f=i(7),y=i(8),C=i(2),g=i(504),m=i(17),v=i(6),b=i(0),S=function(t){function e(i,o,n){var c=t.call(this,i,e.ID,n)||this;return c.element=i,c.options=o,c.options=y.ComponentOptions.initComponentOptions(i,e,o),s.Assert.isLargerOrEqualsThan(1,c.options.sortCriteria.length),c.bind.onQueryState(u.MODEL_EVENTS.CHANGE_ONE,a.QUERY_STATE_ATTRIBUTES.SORT,function(){return c.handleQueryStateChanged()}),c.bind.onRootElement(r.QueryEvents.querySuccess,function(t){return c.handleQuerySuccess(t)}),c.bind.onRootElement(r.QueryEvents.buildingQuery,function(t){return c.handleBuildingQuery(t)}),c.bind.onRootElement(r.QueryEvents.queryError,function(t){return c.handleQueryError(t)}),c.ensureDom(),c}return o(e,t),e.prototype.createDom=function(){var t=this,e=c.$$(this.element);e.on("click",function(){return t.selectAndExecuteQuery()});var i=e.text();e.empty(),this.findOrCreateRadioGroup(),this.createSortButton(i),this.isToggle()&&this.createDirectionButton(),this.update()},e.prototype.select=function(t){t?(this.currentCriteria=b.find(this.options.sortCriteria,function(e){return e.direction==t}),this.updateQueryStateModel()):d.Utils.exists(this.currentCriteria)?this.selectNextCriteria():this.selectFirstCriteria()},e.prototype.selectAndExecuteQuery=function(){var t=this.currentCriteria;this.select(),t!=this.currentCriteria&&this.executeSearchQuery()},e.prototype.enable=function(){c.$$(this.element).removeClass("coveo-tab-disabled"),this.update(),t.prototype.enable.call(this)},e.prototype.disable=function(){c.$$(this.element).addClass("coveo-tab-disabled"),t.prototype.disable.call(this)},e.prototype.getCurrentCriteria=function(){return this.currentCriteria},e.prototype.match=function(t){return b.any(this.options.sortCriteria,function(e){return t==e.toString()})},e.prototype.findOrCreateRadioGroup=function(){this.radioGroup=this.findRadioGroup(),this.radioGroup||(this.element.setAttribute("role","radiogroup"),this.radioGroup=this.element)},e.prototype.createSortButton=function(t){var e=this;this.sortButton=c.$$("span").el,this.sortButton.innerText=this.options.caption||t,(new m.AccessibleButton).withElement(this.sortButton).withEnterKeyboardAction(function(){return e.selectAndExecuteQuery()}).withArrowsAction(function(t,i){return e.onArrowPressed(t,i)}).withLabel(this.isToggle()?this.getDirectionalLabel(this.initialDirection):this.getOmnidirectionalLabel()).withRole("radio").build(),this.element.appendChild(this.sortButton)},e.prototype.createDirectionButton=function(){var t=this;this.directionButton=c.$$.apply(void 0,["span",{className:"coveo-icon"}].concat(this.createIcons())).el,(new m.AccessibleButton).withElement(this.directionButton).withSelectAction(function(e){e.stopPropagation(),t.selectNextCriteriaAndExecuteQuery()}).withArrowsAction(function(e,i){return t.onArrowPressed(e,i)}).withLabel(this.getDirectionalLabel(this.initialDirection===g.VALID_DIRECTION.DESCENDING?g.VALID_DIRECTION.ASCENDING:g.VALID_DIRECTION.DESCENDING)).withRole("radio").build(),this.element.appendChild(this.directionButton)},e.prototype.onArrowPressed=function(t,e){this.selectNextRadioButton(t===m.ArrowDirection.RIGHT||t===m.ArrowDirection.DOWN?1:-1),e.stopPropagation()},e.prototype.createIcons=function(){var t=c.$$("span",{className:"coveo-sort-icon-ascending"},p.SVGIcons.icons.arrowUp);l.SVGDom.addClassToSVGInContainer(t.el,"coveo-sort-icon-ascending-svg");var e=c.$$("span",{className:"coveo-sort-icon-descending"},p.SVGIcons.icons.arrowDown);return l.SVGDom.addClassToSVGInContainer(e.el,"coveo-sort-icon-descending-svg"),[t,e]},e.prototype.findRadioGroup=function(t){return void 0===t&&(t=this.element),t&&t!==document.body?"radiogroup"===t.getAttribute("role")?t:this.findRadioGroup(t.parentElement):null},e.prototype.selectNextRadioButton=function(t){void 0===t&&(t=1);var e,i=c.$$(this.radioGroup).findAll('[role="radio"]'),o=b.findIndex(i,function(t){return"true"===t.getAttribute("aria-checked")});e=-1!==o?(o+t+i.length)%i.length:t>=0?0:i.length-1;var n=i[e];n.focus(),n.click()},e.prototype.executeSearchQuery=function(){var t=this;this.queryController.deferExecuteQuery({beforeExecuteQuery:function(){return h.logSortEvent(t.usageAnalytics,t.currentCriteria.sort+t.currentCriteria.direction)}})},e.prototype.selectFirstCriteria=function(){this.currentCriteria=this.options.sortCriteria[0],this.updateQueryStateModel()},e.prototype.selectNextCriteria=function(){var t=this.currentCriteria?this.options.sortCriteria.indexOf(this.currentCriteria):0;this.currentCriteria=this.options.sortCriteria[(t+1)%this.options.sortCriteria.length],this.updateQueryStateModel()},e.prototype.selectNextCriteriaAndExecuteQuery=function(){var t=this.currentCriteria;this.selectNextCriteria(),t!=this.currentCriteria&&this.executeSearchQuery()},e.prototype.handleQueryStateChanged=function(){this.update()},e.prototype.update=function(){var t=this.queryStateModel.get(a.QueryStateModel.attributesEnum.sort);if(d.Utils.isNonEmptyString(t)){var e=g.SortCriteria.parse(t);this.currentCriteria=b.find(this.options.sortCriteria,function(t){return e.equals(t)})}else this.currentCriteria=null;this.updateAppearance(),this.updateAccessibilityProperties()},Object.defineProperty(e.prototype,"captionIsDefined",{get:function(){return d.Utils.isNonEmptyString(this.options.caption)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentDirection",{get:function(){return this.currentCriteria?this.currentCriteria.direction:this.initialDirection},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"initialDirection",{get:function(){return this.options.sortCriteria[0].direction},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayedSortText",{get:function(){return this.captionIsDefined?this.options.caption:this.element.textContent},enumerable:!0,configurable:!0}),e.prototype.handleBuildingQuery=function(t){s.Assert.exists(t),(this.queryStateModel.get(a.QueryStateModel.attributesEnum.sort)==a.QueryStateModel.defaultAttributes.sort||this.isSelected())&&this.currentCriteria&&this.currentCriteria.putInQueryBuilder(t.queryBuilder)},e.prototype.handleQuerySuccess=function(t){0==t.results.results.length?c.$$(this.element).addClass("coveo-sort-hidden"):c.$$(this.element).removeClass("coveo-sort-hidden")},e.prototype.handleQueryError=function(t){c.$$(this.element).addClass("coveo-sort-hidden")},e.prototype.isToggle=function(){return this.options.sortCriteria.length>1},e.prototype.isSelected=function(){return d.Utils.exists(this.currentCriteria)},e.prototype.updateAppearance=function(){c.$$(this.element).toggleClass("coveo-selected",this.isSelected()),this.isToggle()&&(c.$$(this.element).removeClass("coveo-ascending"),c.$$(this.element).removeClass("coveo-descending"),this.isSelected()&&c.$$(this.element).addClass("ascending"===this.currentDirection?"coveo-ascending":"coveo-descending"))},e.prototype.updateAccessibilityProperties=function(){this.sortButton.setAttribute("aria-controls",this.resultListsIds);var t=this.currentDirection===this.initialDirection;this.sortButton.setAttribute("aria-checked",""+(this.isSelected()&&t)),this.isToggle()&&(this.directionButton.setAttribute("aria-controls",this.resultListsIds),this.directionButton.setAttribute("aria-checked",""+(this.isSelected()&&!t)))},Object.defineProperty(e.prototype,"resultListsIds",{get:function(){return this.searchInterface.getComponents("ResultList").map(function(t){return t.element.id}).join(" ")},enumerable:!0,configurable:!0}),e.prototype.getDirectionalLabel=function(t){var e=v.l(this.displayedSortText);return t===g.VALID_DIRECTION.DESCENDING?v.l("SortResultsByDescending",e):v.l("SortResultsByAscending",e)},e.prototype.getOmnidirectionalLabel=function(){var t=v.l(this.displayedSortText);return v.l("SortResultsBy",t)},e.prototype.updateQueryStateModel=function(){this.queryStateModel.set(a.QueryStateModel.attributesEnum.sort,this.currentCriteria.toString())},e.ID="Sort",e.doExport=function(){n.exportGlobally({Sort:e,SortCriteria:g.SortCriteria})},e.options={sortCriteria:y.ComponentOptions.buildCustomListOption(function(t){return t.map(function(t){return"string"==typeof t?new g.SortCriteria(t):t})},{required:!0}),caption:y.ComponentOptions.buildLocalizedStringOption({required:!0})},e}(f.Component);e.Sort=S,C.Initialization.registerAutoCreateComponent(S)},295:function(t,e,i){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0}),i(702);var n=i(0),r=i(3),s=i(11),u=i(18),a=i(13),c=i(1),l=i(7),p=i(8),d=i(2),h=i(16),f=i(193),y=i(63),C=i(6),g=function(t){function e(i,o,n){var r=t.call(this,i,e.ID,n)||this;return r.element=i,r.options=o,r.sortComponents=[],r.options=p.ComponentOptions.initComponentOptions(i,e,o),r.removeTabSupport(),r.bind.oneRootElement(h.InitializationEvents.afterInitialization,function(){return r.handleAfterInitialization()}),r.bind.onQueryState(u.MODEL_EVENTS.CHANGE_ONE,a.QUERY_STATE_ATTRIBUTES.SORT,function(t){return r.handleQueryStateChanged(t)}),r.bind.onRootElement(s.QueryEvents.querySuccess,function(t){return r.handleQuerySuccess(t)}),r.bind.onRootElement(s.QueryEvents.queryError,function(t){return r.handleQueryError(t)}),r}return o(e,t),e.prototype.handleAfterInitialization=function(){this.buildDropdown()},e.prototype.clearDropdown=function(){this.dropdown&&this.element.removeChild(this.dropdown.getElement()),this.dropdown=null},e.prototype.buildDropdown=function(){var t=this;this.sortComponents=this.getEnabledSortComponents(),this.clearDropdown(),this.sortComponents.length&&(this.dropdown=new y.Dropdown(function(){return t.handleChange()},this.getValuesForDropdown(),function(e){return t.getCaptionForValue(e)},C.l("SortBy")),this.element.appendChild(this.dropdown.getElement()),this.update())},e.prototype.getEnabledSortComponents=function(){var t=this;return c.$$(this.element).findAll("."+l.Component.computeCssClassNameForType("Sort")).map(function(e){var i=l.Component.get(e,f.Sort);return 1==i.options.sortCriteria.length?i:void t.logger.warn("Each Sort component inside a SortDropdown should have only one sort criteria. Skipping "+i.options.caption+" in the SortDropdown.")}).filter(function(t){return t&&!t.disabled})},e.prototype.getValuesForDropdown=function(){return this.sortComponents.map(function(t){return t.options.sortCriteria.toString()})},e.prototype.handleQueryStateChanged=function(t){this.update()},e.prototype.update=function(){if(this.dropdown){var t=this.queryStateModel.get(a.QueryStateModel.attributesEnum.sort);this.select(t)}},e.prototype.select=function(t,e){void 0===e&&(e=!1);var i=this.getSortIndex(t);i>-1&&this.dropdown.select(i,e),c.$$(this.dropdown.getElement()).toggleClass("coveo-selected",i>-1)},e.prototype.handleQuerySuccess=function(t){return t.results.results.length?(this.buildDropdown(),this.sortComponents.length?void this.showElement():this.hideElement()):this.hideElement()},e.prototype.handleQueryError=function(t){this.hideElement()},e.prototype.handleChange=function(){var t=this.dropdown.getValue(),e=this.getSortIndex(t);e>-1&&this.sortComponents[e].selectAndExecuteQuery()},e.prototype.getCaptionForValue=function(t){var e=this.getSortIndex(t);return e>-1?this.sortComponents[e].options.caption:""},e.prototype.getSortIndex=function(t){return n.findIndex(this.sortComponents,function(e){return e.options.sortCriteria.toString()===t})},e.prototype.hideElement=function(){c.$$(this.element).hide()},e.prototype.showElement=function(){c.$$(this.element).show()},e.ID="SortDropdown",e.options={},e.doExport=function(){r.exportGlobally({SortDropdown:e})},e}(l.Component);e.SortDropdown=g,d.Initialization.registerAutoCreateComponent(g)},504:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=i(0),r=i(5);!function(t){t.RELEVANCY="relevancy",t.DATE="date",t.QRE="qre"}(o=e.VALID_SORT||(e.VALID_SORT={}));var s;!function(t){t.ASCENDING="ascending",t.DESCENDING="descending"}(s=e.VALID_DIRECTION||(e.VALID_DIRECTION={}));var u=function(){function t(e,i){void 0===i&&(i=""),this.sort=e,this.direction=i,t.sortIsField(e)||r.Assert.check(this.isValidSort(e),e+" is not a valid sort criteria. Valid values are "+n.values(o)+" or a valid index sortable index field."),t.sortNeedsDirection(e)?r.Assert.check(this.isValidDirection(i),i+" is not a valid sort criteria direction. Valid values are "+n.values(s)):r.Assert.check(""==i)}return t.prototype.isValidDirection=function(t){return n.chain(s).values().contains(t).value()},t.prototype.isValidSort=function(t){return n.chain(o).values().contains(t).value()},t.sortIsField=function(t){return"@"==t.charAt(0)},t.sortNeedsDirection=function(e){return n.contains(t.sortsNeedingDirection,e)||t.sortIsField(e)},t.sortsNeedingDirection=[o.DATE],t}();e.SortCriterion=u;var a=function(){function t(t){var e=this;this.criteria=[],t.split(";").forEach(function(t){var i=t.match(/\S+/g);e.criteria.push(new u(i[0],i[1]))})}return Object.defineProperty(t.prototype,"direction",{get:function(){return n.first(this.criteria).direction},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sort",{get:function(){return n.first(this.criteria).sort},enumerable:!0,configurable:!0}),t.parse=function(e){return new t(e)},t.prototype.putInQueryBuilder=function(t){r.Assert.exists(t),t.sortCriteria=this.toString().split(";").join(",")},t.prototype.toString=function(){return this.criteria.map(function(t){return t.direction?t.sort+" "+t.direction:""+t.sort}).join(";")},t.prototype.equals=function(t){return t.toString()==this.toString()},t}();e.SortCriteria=a},579:function(t,e){},63:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(1),n=i(6),r=i(0),s=i(3),u=function(){function t(t,e,i,o){void 0===t&&(t=function(t){}),void 0===i&&(i=n.l),this.onChange=t,this.listOfValues=e,this.getDisplayValue=i,this.label=o,this.optionsElement=[],this.buildContent(),this.select(0,!1),this.bindEvents()}return t.doExport=function(){s.exportGlobally({Dropdown:t})},t.prototype.reset=function(){this.select(0,!1)},t.prototype.setId=function(t){o.$$(this.element).setAttribute("id",t)},t.prototype.getElement=function(){return this.element},t.prototype.getValue=function(){return this.selectElement.value},t.prototype.select=function(t,e){void 0===e&&(e=!0),this.selectOption(this.optionsElement[t],e)},t.prototype.build=function(){return this.element},t.prototype.setValue=function(t){var e=this;r.each(this.optionsElement,function(i){o.$$(i).getAttribute("data-value")==t&&e.selectOption(i)})},t.prototype.selectOption=function(t,e){void 0===e&&(e=!0),this.selectElement.value=t.value,e&&this.onChange(this)},t.prototype.buildContent=function(){var t=this;this.selectElement=o.$$("select",{className:"coveo-dropdown"}).el,this.label&&this.selectElement.setAttribute("aria-label",n.l(this.label));var e=this.buildOptions();r.each(e,function(e){o.$$(t.selectElement).append(e)}),this.element=this.selectElement},t.prototype.buildOptions=function(){var t=this,e=[];return r.each(this.listOfValues,function(i){e.push(t.buildOption(i))}),e},t.prototype.buildOption=function(t){var e=o.$$("option");return e.setAttribute("data-value",t),e.setAttribute("value",t),e.text(this.getDisplayValue(t)),this.optionsElement.push(e.el),e.el},t.prototype.bindEvents=function(){var t=this;o.$$(this.selectElement).on("change",function(){return t.onChange(t)})},t}();e.Dropdown=u},702:function(t,e){}});
//# sourceMappingURL=SortDropdown.min__366f55ef8a0decc227de.js.map