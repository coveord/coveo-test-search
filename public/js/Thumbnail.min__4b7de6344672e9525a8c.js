webpackJsonpCoveo__temporary([32,61,79],{185:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),s=n(8),l=n(5),r=n(22),u=n(2),a=n(4),p=n(112),c=n(1),h=n(3),d=n(130),m=function(t){function e(n,i,o,r){var u=t.call(this,n,e.ID,o)||this;return u.element=n,u.options=i,u.result=r,u.options=s.ComponentOptions.initComponentOptions(n,e,i),u.result=u.result||u.resolveResult(),l.Assert.exists(u.result),d.TemplateFieldsEvaluator.evaluateFieldsToMatch(u.options.conditions,u.result)?u.initialize(n,o):null!=u.element.parentElement&&u.element.parentElement.removeChild(u.element),u}return i(e,t),e.prototype.initialize=function(t,n){var i=c.$$(this.element).find("."+o.Component.computeCssClassNameForType("Quickview"));!a.Utils.isNullOrUndefined(i)&&r.QueryUtils.hasHTMLVersion(this.result)&&(c.$$(this.element).addClass("coveo-with-quickview"),c.$$(this.element).on("click",function(){o.Component.get(i).open()})),e.createIcon(this.result,this.options,t,n)},e.createIcon=function(t,n,i,o){void 0===n&&(n={}),void 0===i&&(i=c.$$("div").el);var s=p.FileTypes.get(t);return!o&&t.searchInterface&&(o=t.searchInterface.getBindings()),s=e.preprocessIconInfo(n,s),c.$$(i).toggleClass("coveo-small",!0===n.small),void 0!=n.value&&(!0===n.small&&-1==n.value.indexOf("-small")&&(s.icon+="-small"),!1===n.small&&-1!=n.value.indexOf("-small")&&(s.icon=s.icon.replace("-small",""))),c.$$(i).addClass(s.icon),i.setAttribute("title",s.caption),e.shouldDisplayLabel(n,o)&&(i.appendChild(c.$$("span",{className:"coveo-icon-caption-overlay"},s.caption).el),c.$$(i).addClass("coveo-icon-with-caption-overlay"),c.$$(i).setAttribute("data-with-label","true")),i},e.shouldDisplayLabel=function(t,e){return!1!==t.withLabel},e.preprocessIconInfo=function(t,e){return null!=t.labelValue&&(e.caption=t.labelValue),null!=t.value&&(e.icon="coveo-icon "+t.value),null==e.caption&&(e.caption=""),null==e.icon&&(e.icon="coveo-icon coveo-sprites-custom"),e},e.ID="Icon",e.doExport=function(){h.exportGlobally({Icon:e})},e.options={value:s.ComponentOptions.buildStringOption(),small:s.ComponentOptions.buildBooleanOption(),withLabel:s.ComponentOptions.buildBooleanOption(),labelValue:s.ComponentOptions.buildLocalizedStringOption(),conditions:s.ComponentOptions.buildFieldConditionOption()},e}(o.Component);e.Icon=m,u.Initialization.registerAutoCreateComponent(m)},278:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=n(3),l=n(1),r=n(22),u=n(7),a=n(8),p=n(2),c=n(29),h=n(185),d=n(91),m=n(6),f=function(t){function e(n,i,o,s){var u=t.call(this,n,e.ID,o)||this;if(u.element=n,u.options=i,u.bindings=o,u.result=s,u.options=a.ComponentOptions.initOptions(n,e.options,i,e.ID),"img"!=u.element.tagName.toLowerCase()?(u.img=l.$$("img").el,u.element.appendChild(u.img)):u.img=u.element,u.options.clickable)if("img"!=u.element.tagName.toLowerCase())new d.ResultLink(u.element,u.options,u.bindings,u.result);else{var p=l.$$("a");l.$$(u.element).replaceWith(p.el),l.$$(p).append(u.element),new d.ResultLink(p.el,u.options,u.bindings,u.result)}if(u.img.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),r.QueryUtils.hasThumbnail(s))u.buildThumbnailImage();else{u.logger.info("Result has no thumbnail. Cannot build thumbnail image, instanciating an Icon component instead.");var c=new h.Icon(l.$$("div").el,{small:!0},o,s);l.$$(u.element).replaceWith(c.element)}return u}return i(e,t),e.prototype.buildThumbnailImage=function(){var t=this.bindings.queryController.getEndpoint();t.isJsonp()?this.buildImageWithDirectSrcAttribute(t):this.buildImageWithBase64SrcAttribute(t),this.makeAccessible()},e.prototype.buildImageWithDirectSrcAttribute=function(t){var e=t.getViewAsDatastreamUri(this.result.uniqueId,"$Thumbnail$",{contentType:"image/png"});this.img.setAttribute("src",e),this.resizeContainingFieldTable()},e.prototype.buildImageWithBase64SrcAttribute=function(t){var e=this;t.getRawDataStream(this.result.uniqueId,"$Thumbnail$").then(function(t){var n=String.fromCharCode.apply(null,new Uint8Array(t));e.img.setAttribute("src","data:image/png;base64, "+btoa(n)),e.resizeContainingFieldTable()}).catch(function(){e.setEmptyThumbnailClass()})},e.prototype.makeAccessible=function(){this.img.setAttribute("alt",m.l("ThumbnailOf",this.result.title))},e.prototype.resizeContainingFieldTable=function(){var t=u.Component.computeCssClassNameForType("FieldTable"),e=l.$$(this.element).closest(t);if(null!=e){c.get(e).updateToggleHeight()}},e.prototype.setEmptyThumbnailClass=function(){l.$$(this.img).addClass(this.options.noThumbnailClass)},e.ID="Thumbnail",e.doExport=function(){s.exportGlobally({Thumbnail:e})},e.options={noThumbnailClass:a.ComponentOptions.buildStringOption({defaultValue:"coveo-no-thumbnail"}),clickable:a.ComponentOptions.buildBooleanOption({defaultValue:!1})},e.parent=d.ResultLink,e}(u.Component);e.Thumbnail=f,f.options=o.extend({},d.ResultLink.options,f.options),p.Initialization.registerAutoCreateComponent(f)},520:function(t,e){},91:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),s=n(8),l=n(27),r=n(10),u=n(28),a=n(67),p=n(23),c=n(178),h=n(2),d=n(22),m=n(5),f=n(4),O=n(30),g=n(1),b=n(113),v=n(19),y=n(0),C=n(3);n(520);var A=n(16),k=function(t){function e(n,i,o,u,a){var c=t.call(this,n,e.ID,o)||this;c.element=n,c.options=i,c.bindings=o,c.result=u,c.os=a,c.logOpenDocument=y.debounce(function(){c.queryController.saveLastQuery();var t=g.$$(c.element).getAttribute("href");void 0!=t&&""!=t||(t=c.escapedClickUri),c.usageAnalytics.logClickEvent(r.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:c.result.title,author:f.Utils.getFieldValue(c.result,"author")},c.result,c.root),O.Defer.flush()},1500,!0);var h=s.ComponentOptions.initComponentOptions(n,e,i),d=c.componentOptionsModel.get(l.ComponentOptionsModel.attributesEnum.resultLink);if(c.options=y.extend({},h,d),c.result=u||c.resolveResult(),null==c.options.openQuickview&&(c.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&p.DeviceUtils.isMobileDevice()),c.element.setAttribute("tabindex","0"),m.Assert.exists(c.componentOptionsModel),m.Assert.exists(c.result),!c.quickviewShouldBeOpened()){var b=y.once(function(){return c.logOpenDocument()});g.$$(n).on(["contextmenu","click","mousedown","mouseup"],b);var v;g.$$(n).on("touchstart",function(){v=window.setTimeout(b,1e3)}),g.$$(n).on("touchend",function(){v&&clearTimeout(v)})}return c.renderUri(n,u),c.bindEventToOpen(),c}return i(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML)){var n=this.getDisplayedTitle();this.element.innerHTML=n,this.element.title||(this.element.title=n)}},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.getDisplayedTitle=function(){if(this.options.titleTemplate){var t=v.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);return t?b.StreamHighlightUtils.highlightStreamText(t,this.result.termsToHighlight,this.result.phrasesToHighlight):this.escapedClickUri}return this.result.title?a.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.escapedClickUri},Object.defineProperty(e.prototype,"escapedClickUri",{get:function(){return y.escape(this.result.clickUri)},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new A.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){g.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},g.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},g.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||f.Utils.isNonEmptyString(g.$$(this.element).getAttribute("href")))&&(g.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||g.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?v.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?f.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=f.Utils.exists(this.os)?this.os:c.OSUtils.get();t==c.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==c.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=f.Utils.exists(this.os)?this.os:c.OSUtils.get();return t==c.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==c.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.escapedClickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){C.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=k,h.Initialization.registerAutoCreateComponent(k)}});