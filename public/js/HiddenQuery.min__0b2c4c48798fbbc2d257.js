webpackJsonpCoveo__temporary([41],{14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(){function e(){}return e.addClassToSVGInContainer=function(t,n){var o=t.querySelector("svg");o.setAttribute("class",""+e.getClass(o)+n)},e.removeClassFromSVGInContainer=function(t,n){var o=t.querySelector("svg");o.setAttribute("class",e.getClass(o).replace(n,""))},e.addStyleToSVGInContainer=function(e,t){var n=e.querySelector("svg");o.each(t,function(e,t){n.style[t]=e})},e.getClass=function(e){var t=e.getAttribute("class");return t?t+" ":""},e}();t.SVGDom=r},185:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),i=n(7),a=n(8),s=n(10),u=n(35),c=n(9),l=n(12),d=n(2),p=n(4),m=n(1),y=n(5),h=n(0),v=n(3);n(396);var b=n(13),f=n(14),E=function(e){function t(n,o,r){var a=e.call(this,n,t.ID,r)||this;return a.element=n,a.options=o,a.options=i.ComponentOptions.initComponentOptions(n,t,o),a.bind.onRootElement(s.QueryEvents.buildingQuery,function(e){return a.handleBuildingQuery(e)}),a.bind.onRootElement(u.BreadcrumbEvents.populateBreadcrumb,function(e){return a.handlePopulateBreadcrumb(e)}),a.bind.onRootElement(u.BreadcrumbEvents.clearBreadcrumb,function(){return a.setStateEmpty()}),a}return o(t,e),t.prototype.clear=function(){this.setStateEmpty();var e=this.getDescription();this.usageAnalytics.logSearchEvent(c.analyticsActionCauseList.contextRemove,{contextName:e}),this.queryController.executeQuery()},t.prototype.setStateEmpty=function(){this.queryStateModel.set(l.QUERY_STATE_ATTRIBUTES.HD,""),this.queryStateModel.set(l.QUERY_STATE_ATTRIBUTES.HQ,"")},t.prototype.handleBuildingQuery=function(e){y.Assert.exists(e);var t=this.queryStateModel.get(l.QUERY_STATE_ATTRIBUTES.HQ);p.Utils.isNonEmptyString(t)&&e.queryBuilder.advancedExpression.add(t)},t.prototype.handlePopulateBreadcrumb=function(e){var t=this,n=this.getDescription();if(!h.isEmpty(n)&&!h.isEmpty(this.queryStateModel.get(l.QUERY_STATE_ATTRIBUTES.HQ))){var o=document.createElement("div");d.$$(o).addClass("coveo-hidden-query-breadcrumb");var r=document.createElement("span");d.$$(r).addClass("coveo-hidden-query-breadcrumb-title"),d.$$(r).text(this.options.title),o.appendChild(r);var i=document.createElement("span");d.$$(i).addClass("coveo-hidden-query-breadcrumb-values"),o.appendChild(i);var a=d.$$("span",{className:"coveo-hidden-query-breadcrumb-value"},n);i.appendChild(a.el);var s=d.$$("span",{className:"coveo-hidden-query-breadcrum-clear-icon"},b.SVGIcons.icons.checkboxHookExclusionMore);f.SVGDom.addClassToSVGInContainer(s.el,"coveo-hidden-query-breadcrumb-clear-svg");var u=d.$$("span",{className:"coveo-hidden-query-breadcrumb-clear"});u.append(s.el),o.appendChild(u.el),d.$$(o).on("click",function(){return t.clear()}),e.breadcrumbs.push({element:o})}},t.prototype.getDescription=function(){var e=this.queryStateModel.get(l.QueryStateModel.attributesEnum.hd);return h.isEmpty(e)&&(e=this.queryStateModel.get(l.QueryStateModel.attributesEnum.hq)),h.isEmpty(e)||e.length>this.options.maximumDescriptionLength&&(e=e.slice(0,this.options.maximumDescriptionLength)+" ..."),e},t.ID="HiddenQuery",t.doExport=function(){v.exportGlobally({HiddenQuery:t})},t.options={maximumDescriptionLength:i.ComponentOptions.buildNumberOption({min:0,defaultValue:100}),title:i.ComponentOptions.buildLocalizedStringOption({defaultValue:a.l("AdditionalFilters")+": "})},t}(r.Component);t.HiddenQuery=E,m.Initialization.registerAutoCreateComponent(E)},396:function(e,t){}});