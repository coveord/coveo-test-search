webpackJsonpCoveo__temporary([49],{229:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n(33),r=n(11),u=n(3),l=n(5),a=n(13),c=n(6),p=n(17),g=n(1),d=n(10),m=n(7),h=n(8),y=n(2),f=n(501),b=n(18),v=function(e){function t(n,o,u){var l=e.call(this,n,t.ID,u)||this;l.options=o,l.partialQueries=[],l.lastSuggestions=[],l.resultsToBuildWith=[],l.options&&"omniboxSuggestionOptions"in l.options&&(l.options=i.extend(l.options,l.options.omniboxSuggestionOptions)),l.options=h.ComponentOptions.initComponentOptions(n,t,l.options);var a=function(e){var t=g.$$("div",{className:"magic-box-suggestion coveo-omnibox-selectable coveo-top-analytics-suggestion-row"});return(new p.AccessibleButton).withElement(t).withLabel(e.rawValue).build(),e.data&&(t.el.innerHTML=e.data),t.el.outerHTML};l.options.onSelect=l.options.onSelect||l.onRowSelection;var c={row:a};return l.suggestionForOmnibox=new f.SuggestionForOmnibox(c,function(e,t){l.options.onSelect.call(l,e,t)},function(e,t){l.onRowTab.call(l,e,t)}),l.bind.onRootElement(s.OmniboxEvents.populateOmnibox,function(e){return l.handlePopulateOmnibox(e)}),l.bind.onRootElement(r.QueryEvents.querySuccess,function(){return l.partialQueries=[]}),l}return o(t,e),t.doExport=function(){u.exportGlobally({AnalyticsSuggestions:t})},t.prototype.selectSuggestion=function(e){if(this.currentlyDisplayedSuggestions)if(isNaN(e))this.currentlyDisplayedSuggestions[e]&&g.$$(this.currentlyDisplayedSuggestions[e].element).trigger("click");else{var t=i.findWhere(this.currentlyDisplayedSuggestions,{pos:e});t&&g.$$(t.element).trigger("click")}},t.prototype.handlePopulateOmnibox=function(e){var t=this;l.Assert.exists(e);var n=new Promise(function(n,o){var s=t.usageAnalytics.getTopQueries({pageSize:t.options.numberOfSuggestions,queryText:e.completeQueryExpression.word});s.then(function(o){t.resultsToBuildWith=i.map(o,function(e){return{value:e}}),t.lastSuggestions=o,i.isEmpty(t.resultsToBuildWith)||""==e.completeQueryExpression.word||t.partialQueries.push(e.completeQueryExpression.word);var s=t.suggestionForOmnibox.buildOmniboxElement(t.resultsToBuildWith,e);t.currentlyDisplayedSuggestions={},s&&i.map(g.$$(s).findAll(".coveo-omnibox-selectable"),function(e,n){t.currentlyDisplayedSuggestions[g.$$(e).text()]={element:e,pos:n}}),n({element:s,zIndex:t.options.omniboxZIndex})}),s.catch(function(){n({element:void 0})})});e.rows.push({deferred:n})},t.prototype.onRowSelection=function(e,t){t.clear(),t.closeOmnibox(),this.queryStateModel.set(a.QueryStateModel.attributesEnum.q,e),this.usageAnalytics.logSearchEvent(this.getOmniboxAnalyticsEventCause(),{partialQueries:this.cleanCustomData(this.partialQueries),suggestionRanking:i.indexOf(i.pluck(this.resultsToBuildWith,"value"),e),suggestions:this.cleanCustomData(this.lastSuggestions),partialQuery:t.completeQueryExpression.word}),this.queryController.executeQuery()},t.prototype.onRowTab=function(e,t){t.clear(),t.closeOmnibox(),this.queryStateModel.set(a.QueryStateModel.attributesEnum.q,""+e),this.usageAnalytics.logCustomEvent(this.getOmniboxAnalyticsEventCause(),{partialQueries:this.cleanCustomData(this.partialQueries),suggestionRanking:i.indexOf(i.pluck(this.resultsToBuildWith,"value"),e),suggestions:this.cleanCustomData(this.lastSuggestions),partialQuery:t.completeQueryExpression.word},this.element)},t.prototype.cleanCustomData=function(e,t){void 0===t&&(t=256),e=i.compact(i.filter(e,function(e,t,n){return 0===t||e!==n[t-1]})),e=i.map(e,function(e){return e.replace(/;/g,"")});var n=[];return i.reduceRight(e,function(e,o){var i=e+o.length;return i<=t&&n.push(o),i},0),e=n.reverse(),e.join(";").length>=256?this.cleanCustomData(e,t-10):e.join(";")},t.prototype.getOmniboxAnalyticsEventCause=function(){return this.searchInterface instanceof b.StandaloneSearchInterface?d.analyticsActionCauseList.omniboxFromLink:d.analyticsActionCauseList.omniboxAnalytics},t.ID="AnalyticsSuggestions",t.options={omniboxZIndex:h.ComponentOptions.buildNumberOption({defaultValue:52,min:0}),headerTitle:h.ComponentOptions.buildLocalizedStringOption({localizedString:function(){return c.l("SuggestedQueries")}}),numberOfSuggestions:h.ComponentOptions.buildNumberOption({defaultValue:5,min:1})},t}(m.Component);t.AnalyticsSuggestions=v,y.Initialization.registerAutoCreateComponent(v)},501:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(89),i=n(1),s=n(0),r=function(){function e(e,t,n){this.structure=e,this.onSelect=t,this.onTabPress=n}return e.prototype.buildOmniboxElement=function(e,t){var n;if(0!=e.length){if(n=i.$$("div").el,this.structure.header){var o=this.buildElementHeader();n.appendChild(o)}var r=this.buildRowElements(e,t);s.each(r,function(e){n.appendChild(e)})}return n},e.prototype.buildElementHeader=function(){return i.$$("div",void 0,this.structure.header.template({headerTitle:this.structure.header.title})).el},e.prototype.buildRowElements=function(e,t){var n=this,r=[];return s.each(e,function(e){var s=i.$$("div",void 0,n.structure.row({rawValue:e.value,data:o.DomUtils.highlightElement(e.value,t.completeQueryExpression.word)})).el;i.$$(s).on("click",function(){n.onSelect.call(n,e.value,t)}),i.$$(s).on("keyboardSelect",function(){n.onSelect.call(n,e.value,t)}),i.$$(s).on("tabSelect",function(){n.onTabPress.call(n,e.value,t)}),r.push(s)}),r},e}();t.SuggestionForOmnibox=r}});