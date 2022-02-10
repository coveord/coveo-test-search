webpackJsonpCoveo__temporary([34,63,81],{189:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i(7),s=i(8),l=i(5),r=i(21),u=i(2),a=i(4),p=i(117),c=i(1),h=i(3),d=i(133),m=function(t){function e(i,n,o,r){var u=t.call(this,i,e.ID,o)||this;return u.element=i,u.options=n,u.result=r,u.options=s.ComponentOptions.initComponentOptions(i,e,n),u.result=u.result||u.resolveResult(),l.Assert.exists(u.result),d.TemplateFieldsEvaluator.evaluateFieldsToMatch(u.options.conditions,u.result)?u.initialize(i,o):null!=u.element.parentElement&&u.element.parentElement.removeChild(u.element),u}return n(e,t),e.prototype.initialize=function(t,i){var n=c.$$(this.element).find("."+o.Component.computeCssClassNameForType("Quickview"));!a.Utils.isNullOrUndefined(n)&&r.QueryUtils.hasHTMLVersion(this.result)&&(c.$$(this.element).addClass("coveo-with-quickview"),c.$$(this.element).on("click",function(){o.Component.get(n).open()})),e.createIcon(this.result,this.options,t,i)},e.createIcon=function(t,i,n,o){void 0===i&&(i={}),void 0===n&&(n=c.$$("div").el);var s=p.FileTypes.get(t);return!o&&t.searchInterface&&(o=t.searchInterface.getBindings()),s=e.preprocessIconInfo(i,s),c.$$(n).toggleClass("coveo-small",!0===i.small),void 0!=i.value&&(!0===i.small&&-1==i.value.indexOf("-small")&&(s.icon+="-small"),!1===i.small&&-1!=i.value.indexOf("-small")&&(s.icon=s.icon.replace("-small",""))),c.$$(n).addClass(s.icon),n.setAttribute("title",s.caption),e.shouldDisplayLabel(i,o)&&(n.appendChild(c.$$("span",{className:"coveo-icon-caption-overlay"},s.caption).el),c.$$(n).addClass("coveo-icon-with-caption-overlay"),c.$$(n).setAttribute("data-with-label","true")),n},e.shouldDisplayLabel=function(t,e){return!1!==t.withLabel},e.preprocessIconInfo=function(t,e){return null!=t.labelValue&&(e.caption=t.labelValue),null!=t.value&&(e.icon="coveo-icon "+t.value),null==e.caption&&(e.caption=""),null==e.icon&&(e.icon="coveo-icon coveo-sprites-custom"),e},e.ID="Icon",e.doExport=function(){h.exportGlobally({Icon:e})},e.options={value:s.ComponentOptions.buildStringOption(),small:s.ComponentOptions.buildBooleanOption(),withLabel:s.ComponentOptions.buildBooleanOption(),labelValue:s.ComponentOptions.buildLocalizedStringOption(),conditions:s.ComponentOptions.buildFieldConditionOption()},e}(o.Component);e.Icon=m,u.Initialization.registerAutoCreateComponent(m)},284:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i(0),s=i(3),l=i(1),r=i(21),u=i(7),a=i(8),p=i(2),c=i(30),h=i(189),d=i(70),m=i(6),f=function(t){function e(i,n,o,s){var u=t.call(this,i,e.ID,o)||this;if(u.element=i,u.options=n,u.bindings=o,u.result=s,u.options=a.ComponentOptions.initOptions(i,e.options,n,e.ID),"img"!=u.element.tagName.toLowerCase()?(u.img=l.$$("img").el,u.element.appendChild(u.img)):u.img=u.element,u.options.clickable)if("img"!=u.element.tagName.toLowerCase())new d.ResultLink(u.element,u.options,u.bindings,u.result);else{var p=l.$$("a");l.$$(u.element).replaceWith(p.el),l.$$(p).append(u.element),new d.ResultLink(p.el,u.options,u.bindings,u.result)}if(u.img.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),r.QueryUtils.hasThumbnail(s))u.buildThumbnailImage();else{u.logger.info("Result has no thumbnail. Cannot build thumbnail image, instanciating an Icon component instead.");var c=new h.Icon(l.$$("div").el,{small:!0},o,s);l.$$(u.element).replaceWith(c.element)}return u}return n(e,t),e.prototype.buildThumbnailImage=function(){var t=this.bindings.queryController.getEndpoint();t.isJsonp()?this.buildImageWithDirectSrcAttribute(t):this.buildImageWithBase64SrcAttribute(t),this.makeAccessible()},e.prototype.buildImageWithDirectSrcAttribute=function(t){var e=t.getViewAsDatastreamUri(this.result.uniqueId,"$Thumbnail$",{contentType:"image/png"});this.img.setAttribute("src",e),this.resizeContainingFieldTable()},e.prototype.buildImageWithBase64SrcAttribute=function(t){var e=this;t.getRawDataStream(this.result.uniqueId,"$Thumbnail$").then(function(t){var i=String.fromCharCode.apply(null,new Uint8Array(t));e.img.setAttribute("src","data:image/png;base64, "+btoa(i)),e.resizeContainingFieldTable()}).catch(function(){e.setEmptyThumbnailClass()})},e.prototype.makeAccessible=function(){this.img.setAttribute("alt",m.l("ThumbnailOf",this.result.title))},e.prototype.resizeContainingFieldTable=function(){var t=u.Component.computeCssClassNameForType("FieldTable"),e=l.$$(this.element).closest(t);if(null!=e){c.get(e).updateToggleHeight()}},e.prototype.setEmptyThumbnailClass=function(){l.$$(this.img).addClass(this.options.noThumbnailClass)},e.ID="Thumbnail",e.doExport=function(){s.exportGlobally({Thumbnail:e})},e.options={noThumbnailClass:a.ComponentOptions.buildStringOption({defaultValue:"coveo-no-thumbnail"}),clickable:a.ComponentOptions.buildBooleanOption({defaultValue:!1})},e.parent=d.ResultLink,e}(u.Component);e.Thumbnail=f,f.options=o.extend({},d.ResultLink.options,f.options),p.Initialization.registerAutoCreateComponent(f)},534:function(t,e){},70:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};Object.defineProperty(e,"__esModule",{value:!0});var s=i(7),l=i(8),r=i(28),u=i(10),a=i(29),p=i(68),c=i(24),h=i(178),d=i(2),m=i(21),f=i(5),g=i(4),O=i(31),b=i(1),v=i(116),y=i(22),A=i(0),C=i(3);i(534);var k=i(17),w=i(62),$=function(t){function e(i,n,s,u,a){var p=t.call(this,i,e.ID,s)||this;p.element=i,p.options=n,p.bindings=s,p.result=u,p.os=a,p.logAnalytics=A.debounce(function(){p.queryController.saveLastQuery();var t=b.$$(p.element).getAttribute("href");void 0!=t&&""!=t||(t=p.escapedClickUri),p.options.logAnalytics?p.options.logAnalytics(t):p.logDocumentOpen(t),O.Defer.flush()},1500,!0);var h=p.searchInterface.options.originalOptionsObject[e.ID]||{},d=l.ComponentOptions.initComponentOptions(i,e,o({},h,n)),m=p.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink);if(p.options=A.extend({},d,m),p.result=u||p.resolveResult(),null==p.options.openQuickview&&(p.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&c.DeviceUtils.isMobileDevice()),p.element.setAttribute("tabindex","0"),f.Assert.exists(p.componentOptionsModel),f.Assert.exists(p.result),!p.quickviewShouldBeOpened()){var g=A.once(function(){return p.logAnalytics()});b.$$(i).on(["contextmenu","click","mousedown","mouseup"],g);var v;b.$$(i).on("touchstart",function(){v=window.setTimeout(g,1e3)}),b.$$(i).on("touchend",function(){v&&clearTimeout(v)})}return p.renderUri(i,u),p.bindEventToOpen(),p}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML)){var i=this.getDisplayedTitle();this.element.innerHTML=i,this.element.setAttribute("aria-label",w.l("Result")),this.element.title||(this.element.title=this.getDisplayedTitleAsText())}},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logAnalytics(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logAnalytics(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logAnalytics(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logAnalytics(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.getDisplayedTitle=function(){if(this.options.titleTemplate){var t=y.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);return t?v.StreamHighlightUtils.highlightStreamText(t,this.result.termsToHighlight,this.result.phrasesToHighlight):this.escapedClickUri}return this.result.title?p.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.escapedClickUri},e.prototype.getDisplayedTitleAsText=function(){var t=b.$$("div");return t.setHtml(this.getDisplayedTitle()),t.text()},Object.defineProperty(e.prototype,"escapedClickUri",{get:function(){return A.escape(this.result.clickUri)},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new k.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){b.$$(t.bindings.resultElement).trigger(a.ResultListEvents.openQuickview)},b.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},b.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||g.Utils.isNonEmptyString(b.$$(this.element).getAttribute("href")))&&(b.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||b.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.logDocumentOpen=function(t){this.usageAnalytics.logClickEvent(u.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:this.result.title,author:g.Utils.getFieldValue(this.result,"author")},this.result,this.root)},e.prototype.filterProtocol=function(t){var e=/^(https?|ftp|file|mailto|tel):/i.test(t),i=/^(\/|\.\/|\.\.\/)/.test(t);return e||i?t:""},e.prototype.getResultUri=function(){if(this.options.hrefTemplate){var t=y.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result);return this.filterProtocol(t)}return void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?this.filterProtocol(g.Utils.getFieldValue(this.result,this.options.field)):this.filterProtocol(this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=g.Utils.exists(this.os)?this.os:h.OSUtils.get();t==h.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==h.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=g.Utils.exists(this.os)?this.os:h.OSUtils.get();return t==h.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==h.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.escapedClickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&m.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){C.exportGlobally({ResultLink:e})},e.options={field:l.ComponentOptions.buildFieldOption(),openInOutlook:l.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:l.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:l.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:l.ComponentOptions.buildStringOption(),titleTemplate:l.ComponentOptions.buildStringOption(),onClick:l.ComponentOptions.buildCustomOption(function(){return null}),logAnalytics:l.ComponentOptions.buildCustomOption(function(){return null})},e}(s.Component);e.ResultLink=$,d.Initialization.registerAutoCreateComponent($)}});
//# sourceMappingURL=Thumbnail.min__5ebc66d1c8fc250de81a.js.map