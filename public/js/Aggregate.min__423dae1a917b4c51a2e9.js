webpackJsonpCoveo__temporary([74],{161:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=o(6),r=o(7),u=o(10),s=o(1),l=o(2),p=o(25),a=o(0),d=o(3),c=function(e){function t(o,n,i){var s=e.call(this,o,t.ID,i)||this;return s.element=o,s.options=n,s.options=r.ComponentOptions.initComponentOptions(o,t,n),s.bind.onRootElement(u.QueryEvents.buildingQuery,function(e){return s.handleBuildingQuery(e)}),s.bind.onRootElement(u.QueryEvents.querySuccess,function(e){return s.handleQuerySuccess(e)}),l.$$(s.element).hide(),s}return n(t,e),t.doExport=function(){d.exportGlobally({Aggregate:t})},t.prototype.handleBuildingQuery=function(e){var t={field:this.options.field,maximumNumberOfValues:0,computedFields:[{field:this.options.field,operation:this.options.operation}]};this.index=e.queryBuilder.groupByRequests.length,e.queryBuilder.groupByRequests.push(t)},t.prototype.handleQuerySuccess=function(e){if(a.isNumber(this.index)&&0!=e.results.groupByResults.length){var t=e.results.groupByResults[this.index],o=t.globalComputedFieldResults[0];l.$$(this.element).text(p.format(o,this.options.format)),l.$$(this.element).show()}else l.$$(this.element).hide()},t.ID="Aggregate",t.options={field:r.ComponentOptions.buildFieldOption({required:!0}),operation:r.ComponentOptions.buildStringOption({defaultValue:"sum"}),format:r.ComponentOptions.buildStringOption({defaultValue:"c0"})},t}(i.Component);t.Aggregate=c,s.Initialization.registerAutoCreateComponent(c)}});