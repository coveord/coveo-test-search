webpackJsonpCoveo__temporary([46],{204:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var s=n(25);n(448);var i=n(0),r=n(10),l=n(357),a=n(3),u=n(5),p=n(12),h=n(7),c=n(27),y=n(1),d=n(9),g=n(6),f=n(8),m=n(2);t.noResultsCssClass="coveo-show-if-no-results";var C=function(e){function n(t,o,s){var i=e.call(this,t,n.ID,s)||this;return i.element=t,i.options=o,i.options=f.ComponentOptions.initComponentOptions(t,n,o),i.bind.onRootElement(r.QueryEvents.querySuccess,function(e){return i.handleQuerySuccess(e)}),i.bind.onRootElement(r.QueryEvents.queryError,function(){return i.hide()}),i.hide(),i.textContainer=y.$$("span").el,y.$$(i.element).prepend(i.textContainer),i}return o(n,e),n.prototype.hide=function(){y.$$(this.element).addClass("coveo-hidden")},n.prototype.show=function(){y.$$(this.element).removeClass("coveo-hidden")},n.prototype.render=function(e,t){if(y.$$(this.textContainer).empty(),this.show(),this.updateNoResultsSnapshot(),this.hideNoResultsPage(),this.options.onlyDisplaySearchTips||(this.isInfiniteScrollingMode()?this.renderSummaryInInfiniteScrollingMode(e,t):this.renderSummaryInStandardMode(e,t)),null!=t.exception&&null!=t.exception.code){var n=("QueryException"+t.exception.code).toLocaleString();this.textContainer.innerHTML=h.l("QueryException",n)}else 0==t.results.length?(this.updateQueryTagsInNoResultsContainer(),this.displayInfoOnNoResults()):this.lastKnownGoodState=this.queryStateModel.getAttributes()},n.prototype.handleQuerySuccess=function(e){u.Assert.exists(e),this.render(e.query,e.results)},n.prototype.isInfiniteScrollingMode=function(){var e=y.$$(this.root).findAll("."+g.Component.computeCssClassNameForType("ResultList"));return i.any(e,function(e){return c.get(e).options.enableInfiniteScroll})},n.prototype.formatSummary=function(e,t){var n=s.format(e.firstResult+1,"n0"),o=s.format(e.firstResult+t.results.length,"n0"),r=s.format(t.totalCountFiltered,"n0"),l=e.q?i.escape(e.q.trim()):"";return{first:n,last:o,totalCount:r,query:l,highlightFirst:y.$$("span",{className:"coveo-highlight"},n).el,highlightLast:y.$$("span",{className:"coveo-highlight"},o).el,highlightTotal:y.$$("span",{className:"coveo-highlight"},r).el,highlightQuery:y.$$("span",{className:"coveo-highlight"},l).el}},n.prototype.renderSummaryInStandardMode=function(e,t){if(t.results.length>0){var n=this.formatSummary(e,t),o=n.query,s=n.highlightFirst,i=n.highlightLast,r=n.highlightTotal,l=n.highlightQuery;this.textContainer.innerHTML=o?h.l("ShowingResultsOfWithQuery",s.outerHTML,i.outerHTML,r.outerHTML,l.outerHTML,t.results.length):h.l("ShowingResultsOf",s.outerHTML,i.outerHTML,r.outerHTML,t.results.length)}},n.prototype.renderSummaryInInfiniteScrollingMode=function(e,t){if(t.results.length>0){var n=this.formatSummary(e,t),o=n.query,s=n.highlightQuery,i=n.highlightTotal;this.textContainer.innerHTML=o?h.l("ShowingResultsWithQuery",i.outerHTML,s.outerHTML,t.results.length):h.l("ShowingResults",i.outerHTML,t.results.length)}},n.prototype.updateNoResultsSnapshot=function(){var e=this.getNoResultsContainer();null==this.noResultsSnapshot&&e&&(this.noResultsSnapshot=e.innerHTML)},n.prototype.updateQueryTagsInNoResultsContainer=function(){var e=this.getNoResultsContainer();e&&(e.innerHTML=this.parseQueryTags(this.noResultsSnapshot))},n.prototype.parseQueryTags=function(e){if(!e)return"";var t='<span class="coveo-highlight">'+this.queryEscaped+"</span>";return e.replace(new RegExp(/\$\{query\}/g),t)},Object.defineProperty(n.prototype,"queryEscaped",{get:function(){return i.escape(this.queryStateModel.get(p.QueryStateModel.attributesEnum.q))},enumerable:!0,configurable:!0}),n.prototype.displayInfoOnNoResults=function(){if(this.showNoResultsPage(),this.options.enableNoResultsFoundMessage){var e=this.getNoResultsFoundMessageElement();this.textContainer.appendChild(e.el)}if(this.options.enableCancelLastAction){var t=this.getCancelLastActionElement();this.textContainer.appendChild(t.el)}if(this.options.enableSearchTips){var n=this.getSearchTipsTitleElement(),o=this.getSearchTipsListElement();this.textContainer.appendChild(n.el),this.textContainer.appendChild(o.el)}},n.prototype.hideNoResultsPage=function(){this.getAllNoResultsContainer().forEach(function(e){y.$$(e).removeClass("coveo-no-results")})},n.prototype.showNoResultsPage=function(){this.getAllNoResultsContainer().forEach(function(e){y.$$(e).addClass("coveo-no-results")})},n.prototype.getNoResultsContainer=function(){return y.$$(this.element).find("."+t.noResultsCssClass)},n.prototype.getAllNoResultsContainer=function(){return y.$$(this.element).findAll("."+t.noResultsCssClass)},n.prototype.getNoResultsFoundMessageElement=function(){var e=this.parseQueryTags(this.options.noResultsFoundMessage);return y.$$("div",{className:"coveo-query-summary-no-results-string"},e)},n.prototype.getCancelLastActionElement=function(){var e=this,t=y.$$("div",{className:"coveo-query-summary-cancel-last"},h.l("CancelLastAction"));return t.on("click",function(){e.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.noResultsBack,{},e.root),e.usageAnalytics.logSearchEvent(d.analyticsActionCauseList.noResultsBack,{}),e.lastKnownGoodState?(e.queryStateModel.reset(),e.queryStateModel.setMultiple(e.lastKnownGoodState),y.$$(e.root).trigger(l.QuerySummaryEvents.cancelLastAction),e.queryController.executeQuery()):history.back()}),t},n.prototype.getSearchTipsTitleElement=function(){var e=y.$$("div",{className:"coveo-query-summary-search-tips-info"});return e.text(h.l("SearchTips")),e},n.prototype.getSearchTipsListElement=function(){var e=y.$$("ul"),t=y.$$("li");t.text(h.l("CheckSpelling"));var n=y.$$("li");if(n.text(h.l("TryUsingFewerKeywords")),e.el.appendChild(t.el),e.el.appendChild(n.el),this.queryStateModel.atLeastOneFacetIsActive()){var o=y.$$("li");o.text(h.l("SelectFewerFilters")),e.el.appendChild(o.el)}return e},n.ID="QuerySummary",n.doExport=function(){a.exportGlobally({QuerySummary:n})},n.options={onlyDisplaySearchTips:f.ComponentOptions.buildBooleanOption({defaultValue:!1}),enableNoResultsFoundMessage:f.ComponentOptions.buildBooleanOption({defaultValue:!0}),noResultsFoundMessage:f.ComponentOptions.buildStringOption({defaultValue:h.l("noResultFor","${query}"),depend:"enableNoResultsFoundMessage",postProcessing:function(e){return i.escape(e)}}),enableCancelLastAction:f.ComponentOptions.buildBooleanOption({defaultValue:!0}),enableSearchTips:f.ComponentOptions.buildBooleanOption({defaultValue:!0})},n}(g.Component);t.QuerySummary=C,m.Initialization.registerAutoCreateComponent(C)},357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.cancelLastAction="cancelLastAction",e}();t.QuerySummaryEvents=o},448:function(e,t){}});