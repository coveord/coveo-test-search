webpackJsonpCoveo__temporary([83],{62:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n(6),s=n(0),l=n(3),u=function(){function t(t,e,n,i){void 0===t&&(t=function(t){}),void 0===n&&(n=o.l),this.onChange=t,this.listOfValues=e,this.getDisplayValue=n,this.label=i,this.optionsElement=[],this.buildContent(),this.select(0,!1),this.bindEvents()}return t.doExport=function(){l.exportGlobally({Dropdown:t})},t.prototype.reset=function(){this.select(0,!1)},t.prototype.setId=function(t){i.$$(this.element).setAttribute("id",t)},t.prototype.getElement=function(){return this.element},t.prototype.getValue=function(){return this.selectElement.value},t.prototype.select=function(t,e){void 0===e&&(e=!0),this.selectOption(this.optionsElement[t],e)},t.prototype.build=function(){return this.element},t.prototype.setValue=function(t){var e=this;s.each(this.optionsElement,function(n){i.$$(n).getAttribute("data-value")==t&&e.selectOption(n)})},t.prototype.selectOption=function(t,e){void 0===e&&(e=!0),this.selectElement.value=t.value,e&&this.onChange(this)},t.prototype.buildContent=function(){var t=this;this.selectElement=i.$$("select",{className:"coveo-dropdown"}).el,this.label&&this.selectElement.setAttribute("aria-label",o.l(this.label));var e=this.buildOptions();s.each(e,function(e){i.$$(t.selectElement).append(e)}),this.element=this.selectElement},t.prototype.buildOptions=function(){var t=this,e=[];return s.each(this.listOfValues,function(n){e.push(t.buildOption(n))}),e},t.prototype.buildOption=function(t){var e=i.$$("option");return e.setAttribute("data-value",t),e.setAttribute("value",t),e.text(this.getDisplayValue(t)),this.optionsElement.push(e.el),e.el},t.prototype.bindEvents=function(){var t=this;i.$$(this.selectElement).on("change",function(){return t.onChange(t)})},t}();e.Dropdown=u}});
//# sourceMappingURL=Dropdown.min__aec9a3688de9d25c6748.js.map