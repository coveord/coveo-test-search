webpackJsonpCoveo__temporary([78],{191:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(3),r=o(6),a=o(17),c=o(1),s=o(15),u=o(12),l=o(4),h=o(10),p=o(7),d=o(2),y=o(13),b=function(t){function e(o,n,i){var h=t.call(this,o,e.ID,i)||this;if(h.element=o,h.options=n,(new a.AccessibleButton).withElement(o).withOwner(h.bind).withLabel(r.l("Search")).withSelectAction(function(){return h.handleClick()}).build(),""==l.Utils.trim(c.$$(h.element).text())){var p=c.$$("span",{className:"coveo-search-button"},u.SVGIcons.icons.search).el;s.SVGDom.addClassToSVGInContainer(p,"coveo-search-button-svg");var d=c.$$("span",{className:"coveo-search-button-loading"},u.SVGIcons.icons.loading).el;s.SVGDom.addClassToSVGInContainer(d,"coveo-search-button-loading-svg"),o.appendChild(p),o.appendChild(d)}return h}return n(e,t),e.prototype.click=function(){this.handleClick()},e.prototype.handleClick=function(){this.logger.debug("Performing query following button click"),this.updateQueryStateModelWithSearchboxQuery(),this.usageAnalytics.logSearchEvent(h.analyticsActionCauseList.searchboxSubmit,{}),this.queryController.executeQuery({origin:this})},e.prototype.updateQueryStateModelWithSearchboxQuery=function(){var t=this.options&&this.options.searchbox;t&&this.queryStateModel.set(y.QueryStateModel.attributesEnum.q,t.getText())},e.ID="SearchButton",e.doExport=function(){i.exportGlobally({SearchButton:e})},e.options={},e}(p.Component);e.SearchButton=b,d.Initialization.registerAutoCreateComponent(b)}});
//# sourceMappingURL=SearchButton.min__a4b611449371d83d6111.js.map