webpackJsonpCoveo__temporary([36],{14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(){function t(){}return t.addClassToSVGInContainer=function(e,n){var o=e.querySelector("svg");o.setAttribute("class",""+t.getClass(o)+n)},t.removeClassFromSVGInContainer=function(e,n){var o=e.querySelector("svg");o.setAttribute("class",t.getClass(o).replace(n,""))},t.addStyleToSVGInContainer=function(t,e){var n=t.querySelector("svg");o.each(e,function(t,e){n.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=i},144:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),s=n(7),r=n(17),c=n(1),u=n(14),l=n(13),a=n(4),h=n(9),p=n(6),b=n(2),f=function(t){function e(n,o,i){var h=t.call(this,n,e.ID,i)||this;if(h.element=n,h.options=o,(new r.AccessibleButton).withElement(n).withOwner(h.bind).withLabel(s.l("Search")).withSelectAction(function(){return h.handleClick()}).build(),""==a.Utils.trim(c.$$(h.element).text())){var p=c.$$("span",{className:"coveo-search-button"},l.SVGIcons.icons.search).el;u.SVGDom.addClassToSVGInContainer(p,"coveo-search-button-svg");var b=c.$$("span",{className:"coveo-search-button-loading"},l.SVGIcons.icons.loading).el;u.SVGDom.addClassToSVGInContainer(b,"coveo-search-button-loading-svg"),n.appendChild(p),n.appendChild(b)}return h}return o(e,t),e.prototype.click=function(){this.handleClick()},e.prototype.handleClick=function(){this.logger.debug("Performing query following button click"),this.usageAnalytics.logSearchEvent(h.analyticsActionCauseList.searchboxSubmit,{}),this.queryController.executeQuery()},e.ID="SearchButton",e.doExport=function(){i.exportGlobally({SearchButton:e})},e.options={},e}(p.Component);e.SearchButton=f,b.Initialization.registerAutoCreateComponent(f)},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=n(30),s=n(1);n(371);var r=function(){function t(){this.logger=new o.Logger(this)}return t.prototype.withOwner=function(t){return this.eventOwner=t,this},t.prototype.withElement=function(t){return t instanceof HTMLElement?this.element=s.$$(t):this.element=t,this},t.prototype.withLabel=function(t){return this.label=t,this},t.prototype.withTitle=function(t){return this.title=t,this},t.prototype.withSelectAction=function(t){return this.clickAction=t,this.enterKeyboardAction=t,this},t.prototype.withClickAction=function(t){return this.clickAction=t,this},t.prototype.withEnterKeyboardAction=function(t){return this.enterKeyboardAction=t,this},t.prototype.withFocusAndMouseEnterAction=function(t){return this.focusAction=t,this.mouseenterAction=t,this},t.prototype.withFocusAction=function(t){return this.focusAction=t,this},t.prototype.withMouseEnterAction=function(t){return this.mouseenterAction=t,this},t.prototype.withBlurAndMouseLeaveAction=function(t){return this.mouseleaveAction=t,this.blurAction=t,this},t.prototype.withMouseLeaveAction=function(t){return this.mouseleaveAction=t,this},t.prototype.withBlurAction=function(t){return this.blurAction=t,this},t.prototype.build=function(){return this.element||(this.element=s.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureTitle(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},t.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var t=this,e="coveo-accessible-button-pressed",n="coveo-accessible-button-focused";s.$$(this.element).addClass("coveo-accessible-button"),s.$$(this.element).on("mousedown",function(){s.$$(t.element).addClass(e),s.$$(t.element).removeClass(n)}),s.$$(this.element).on("mouseup",function(){return s.$$(t.element).removeClass(e)}),s.$$(this.element).on("focus",function(){s.$$(t.element).hasClass(e)||s.$$(t.element).addClass(n)}),s.$$(this.element).on("blur",function(){return s.$$(t.element).removeClass(n)})},t.prototype.ensureCorrectRole=function(){this.element.getAttribute("role")||this.element.setAttribute("role","button")},t.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label)},t.prototype.ensureTitle=function(){this.title&&this.element.setAttribute("title",this.title)},t.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},t.prototype.ensureSelectAction=function(){var t=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",i.KeyboardUtils.keypressAction(i.KEYBOARD.ENTER,function(e){return t.enterKeyboardAction(e)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},t.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},t.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},t.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},t.prototype.bindEvent=function(t,e){this.eventOwner?this.eventOwner.on(this.element,t,e):s.$$(this.element).on(t,e)},t}();e.AccessibleButton=r},371:function(t,e){}});