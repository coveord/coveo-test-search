webpackJsonpCoveo__temporary([73],{191:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),i=n(7),u=n(4),s=n(10),c=n(2),p=n(1),a=n(0),l=n(3),C=function(t){function e(n,o,r){var u=t.call(this,n,e.ID,r)||this;return u.element=n,u.options=o,u.bindings=r,u.contextContent={},u.options=i.ComponentOptions.initComponentOptions(n,e,o),u.setContext(c.$$(u.element).text().trim()),u.bind.onRootElement(s.QueryEvents.buildingQuery,function(t){return u.handleBuildingQuery(t)}),u}return o(e,t),e.prototype.setContext=function(t){if(a.isString(t)){var e=this.tryParseContextFromString(t);this.contextContent=e}else this.contextContent=t},e.prototype.getContext=function(){var t=this,e=this.getContextKeys();return a.object(e,a.map(e,function(e){return t.getContextValue(e)}))},e.prototype.setContextValue=function(t,e){this.contextContent[t]=e},e.prototype.getContextKeys=function(){return a.keys(this.contextContent)},e.prototype.getContextValue=function(t){var e=this,n=this.contextContent[t];if(a.isArray(n)){var o=[];return a.each(this.contextContent[t],function(t){o.push(e.getModifiedData(t))}),o}return a.isString(n)?this.getModifiedData(n):""},e.prototype.handleBuildingQuery=function(t){var e=this,n=this.getContextKeys();a.each(n,function(n){t.queryBuilder.addContextValue(n,e.getContextValue(n))})},e.prototype.tryParseContextFromString=function(t){if(a.isEmpty(t))return{};try{return JSON.parse(u.Utils.decodeHTMLEntities(t))}catch(e){try{return JSON.parse(t)}catch(t){return this.logger.error("Error while trying to parse context from the PipelineContext component",t),null}}},e.prototype.getModifiedData=function(t){return t.replace(/\{\!([^\}]+)\}/g,function(t,n){var o=n.trim();return Coveo.context&&o in Coveo.context?Coveo.context[o]:o==e.CURRENT_URL?window.location.href:""})},e.ID="PipelineContext",e.CURRENT_URL="CurrentUrl",e.doExport=function(){l.exportGlobally({PipelineContext:e})},e}(r.Component);e.PipelineContext=C,p.Initialization.registerAutoCreateComponent(C)}});