webpackJsonpCoveo__temporary([50],{223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.buildURI=function(e,t,n){return e.replace(t,n)},e.bindClickEventToElement=function(e,t,n){return e},e}();t.ChatterUtils=i},241:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=n(8),l=n(7),s=n(4),a=n(1),p=n(6),u=n(223),d=n(3),c=function(e){function t(n,i,o,l){var p=e.call(this,n,t.ID,o)||this;if(p.element=n,p.options=i,p.bindings=o,p.result=l,p.options=r.ComponentOptions.initComponentOptions(n,t,i),!s.Utils.isNullOrUndefined(s.Utils.getFieldValue(l,"sflikedby"))&&!s.Utils.isNullOrUndefined(s.Utils.getFieldValue(l,"sflikedbyid"))){var u=s.Utils.getFieldValue(l,"sflikedby").split(";"),d=s.Utils.getFieldValue(l,"sflikedbyid").split(";"),c=a.$$("div",{className:"coveo-chatter-result-box-row"});a.$$(n).append(c.el);var f=a.$$("div",{className:"coveo-sprites-common-thumbup_inactive coveo-chatter-result-box-icon"});c.append(f.el);var h=a.$$("div",{className:"coveo-chatter-result-likes"});c.append(h.el),p.renderLikesList(h.el,l,u,d,p.options.nbLikesToRender)}return p}return i(t,e),t.prototype.renderLikesList=function(e,t,n,i,o){for(var r=this,l=a.$$("div"),s=0;s<i.length-1&&(0==o||s<o);s++)l.append(this.renderLikeLink(t,n[s],i[s])),(0==o||s<o-1)&&s<i.length-2?l.append(a.$$("span",{},", ").el):s<i.length-1&&l.append(a.$$("span",{}," "+p.l("And").toLowerCase()+" ").el);if(0==o||i.length<=o)l.append(this.renderLikeLink(t,n[i.length-1],i[i.length-1]));else{var u=i.length-o,d=a.$$("a");d.text(" "+p.l("Others",u.toString(),u)),d.on("click",function(o){o.preventDefault(),a.$$(e).empty(),r.renderLikesList(e,t,n,i,0)}),l.append(d.el)}if(i.length>0){var c=a.$$("span");c.el.innerHTML=p.l("LikesThis",l.el.innerHTML,i.length),a.$$(e).append(c.el)}},t.prototype.renderLikeLink=function(e,t,n){var i=a.$$("a",{href:u.ChatterUtils.buildURI(e.clickUri,s.Utils.getFieldValue(e,"sffeeditemid"),n)});return i.text(t),i.el},t.ID="ChatterLikedBy",t.doExport=function(){d.exportGlobally({ChatterLikedBy:t})},t.options={nbLikesToRender:r.ComponentOptions.buildNumberOption({defaultValue:2,min:0}),openInPrimaryTab:r.ComponentOptions.buildBooleanOption({defaultValue:!1}),openInSubTab:r.ComponentOptions.buildBooleanOption({defaultValue:!0})},t}(l.Component);t.ChatterLikedBy=c,o.Initialization.registerAutoCreateComponent(c)}});
//# sourceMappingURL=ChatterLikedBy.min__808bcdd4270af9aeb300.js.map