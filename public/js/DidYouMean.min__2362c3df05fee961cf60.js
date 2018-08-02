webpackJsonpCoveo__temporary([70],{184:function(e,t,r){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0}),r(413);var n=r(0),s=r(3),i=r(10),u=r(5),c=r(13),l=r(7),a=r(2),d=r(18),h=r(4),y=r(9),p=r(6),m=r(8),f=r(1),v=function(e){function t(r,o,n){var s=e.call(this,r,t.ID,n)||this;return s.element=r,s.options=o,s.bindings=n,s.options=m.ComponentOptions.initComponentOptions(r,t,o),u.Assert.exists(r),u.Assert.exists(s.options),s.hideNext=!0,s.correctedTerm=null,s.bind.onRootElement(i.QueryEvents.buildingQuery,s.handlePrepareQueryBuilder),s.bind.onRootElement(i.QueryEvents.querySuccess,s.handleProcessNewQueryResults),s.bind.onRootElement(i.QueryEvents.noResults,s.handleNoResults),s.bind.onRootElement(i.QueryEvents.newQuery,s.handleNewQuery),a.$$(s.element).hide(),s}return o(t,e),t.prototype.doQueryWithCorrectedTerm=function(){var e=this;u.Assert.exists(this.correctedTerm),this.queryStateModel.set(c.QueryStateModel.attributesEnum.q,this.correctedTerm),this.queryController.deferExecuteQuery({beforeExecuteQuery:function(){return e.usageAnalytics.logSearchEvent(y.analyticsActionCauseList.didyoumeanClick,{})}})},t.prototype.handleNewQuery=function(){this.hideNext?(a.$$(this.element).empty(),a.$$(this.element).hide(),this.correctedTerm=null):this.hideNext=!0},t.prototype.handlePrepareQueryBuilder=function(e){u.Assert.exists(e),e.queryBuilder.enableDidYouMean=!0},t.prototype.handleNoResults=function(e){if(h.Utils.isNonEmptyArray(e.results.queryCorrections)&&!e.searchAsYouType&&this.options.enableAutoCorrection){var t=this.queryStateModel.get(c.QueryStateModel.attributesEnum.q);this.correctedTerm=e.results.queryCorrections[0].correctedQuery;var r=this.buildCorrectedSentence(e.results.queryCorrections[0]);this.queryStateModel.set(c.QueryStateModel.attributesEnum.q,e.results.queryCorrections[0].correctedQuery),this.searchInterface.historyManager.replaceState(this.queryStateModel.getAttributes()),e.retryTheQuery=!0,this.hideNext=!1;var o=a.$$("div",{className:"coveo-did-you-mean-no-results-for"}).el;o.innerHTML=l.l("noResultFor",'<span class="coveo-highlight coveo-did-you-mean-highlight">'+d.StringUtils.htmlEncode(t)+"</span>"),this.element.appendChild(o);var n=a.$$("div",{className:"coveo-did-you-mean-automatic-correct"}).el;n.innerHTML=l.l("autoCorrectedQueryTo",'<span class="coveo-highlight">'+r+"</span>"),this.element.appendChild(n),a.$$(this.element).show(),this.usageAnalytics.logSearchEvent(y.analyticsActionCauseList.didyoumeanAutomatic,{})}},t.prototype.handleProcessNewQueryResults=function(e){var t=this;u.Assert.exists(e),u.Assert.exists(e.results);var r=e.results;if(this.logger.trace("Received query results from new query",r),h.Utils.isNonEmptyArray(r.queryCorrections)){var o=this.buildCorrectedSentence(r.queryCorrections[0]);this.correctedTerm=r.queryCorrections[0].correctedQuery;var n=a.$$("div",{className:"coveo-did-you-mean-suggestion"},l.l("didYouMean","")).el;this.element.appendChild(n);var s=a.$$("a",{},o).el;n.appendChild(s),a.$$(s).on("click",function(){t.doQueryWithCorrectedTerm()}),a.$$(this.element).show()}},t.prototype.buildCorrectedSentence=function(e){var t=[],r=0;return n.each(e.wordCorrections,function(o){t.push(d.StringUtils.htmlEncode(e.correctedQuery.slice(r,o.offset))),r=o.offset,t.push("<span class='coveo-did-you-mean-word-correction'>"),t.push(d.StringUtils.htmlEncode(e.correctedQuery.slice(r,o.length+r))),t.push("</span>"),r=o.offset+o.length}),t.push(d.StringUtils.htmlEncode(e.correctedQuery.slice(r))),t.join("")},t.ID="DidYouMean",t.doExport=function(){s.exportGlobally({DidYouMean:t})},t.options={enableAutoCorrection:m.ComponentOptions.buildBooleanOption({defaultValue:!0})},t}(p.Component);t.DidYouMean=v,f.Initialization.registerAutoCreateComponent(v)},413:function(e,t){}});