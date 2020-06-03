webpackJsonpCoveo__temporary([33,61],{257:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};Object.defineProperty(e,"__esModule",{value:!0});var s=i(8),r=i(67),l=i(2),p=i(4),u=i(1),h=i(3);i(618);var a=i(90),d=i(112),c=i(0),f=i(27),m=i(7),g=i(16),O=i(23),k=i(6),b=function(t){function e(i,n,o,r){var l=t.call(this,i,e.ID,o)||this;return l.element=i,l.options=n,l.bindings=o,l.result=r,l.links=[],l.options=s.ComponentOptions.initComponentOptions(i,e,n),l.options=c.extend({},l.options,l.componentOptionsModel.get(f.ComponentOptionsModel.attributesEnum.resultLink)),l.renderUri(l.result),l.addAccessibilityAttributes(),l}return n(e,t),e.prototype.openLink=function(t){void 0===t&&(t=!0),c.last(this.links).openLink(t)},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),c.last(this.links).openLinkInNewWindow(t)},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),c.last(this.links).openLinkAsConfigured(t)},e.prototype.renderUri=function(t){var e=p.Utils.getFieldValue(t,"parents");if(e)this.renderParents({parents:this.parseXmlParents(e),firstIndexToRender:0,maxNumOfParts:O.DeviceUtils.isMobileDevice()?3:5});else if(this.options.titleTemplate){var i=new a.ResultLink(this.buildElementForResultLink(t.printableUri),this.options,this.bindings,this.result);this.links.push(i),this.element.appendChild(this.makeLinkAccessible(i.element))}else this.renderShortenedUri()},e.prototype.buildSeparator=function(){return u.$$("span",{className:"coveo-printable-uri-separator",role:"separator"}," > ").el},e.prototype.buildHtmlToken=function(t,e){var i=t.charAt(0).toUpperCase()+t.slice(1),n=c.extend({},this.result,{clickUri:e,title:i,titleHighlights:this.getModifiedHighlightsForModifiedResultTitle(i)}),o=new a.ResultLink(this.buildElementForResultLink(i),this.options,this.bindings,n);return this.links.push(o),o.element},e.prototype.parseXmlParents=function(t){for(var e=p.Utils.parseXml(t).getElementsByTagName("parent"),i=[],n=0;n<e.length;n++)i.push(e.item(n));return i},e.prototype.renderParents=function(t){u.$$(this.element).empty();var e=t.parents.length-1,i=e-1,n=t.maxNumOfParts-1,s=Math.min(i,t.firstIndexToRender+n-1),r=i-s;this.optionallyRenderFirstEllipsis(t),this.renderMiddleParts(t,s),r>0&&this.renderLastEllipsis(o({},t,{firstIndexToRender:Math.min(Math.max(s+1,0),t.parents.length-t.maxNumOfParts)})),this.renderLastPart(t)},e.prototype.optionallyRenderFirstEllipsis=function(t){t.firstIndexToRender>0&&(this.appendEllipsis(o({},t,{firstIndexToRender:Math.max(0,t.firstIndexToRender-t.maxNumOfParts+1)})),this.appendSeparator())},e.prototype.renderMiddleParts=function(t,e){for(var i=t.firstIndexToRender;i<=e;i++)i>t.firstIndexToRender&&this.appendSeparator(),this.appendToken(t.parents[i])},e.prototype.renderLastEllipsis=function(t){this.appendSeparator(),this.appendEllipsis(t)},e.prototype.renderLastPart=function(t){this.appendSeparator(),this.appendToken(t.parents[t.parents.length-1])},e.prototype.appendSeparator=function(){this.element.appendChild(this.buildSeparator())},e.prototype.appendEllipsis=function(t){var e=this;this.element.appendChild(this.buildEllipsis(function(){e.renderParents(t),e.element.firstChild.firstChild.focus()}))},e.prototype.appendToken=function(t){this.element.appendChild(this.makeLinkAccessible(this.buildHtmlToken(t.getAttribute("name"),t.getAttribute("uri"))))},e.prototype.renderShortenedUri=function(){var t;t=-1==this.result.printableUri.indexOf("\\")?r.StringAndHoles.shortenUri(this.result.printableUri,u.$$(this.element).width()):r.StringAndHoles.shortenPath(this.result.printableUri,u.$$(this.element).width());var e=r.HighlightUtils.highlightString(t.value,this.result.printableUriHighlights,t.holes,"coveo-highlight"),i=c.extend({},this.result,{title:e,titleHighlights:this.getModifiedHighlightsForModifiedResultTitle(e)}),n=new a.ResultLink(this.buildElementForResultLink(this.result.printableUri),this.options,this.bindings,i);this.links.push(n),this.element.appendChild(this.makeLinkAccessible(n.element))},e.prototype.makeLinkAccessible=function(t){return u.$$("span",{className:"coveo-printable-uri-part",role:"listitem"},t).el},e.prototype.buildEllipsis=function(t){var e=u.$$("button",{},"..."),i=u.$$("span",{className:"coveo-printable-uri-ellipsis",role:"listitem"},e).el;return(new g.AccessibleButton).withElement(e).withLabel(k.l("CollapsedUriParts")).withSelectAction(t).build(),i},e.prototype.buildElementForResultLink=function(t){return u.$$("a",{className:"CoveoResultLink",title:t}).el},e.prototype.getModifiedHighlightsForModifiedResultTitle=function(t){return d.getRestHighlightsForAllTerms(t,this.result.termsToHighlight,this.result.phrasesToHighlight,new d.DefaultStreamHighlightOptions)},e.prototype.addAccessibilityAttributes=function(){this.element.setAttribute("role","list")},e.ID="PrintableUri",e.options={},e.doExport=function(){h.exportGlobally({PrintableUri:e})},e}(m.Component);e.PrintableUri=b,b.options=c.extend({},b.options,a.ResultLink.options),l.Initialization.registerAutoCreateComponent(b)},515:function(t,e){},618:function(t,e){},90:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i(7),s=i(8),r=i(27),l=i(10),p=i(28),u=i(67),h=i(23),a=i(177),d=i(2),c=i(21),f=i(5),m=i(4),g=i(31),O=i(1),k=i(112),b=i(19),v=i(0),y=i(3);i(515);var w=i(16),A=function(t){function e(i,n,o,p,u){var a=t.call(this,i,e.ID,o)||this;if(a.element=i,a.options=n,a.bindings=o,a.result=p,a.os=u,a.logOpenDocument=v.debounce(function(){a.queryController.saveLastQuery();var t=O.$$(a.element).getAttribute("href");void 0!=t&&""!=t||(t=a.result.clickUri),a.usageAnalytics.logClickEvent(l.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:a.result.title,author:m.Utils.getFieldValue(a.result,"author")},a.result,a.root),g.Defer.flush()},1500,!0),a.options=s.ComponentOptions.initComponentOptions(i,e,n),a.options=v.extend({},a.options,a.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink)),a.result=p||a.resolveResult(),null==a.options.openQuickview&&(a.options.openQuickview="ExchangeCrawler"==p.raw.connectortype&&h.DeviceUtils.isMobileDevice()),a.element.setAttribute("tabindex","0"),f.Assert.exists(a.componentOptionsModel),f.Assert.exists(a.result),!a.quickviewShouldBeOpened()){var d=v.once(function(){return a.logOpenDocument()});O.$$(i).on(["contextmenu","click","mousedown","mouseup"],d);var c;O.$$(i).on("touchstart",function(){c=window.setTimeout(d,1e3)}),O.$$(i).on("touchend",function(){c&&clearTimeout(c)})}return a.renderUri(i,p),a.bindEventToOpen(),a}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML)){var i=this.getDisplayedTitle();this.element.innerHTML=i,this.element.title||(this.element.title=i)}},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.getDisplayedTitle=function(){if(this.options.titleTemplate){var t=b.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);return t?k.StreamHighlightUtils.highlightStreamText(t,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}return this.result.title?u.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new w.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){O.$$(t.bindings.resultElement).trigger(p.ResultListEvents.openQuickview)},O.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},O.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||m.Utils.isNonEmptyString(O.$$(this.element).getAttribute("href")))&&(O.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||O.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?b.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?m.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=m.Utils.exists(this.os)?this.os:a.OSUtils.get();t==a.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==a.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=m.Utils.exists(this.os)?this.os:a.OSUtils.get();return t==a.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==a.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&c.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){y.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=A,d.Initialization.registerAutoCreateComponent(A)}});