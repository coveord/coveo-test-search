webpackJsonpCoveo__temporary([81],{187:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=o(7),l=o(8),s=o(5),a=o(21),r=o(2),c=o(4),p=o(115),u=o(1),d=o(3),m=o(132),v=function(e){function t(o,n,i,a){var r=e.call(this,o,t.ID,i)||this;return r.element=o,r.options=n,r.result=a,r.options=l.ComponentOptions.initComponentOptions(o,t,n),r.result=r.result||r.resolveResult(),s.Assert.exists(r.result),m.TemplateFieldsEvaluator.evaluateFieldsToMatch(r.options.conditions,r.result)?r.initialize(o,i):null!=r.element.parentElement&&r.element.parentElement.removeChild(r.element),r}return n(t,e),t.prototype.initialize=function(e,o){var n=u.$$(this.element).find("."+i.Component.computeCssClassNameForType("Quickview"));!c.Utils.isNullOrUndefined(n)&&a.QueryUtils.hasHTMLVersion(this.result)&&(u.$$(this.element).addClass("coveo-with-quickview"),u.$$(this.element).on("click",function(){i.Component.get(n).open()})),t.createIcon(this.result,this.options,e,o)},t.createIcon=function(e,o,n,i){void 0===o&&(o={}),void 0===n&&(n=u.$$("div").el);var l=p.FileTypes.get(e);return!i&&e.searchInterface&&(i=e.searchInterface.getBindings()),l=t.preprocessIconInfo(o,l),u.$$(n).toggleClass("coveo-small",!0===o.small),void 0!=o.value&&(!0===o.small&&-1==o.value.indexOf("-small")&&(l.icon+="-small"),!1===o.small&&-1!=o.value.indexOf("-small")&&(l.icon=l.icon.replace("-small",""))),u.$$(n).addClass(l.icon),n.setAttribute("title",l.caption),t.shouldDisplayLabel(o,i)&&(n.appendChild(u.$$("span",{className:"coveo-icon-caption-overlay"},l.caption).el),u.$$(n).addClass("coveo-icon-with-caption-overlay"),u.$$(n).setAttribute("data-with-label","true")),n},t.shouldDisplayLabel=function(e,t){return!1!==e.withLabel},t.preprocessIconInfo=function(e,t){return null!=e.labelValue&&(t.caption=e.labelValue),null!=e.value&&(t.icon="coveo-icon "+e.value),null==t.caption&&(t.caption=""),null==t.icon&&(t.icon="coveo-icon coveo-sprites-custom"),t},t.ID="Icon",t.doExport=function(){d.exportGlobally({Icon:t})},t.options={value:l.ComponentOptions.buildStringOption(),small:l.ComponentOptions.buildBooleanOption(),withLabel:l.ComponentOptions.buildBooleanOption(),labelValue:l.ComponentOptions.buildLocalizedStringOption(),conditions:l.ComponentOptions.buildFieldConditionOption()},t}(i.Component);t.Icon=v,r.Initialization.registerAutoCreateComponent(v)}});
//# sourceMappingURL=Icon.min__1b53ca9d63ffebcebf91.js.map