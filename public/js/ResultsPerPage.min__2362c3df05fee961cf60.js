webpackJsonpCoveo__temporary([62],{210:function(e,t,s){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function i(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=s(6),o=s(8),r=s(1),l=s(10),a=s(9),u=s(5),c=s(2),p=s(26),h=s(21),d=s(0),f=s(3),g=s(7);s(471);var y=function(e){function t(s,i,n){var r=e.call(this,s,t.ID,n)||this;return r.element=s,r.options=i,r.options=o.ComponentOptions.initComponentOptions(s,t,i),r.currentResultsPerPage=r.getInitialChoice(),r.queryController.options.resultsPerPage=r.currentResultsPerPage,r.bind.onRootElement(l.QueryEvents.querySuccess,function(e){return r.handleQuerySuccess(e)}),r.bind.onRootElement(l.QueryEvents.queryError,function(){return r.handleQueryError()}),r.bind.onRootElement(l.QueryEvents.noResults,function(e){return r.handleNoResults()}),r.initComponent(s),r}return i(t,e),t.prototype.setResultsPerPage=function(e,t){void 0===t&&(t=a.analyticsActionCauseList.pagerResize),u.Assert.exists(e),u.Assert.check(-1!=this.options.choicesDisplayed.indexOf(e),"The specified number of results is not available in the options."),this.searchInterface.resultsPerPage=e,this.currentResultsPerPage=e,this.usageAnalytics.logCustomEvent(t,{currentResultsPerPage:this.currentResultsPerPage},this.element),this.queryController.executeQuery({ignoreWarningSearchEvent:!0,keepLastSearchUid:!0,origin:this})},t.prototype.getInitialChoice=function(){var e=this.options.choicesDisplayed[0];return void 0!==this.options.initialChoice&&(this.options.choicesDisplayed.indexOf(this.options.initialChoice)>-1?e=this.options.initialChoice:this.logger.warn("The initial number of results is not within the choices displayed. Consider setting a value that can be selected. The first choice will be selected instead.")),e},t.prototype.initComponent=function(e){this.span=c.$$("span",{className:"coveo-results-per-page-text"},g.l("ResultsPerPage")).el,e.appendChild(this.span),this.list=c.$$("ul",{className:"coveo-results-per-page-list"}).el,e.appendChild(this.list)},t.prototype.render=function(){var e=this;c.$$(this.span).removeClass("coveo-results-per-page-no-results");for(var t=this.options.choicesDisplayed,s=this,i=0;i<t.length;i++)!function(){var n=c.$$("li",{className:"coveo-results-per-page-list-item",tabindex:0});t[i]==s.currentResultsPerPage&&n.addClass("coveo-active"),function(s){var i=function(){return e.handleClickPage(t[s])};n.on("click",i),n.on("keyup",p.KeyboardUtils.keypressAction(p.KEYBOARD.ENTER,i))}(i),n.el.appendChild(c.$$("a",{className:"coveo-results-per-page-list-item-text"},t[i].toString()).el),s.list.appendChild(n.el)}()},t.prototype.handleQueryError=function(){this.reset()},t.prototype.handleNoResults=function(){this.reset()},t.prototype.handleQuerySuccess=function(e){if(this.searchInterface.isResultsPerPageModifiedByPipeline)return this.logger.info("Results per page was modified by backend code (query pipeline). ResultsPerPage component will be hidden",this),this.reset(),this.currentResultsPerPage=this.getInitialChoice(),void(this.searchInterface.resultsPerPage=this.currentResultsPerPage);0!=e.results.results.length&&(this.reset(),this.render())},t.prototype.handleClickPage=function(e){u.Assert.exists(e),this.setResultsPerPage(e)},t.prototype.reset=function(){c.$$(this.span).addClass("coveo-results-per-page-no-results"),c.$$(this.list).empty()},t.ID="ResultsPerPage",t.doExport=function(){f.exportGlobally({ResultsPerPage:t})},t.options={choicesDisplayed:o.ComponentOptions.buildCustomListOption(function(e){var t=d.map(e,function(e){return parseInt(e,10)});return 0==t.length?null:t},{defaultFunction:function(){return h.DeviceUtils.isMobileDevice()?[10,25,50]:[10,25,50,100]}}),initialChoice:o.ComponentOptions.buildNumberOption()},t}(n.Component);t.ResultsPerPage=y,r.Initialization.registerAutoCreateComponent(y)},471:function(e,t){}});