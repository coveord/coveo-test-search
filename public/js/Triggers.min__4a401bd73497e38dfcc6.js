webpackJsonpCoveo__temporary([57],{285:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=n(8),s=n(5),c=n(11),u=n(1),a=n(10),l=n(13),g=n(2),p=n(0),y=n(3);n(677);var f=function(e){function t(n,o,r,u){var a=e.call(this,n,t.ID,r)||this;return a.element=n,a.options=o,a.bindings=r,a._window=u,a._window=a._window||window,a.options=i.ComponentOptions.initComponentOptions(n,t,o),s.Assert.exists(n),s.Assert.exists(a.options),a.notifications=[],a.bind.onRootElement(c.QueryEvents.querySuccess,a.handleProcessNewQueryResults),a}return o(t,e),t.prototype.handleProcessNewQueryResults=function(e){var t=this;s.Assert.exists(e),s.Assert.exists(e.results),u.$$(this.element).empty(),this.notifications.length=0;var n=!1;if(void 0===e.results.triggers)return void u.$$(this.element).toggleClass("coveo-visible",n);this.executeTriggers(e.results.triggers,"notify",function(e){t.usageAnalytics.logCustomEvent(a.analyticsActionCauseList.triggerNotify,{notification:e.content},t.element),t.notifications.push(e.content),t.element.appendChild(u.$$("div",{className:"coveo-trigger-notify"},e.content).el),n=!0}),this.executeTriggers(e.results.triggers,"redirect",function(e){t.usageAnalytics.logCustomEvent(a.analyticsActionCauseList.triggerRedirect,{redirectedTo:e.content},t.element),t._window.location.replace(e.content)},!0),this.executeTriggers(e.results.triggers,"query",function(e){t.queryStateModel.set(l.QueryStateModel.attributesEnum.q,e.content),t.queryController.executeQuery({beforeExecuteQuery:function(){t.usageAnalytics.logCustomEvent(a.analyticsActionCauseList.triggerQuery,{query:e.content},t.element)}})},!0),this.executeTriggers(e.results.triggers,"execute",function(n){try{var o=t._window[""+n.content.name];if("function"==typeof o){var r=p.object(p.map(n.content.params,function(e,t){return["param"+(t+1),e]}));r.element=t.element,t.usageAnalytics.logCustomEvent(a.analyticsActionCauseList.triggerExecute,{executed:n.content.name},t.element),o.apply(t._window,[r])}else t.logger.error("A trigger tried to call the function '"+n.content.name+"', which doesn't exist.",t,e.query,n)}catch(o){t.logger.error("A trigger called the function '"+n.content.name+"', which threw an error.",t,e.query,n)}}),u.$$(this.element).toggleClass("coveo-visible",n)},t.prototype.executeTriggers=function(e,t,n,o){void 0===o&&(o=!1);var r=p.filter(e,function(e){return e.type==t}),i=p.take(r,o?1:Number.MAX_VALUE);p.each(i,n)},t.ID="Triggers",t.options={},t.doExport=function(){y.exportGlobally({Triggers:t})},t}(r.Component);t.Triggers=f,g.Initialization.registerAutoCreateComponent(f)},677:function(e,t){}});
//# sourceMappingURL=Triggers.min__4a401bd73497e38dfcc6.js.map