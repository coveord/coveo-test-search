webpackJsonpCoveo__temporary([53],{556:function(t,e){},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);n(556);var o=n(3),a=function(){function t(t,e,n,i){void 0===t&&(t=function(t){}),void 0===i&&(i=e),this.onChange=t,this.label=e,this.name=n,this.id=i,this.buildContent()}return t.doExport=function(){o.exportGlobally({RadioButton:t})},t.prototype.reset=function(){var t=this.isSelected();this.getRadio().checked=!1,t&&this.onChange(this)},t.prototype.select=function(t){void 0===t&&(t=!0);var e=this.isSelected();this.getRadio().checked=!0,!e&&t&&this.onChange(this)},t.prototype.build=function(){return this.element},t.prototype.getElement=function(){return this.element},t.prototype.getValue=function(){return this.label},t.prototype.isSelected=function(){return this.getRadio().checked},t.prototype.getRadio=function(){return i.$$(this.element).find("input")},t.prototype.getLabel=function(){return i.$$(this.element).find("label")},t.prototype.buildContent=function(){var t=this,e=i.$$("div",{className:"coveo-radio"}),n=i.$$("input",{type:"radio",name:this.name,id:this.id}),o=i.$$("label",{className:"coveo-radio-input-label",for:this.id});o.text(this.label),n.on("change",function(){t.onChange(t)}),e.append(n.el),e.append(o.el),this.element=e.el},t}();e.RadioButton=a}});
//# sourceMappingURL=RadioButton.min__00ecf0bd3e47c7b52b32.js.map