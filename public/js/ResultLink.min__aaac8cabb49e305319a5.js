webpackJsonpCoveo__temporary([39],{17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=n(30),s=n(1);n(371);var r=function(){function t(){this.logger=new i.Logger(this)}return t.prototype.withOwner=function(t){return this.eventOwner=t,this},t.prototype.withElement=function(t){return t instanceof HTMLElement?this.element=s.$$(t):this.element=t,this},t.prototype.withLabel=function(t){return this.label=t,this},t.prototype.withTitle=function(t){return this.title=t,this},t.prototype.withSelectAction=function(t){return this.clickAction=t,this.enterKeyboardAction=t,this},t.prototype.withClickAction=function(t){return this.clickAction=t,this},t.prototype.withEnterKeyboardAction=function(t){return this.enterKeyboardAction=t,this},t.prototype.withFocusAndMouseEnterAction=function(t){return this.focusAction=t,this.mouseenterAction=t,this},t.prototype.withFocusAction=function(t){return this.focusAction=t,this},t.prototype.withMouseEnterAction=function(t){return this.mouseenterAction=t,this},t.prototype.withBlurAndMouseLeaveAction=function(t){return this.mouseleaveAction=t,this.blurAction=t,this},t.prototype.withMouseLeaveAction=function(t){return this.mouseleaveAction=t,this},t.prototype.withBlurAction=function(t){return this.blurAction=t,this},t.prototype.build=function(){return this.element||(this.element=s.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureTitle(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},t.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var t=this,e="coveo-accessible-button-pressed",n="coveo-accessible-button-focused";s.$$(this.element).addClass("coveo-accessible-button"),s.$$(this.element).on("mousedown",function(){s.$$(t.element).addClass(e),s.$$(t.element).removeClass(n)}),s.$$(this.element).on("mouseup",function(){return s.$$(t.element).removeClass(e)}),s.$$(this.element).on("focus",function(){s.$$(t.element).hasClass(e)||s.$$(t.element).addClass(n)}),s.$$(this.element).on("blur",function(){return s.$$(t.element).removeClass(n)})},t.prototype.ensureCorrectRole=function(){this.element.getAttribute("role")||this.element.setAttribute("role","button")},t.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label)},t.prototype.ensureTitle=function(){this.title&&this.element.setAttribute("title",this.title)},t.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},t.prototype.ensureSelectAction=function(){var t=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",o.KeyboardUtils.keypressAction(o.KEYBOARD.ENTER,function(e){return t.enterKeyboardAction(e)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},t.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},t.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},t.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},t.prototype.bindEvent=function(t,e){this.eventOwner?this.eventOwner.on(this.element,t,e):s.$$(this.element).on(t,e)},t}();e.AccessibleButton=r},371:function(t,e){},372:function(t,e){},83:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),s=n(8),r=n(25),u=n(9),l=n(29),c=n(52),h=n(26),p=n(130),a=n(2),d=n(20),f=n(5),m=n(4),b=n(28),O=n(1),A=n(82),v=n(0),y=n(3);n(372);var g=n(17),k=function(t){function e(n,i,o,l,c){var p=t.call(this,n,e.ID,o)||this;if(p.element=n,p.options=i,p.bindings=o,p.result=l,p.os=c,p.logOpenDocument=v.debounce(function(){p.queryController.saveLastQuery();var t=O.$$(p.element).getAttribute("href");void 0!=t&&""!=t||(t=p.result.clickUri),p.usageAnalytics.logClickEvent(u.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:p.result.title,author:m.Utils.getFieldValue(p.result,"author")},p.result,p.root),b.Defer.flush()},1500,!0),p.options=s.ComponentOptions.initComponentOptions(n,e,i),p.options=v.extend({},p.options,p.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink)),p.result=l||p.resolveResult(),null==p.options.openQuickview&&(p.options.openQuickview="ExchangeCrawler"==l.raw.connectortype&&h.DeviceUtils.isMobileDevice()),p.element.setAttribute("tabindex","0"),p.addHeadingRoleIfFirstResultLink(),f.Assert.exists(p.componentOptionsModel),f.Assert.exists(p.result),!p.quickviewShouldBeOpened()){var a=v.once(function(){return p.logOpenDocument()});O.$$(n).on(["contextmenu","click","mousedown","mouseup"],a);var d;O.$$(n).on("touchstart",function(){d=window.setTimeout(a,1e3)}),O.$$(n).on("touchend",function(){d&&clearTimeout(d)})}return p.renderUri(n,l),p.bindEventToOpen(),p}return i(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML))if(this.options.titleTemplate){var n=this.parseStringTemplate(this.options.titleTemplate);this.element.innerHTML=n?A.StreamHighlightUtils.highlightStreamText(n,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}else this.element.innerHTML=this.result.title?c.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.addHeadingRoleIfFirstResultLink=function(){this.isFirstResultLink&&(this.element.setAttribute("role","heading"),this.element.setAttribute("aria-level","2"))},Object.defineProperty(e.prototype,"isFirstResultLink",{get:function(){var t=O.$$(this.element).closest("CoveoResult");if(!t)return!1;var n="."+o.Component.computeCssClassNameForType(e.ID);return O.$$(t).find(n)===this.element},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new g.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){O.$$(t.bindings.resultElement).trigger(l.ResultListEvents.openQuickview)},O.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},O.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||m.Utils.isNonEmptyString(O.$$(this.element).getAttribute("href")))&&(O.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||O.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?this.parseStringTemplate(this.options.hrefTemplate):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?m.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=m.Utils.exists(this.os)?this.os:p.OSUtils.get();t==p.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==p.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=m.Utils.exists(this.os)?this.os:p.OSUtils.get();return t==p.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==p.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.prototype.parseStringTemplate=function(t){var e=this;return t?t.replace(/\$\{(.*?)\}/g,function(t){var n=t.substring(2,t.length-1),i=e.readFromObject(e.result,n);return i||(i=e.readFromObject(window,n)),i||e.logger.warn(n+" used in the ResultLink template is undefined for this result: "+e.result.title),i||t}):""},e.prototype.readFromObject=function(t,e){if(t&&-1!==e.indexOf(".")){var n=e.substring(e.indexOf(".")+1);return e=e.substring(0,e.indexOf(".")),this.readFromObject(t[e],n)}return t?t[e]:void 0},e.ID="ResultLink",e.doExport=function(){y.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=k,a.Initialization.registerAutoCreateComponent(k)}});