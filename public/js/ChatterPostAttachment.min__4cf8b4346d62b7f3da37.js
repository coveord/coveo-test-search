webpackJsonpCoveo__temporary([54],{163:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.buildURI=function(t,e,n){return t.replace(e,n)},t.bindClickEventToElement=function(t,e,n){return t},t}();e.ChatterUtils=o},182:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),r=n(4),l=n(163),s=n(7),a=n(2),c=n(1),u=n(3),f=function(t){function e(n,o,i,a){var u=t.call(this,n,e.ID,i)||this;if(u.element=n,u.options=o,u.bindings=i,u.result=a,!r.Utils.isNullOrUndefined(r.Utils.getFieldValue(a,"sfcontentversionid"))){var f=c.$$("div",{className:"coveo-chatter-result-box-row"});c.$$(n).append(f.el);var p=c.$$("div",{className:"coveo-sprites-common-system coveo-chatter-result-box-icon"});f.append(p.el);var d=c.$$("a",{href:l.ChatterUtils.buildURI(a.clickUri,r.Utils.getFieldValue(a,"sffeeditemid"),r.Utils.getFieldValue(a,"sfcontentversionid"))});f.append(d.el);var v=r.Utils.getFirstAvailableFieldValue(a,["sfcontentfilename","sftitle","sf_title"]);r.Utils.isNullOrUndefined(v)?d.text(s.l("ShowAttachment")):d.text(v)}return u}return o(e,t),e.ID="ChatterPostAttachment",e.doExport=function(){u.exportGlobally({ChatterPostAttachment:e})},e}(i.Component);e.ChatterPostAttachment=f,a.Initialization.registerAutoCreateComponent(f)}});