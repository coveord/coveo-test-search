webpackJsonpCoveo__temporary([72],{248:function(e,t,o){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0}),o(605);var n=o(11),i=o(3),s=o(5),l=o(6),a=o(15),p=o(1),c=o(10),u=o(7),h=o(8),d=o(2),v=function(e){function t(o,r,i){var s=e.call(this,o,t.ID,i)||this;return s.element=o,s.options=r,s.options=h.ComponentOptions.initComponentOptions(o,t,r),s.container=p.$$("div",{className:"coveo-error-report-container"}),s.element.appendChild(s.container.el),s.options.showDetailedError&&(s.message=p.$$("div",{className:"coveo-error-report-message"}),s.container.append(s.message.el)),s.helpSuggestion=p.$$("div",{className:"coveo-error-report-help-suggestion"}),p.$$(s.element).hide(),s.bind.onRootElement(n.QueryEvents.newQuery,function(){return s.handleNewQuery()}),s.bind.onRootElement(n.QueryEvents.queryError,function(e){return s.handleQueryError(e)}),s}return r(t,e),t.prototype.back=function(){this.usageAnalytics.logCustomEvent(c.analyticsActionCauseList.errorBack,{},this.root),this.usageAnalytics.logSearchEvent(c.analyticsActionCauseList.errorBack,{}),history.back()},t.prototype.reset=function(){this.queryStateModel.reset(),this.usageAnalytics.logSearchEvent(c.analyticsActionCauseList.errorClearQuery,{}),this.usageAnalytics.logCustomEvent(c.analyticsActionCauseList.errorClearQuery,{},this.root),this.queryController.executeQuery()},t.prototype.retry=function(){this.usageAnalytics.logSearchEvent(c.analyticsActionCauseList.errorRetry,{}),this.usageAnalytics.logCustomEvent(c.analyticsActionCauseList.errorRetry,{},this.root),this.queryController.executeQuery()},t.prototype.buildOrGetTitleElements=function(){var e,t=p.$$(this.element).find(".coveo-error-report-title");t?e=p.$$(t):(e=p.$$("div",{className:"coveo-error-report-title"}),this.container.prepend(e.el));var o=e.find("h1");o||(o=p.$$("h1").el,e.append(o));var r=e.find("h2");return r||(r=p.$$("h2").el,e.append(r)),{title:e,h1:p.$$(o),h2:p.$$(r)}},t.prototype.setErrorTitle=function(e,t){var o={h1:e?l.l(e):l.l("OopsError"),h2:t?l.l(t):l.l("ProblemPersists")},r=this.buildOrGetTitleElements(),n=r.h1,i=r.h2;n&&i&&(p.$$(n).text(o.h1),p.$$(i).text(o.h2))},t.prototype.buildPrevious=function(){var e=this,t=p.$$("span",{className:"coveo-error-report-previous"},l.l("GoBack"));return(new a.AccessibleButton).withElement(t).withSelectAction(function(){return e.back()}).withLabel(l.l("GoBack")).build(),t.el},t.prototype.buildReset=function(){var e=this,t=p.$$("span",{className:"coveo-error-report-clear"},l.l("Reset"));return(new a.AccessibleButton).withElement(t).withSelectAction(function(){return e.reset()}).withLabel(l.l("Reset")).build(),t.el},t.prototype.buildRetry=function(){var e=this,t=p.$$("span",{className:"coveo-error-report-retry"},l.l("Retry"));return(new a.AccessibleButton).withElement(t).withSelectAction(function(){return e.retry()}).withLabel(l.l("Retry")).build(),t.el},t.prototype.handleNewQuery=function(){p.$$(this.element).hide();var e=this.buildOrGetTitleElements(),t=e.h1,o=e.h2;t.remove(),o.remove(),null!=this.closePopup&&this.closePopup()},t.prototype.handleQueryError=function(e){var t=this;if(s.Assert.exists(e),s.Assert.exists(e.error),e.endpoint.options.queryStringArguments.organizationId?this.organizationId=e.endpoint.options.queryStringArguments.organizationId:this.organizationId=l.l("CoveoOrganization"),!e.error.isMissingAuthentication){switch(e.error.name){case"NoEndpointsException":this.options.showDetailedError=!1,this.buildEndpointErrorElements("https://docs.coveo.com/en/331/"),this.setErrorTitle(l.l("NoEndpoints",this.organizationId),l.l("AddSources"));break;case"InvalidTokenException":this.options.showDetailedError=!1,this.buildEndpointErrorElements("https://docs.coveo.com/en/56/"),this.setErrorTitle(l.l("CannotAccess",this.organizationId),l.l("InvalidToken"));break;case"GroupByAndFacetBothExistingException":this.options.showDetailedError=!1,this.buildEndpointErrorElements("https://docs.coveo.com/en/2917"),this.setErrorTitle(void 0,l.l("GroupByAndFacetRequestsCannotCoexist"));break;default:this.buildOptionsElement(),this.setErrorTitle()}if(this.options.showDetailedError){this.message.empty();var o=p.$$("span",{className:"coveo-error-report-more-info"},l.l("MoreInfo"));o.on("click",function(){o.empty(),t.message.el.appendChild(t.buildErrorInfo(e.error))}),this.message.el.appendChild(o.el)}p.$$(this.element).show()}},t.prototype.buildErrorInfo=function(e){var t=p.$$("div",{className:"coveo-error-info"}),o=p.$$("textarea",void 0,JSON.stringify(e,null,2));t.el.appendChild(o.el);var r=p.$$("div",{className:"coveo-error-info-label"},l.l("CopyPasteToSupport"));return t.el.appendChild(r.el),t.el},t.prototype.buildOptionsElement=function(){var e=this.container.find(".coveo-error-report-options");e&&p.$$(e).remove();var t=p.$$("div",{className:"coveo-error-report-options"});t.el.appendChild(this.buildPrevious()),t.el.appendChild(this.buildReset()),t.el.appendChild(this.buildRetry()),this.container.append(t.el)},t.prototype.buildEndpointErrorElements=function(e){void 0===e&&(e="https://docs.coveo.com/en/331/"),this.helpSuggestion.empty();var t=p.$$("a",{href:e,className:"coveo-error-report-help-link"});t.setHtml(l.l("CoveoOnlineHelp")),this.helpSuggestion.append(t.el),this.container.el.insertBefore(this.helpSuggestion.el,this.message.el)},t.ID="ErrorReport",t.doExport=function(){i.exportGlobally({ErrorReport:t})},t.options={showDetailedError:h.ComponentOptions.buildBooleanOption({defaultValue:!0})},t}(u.Component);t.ErrorReport=v,d.Initialization.registerAutoCreateComponent(v)},605:function(e,t){}});
//# sourceMappingURL=ErrorReport.min__e910bafd8c6dbfb3faee.js.map