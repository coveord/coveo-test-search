webpackJsonpCoveo__temporary([59],{280:function(e,t,o){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),r=o(53),u=o(1),s=o(6),l=o(4),a=o(2),p=o(3),h=o(26);o(668);var y=o(12),c=function(e){function t(o,i,n,u){void 0===u&&(u=h.ModalBox);var l=e.call(this,o,t.ID,n)||this;return l.element=o,l.options=i,l.ModalBox=u,l.bind.onRootElement(r.SettingsEvents.settingsPopulateMenu,function(e){e.menuData.push({className:"coveo-share-query",text:s.l("ShareQuery"),onOpen:function(){return l.open()},onClose:function(){return l.close()},svgIcon:y.SVGIcons.icons.dropdownShareQuery,svgIconClassName:"coveo-share-query-svg"})}),l}return i(t,e),t.prototype.open=function(){null==this.modalbox&&(this.dialogBoxContent=this.buildContent(),this.modalbox=this.ModalBox.open(this.dialogBoxContent,{title:s.l("ShareQuery"),className:"coveo-share-query-opened",body:this.searchInterface.options.modalContainer}))},t.prototype.close=function(){this.modalbox&&(this.modalbox.close(),this.modalbox=null)},t.prototype.getLinkToThisQuery=function(){return this.linkToThisQuery||this.buildLinkToThisQuery(),this.linkToThisQuery.value},t.prototype.setLinkToThisQuery=function(e){this.linkToThisQuery||this.buildLinkToThisQuery(),this.linkToThisQuery.value=e},t.prototype.getCompleteQuery=function(){return this.completeQuery||this.buildCompleteQuery(),this.completeQuery.value},t.prototype.setCompleteQuery=function(e){this.completeQuery||this.buildCompleteQuery(),this.completeQuery.value=e},t.prototype.outputIfNotNull=function(e){return e?"("+e+")":""},t.prototype.buildContent=function(){var e=u.$$("div",{className:"coveo-share-query-summary-info"}).el,t=u.$$("div",{className:"coveo-share-query-summary-info-boxes"}).el;return this.buildLinkToThisQuery(),this.buildCompleteQuery(),t.appendChild(this.buildTextBoxWithLabel(s.l("Link"),this.linkToThisQuery)),t.appendChild(this.buildTextBoxWithLabel(s.l("CompleteQuery"),this.completeQuery)),e.appendChild(t),n.Component.pointElementsToDummyForm(e),e},t.prototype.buildCompleteQuery=function(){this.completeQuery=u.$$("input",{type:"text",className:"coveo-share-query-summary-info-input"}).el;var e=this.queryController.getLastQuery();this.completeQuery.value=l.Utils.trim(this.outputIfNotNull(e.q)+" "+this.outputIfNotNull(e.aq)+" "+this.outputIfNotNull(e.cq))},t.prototype.buildLinkToThisQuery=function(){var e=this;this.linkToThisQuery=u.$$("input",{type:"text",className:"coveo-share-query-summary-info-input"}).el,u.$$(this.linkToThisQuery).on("click",function(){return e.linkToThisQuery.select()}),this.linkToThisQuery.value=window.location.href},t.prototype.buildTextBoxWithLabel=function(e,t){var o=u.$$("span",{className:"coveo-share-query-summary-info-label"});o.text(e);var i=u.$$("div").el;return i.appendChild(o.el),i.appendChild(t),i},t.ID="ShareQuery",t.options={},t.doExport=function(){p.exportGlobally({ShareQuery:t})},t}(n.Component);t.ShareQuery=c,a.Initialization.registerAutoCreateComponent(c)},668:function(e,t){}});
//# sourceMappingURL=ShareQuery.min__10130b8bbdbe87aa2b95.js.map