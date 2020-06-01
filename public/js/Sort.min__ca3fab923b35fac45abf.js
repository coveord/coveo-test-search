webpackJsonpCoveo__temporary([37],{189:function(t,e,i){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0}),i(562);var n=i(0),o=i(3),s=i(11),c=i(5),a=i(17),u=i(13),l=i(1),p=i(14),d=i(12),h=i(4),f=i(119),y=i(7),C=i(8),g=i(2),b=i(487),S=i(16),v=i(6),A=function(t){function e(i,r,n){var o=t.call(this,i,e.ID,n)||this;if(o.element=i,o.options=r,o.options=C.ComponentOptions.initComponentOptions(i,e,r),c.Assert.isLargerOrEqualsThan(1,o.options.sortCriteria.length),o.bind.onQueryState(a.MODEL_EVENTS.CHANGE_ONE,u.QUERY_STATE_ATTRIBUTES.SORT,function(t){return o.handleQueryStateChanged(t)}),o.bind.onRootElement(s.QueryEvents.querySuccess,function(t){return o.handleQuerySuccess(t)}),o.bind.onRootElement(s.QueryEvents.buildingQuery,function(t){return o.handleBuildingQuery(t)}),o.bind.onRootElement(s.QueryEvents.queryError,function(t){return o.handleQueryError(t)}),o.setTextToCaptionIfDefined(),o.addAccessiblityAttributes(),o.isToggle()){o.icon=l.$$("span",{className:"coveo-icon"}).el;var h=l.$$("span",{className:"coveo-sort-icon-ascending"},d.SVGIcons.icons.arrowUp);p.SVGDom.addClassToSVGInContainer(h.el,"coveo-sort-icon-ascending-svg");var f=l.$$("span",{className:"coveo-sort-icon-descending"},d.SVGIcons.icons.arrowDown);p.SVGDom.addClassToSVGInContainer(f.el,"coveo-sort-icon-descending-svg"),o.icon.appendChild(h.el),o.icon.appendChild(f.el),o.element.appendChild(o.icon)}return o.update(),o.updateAppearance(),o}return r(e,t),e.prototype.select=function(t){if(t)this.currentCriteria=n.find(this.options.sortCriteria,function(e){return e.direction==t});else if(h.Utils.exists(this.currentCriteria)){var e=n.indexOf(this.options.sortCriteria,this.currentCriteria);c.Assert.check(e>=0),this.currentCriteria=this.options.sortCriteria[(e+1)%this.options.sortCriteria.length]}else this.currentCriteria=this.options.sortCriteria[0];this.queryStateModel.set(u.QueryStateModel.attributesEnum.sort,this.currentCriteria.toString())},e.prototype.selectAndExecuteQuery=function(){var t=this,e=this.currentCriteria;this.select(),e!=this.currentCriteria&&this.queryController.deferExecuteQuery({beforeExecuteQuery:function(){return f.logSortEvent(t.usageAnalytics,t.currentCriteria.sort+t.currentCriteria.direction)}})},e.prototype.enable=function(){l.$$(this.element).removeClass("coveo-tab-disabled"),this.update(),t.prototype.enable.call(this)},e.prototype.disable=function(){l.$$(this.element).addClass("coveo-tab-disabled"),t.prototype.disable.call(this)},e.prototype.getCurrentCriteria=function(){return this.currentCriteria},e.prototype.match=function(t){return n.any(this.options.sortCriteria,function(e){return t==e.toString()})},e.prototype.handleQueryStateChanged=function(t){this.update()},e.prototype.update=function(){var t=this.queryStateModel.get(u.QueryStateModel.attributesEnum.sort);if(h.Utils.isNonEmptyString(t)){var e=b.SortCriteria.parse(t);this.currentCriteria=n.find(this.options.sortCriteria,function(t){return e.equals(t)})}else this.currentCriteria=null;this.updateAppearance(),this.updateAccessibilityProperties()},e.prototype.setTextToCaptionIfDefined=function(){this.captionIsDefined&&l.$$(this.element).text(this.options.caption)},Object.defineProperty(e.prototype,"captionIsDefined",{get:function(){return h.Utils.isNonEmptyString(this.options.caption)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentDirection",{get:function(){return this.currentCriteria?this.currentCriteria.direction:this.options.sortCriteria[0].direction},enumerable:!0,configurable:!0}),e.prototype.addAccessiblityAttributes=function(){var t=this;(new S.AccessibleButton).withElement(this.element).withSelectAction(function(){return t.handleClick()}).withLabel(this.getAccessibleLabel()).build(),this.updateAccessibleSelectedState()},Object.defineProperty(e.prototype,"displayedSortText",{get:function(){return this.captionIsDefined?this.options.caption:this.element.textContent},enumerable:!0,configurable:!0}),e.prototype.handleBuildingQuery=function(t){c.Assert.exists(t),(this.queryStateModel.get(u.QueryStateModel.attributesEnum.sort)==u.QueryStateModel.defaultAttributes.sort||this.isSelected())&&this.currentCriteria&&this.currentCriteria.putInQueryBuilder(t.queryBuilder)},e.prototype.handleQuerySuccess=function(t){0==t.results.results.length?l.$$(this.element).addClass("coveo-sort-hidden"):l.$$(this.element).removeClass("coveo-sort-hidden")},e.prototype.handleQueryError=function(t){l.$$(this.element).addClass("coveo-sort-hidden")},e.prototype.handleClick=function(){this.selectAndExecuteQuery()},e.prototype.isToggle=function(){return this.options.sortCriteria.length>1},e.prototype.isSelected=function(){return h.Utils.exists(this.currentCriteria)},e.prototype.updateAppearance=function(){l.$$(this.element).toggleClass("coveo-selected",this.isSelected()),this.isToggle()&&(l.$$(this.element).removeClass("coveo-ascending"),l.$$(this.element).removeClass("coveo-descending"),this.isSelected()&&l.$$(this.element).addClass("ascending"===this.currentDirection?"coveo-ascending":"coveo-descending"))},e.prototype.updateAccessibilityProperties=function(){this.updateAccessibleSelectedState(),this.updateAccessibleLabel()},e.prototype.updateAccessibleSelectedState=function(){this.element.setAttribute("aria-pressed",this.isSelected().toString())},e.prototype.updateAccessibleLabel=function(){this.element.setAttribute("aria-label",this.getAccessibleLabel())},e.prototype.getAccessibleLabel=function(){return this.isToggle()?this.getAccessibleLabelWithSort():this.getAccessibleLabelWithoutSort()},e.prototype.getAccessibleLabelWithSort=function(){var t=v.l(this.displayedSortText);return this.isSelected()?"ascending"===this.currentDirection?v.l("SortResultsByDescending",t):v.l("SortResultsByAscending",t):"ascending"===this.currentDirection?v.l("SortResultsByAscending",t):v.l("SortResultsByDescending",t)},e.prototype.getAccessibleLabelWithoutSort=function(){var t=v.l(this.displayedSortText);return v.l("SortResultsBy",t)},e.ID="Sort",e.doExport=function(){o.exportGlobally({Sort:e,SortCriteria:b.SortCriteria})},e.options={sortCriteria:C.ComponentOptions.buildCustomListOption(function(t){return n.map(t,function(t){return"string"==typeof t?new b.SortCriteria(t):t})},{required:!0}),caption:C.ComponentOptions.buildLocalizedStringOption({required:!0})},e}(y.Component);e.Sort=A,g.Initialization.registerAutoCreateComponent(A)},487:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,n=i(0),o=i(5);!function(t){t.RELEVANCY="relevancy",t.DATE="date",t.QRE="qre"}(r=e.VALID_SORT||(e.VALID_SORT={}));var s;!function(t){t.ASCENDING="ascending",t.DESCENDING="descending"}(s=e.VALID_DIRECTION||(e.VALID_DIRECTION={}));var c=function(){function t(e,i){void 0===i&&(i=""),this.sort=e,this.direction=i,t.sortIsField(e)||o.Assert.check(this.isValidSort(e),e+" is not a valid sort criteria. Valid values are "+n.values(r)+" or a valid index sortable index field."),t.sortNeedsDirection(e)?o.Assert.check(this.isValidDirection(i),i+" is not a valid sort criteria direction. Valid values are "+n.values(s)):o.Assert.check(""==i)}return t.prototype.isValidDirection=function(t){return n.chain(s).values().contains(t).value()},t.prototype.isValidSort=function(t){return n.chain(r).values().contains(t).value()},t.sortIsField=function(t){return"@"==t.charAt(0)},t.sortNeedsDirection=function(e){return n.contains(t.sortsNeedingDirection,e)||t.sortIsField(e)},t.sortsNeedingDirection=[r.DATE],t}();e.SortCriterion=c;var a=function(){function t(t){var e=this;this.criteria=[],t.split(";").forEach(function(t){var i=t.match(/\S+/g);e.criteria.push(new c(i[0],i[1]))})}return Object.defineProperty(t.prototype,"direction",{get:function(){return n.first(this.criteria).direction},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sort",{get:function(){return n.first(this.criteria).sort},enumerable:!0,configurable:!0}),t.parse=function(e){return new t(e)},t.prototype.putInQueryBuilder=function(t){o.Assert.exists(t),t.sortCriteria=this.toString().split(";").join(",")},t.prototype.toString=function(){return this.criteria.map(function(t){return t.direction?t.sort+" "+t.direction:""+t.sort}).join(";")},t.prototype.equals=function(t){return t.toString()==this.toString()},t}();e.SortCriteria=a},562:function(t,e){}});