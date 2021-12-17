webpackJsonpCoveo__temporary([35,63],{264:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};Object.defineProperty(e,"__esModule",{value:!0});var s=i(8),r=i(68),l=i(2),p=i(4),u=i(1),a=i(3);i(638);var h=i(70),c=i(116),d=i(0),f=i(28),m=i(7),g=i(17),O=i(24),k=i(6),y=function(t){function e(i,n,o,r){var l=t.call(this,i,e.ID,o)||this;return l.element=i,l.options=n,l.bindings=o,l.result=r,l.links=[],l.options=s.ComponentOptions.initComponentOptions(i,e,n),l.options=d.extend({},l.options,l.componentOptionsModel.get(f.ComponentOptionsModel.attributesEnum.resultLink)),l.renderUri(l.result),l.addAccessibilityAttributes(),l}return n(e,t),e.prototype.openLink=function(t){void 0===t&&(t=!0),d.last(this.links).openLink(t)},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),d.last(this.links).openLinkInNewWindow(t)},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),d.last(this.links).openLinkAsConfigured(t)},e.prototype.renderUri=function(t){var e=p.Utils.getFieldValue(t,"parents");if(e)this.renderParents({parents:this.parseXmlParents(e),firstIndexToRender:0,maxNumOfParts:O.DeviceUtils.isMobileDevice()?3:5});else if(this.options.titleTemplate){var i=new h.ResultLink(this.buildElementForResultLink(t.printableUri),this.options,this.bindings,this.result);this.links.push(i),this.element.appendChild(this.makeLinkAccessible(i.element))}else this.renderShortenedUri()},e.prototype.buildSeparator=function(){return u.$$("span",{className:"coveo-printable-uri-separator",role:"separator"}," > ").el},e.prototype.buildHtmlToken=function(t,e){var i=t.charAt(0).toUpperCase()+t.slice(1),n=d.extend({},this.result,{clickUri:e,title:i,titleHighlights:this.getModifiedHighlightsForModifiedResultTitle(i)}),o=new h.ResultLink(this.buildElementForResultLink(i),this.options,this.bindings,n);return this.links.push(o),o.element},e.prototype.parseXmlParents=function(t){for(var e=p.Utils.parseXml(t).getElementsByTagName("parent"),i=[],n=0;n<e.length;n++)i.push(e.item(n));return i},e.prototype.renderParents=function(t){u.$$(this.element).empty();var e=t.parents.length-1,i=e-1,n=t.maxNumOfParts-1,s=Math.min(i,t.firstIndexToRender+n-1),r=i-s;this.optionallyRenderFirstEllipsis(t),this.renderMiddleParts(t,s),r>0&&this.renderLastEllipsis(o({},t,{firstIndexToRender:Math.min(Math.max(s+1,0),t.parents.length-t.maxNumOfParts)})),this.renderLastPart(t)},e.prototype.optionallyRenderFirstEllipsis=function(t){t.firstIndexToRender>0&&(this.appendEllipsis(o({},t,{firstIndexToRender:Math.max(0,t.firstIndexToRender-t.maxNumOfParts+1)})),this.appendSeparator())},e.prototype.renderMiddleParts=function(t,e){for(var i=t.firstIndexToRender;i<=e;i++)i>t.firstIndexToRender&&this.appendSeparator(),this.appendToken(t.parents[i])},e.prototype.renderLastEllipsis=function(t){this.appendSeparator(),this.appendEllipsis(t)},e.prototype.renderLastPart=function(t){this.appendSeparator(),this.appendToken(t.parents[t.parents.length-1])},e.prototype.appendSeparator=function(){this.element.appendChild(this.buildSeparator())},e.prototype.appendEllipsis=function(t){var e=this;this.element.appendChild(this.buildEllipsis(function(){e.renderParents(t),e.element.firstChild.firstChild.focus()}))},e.prototype.appendToken=function(t){this.element.appendChild(this.makeLinkAccessible(this.buildHtmlToken(t.getAttribute("name"),t.getAttribute("uri"))))},e.prototype.renderShortenedUri=function(){var t;t=-1==this.result.printableUri.indexOf("\\")?r.StringAndHoles.shortenUri(this.result.printableUri,u.$$(this.element).width()):r.StringAndHoles.shortenPath(this.result.printableUri,u.$$(this.element).width());var e=r.HighlightUtils.highlightString(t.value,this.result.printableUriHighlights,t.holes,"coveo-highlight"),i=d.extend({},this.result,{title:e,titleHighlights:this.getModifiedHighlightsForModifiedResultTitle(e)}),n=new h.ResultLink(this.buildElementForResultLink(this.result.printableUri),this.options,this.bindings,i);this.links.push(n),this.element.appendChild(this.makeLinkAccessible(n.element))},e.prototype.makeLinkAccessible=function(t){return u.$$("span",{className:"coveo-printable-uri-part",role:"listitem"},t).el},e.prototype.buildEllipsis=function(t){var e=u.$$("button",{type:"button"},"..."),i=u.$$("span",{className:"coveo-printable-uri-ellipsis",role:"listitem"},e).el;return(new g.AccessibleButton).withElement(e).withLabel(k.l("CollapsedUriParts")).withSelectAction(t).build(),i},e.prototype.buildElementForResultLink=function(t){return u.$$("a",{className:"CoveoResultLink",title:t}).el},e.prototype.getModifiedHighlightsForModifiedResultTitle=function(t){return c.getRestHighlightsForAllTerms(t,this.result.termsToHighlight,this.result.phrasesToHighlight,new c.DefaultStreamHighlightOptions)},e.prototype.addAccessibilityAttributes=function(){this.element.setAttribute("role","list")},e.ID="PrintableUri",e.options={},e.doExport=function(){a.exportGlobally({PrintableUri:e})},e}(m.Component);e.PrintableUri=y,y.options=d.extend({},y.options,h.ResultLink.options),l.Initialization.registerAutoCreateComponent(y)},534:function(t,e){},638:function(t,e){},70:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};Object.defineProperty(e,"__esModule",{value:!0});var s=i(7),r=i(8),l=i(28),p=i(10),u=i(29),a=i(68),h=i(24),c=i(178),d=i(2),f=i(21),m=i(5),g=i(4),O=i(31),k=i(1),y=i(116),b=i(22),v=i(0),A=i(3);i(534);var w=i(17),U=i(62),C=function(t){function e(i,n,s,p,u){var a=t.call(this,i,e.ID,s)||this;a.element=i,a.options=n,a.bindings=s,a.result=p,a.os=u,a.logAnalytics=v.debounce(function(){a.queryController.saveLastQuery();var t=k.$$(a.element).getAttribute("href");void 0!=t&&""!=t||(t=a.escapedClickUri),a.options.logAnalytics?a.options.logAnalytics(t):a.logDocumentOpen(t),O.Defer.flush()},1500,!0);var c=a.searchInterface.options.originalOptionsObject[e.ID]||{},d=r.ComponentOptions.initComponentOptions(i,e,o({},c,n)),f=a.componentOptionsModel.get(l.ComponentOptionsModel.attributesEnum.resultLink);if(a.options=v.extend({},d,f),a.result=p||a.resolveResult(),null==a.options.openQuickview&&(a.options.openQuickview="ExchangeCrawler"==p.raw.connectortype&&h.DeviceUtils.isMobileDevice()),a.element.setAttribute("tabindex","0"),m.Assert.exists(a.componentOptionsModel),m.Assert.exists(a.result),!a.quickviewShouldBeOpened()){var g=v.once(function(){return a.logAnalytics()});k.$$(i).on(["contextmenu","click","mousedown","mouseup"],g);var y;k.$$(i).on("touchstart",function(){y=window.setTimeout(g,1e3)}),k.$$(i).on("touchend",function(){y&&clearTimeout(y)})}return a.renderUri(i,p),a.bindEventToOpen(),a}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML)){var i=this.getDisplayedTitle();this.element.innerHTML=i,this.element.setAttribute("aria-label",U.l("Result")),this.element.title||(this.element.title=this.getDisplayedTitleAsText())}},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logAnalytics(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logAnalytics(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logAnalytics(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logAnalytics(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.getDisplayedTitle=function(){if(this.options.titleTemplate){var t=b.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);return t?y.StreamHighlightUtils.highlightStreamText(t,this.result.termsToHighlight,this.result.phrasesToHighlight):this.escapedClickUri}return this.result.title?a.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.escapedClickUri},e.prototype.getDisplayedTitleAsText=function(){var t=k.$$("div");return t.setHtml(this.getDisplayedTitle()),t.text()},Object.defineProperty(e.prototype,"escapedClickUri",{get:function(){return v.escape(this.result.clickUri)},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new w.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){k.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},k.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},k.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||g.Utils.isNonEmptyString(k.$$(this.element).getAttribute("href")))&&(k.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||k.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.logDocumentOpen=function(t){this.usageAnalytics.logClickEvent(p.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:this.result.title,author:g.Utils.getFieldValue(this.result,"author")},this.result,this.root)},e.prototype.filterProtocol=function(t){var e=/^(https?|ftp|file|mailto|tel):/i.test(t),i=/^(\/|\.\/|\.\.\/)/.test(t);return e||i?t:""},e.prototype.getResultUri=function(){if(this.options.hrefTemplate){var t=b.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result);return this.filterProtocol(t)}return void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?this.filterProtocol(g.Utils.getFieldValue(this.result,this.options.field)):this.filterProtocol(this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=g.Utils.exists(this.os)?this.os:c.OSUtils.get();t==c.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==c.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=g.Utils.exists(this.os)?this.os:c.OSUtils.get();return t==c.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==c.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.escapedClickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&f.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){A.exportGlobally({ResultLink:e})},e.options={field:r.ComponentOptions.buildFieldOption(),openInOutlook:r.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:r.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:r.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:r.ComponentOptions.buildStringOption(),titleTemplate:r.ComponentOptions.buildStringOption(),onClick:r.ComponentOptions.buildCustomOption(function(){return null}),logAnalytics:r.ComponentOptions.buildCustomOption(function(){return null})},e}(s.Component);e.ResultLink=C,d.Initialization.registerAutoCreateComponent(C)}});
//# sourceMappingURL=PrintableUri.min__020f62f0b766833a3891.js.map