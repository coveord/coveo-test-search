webpackJsonpCoveo__temporary([82],{120:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(3),o=t(6),s=t(1),p=t(15),a=t(12),r=function(){function n(n,e,t,i){void 0===n&&(n=function(n){}),void 0===e&&(e=0),this.onChange=n,this.min=e,this.max=t,this.label=i,this.buildContent(),this.bindEvents()}return n.doExport=function(){i.exportGlobally({NumericSpinner:n})},n.prototype.reset=function(){this.getSpinnerInput().value="",this.onChange(this)},n.prototype.getElement=function(){return this.element},n.prototype.getValue=function(){return this.getSpinnerInput().value},n.prototype.getIntValue=function(){return this.getSpinnerInput().value?parseInt(this.getSpinnerInput().value,10):this.min},n.prototype.getFloatValue=function(){return this.getSpinnerInput().value?parseFloat(this.getSpinnerInput().value):this.min},n.prototype.setValue=function(n){this.max&&n>this.max&&(n=this.max),n<this.min&&(n=this.min),this.getSpinnerInput().value=n.toString(),this.onChange(this)},n.prototype.build=function(){return this.element},n.prototype.buildContent=function(){var n=s.$$("div",{className:"coveo-numeric-spinner"}),e=s.$$("input",{className:"coveo-number-input",type:"text","aria-label":this.label?o.l(this.label):""}),t=s.$$("span",{className:"coveo-add-on"}),i=s.$$("div",{className:"coveo-spinner-up"},a.SVGIcons.icons.arrowUp);p.SVGDom.addClassToSVGInContainer(i.el,"coveo-spinner-up-svg");var r=s.$$("div",{className:"coveo-spinner-down"},a.SVGIcons.icons.arrowDown);p.SVGDom.addClassToSVGInContainer(r.el,"coveo-spinner-down-svg"),t.append(i.el),t.append(r.el),n.append(e.el),n.append(t.el),this.element=n.el},n.prototype.bindEvents=function(){var n=this,e=s.$$(this.element).find(".coveo-spinner-up");s.$$(e).on("click",function(){n.setValue(n.getFloatValue()+1)});var t=s.$$(this.element).find(".coveo-spinner-down");s.$$(t).on("click",function(){n.setValue(n.getFloatValue()-1)});var i=s.$$(this.element).find("input");s.$$(i).on("input",function(){i.value.match(/[0-9]*/)&&n.onChange(n)})},n.prototype.getSpinnerInput=function(){return s.$$(this.element).find(".coveo-number-input")},n}();e.NumericSpinner=r}});
//# sourceMappingURL=NumericSpinner.min__10130b8bbdbe87aa2b95.js.map