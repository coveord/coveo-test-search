webpackJsonpCoveo__temporary([26,41],{138:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),s=n(3),r=n(1),u=n(65),l=n(14),c=n(13),p=n(4),a=n(6),h=n(8),d=n(2),f=n(22),m=n(82),b=function(t){function e(n,i,s,u,f){void 0===f&&(f=o.ModalBox);var b=t.call(this,n,e.ID,s)||this;b.element=n,b.options=i,b.bindings=s,b.result=u,b.ModalBox=f,b.options=h.ComponentOptions.initComponentOptions(n,e,i),b.resultLink=r.$$("a",{className:a.Component.computeCssClassName(m.ResultLink)});var v=r.$$("div",{className:"coveo-youtube-thumbnail-container"});b.resultLink.append(v.el);var y=r.$$("img",{src:p.Utils.getFieldValue(b.result,"ytthumbnailurl"),className:"coveo-youtube-thumbnail-img",alt:b.result.title,title:b.result.title});y.el.style.width=b.options.width,y.el.style.height=b.options.height,y.el.onerror=function(){var t=r.$$("div",{},c.SVGIcons.icons.video).el;l.SVGDom.addStyleToSVGInContainer(t,{width:b.options.width}),r.$$(y).remove(),v.append(t)},v.append(y.el);var O=r.$$("span",{className:"coveo-youtube-thumbnail-play-button"});return v.append(O.el),r.$$(b.element).append(b.resultLink.el),d.Initialization.automaticallyCreateComponentsInsideResult(n,u,{ResultLink:b.options.embed?{onClick:function(){return b.openYoutubeIframe()}}:null}),b}return i(e,t),e.prototype.openResultLink=function(){f.get(this.resultLink.el).openLinkAsConfigured()},e.prototype.openYoutubeIframe=function(){var t=this,e=r.$$("iframe",{src:"https://www.youtube.com/embed/"+this.extractVideoId()+"?autoplay=1",allowfullscreen:"allowfullscreen",width:"100%",height:"100%"}),n=r.$$("div");n.append(e.el),this.modalbox=this.ModalBox.open(n.el,{overlayClose:!0,title:u.DomUtils.getQuickviewHeader(this.result,{showDate:!0,title:this.result.title},this.bindings).el,className:"coveo-youtube-player",validation:function(){return!0},body:this.element.ownerDocument.body,sizeMod:"big"}),r.$$(r.$$(this.modalbox.wrapper).find(".coveo-quickview-close-button")).on("click",function(){t.modalbox.close()})},e.prototype.extractVideoId=function(){return this.result.clickUri.split("watch?v=")[1]},e.ID="YouTubeThumbnail",e.doExport=function(){s.exportGlobally({YouTubeThumbnail:e})},e.options={width:h.ComponentOptions.buildStringOption({defaultValue:"200px"}),height:h.ComponentOptions.buildStringOption({defaultValue:"112px"}),embed:h.ComponentOptions.buildBooleanOption({defaultValue:!0})},e}(a.Component);e.YouTubeThumbnail=b,d.Initialization.registerAutoCreateComponent(b)},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=function(){function t(){}return t.addClassToSVGInContainer=function(e,n){var i=e.querySelector("svg");i.setAttribute("class",""+t.getClass(i)+n)},t.removeClassFromSVGInContainer=function(e,n){var i=e.querySelector("svg");i.setAttribute("class",t.getClass(i).replace(n,""))},t.addStyleToSVGInContainer=function(t,e){var n=t.querySelector("svg");i.each(e,function(t,e){n.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=o},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=n(30),s=n(1);n(371);var r=function(){function t(){this.logger=new i.Logger(this)}return t.prototype.withOwner=function(t){return this.eventOwner=t,this},t.prototype.withElement=function(t){return t instanceof HTMLElement?this.element=s.$$(t):this.element=t,this},t.prototype.withLabel=function(t){return this.label=t,this},t.prototype.withTitle=function(t){return this.title=t,this},t.prototype.withSelectAction=function(t){return this.clickAction=t,this.enterKeyboardAction=t,this},t.prototype.withClickAction=function(t){return this.clickAction=t,this},t.prototype.withEnterKeyboardAction=function(t){return this.enterKeyboardAction=t,this},t.prototype.withFocusAndMouseEnterAction=function(t){return this.focusAction=t,this.mouseenterAction=t,this},t.prototype.withFocusAction=function(t){return this.focusAction=t,this},t.prototype.withMouseEnterAction=function(t){return this.mouseenterAction=t,this},t.prototype.withBlurAndMouseLeaveAction=function(t){return this.mouseleaveAction=t,this.blurAction=t,this},t.prototype.withMouseLeaveAction=function(t){return this.mouseleaveAction=t,this},t.prototype.withBlurAction=function(t){return this.blurAction=t,this},t.prototype.build=function(){return this.element||(this.element=s.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureTitle(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},t.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var t=this,e="coveo-accessible-button-pressed",n="coveo-accessible-button-focused";s.$$(this.element).addClass("coveo-accessible-button"),s.$$(this.element).on("mousedown",function(){s.$$(t.element).addClass(e),s.$$(t.element).removeClass(n)}),s.$$(this.element).on("mouseup",function(){return s.$$(t.element).removeClass(e)}),s.$$(this.element).on("focus",function(){s.$$(t.element).hasClass(e)||s.$$(t.element).addClass(n)}),s.$$(this.element).on("blur",function(){return s.$$(t.element).removeClass(n)})},t.prototype.ensureCorrectRole=function(){this.element.getAttribute("role")||this.element.setAttribute("role","button")},t.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label)},t.prototype.ensureTitle=function(){this.title&&this.element.setAttribute("title",this.title)},t.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},t.prototype.ensureSelectAction=function(){var t=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",o.KeyboardUtils.keypressAction(o.KEYBOARD.ENTER,function(e){return t.enterKeyboardAction(e)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},t.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},t.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},t.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},t.prototype.bindEvent=function(t,e){this.eventOwner?this.eventOwner.on(this.element,t,e):s.$$(this.element).on(t,e)},t}();e.AccessibleButton=r},371:function(t,e){},372:function(t,e){},82:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),s=n(8),r=n(25),u=n(9),l=n(29),c=n(51),p=n(26),a=n(131),h=n(2),d=n(20),f=n(5),m=n(4),b=n(28),v=n(1),y=n(81),O=n(0),A=n(3);n(372);var g=n(17),w=function(t){function e(n,i,o,l,c){var a=t.call(this,n,e.ID,o)||this;if(a.element=n,a.options=i,a.bindings=o,a.result=l,a.os=c,a.logOpenDocument=O.debounce(function(){a.queryController.saveLastQuery();var t=v.$$(a.element).getAttribute("href");void 0!=t&&""!=t||(t=a.result.clickUri),a.usageAnalytics.logClickEvent(u.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:a.result.title,author:m.Utils.getFieldValue(a.result,"author")},a.result,a.root),b.Defer.flush()},1500,!0),a.options=s.ComponentOptions.initComponentOptions(n,e,i),a.options=O.extend({},a.options,a.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink)),a.result=l||a.resolveResult(),null==a.options.openQuickview&&(a.options.openQuickview="ExchangeCrawler"==l.raw.connectortype&&p.DeviceUtils.isMobileDevice()),a.element.setAttribute("tabindex","0"),a.addHeadingRoleIfFirstResultLink(),f.Assert.exists(a.componentOptionsModel),f.Assert.exists(a.result),!a.quickviewShouldBeOpened()){var h=O.once(function(){return a.logOpenDocument()});v.$$(n).on(["contextmenu","click","mousedown","mouseup"],h);var d;v.$$(n).on("touchstart",function(){d=window.setTimeout(h,1e3)}),v.$$(n).on("touchend",function(){d&&clearTimeout(d)})}return a.renderUri(n,l),a.bindEventToOpen(),a}return i(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML))if(this.options.titleTemplate){var n=this.parseStringTemplate(this.options.titleTemplate);this.element.innerHTML=n?y.StreamHighlightUtils.highlightStreamText(n,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}else this.element.innerHTML=this.result.title?c.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.addHeadingRoleIfFirstResultLink=function(){this.isFirstResultLink&&(this.element.setAttribute("role","heading"),this.element.setAttribute("aria-level","2"))},Object.defineProperty(e.prototype,"isFirstResultLink",{get:function(){var t=v.$$(this.element).closest("CoveoResult");if(!t)return!1;var n="."+o.Component.computeCssClassNameForType(e.ID);return v.$$(t).find(n)===this.element},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new g.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){v.$$(t.bindings.resultElement).trigger(l.ResultListEvents.openQuickview)},v.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},v.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||m.Utils.isNonEmptyString(v.$$(this.element).getAttribute("href")))&&(v.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||v.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?this.parseStringTemplate(this.options.hrefTemplate):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?m.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=m.Utils.exists(this.os)?this.os:a.OSUtils.get();t==a.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==a.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=m.Utils.exists(this.os)?this.os:a.OSUtils.get();return t==a.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==a.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.prototype.parseStringTemplate=function(t){var e=this;return t?t.replace(/\$\{(.*?)\}/g,function(t){var n=t.substring(2,t.length-1),i=e.readFromObject(e.result,n);return i||(i=e.readFromObject(window,n)),i||e.logger.warn(n+" used in the ResultLink template is undefined for this result: "+e.result.title),i||t}):""},e.prototype.readFromObject=function(t,e){if(t&&-1!==e.indexOf(".")){var n=e.substring(e.indexOf(".")+1);return e=e.substring(0,e.indexOf(".")),this.readFromObject(t[e],n)}return t?t[e]:void 0},e.ID="ResultLink",e.doExport=function(){A.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=w,h.Initialization.registerAutoCreateComponent(w)}});