webpackJsonpCoveo__temporary([30],{14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(){function e(){}return e.addClassToSVGInContainer=function(t,n){var r=t.querySelector("svg");r.setAttribute("class",""+e.getClass(r)+n)},e.removeClassFromSVGInContainer=function(t,n){var r=t.querySelector("svg");r.setAttribute("class",e.getClass(r).replace(n,""))},e.addStyleToSVGInContainer=function(e,t){var n=e.querySelector("svg");r.each(t,function(e,t){n.style[t]=e})},e.getClass=function(e){var t=e.getAttribute("class");return t?t+" ":""},e}();t.SVGDom=o},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),o=n(28),i=n(1);n(364);var s=function(){function e(){this.logger=new r.Logger(this)}return e.prototype.withOwner=function(e){return this.eventOwner=e,this},e.prototype.withElement=function(e){return e instanceof HTMLElement?this.element=i.$$(e):this.element=e,this},e.prototype.withLabel=function(e){return this.label=e,this},e.prototype.withTitle=function(e){return this.title=e,this},e.prototype.withSelectAction=function(e){return this.clickAction=e,this.enterKeyboardAction=e,this},e.prototype.withClickAction=function(e){return this.clickAction=e,this},e.prototype.withEnterKeyboardAction=function(e){return this.enterKeyboardAction=e,this},e.prototype.withFocusAndMouseEnterAction=function(e){return this.focusAction=e,this.mouseenterAction=e,this},e.prototype.withFocusAction=function(e){return this.focusAction=e,this},e.prototype.withMouseEnterAction=function(e){return this.mouseenterAction=e,this},e.prototype.withBlurAndMouseLeaveAction=function(e){return this.mouseleaveAction=e,this.blurAction=e,this},e.prototype.withMouseLeaveAction=function(e){return this.mouseleaveAction=e,this},e.prototype.withBlurAction=function(e){return this.blurAction=e,this},e.prototype.build=function(){return this.element||(this.element=i.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureTitle(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},e.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var e=this,t="coveo-accessible-button-pressed",n="coveo-accessible-button-focused";i.$$(this.element).addClass("coveo-accessible-button"),i.$$(this.element).on("mousedown",function(){i.$$(e.element).addClass(t),i.$$(e.element).removeClass(n)}),i.$$(this.element).on("mouseup",function(){return i.$$(e.element).removeClass(t)}),i.$$(this.element).on("focus",function(){i.$$(e.element).hasClass(t)||i.$$(e.element).addClass(n)}),i.$$(this.element).on("blur",function(){return i.$$(e.element).removeClass(n)})},e.prototype.ensureCorrectRole=function(){this.element.getAttribute("role")||this.element.setAttribute("role","button")},e.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label)},e.prototype.ensureTitle=function(){this.title&&this.element.setAttribute("title",this.title)},e.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},e.prototype.ensureSelectAction=function(){var e=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",o.KeyboardUtils.keypressAction(o.KEYBOARD.ENTER,function(t){return e.enterKeyboardAction(t)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},e.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},e.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},e.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},e.prototype.bindEvent=function(e,t){this.eventOwner?this.eventOwner.on(this.element,e,t):i.$$(this.element).on(e,t)},e}();t.AccessibleButton=s},199:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),i=n(8),s=n(22),u=n(10),a=n(16),c=n(12),l=n(12),h=n(9),p=n(2),d=n(5),f=n(7),g=n(1),m=n(28),y=n(3),v=n(13),b=n(14);n(444);var A=n(18),P=function(e){function t(n,r,o){var s=e.call(this,n,t.ID,o)||this;return s.element=n,s.options=r,s.listenToQueryStateChange=!0,s.ignoreNextQuerySuccess=!1,s.needToReset=!0,s.options=i.ComponentOptions.initComponentOptions(n,t,r),s.currentPage=1,s.bind.onRootElement(u.QueryEvents.newQuery,function(e){return s.handleNewQuery(e)}),s.bind.onRootElement(u.QueryEvents.buildingQuery,function(e){return s.handleBuildingQuery(e)}),s.bind.onRootElement(u.QueryEvents.querySuccess,function(e){return s.handleQuerySuccess(e)}),s.bind.onRootElement(u.QueryEvents.queryError,function(){return s.handleQueryError()}),s.bind.onRootElement(u.QueryEvents.noResults,function(e){return s.handleNoResults(e)}),s.bind.onQueryState(a.MODEL_EVENTS.CHANGE_ONE,l.QUERY_STATE_ATTRIBUTES.FIRST,function(e){return s.handleQueryStateModelChanged(e)}),s.list=document.createElement("ul"),g.$$(s.list).addClass("coveo-pager-list"),n.appendChild(s.list),s}return r(t,e),t.prototype.setPage=function(e,t){void 0===t&&(t=h.analyticsActionCauseList.pagerNumber),d.Assert.exists(e),this.currentPage=Math.max(Math.min(e,this.getMaxNumberOfPagesForCurrentResultsPerPage()),1),this.updateQueryStateModel(this.getFirstResultNumber(this.currentPage)),this.usageAnalytics.logCustomEvent(t,{pagerNumber:this.currentPage},this.element),this.queryController.executeQuery({ignoreWarningSearchEvent:!0,keepLastSearchUid:!0,origin:this})},t.prototype.previousPage=function(){this.setPage(this.currentPage-1,h.analyticsActionCauseList.pagerPrevious)},t.prototype.nextPage=function(){this.setPage(this.currentPage+1,h.analyticsActionCauseList.pagerNext)},t.prototype.getMaxNumberOfPagesForCurrentResultsPerPage=function(){return Math.ceil(this.options.maximumNumberOfResultsFromIndex/this.searchInterface.resultsPerPage)},t.prototype.handleNewQuery=function(e){var n=e&&e.origin&&(e.origin.type==t.ID||"Debug"==e.origin.type);this.needToReset&&!n&&(this.currentPage=1,this.updateQueryStateModel(this.getFirstResultNumber(this.currentPage))),this.needToReset=!0},t.prototype.updateQueryStateModel=function(e){this.listenToQueryStateChange=!1,this.queryStateModel.set(c.QueryStateModel.attributesEnum.first,e),this.listenToQueryStateChange=!0},t.prototype.handleQueryError=function(){this.reset()},t.prototype.handleQuerySuccess=function(e){var t=this;if(this.reset(),this.ignoreNextQuerySuccess)this.ignoreNextQuerySuccess=!1;else{d.Assert.isNotUndefined(e);var n=e.query.firstResult,r=e.results.totalCountFiltered,o=this.computePagerBoundary(n,r);if(this.currentPage=o.currentPage,o.end-o.start>0){for(var i=this,s=o.start;s<=o.end;s++)!function(e){var n=document.createElement("a");g.$$(n).addClass(["coveo-pager-list-item-text","coveo-pager-anchor"]),g.$$(n).text(e.toString(10));var r=g.$$("li",{className:"coveo-pager-list-item",tabindex:0}).el;e==i.currentPage&&g.$$(r).addClass("coveo-active"),function(e){var n=function(){return t.handleClickPage(e)};g.$$(r).on("click",n),g.$$(r).on("keyup",m.KeyboardUtils.keypressAction(m.KEYBOARD.ENTER,n))}(e),r.appendChild(n),i.list.appendChild(r)}(s);this.options.enableNavigationButton&&o.lastResultPage>1&&this.renderNavigationButton(o)}}},t.prototype.handleNoResults=function(e){var t;if(e.results.totalCount>0){var n=this.computePagerBoundary(e.results.totalCountFiltered,e.results.totalCount).lastResultPage;this.currentPage>n&&(t=n)}else this.currentPage>this.getMaxNumberOfPagesForCurrentResultsPerPage()&&(t=this.getMaxNumberOfPagesForCurrentResultsPerPage());null!=t&&(this.currentPage=t,e.retryTheQuery=!0,this.needToReset=!1,this.ignoreNextQuerySuccess=!1,this.updateQueryStateModel(this.getFirstResultNumber(this.currentPage)))},t.prototype.reset=function(){g.$$(this.list).empty()},t.prototype.handleBuildingQuery=function(e){d.Assert.exists(e);var t=this.getQueryEventArgs();e.queryBuilder.firstResult=t.first,null==e.queryBuilder.numberOfResults&&(e.queryBuilder.numberOfResults=t.count)},t.prototype.computePagerBoundary=function(e,t){var n=this.searchInterface.resultsPerPage,r=Math.floor(e/n)+1,o=Math.min(Math.ceil(t/n),this.getMaxNumberOfPagesForCurrentResultsPerPage());o=Math.max(o,1);var i=Math.floor(this.options.numberOfPages/2),s=r-i;s=Math.max(s,1);var u=s+this.options.numberOfPages-1;return u=Math.min(u,o),{start:s,end:u,lastResultPage:o,currentPage:r}},t.prototype.renderNavigationButton=function(e){if(this.currentPage>1){var t=this.renderPreviousButton();this.list.insertBefore(t.el,this.list.firstChild)}if(this.currentPage<e.lastResultPage){var n=this.renderNextButton();this.list.appendChild(n.el)}},t.prototype.renderPreviousButton=function(){var e=this,t=g.$$("li",{className:"coveo-pager-previous coveo-pager-anchor coveo-pager-list-item"}),n=g.$$("a",{title:f.l("Previous")}),r=g.$$("span",{className:"coveo-pager-previous-icon"},v.SVGIcons.icons.pagerLeftArrow);return b.SVGDom.addClassToSVGInContainer(r.el,"coveo-pager-previous-icon-svg"),n.append(r.el),t.append(n.el),(new A.AccessibleButton).withElement(t).withLabel(f.l("Previous")).withSelectAction(function(){return e.handleClickPrevious()}).build(),t},t.prototype.renderNextButton=function(){var e=this,t=g.$$("li",{className:"coveo-pager-next coveo-pager-anchor coveo-pager-list-item"}),n=g.$$("a",{title:f.l("Next")}),r=g.$$("span",{className:"coveo-pager-next-icon"},v.SVGIcons.icons.pagerRightArrow);return b.SVGDom.addClassToSVGInContainer(r.el,"coveo-pager-next-icon-svg"),n.append(r.el),t.append(n.el),(new A.AccessibleButton).withElement(t).withLabel(f.l("Next")).withSelectAction(function(){return e.handleClickNext()}).build(),t},t.prototype.handleQueryStateModelChanged=function(e){if(this.listenToQueryStateChange){d.Assert.exists(e),this.needToReset=!1;var t=e.value;this.currentPage=this.fromFirstResultsToPageNumber(t)}},t.prototype.handleClickPage=function(e){d.Assert.exists(e),this.setPage(e)},t.prototype.handleClickPrevious=function(){this.previousPage()},t.prototype.handleClickNext=function(){this.nextPage()},t.prototype.fromFirstResultsToPageNumber=function(e){return e/this.searchInterface.resultsPerPage+1},t.prototype.getFirstResultNumber=function(e){return void 0===e&&(e=this.currentPage),(e-1)*this.searchInterface.resultsPerPage},t.prototype.getQueryEventArgs=function(){return{count:this.searchInterface.resultsPerPage,first:this.getFirstResultNumber()}},t.ID="Pager",t.doExport=function(){y.exportGlobally({Pager:t})},t.options={numberOfPages:i.ComponentOptions.buildNumberOption({defaultFunction:function(){return s.DeviceUtils.isMobileDevice()?3:5},min:1}),enableNavigationButton:i.ComponentOptions.buildBooleanOption({defaultValue:!0}),maxNumberOfPages:i.ComponentOptions.buildNumberOption({defaultValue:void 0,deprecated:"This is a deprecated option. The pager will automatically adapt itself on each new query. You no longer need to specify this option. Use maximumNumberOfResultsFromIndex instead."}),maximumNumberOfResultsFromIndex:i.ComponentOptions.buildNumberOption({defaultValue:1e3})},t}(o.Component);t.Pager=P,p.Initialization.registerAutoCreateComponent(P)},364:function(e,t){},444:function(e,t){}});