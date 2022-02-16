webpackJsonpCoveo__temporary([40,63],{187:function(t,e,i){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(25),s=i(3),l=i(1),r=i(15),u=i(12),p=i(4),a=i(7),c=i(8),h=i(2),d=i(31),f=i(71),m=i(124),O=function(t){function e(i,o,s,d,O,g){void 0===O&&(O=n.ModalBox);var y=t.call(this,i,e.ID,s)||this;y.element=i,y.options=o,y.bindings=s,y.result=d,y.origin=g,y.options=c.ComponentOptions.initComponentOptions(i,e,o),y.resultLink=l.$$("a",{className:a.Component.computeCssClassName(f.ResultLink)}),g||(y.origin=y.resultLink.el);var v=l.$$("div",{className:"coveo-youtube-thumbnail-container"});y.resultLink.append(v.el);var b=l.$$("img",{src:p.Utils.getFieldValue(y.result,"ytthumbnailurl"),className:"coveo-youtube-thumbnail-img",alt:y.result.title,title:y.result.title});b.el.style.width=y.options.width,b.el.style.height=y.options.height,b.el.onerror=function(){var t=l.$$("div",{},u.SVGIcons.icons.video).el;r.SVGDom.addStyleToSVGInContainer(t,{width:y.options.width}),l.$$(b).remove(),v.append(t)},v.append(b.el);var k=l.$$("span",{className:"coveo-youtube-thumbnail-play-button"});return v.append(k.el),l.$$(y.element).append(y.resultLink.el),h.Initialization.automaticallyCreateComponentsInsideResult(i,d,{ResultLink:y.options.embed?{onClick:function(){return y.openYoutubeIframe()}}:null}),y.modalbox=new m.AccessibleModal("coveo-youtube-player",y.searchInterface.options.modalContainer,O,{overlayClose:!0}),y}return o(e,t),e.prototype.openResultLink=function(){d.get(this.resultLink.el).openLinkAsConfigured()},e.prototype.openYoutubeIframe=function(){var t=this,e=l.$$("iframe",{src:"https://www.youtube.com/embed/"+this.extractVideoId()+"?autoplay=1",allowfullscreen:"allowfullscreen",width:"100%",height:"100%",title:this.result.title}),i=l.$$("div");i.append(e.el),this.modalbox.openResult({result:this.result,options:{showDate:!0,title:this.result.title},bindings:this.bindings,content:i.el,validation:function(){return!0},origin:this.origin}),l.$$(l.$$(this.modalbox.wrapper).find(".coveo-quickview-close-button")).on("click",function(){t.modalbox.close()})},e.prototype.extractVideoId=function(){return this.result.clickUri.split("watch?v=")[1]},e.ID="YouTubeThumbnail",e.doExport=function(){s.exportGlobally({YouTubeThumbnail:e})},e.options={width:c.ComponentOptions.buildStringOption({defaultValue:"200px"}),height:c.ComponentOptions.buildStringOption({defaultValue:"112px"}),embed:c.ComponentOptions.buildBooleanOption({defaultValue:!0})},e}(a.Component);e.YouTubeThumbnail=O,h.Initialization.registerAutoCreateComponent(O)},534:function(t,e){},71:function(t,e,i){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),n=this&&this.__assign||Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++){e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t};Object.defineProperty(e,"__esModule",{value:!0});var s=i(7),l=i(8),r=i(28),u=i(10),p=i(30),a=i(69),c=i(24),h=i(178),d=i(2),f=i(21),m=i(5),O=i(4),g=i(29),y=i(1),v=i(116),b=i(22),k=i(0),w=i(3);i(534);var C=i(16),A=i(62),$=function(t){function e(i,o,s,u,p){var a=t.call(this,i,e.ID,s)||this;a.element=i,a.options=o,a.bindings=s,a.result=u,a.os=p,a.logAnalytics=k.debounce(function(){a.queryController.saveLastQuery();var t=y.$$(a.element).getAttribute("href");void 0!=t&&""!=t||(t=a.escapedClickUri),a.options.logAnalytics?a.options.logAnalytics(t):a.logDocumentOpen(t),g.Defer.flush()},1500,!0);var h=a.searchInterface.options.originalOptionsObject[e.ID]||{},d=l.ComponentOptions.initComponentOptions(i,e,n({},h,o)),f=a.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink);if(a.options=k.extend({},d,f),a.result=u||a.resolveResult(),null==a.options.openQuickview&&(a.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&c.DeviceUtils.isMobileDevice()),a.element.setAttribute("tabindex","0"),m.Assert.exists(a.componentOptionsModel),m.Assert.exists(a.result),!a.quickviewShouldBeOpened()){var O=k.once(function(){return a.logAnalytics()});y.$$(i).on(["contextmenu","click","mousedown","mouseup"],O);var v;y.$$(i).on("touchstart",function(){v=window.setTimeout(O,1e3)}),y.$$(i).on("touchend",function(){v&&clearTimeout(v)})}return a.renderUri(i,u),a.bindEventToOpen(),a}return o(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML)){var i=this.getDisplayedTitle();this.element.innerHTML=i,this.element.setAttribute("aria-label",A.l("Result")),this.element.title||(this.element.title=this.getDisplayedTitleAsText())}},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logAnalytics(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logAnalytics(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logAnalytics(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logAnalytics(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.getDisplayedTitle=function(){if(this.options.titleTemplate){var t=b.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);return t?v.StreamHighlightUtils.highlightStreamText(t,this.result.termsToHighlight,this.result.phrasesToHighlight):this.escapedClickUri}return this.result.title?a.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.escapedClickUri},e.prototype.getDisplayedTitleAsText=function(){var t=y.$$("div");return t.setHtml(this.getDisplayedTitle()),t.text()},Object.defineProperty(e.prototype,"escapedClickUri",{get:function(){return k.escape(this.result.clickUri)},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new C.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){y.$$(t.bindings.resultElement).trigger(p.ResultListEvents.openQuickview)},y.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},y.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||O.Utils.isNonEmptyString(y.$$(this.element).getAttribute("href")))&&(y.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||y.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.logDocumentOpen=function(t){this.usageAnalytics.logClickEvent(u.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:this.result.title,author:O.Utils.getFieldValue(this.result,"author")},this.result,this.root)},e.prototype.filterProtocol=function(t){var e=/^(https?|ftp|file|mailto|tel):/i.test(t),i=/^(\/|\.\/|\.\.\/)/.test(t);return e||i?t:""},e.prototype.getResultUri=function(){if(this.options.hrefTemplate){var t=b.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result);return this.filterProtocol(t)}return void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?this.filterProtocol(O.Utils.getFieldValue(this.result,this.options.field)):this.filterProtocol(this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=O.Utils.exists(this.os)?this.os:h.OSUtils.get();t==h.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==h.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=O.Utils.exists(this.os)?this.os:h.OSUtils.get();return t==h.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==h.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.escapedClickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&f.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){w.exportGlobally({ResultLink:e})},e.options={field:l.ComponentOptions.buildFieldOption(),openInOutlook:l.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:l.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:l.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:l.ComponentOptions.buildStringOption(),titleTemplate:l.ComponentOptions.buildStringOption(),onClick:l.ComponentOptions.buildCustomOption(function(){return null}),logAnalytics:l.ComponentOptions.buildCustomOption(function(){return null})},e}(s.Component);e.ResultLink=$,d.Initialization.registerAutoCreateComponent($)}});
//# sourceMappingURL=YouTubeThumbnail.min__4a401bd73497e38dfcc6.js.map