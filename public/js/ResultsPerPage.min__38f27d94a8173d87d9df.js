webpackJsonpCoveo__temporary([63],{212:function(e,t,i){"use strict";var s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(t,i){function s(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=i(6),o=i(8),r=i(2),a=i(10),u=i(9),l=i(5),c=i(1),p=i(28),h=i(22),d=i(0),g=i(3),y=i(7);i(475);var f=i(15),P=i(12),v=function(e){function t(i,s,n){var r=e.call(this,i,t.ID,n)||this;return r.element=i,r.options=s,r.options=o.ComponentOptions.initComponentOptions(i,t,s),r.currentResultsPerPage=r.getInitialChoice(),r.queryController.options.resultsPerPage=r.currentResultsPerPage,r.bind.onRootElement(a.QueryEvents.querySuccess,function(e){return r.handleQuerySuccess(e)}),r.bind.onRootElement(a.QueryEvents.queryError,function(){return r.handleQueryError()}),r.bind.onRootElement(a.QueryEvents.noResults,function(e){return r.handleNoResults()}),r.bind.onQueryState(f.MODEL_EVENTS.CHANGE_ONE,P.QUERY_STATE_ATTRIBUTES.NUMBER_OF_RESULTS,function(){return r.handleQueryStateModelChanged()}),r.initComponent(),r}return s(t,e),t.prototype.setResultsPerPage=function(e,t){void 0===t&&(t=u.analyticsActionCauseList.pagerResize),l.Assert.exists(e),l.Assert.check(this.isValidChoice(e),"The specified number of results is not available in the options."),this.updateResultsPerPage(e),this.updateQueryStateModelResultsPerPage(),this.logAnalyticsEvent(t),this.executeQuery()},Object.defineProperty(t.prototype,"resultsPerPage",{get:function(){return this.currentResultsPerPage},enumerable:!0,configurable:!0}),t.prototype.updateResultsPerPage=function(e){this.searchInterface.resultsPerPage=e,this.currentResultsPerPage=e},t.prototype.updateQueryStateModelResultsPerPage=function(){this.queryStateModel.set(P.QueryStateModel.attributesEnum.numberOfResults,this.currentResultsPerPage)},t.prototype.logAnalyticsEvent=function(e){this.usageAnalytics.logCustomEvent(e,{currentResultsPerPage:this.currentResultsPerPage},this.element)},t.prototype.executeQuery=function(){this.queryController.executeQuery({ignoreWarningSearchEvent:!0,keepLastSearchUid:!0,origin:this})},t.prototype.handleQueryStateModelChanged=function(){var e=this.getInitialChoice();this.updateResultsPerPage(e)},t.prototype.getInitialChoice=function(){var e=this.options.choicesDisplayed[0],t=this.options.initialChoice,i=this.queryStateModel.get(P.QueryStateModel.attributesEnum.numberOfResults);if(i!==e&&this.isValidChoice(i))return i;if(void 0!==t){if(this.isValidChoice(t))return t;this.logInvalidConfiguredChoiceWarning()}return e},t.prototype.isValidChoice=function(e){return-1!==this.options.choicesDisplayed.indexOf(e)},t.prototype.logInvalidConfiguredChoiceWarning=function(){var e=this.options.initialChoice,t=this.options.choicesDisplayed;this.logger.warn("The choice "+e+" is not within the choices displayed. Consider setting a value that is valid: "+t+". The first choice will be selected instead.")},t.prototype.initComponent=function(){this.span=c.$$("span",{className:"coveo-results-per-page-text"},y.l("ResultsPerPage")).el,this.element.appendChild(this.span),this.list=c.$$("ul",{className:"coveo-results-per-page-list"}).el,this.element.appendChild(this.list)},t.prototype.render=function(){var e=this;c.$$(this.span).removeClass("coveo-results-per-page-no-results");for(var t=this.options.choicesDisplayed,i=this,s=0;s<t.length;s++)!function(){var n=c.$$("li",{className:"coveo-results-per-page-list-item",tabindex:0,ariaLabel:y.l("DisplayResultsPerPage",t[s].toString())});t[s]==i.currentResultsPerPage&&n.addClass("coveo-active"),function(i){var s=function(){return e.handleClickPage(t[i])};n.on("click",s),n.on("keyup",p.KeyboardUtils.keypressAction(p.KEYBOARD.ENTER,s))}(s),n.el.appendChild(c.$$("a",{className:"coveo-results-per-page-list-item-text"},t[s].toString()).el),i.list.appendChild(n.el)}()},t.prototype.handleQueryError=function(){this.reset()},t.prototype.handleNoResults=function(){this.reset()},t.prototype.handleQuerySuccess=function(e){if(this.searchInterface.isResultsPerPageModifiedByPipeline){this.logger.info("Results per page was modified by backend code (query pipeline). ResultsPerPage component will be hidden",this),this.reset();var t=this.getInitialChoice();return void this.updateResultsPerPage(t)}0!=e.results.results.length&&(this.reset(),this.render())},t.prototype.handleClickPage=function(e){l.Assert.exists(e),this.setResultsPerPage(e)},t.prototype.reset=function(){c.$$(this.span).addClass("coveo-results-per-page-no-results"),c.$$(this.list).empty()},t.ID="ResultsPerPage",t.doExport=function(){g.exportGlobally({ResultsPerPage:t})},t.options={choicesDisplayed:o.ComponentOptions.buildCustomListOption(function(e){var t=d.map(e,function(e){return parseInt(e,10)});return 0==t.length?null:t},{defaultFunction:function(){return h.DeviceUtils.isMobileDevice()?[10,25,50]:[10,25,50,100]}}),initialChoice:o.ComponentOptions.buildNumberOption()},t}(n.Component);t.ResultsPerPage=v,r.Initialization.registerAutoCreateComponent(v)},475:function(e,t){}});