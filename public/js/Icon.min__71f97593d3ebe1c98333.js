webpackJsonpCoveo__temporary([76],{177:function(e,o,n){"use strict";var t=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n])};return function(o,n){function t(){this.constructor=o}e(o,n),o.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}}();Object.defineProperty(o,"__esModule",{value:!0});var i=n(6),l=n(8),s=n(5),a=n(20),r=n(2),c=n(4),p=n(105),u=n(1),v=n(3),d=function(e){function o(n,t,r,p){var v=e.call(this,n,o.ID,r)||this;v.element=n,v.options=t,v.result=p,v.options=l.ComponentOptions.initComponentOptions(n,o,t),v.result=v.result||v.resolveResult(),s.Assert.exists(v.result);var d=u.$$(v.element).find("."+i.Component.computeCssClassNameForType("Quickview"));return!c.Utils.isNullOrUndefined(d)&&a.QueryUtils.hasHTMLVersion(v.result)&&(u.$$(v.element).addClass("coveo-with-quickview"),u.$$(v.element).on("click",function(){i.Component.get(d).open()})),o.createIcon(v.result,v.options,n,r),v}return t(o,e),o.createIcon=function(e,n,t,i){void 0===n&&(n={}),void 0===t&&(t=u.$$("div").el);var l=p.FileTypes.get(e);return!i&&e.searchInterface&&(i=e.searchInterface.getBindings()),l=o.preprocessIconInfo(n,l),u.$$(t).toggleClass("coveo-small",!0===n.small),void 0!=n.value&&(!0===n.small&&-1==n.value.indexOf("-small")&&(l.icon+="-small"),!1===n.small&&-1!=n.value.indexOf("-small")&&(l.icon=l.icon.replace("-small",""))),u.$$(t).addClass(l.icon),t.setAttribute("title",l.caption),o.shouldDisplayLabel(n,i)&&(t.appendChild(u.$$("span",{className:"coveo-icon-caption-overlay"},l.caption).el),u.$$(t).addClass("coveo-icon-with-caption-overlay"),u.$$(t).setAttribute("data-with-label","true")),t},o.shouldDisplayLabel=function(e,o){return!1!==e.withLabel},o.preprocessIconInfo=function(e,o){return null!=e.labelValue&&(o.caption=e.labelValue),null!=e.value&&(o.icon="coveo-icon "+e.value),null==o.caption&&(o.caption=""),null==o.icon&&(o.icon="coveo-icon coveo-sprites-custom"),o},o.ID="Icon",o.doExport=function(){v.exportGlobally({Icon:o})},o.options={value:l.ComponentOptions.buildStringOption(),small:l.ComponentOptions.buildBooleanOption(),withLabel:l.ComponentOptions.buildBooleanOption(),labelValue:l.ComponentOptions.buildLocalizedStringOption()},o}(i.Component);o.Icon=d,r.Initialization.registerAutoCreateComponent(d)}});