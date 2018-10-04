webpackJsonpCoveo__temporary([33],{14:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(0),n=function(){function e(){}return e.addClassToSVGInContainer=function(t,o){var s=t.querySelector("svg");s.setAttribute("class",""+e.getClass(s)+o)},e.removeClassFromSVGInContainer=function(t,o){var s=t.querySelector("svg");s.setAttribute("class",e.getClass(s).replace(o,""))},e.addStyleToSVGInContainer=function(e,t){var o=e.querySelector("svg");s.each(t,function(e,t){o.style[t]=e})},e.getClass=function(e){var t=e.getAttribute("class");return t?t+" ":""},e}();t.SVGDom=n},208:function(e,t,o){"use strict";var s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function s(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(s.prototype=o.prototype,new s)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=o(6),i=o(8),l=o(466),r=o(4),a=o(20),u=o(2),p=o(5),c=o(1),h=o(7),d=o(0),m=o(3),f=o(9);o(467);var g=o(13),v=o(14),C=o(53),y=function(e){function t(o,s,n,l){var r=e.call(this,o,t.ID,n)||this;return r.element=o,r.options=s,r.result=l,r.showingMoreResults=!1,r.options=i.ComponentOptions.initComponentOptions(r.element,t,s),p.Assert.exists(l),r.buildElements(),r.displayThoseResults(r.result.childResults).then(function(){r.updateElementVisibility(),c.$$(r.element.parentElement).hasClass("CoveoCardOverlay")&&r.bindOverlayEvents(),0!=r.result.childResults.length||r.result.moreResults||c.$$(r.element).hide()}),r}return s(t,e),t.prototype.showMoreResults=function(){var e=this;p.Assert.exists(this.result.moreResults),this.cancelAnyPendingShowMore(),this.moreResultsPromise=this.result.moreResults(),this.waitAnimation=c.$$("div",{className:"coveo-loading-spinner"}).el,this.results.appendChild(this.waitAnimation),this.updateElementVisibility();var t=this.moreResultsPromise.then(function(t){return e.childResults=t,e.showingMoreResults=!0,e.usageAnalytics.logClickEvent(f.analyticsActionCauseList.foldingShowMore,e.getAnalyticsMetadata(),e.result,e.element),e.displayThoseResults(t).then(function(){return e.updateElementVisibility(t.length),t})});return t.finally(function(){e.moreResultsPromise=void 0,c.$$(e.waitAnimation).detach(),e.waitAnimation=void 0}),t},t.prototype.showLessResults=function(){this.cancelAnyPendingShowMore(),this.showingMoreResults=!1,this.usageAnalytics.logCustomEvent(f.analyticsActionCauseList.foldingShowLess,this.getAnalyticsMetadata(),this.element),this.displayThoseResults(this.result.childResults),this.updateElementVisibility(),this.scrollToResultElement()},t.prototype.buildElements=function(){this.buildHeader(),this.buildResults(),this.buildFooter()},t.prototype.buildHeader=function(){var e=c.$$("div",{className:"coveo-folding-header"}).el;this.element.appendChild(e),void 0!=this.options.normalCaption&&void 0!=this.options.expandedCaption&&(this.normalCaption=c.$$("div",{className:"coveo-folding-normal-caption"},this.options.normalCaption).el,e.appendChild(this.normalCaption),this.expandedCaption=c.$$("div",{className:"coveo-folding-expanded-caption"},this.options.expandedCaption).el,e.appendChild(this.expandedCaption)),this.oneResultCaption=c.$$("div",{className:"coveo-folding-oneresult-caption"},this.options.oneResultCaption).el,e.appendChild(this.oneResultCaption)},t.prototype.buildResults=function(){this.results=c.$$("div",{className:"coveo-folding-results"}).el,this.element.appendChild(this.results)},t.prototype.buildFooter=function(){var e=this,t=c.$$("div",{className:"coveo-folding-footer"}).el;if(this.element.parentElement.appendChild(t),this.result.moreResults){this.showMore=c.$$("div",{className:"coveo-folding-footer-section-for-less"}).el,c.$$(this.showMore).on("click",function(){return e.showMoreResults()}),t.appendChild(this.showMore),this.showLess=c.$$("div",{className:"coveo-folding-footer-section-for-more"}).el,c.$$(this.showLess).on("click",function(){return e.showLessResults()}),t.appendChild(this.showLess);var o=c.$$("div",{className:"coveo-folding-more"},c.$$("span",{className:"coveo-folding-footer-icon"},g.SVGIcons.icons.arrowDown).el).el;v.SVGDom.addClassToSVGInContainer(o,"coveo-folding-more-svg");var s=c.$$("div",{className:"coveo-folding-less"},c.$$("span",{className:"coveo-folding-footer-icon"},g.SVGIcons.icons.arrowUp).el).el;v.SVGDom.addClassToSVGInContainer(s,"coveo-folding-less-svg");var n=c.$$("a",{className:"coveo-folding-show-more"},this.options.moreCaption).el,i=c.$$("a",{className:"coveo-folding-show-less"},this.options.lessCaption).el;this.showMore.appendChild(n),this.showLess.appendChild(i),this.showMore.appendChild(o),this.showLess.appendChild(s)}},t.prototype.updateElementVisibility=function(e){this.normalCaption&&c.$$(this.normalCaption).toggle(!this.showingMoreResults&&this.result.childResults.length>0),this.expandedCaption&&c.$$(this.expandedCaption).toggle(this.showingMoreResults),c.$$(this.oneResultCaption).toggleClass("coveo-hidden",!(e&&1==e)),this.showMore&&(c.$$(this.showMore).toggle(!this.showingMoreResults&&!r.Utils.exists(this.moreResultsPromise)),c.$$(this.showLess).toggle(this.showingMoreResults));var t=c.$$(this.element).find(".coveo-show-if-normal");t&&c.$$(t).toggle(!this.showingMoreResults);var o=c.$$(this.element).find(".coveo-show-if-expanded");o&&c.$$(o).toggle(this.showingMoreResults)},t.prototype.scrollToResultElement=function(){var e=c.$$(this.element).closest("CoveoResult");window.scrollTo(0,new c.Win(window).scrollY()+e.getBoundingClientRect().top)},t.prototype.displayThoseResults=function(e){var t=this,o=d.map(e,function(e){return t.renderChildResult(e)});return Promise.all(o).then(function(e){return c.$$(t.results).empty(),d.each(e,function(e){t.results.appendChild(e)}),!0})},t.prototype.renderChildResult=function(e){var t=this;return a.QueryUtils.setStateObjectOnQueryResult(this.queryStateModel.get(),e),a.QueryUtils.setSearchInterfaceObjectOnQueryResult(this.searchInterface,e),this.options.resultTemplate.instantiateToElement(e,{wrapInDiv:!1,checkCondition:!1,responsiveComponents:this.searchInterface.responsiveComponents}).then(function(o){return c.$$(o).addClass("coveo-result-folding-child-result"),c.$$(o).toggleClass("coveo-normal-child-result",!t.showingMoreResults),c.$$(o).toggleClass("coveo-expanded-child-result",t.showingMoreResults),t.autoCreateComponentsInsideResult(o,e).initResult.then(function(){return o})})},t.prototype.autoCreateComponentsInsideResult=function(e,t){p.Assert.exists(e);var o=this.searchInterface.options,s={options:o,bindings:this.getBindings(),result:t};return u.Initialization.automaticallyCreateComponentsInside(e,s)},t.prototype.cancelAnyPendingShowMore=function(){this.moreResultsPromise&&(this.moreResultsPromise=void 0),p.Assert.doesNotExists(this.moreResultsPromise),p.Assert.doesNotExists(this.waitAnimation)},t.prototype.bindOverlayEvents=function(){var e=this;this.bind.one(this.element.parentElement,"openCardOverlay",function(){e.result.moreResults&&e.showMoreResults()})},t.prototype.getAnalyticsMetadata=function(){return{documentURL:this.result.clickUri,documentTitle:this.result.title,author:r.Utils.getFieldValue(this.result,"author")}},t.ID="ResultFolding",t.doExport=function(){m.exportGlobally({ResultFolding:t,DefaultFoldingTemplate:l.DefaultFoldingTemplate})},t.options={resultTemplate:C.TemplateComponentOptions.buildTemplateOption({defaultFunction:function(){return new l.DefaultFoldingTemplate}}),normalCaption:i.ComponentOptions.buildLocalizedStringOption(),expandedCaption:i.ComponentOptions.buildLocalizedStringOption(),moreCaption:i.ComponentOptions.buildLocalizedStringOption({postProcessing:function(e){return e||h.l("ShowMore")}}),lessCaption:i.ComponentOptions.buildLocalizedStringOption({postProcessing:function(e){return e||h.l("ShowLess")}}),oneResultCaption:i.ComponentOptions.buildLocalizedStringOption({postProcessing:function(e){return e||h.l("DisplayingTheOnlyMessage")}})},t}(n.Component);t.ResultFolding=y,u.Initialization.registerAutoCreateComponent(y)},466:function(e,t,o){"use strict";var s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function s(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(s.prototype=o.prototype,new s)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=o(21),i=function(e){function t(){return e.call(this)||this}return s(t,e),t.prototype.instantiateToString=function(e){return'<div class="coveo-child-result"><span class="CoveoIcon" data-small="true"></span> <a class="CoveoResultLink"></a> <span class="CoveoQuickview"></span></div>'},t.prototype.getType=function(){return"DefaultFoldingTemplate"},t}(n.Template);t.DefaultFoldingTemplate=i},467:function(e,t){}});