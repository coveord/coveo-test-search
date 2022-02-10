webpackJsonpCoveo__temporary([26,63],{186:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(26),s=o(3),l=o(1),r=o(15),u=o(12),a=o(4),c=o(7),p=o(8),h=o(2),d=o(30),f=o(70),m=o(221),b=function(t){function e(o,n,s,d,b,y){void 0===b&&(b=i.ModalBox);var v=t.call(this,o,e.ID,s)||this;v.element=o,v.options=n,v.bindings=s,v.result=d,v.origin=y,v.options=p.ComponentOptions.initComponentOptions(o,e,n),v.resultLink=l.$$("a",{className:c.Component.computeCssClassName(f.ResultLink)}),y||(v.origin=v.resultLink.el);var g=l.$$("div",{className:"coveo-youtube-thumbnail-container"});v.resultLink.append(g.el);var O=l.$$("img",{src:a.Utils.getFieldValue(v.result,"ytthumbnailurl"),className:"coveo-youtube-thumbnail-img",alt:v.result.title,title:v.result.title});O.el.style.width=v.options.width,O.el.style.height=v.options.height,O.el.onerror=function(){var t=l.$$("div",{},u.SVGIcons.icons.video).el;r.SVGDom.addStyleToSVGInContainer(t,{width:v.options.width}),l.$$(O).remove(),g.append(t)},g.append(O.el);var k=l.$$("span",{className:"coveo-youtube-thumbnail-play-button"});return g.append(k.el),l.$$(v.element).append(v.resultLink.el),h.Initialization.automaticallyCreateComponentsInsideResult(o,d,{ResultLink:v.options.embed?{onClick:function(){return v.openYoutubeIframe()}}:null}),v.modalbox=new m.AccessibleModal("coveo-youtube-player",v.searchInterface.options.modalContainer,b,{overlayClose:!0}),v}return n(e,t),e.prototype.openResultLink=function(){d.get(this.resultLink.el).openLinkAsConfigured()},e.prototype.openYoutubeIframe=function(){var t=this,e=l.$$("iframe",{src:"https://www.youtube.com/embed/"+this.extractVideoId()+"?autoplay=1",allowfullscreen:"allowfullscreen",width:"100%",height:"100%",title:this.result.title}),o=l.$$("div");o.append(e.el),this.modalbox.openResult({result:this.result,options:{showDate:!0,title:this.result.title},bindings:this.bindings,content:o.el,validation:function(){return!0},origin:this.origin}),l.$$(l.$$(this.modalbox.wrapper).find(".coveo-quickview-close-button")).on("click",function(){t.modalbox.close()})},e.prototype.extractVideoId=function(){return this.result.clickUri.split("watch?v=")[1]},e.ID="YouTubeThumbnail",e.doExport=function(){s.exportGlobally({YouTubeThumbnail:e})},e.options={width:p.ComponentOptions.buildStringOption({defaultValue:"200px"}),height:p.ComponentOptions.buildStringOption({defaultValue:"112px"}),embed:p.ComponentOptions.buildBooleanOption({defaultValue:!0})},e}(c.Component);e.YouTubeThumbnail=b,h.Initialization.registerAutoCreateComponent(b)},221:function(t,e,o){"use strict";var n=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};Object.defineProperty(e,"__esModule",{value:!0});var i=o(26),s=o(471),l=o(6),r=o(1),u=o(25),a=o(20),c=function(){function t(t,e,o,s){void 0===o&&(o=i.ModalBox),void 0===s&&(s={}),this.className=t,this.ownerElement=e,this.modalboxModule=o,this.options=n({sizeMod:"big"},s)}return Object.defineProperty(t.prototype,"isOpen",{get:function(){return!!this.focusTrap},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this.activeModal&&this.activeModal.modalBox},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"content",{get:function(){return this.activeModal&&this.activeModal.content},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wrapper",{get:function(){return this.activeModal&&this.activeModal.wrapper},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"headerElement",{get:function(){return this.element&&this.element.querySelector(".coveo-modal-header h1")},enumerable:!0,configurable:!0}),t.prototype.openResult=function(t){this.isOpen||(this.openModalAndTrap({content:t.content,validation:t.validation,origin:t.origin,title:a.DomUtils.getQuickviewHeader(t.result,t.options,t.bindings).el}),this.makeAccessible(t.options.title||t.result.title))},t.prototype.open=function(t){this.isOpen||(this.openModalAndTrap(t),this.makeAccessible())},t.prototype.openModalAndTrap=function(t){var e=this;this.initiallyFocusedElement=t.origin||document.activeElement,this.activeModal=this.modalboxModule.open(t.content,{title:t.title,className:this.className,validation:function(){return e.onModalClose(),t.validation()},body:this.ownerElement,sizeMod:this.options.sizeMod,overlayClose:this.options.overlayClose}),this.focusTrap=new s.FocusTrap(this.element)},t.prototype.close=function(){this.isOpen&&(this.activeModal.close(),this.activeModal=null)},t.prototype.makeAccessible=function(t){this.element.setAttribute("aria-modal","true"),t&&this.headerElement.setAttribute("aria-label",t),this.makeCloseButtonAccessible()},t.prototype.makeCloseButtonAccessible=function(){var t=this.element.querySelector(".coveo-small-close");t.setAttribute("aria-label",l.l("Close")),t.setAttribute("role","button"),t.tabIndex=0,t.focus(),r.$$(t).on("keyup",u.KeyboardUtils.keypressAction(u.KEYBOARD.ENTER,function(){return t.click()}))},t.prototype.onModalClose=function(){this.focusTrap.disable(),this.focusTrap=null,this.initiallyFocusedElement&&document.body.contains(this.initiallyFocusedElement)&&this.initiallyFocusedElement.focus()},t}();e.AccessibleModal=c},471:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(31),i=o(0),s=o(1),l=function(){function t(t,e){void 0===e&&(e={focusableSelector:"[tabindex], button"}),this.container=t,this.options=e,this.hiddenElements=[],this.enable()}return Object.defineProperty(t.prototype,"focusableElements",{get:function(){return i.chain(s.Dom.nodeListToArray(this.container.querySelectorAll(this.options.focusableSelector))).filter(function(t){return s.$$(t).isVisible()}).sortBy(function(t){return t.tabIndex}).value()},enumerable:!0,configurable:!0}),t.prototype.disable=function(){document.removeEventListener("focusin",this.focusInEvent),document.removeEventListener("focusout",this.focusOutEvent),this.showHiddenElements(),this.enabled=!1},t.prototype.enable=function(){var t=this;document.addEventListener("focusin",this.focusInEvent=function(e){return t.onFocusIn(e)}),document.addEventListener("focusout",this.focusOutEvent=function(e){return t.onFocusOut(e)}),this.hideAllExcept(this.container),this.enabled=!0},t.prototype.showHiddenElements=function(){for(;this.hiddenElements.length;)this.hiddenElements.pop().removeAttribute("aria-hidden")},t.prototype.hideElement=function(t){t.getAttribute("aria-hidden")||(this.hiddenElements.push(t),t.setAttribute("aria-hidden",""+!0))},t.prototype.hideSiblings=function(t){var e=this,o=t.parentElement;o&&i.without(s.$$(o).children(),t).forEach(function(t){e.hideElement(t)})},t.prototype.hideAllExcept=function(t){this.hideSiblings(t);var e=t.parentElement;e&&e!==document.body&&this.hideAllExcept(e)},t.prototype.getFocusableSibling=function(t,e){void 0===e&&(e=!1);var o=this.focusableElements,n=o.indexOf(t);return-1===n?null:o[(n+(e?-1:1)+o.length)%o.length]},t.prototype.focusSibling=function(t,e){void 0===e&&(e=!1);var o=this.getFocusableSibling(t,e);o&&o.focus()},t.prototype.focusFirstElement=function(){var t=this.focusableElements;t.length&&t[0].focus()},t.prototype.elementIsBefore=function(t,e){return!!e&&t.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_PRECEDING},t.prototype.onLosingFocus=function(t,e){var o=this;n.Defer.defer(function(){o.enabled&&(o.enabled=!1,t&&o.focusIsAllowed(t)?o.focusSibling(t,o.elementIsBefore(t,e)):o.focusFirstElement(),o.enabled=!0)})},t.prototype.focusIsAllowed=function(t){return this.container.contains(t)},t.prototype.elementIsInPage=function(t){return t&&t!==document.body.parentElement},t.prototype.onFocusIn=function(t){if(this.enabled){var e=t.relatedTarget;if(!this.elementIsInPage(e)){var o=t.target;this.elementIsInPage(o)&&(this.focusIsAllowed(o)||this.onLosingFocus(null,o))}}},t.prototype.onFocusOut=function(t){if(this.enabled){var e=t.relatedTarget;this.elementIsInPage(e)&&(e&&this.focusIsAllowed(e)||this.onLosingFocus(t.target,e))}},t}();e.FocusTrap=l},534:function(t,e){},70:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};Object.defineProperty(e,"__esModule",{value:!0});var s=o(7),l=o(8),r=o(28),u=o(10),a=o(29),c=o(68),p=o(24),h=o(178),d=o(2),f=o(21),m=o(5),b=o(4),y=o(31),v=o(1),g=o(116),O=o(22),k=o(0),w=o(3);o(534);var A=o(17),E=o(62),I=function(t){function e(o,n,s,u,a){var c=t.call(this,o,e.ID,s)||this;c.element=o,c.options=n,c.bindings=s,c.result=u,c.os=a,c.logAnalytics=k.debounce(function(){c.queryController.saveLastQuery();var t=v.$$(c.element).getAttribute("href");void 0!=t&&""!=t||(t=c.escapedClickUri),c.options.logAnalytics?c.options.logAnalytics(t):c.logDocumentOpen(t),y.Defer.flush()},1500,!0);var h=c.searchInterface.options.originalOptionsObject[e.ID]||{},d=l.ComponentOptions.initComponentOptions(o,e,i({},h,n)),f=c.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink);if(c.options=k.extend({},d,f),c.result=u||c.resolveResult(),null==c.options.openQuickview&&(c.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&p.DeviceUtils.isMobileDevice()),c.element.setAttribute("tabindex","0"),m.Assert.exists(c.componentOptionsModel),m.Assert.exists(c.result),!c.quickviewShouldBeOpened()){var b=k.once(function(){return c.logAnalytics()});v.$$(o).on(["contextmenu","click","mousedown","mouseup"],b);var g;v.$$(o).on("touchstart",function(){g=window.setTimeout(b,1e3)}),v.$$(o).on("touchend",function(){g&&clearTimeout(g)})}return c.renderUri(o,u),c.bindEventToOpen(),c}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML)){var o=this.getDisplayedTitle();this.element.innerHTML=o,this.element.setAttribute("aria-label",E.l("Result")),this.element.title||(this.element.title=this.getDisplayedTitleAsText())}},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logAnalytics(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logAnalytics(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logAnalytics(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logAnalytics(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.getDisplayedTitle=function(){if(this.options.titleTemplate){var t=O.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);return t?g.StreamHighlightUtils.highlightStreamText(t,this.result.termsToHighlight,this.result.phrasesToHighlight):this.escapedClickUri}return this.result.title?c.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.escapedClickUri},e.prototype.getDisplayedTitleAsText=function(){var t=v.$$("div");return t.setHtml(this.getDisplayedTitle()),t.text()},Object.defineProperty(e.prototype,"escapedClickUri",{get:function(){return k.escape(this.result.clickUri)},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new A.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){v.$$(t.bindings.resultElement).trigger(a.ResultListEvents.openQuickview)},v.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},v.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||b.Utils.isNonEmptyString(v.$$(this.element).getAttribute("href")))&&(v.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||v.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.logDocumentOpen=function(t){this.usageAnalytics.logClickEvent(u.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:this.result.title,author:b.Utils.getFieldValue(this.result,"author")},this.result,this.root)},e.prototype.filterProtocol=function(t){var e=/^(https?|ftp|file|mailto|tel):/i.test(t),o=/^(\/|\.\/|\.\.\/)/.test(t);return e||o?t:""},e.prototype.getResultUri=function(){if(this.options.hrefTemplate){var t=O.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result);return this.filterProtocol(t)}return void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?this.filterProtocol(b.Utils.getFieldValue(this.result,this.options.field)):this.filterProtocol(this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=b.Utils.exists(this.os)?this.os:h.OSUtils.get();t==h.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==h.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=b.Utils.exists(this.os)?this.os:h.OSUtils.get();return t==h.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==h.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.escapedClickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&f.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){w.exportGlobally({ResultLink:e})},e.options={field:l.ComponentOptions.buildFieldOption(),openInOutlook:l.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:l.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:l.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:l.ComponentOptions.buildStringOption(),titleTemplate:l.ComponentOptions.buildStringOption(),onClick:l.ComponentOptions.buildCustomOption(function(){return null}),logAnalytics:l.ComponentOptions.buildCustomOption(function(){return null})},e}(s.Component);e.ResultLink=I,d.Initialization.registerAutoCreateComponent(I)}});
//# sourceMappingURL=YouTubeThumbnail.min__5ebc66d1c8fc250de81a.js.map