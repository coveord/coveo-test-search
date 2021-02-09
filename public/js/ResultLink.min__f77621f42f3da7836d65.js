webpackJsonpCoveo__temporary([63],{530:function(t,e){},69:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i(7),s=i(8),l=i(28),r=i(9),u=i(29),p=i(67),c=i(24),h=i(180),a=i(2),d=i(21),f=i(5),O=i(4),m=i(31),k=i(1),g=i(113),v=i(22),y=i(0),w=i(3);i(530);var b=i(16),A=function(t){function e(i,n,o,u,p){var h=t.call(this,i,e.ID,o)||this;h.element=i,h.options=n,h.bindings=o,h.result=u,h.os=p,h.logOpenDocument=y.debounce(function(){h.queryController.saveLastQuery();var t=k.$$(h.element).getAttribute("href");void 0!=t&&""!=t||(t=h.escapedClickUri),h.usageAnalytics.logClickEvent(r.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:h.result.title,author:O.Utils.getFieldValue(h.result,"author")},h.result,h.root),m.Defer.flush()},1500,!0);var a=s.ComponentOptions.initComponentOptions(i,e,n),d=h.componentOptionsModel.get(l.ComponentOptionsModel.attributesEnum.resultLink);if(h.options=y.extend({},a,d),h.result=u||h.resolveResult(),null==h.options.openQuickview&&(h.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&c.DeviceUtils.isMobileDevice()),h.element.setAttribute("tabindex","0"),f.Assert.exists(h.componentOptionsModel),f.Assert.exists(h.result),!h.quickviewShouldBeOpened()){var g=y.once(function(){return h.logOpenDocument()});k.$$(i).on(["contextmenu","click","mousedown","mouseup"],g);var v;k.$$(i).on("touchstart",function(){v=window.setTimeout(g,1e3)}),k.$$(i).on("touchend",function(){v&&clearTimeout(v)})}return h.renderUri(i,u),h.bindEventToOpen(),h}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML)){var i=this.getDisplayedTitle();this.element.innerHTML=i,this.element.title||(this.element.title=this.getDisplayedTitleAsText())}},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.getDisplayedTitle=function(){if(this.options.titleTemplate){var t=v.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);return t?g.StreamHighlightUtils.highlightStreamText(t,this.result.termsToHighlight,this.result.phrasesToHighlight):this.escapedClickUri}return this.result.title?p.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.escapedClickUri},e.prototype.getDisplayedTitleAsText=function(){var t=k.$$("div");return t.setHtml(this.getDisplayedTitle()),t.text()},Object.defineProperty(e.prototype,"escapedClickUri",{get:function(){return y.escape(this.result.clickUri)},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new b.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){k.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},k.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},k.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||O.Utils.isNonEmptyString(k.$$(this.element).getAttribute("href")))&&(k.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||k.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.filterProtocol=function(t){var e=/^(https?|ftp|file|mailto|tel):/i.test(t),i=/^\//.test(t);return e||i?t:""},e.prototype.getResultUri=function(){if(this.options.hrefTemplate){var t=v.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result);return this.filterProtocol(t)}return void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?this.filterProtocol(O.Utils.getFieldValue(this.result,this.options.field)):this.filterProtocol(this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=O.Utils.exists(this.os)?this.os:h.OSUtils.get();t==h.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==h.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=O.Utils.exists(this.os)?this.os:h.OSUtils.get();return t==h.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==h.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.escapedClickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){w.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=A,a.Initialization.registerAutoCreateComponent(A)}});
//# sourceMappingURL=ResultLink.min__f77621f42f3da7836d65.js.map