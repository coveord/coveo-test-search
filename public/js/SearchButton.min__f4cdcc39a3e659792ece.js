webpackJsonpCoveo__temporary([45],{15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=function(){function t(){}return t.addClassToSVGInContainer=function(e,n){var o=e.querySelector("svg");o.setAttribute("class",""+t.getClass(o)+n)},t.removeClassFromSVGInContainer=function(e,n){var o=e.querySelector("svg");o.setAttribute("class",t.getClass(o).replace(n,""))},t.addStyleToSVGInContainer=function(t,e){var n=t.querySelector("svg");o.each(e,function(t,e){n.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=r},178:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n(7),a=n(17),c=n(1),s=n(15),l=n(13),u=n(4),p=n(9),h=n(6),f=n(2),d=function(t){function e(n,o,r){var p=t.call(this,n,e.ID,r)||this;if(p.element=n,p.options=o,(new a.AccessibleButton).withElement(n).withOwner(p.bind).withLabel(i.l("Search")).withSelectAction(function(){return p.handleClick()}).build(),""==u.Utils.trim(c.$$(p.element).text())){var h=c.$$("span",{className:"coveo-search-button"},l.SVGIcons.icons.search).el;s.SVGDom.addClassToSVGInContainer(h,"coveo-search-button-svg");var f=c.$$("span",{className:"coveo-search-button-loading"},l.SVGIcons.icons.loading).el;s.SVGDom.addClassToSVGInContainer(f,"coveo-search-button-loading-svg"),n.appendChild(h),n.appendChild(f)}return p}return o(e,t),e.prototype.click=function(){this.handleClick()},e.prototype.handleClick=function(){this.logger.debug("Performing query following button click"),this.usageAnalytics.logSearchEvent(p.analyticsActionCauseList.searchboxSubmit,{}),this.queryController.executeQuery()},e.ID="SearchButton",e.doExport=function(){r.exportGlobally({SearchButton:e})},e.options={},e}(h.Component);e.SearchButton=d,f.Initialization.registerAutoCreateComponent(d)}});