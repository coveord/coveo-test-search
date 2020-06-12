webpackJsonpCoveo__temporary([39],{264:function(t,e,s){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])};return function(e,s){function o(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(o.prototype=s.prototype,new o)}}(),n=this&&this.__awaiter||function(t,e,s,o){return new(s||(s=Promise))(function(n,i){function l(t){try{a(o.next(t))}catch(t){i(t)}}function r(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){t.done?n(t.value):new s(function(e){e(t.value)}).then(l,r)}a((o=o.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){function s(t){return function(e){return o([t,e])}}function o(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(l=i[2&s[0]?"return":s[0]?"throw":"next"])&&!(l=l.call(i,s[1])).done)return l;switch(i=0,l&&(s=[0,l.value]),s[0]){case 0:case 1:l=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,i=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(l=a.trys,!(l=l.length>0&&l[l.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!l||s[1]>l[0]&&s[1]<l[3])){a.label=s[1];break}if(6===s[0]&&a.label<l[1]){a.label=l[1],l=s;break}if(l&&a.label<l[2]){a.label=l[2],a.ops.push(s);break}l[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],i=0}finally{n=l=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}var n,i,l,r,a={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r};Object.defineProperty(e,"__esModule",{value:!0});var l=s(7),r=s(8),a=s(641),u=s(4),c=s(22),h=s(2),p=s(5),d=s(1),f=s(6),m=s(0),v=s(3),g=s(10),w=s(9);s(642);var y=s(12),C=s(14),$=s(60),b=s(16),R=function(t){function e(s,o,n,i){var l=t.call(this,s,e.ID,n)||this;return l.element=s,l.options=o,l.result=i,l.showingMoreResults=!1,l.options=r.ComponentOptions.initComponentOptions(l.element,e,o),p.Assert.exists(i),l.buildElements(),l.renderElements(),l}return o(e,t),e.prototype.showMoreResults=function(){return n(this,void 0,void 0,function(){var t,e,s;return i(this,function(o){switch(o.label){case 0:return p.Assert.exists(this.result.moreResults),this.cancelAnyPendingShowMore(),this.moreResultsPromise=this.result.moreResults(),this.waitAnimation=d.$$("div",{className:"coveo-loading-spinner"}).el,this.results.appendChild(this.waitAnimation),this.updateElementVisibility(),[4,this.moreResultsPromise];case 1:t=o.sent(),this.childResults=t,this.showingMoreResults=!0,this.usageAnalytics.logClickEvent(g.analyticsActionCauseList.foldingShowMore,this.getAnalyticsMetadata(),this.result,this.element),o.label=2;case 2:return o.trys.push([2,4,,5]),[4,this.displayThoseResults(t)];case 3:return o.sent(),this.updateElementVisibility(t.length),[3,5];case 4:return e=o.sent(),s=new w.Logger(this),s.warn("An error occured when trying to display more results"),[3,5];case 5:return this.moreResultsPromise=void 0,d.$$(this.waitAnimation).detach(),this.waitAnimation=void 0,[2,t]}})})},e.prototype.showLessResults=function(){return n(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return this.cancelAnyPendingShowMore(),this.showingMoreResults=!1,this.usageAnalytics.logCustomEvent(g.analyticsActionCauseList.foldingShowLess,this.getAnalyticsMetadata(),this.element),[4,this.displayThoseResults(this.result.childResults)];case 1:return t.sent(),this.updateElementVisibility(),this.scrollToResultElement(),[2]}})})},e.prototype.buildElements=function(){this.buildHeader(),this.buildResults(),this.buildFooter()},e.prototype.renderElements=function(){return n(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return[4,this.displayThoseResults(this.result.childResults)];case 1:return t.sent(),this.updateElementVisibility(),d.$$(this.element.parentElement).hasClass("CoveoCardOverlay")&&this.bindOverlayEvents(),0!=this.result.childResults.length||this.result.moreResults||d.$$(this.element).hide(),[2]}})})},e.prototype.buildHeader=function(){var t=d.$$("div",{className:"coveo-folding-header"}).el;this.element.appendChild(t),void 0!=this.options.normalCaption&&void 0!=this.options.expandedCaption&&(this.normalCaption=d.$$("div",{className:"coveo-folding-normal-caption"},this.options.normalCaption).el,t.appendChild(this.normalCaption),this.expandedCaption=d.$$("div",{className:"coveo-folding-expanded-caption"},this.options.expandedCaption).el,t.appendChild(this.expandedCaption)),this.oneResultCaption=d.$$("div",{className:"coveo-folding-oneresult-caption"},this.options.oneResultCaption).el,t.appendChild(this.oneResultCaption)},e.prototype.buildResults=function(){this.results=d.$$("div",{className:"coveo-folding-results"}).el,this.element.appendChild(this.results)},e.prototype.buildFooter=function(){var t=this,e=d.$$("div",{className:"coveo-folding-footer"}).el;if(this.element.parentElement.appendChild(e),this.result.moreResults){this.showMore=d.$$("div",{className:"coveo-folding-footer-section-for-less"}).el,e.appendChild(this.showMore),this.showLess=d.$$("div",{className:"coveo-folding-footer-section-for-more"}).el,e.appendChild(this.showLess);var s=d.$$("div",{className:"coveo-folding-more"},d.$$("span",{className:"coveo-folding-footer-icon"},y.SVGIcons.icons.arrowDown).el).el;C.SVGDom.addClassToSVGInContainer(s,"coveo-folding-more-svg");var o=d.$$("div",{className:"coveo-folding-less"},d.$$("span",{className:"coveo-folding-footer-icon"},y.SVGIcons.icons.arrowUp).el).el;C.SVGDom.addClassToSVGInContainer(o,"coveo-folding-less-svg");var n=d.$$("a",{className:"coveo-folding-show-more"},this.options.moreCaption).el,i=d.$$("a",{className:"coveo-folding-show-less"},this.options.lessCaption).el;(new b.AccessibleButton).withElement(this.showMore).withLabel(this.options.moreCaption).withSelectAction(function(){return t.showMoreResults()}).build(),(new b.AccessibleButton).withElement(this.showLess).withLabel(this.options.lessCaption).withSelectAction(function(){return t.showLessResults()}).build(),this.showMore.appendChild(n),this.showLess.appendChild(i),this.showMore.appendChild(s),this.showLess.appendChild(o)}},e.prototype.updateElementVisibility=function(t){this.normalCaption&&d.$$(this.normalCaption).toggle(!this.showingMoreResults&&this.result.childResults.length>0),this.expandedCaption&&d.$$(this.expandedCaption).toggle(this.showingMoreResults),d.$$(this.oneResultCaption).toggleClass("coveo-hidden",!(t&&1==t)),this.showMore&&(d.$$(this.showMore).toggleClass("coveo-visible",!this.showingMoreResults&&!u.Utils.exists(this.moreResultsPromise)),d.$$(this.showLess).toggleClass("coveo-visible",this.showingMoreResults));var e=d.$$(this.element).find(".coveo-show-if-normal");e&&d.$$(e).toggle(!this.showingMoreResults);var s=d.$$(this.element).find(".coveo-show-if-expanded");s&&d.$$(s).toggle(this.showingMoreResults)},e.prototype.scrollToResultElement=function(){var t=d.$$(this.element).closest("CoveoResult");window.scrollTo(0,new d.Win(window).scrollY()+t.getBoundingClientRect().top)},e.prototype.displayThoseResults=function(t){return n(this,void 0,void 0,function(){var e,s,o=this;return i(this,function(n){switch(n.label){case 0:return e=m.map(t,function(t){return o.renderChildResult(t)}),[4,Promise.all(e)];case 1:return s=n.sent(),d.$$(this.results).empty(),m.each(s,function(t){o.results.appendChild(t)}),[2,!0]}})})},e.prototype.renderChildResult=function(t){return n(this,void 0,void 0,function(){var e;return i(this,function(s){switch(s.label){case 0:return c.QueryUtils.setStateObjectOnQueryResult(this.queryStateModel.get(),t),c.QueryUtils.setSearchInterfaceObjectOnQueryResult(this.searchInterface,t),[4,this.options.resultTemplate.instantiateToElement(t,{wrapInDiv:!1,checkCondition:!1,responsiveComponents:this.searchInterface.responsiveComponents})];case 1:return e=s.sent(),d.$$(e).addClass("coveo-result-folding-child-result"),d.$$(e).toggleClass("coveo-normal-child-result",!this.showingMoreResults),d.$$(e).toggleClass("coveo-expanded-child-result",this.showingMoreResults),[4,h.Initialization.automaticallyCreateComponentsInsideResult(e,t).initResult];case 2:return s.sent(),[2,e]}})})},e.prototype.cancelAnyPendingShowMore=function(){this.moreResultsPromise&&(this.moreResultsPromise=void 0),p.Assert.doesNotExists(this.moreResultsPromise),p.Assert.doesNotExists(this.waitAnimation)},e.prototype.bindOverlayEvents=function(){var t=this;this.bind.one(this.element.parentElement,"openCardOverlay",function(){t.result.moreResults&&t.showMoreResults()})},e.prototype.getAnalyticsMetadata=function(){return{documentURL:this.result.clickUri,documentTitle:this.result.title,author:u.Utils.getFieldValue(this.result,"author")}},e.ID="ResultFolding",e.doExport=function(){v.exportGlobally({ResultFolding:e,DefaultFoldingTemplate:a.DefaultFoldingTemplate})},e.options={resultTemplate:$.TemplateComponentOptions.buildTemplateOption({defaultFunction:function(){return new a.DefaultFoldingTemplate}}),normalCaption:r.ComponentOptions.buildLocalizedStringOption(),expandedCaption:r.ComponentOptions.buildLocalizedStringOption(),moreCaption:r.ComponentOptions.buildLocalizedStringOption({postProcessing:function(t){return t||f.l("ShowMore")}}),lessCaption:r.ComponentOptions.buildLocalizedStringOption({postProcessing:function(t){return t||f.l("ShowLess")}}),oneResultCaption:r.ComponentOptions.buildLocalizedStringOption({postProcessing:function(t){return t||f.l("DisplayingTheOnlyMessage")}})},e}(l.Component);e.ResultFolding=R,h.Initialization.registerAutoCreateComponent(R)},641:function(t,e,s){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])};return function(e,s){function o(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(o.prototype=s.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=s(24),i=function(t){function e(){return t.call(this)||this}return o(e,t),e.prototype.instantiateToString=function(t){return'<div class="coveo-child-result"><span class="CoveoIcon" data-small="true"></span> <a class="CoveoResultLink"></a> <span class="CoveoQuickview"></span></div>'},e.prototype.getType=function(){return"DefaultFoldingTemplate"},e}(n.Template);e.DefaultFoldingTemplate=i},642:function(t,e){}});