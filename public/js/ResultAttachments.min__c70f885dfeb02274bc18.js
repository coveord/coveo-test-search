webpackJsonpCoveo__temporary([45],{207:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),s=n(8),i=n(464),r=n(4),u=n(19),c=n(2),l=n(5),p=n(1),m=n(0),h=n(3);n(465);var f=n(53),d=function(t){function e(n,o,a,i,u){void 0===u&&(u=0);var c=t.call(this,n,e.ID,a)||this;return c.element=n,c.options=o,c.bindings=a,c.attachmentLevel=u,c.options=s.ComponentOptions.initComponentOptions(n,e,o),c.attachments=i.attachments,r.Utils.isNonEmptyArray(c.attachments)&&c.renderAttachments(),c}return o(e,t),e.prototype.renderAttachments=function(){var t=this;m.each(this.attachments,function(n){u.QueryUtils.setStateObjectOnQueryResult(t.queryStateModel.get(),n),u.QueryUtils.setSearchInterfaceObjectOnQueryResult(t.searchInterface,n),(t.attachmentLevel>0?t.options.subResultTemplate.instantiateToElement(n):t.options.resultTemplate.instantiateToElement(n)).then(function(o){if(t.autoCreateComponentsInsideResult(o,m.extend({},n,{attachments:[]})),p.$$(o).addClass("coveo-result-attachments-container"),t.element.appendChild(o),t.attachmentHasSubAttachment(n)&&t.attachmentLevel<t.options.maximumAttachmentLevel){var a=p.$$("div").el;o.appendChild(a),new e(a,t.options,t.bindings,n,t.attachmentLevel+1)}})})},e.prototype.attachmentHasSubAttachment=function(t){return!!r.Utils.isNonEmptyArray(t.attachments)||!!r.Utils.isNonEmptyArray(t.childResults)&&(t.attachments=t.childResults,!0)},e.prototype.autoCreateComponentsInsideResult=function(t,n){l.Assert.exists(t);var o=this.searchInterface.options,a={options:o,bindings:this.getBindings(),result:n};c.Initialization.automaticallyCreateComponentsInside(t,a,[e.ID])},e.ID="ResultAttachments",e.doExport=function(){h.exportGlobally({ResultAttachments:e,DefaultResultAttachmentTemplate:i.DefaultResultAttachmentTemplate})},e.options={resultTemplate:f.TemplateComponentOptions.buildTemplateOption({defaultFunction:function(t){return new i.DefaultResultAttachmentTemplate}}),subResultTemplate:f.TemplateComponentOptions.buildTemplateOption({postProcessing:function(t,e){return null!=t?t:e.resultTemplate}}),maximumAttachmentLevel:s.ComponentOptions.buildNumberOption({defaultValue:5,min:0})},e}(a.Component);e.ResultAttachments=d,c.Initialization.registerAutoCreateComponent(d)},464:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var a=n(20),s=function(t){function e(){return t.call(this)||this}return o(e,t),e.prototype.instantiateToString=function(t){return'<div><span class="CoveoIcon"></span> <a class="CoveoResultLink"></a> <span class="CoveoQuickview"></span></div>'},e}(a.Template);e.DefaultResultAttachmentTemplate=s},465:function(t,e){}});