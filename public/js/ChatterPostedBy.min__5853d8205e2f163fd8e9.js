webpackJsonpCoveo__temporary([48],{223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.buildURI=function(e,t,n){return e.replace(t,n)},e.bindClickEventToElement=function(e,t,n){return e},e}();t.ChatterUtils=i},243:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(7),s=n(8),r=n(223),o=n(2),a=n(6),u=n(4),d=n(1),p=n(3),f=function(e){function t(n,i,l,r){var o=e.call(this,n,t.ID,l)||this;if(o.element=n,o.options=i,o.bindings=l,o.result=r,o.options=s.ComponentOptions.initComponentOptions(n,t,i),null!=u.Utils.getFieldValue(o.result,"sfcreatedbyname")){var p=d.$$("span");if(p.text((o.options.useFromInstead?a.l("From"):a.l("PostedBy"))+" "),d.$$(n).append(p.el),d.$$(n).append(o.renderLink(u.Utils.getFieldValue(o.result,"sfcreatedbyname"),u.Utils.getFieldValue(o.result,"sfcreatedbyid"))),o.options.enablePostedOn&&!u.Utils.isNullOrUndefined(u.Utils.getFieldValue(o.result,"sfparentname"))&&!u.Utils.isNullOrUndefined(u.Utils.getFieldValue(o.result,"sfparentid")))if(u.Utils.isNullOrUndefined(u.Utils.getFieldValue(o.result,"sfuserid"))||u.Utils.getFieldValue(o.result,"sfuserid")==u.Utils.getFieldValue(o.result,"sfinsertedbyid")){if(u.Utils.isNullOrUndefined(u.Utils.getFieldValue(o.result,"sfuserid"))){var f=d.$$("span");f.text(" "+a.l("On").toLowerCase()+" "),d.$$(n).append(f.el),d.$$(n).append(o.renderLink(u.Utils.getFieldValue(o.result,"sfparentname"),u.Utils.getFieldValue(o.result,"sfparentid")))}}else{var c=d.$$("span"),b=" "+a.l("OnFeed",o.renderLink(u.Utils.getFieldValue(o.result,"sfparentname"),u.Utils.getFieldValue(o.result,"sfparentid")).outerHTML);c.el.innerHTML=b,d.$$(n).append(c.el)}}return o}return i(t,e),t.prototype.renderLink=function(e,t){var n=d.$$("a",{href:r.ChatterUtils.buildURI(this.result.clickUri,u.Utils.getFieldValue(this.result,"sffeeditemid"),t)});return n.text(e),r.ChatterUtils.bindClickEventToElement(n.el,this.options.openInPrimaryTab,this.options.openInSubTab)},t.ID="ChatterPostedBy",t.doExport=function(){p.exportGlobally({ChatterPostedBy:t})},t.options={enablePostedOn:s.ComponentOptions.buildBooleanOption({defaultValue:!0}),useFromInstead:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openInPrimaryTab:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openInSubTab:s.ComponentOptions.buildBooleanOption({defaultValue:!0})},t.fields=["sfcreatedbyname","sfcreatedbyid","sffeeditemid","sfuserid","sfinsertedbyid","sfparentid","sfparentname"],t}(l.Component);t.ChatterPostedBy=f,o.Initialization.registerAutoCreateComponent(f)}});
//# sourceMappingURL=ChatterPostedBy.min__5853d8205e2f163fd8e9.js.map