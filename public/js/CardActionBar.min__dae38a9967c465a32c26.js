webpackJsonpCoveo__temporary([74],{238:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=n(8),a=n(2),s=n(5),c=n(1),u=n(25),p=n(0),d=n(3);n(597);var l=n(12),h=n(16),f=function(e){function t(n,o,r,a){var u=e.call(this,n,t.ID,r)||this;return u.element=n,u.options=o,u.result=a,u.removedTabIndexElements=[],u.options=i.ComponentOptions.initComponentOptions(n,t,o),u.parentResult=c.$$(u.element).closest("CoveoResult"),s.Assert.check(void 0!==u.parentResult,"ActionBar needs to be a child of a Result"),u.options.hidden?(c.$$(u.parentResult).addClass("coveo-clickable"),u.appendArrow(),u.bindEvents(),p.forEach(c.$$(u.element).findAll("*"),function(e){e.hasAttribute("tabindex")&&"0"==e.getAttribute("tabindex")&&(u.removedTabIndexElements.push(e),e.removeAttribute("tabindex"))})):(u.element.style.transition="none",u.element.style.transform="none"),u}return o(t,e),t.prototype.show=function(){c.$$(this.element).addClass("coveo-opened"),p.forEach(this.removedTabIndexElements,function(e){e.setAttribute("tabindex","0")})},t.prototype.hide=function(){c.$$(this.element).removeClass("coveo-opened"),p.forEach(this.removedTabIndexElements,function(e){e.removeAttribute("tabindex")})},t.prototype.bindEvents=function(){var e=this;c.$$(this.parentResult).on("click",function(){return e.show()}),c.$$(this.parentResult).on("mouseleave",function(){return e.hide()}),c.$$(this.element).on("focusin",function(){return e.show()}),c.$$(this.element).on("focusout",function(){return e.hide()}),this.options.openOnMouseOver&&c.$$(this.arrowContainer).on("mouseenter",function(){return e.show()})},t.prototype.appendArrow=function(){var e=this;this.arrowContainer=c.$$("div",{className:"coveo-card-action-bar-arrow-container",tabindex:0}).el,this.bind.on(this.arrowContainer,"keyup",u.KeyboardUtils.keypressAction(u.KEYBOARD.ENTER,function(){return e.show()}));var t=c.$$("span",{className:"coveo-icon coveo-card-action-bar-arrow-icon"},l.SVGIcons.icons.arrowUp);h.SVGDom.addClassToSVGInContainer(t.el,"coveo-card-action-bar-arrow-svg"),this.arrowContainer.appendChild(t.el),this.parentResult.appendChild(this.arrowContainer)},t.ID="CardActionBar",t.doExport=function(){d.exportGlobally({CardActionBar:t})},t.options={hidden:i.ComponentOptions.buildBooleanOption({defaultValue:!0}),openOnMouseOver:i.ComponentOptions.buildBooleanOption({defaultValue:!0,depend:"hidden"})},t}(r.Component);t.CardActionBar=f,a.Initialization.registerAutoCreateComponent(f)},597:function(e,t){}});