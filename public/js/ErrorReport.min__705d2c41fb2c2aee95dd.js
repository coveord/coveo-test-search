webpackJsonpCoveo__temporary([41],{17:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(11),i=o(30),r=o(1);o(375);var s=function(){function e(){this.logger=new n.Logger(this)}return e.prototype.withOwner=function(e){return this.eventOwner=e,this},e.prototype.withElement=function(e){return e instanceof HTMLElement?this.element=r.$$(e):this.element=e,this},e.prototype.withLabel=function(e){return this.label=e,this},e.prototype.withTitle=function(e){return this.title=e,this},e.prototype.withSelectAction=function(e){return this.clickAction=e,this.enterKeyboardAction=e,this},e.prototype.withClickAction=function(e){return this.clickAction=e,this},e.prototype.withEnterKeyboardAction=function(e){return this.enterKeyboardAction=e,this},e.prototype.withFocusAndMouseEnterAction=function(e){return this.focusAction=e,this.mouseenterAction=e,this},e.prototype.withFocusAction=function(e){return this.focusAction=e,this},e.prototype.withMouseEnterAction=function(e){return this.mouseenterAction=e,this},e.prototype.withBlurAndMouseLeaveAction=function(e){return this.mouseleaveAction=e,this.blurAction=e,this},e.prototype.withMouseLeaveAction=function(e){return this.mouseleaveAction=e,this},e.prototype.withBlurAction=function(e){return this.blurAction=e,this},e.prototype.build=function(){return this.element||(this.element=r.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureTitle(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},e.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var e=this,t="coveo-accessible-button-pressed",o="coveo-accessible-button-focused";r.$$(this.element).addClass("coveo-accessible-button"),r.$$(this.element).on("mousedown",function(){r.$$(e.element).addClass(t),r.$$(e.element).removeClass(o)}),r.$$(this.element).on("mouseup",function(){return r.$$(e.element).removeClass(t)}),r.$$(this.element).on("focus",function(){r.$$(e.element).hasClass(t)||r.$$(e.element).addClass(o)}),r.$$(this.element).on("blur",function(){return r.$$(e.element).removeClass(o)})},e.prototype.ensureCorrectRole=function(){this.element.getAttribute("role")||this.element.setAttribute("role","button")},e.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label)},e.prototype.ensureTitle=function(){this.title&&this.element.setAttribute("title",this.title)},e.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},e.prototype.ensureSelectAction=function(){var e=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",i.KeyboardUtils.keypressAction(i.KEYBOARD.ENTER,function(t){return e.enterKeyboardAction(t)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},e.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},e.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},e.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},e.prototype.bindEvent=function(e,t){this.eventOwner?this.eventOwner.on(this.element,e,t):r.$$(this.element).on(e,t)},e}();t.AccessibleButton=s},192:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=o(6),r=o(8),s=o(1),l=o(9),c=o(10),u=o(7),a=o(5),h=o(2),p=o(3);o(440);var d=o(17),v=function(e){function t(o,n,i){var c=e.call(this,o,t.ID,i)||this;return c.element=o,c.options=n,c.options=r.ComponentOptions.initComponentOptions(o,t,n),c.container=s.$$("div",{className:"coveo-error-report-container"}),c.element.appendChild(c.container.el),c.options.showDetailedError&&(c.message=s.$$("div",{className:"coveo-error-report-message"}),c.container.append(c.message.el)),c.helpSuggestion=s.$$("div",{className:"coveo-error-report-help-suggestion"}),s.$$(c.element).hide(),c.bind.onRootElement(l.QueryEvents.newQuery,function(){return c.handleNewQuery()}),c.bind.onRootElement(l.QueryEvents.queryError,function(e){return c.handleQueryError(e)}),c}return n(t,e),t.prototype.back=function(){this.usageAnalytics.logCustomEvent(c.analyticsActionCauseList.errorBack,{},this.root),this.usageAnalytics.logSearchEvent(c.analyticsActionCauseList.errorBack,{}),history.back()},t.prototype.reset=function(){this.queryStateModel.reset(),this.usageAnalytics.logSearchEvent(c.analyticsActionCauseList.errorClearQuery,{}),this.usageAnalytics.logCustomEvent(c.analyticsActionCauseList.errorClearQuery,{},this.root),this.queryController.executeQuery()},t.prototype.retry=function(){this.usageAnalytics.logSearchEvent(c.analyticsActionCauseList.errorRetry,{}),this.usageAnalytics.logCustomEvent(c.analyticsActionCauseList.errorRetry,{},this.root),this.queryController.executeQuery()},t.prototype.buildOrGetTitleElements=function(){var e,t=s.$$(this.element).find(".coveo-error-report-title");t?e=s.$$(t):(e=s.$$("div",{className:"coveo-error-report-title"}),this.container.prepend(e.el));var o=e.find("h1");o||(o=s.$$("h1").el,e.append(o));var n=e.find("h2");return n||(n=s.$$("h2").el,e.append(n)),{title:e,h1:s.$$(o),h2:s.$$(n)}},t.prototype.setErrorTitle=function(e,t){var o={h1:e?u.l(e):u.l("OopsError"),h2:t?u.l(t):u.l("ProblemPersists")},n=this.buildOrGetTitleElements(),i=n.h1,r=n.h2;i&&r&&(s.$$(i).text(o.h1),s.$$(r).text(o.h2))},t.prototype.buildPrevious=function(){var e=this,t=s.$$("span",{className:"coveo-error-report-previous"},u.l("GoBack"));return(new d.AccessibleButton).withElement(t).withSelectAction(function(){return e.back()}).withLabel(u.l("GoBack")).build(),t.el},t.prototype.buildReset=function(){var e=this,t=s.$$("span",{className:"coveo-error-report-clear"},u.l("Reset"));return(new d.AccessibleButton).withElement(t).withSelectAction(function(){return e.reset()}).withLabel(u.l("Reset")).build(),t.el},t.prototype.buildRetry=function(){var e=this,t=s.$$("span",{className:"coveo-error-report-retry"},u.l("Retry"));return(new d.AccessibleButton).withElement(t).withSelectAction(function(){return e.retry()}).withLabel(u.l("Retry")).build(),t.el},t.prototype.handleNewQuery=function(){s.$$(this.element).hide();var e=this.buildOrGetTitleElements(),t=e.h1,o=e.h2;t.remove(),o.remove(),null!=this.closePopup&&this.closePopup()},t.prototype.handleQueryError=function(e){var t=this;if(a.Assert.exists(e),a.Assert.exists(e.error),e.endpoint.options.queryStringArguments.organizationId?this.organizationId=e.endpoint.options.queryStringArguments.organizationId:this.organizationId=u.l("CoveoOrganization"),!e.error.isMissingAuthentication){switch(e.error.name){case"NoEndpointsException":this.options.showDetailedError=!1,this.buildEndpointErrorElements("http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=257"),this.setErrorTitle(u.l("NoEndpoints",this.organizationId),u.l("AddSources"));break;case"InvalidTokenException":this.options.showDetailedError=!1,this.buildEndpointErrorElements("https://developers.coveo.com/x/XICE"),this.setErrorTitle(u.l("CannotAccess",this.organizationId),u.l("InvalidToken"));break;case"GroupByAndFacetBothExistingException":this.options.showDetailedError=!1,this.setErrorTitle(void 0,u.l("GroupByAndFacetRequestsCannotCoexist"));break;default:this.buildOptionsElement(),this.setErrorTitle()}if(this.options.showDetailedError){this.message.empty();var o=s.$$("span",{className:"coveo-error-report-more-info"},u.l("MoreInfo"));o.on("click",function(){o.empty(),t.message.el.appendChild(t.buildErrorInfo(e.error))}),this.message.el.appendChild(o.el)}s.$$(this.element).show()}},t.prototype.buildErrorInfo=function(e){var t=s.$$("div",{className:"coveo-error-info"}),o=s.$$("textarea",void 0,JSON.stringify(e,null,2));t.el.appendChild(o.el);var n=s.$$("div",{className:"coveo-error-info-label"},u.l("CopyPasteToSupport"));return t.el.appendChild(n.el),t.el},t.prototype.buildOptionsElement=function(){var e=this.container.find(".coveo-error-report-options");e&&s.$$(e).remove();var t=s.$$("div",{className:"coveo-error-report-options"});t.el.appendChild(this.buildPrevious()),t.el.appendChild(this.buildReset()),t.el.appendChild(this.buildRetry()),this.container.append(t.el)},t.prototype.buildEndpointErrorElements=function(e){void 0===e&&(e="http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=254"),this.helpSuggestion.empty();var t=s.$$("a",{href:e,className:"coveo-error-report-help-link"});t.setHtml(u.l("CoveoOnlineHelp")),this.helpSuggestion.append(t.el),this.container.el.insertBefore(this.helpSuggestion.el,this.message.el)},t.ID="ErrorReport",t.doExport=function(){p.exportGlobally({ErrorReport:t})},t.options={showDetailedError:r.ComponentOptions.buildBooleanOption({defaultValue:!0})},t}(i.Component);t.ErrorReport=v,h.Initialization.registerAutoCreateComponent(v)},375:function(e,t){},440:function(e,t){}});