webpackJsonpCoveo__temporary([73],{225:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0}),r(552);var i=r(0),o=r(37),a=r(15),s=r(10),u=r(3),c=r(7),l=r(17),d=r(1),b=r(9),m=r(6),p=r(8),h=r(2),y=function(e){function t(r,n,i){var s=e.call(this,r,t.ID,i)||this;return s.element=r,s.options=n,s.options=p.ComponentOptions.initComponentOptions(r,t,n),s.bind.oneRootElement(a.InitializationEvents.afterInitialization,function(){return s.handleAfterInitialization()}),s.bind.onRootElement(o.BreadcrumbEvents.redrawBreadcrumb,function(){return s.redrawBreadcrumb()}),s.element.style.display="none",s}return n(t,e),t.prototype.getBreadcrumbs=function(){var e={breadcrumbs:[]};return this.bind.trigger(this.root,o.BreadcrumbEvents.populateBreadcrumb,e),this.logger.debug("Retrieved breadcrumbs",e.breadcrumbs),this.lastBreadcrumbs=e.breadcrumbs,e.breadcrumbs},t.prototype.clearBreadcrumbs=function(){var e={};this.bind.trigger(this.root,o.BreadcrumbEvents.clearBreadcrumb,e),this.logger.debug("Clearing breadcrumbs"),this.usageAnalytics.logSearchEvent(b.analyticsActionCauseList.breadcrumbResetAll,{}),this.queryController.executeQuery()},t.prototype.drawBreadcrumb=function(e){var t=this;d.$$(this.element).empty(),0!=e.length?this.element.style.display="":this.element.style.display="none";var r=document.createElement("div");d.$$(r).addClass("coveo-breadcrumb-items"),this.element.appendChild(r),i.each(e,function(e){var t=e.element;d.$$(t).addClass("coveo-breadcrumb-item"),r.appendChild(t)});var n=d.$$("div",void 0,c.l("ClearAllFilters")).el,o=d.$$("div",{className:"coveo-breadcrumb-clear-all",title:c.l("ClearAllFilters")},n).el;(new l.AccessibleButton).withElement(o).withSelectAction(function(){return t.clearBreadcrumbs()}).withOwner(this.bind).withLabel(c.l("ClearAllFilters")).build(),this.element.appendChild(o)},t.prototype.redrawBreadcrumb=function(){this.lastBreadcrumbs?this.drawBreadcrumb(this.lastBreadcrumbs):this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleDeferredQuerySuccess=function(){this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleQueryError=function(){this.drawBreadcrumb(this.getBreadcrumbs())},t.prototype.handleAfterInitialization=function(){var e=this;this.bind.onRootElement(s.QueryEvents.deferredQuerySuccess,function(){return e.handleDeferredQuerySuccess()}),this.bind.onRootElement(s.QueryEvents.queryError,function(){return e.handleQueryError()})},t.ID="Breadcrumb",t.options={},t.doExport=function(){u.exportGlobally({Breadcrumb:t})},t}(m.Component);t.Breadcrumb=y,h.Initialization.registerAutoCreateComponent(y)},552:function(e,t){}});