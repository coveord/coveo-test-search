webpackJsonpCoveo__temporary([31],{14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e.addClassToSVGInContainer=function(t,n){var r=t.querySelector("svg");r.setAttribute("class",""+e.getClass(r)+n)},e.removeClassFromSVGInContainer=function(t,n){var r=t.querySelector("svg");r.setAttribute("class",e.getClass(r).replace(n,""))},e.addStyleToSVGInContainer=function(e,t){var n=e.querySelector("svg");r.each(t,function(e,t){n.style[t]=e})},e.getClass=function(e){var t=e.getAttribute("class");return t?t+" ":""},e}();t.SVGDom=i},178:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0}),n(410);var i=n(0),o=n(37),s=n(15),c=n(10),u=n(3),l=n(7),a=n(18),h=n(1),d=n(14),b=n(13),p=n(9),m=n(6),f=n(8),v=n(2),y=function(e){function t(n,r,i){var c=e.call(this,n,t.ID,i)||this;return c.element=n,c.options=r,c.options=f.ComponentOptions.initComponentOptions(n,t,r),c.bind.oneRootElement(s.InitializationEvents.afterInitialization,function(){return c.handleAfterInitialization()}),c.bind.onRootElement(o.BreadcrumbEvents.redrawBreadcrumb,function(){return c.redrawBreadcrumb()}),c.element.style.display="none",c}return r(t,e),t.prototype.getBreadcrumbs=function(){var e={breadcrumbs:[]};return this.bind.trigger(this.root,o.BreadcrumbEvents.populateBreadcrumb,e),this.logger.debug("Retrieved breadcrumbs",e.breadcrumbs),this.lastBreadcrumbs=e.breadcrumbs,e.breadcrumbs},t.prototype.clearBreadcrumbs=function(){var e={};this.bind.trigger(this.root,o.BreadcrumbEvents.clearBreadcrumb,e),this.logger.debug("Clearing breadcrumbs"),this.usageAnalytics.logSearchEvent(p.analyticsActionCauseList.breadcrumbResetAll,{}),this.queryController.executeQuery()},t.prototype.drawBreadcrumb=function(e){var t=this;h.$$(this.element).empty(),0!=e.length?this.element.style.display="":this.element.style.display="none";var n=document.createElement("div");h.$$(n).addClass("coveo-breadcrumb-items"),this.element.appendChild(n),i.each(e,function(e){var t=e.element;h.$$(t).addClass("coveo-breadcrumb-item"),n.appendChild(t)});var r=h.$$("div",{className:"coveo-breadcrumb-clear-all",title:l.l("ClearAllFilters")}).el;(new a.AccessibleButton).withElement(r).withSelectAction(function(){return t.clearBreadcrumbs()}).withOwner(this.bind).withLabel(l.l("ClearAllFilters")).build();var o=h.$$("div",{className:"coveo-icon coveo-breadcrumb-clear-all-icon"},b.SVGIcons.icons.checkboxHookExclusionMore).el;d.SVGDom.addClassToSVGInContainer(o,"coveo-breadcrumb-clear-all-svg"),r.appendChild(o);var s=h.$$("div",void 0,l.l("Clear","")).el;r.appendChild(s),this.element.appendChild(r)},t.prototype.redrawBreadcrumb=function(){this.lastBreadcrumbs?this.drawBreadcrumb(this.lastBreadcrumbs):this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleDeferredQuerySuccess=function(){this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleQueryError=function(){this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleAfterInitialization=function(){var e=this;this.bind.onRootElement(c.QueryEvents.deferredQuerySuccess,function(){return e.handleDeferredQuerySuccess()}),this.bind.onRootElement(c.QueryEvents.queryError,function(){return e.handleQueryError()})},t.ID="Breadcrumb",t.options={},t.doExport=function(){u.exportGlobally({Breadcrumb:t})},t}(m.Component);t.Breadcrumb=y,v.Initialization.registerAutoCreateComponent(y)},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=n(28),o=n(1);n(364);var s=function(){function e(){this.logger=new r.Logger(this)}return e.prototype.withOwner=function(e){return this.eventOwner=e,this},e.prototype.withElement=function(e){return e instanceof HTMLElement?this.element=o.$$(e):this.element=e,this},e.prototype.withLabel=function(e){return this.label=e,this},e.prototype.withTitle=function(e){return this.title=e,this},e.prototype.withSelectAction=function(e){return this.clickAction=e,this.enterKeyboardAction=e,this},e.prototype.withClickAction=function(e){return this.clickAction=e,this},e.prototype.withEnterKeyboardAction=function(e){return this.enterKeyboardAction=e,this},e.prototype.withFocusAndMouseEnterAction=function(e){return this.focusAction=e,this.mouseenterAction=e,this},e.prototype.withFocusAction=function(e){return this.focusAction=e,this},e.prototype.withMouseEnterAction=function(e){return this.mouseenterAction=e,this},e.prototype.withBlurAndMouseLeaveAction=function(e){return this.mouseleaveAction=e,this.blurAction=e,this},e.prototype.withMouseLeaveAction=function(e){return this.mouseleaveAction=e,this},e.prototype.withBlurAction=function(e){return this.blurAction=e,this},e.prototype.build=function(){return this.element||(this.element=o.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureTitle(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},e.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var e=this,t="coveo-accessible-button-pressed",n="coveo-accessible-button-focused";o.$$(this.element).addClass("coveo-accessible-button"),o.$$(this.element).on("mousedown",function(){o.$$(e.element).addClass(t),o.$$(e.element).removeClass(n)}),o.$$(this.element).on("mouseup",function(){return o.$$(e.element).removeClass(t)}),o.$$(this.element).on("focus",function(){o.$$(e.element).hasClass(t)||o.$$(e.element).addClass(n)}),o.$$(this.element).on("blur",function(){return o.$$(e.element).removeClass(n)})},e.prototype.ensureCorrectRole=function(){this.element.getAttribute("role")||this.element.setAttribute("role","button")},e.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label)},e.prototype.ensureTitle=function(){this.title&&this.element.setAttribute("title",this.title)},e.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},e.prototype.ensureSelectAction=function(){var e=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",i.KeyboardUtils.keypressAction(i.KEYBOARD.ENTER,function(t){return e.enterKeyboardAction(t)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},e.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},e.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},e.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},e.prototype.bindEvent=function(e,t){this.eventOwner?this.eventOwner.on(this.element,e,t):o.$$(this.element).on(e,t)},e}();t.AccessibleButton=s},364:function(e,t){},410:function(e,t){}});