webpackJsonpCoveo__temporary([39],{192:function(t,e,i){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0}),i(575);var o=i(3),n=i(11),s=i(5),u=i(18),c=i(13),a=i(1),l=i(15),d=i(12),p=i(4),h=i(119),f=i(7),y=i(8),C=i(2),g=i(498),S=i(16),v=i(6),b=i(0),m=function(t){function e(i,r,o){var a=t.call(this,i,e.ID,o)||this;return a.element=i,a.options=r,a.options=y.ComponentOptions.initComponentOptions(i,e,r),s.Assert.isLargerOrEqualsThan(1,a.options.sortCriteria.length),a.bind.onQueryState(u.MODEL_EVENTS.CHANGE_ONE,c.QUERY_STATE_ATTRIBUTES.SORT,function(){return a.handleQueryStateChanged()}),a.bind.onRootElement(n.QueryEvents.querySuccess,function(t){return a.handleQuerySuccess(t)}),a.bind.onRootElement(n.QueryEvents.buildingQuery,function(t){return a.handleBuildingQuery(t)}),a.bind.onRootElement(n.QueryEvents.queryError,function(t){return a.handleQueryError(t)}),a.ensureDom(),a}return r(e,t),e.prototype.createDom=function(){var t=this,e=a.$$(this.element);e.on("click",function(){return t.selectAndExecuteQuery()});var i=e.text();e.empty(),this.findOrCreateRadioGroup(),this.createSortButton(i),this.isToggle()&&this.createDirectionButton(),this.update()},e.prototype.select=function(t){t?(this.currentCriteria=b.find(this.options.sortCriteria,function(e){return e.direction==t}),this.updateQueryStateModel()):p.Utils.exists(this.currentCriteria)?this.selectNextCriteria():this.selectFirstCriteria()},e.prototype.selectAndExecuteQuery=function(){var t=this.currentCriteria;this.select(),t!=this.currentCriteria&&this.executeSearchQuery()},e.prototype.enable=function(){a.$$(this.element).removeClass("coveo-tab-disabled"),this.update(),t.prototype.enable.call(this)},e.prototype.disable=function(){a.$$(this.element).addClass("coveo-tab-disabled"),t.prototype.disable.call(this)},e.prototype.getCurrentCriteria=function(){return this.currentCriteria},e.prototype.match=function(t){return b.any(this.options.sortCriteria,function(e){return t==e.toString()})},e.prototype.findOrCreateRadioGroup=function(){this.radioGroup=this.findRadioGroup(),this.radioGroup||(this.element.setAttribute("role","radiogroup"),this.radioGroup=this.element)},e.prototype.createSortButton=function(t){var e=this;this.sortButton=a.$$("span").el,this.sortButton.innerText=this.options.caption||t,(new S.AccessibleButton).withElement(this.sortButton).withEnterKeyboardAction(function(){return e.selectAndExecuteQuery()}).withArrowsAction(function(t,i){return e.onArrowPressed(t,i)}).withLabel(this.isToggle()?this.getDirectionalLabel(this.initialDirection):this.getOmnidirectionalLabel()).withRole("radio").build(),this.element.appendChild(this.sortButton)},e.prototype.createDirectionButton=function(){var t=this;this.directionButton=a.$$.apply(void 0,["span",{className:"coveo-icon"}].concat(this.createIcons())).el,(new S.AccessibleButton).withElement(this.directionButton).withSelectAction(function(e){e.stopPropagation(),t.selectNextCriteriaAndExecuteQuery()}).withArrowsAction(function(e,i){return t.onArrowPressed(e,i)}).withLabel(this.getDirectionalLabel(this.initialDirection===g.VALID_DIRECTION.DESCENDING?g.VALID_DIRECTION.ASCENDING:g.VALID_DIRECTION.DESCENDING)).withRole("radio").build(),this.element.appendChild(this.directionButton)},e.prototype.onArrowPressed=function(t,e){this.selectNextRadioButton(t===S.ArrowDirection.RIGHT||t===S.ArrowDirection.DOWN?1:-1),e.stopPropagation()},e.prototype.createIcons=function(){var t=a.$$("span",{className:"coveo-sort-icon-ascending"},d.SVGIcons.icons.arrowUp);l.SVGDom.addClassToSVGInContainer(t.el,"coveo-sort-icon-ascending-svg");var e=a.$$("span",{className:"coveo-sort-icon-descending"},d.SVGIcons.icons.arrowDown);return l.SVGDom.addClassToSVGInContainer(e.el,"coveo-sort-icon-descending-svg"),[t,e]},e.prototype.findRadioGroup=function(t){return void 0===t&&(t=this.element),t&&t!==document.body?"radiogroup"===t.getAttribute("role")?t:this.findRadioGroup(t.parentElement):null},e.prototype.selectNextRadioButton=function(t){void 0===t&&(t=1);var e,i=a.$$(this.radioGroup).findAll('[role="radio"]'),r=b.findIndex(i,function(t){return"true"===t.getAttribute("aria-checked")});e=-1!==r?(r+t+i.length)%i.length:t>=0?0:i.length-1;var o=i[e];o.focus(),o.click()},e.prototype.executeSearchQuery=function(){var t=this;this.queryController.deferExecuteQuery({beforeExecuteQuery:function(){return h.logSortEvent(t.usageAnalytics,t.currentCriteria.sort+t.currentCriteria.direction)}})},e.prototype.selectFirstCriteria=function(){this.currentCriteria=this.options.sortCriteria[0],this.updateQueryStateModel()},e.prototype.selectNextCriteria=function(){var t=this.currentCriteria?this.options.sortCriteria.indexOf(this.currentCriteria):0;this.currentCriteria=this.options.sortCriteria[(t+1)%this.options.sortCriteria.length],this.updateQueryStateModel()},e.prototype.selectNextCriteriaAndExecuteQuery=function(){var t=this.currentCriteria;this.selectNextCriteria(),t!=this.currentCriteria&&this.executeSearchQuery()},e.prototype.handleQueryStateChanged=function(){this.update()},e.prototype.update=function(){var t=this.queryStateModel.get(c.QueryStateModel.attributesEnum.sort);if(p.Utils.isNonEmptyString(t)){var e=g.SortCriteria.parse(t);this.currentCriteria=b.find(this.options.sortCriteria,function(t){return e.equals(t)})}else this.currentCriteria=null;this.updateAppearance(),this.updateAccessibilityProperties()},Object.defineProperty(e.prototype,"captionIsDefined",{get:function(){return p.Utils.isNonEmptyString(this.options.caption)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentDirection",{get:function(){return this.currentCriteria?this.currentCriteria.direction:this.initialDirection},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"initialDirection",{get:function(){return this.options.sortCriteria[0].direction},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayedSortText",{get:function(){return this.captionIsDefined?this.options.caption:this.element.textContent},enumerable:!0,configurable:!0}),e.prototype.handleBuildingQuery=function(t){s.Assert.exists(t),(this.queryStateModel.get(c.QueryStateModel.attributesEnum.sort)==c.QueryStateModel.defaultAttributes.sort||this.isSelected())&&this.currentCriteria&&this.currentCriteria.putInQueryBuilder(t.queryBuilder)},e.prototype.handleQuerySuccess=function(t){0==t.results.results.length?a.$$(this.element).addClass("coveo-sort-hidden"):a.$$(this.element).removeClass("coveo-sort-hidden")},e.prototype.handleQueryError=function(t){a.$$(this.element).addClass("coveo-sort-hidden")},e.prototype.isToggle=function(){return this.options.sortCriteria.length>1},e.prototype.isSelected=function(){return p.Utils.exists(this.currentCriteria)},e.prototype.updateAppearance=function(){a.$$(this.element).toggleClass("coveo-selected",this.isSelected()),this.isToggle()&&(a.$$(this.element).removeClass("coveo-ascending"),a.$$(this.element).removeClass("coveo-descending"),this.isSelected()&&a.$$(this.element).addClass("ascending"===this.currentDirection?"coveo-ascending":"coveo-descending"))},e.prototype.updateAccessibilityProperties=function(){this.sortButton.setAttribute("aria-controls",this.resultListsIds);var t=this.currentDirection===this.initialDirection;this.sortButton.setAttribute("aria-checked",""+(this.isSelected()&&t)),this.isToggle()&&(this.directionButton.setAttribute("aria-controls",this.resultListsIds),this.directionButton.setAttribute("aria-checked",""+(this.isSelected()&&!t)))},Object.defineProperty(e.prototype,"resultListsIds",{get:function(){return this.searchInterface.getComponents("ResultList").map(function(t){return t.element.id}).join(" ")},enumerable:!0,configurable:!0}),e.prototype.getDirectionalLabel=function(t){var e=v.l(this.displayedSortText);return t===g.VALID_DIRECTION.DESCENDING?v.l("SortResultsByDescending",e):v.l("SortResultsByAscending",e)},e.prototype.getOmnidirectionalLabel=function(){var t=v.l(this.displayedSortText);return v.l("SortResultsBy",t)},e.prototype.updateQueryStateModel=function(){this.queryStateModel.set(c.QueryStateModel.attributesEnum.sort,this.currentCriteria.toString())},e.ID="Sort",e.doExport=function(){o.exportGlobally({Sort:e,SortCriteria:g.SortCriteria})},e.options={sortCriteria:y.ComponentOptions.buildCustomListOption(function(t){return t.map(function(t){return"string"==typeof t?new g.SortCriteria(t):t})},{required:!0}),caption:y.ComponentOptions.buildLocalizedStringOption({required:!0})},e}(f.Component);e.Sort=m,C.Initialization.registerAutoCreateComponent(m)},498:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=i(0),n=i(5);!function(t){t.RELEVANCY="relevancy",t.DATE="date",t.QRE="qre"}(r=e.VALID_SORT||(e.VALID_SORT={}));var s;!function(t){t.ASCENDING="ascending",t.DESCENDING="descending"}(s=e.VALID_DIRECTION||(e.VALID_DIRECTION={}));var u=function(){function t(e,i){void 0===i&&(i=""),this.sort=e,this.direction=i,t.sortIsField(e)||n.Assert.check(this.isValidSort(e),e+" is not a valid sort criteria. Valid values are "+o.values(r)+" or a valid index sortable index field."),t.sortNeedsDirection(e)?n.Assert.check(this.isValidDirection(i),i+" is not a valid sort criteria direction. Valid values are "+o.values(s)):n.Assert.check(""==i)}return t.prototype.isValidDirection=function(t){return o.chain(s).values().contains(t).value()},t.prototype.isValidSort=function(t){return o.chain(r).values().contains(t).value()},t.sortIsField=function(t){return"@"==t.charAt(0)},t.sortNeedsDirection=function(e){return o.contains(t.sortsNeedingDirection,e)||t.sortIsField(e)},t.sortsNeedingDirection=[r.DATE],t}();e.SortCriterion=u;var c=function(){function t(t){var e=this;this.criteria=[],t.split(";").forEach(function(t){var i=t.match(/\S+/g);e.criteria.push(new u(i[0],i[1]))})}return Object.defineProperty(t.prototype,"direction",{get:function(){return o.first(this.criteria).direction},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sort",{get:function(){return o.first(this.criteria).sort},enumerable:!0,configurable:!0}),t.parse=function(e){return new t(e)},t.prototype.putInQueryBuilder=function(t){n.Assert.exists(t),t.sortCriteria=this.toString().split(";").join(",")},t.prototype.toString=function(){return this.criteria.map(function(t){return t.direction?t.sort+" "+t.direction:""+t.sort}).join(";")},t.prototype.equals=function(t){return t.toString()==this.toString()},t}();e.SortCriteria=c},575:function(t,e){}});
//# sourceMappingURL=Sort.min__10130b8bbdbe87aa2b95.js.map