webpackJsonpCoveo__temporary([46],{242:function(e,o,t){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])};return function(o,t){function r(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(o,"__esModule",{value:!0});var n=t(7),a=t(8),i=t(2),s=t(604),l=t(1),c=t(5),v=t(25),d=t(3);t(605);var p=t(12),y=t(15),h=t(4),u=t(6),C=function(e){function o(t,r,n){var i=e.call(this,t,o.ID,n)||this;return i.element=t,i.options=r,i.options=a.ComponentOptions.initComponentOptions(t,o,r),i.parentCard=l.$$(i.element).closest(".CoveoResult"),c.Assert.exists(i.parentCard),l.$$(i.parentCard).addClass("coveo-with-card-overlay"),i.createOverlay(),i.createButton(i.element),i.closeOverlay(),i}return r(o,e),o.prototype.toggleOverlay=function(e){void 0!==e?e?this.openOverlay():this.closeOverlay():l.$$(this.overlay).hasClass("coveo-opened")?this.closeOverlay():this.openOverlay()},o.prototype.openOverlay=function(){l.$$(this.overlay).removeClass("coveo-hidden-for-tab-nav"),l.$$(this.overlay).addClass("coveo-opened"),l.$$(this.parentCard).addClass("coveo-card-overlay-opened"),this.bind.trigger(this.element,s.CardOverlayEvents.openCardOverlay)},o.prototype.closeOverlay=function(){l.$$(this.overlay).addClass("coveo-hidden-for-tab-nav"),l.$$(this.overlay).removeClass("coveo-opened"),l.$$(this.parentCard).removeClass("coveo-card-overlay-opened"),this.bind.trigger(this.element,s.CardOverlayEvents.closeCardOverlay)},o.prototype.createOverlay=function(){var e=this;this.overlay=l.$$("div",{className:"coveo-card-overlay"}).el;var o=l.$$("div",{className:"coveo-card-overlay-header"}).el;this.createButton(o),this.overlay.appendChild(o);for(var t=l.$$("div",{className:"coveo-card-overlay-body"}).el;this.element.childNodes.length>0;)t.appendChild(this.element.firstChild);this.overlay.appendChild(t);var r=l.$$("span",{className:"coveo-icon coveo-open-card-overlay"},p.SVGIcons.icons.arrowDown);y.SVGDom.addClassToSVGInContainer(r.el,"coveo-open-card-overlay-svg");var n=l.$$("div",{className:"coveo-card-overlay-footer",tabindex:"0"},r.el);n.on("click",function(){return e.toggleOverlay(!1)}),this.bind.on(n.el,"keyup",v.KeyboardUtils.keypressAction(v.KEYBOARD.ENTER,function(){return e.toggleOverlay(!1)})),this.overlay.appendChild(n.el),this.parentCard.appendChild(this.overlay)},o.prototype.createButton=function(e){var o=this;if(this.options.icon){var t=l.$$("span",{className:"coveo-icon "},p.SVGIcons.icons[this.options.icon]).el;e.appendChild(t),y.SVGDom.addClassToSVGInContainer(e,"coveo-"+h.Utils.toDashCase(this.options.icon)+"-svg")}e.appendChild(l.$$("span",{className:"coveo-label"},this.options.title).el),e.setAttribute("tabindex","0"),l.$$(e).on("click",function(){return o.toggleOverlay()}),this.bind.on(e,"keyup",v.KeyboardUtils.keypressAction(v.KEYBOARD.ENTER,function(){return o.toggleOverlay()}))},o.ID="CardOverlay",o.doExport=function(){d.exportGlobally({CardOverlay:o})},o.options={title:a.ComponentOptions.buildLocalizedStringOption({required:!0,localizedString:function(){return u.l("NoTitle")}}),icon:a.ComponentOptions.buildIconOption()},o}(n.Component);o.CardOverlay=C,i.Initialization.registerAutoCreateComponent(C)},604:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function e(){}return e.openCardOverlay="openCardOverlay",e.closeCardOverlay="closeCardOverlay",e}();o.CardOverlayEvents=r},605:function(e,o){}});
//# sourceMappingURL=CardOverlay.min__5ebc66d1c8fc250de81a.js.map