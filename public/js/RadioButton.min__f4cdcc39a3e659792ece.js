webpackJsonpCoveo__temporary([53],{109:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);n(507);var i=n(3),a=function(){function t(t,e,n){void 0===t&&(t=function(t){}),this.onChange=t,this.label=e,this.name=n,this.buildContent()}return t.doExport=function(){i.exportGlobally({RadioButton:t})},t.prototype.reset=function(){var t=this.isSelected();this.getRadio().checked=!1,t&&this.onChange(this)},t.prototype.select=function(t){void 0===t&&(t=!0);var e=this.isSelected();this.getRadio().checked=!0,!e&&t&&this.onChange(this)},t.prototype.build=function(){return this.element},t.prototype.getElement=function(){return this.element},t.prototype.getValue=function(){return this.label},t.prototype.isSelected=function(){return this.getRadio().checked},t.prototype.getRadio=function(){return o.$$(this.element).find("input")},t.prototype.getLabel=function(){return o.$$(this.element).find("label")},t.prototype.buildContent=function(){var t=this,e=o.$$("div",{className:"coveo-radio"}),n=o.$$("input",{type:"radio",name:this.name,id:this.label}),i=o.$$("label",{className:"coveo-radio-input-label",for:this.label});i.text(this.label),n.on("change",function(){t.onChange(t)}),e.append(n.el),e.append(i.el),this.element=e.el},t}();e.RadioButton=a},507:function(t,e){}});