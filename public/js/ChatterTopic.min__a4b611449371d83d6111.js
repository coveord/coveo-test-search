webpackJsonpCoveo__temporary([86],{245:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=o(7),i=o(4),a=o(2),c=o(1),p=o(3),s=function(t){function e(o,n,r,a){var p=t.call(this,o,e.ID,r)||this;if(p.element=o,p.options=n,p.bindings=r,p.result=a,!i.Utils.isNullOrUndefined(i.Utils.getFieldValue(p.result,"coveochatterfeedtopics"))){var s=c.$$("div",{className:"coveo-chatter-result-box-row"}),l=i.Utils.getFieldValue(a,"coveochatterfeedtopics").split(";"),u=c.$$("div",{className:"coveo-sprites-common-tagging_tag coveo-chatter-result-box-icon"});s.append(u.el);for(var f=0;f<l.length;f++){var v=c.$$("span");if(v.text(l[f]),s.append(v.el),f<l.length-1){var d=c.$$("span");d.text(", "),s.append(d.el)}}c.$$(o).append(s.el)}return p}return n(e,t),e.ID="ChatterTopic",e.doExport=function(){p.exportGlobally({ChatterTopic:e})},e}(r.Component);e.ChatterTopic=s,a.Initialization.registerAutoCreateComponent(s)}});
//# sourceMappingURL=ChatterTopic.min__a4b611449371d83d6111.js.map