webpackJsonpCoveo__temporary([22],{14:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),n=function(){function t(){}return t.addClassToSVGInContainer=function(e,r){var i=e.querySelector("svg");i.setAttribute("class",""+t.getClass(i)+r)},t.removeClassFromSVGInContainer=function(e,r){var i=e.querySelector("svg");i.setAttribute("class",t.getClass(i).replace(r,""))},t.addStyleToSVGInContainer=function(t,e){var r=t.querySelector("svg");i.each(e,function(t,e){r.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=n},206:function(t,e,r){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=r(6),o=r(320),s=r(7),a=r(5),c=r(4),u=r(2),l=r(16),d=r(12),p=r(10),h=r(1),C=r(20),y=r(0),f=r(3);r(431);var v=r(13),g=r(14),S=r(81),m=function(t){function e(r,i,n){var o=t.call(this,r,e.ID,n)||this;o.element=r,o.options=i,o.options=s.ComponentOptions.initComponentOptions(r,e,i),a.Assert.isLargerOrEqualsThan(1,o.options.sortCriteria.length),o.bind.onQueryState(l.MODEL_EVENTS.CHANGE_ONE,d.QUERY_STATE_ATTRIBUTES.SORT,function(t){return o.handleQueryStateChanged(t)}),o.bind.onRootElement(p.QueryEvents.querySuccess,function(t){return o.handleQuerySuccess(t)}),o.bind.onRootElement(p.QueryEvents.buildingQuery,function(t){return o.handleBuildingQuery(t)}),o.bind.onRootElement(p.QueryEvents.queryError,function(t){return o.handleQueryError(t)});var h=function(){return o.handleClick()};if(o.bind.on(o.element,"click",h),o.bind.on(o.element,"keyup",C.KeyboardUtils.keypressAction(C.KEYBOARD.ENTER,h)),o.element.setAttribute("tabindex","0"),c.Utils.isNonEmptyString(o.options.caption)&&u.$$(o.element).text(o.options.caption),o.isToggle()){o.icon=u.$$("span",{className:"coveo-icon"}).el;var y=u.$$("span",{className:"coveo-sort-icon-ascending"},v.SVGIcons.icons.arrowUp);g.SVGDom.addClassToSVGInContainer(y.el,"coveo-sort-icon-ascending-svg");var f=u.$$("span",{className:"coveo-sort-icon-descending"},v.SVGIcons.icons.arrowDown);g.SVGDom.addClassToSVGInContainer(f.el,"coveo-sort-icon-descending-svg"),o.icon.appendChild(y.el),o.icon.appendChild(f.el),o.element.appendChild(o.icon)}return o.update(),o.updateAppearance(),o}return i(e,t),e.prototype.select=function(t){if(t)this.currentCriteria=y.find(this.options.sortCriteria,function(e){return e.direction==t});else if(c.Utils.exists(this.currentCriteria)){var e=y.indexOf(this.options.sortCriteria,this.currentCriteria);a.Assert.check(e>=0),this.currentCriteria=this.options.sortCriteria[(e+1)%this.options.sortCriteria.length]}else this.currentCriteria=this.options.sortCriteria[0];this.queryStateModel.set(d.QueryStateModel.attributesEnum.sort,this.currentCriteria.toString())},e.prototype.enable=function(){u.$$(this.element).removeClass("coveo-tab-disabled"),this.update(),t.prototype.enable.call(this)},e.prototype.disable=function(){u.$$(this.element).addClass("coveo-tab-disabled"),t.prototype.disable.call(this)},e.prototype.getCurrentCriteria=function(){return this.currentCriteria},e.prototype.match=function(t){return y.any(this.options.sortCriteria,function(e){return t==e.toString()})},e.prototype.handleQueryStateChanged=function(t){this.update()},e.prototype.update=function(){var t=this.queryStateModel.get(d.QueryStateModel.attributesEnum.sort);if(c.Utils.isNonEmptyString(t)){var e=o.SortCriteria.parse(t);this.currentCriteria=y.find(this.options.sortCriteria,function(t){return e.equals(t)})}else this.currentCriteria=null;this.updateAppearance()},e.prototype.handleBuildingQuery=function(t){a.Assert.exists(t),(this.queryStateModel.get(d.QueryStateModel.attributesEnum.sort)==d.QueryStateModel.defaultAttributes.sort||this.isSelected())&&this.currentCriteria&&this.currentCriteria.putInQueryBuilder(t.queryBuilder)},e.prototype.handleQuerySuccess=function(t){0==t.results.results.length?u.$$(this.element).addClass("coveo-sort-hidden"):u.$$(this.element).removeClass("coveo-sort-hidden")},e.prototype.handleQueryError=function(t){u.$$(this.element).addClass("coveo-sort-hidden")},e.prototype.handleClick=function(){var t=this,e=this.currentCriteria;this.select(),e!=this.currentCriteria&&this.queryController.deferExecuteQuery({beforeExecuteQuery:function(){return S.logSortEvent(t.usageAnalytics,t.currentCriteria.sort+t.currentCriteria.direction)}})},e.prototype.isToggle=function(){return this.options.sortCriteria.length>1},e.prototype.isSelected=function(){return c.Utils.exists(this.currentCriteria)},e.prototype.updateAppearance=function(){if(u.$$(this.element).toggleClass("coveo-selected",this.isSelected()),this.isToggle()){var t=this.currentCriteria?this.currentCriteria.direction:this.options.sortCriteria[0].direction;u.$$(this.element).removeClass("coveo-ascending"),u.$$(this.element).removeClass("coveo-descending"),this.isSelected()&&u.$$(this.element).addClass("ascending"===t?"coveo-ascending":"coveo-descending")}},e.ID="Sort",e.doExport=function(){f.exportGlobally({Sort:e,SortCriteria:o.SortCriteria})},e.options={sortCriteria:s.ComponentOptions.buildCustomListOption(function(t){return y.map(t,function(t){return"string"==typeof t?o.SortCriteria.parse(t):t})},{required:!0}),caption:s.ComponentOptions.buildLocalizedStringOption({required:!0})},e}(n.Component);e.Sort=m,h.Initialization.registerAutoCreateComponent(m)},320:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(5),n=r(4),o=r(0),s=function(){function t(e,r){void 0===r&&(r=""),this.sort=e,this.direction=r,i.Assert.isNonEmptyString(e),i.Assert.check(o.contains(t.validSorts,e)||t.sortIsField(e)),t.sortNeedsDirection(e)?i.Assert.check(o.contains(t.validDirections,r)):i.Assert.check(""==r)}return t.parse=function(e){i.Assert.isNonEmptyString(e);var r=e.match(/\S+/g);return new t(r[0],r[1])},t.prototype.putInQueryBuilder=function(e){i.Assert.exists(e),t.sortIsField(this.sort)?(e.sortCriteria="field"+this.direction,e.sortField=this.sort):""!=this.direction?e.sortCriteria=this.sort+this.direction:e.sortCriteria=this.sort},t.prototype.getValueFromResult=function(e){return i.Assert.exists(e),t.sortIsField(this.sort)?n.Utils.getFieldValue(e,this.sort):"date"==this.sort?e.raw.date:void i.Assert.fail("Cannot retrieve value: "+this.sort)},t.prototype.toString=function(){return n.Utils.isNonEmptyString(this.direction)?this.sort+" "+this.direction:this.sort},t.prototype.equals=function(t){return i.Assert.exists(t),t.sort==this.sort&&t.direction==this.direction},t.sortIsField=function(t){return"@"==t.charAt(0)},t.sortNeedsDirection=function(e){return o.contains(t.sortsNeedingDirection,e)||t.sortIsField(e)},t.validSorts=["relevancy","date","qre"],t.sortsNeedingDirection=["date"],t.validDirections=["ascending","descending"],t}();e.SortCriteria=s},431:function(t,e){}});