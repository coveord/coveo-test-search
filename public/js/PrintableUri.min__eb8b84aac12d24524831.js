webpackJsonpCoveo__temporary([28,40],{17:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(11),o=i(30),s=i(1);i(376);var r=function(){function t(){this.logger=new n.Logger(this)}return t.prototype.withOwner=function(t){return this.eventOwner=t,this},t.prototype.withElement=function(t){return t instanceof HTMLElement?this.element=s.$$(t):this.element=t,this},t.prototype.withLabel=function(t){return this.label=t,this},t.prototype.withTitle=function(t){return this.title=t,this},t.prototype.withSelectAction=function(t){return this.clickAction=t,this.enterKeyboardAction=t,this},t.prototype.withClickAction=function(t){return this.clickAction=t,this},t.prototype.withEnterKeyboardAction=function(t){return this.enterKeyboardAction=t,this},t.prototype.withFocusAndMouseEnterAction=function(t){return this.focusAction=t,this.mouseenterAction=t,this},t.prototype.withFocusAction=function(t){return this.focusAction=t,this},t.prototype.withMouseEnterAction=function(t){return this.mouseenterAction=t,this},t.prototype.withBlurAndMouseLeaveAction=function(t){return this.mouseleaveAction=t,this.blurAction=t,this},t.prototype.withMouseLeaveAction=function(t){return this.mouseleaveAction=t,this},t.prototype.withBlurAction=function(t){return this.blurAction=t,this},t.prototype.build=function(){return this.element||(this.element=s.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureTitle(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},t.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var t=this,e="coveo-accessible-button-pressed",i="coveo-accessible-button-focused";s.$$(this.element).addClass("coveo-accessible-button"),s.$$(this.element).on("mousedown",function(){s.$$(t.element).addClass(e),s.$$(t.element).removeClass(i)}),s.$$(this.element).on("mouseup",function(){return s.$$(t.element).removeClass(e)}),s.$$(this.element).on("focus",function(){s.$$(t.element).hasClass(e)||s.$$(t.element).addClass(i)}),s.$$(this.element).on("blur",function(){return s.$$(t.element).removeClass(i)})},t.prototype.ensureCorrectRole=function(){this.element.getAttribute("role")||this.element.setAttribute("role","button")},t.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label)},t.prototype.ensureTitle=function(){this.title&&this.element.setAttribute("title",this.title)},t.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},t.prototype.ensureSelectAction=function(){var t=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",o.KeyboardUtils.keypressAction(o.KEYBOARD.ENTER,function(e){return t.enterKeyboardAction(e)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},t.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},t.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},t.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},t.prototype.bindEvent=function(t,e){this.eventOwner?this.eventOwner.on(this.element,t,e):s.$$(this.element).on(t,e)},t}();e.AccessibleButton=r},210:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i(8),s=i(53),r=i(2),l=i(4),u=i(1),h=i(3);i(469);var p=i(83),c=i(82),a=i(0),d=i(26),f=i(6),m=function(t){function e(i,n,s,r){var l=t.call(this,i,e.ID,s)||this;return l.element=i,l.options=n,l.bindings=s,l.result=r,l.links=[],l.options=o.ComponentOptions.initComponentOptions(i,e,n),l.options=a.extend({},l.options,l.componentOptionsModel.get(d.ComponentOptionsModel.attributesEnum.resultLink)),l.renderUri(l.element,l.result),l}return n(e,t),e.prototype.openLink=function(t){void 0===t&&(t=!0),a.last(this.links).openLink(t)},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),a.last(this.links).openLinkInNewWindow(t)},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),a.last(this.links).openLinkAsConfigured(t)},e.prototype.renderUri=function(t,e){var i=l.Utils.getFieldValue(e,"parents");if(i)this.renderParentsXml(t,i);else if(this.options.titleTemplate){var n=new p.ResultLink(this.buildElementForResultLink(e.printableUri),this.options,this.bindings,this.result);this.links.push(n),this.element.appendChild(n.element)}else this.renderShortenedUri()},e.prototype.buildSeparator=function(){return u.$$("span",{className:"coveo-printable-uri-separator"}," > ").el},e.prototype.buildHtmlToken=function(t,e){var i=t.charAt(0).toUpperCase()+t.slice(1),n=a.extend({},this.result,{clickUri:e,title:i,titleHighlights:this.getModifiedHighlightsForModifiedResultTitle(i)}),o=new p.ResultLink(this.buildElementForResultLink(i),this.options,this.bindings,n);return this.links.push(o),o.element},e.prototype.renderParentsXml=function(t,e){for(var i=l.Utils.parseXml(e),n=i.getElementsByTagName("parent"),o=[],s=[],r=0;r<n.length;r++){if(r>0){var u=this.buildSeparator();s.push(u),t.appendChild(u)}var h=n.item(r),p=this.buildHtmlToken(h.getAttribute("name"),h.getAttribute("uri"));o.push(p),t.appendChild(p)}},e.prototype.renderShortenedUri=function(){var t;t=-1==this.result.printableUri.indexOf("\\")?s.StringAndHoles.shortenUri(this.result.printableUri,u.$$(this.element).width()):s.StringAndHoles.shortenPath(this.result.printableUri,u.$$(this.element).width());var e=s.HighlightUtils.highlightString(t.value,this.result.printableUriHighlights,t.holes,"coveo-highlight"),i=a.extend({},this.result,{title:e,titleHighlights:this.getModifiedHighlightsForModifiedResultTitle(e)}),n=new p.ResultLink(this.buildElementForResultLink(this.result.printableUri),this.options,this.bindings,i);this.links.push(n),this.element.appendChild(n.element)},e.prototype.buildElementForResultLink=function(t){return u.$$("a",{className:"CoveoResultLink coveo-printable-uri-part",title:t}).el},e.prototype.getModifiedHighlightsForModifiedResultTitle=function(t){return c.getRestHighlightsForAllTerms(t,this.result.termsToHighlight,this.result.phrasesToHighlight,new c.DefaultStreamHighlightOptions)},e.ID="PrintableUri",e.options={},e.doExport=function(){h.exportGlobally({PrintableUri:e})},e}(f.Component);e.PrintableUri=m,m.options=a.extend({},m.options,p.ResultLink.options),r.Initialization.registerAutoCreateComponent(m)},376:function(t,e){},377:function(t,e){},469:function(t,e){},83:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i(6),s=i(8),r=i(26),l=i(9),u=i(29),h=i(53),p=i(24),c=i(131),a=i(2),d=i(20),f=i(5),m=i(4),b=i(28),g=i(1),v=i(82),O=i(0),A=i(3);i(377);var k=i(17),y=function(t){function e(i,n,o,u,h){var c=t.call(this,i,e.ID,o)||this;if(c.element=i,c.options=n,c.bindings=o,c.result=u,c.os=h,c.logOpenDocument=O.debounce(function(){c.queryController.saveLastQuery();var t=g.$$(c.element).getAttribute("href");void 0!=t&&""!=t||(t=c.result.clickUri),c.usageAnalytics.logClickEvent(l.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:c.result.title,author:m.Utils.getFieldValue(c.result,"author")},c.result,c.root),b.Defer.flush()},1500,!0),c.options=s.ComponentOptions.initComponentOptions(i,e,n),c.options=O.extend({},c.options,c.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink)),c.result=u||c.resolveResult(),null==c.options.openQuickview&&(c.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&p.DeviceUtils.isMobileDevice()),c.element.setAttribute("tabindex","0"),c.addHeadingRoleIfFirstResultLink(),f.Assert.exists(c.componentOptionsModel),f.Assert.exists(c.result),!c.quickviewShouldBeOpened()){var a=O.once(function(){return c.logOpenDocument()});g.$$(i).on(["contextmenu","click","mousedown","mouseup"],a);var d;g.$$(i).on("touchstart",function(){d=window.setTimeout(a,1e3)}),g.$$(i).on("touchend",function(){d&&clearTimeout(d)})}return c.renderUri(i,u),c.bindEventToOpen(),c}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML))if(this.options.titleTemplate){var i=this.parseStringTemplate(this.options.titleTemplate);this.element.innerHTML=i?v.StreamHighlightUtils.highlightStreamText(i,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}else this.element.innerHTML=this.result.title?h.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.addHeadingRoleIfFirstResultLink=function(){this.isFirstResultLink&&(this.element.setAttribute("role","heading"),this.element.setAttribute("aria-level","2"))},Object.defineProperty(e.prototype,"isFirstResultLink",{get:function(){var t=g.$$(this.element).closest("CoveoResult");if(!t)return!1;var i="."+o.Component.computeCssClassNameForType(e.ID);return g.$$(t).find(i)===this.element},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new k.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){g.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},g.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},g.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||m.Utils.isNonEmptyString(g.$$(this.element).getAttribute("href")))&&(g.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||g.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?this.parseStringTemplate(this.options.hrefTemplate):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?m.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=m.Utils.exists(this.os)?this.os:c.OSUtils.get();t==c.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==c.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=m.Utils.exists(this.os)?this.os:c.OSUtils.get();return t==c.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==c.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.prototype.parseStringTemplate=function(t){var e=this;return t?t.replace(/\$\{(.*?)\}/g,function(t){var i=t.substring(2,t.length-1),n=e.readFromObject(e.result,i);return n||(n=e.readFromObject(window,i)),n||e.logger.warn(i+" used in the ResultLink template is undefined for this result: "+e.result.title),n||t}):""},e.prototype.readFromObject=function(t,e){if(t&&-1!==e.indexOf(".")){var i=e.substring(e.indexOf(".")+1);return e=e.substring(0,e.indexOf(".")),this.readFromObject(t[e],i)}return t?t[e]:void 0},e.ID="ResultLink",e.doExport=function(){A.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=y,a.Initialization.registerAutoCreateComponent(y)}});