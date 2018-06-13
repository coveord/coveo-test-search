webpackJsonpCoveo__temporary([27,62],{193:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i(7),s=i(50),r=i(1),l=i(4),u=i(2),p=i(3);i(414);var h=i(78),a=i(79),c=i(0),d=i(24),f=i(6),g=function(t){function e(i,n,s,r){var l=t.call(this,i,e.ID,s)||this;return l.element=i,l.options=n,l.bindings=s,l.result=r,l.links=[],l.options=o.ComponentOptions.initComponentOptions(i,e,n),l.options=c.extend({},l.options,l.componentOptionsModel.get(d.ComponentOptionsModel.attributesEnum.resultLink)),l.renderUri(l.element,l.result),l}return n(e,t),e.prototype.openLink=function(t){void 0===t&&(t=!0),c.last(this.links).openLink(t)},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),c.last(this.links).openLinkInNewWindow(t)},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),c.last(this.links).openLinkAsConfigured(t)},e.prototype.renderUri=function(t,e){var i=l.Utils.getFieldValue(e,"parents");if(i)this.renderParentsXml(t,i);else if(this.options.titleTemplate){var n=new h.ResultLink(this.buildElementForResultLink(e.printableUri),this.options,this.bindings,this.result);this.links.push(n),this.element.appendChild(n.element)}else this.renderShortenedUri()},e.prototype.buildSeparator=function(){return u.$$("span",{className:"coveo-printable-uri-separator"}," > ").el},e.prototype.buildHtmlToken=function(t,e){var i=t.charAt(0).toUpperCase()+t.slice(1),n=c.extend({},this.result,{clickUri:e,title:i,titleHighlights:this.getModifiedHighlightsForModifiedResultTitle(i)}),o=new h.ResultLink(this.buildElementForResultLink(i),this.options,this.bindings,n);return this.links.push(o),o.element},e.prototype.renderParentsXml=function(t,e){for(var i=l.Utils.parseXml(e),n=i.getElementsByTagName("parent"),o=[],s=[],r=0;r<n.length;r++){if(r>0){var u=this.buildSeparator();s.push(u),t.appendChild(u)}var p=n.item(r),h=this.buildHtmlToken(p.getAttribute("name"),p.getAttribute("uri"));o.push(h),t.appendChild(h)}},e.prototype.renderShortenedUri=function(){var t;t=-1==this.result.printableUri.indexOf("\\")?s.StringAndHoles.shortenUri(this.result.printableUri,u.$$(this.element).width()):s.StringAndHoles.shortenPath(this.result.printableUri,u.$$(this.element).width());var e=s.HighlightUtils.highlightString(t.value,this.result.printableUriHighlights,t.holes,"coveo-highlight"),i=c.extend({},this.result,{title:e,titleHighlights:this.getModifiedHighlightsForModifiedResultTitle(e)}),n=new h.ResultLink(this.buildElementForResultLink(this.result.printableUri),this.options,this.bindings,i);this.links.push(n),this.element.appendChild(n.element)},e.prototype.buildElementForResultLink=function(t){return u.$$("a",{className:"CoveoResultLink coveo-printable-uri-part",title:t}).el},e.prototype.getModifiedHighlightsForModifiedResultTitle=function(t){return a.getRestHighlightsForAllTerms(t,this.result.termsToHighlight,this.result.phrasesToHighlight,new a.DefaultStreamHighlightOptions)},e.ID="PrintableUri",e.options={},e.doExport=function(){p.exportGlobally({PrintableUri:e})},e}(f.Component);e.PrintableUri=g,g.options=c.extend({},g.options,h.ResultLink.options),r.Initialization.registerAutoCreateComponent(g)},336:function(t,e){},414:function(t,e){},78:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i(6),s=i(7),r=i(24),l=i(9),u=i(32),p=i(50),h=i(21),a=i(125),c=i(1),d=i(19),f=i(5),g=i(4),m=i(28),O=i(2),k=i(79),v=i(0),b=i(3);i(336);var y=function(t){function e(i,n,o,u,p){var a=t.call(this,i,e.ID,o)||this;if(a.element=i,a.options=n,a.bindings=o,a.result=u,a.os=p,a.logOpenDocument=v.debounce(function(){a.queryController.saveLastQuery();var t=O.$$(a.element).getAttribute("href");void 0!=t&&""!=t||(t=a.result.clickUri),a.usageAnalytics.logClickEvent(l.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:a.result.title,author:g.Utils.getFieldValue(a.result,"author")},a.result,a.root),m.Defer.flush()},1500,!0),a.options=s.ComponentOptions.initComponentOptions(i,e,n),a.options=v.extend({},a.options,a.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink)),a.result=u||a.resolveResult(),null==a.options.openQuickview&&(a.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&h.DeviceUtils.isMobileDevice()),a.element.setAttribute("tabindex","0"),f.Assert.exists(a.componentOptionsModel),f.Assert.exists(a.result),!a.quickviewShouldBeOpened()){var c=v.once(function(){return a.logOpenDocument()});O.$$(i).on(["contextmenu","click","mousedown","mouseup"],c);var d;O.$$(i).on("touchstart",function(){d=window.setTimeout(c,1e3)}),O.$$(i).on("touchend",function(){d&&clearTimeout(d)})}return a.renderUri(i,u),a.bindEventToOpen(),a}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML))if(this.options.titleTemplate){var i=this.parseStringTemplate(this.options.titleTemplate);this.element.innerHTML=i?k.StreamHighlightUtils.highlightStreamText(i,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}else this.element.innerHTML=this.result.title?p.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},O.$$(this.element).on("click",function(e){t.toExecuteOnOpen(e)}),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){O.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},O.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},O.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||g.Utils.isNonEmptyString(O.$$(this.element).getAttribute("href")))&&(O.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||O.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?this.parseStringTemplate(this.options.hrefTemplate):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?g.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=g.Utils.exists(this.os)?this.os:a.OSUtils.get();t==a.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==a.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=g.Utils.exists(this.os)?this.os:a.OSUtils.get();return t==a.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==a.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.prototype.parseStringTemplate=function(t){var e=this;return t?t.replace(/\$\{(.*?)\}/g,function(t){var i=t.substring(2,t.length-1),n=e.readFromObject(e.result,i);return n||(n=e.readFromObject(window,i)),n||e.logger.warn(i+" used in the ResultLink template is undefined for this result: "+e.result.title),n||t}):""},e.prototype.readFromObject=function(t,e){if(t&&-1!==e.indexOf(".")){var i=e.substring(e.indexOf(".")+1);return e=e.substring(0,e.indexOf(".")),this.readFromObject(t[e],i)}return t?t[e]:void 0},e.ID="ResultLink",e.doExport=function(){b.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=y,c.Initialization.registerAutoCreateComponent(y)}});