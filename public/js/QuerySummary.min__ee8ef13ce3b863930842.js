webpackJsonpCoveo__temporary([41],{259:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0}),n(620);var s=n(0),i=n(11),r=n(500),a=n(3),l=n(5),u=n(13),p=n(6),c=n(1),h=n(198),d=n(10),y=n(7),f=n(8),m=n(2),g=n(16);t.noResultsCssClass="coveo-show-if-no-results";var C=function(e){function n(t,o,s){var r=e.call(this,t,n.ID,s)||this;return r.element=t,r.options=o,r.options=f.ComponentOptions.initComponentOptions(t,n,o),r.bind.onRootElement(i.QueryEvents.querySuccess,function(e){return r.handleQuerySuccess(e)}),r.bind.onRootElement(i.QueryEvents.queryError,function(){return r.hide()}),r.hide(),r.textContainer=c.$$("span").el,c.$$(r.element).prepend(r.textContainer),r}return o(n,e),n.prototype.hide=function(){c.$$(this.element).addClass("coveo-hidden")},n.prototype.show=function(){c.$$(this.element).removeClass("coveo-hidden")},n.prototype.render=function(e){c.$$(this.textContainer).empty(),this.show(),this.updateNoResultsSnapshot(),this.hideNoResultsPage(),this.options.onlyDisplaySearchTips||this.updateSummaryIfResultsWereReceived(e);var t=e.results;if(null!=t.exception&&null!=t.exception.code){var n=("QueryException"+t.exception.code).toLocaleString();this.textContainer.innerHTML=p.l("QueryException",n)}else 0==t.results.length?(this.updateQueryTagsInNoResultsContainer(),this.displayInfoOnNoResults()):this.lastKnownGoodState=this.queryStateModel.getAttributes()},n.prototype.handleQuerySuccess=function(e){l.Assert.exists(e),this.render(e)},n.prototype.updateSummaryIfResultsWereReceived=function(e){if(e.results.results.length){var t=h.QuerySummaryUtils.htmlMessage(this.root,e);this.textContainer.innerHTML=t}},n.prototype.updateNoResultsSnapshot=function(){var e=this.getNoResultsContainer();null==this.noResultsSnapshot&&e&&(this.noResultsSnapshot=e.innerHTML)},n.prototype.updateQueryTagsInNoResultsContainer=function(){var e=this.getNoResultsContainer();e&&(e.innerHTML=this.replaceQueryTagsWithHighlightedQuery(this.noResultsSnapshot))},n.prototype.replaceQueryTagsWithHighlightedQuery=function(e){var t='<span class="coveo-highlight">'+this.sanitizedQuery+"</span>";return h.QuerySummaryUtils.replaceQueryTags(e,t)},Object.defineProperty(n.prototype,"sanitizedQuery",{get:function(){return s.escape(this.queryStateModel.get(u.QueryStateModel.attributesEnum.q))},enumerable:!0,configurable:!0}),n.prototype.displayInfoOnNoResults=function(){if(this.showNoResultsPage(),this.options.enableNoResultsFoundMessage){var e=this.getNoResultsFoundMessageElement();this.textContainer.appendChild(e.el)}if(this.options.enableCancelLastAction){var t=this.getCancelLastActionElement();this.textContainer.appendChild(t.el)}if(this.options.enableSearchTips){var n=this.getSearchTipsTitleElement(),o=this.getSearchTipsListElement();this.textContainer.appendChild(n.el),this.textContainer.appendChild(o.el)}},n.prototype.hideNoResultsPage=function(){this.getAllNoResultsContainer().forEach(function(e){c.$$(e).removeClass("coveo-no-results")})},n.prototype.showNoResultsPage=function(){this.getAllNoResultsContainer().forEach(function(e){c.$$(e).addClass("coveo-no-results")})},n.prototype.getNoResultsContainer=function(){return c.$$(this.element).find("."+t.noResultsCssClass)},n.prototype.getAllNoResultsContainer=function(){return c.$$(this.element).findAll("."+t.noResultsCssClass)},n.prototype.getNoResultsFoundMessageElement=function(){var e=this.replaceQueryTagsWithHighlightedQuery(this.options.noResultsFoundMessage);return c.$$("div",{className:"coveo-query-summary-no-results-string"},e)},n.prototype.getCancelLastActionElement=function(){var e=this,t=c.$$("div",{className:"coveo-query-summary-cancel-last"},p.l("CancelLastAction"));return(new g.AccessibleButton).withElement(t).withSelectAction(function(){e.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.noResultsBack,{},e.root),e.usageAnalytics.logSearchEvent(d.analyticsActionCauseList.noResultsBack,{}),e.lastKnownGoodState?(e.queryStateModel.reset(),e.queryStateModel.setMultiple(e.lastKnownGoodState),c.$$(e.root).trigger(r.QuerySummaryEvents.cancelLastAction),e.queryController.executeQuery()):history.back()}).build(),t},n.prototype.getSearchTipsTitleElement=function(){var e=c.$$("div",{className:"coveo-query-summary-search-tips-info"});return e.text(p.l("SearchTips")),e},n.prototype.getSearchTipsListElement=function(){var e=c.$$("ul"),t=c.$$("li");t.text(p.l("CheckSpelling"));var n=c.$$("li");if(n.text(p.l("TryUsingFewerKeywords")),e.el.appendChild(t.el),e.el.appendChild(n.el),this.queryStateModel.atLeastOneFacetIsActive()){var o=c.$$("li");o.text(p.l("SelectFewerFilters")),e.el.appendChild(o.el)}return e},n.ID="QuerySummary",n.doExport=function(){a.exportGlobally({QuerySummary:n})},n.options={onlyDisplaySearchTips:f.ComponentOptions.buildBooleanOption({defaultValue:!1}),enableNoResultsFoundMessage:f.ComponentOptions.buildBooleanOption({defaultValue:!0}),noResultsFoundMessage:f.ComponentOptions.buildLocalizedStringOption({localizedString:function(){return p.l("noResultFor","${query}")},depend:"enableNoResultsFoundMessage",postProcessing:function(e){return s.escape(e)}}),enableCancelLastAction:f.ComponentOptions.buildBooleanOption({defaultValue:!0}),enableSearchTips:f.ComponentOptions.buildBooleanOption({defaultValue:!0})},n}(y.Component);t.QuerySummary=C,m.Initialization.registerAutoCreateComponent(C)},500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.cancelLastAction="cancelLastAction",e}();t.QuerySummaryEvents=o},620:function(e,t){}});