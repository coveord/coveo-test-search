webpackJsonpCoveo__temporary([84],{175:function(o,n,t){"use strict";var e=this&&this.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var t in n)n.hasOwnProperty(t)&&(o[t]=n[t])};return function(n,t){function e(){this.constructor=n}o(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}();Object.defineProperty(n,"__esModule",{value:!0});var i=t(7),r=t(8),l=t(3),p=t(20),s=t(2),a=function(o){function n(t,e,i){var l=o.call(this,t,n.ID,i)||this;if(l.element=t,l.options=r.ComponentOptions.initComponentOptions(t,n,e),l.options.preventScrolling){var p=l.options.scrollContainer||l.searchInterface.element;l.options.scrollContainer=r.ComponentOptions.findParentScrollLockable(p)}return l}return e(n,o),n.ID="FacetsMobileMode",n.options={breakpoint:r.ComponentOptions.buildNumberOption(),isModal:r.ComponentOptions.buildBooleanOption({defaultValue:!1}),displayOverlayWhileOpen:r.ComponentOptions.buildBooleanOption({postProcessing:function(o,n){return p.Utils.isNullOrUndefined(o)?!n.isModal:o}}),preventScrolling:r.ComponentOptions.buildBooleanOption({postProcessing:function(o,n){return p.Utils.isNullOrUndefined(o)?n.isModal:o}}),scrollContainer:r.ComponentOptions.buildChildHtmlElementOption({depend:"preventScrolling"})},n.doExport=function(){l.exportGlobally({FacetsMobileMode:n})},n}(i.Component);n.FacetsMobileMode=a,s.Initialization.registerAutoCreateComponent(a)}});
//# sourceMappingURL=FacetsMobileMode.min__f77621f42f3da7836d65.js.map