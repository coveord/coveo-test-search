webpackJsonpCoveo__temporary([25,62,74],{131:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),s=n(7),l=n(5),r=n(19),u=n(1),a=n(4),p=n(92),c=n(2),h=n(3),d=function(t){function e(n,i,u,p){var h=t.call(this,n,e.ID,u)||this;h.element=n,h.options=i,h.result=p,h.options=s.ComponentOptions.initComponentOptions(n,e,i),h.result=h.result||h.resolveResult(),l.Assert.exists(h.result);var d=c.$$(h.element).find("."+o.Component.computeCssClassNameForType("Quickview"));return!a.Utils.isNullOrUndefined(d)&&r.QueryUtils.hasHTMLVersion(h.result)&&(c.$$(h.element).addClass("coveo-with-quickview"),c.$$(h.element).on("click",function(){o.Component.get(d).open()})),e.createIcon(h.result,h.options,n,u),h}return i(e,t),e.createIcon=function(t,n,i,o){void 0===n&&(n={}),void 0===i&&(i=c.$$("div").el);var s=p.FileTypes.get(t);return!o&&t.searchInterface&&(o=t.searchInterface.getBindings()),s=e.preprocessIconInfo(n,s),c.$$(i).toggleClass("coveo-small",!0===n.small),void 0!=n.value&&(!0===n.small&&-1==n.value.indexOf("-small")&&(s.icon+="-small"),!1===n.small&&-1!=n.value.indexOf("-small")&&(s.icon=s.icon.replace("-small",""))),c.$$(i).addClass(s.icon),i.setAttribute("title",s.caption),e.shouldDisplayLabel(n,o)&&(i.appendChild(c.$$("span",{className:"coveo-icon-caption-overlay"},s.caption).el),c.$$(i).addClass("coveo-icon-with-caption-overlay"),c.$$(i).setAttribute("data-with-label","true")),i},e.shouldDisplayLabel=function(t,e){return!1!==t.withLabel},e.preprocessIconInfo=function(t,e){return null!=t.labelValue&&(e.caption=t.labelValue),null!=t.value&&(e.icon="coveo-icon "+t.value),null==e.caption&&(e.caption=""),null==e.icon&&(e.icon="coveo-icon coveo-sprites-custom"),e},e.ID="Icon",e.doExport=function(){h.exportGlobally({Icon:e})},e.options={value:s.ComponentOptions.buildStringOption(),small:s.ComponentOptions.buildBooleanOption(),withLabel:s.ComponentOptions.buildBooleanOption(),labelValue:s.ComponentOptions.buildLocalizedStringOption()},e}(o.Component);e.Icon=d,u.Initialization.registerAutoCreateComponent(d)},213:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),s=n(7),l=n(78),r=n(19),u=n(1),a=n(2),p=n(26),c=n(131),h=n(0),d=n(3),m=function(t){function e(n,i,o,u){var p=t.call(this,n,e.ID,o)||this;if(p.element=n,p.options=i,p.bindings=o,p.result=u,p.options=s.ComponentOptions.initOptions(n,e.options,i),"img"!=p.element.tagName.toLowerCase()?(p.img=a.$$("img").el,p.element.appendChild(p.img)):p.img=p.element,p.options.clickable)if("img"!=p.element.tagName.toLowerCase())new l.ResultLink(p.element,p.options,p.bindings,p.result);else{var h=a.$$("a");a.$$(p.element).replaceWith(h.el),a.$$(h).append(p.element),new l.ResultLink(h.el,p.options,p.bindings,p.result)}if(p.img.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),r.QueryUtils.hasThumbnail(u))p.buildThumbnailImage();else{p.logger.info("Result has no thumbnail. Cannot build thumbnail image, instanciating an Icon component instead.");var d=new c.Icon(a.$$("div").el,{small:!0},o,u);a.$$(p.element).replaceWith(d.element)}return p}return i(e,t),e.prototype.buildThumbnailImage=function(){var t=this.bindings.queryController.getEndpoint();t.isJsonp()?this.buildImageWithDirectSrcAttribute(t):this.buildImageWithBase64SrcAttribute(t)},e.prototype.buildImageWithDirectSrcAttribute=function(t){var e=t.getViewAsDatastreamUri(this.result.uniqueId,"$Thumbnail$",{contentType:"image/png"});this.img.setAttribute("src",e),this.resizeContainingFieldTable()},e.prototype.buildImageWithBase64SrcAttribute=function(t){var e=this;t.getRawDataStream(this.result.uniqueId,"$Thumbnail$").then(function(t){var n=String.fromCharCode.apply(null,new Uint8Array(t));e.img.setAttribute("src","data:image/png;base64, "+btoa(n)),e.resizeContainingFieldTable()}).catch(function(){e.setEmptyThumbnailClass()})},e.prototype.resizeContainingFieldTable=function(){var t=a.$$(this.element).closest(o.Component.computeCssClassNameForType("FieldTable"));if(null!=t){p.get(t).updateToggleHeight()}},e.prototype.setEmptyThumbnailClass=function(){a.$$(this.img).addClass(this.options.noThumbnailClass)},e.ID="Thumbnail",e.doExport=function(){d.exportGlobally({Thumbnail:e})},e.options={noThumbnailClass:s.ComponentOptions.buildStringOption({defaultValue:"coveo-no-thumbnail"}),clickable:s.ComponentOptions.buildBooleanOption({defaultValue:!1})},e.parent=l.ResultLink,e}(o.Component);e.Thumbnail=m,m.options=h.extend({},l.ResultLink.options,m.options),u.Initialization.registerAutoCreateComponent(m)},337:function(t,e){},78:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),s=n(7),l=n(24),r=n(9),u=n(32),a=n(50),p=n(21),c=n(124),h=n(1),d=n(19),m=n(5),f=n(4),O=n(28),g=n(2),b=n(79),v=n(0),y=n(3);n(337);var C=function(t){function e(n,i,o,u,a){var c=t.call(this,n,e.ID,o)||this;if(c.element=n,c.options=i,c.bindings=o,c.result=u,c.os=a,c.logOpenDocument=v.debounce(function(){c.queryController.saveLastQuery();var t=g.$$(c.element).getAttribute("href");void 0!=t&&""!=t||(t=c.result.clickUri),c.usageAnalytics.logClickEvent(r.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:c.result.title,author:f.Utils.getFieldValue(c.result,"author")},c.result,c.root),O.Defer.flush()},1500,!0),c.options=s.ComponentOptions.initComponentOptions(n,e,i),c.options=v.extend({},c.options,c.componentOptionsModel.get(l.ComponentOptionsModel.attributesEnum.resultLink)),c.result=u||c.resolveResult(),null==c.options.openQuickview&&(c.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&p.DeviceUtils.isMobileDevice()),c.element.setAttribute("tabindex","0"),m.Assert.exists(c.componentOptionsModel),m.Assert.exists(c.result),!c.quickviewShouldBeOpened()){var h=v.once(function(){return c.logOpenDocument()});g.$$(n).on(["contextmenu","click","mousedown","mouseup"],h);var d;g.$$(n).on("touchstart",function(){d=window.setTimeout(h,1e3)}),g.$$(n).on("touchend",function(){d&&clearTimeout(d)})}return c.renderUri(n,u),c.bindEventToOpen(),c}return i(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML))if(this.options.titleTemplate){var n=this.parseStringTemplate(this.options.titleTemplate);this.element.innerHTML=n?b.StreamHighlightUtils.highlightStreamText(n,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}else this.element.innerHTML=this.result.title?a.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},g.$$(this.element).on("click",function(e){t.toExecuteOnOpen(e)}),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){g.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},g.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},g.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||f.Utils.isNonEmptyString(g.$$(this.element).getAttribute("href")))&&(g.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||g.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?this.parseStringTemplate(this.options.hrefTemplate):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?f.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=f.Utils.exists(this.os)?this.os:c.OSUtils.get();t==c.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==c.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=f.Utils.exists(this.os)?this.os:c.OSUtils.get();return t==c.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==c.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.prototype.parseStringTemplate=function(t){var e=this;return t?t.replace(/\$\{(.*?)\}/g,function(t){var n=t.substring(2,t.length-1),i=e.readFromObject(e.result,n);return i||(i=e.readFromObject(window,n)),i||e.logger.warn(n+" used in the ResultLink template is undefined for this result: "+e.result.title),i||t}):""},e.prototype.readFromObject=function(t,e){if(t&&-1!==e.indexOf(".")){var n=e.substring(e.indexOf(".")+1);return e=e.substring(0,e.indexOf(".")),this.readFromObject(t[e],n)}return t?t[e]:void 0},e.ID="ResultLink",e.doExport=function(){y.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=C,h.Initialization.registerAutoCreateComponent(C)}});