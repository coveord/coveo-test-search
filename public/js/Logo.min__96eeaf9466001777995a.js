webpackJsonpCoveo__temporary([80],{257:function(o,t,e){"use strict";var n=this&&this.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)t.hasOwnProperty(e)&&(o[e]=t[e])};return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=e(11),i=e(3),s=e(6),p=e(1),c=e(15),u=e(12),a=e(7),l=e(8),d=e(2),h=function(o){function t(e,n,i){var s=o.call(this,e,t.ID,i)||this;return s.element=e,s.options=n,s.options=l.ComponentOptions.initComponentOptions(e,t,n),s.buildLink(),s.bind.onRootElement(r.QueryEvents.queryError,function(){return s.hide()}),s.bind.onRootElement(r.QueryEvents.querySuccess,function(o){return s.handleQuerySuccess(o)}),s}return n(t,o),t.prototype.buildLink=function(){var o=p.$$("a",{className:"coveo-powered-by coveo-footer-logo",href:"https://www.coveo.com/","aria-label":s.l("CoveoHomePage")},u.SVGIcons.icons.coveoPoweredBy);this.options.target&&o.setAttribute("target",this.options.target),c.SVGDom.addClassToSVGInContainer(o.el,"coveo-powered-by-svg"),this.element.appendChild(o.el)},t.prototype.handleQuerySuccess=function(o){o.results.results.length>0?this.show():this.hide()},t.prototype.hide=function(){p.$$(this.element).addClass("coveo-hidden")},t.prototype.show=function(){p.$$(this.element).removeClass("coveo-hidden")},t.ID="Logo",t.doExport=function(){i.exportGlobally({Logo:t})},t.options={target:l.ComponentOptions.buildStringOption()},t}(a.Component);t.Logo=h,d.Initialization.registerAutoCreateComponent(h)}});
//# sourceMappingURL=Logo.min__96eeaf9466001777995a.js.map