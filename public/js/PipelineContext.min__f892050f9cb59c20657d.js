webpackJsonpCoveo__temporary([77],{256:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(11),u=n(3),s=n(1),c=n(4),p=n(7),a=n(8),l=n(2),C=function(t){function e(n,o,r){var u=t.call(this,n,e.ID,r)||this;return u.element=n,u.options=o,u.bindings=r,u.contextContent={},u.options=a.ComponentOptions.initComponentOptions(n,e,o),u.setContext(s.$$(u.element).text().trim()),u.bind.onRootElement(i.QueryEvents.buildingQuery,function(t){return u.handleBuildingQuery(t)}),u}return o(e,t),e.prototype.setContext=function(t){if(r.isString(t)){var e=this.tryParseContextFromString(t);this.contextContent=e}else this.contextContent=t},e.prototype.getContext=function(){var t=this,e=this.getContextKeys();return r.object(e,r.map(e,function(e){return t.getContextValue(e)}))},e.prototype.setContextValue=function(t,e){this.contextContent[t]=e},e.prototype.getContextKeys=function(){return r.keys(this.contextContent)},e.prototype.getContextValue=function(t){var e=this,n=this.contextContent[t];if(r.isArray(n)){var o=[];return r.each(this.contextContent[t],function(t){o.push(e.getModifiedData(t))}),o}return r.isString(n)?this.getModifiedData(n):""},e.prototype.handleBuildingQuery=function(t){var e=this,n=this.getContextKeys();r.each(n,function(n){t.queryBuilder.addContextValue(n,e.getContextValue(n))})},e.prototype.tryParseContextFromString=function(t){if(r.isEmpty(t))return{};try{return JSON.parse(c.Utils.decodeHTMLEntities(t))}catch(e){try{return JSON.parse(t)}catch(t){return this.logger.error("Error while trying to parse context from the PipelineContext component",t),null}}},e.prototype.getModifiedData=function(t){return t.replace(/\{\!([^\}]+)\}/g,function(t,n){var o=n.trim();return Coveo.context&&o in Coveo.context?Coveo.context[o]:o==e.CURRENT_URL?window.location.href:""})},e.ID="PipelineContext",e.CURRENT_URL="CurrentUrl",e.doExport=function(){u.exportGlobally({PipelineContext:e})},e}(p.Component);e.PipelineContext=C,l.Initialization.registerAutoCreateComponent(C)}});