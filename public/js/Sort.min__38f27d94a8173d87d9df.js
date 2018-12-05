webpackJsonpCoveo__temporary([22],{14:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=function(){function t(){}return t.addClassToSVGInContainer=function(e,i){var n=e.querySelector("svg");n.setAttribute("class",""+t.getClass(n)+i)},t.removeClassFromSVGInContainer=function(e,i){var n=e.querySelector("svg");n.setAttribute("class",t.getClass(n).replace(i,""))},t.addStyleToSVGInContainer=function(t,e){var i=t.querySelector("svg");n.each(e,function(t,e){i.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=r},18:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(11),r=i(28),o=i(1);i(367);var s=function(){function t(){this.logger=new n.Logger(this)}return t.prototype.withOwner=function(t){return this.eventOwner=t,this},t.prototype.withElement=function(t){return t instanceof HTMLElement?this.element=o.$$(t):this.element=t,this},t.prototype.withLabel=function(t){return this.label=t,this},t.prototype.withTitle=function(t){return this.title=t,this},t.prototype.withSelectAction=function(t){return this.clickAction=t,this.enterKeyboardAction=t,this},t.prototype.withClickAction=function(t){return this.clickAction=t,this},t.prototype.withEnterKeyboardAction=function(t){return this.enterKeyboardAction=t,this},t.prototype.withFocusAndMouseEnterAction=function(t){return this.focusAction=t,this.mouseenterAction=t,this},t.prototype.withFocusAction=function(t){return this.focusAction=t,this},t.prototype.withMouseEnterAction=function(t){return this.mouseenterAction=t,this},t.prototype.withBlurAndMouseLeaveAction=function(t){return this.mouseleaveAction=t,this.blurAction=t,this},t.prototype.withMouseLeaveAction=function(t){return this.mouseleaveAction=t,this},t.prototype.withBlurAction=function(t){return this.blurAction=t,this},t.prototype.build=function(){return this.element||(this.element=o.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureTitle(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},t.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var t=this,e="coveo-accessible-button-pressed",i="coveo-accessible-button-focused";o.$$(this.element).addClass("coveo-accessible-button"),o.$$(this.element).on("mousedown",function(){o.$$(t.element).addClass(e),o.$$(t.element).removeClass(i)}),o.$$(this.element).on("mouseup",function(){return o.$$(t.element).removeClass(e)}),o.$$(this.element).on("focus",function(){o.$$(t.element).hasClass(e)||o.$$(t.element).addClass(i)}),o.$$(this.element).on("blur",function(){return o.$$(t.element).removeClass(i)})},t.prototype.ensureCorrectRole=function(){this.element.getAttribute("role")||this.element.setAttribute("role","button")},t.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label)},t.prototype.ensureTitle=function(){this.title&&this.element.setAttribute("title",this.title)},t.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},t.prototype.ensureSelectAction=function(){var t=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",r.KeyboardUtils.keypressAction(r.KEYBOARD.ENTER,function(e){return t.enterKeyboardAction(e)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},t.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},t.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},t.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},t.prototype.bindEvent=function(t,e){this.eventOwner?this.eventOwner.on(this.element,t,e):o.$$(this.element).on(t,e)},t}();e.AccessibleButton=s},220:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),i(482);var r=i(0),o=i(3),s=i(10),c=i(5),u=i(15),a=i(12),l=i(1),h=i(14),p=i(13),d=i(4),f=i(85),y=i(6),v=i(8),b=i(2),C=i(357),A=i(18),m=i(7),g=function(t){function e(i,n,r){var o=t.call(this,i,e.ID,r)||this;if(o.element=i,o.options=n,o.options=v.ComponentOptions.initComponentOptions(i,e,n),c.Assert.isLargerOrEqualsThan(1,o.options.sortCriteria.length),o.bind.onQueryState(u.MODEL_EVENTS.CHANGE_ONE,a.QUERY_STATE_ATTRIBUTES.SORT,function(t){return o.handleQueryStateChanged(t)}),o.bind.onRootElement(s.QueryEvents.querySuccess,function(t){return o.handleQuerySuccess(t)}),o.bind.onRootElement(s.QueryEvents.buildingQuery,function(t){return o.handleBuildingQuery(t)}),o.bind.onRootElement(s.QueryEvents.queryError,function(t){return o.handleQueryError(t)}),o.setTextToCaptionIfDefined(),o.addAccessiblityAttributes(),o.isToggle()){o.icon=l.$$("span",{className:"coveo-icon"}).el;var d=l.$$("span",{className:"coveo-sort-icon-ascending"},p.SVGIcons.icons.arrowUp);h.SVGDom.addClassToSVGInContainer(d.el,"coveo-sort-icon-ascending-svg");var f=l.$$("span",{className:"coveo-sort-icon-descending"},p.SVGIcons.icons.arrowDown);h.SVGDom.addClassToSVGInContainer(f.el,"coveo-sort-icon-descending-svg"),o.icon.appendChild(d.el),o.icon.appendChild(f.el),o.element.appendChild(o.icon)}return o.update(),o.updateAppearance(),o}return n(e,t),e.prototype.select=function(t){if(t)this.currentCriteria=r.find(this.options.sortCriteria,function(e){return e.direction==t});else if(d.Utils.exists(this.currentCriteria)){var e=r.indexOf(this.options.sortCriteria,this.currentCriteria);c.Assert.check(e>=0),this.currentCriteria=this.options.sortCriteria[(e+1)%this.options.sortCriteria.length]}else this.currentCriteria=this.options.sortCriteria[0];this.queryStateModel.set(a.QueryStateModel.attributesEnum.sort,this.currentCriteria.toString())},e.prototype.enable=function(){l.$$(this.element).removeClass("coveo-tab-disabled"),this.update(),t.prototype.enable.call(this)},e.prototype.disable=function(){l.$$(this.element).addClass("coveo-tab-disabled"),t.prototype.disable.call(this)},e.prototype.getCurrentCriteria=function(){return this.currentCriteria},e.prototype.match=function(t){return r.any(this.options.sortCriteria,function(e){return t==e.toString()})},e.prototype.handleQueryStateChanged=function(t){this.update()},e.prototype.update=function(){var t=this.queryStateModel.get(a.QueryStateModel.attributesEnum.sort);if(d.Utils.isNonEmptyString(t)){var e=C.SortCriteria.parse(t);this.currentCriteria=r.find(this.options.sortCriteria,function(t){return e.equals(t)})}else this.currentCriteria=null;this.updateAppearance()},e.prototype.setTextToCaptionIfDefined=function(){this.captionIsDefined&&l.$$(this.element).text(this.options.caption)},Object.defineProperty(e.prototype,"captionIsDefined",{get:function(){return d.Utils.isNonEmptyString(this.options.caption)},enumerable:!0,configurable:!0}),e.prototype.addAccessiblityAttributes=function(){var t=this,e=m.l(this.displayedSortText);(new A.AccessibleButton).withElement(this.element).withSelectAction(function(){return t.handleClick()}).withLabel(m.l("SortResultsBy",e)).build()},Object.defineProperty(e.prototype,"displayedSortText",{get:function(){return this.captionIsDefined?this.options.caption:this.element.textContent},enumerable:!0,configurable:!0}),e.prototype.handleBuildingQuery=function(t){c.Assert.exists(t),(this.queryStateModel.get(a.QueryStateModel.attributesEnum.sort)==a.QueryStateModel.defaultAttributes.sort||this.isSelected())&&this.currentCriteria&&this.currentCriteria.putInQueryBuilder(t.queryBuilder)},e.prototype.handleQuerySuccess=function(t){0==t.results.results.length?l.$$(this.element).addClass("coveo-sort-hidden"):l.$$(this.element).removeClass("coveo-sort-hidden")},e.prototype.handleQueryError=function(t){l.$$(this.element).addClass("coveo-sort-hidden")},e.prototype.handleClick=function(){var t=this,e=this.currentCriteria;this.select(),e!=this.currentCriteria&&this.queryController.deferExecuteQuery({beforeExecuteQuery:function(){return f.logSortEvent(t.usageAnalytics,t.currentCriteria.sort+t.currentCriteria.direction)}})},e.prototype.isToggle=function(){return this.options.sortCriteria.length>1},e.prototype.isSelected=function(){return d.Utils.exists(this.currentCriteria)},e.prototype.updateAppearance=function(){if(l.$$(this.element).toggleClass("coveo-selected",this.isSelected()),this.isToggle()){var t=this.currentCriteria?this.currentCriteria.direction:this.options.sortCriteria[0].direction;l.$$(this.element).removeClass("coveo-ascending"),l.$$(this.element).removeClass("coveo-descending"),this.isSelected()&&l.$$(this.element).addClass("ascending"===t?"coveo-ascending":"coveo-descending")}},e.ID="Sort",e.doExport=function(){o.exportGlobally({Sort:e,SortCriteria:C.SortCriteria})},e.options={sortCriteria:v.ComponentOptions.buildCustomListOption(function(t){return r.map(t,function(t){return"string"==typeof t?new C.SortCriteria(t):t})},{required:!0}),caption:v.ComponentOptions.buildLocalizedStringOption({required:!0})},e}(y.Component);e.Sort=g,b.Initialization.registerAutoCreateComponent(g)},357:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=i(0),o=i(5);!function(t){t.RELEVANCY="relevancy",t.DATE="date",t.QRE="qre"}(n=e.VALID_SORT||(e.VALID_SORT={}));var s;!function(t){t.ASCENDING="ascending",t.DESCENDING="descending"}(s=e.VALID_DIRECTION||(e.VALID_DIRECTION={}));var c=function(){function t(e,i){void 0===i&&(i=""),this.sort=e,this.direction=i,t.sortIsField(e)||o.Assert.check(this.isValidSort(e),e+" is not a valid sort criteria. Valid values are "+r.values(n)+" or a valid index sortable index field."),t.sortNeedsDirection(e)?o.Assert.check(this.isValidDirection(i),i+" is not a valid sort criteria direction. Valid values are "+r.values(s)):o.Assert.check(""==i)}return t.prototype.isValidDirection=function(t){return r.chain(s).values().contains(t).value()},t.prototype.isValidSort=function(t){return r.chain(n).values().contains(t).value()},t.sortIsField=function(t){return"@"==t.charAt(0)},t.sortNeedsDirection=function(e){return r.contains(t.sortsNeedingDirection,e)||t.sortIsField(e)},t.sortsNeedingDirection=[n.DATE],t}();e.SortCriterion=c;var u=function(){function t(t){var e=this;this.criteria=[],t.split(";").forEach(function(t){var i=t.match(/\S+/g);e.criteria.push(new c(i[0],i[1]))})}return Object.defineProperty(t.prototype,"direction",{get:function(){return r.first(this.criteria).direction},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sort",{get:function(){return r.first(this.criteria).sort},enumerable:!0,configurable:!0}),t.parse=function(e){return new t(e)},t.prototype.putInQueryBuilder=function(t){o.Assert.exists(t),t.sortCriteria=this.toString().split(";").join(",")},t.prototype.toString=function(){return this.criteria.map(function(t){return t.direction?t.sort+" "+t.direction:""+t.sort}).join(";")},t.prototype.equals=function(t){return t.toString()==this.toString()},t}();e.SortCriteria=u},367:function(t,e){},482:function(t,e){}});