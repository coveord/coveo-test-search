webpackJsonpCoveo__temporary([77],{282:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n(3),r=n(5),p=n(1),a=n(7),l=n(8),u=n(2),c=n(61),m=function(t){function e(n,o,i,s){var p=t.call(this,n,e.ID,i)||this;if(p.element=n,p.options=o,p.bindings=i,p.result=s,p.options=l.ComponentOptions.initComponentOptions(n,e,o),p.result=p.result||p.resolveResult(),r.Assert.exists(p.result),null!=p.options.condition){new Function("obj","with(obj||{}){return "+p.options.condition+"}")(p.result)&&p.initialize()}else p.initialize();return p}return o(e,t),e.prototype.initialize=function(){var t=this;if(null!=this.options.template){var n=this.searchInterface.options,o={options:n,bindings:this.bindings,result:this.result},s=p.$$(this.element).parents(a.Component.computeCssClassName(e));i.each(s,function(e){var n=e.cloneNode();p.$$(n).empty();var o=n.outerHTML;r.Assert.check(-1===o.indexOf(t.element.outerHTML),"TemplateLoader cannot load a template into itself.")}),this.element.innerHTML=this.options.template.instantiateToString(this.result,{checkCondition:!1,responsiveComponents:this.bindings?this.bindings.searchInterface.responsiveComponents:null}),u.Initialization.automaticallyCreateComponentsInside(this.element,o)}},e.ID="TemplateLoader",e.doExport=function(){s.exportGlobally({TemplateLoader:e})},e.options={template:c.TemplateComponentOptions.buildTemplateOption(),condition:l.ComponentOptions.buildStringOption()},e}(a.Component);e.TemplateLoader=m,u.Initialization.registerAutoCreateComponent(m)}});
//# sourceMappingURL=TemplateLoader.min__fef926a3d249213fcc09.js.map