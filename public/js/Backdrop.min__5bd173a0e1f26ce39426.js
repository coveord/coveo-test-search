webpackJsonpCoveo__temporary([24,28,65],{14:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0),i=function(){function t(){}return t.addClassToSVGInContainer=function(e,o){var n=e.querySelector("svg");n.setAttribute("class",""+t.getClass(n)+o)},t.removeClassFromSVGInContainer=function(e,o){var n=e.querySelector("svg");n.setAttribute("class",t.getClass(n).replace(o,""))},t.addStyleToSVGInContainer=function(t,e){var o=t.querySelector("svg");n.each(e,function(t,e){o.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=i},180:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(26),s=o(3),r=o(1),l=o(82),u=o(14),a=o(12),c=o(4),p=o(7),d=o(8),h=o(2),f=o(29),m=o(90),b=o(491),v=function(t){function e(o,n,s,l,f){void 0===f&&(f=i.ModalBox);var v=t.call(this,o,e.ID,s)||this;v.element=o,v.options=n,v.bindings=s,v.result=l,v.options=d.ComponentOptions.initComponentOptions(o,e,n),v.resultLink=r.$$("a",{className:p.Component.computeCssClassName(m.ResultLink)});var y=r.$$("div",{className:"coveo-youtube-thumbnail-container"});v.resultLink.append(y.el);var O=r.$$("img",{src:c.Utils.getFieldValue(v.result,"ytthumbnailurl"),className:"coveo-youtube-thumbnail-img",alt:v.result.title,title:v.result.title});O.el.style.width=v.options.width,O.el.style.height=v.options.height,O.el.onerror=function(){var t=r.$$("div",{},a.SVGIcons.icons.video).el;u.SVGDom.addStyleToSVGInContainer(t,{width:v.options.width}),r.$$(O).remove(),y.append(t)},y.append(O.el);var g=r.$$("span",{className:"coveo-youtube-thumbnail-play-button"});return y.append(g.el),r.$$(v.element).append(v.resultLink.el),h.Initialization.automaticallyCreateComponentsInsideResult(o,l,{ResultLink:v.options.embed?{onClick:function(){return v.openYoutubeIframe()}}:null}),v.modalbox=new b.AccessibleModal("coveo-youtube-player",o.ownerDocument.body,f,{overlayClose:!0}),v}return n(e,t),e.prototype.openResultLink=function(){f.get(this.resultLink.el).openLinkAsConfigured()},e.prototype.openYoutubeIframe=function(){var t=this,e=r.$$("iframe",{src:"https://www.youtube.com/embed/"+this.extractVideoId()+"?autoplay=1",allowfullscreen:"allowfullscreen",width:"100%",height:"100%",title:this.result.title}),o=r.$$("div");o.append(e.el),this.modalbox.open(l.DomUtils.getQuickviewHeader(this.result,{showDate:!0,title:this.result.title},this.bindings).el,o.el,function(){return!0}),r.$$(r.$$(this.modalbox.wrapper).find(".coveo-quickview-close-button")).on("click",function(){t.modalbox.close()})},e.prototype.extractVideoId=function(){return this.result.clickUri.split("watch?v=")[1]},e.ID="YouTubeThumbnail",e.doExport=function(){s.exportGlobally({YouTubeThumbnail:e})},e.options={width:d.ComponentOptions.buildStringOption({defaultValue:"200px"}),height:d.ComponentOptions.buildStringOption({defaultValue:"112px"}),embed:d.ComponentOptions.buildBooleanOption({defaultValue:!0})},e}(p.Component);e.YouTubeThumbnail=v,h.Initialization.registerAutoCreateComponent(v)},230:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),o(571);var i=o(26),s=o(3),r=o(1),l=o(4),u=o(7),a=o(8),c=o(2),p=o(180),d=function(t){function e(o,n,s,r,u,p){void 0===p&&(p=i.ModalBox);var d=t.call(this,o,e.ID,s)||this;d.element=o,d.options=n,d.result=r,d._window=u,d.ModalBox=p,d.options=a.ComponentOptions.initComponentOptions(o,e,n),d._window=d._window||window;var h="";return d.options.overlayColor&&(h+="linear-gradient("+d.options.overlayColor+", "+(d.options.overlayGradient?"rgba(0,0,0,0)":d.options.overlayColor)+"), "),h+="url('"+(d.options.imageUrl||l.Utils.getFieldValue(r,d.options.imageField))+"') center center",d.element.style.background=h,d.element.style.backgroundSize="cover",c.Initialization.automaticallyCreateComponentsInsideResult(o,r),d.configureSpecialBackdropActions(),d}return n(e,t),e.prototype.configureSpecialBackdropActions=function(){if(l.Utils.getFieldValue(this.result,"ytthumbnailurl")){var t=new p.YouTubeThumbnail(r.$$("div").el,{embed:!0},this.getBindings(),this.result,this.ModalBox);r.$$(this.element).on("click",function(e){r.$$(e.target).hasClass("CoveoResultLink")||t.openResultLink()})}},e.ID="Backdrop",e.doExport=function(){s.exportGlobally({Backdrop:e})},e.options={imageUrl:a.ComponentOptions.buildStringOption(),imageField:a.ComponentOptions.buildFieldOption(),overlayColor:a.ComponentOptions.buildColorOption(),overlayGradient:a.ComponentOptions.buildBooleanOption({defaultValue:!1,depend:"overlayColor"})},e}(u.Component);e.Backdrop=d,c.Initialization.registerAutoCreateComponent(d)},491:function(t,e,o){"use strict";var n=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};Object.defineProperty(e,"__esModule",{value:!0});var i=o(26),s=o(543),r=o(6),l=o(1),u=o(25),a=function(){function t(t,e,o,s){void 0===o&&(o=i.ModalBox),void 0===s&&(s={}),this.className=t,this.ownerBody=e,this.modalboxModule=o,this.options=n({sizeMod:"big"},s)}return Object.defineProperty(t.prototype,"isOpen",{get:function(){return!!this.focusTrap},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this.activeModal&&this.activeModal.modalBox},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"content",{get:function(){return this.activeModal&&this.activeModal.content},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wrapper",{get:function(){return this.activeModal&&this.activeModal.wrapper},enumerable:!0,configurable:!0}),t.prototype.open=function(t,e,o){var n=this;this.isOpen||(this.activeModal=this.modalboxModule.open(e,{title:t,className:this.className,validation:function(){return n.onModalClose(),o()},body:this.ownerBody,sizeMod:this.options.sizeMod,overlayClose:this.options.overlayClose}),this.focusTrap=new s.FocusTrap(this.element),this.makeAccessible())},t.prototype.close=function(){this.isOpen&&(this.activeModal.close(),this.activeModal=null)},t.prototype.makeAccessible=function(){this.element.setAttribute("aria-modal","true"),this.makeCloseButtonAccessible()},t.prototype.makeCloseButtonAccessible=function(){var t=this.element.querySelector(".coveo-small-close");t.setAttribute("aria-label",r.l("Close")),t.tabIndex=0,t.focus(),l.$$(t).on("keyup",u.KeyboardUtils.keypressAction(u.KEYBOARD.ENTER,function(){return t.click()}))},t.prototype.onModalClose=function(){this.focusTrap.disable(),this.focusTrap=null},t}();e.AccessibleModal=a},509:function(t,e){},543:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(31),i=o(0),s=o(1),r=function(){function t(t){this.container=t,this.hiddenElements=[],this.enable()}return Object.defineProperty(t.prototype,"focusableElements",{get:function(){return i.sortBy(this.container.querySelectorAll("[tabindex]"),function(t){return t.tabIndex})},enumerable:!0,configurable:!0}),t.prototype.disable=function(){document.removeEventListener("focusin",this.focusInEvent),document.removeEventListener("focusout",this.focusOutEvent),this.showHiddenElements(),this.enabled=!1},t.prototype.enable=function(){var t=this;document.addEventListener("focusin",this.focusInEvent=function(e){return t.onFocusIn(e)}),document.addEventListener("focusout",this.focusOutEvent=function(e){return t.onFocusOut(e)}),this.hideAllExcept(this.container),this.enabled=!0},t.prototype.showHiddenElements=function(){for(;this.hiddenElements.length;)this.hiddenElements.pop().removeAttribute("aria-hidden")},t.prototype.hideElement=function(t){t.getAttribute("aria-hidden")||(this.hiddenElements.push(t),t.setAttribute("aria-hidden",""+!0))},t.prototype.hideSiblings=function(t){var e=this,o=t.parentElement;o&&i.without(s.$$(o).children(),t).forEach(function(t){e.hideElement(t)})},t.prototype.hideAllExcept=function(t){this.hideSiblings(t);var e=t.parentElement;e&&e!==document.body&&this.hideAllExcept(e)},t.prototype.getFocusableSibling=function(t,e){void 0===e&&(e=!1);var o=this.focusableElements,n=o.indexOf(t);return-1===n?null:o[(n+(e?-1:1)+o.length)%o.length]},t.prototype.focusSibling=function(t,e){void 0===e&&(e=!1);var o=this.getFocusableSibling(t,e);o&&o.focus()},t.prototype.focusFirstElement=function(){var t=this.focusableElements;t.length&&t[0].focus()},t.prototype.elementIsBefore=function(t,e){return!!e&&t.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_PRECEDING},t.prototype.onLosingFocus=function(t,e){var o=this;n.Defer.defer(function(){o.enabled&&(o.enabled=!1,t&&o.focusIsAllowed(t)?o.focusSibling(t,o.elementIsBefore(t,e)):o.focusFirstElement(),o.enabled=!0)})},t.prototype.focusIsAllowed=function(t){return this.container.contains(t)},t.prototype.elementIsInPage=function(t){return t&&t!==document.body.parentElement},t.prototype.onFocusIn=function(t){if(this.enabled){var e=t.relatedTarget;if(!this.elementIsInPage(e)){var o=t.target;this.elementIsInPage(o)&&(this.focusIsAllowed(o)||this.onLosingFocus(null,o))}}},t.prototype.onFocusOut=function(t){if(this.enabled){var e=t.relatedTarget;this.elementIsInPage(e)&&(e&&this.focusIsAllowed(e)||this.onLosingFocus(t.target,e))}},t}();e.FocusTrap=r},571:function(t,e){},90:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(7),s=o(8),r=o(27),l=o(10),u=o(28),a=o(67),c=o(22),p=o(176),d=o(2),h=o(21),f=o(5),m=o(4),b=o(31),v=o(1),y=o(112),O=o(19),g=o(0),k=o(3);o(509);var w=o(17),C=function(t){function e(o,n,i,u,a){var p=t.call(this,o,e.ID,i)||this;if(p.element=o,p.options=n,p.bindings=i,p.result=u,p.os=a,p.logOpenDocument=g.debounce(function(){p.queryController.saveLastQuery();var t=v.$$(p.element).getAttribute("href");void 0!=t&&""!=t||(t=p.result.clickUri),p.usageAnalytics.logClickEvent(l.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:p.result.title,author:m.Utils.getFieldValue(p.result,"author")},p.result,p.root),b.Defer.flush()},1500,!0),p.options=s.ComponentOptions.initComponentOptions(o,e,n),p.options=g.extend({},p.options,p.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink)),p.result=u||p.resolveResult(),null==p.options.openQuickview&&(p.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&c.DeviceUtils.isMobileDevice()),p.element.setAttribute("tabindex","0"),f.Assert.exists(p.componentOptionsModel),f.Assert.exists(p.result),!p.quickviewShouldBeOpened()){var d=g.once(function(){return p.logOpenDocument()});v.$$(o).on(["contextmenu","click","mousedown","mouseup"],d);var h;v.$$(o).on("touchstart",function(){h=window.setTimeout(d,1e3)}),v.$$(o).on("touchend",function(){h&&clearTimeout(h)})}return p.renderUri(o,u),p.bindEventToOpen(),p}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML))if(this.options.titleTemplate){var o=O.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);this.element.innerHTML=o?y.StreamHighlightUtils.highlightStreamText(o,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}else this.element.innerHTML=this.result.title?a.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new w.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){v.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},v.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},v.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||m.Utils.isNonEmptyString(v.$$(this.element).getAttribute("href")))&&(v.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||v.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?O.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?m.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=m.Utils.exists(this.os)?this.os:p.OSUtils.get();t==p.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==p.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=m.Utils.exists(this.os)?this.os:p.OSUtils.get();return t==p.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==p.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&h.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){k.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(i.Component);e.ResultLink=C,d.Initialization.registerAutoCreateComponent(C)}});