webpackJsonpCoveo__temporary([43],{14:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(){function e(){}return e.addClassToSVGInContainer=function(t,r){var n=t.querySelector("svg");n.setAttribute("class",""+e.getClass(n)+r)},e.removeClassFromSVGInContainer=function(t,r){var n=t.querySelector("svg");n.setAttribute("class",e.getClass(n).replace(r,""))},e.addStyleToSVGInContainer=function(e,t){var r=e.querySelector("svg");n.each(t,function(e,t){r.style[t]=e})},e.getClass=function(e){var t=e.getAttribute("class");return t?t+" ":""},e}();t.SVGDom=o},169:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),a=r(7),i=r(15),s=r(35),c=r(9),u=r(2),l=r(8),d=r(1),b=r(10),m=r(20),p=r(0),h=r(3);r(378);var v=r(13),y=r(14),f=function(e){function t(r,n,o){var c=e.call(this,r,t.ID,o)||this;return c.element=r,c.options=n,c.options=a.ComponentOptions.initComponentOptions(r,t,n),c.bind.oneRootElement(i.InitializationEvents.afterInitialization,function(){return c.handleAfterInitialization()}),c.bind.onRootElement(s.BreadcrumbEvents.redrawBreadcrumb,function(){return c.redrawBreadcrumb()}),c.element.style.display="none",c}return n(t,e),t.prototype.getBreadcrumbs=function(){var e={breadcrumbs:[]};return this.bind.trigger(this.root,s.BreadcrumbEvents.populateBreadcrumb,e),this.logger.debug("Retrieved breadcrumbs",e.breadcrumbs),this.lastBreadcrumbs=e.breadcrumbs,e.breadcrumbs},t.prototype.clearBreadcrumbs=function(){var e={};this.bind.trigger(this.root,s.BreadcrumbEvents.clearBreadcrumb,e),this.logger.debug("Clearing breadcrumbs"),this.usageAnalytics.logSearchEvent(c.analyticsActionCauseList.breadcrumbResetAll,{}),this.queryController.executeQuery()},t.prototype.drawBreadcrumb=function(e){var t=this;u.$$(this.element).empty(),0!=e.length?this.element.style.display="":this.element.style.display="none";var r=document.createElement("div");u.$$(r).addClass("coveo-breadcrumb-items"),this.element.appendChild(r),p.each(e,function(e){var t=e.element;u.$$(t).addClass("coveo-breadcrumb-item"),r.appendChild(t)});var n=u.$$("div",{className:"coveo-breadcrumb-clear-all",title:l.l("ClearAllFilters"),tabindex:0}).el,o=u.$$("div",{className:"coveo-icon coveo-breadcrumb-clear-all-icon"},v.SVGIcons.icons.checkboxHookExclusionMore).el;y.SVGDom.addClassToSVGInContainer(o,"coveo-breadcrumb-clear-all-svg"),n.appendChild(o);var a=document.createElement("div");u.$$(a).text(l.l("Clear","")),n.appendChild(a),this.element.appendChild(n);var i=function(){return t.clearBreadcrumbs()};this.bind.on(n,"click",i),this.bind.on(n,"keyup",m.KeyboardUtils.keypressAction(m.KEYBOARD.ENTER,i))},t.prototype.redrawBreadcrumb=function(){this.lastBreadcrumbs?this.drawBreadcrumb(this.lastBreadcrumbs):this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleDeferredQuerySuccess=function(){this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleQueryError=function(){this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleAfterInitialization=function(){var e=this;this.bind.onRootElement(b.QueryEvents.deferredQuerySuccess,function(){return e.handleDeferredQuerySuccess()}),this.bind.onRootElement(b.QueryEvents.queryError,function(){return e.handleQueryError()})},t.ID="Breadcrumb",t.options={},t.doExport=function(){h.exportGlobally({Breadcrumb:t})},t}(o.Component);t.Breadcrumb=f,d.Initialization.registerAutoCreateComponent(f)},378:function(e,t){}});