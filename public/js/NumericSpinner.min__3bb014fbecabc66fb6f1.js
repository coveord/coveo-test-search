webpackJsonpCoveo__temporary([51],{14:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=function(){function e(){}return e.addClassToSVGInContainer=function(n,t){var i=n.querySelector("svg");i.setAttribute("class",""+e.getClass(i)+t)},e.removeClassFromSVGInContainer=function(n,t){var i=n.querySelector("svg");i.setAttribute("class",e.getClass(i).replace(t,""))},e.addStyleToSVGInContainer=function(e,n){var t=e.querySelector("svg");i.each(n,function(e,n){t.style[n]=e})},e.getClass=function(e){var n=e.getAttribute("class");return n?n+" ":""},e}();n.SVGDom=o},84:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(3),o=t(7),s=t(1),r=t(14),a=t(13),u=function(){function e(e,n,t,i){void 0===e&&(e=function(e){}),void 0===n&&(n=0),this.onChange=e,this.min=n,this.max=t,this.label=i,this.buildContent(),this.bindEvents()}return e.doExport=function(){i.exportGlobally({NumericSpinner:e})},e.prototype.reset=function(){this.getSpinnerInput().value="",this.onChange(this)},e.prototype.getElement=function(){return this.element},e.prototype.getValue=function(){return this.getSpinnerInput().value},e.prototype.getIntValue=function(){return this.getSpinnerInput().value?parseInt(this.getSpinnerInput().value,10):this.min},e.prototype.getFloatValue=function(){return this.getSpinnerInput().value?parseFloat(this.getSpinnerInput().value):this.min},e.prototype.setValue=function(e){this.max&&e>this.max&&(e=this.max),e<this.min&&(e=this.min),this.getSpinnerInput().value=e.toString(),this.onChange(this)},e.prototype.build=function(){return this.element},e.prototype.buildContent=function(){var e=s.$$("div",{className:"coveo-numeric-spinner"}),n=s.$$("input",{className:"coveo-number-input",type:"text","aria-label":this.label?o.l(this.label):""}),t=s.$$("span",{className:"coveo-add-on"}),i=s.$$("div",{className:"coveo-spinner-up"},a.SVGIcons.icons.arrowUp);r.SVGDom.addClassToSVGInContainer(i.el,"coveo-spinner-up-svg");var u=s.$$("div",{className:"coveo-spinner-down"},a.SVGIcons.icons.arrowDown);r.SVGDom.addClassToSVGInContainer(u.el,"coveo-spinner-down-svg"),t.append(i.el),t.append(u.el),e.append(n.el),e.append(t.el),this.element=e.el},e.prototype.bindEvents=function(){var e=this,n=s.$$(this.element).find(".coveo-spinner-up");s.$$(n).on("click",function(){e.setValue(e.getFloatValue()+1)});var t=s.$$(this.element).find(".coveo-spinner-down");s.$$(t).on("click",function(){e.setValue(e.getFloatValue()-1)});var i=s.$$(this.element).find("input");s.$$(i).on("input",function(){i.value.match(/[0-9]*/)&&e.onChange(e)})},e.prototype.getSpinnerInput=function(){return s.$$(this.element).find(".coveo-number-input")},e}();n.NumericSpinner=u}});