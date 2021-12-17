webpackJsonpCoveo__temporary([19],{221:function(t,e,n){"use strict";var i=this&&this.__assign||Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};Object.defineProperty(e,"__esModule",{value:!0});var o=n(26),r=n(471),s=n(6),a=n(1),u=n(25),l=n(20),c=function(){function t(t,e,n,r){void 0===n&&(n=o.ModalBox),void 0===r&&(r={}),this.className=t,this.ownerElement=e,this.modalboxModule=n,this.options=i({sizeMod:"big"},r)}return Object.defineProperty(t.prototype,"isOpen",{get:function(){return!!this.focusTrap},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this.activeModal&&this.activeModal.modalBox},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"content",{get:function(){return this.activeModal&&this.activeModal.content},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wrapper",{get:function(){return this.activeModal&&this.activeModal.wrapper},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"headerElement",{get:function(){return this.element&&this.element.querySelector(".coveo-modal-header h1")},enumerable:!0,configurable:!0}),t.prototype.openResult=function(t){this.isOpen||(this.openModalAndTrap({content:t.content,validation:t.validation,origin:t.origin,title:l.DomUtils.getQuickviewHeader(t.result,t.options,t.bindings).el}),this.makeAccessible(t.options.title||t.result.title))},t.prototype.open=function(t){this.isOpen||(this.openModalAndTrap(t),this.makeAccessible())},t.prototype.openModalAndTrap=function(t){var e=this;this.initiallyFocusedElement=t.origin||document.activeElement,this.activeModal=this.modalboxModule.open(t.content,{title:t.title,className:this.className,validation:function(){return e.onModalClose(),t.validation()},body:this.ownerElement,sizeMod:this.options.sizeMod,overlayClose:this.options.overlayClose}),this.focusTrap=new r.FocusTrap(this.element)},t.prototype.close=function(){this.isOpen&&(this.activeModal.close(),this.activeModal=null)},t.prototype.makeAccessible=function(t){this.element.setAttribute("aria-modal","true"),t&&this.headerElement.setAttribute("aria-label",t),this.makeCloseButtonAccessible()},t.prototype.makeCloseButtonAccessible=function(){var t=this.element.querySelector(".coveo-small-close");t.setAttribute("aria-label",s.l("Close")),t.setAttribute("role","button"),t.tabIndex=0,t.focus(),a.$$(t).on("keyup",u.KeyboardUtils.keypressAction(u.KEYBOARD.ENTER,function(){return t.click()}))},t.prototype.onModalClose=function(){this.focusTrap.disable(),this.focusTrap=null,this.initiallyFocusedElement&&document.body.contains(this.initiallyFocusedElement)&&this.initiallyFocusedElement.focus()},t}();e.AccessibleModal=c},226:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.quickviewLoaded="quickviewLoaded",t.openQuickview="openQuickview",t}();e.QuickviewEvents=i},232:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}u((i=i.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){u.label=n[1];break}if(6===n[0]&&u.label<s[1]){u.label=s[1],s=n;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(n);break}s[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],r=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,s,a,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(e,"__esModule",{value:!0});var a=n(226),u=n(5),l=n(1),c=n(4),d=n(7),p=n(8),h=n(2),f=n(643),m=n(644),v=n(645),g=n(0),y=n(648),w=n(649);e.HIGHLIGHT_PREFIX="CoveoHighlight";var b=function(t){function e(n,i,o,r){var s=t.call(this,n,e.ID,o)||this;return s.element=n,s.options=i,s.result=r,s.options=p.ComponentOptions.initComponentOptions(n,e,i),s.result=r||s.resolveResult(),u.Assert.exists(s.result),s}return i(e,t),e.prototype.createDom=function(){var t=l.$$("div",{className:"coveo-quickview-document"});this.element.appendChild(t.el),this.header=new m.QuickviewDocumentHeader,this.iframe=new f.QuickviewDocumentIframe,t.append(this.header.el),t.append(this.iframe.el)},e.prototype.open=function(){return r(this,void 0,void 0,function(){var t,e,n,i,o,r,a,u,a,l=this;return s(this,function(s){switch(s.label){case 0:this.ensureDom(),t=(new Date).getTime(),e=this.initialTermsToHighlight,this.triggerOpenQuickViewEvent({termsToHighlight:e}),n=this.wereTermsToHighlightModified(e),n&&this.handleTermsToHighlight(e,this.query),s.label=1;case 1:return s.trys.push([1,4,,6]),[4,this.queryController.getEndpoint().getDocumentHtml(this.result.uniqueId,{queryObject:this.query,requestedOutputSize:this.options.maximumDocumentSize})];case 2:return i=s.sent(),[4,this.iframe.render(i,this.result.title)];case 3:return s.sent(),o=new v.QuickviewDocumentWords(this.iframe,this.result),r=new w.QuickviewDocumentPreviewBar(this.iframe,o),g.each(o.words,function(t){var e=new y.QuickviewDocumentWordButton(t,r,l.iframe);l.header.addWord(e)}),a=(new Date).getTime(),this.triggerQuickviewLoaded(a-t),[3,6];case 4:return u=s.sent(),[4,this.iframe.renderError(u)];case 5:return s.sent(),a=(new Date).getTime(),this.triggerQuickviewLoaded(a-t),[3,6];case 6:return[2]}})})},Object.defineProperty(e.prototype,"initialTermsToHighlight",{get:function(){return g.keys(this.result.termsToHighlight)},enumerable:!0,configurable:!0}),e.prototype.triggerOpenQuickViewEvent=function(t){l.$$(this.root).trigger(a.QuickviewEvents.openQuickview,t)},Object.defineProperty(e.prototype,"query",{get:function(){return o({},this.queryController.getLastQuery())},enumerable:!0,configurable:!0}),e.prototype.triggerQuickviewLoaded=function(t){l.$$(this.element).trigger(a.QuickviewEvents.quickviewLoaded,{duration:t})},e.prototype.handleTermsToHighlight=function(t,e){var n=this;for(var i in this.result.termsToHighlight)delete this.result.termsToHighlight[i];var o="";g.each(t,function(t){o+=t+" ",n.result.termsToHighlight[t]=[t]}),o=o.substring(0,o.length-1),e.q=o},e.prototype.wereTermsToHighlightModified=function(t){return!c.Utils.arrayEqual(t,this.initialTermsToHighlight)},e.ID="QuickviewDocument",e.options={maximumDocumentSize:p.ComponentOptions.buildNumberOption({defaultValue:0,min:0})},e}(d.Component);e.QuickviewDocument=b,h.Initialization.registerAutoCreateComponent(b)},267:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}u((i=i.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){u.label=n[1];break}if(6===n[0]&&u.label<s[1]){u.label=s[1],s=n;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(n);break}s[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],r=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,s,a,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(e,"__esModule",{value:!0});var s=n(94);n(641);var a=n(226),u=n(29),l=n(26),c=n(3),d=n(13),p=n(6),h=n(17),f=n(1),m=n(93),v=n(22),g=n(15),y=n(12),w=n(4),b=n(10),k=n(7),I=n(8),E=n(49),C=n(2),T=n(61),O=n(642),$=n(232),P=n(221),_=function(t){function e(n,i,o,r,s){void 0===s&&(s=l.ModalBox);var a=t.call(this,n,e.ID,o)||this;return a.element=n,a.options=i,a.bindings=o,a.result=r,a.options=I.ComponentOptions.initComponentOptions(n,e,i),null==a.options.contentTemplate&&(a.options.contentTemplate=new O.DefaultQuickviewTemplate),/^\s*$/.test(a.element.innerHTML)&&a.buildContent(),a.bindClick(r),a.bindings.resultElement&&a.bind.on(a.bindings.resultElement,u.ResultListEvents.openQuickview,function(t){t&&t.stopPropagation(),a.open()}),a.modalbox=new P.AccessibleModal("coveo-quick-view",a.searchInterface.options.modalContainer,s),a}return i(e,t),e.prototype.buildContent=function(){var t=this.buildIcon(),e=this.buildCaption(),n=f.$$("div");n.append(t),n.append(e),f.$$(this.element).append(n.el),this.buildTooltipIfNotInCardLayout(t,e)},e.prototype.buildIcon=function(){var t=f.$$("div",{className:"coveo-icon-for-quickview"},y.SVGIcons.icons.quickview).el;return g.SVGDom.addClassToSVGInContainer(t,"coveo-icon-for-quickview-svg"),t},e.prototype.buildCaption=function(){return f.$$("div",{className:"coveo-caption-for-icon"},"Quickview".toLocaleString()).el},e.prototype.buildTooltipIfNotInCardLayout=function(t,e){if(!this.resultsAreInCardLayout){var n=f.$$("div").el;e.appendChild(n),this.buildPopper(t,e,n)}},Object.defineProperty(e.prototype,"resultsAreInCardLayout",{get:function(){return"card"===this.queryStateModel.get(d.QueryStateModel.attributesEnum.layout)},enumerable:!0,configurable:!0}),e.prototype.buildPopper=function(t,e,n){var i=new s.default(t,e,{placement:this.options.tooltipPlacement,modifiers:{preventOverflow:{boundariesElement:f.$$(this.root).el,padding:0},arrow:{element:n},offset:{offset:"0,8"}},eventsEnabled:!1});f.$$(this.element).on("mouseover",function(){i.update()})},e.prototype.open=function(){var t=this;if(!this.modalbox.isOpen){e.resultCurrentlyBeingRendered=this.result,document.activeElement&&document.activeElement instanceof HTMLElement&&f.$$(document.activeElement).trigger("blur");var n=this.prepareOpenQuickviewObject();return this.createModalBox(n).then(function(){t.bindQuickviewEvents(n),t.animateAndOpen(),t.logUsageAnalyticsEvent(),t.queryStateModel.set(d.QueryStateModel.attributesEnum.quickview,t.getHashId()),e.resultCurrentlyBeingRendered=null})}},e.prototype.close=function(){this.modalbox.isOpen&&this.modalbox.close()},e.prototype.getHashId=function(){return this.result.queryUid+"."+this.result.index+"."+v.StringUtils.hashCode(this.result.uniqueId)},e.prototype.logUsageAnalyticsEvent=function(){this.usageAnalytics.logClickEvent(b.analyticsActionCauseList.documentQuickview,{author:w.Utils.getFieldValue(this.result,"author"),documentURL:this.result.clickUri,documentTitle:this.result.title},this.result,this.element)},e.prototype.bindClick=function(t){var e=this;if(void 0===t.hasHtmlVersion||t.hasHtmlVersion||this.options.alwaysShow){var n=function(){return e.open()};(new h.AccessibleButton).withElement(this.element).withSelectAction(n).withLabel(p.l("Quickview")).withOwner(this.bind).build()}else this.element.style.display="none"},e.prototype.bindQuickviewEvents=function(t){var e=this;f.$$(this.modalbox.content).on(a.QuickviewEvents.quickviewLoaded,function(){return o(e,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return[4,t.loadingAnimation];case 1:return e=n.sent(),f.$$(e).remove(),[2]}})})})},e.prototype.animateAndOpen=function(){var t=f.$$(this.modalbox.element).find("."+k.Component.computeCssClassName($.QuickviewDocument));t&&C.Initialization.dispatchNamedMethodCallOrComponentCreation("open",t,null)},e.prototype.createModalBox=function(t){var e=this,n=f.$$("div");return n.addClass("coveo-computed-modal-box-content"),t.content.then(function(t){return n.append(t.el),e.modalbox.openResult({result:e.result,options:{showDate:e.options.showDate,title:e.options.title},bindings:e.bindings,content:n.el,validation:function(){return e.closeQuickview(),!0},origin:e.element}),n})},e.prototype.prepareOpenQuickviewObject=function(){var t=this.options.loadingAnimation;return{loadingAnimation:t,content:this.prepareQuickviewContent(t)}},e.prototype.prepareQuickviewContent=function(t){return o(this,void 0,void 0,function(){var e,n,i,o,s=this;return r(this,function(r){switch(r.label){case 0:return[4,this.instantiateTemplateToDom()];case 1:return e=r.sent(),n=this.searchInterface.options,i={options:n,bindings:this.getBindings(),result:this.result},[4,C.Initialization.automaticallyCreateComponentsInside(e.el,i).initResult];case 2:return r.sent(),o=function(){return void 0!=e.find("."+k.Component.computeCssClassName($.QuickviewDocument))&&s.options.enableLoadingAnimation},o()&&(t instanceof HTMLElement?e.prepend(t):t instanceof Promise&&t.then(function(t){e.prepend(t)})),[2,e]}})})},e.prototype.instantiateTemplateToDom=function(){return o(this,void 0,void 0,function(){var t,e;return r(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,3,6]),[4,this.options.contentTemplate.instantiateToElement(this.result)];case 1:return t=n.sent(),[3,6];case 2:return e=n.sent(),this.logger.warn(e),[3,6];case 3:return t?[3,5]:(this.logger.warn("An unexpected error happened while trying to render a custom template quickview, fallbacking on default quickview template...",this.options.contentTemplate),[4,(new O.DefaultQuickviewTemplate).instantiateToElement(this.result)]);case 4:t=n.sent(),n.label=5;case 5:return[7];case 6:return[2,f.$$(t)]}})})},e.prototype.closeQuickview=function(){this.queryStateModel.set(d.QueryStateModel.attributesEnum.quickview,"")},e.ID="Quickview",e.doExport=function(){c.exportGlobally({Quickview:e,QuickviewDocument:$.QuickviewDocument})},e.options={alwaysShow:I.ComponentOptions.buildBooleanOption({defaultValue:!1}),title:I.ComponentOptions.buildStringOption(),showDate:I.ComponentOptions.buildBooleanOption({defaultValue:!0}),enableLoadingAnimation:I.ComponentOptions.buildBooleanOption({defaultValue:!0}),contentTemplate:T.TemplateComponentOptions.buildTemplateOption({selectorAttr:"data-template-selector",idAttr:"data-template-id"}),loadingAnimation:I.ComponentOptions.buildOption(E.ComponentOptionsType.NONE,function(t){var e=t.getAttribute("data-loading-animation-selector");if(null!=e){var n=f.$$(document.documentElement).find(e);if(null!=n)return f.$$(n).detach(),n}var i=t.getAttribute("data-loading-animation-template-id");if(null!=i){var o=T.TemplateComponentOptions.loadResultTemplateFromId(i);if(o)return o.instantiateToElement(void 0,{checkCondition:!1})}return m.DomUtils.getBasicLoadingAnimation()}),tooltipPlacement:I.ComponentOptions.buildCustomOption(function(t){return t},{defaultValue:"bottom"})},e.resultCurrentlyBeingRendered=null,e}(k.Component);e.Quickview=_,C.Initialization.registerAutoCreateComponent(_)},471:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(31),o=n(0),r=n(1),s=function(){function t(t,e){void 0===e&&(e={focusableSelector:"[tabindex], button"}),this.container=t,this.options=e,this.hiddenElements=[],this.enable()}return Object.defineProperty(t.prototype,"focusableElements",{get:function(){return o.chain(r.Dom.nodeListToArray(this.container.querySelectorAll(this.options.focusableSelector))).filter(function(t){return r.$$(t).isVisible()}).sortBy(function(t){return t.tabIndex}).value()},enumerable:!0,configurable:!0}),t.prototype.disable=function(){document.removeEventListener("focusin",this.focusInEvent),document.removeEventListener("focusout",this.focusOutEvent),this.showHiddenElements(),this.enabled=!1},t.prototype.enable=function(){var t=this;document.addEventListener("focusin",this.focusInEvent=function(e){return t.onFocusIn(e)}),document.addEventListener("focusout",this.focusOutEvent=function(e){return t.onFocusOut(e)}),this.hideAllExcept(this.container),this.enabled=!0},t.prototype.showHiddenElements=function(){for(;this.hiddenElements.length;)this.hiddenElements.pop().removeAttribute("aria-hidden")},t.prototype.hideElement=function(t){t.getAttribute("aria-hidden")||(this.hiddenElements.push(t),t.setAttribute("aria-hidden",""+!0))},t.prototype.hideSiblings=function(t){var e=this,n=t.parentElement;n&&o.without(r.$$(n).children(),t).forEach(function(t){e.hideElement(t)})},t.prototype.hideAllExcept=function(t){this.hideSiblings(t);var e=t.parentElement;e&&e!==document.body&&this.hideAllExcept(e)},t.prototype.getFocusableSibling=function(t,e){void 0===e&&(e=!1);var n=this.focusableElements,i=n.indexOf(t);return-1===i?null:n[(i+(e?-1:1)+n.length)%n.length]},t.prototype.focusSibling=function(t,e){void 0===e&&(e=!1);var n=this.getFocusableSibling(t,e);n&&n.focus()},t.prototype.focusFirstElement=function(){var t=this.focusableElements;t.length&&t[0].focus()},t.prototype.elementIsBefore=function(t,e){return!!e&&t.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_PRECEDING},t.prototype.onLosingFocus=function(t,e){var n=this;i.Defer.defer(function(){n.enabled&&(n.enabled=!1,t&&n.focusIsAllowed(t)?n.focusSibling(t,n.elementIsBefore(t,e)):n.focusFirstElement(),n.enabled=!0)})},t.prototype.focusIsAllowed=function(t){return this.container.contains(t)},t.prototype.elementIsInPage=function(t){return t&&t!==document.body.parentElement},t.prototype.onFocusIn=function(t){if(this.enabled){var e=t.relatedTarget;if(!this.elementIsInPage(e)){var n=t.target;this.elementIsInPage(n)&&(this.focusIsAllowed(n)||this.onLosingFocus(null,n))}}},t.prototype.onFocusOut=function(t){if(this.enabled){var e=t.relatedTarget;this.elementIsInPage(e)&&(e&&this.focusIsAllowed(e)||this.onLosingFocus(t.target,e))}},t}();e.FocusTrap=s},641:function(t,e){},642:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(27),r=function(t){function e(){return t.call(this)||this}return i(e,t),e.prototype.instantiateToString=function(t){return'<div class="coveo-quick-view-full-height"><div class="CoveoQuickviewDocument"></div></div>'},e}(o.Template);e.DefaultQuickviewTemplate=r},643:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(20),r=n(1),s=function(){function t(){this.el=this.buildIFrame().el}return Object.defineProperty(t.prototype,"iframeHTMLElement",{get:function(){return this.iframeElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return this.iframeElement.contentWindow.document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"body",{get:function(){return this.document.body},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.iframeElement.contentWindow},enumerable:!0,configurable:!0}),t.prototype.isNewQuickviewDocument=function(){var t=r.$$(this.document.head).find("meta[name='generator']");return t&&"pdf2htmlEX"==t.getAttribute("content")},t.prototype.render=function(t,e){var n=this;return this.quickviewIsClosedByEndUser()?Promise.reject(null):new Promise(function(i,o){n.iframeElement.onload=function(){i(n.iframeElement)},n.addClientSideTweaksToIFrameStyling(t),n.writeToIFrame(t),n.iframeElement.title=e})},t.prototype.renderError=function(t){var e=this;return this.quickviewIsClosedByEndUser()?Promise.reject(null):new Promise(function(n,i){var s="";switch(t.status){case 400:s=o.l("NoQuickview");break;default:s=o.l("OoopsError")}var a=document.implementation.createHTMLDocument();a.body.style.fontFamily="Arimo, 'Helvetica Neue', Helvetica, Arial, sans-serif",r.$$(a.body).text(s),e.writeToIFrame(a),n(e.iframeElement)})},t.prototype.quickviewIsClosedByEndUser=function(){return null==this.iframeElement.contentDocument},t.prototype.buildIFrame=function(){var t=r.$$("iframe",{sandbox:"allow-popups allow-same-origin allow-top-navigation",src:"about:blank"});this.iframeElement=t.el;var e=r.$$("div",{className:"coveo-iframeWrapper"});return e.append(t.el),e},t.prototype.writeToIFrame=function(t){this.allowDocumentLinkToEscapeSandbox(t),this.document.open(),this.document.write(t.getElementsByTagName("html")[0].outerHTML),this.document.close()},t.prototype.allowDocumentLinkToEscapeSandbox=function(t){i.each(r.$$(t.body).findAll("a"),function(t){t.setAttribute("target","_top")})},t.prototype.addClientSideTweaksToIFrameStyling=function(t){var e=r.$$("style",{type:"text/css"}).el,n="\n      html pre {\n        white-space: pre-wrap;\n        word-wrap: break-word;\n      }\n      body, html {\n        font-family: Arimo, 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-text-size-adjust: none;\n      }\n      "+(o.DeviceUtils.isIos()?"\n      body, html {\n        height: 1px !important;\n        min-height: 100%;\n        width: 1px !important;\n        min-width: 100%;\n        overflow: scroll;\n        margin: auto\n      }\n      ":"")+"\n      ";o.DeviceUtils.isIos()&&(r.$$(this.iframeElement).setAttribute("scrolling","no"),this.iframeElement.parentElement.style.margin="0 0 5px 5px"),e.appendChild(document.createTextNode(n)),t.head.appendChild(e)},t}();e.QuickviewDocumentIframe=s},644:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=function(){function t(){this.el=this.buildHeader().el}return t.prototype.addWord=function(t){this.el.appendChild(t.el)},t.prototype.buildHeader=function(){return i.$$("div",{className:"coveo-quickview-header"})},t}();e.QuickviewDocumentHeader=o},645:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n(0),r=n(646),s=n(232),a=function(){function t(t,e){this.iframe=t,this.result=e,this.words={},this.scanDocument()}return t.prototype.scanDocument=function(){var t=this;o.each(i.$$(this.iframe.body).findAll('[id^="'+s.HIGHLIGHT_PREFIX+'"]'),function(e,n){var i=new r.QuickviewDocumentWord(t.result);if(i.doCompleteInitialScanForKeywordInDocument(e),i.text){var o=t.words[i.indexIdentifier];o?(o.addElement(e),o.occurrence==i.occurrence&&(o.text+=i.text)):t.words[i.indexIdentifier]=i}})},t}();e.QuickviewDocumentWords=a},646:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(20),r=n(9),s=n(1),a=n(232),u=n(647),l=function(){function t(t){this.result=t,this.count=0,this.elements=[],this.currentNavigationPosition=-1,this.logger=new r.Logger(this)}return t.prototype.addElement=function(t){this.count++,this.elements.push(t)},t.prototype.navigateForward=function(){return this.currentNavigationPosition++,this.currentNavigationPosition>=this.elements.length&&(this.currentNavigationPosition=0),this.highlightNavigation(),this.putElementIntoView(),this.elements[this.currentNavigationPosition]},t.prototype.navigateBackward=function(){return this.currentNavigationPosition--,this.currentNavigationPosition<0&&(this.currentNavigationPosition=this.elements.length-1),this.highlightNavigation(),this.putElementIntoView(),this.elements[this.currentNavigationPosition]},t.prototype.navigateTo=function(t){return this.currentNavigationPosition=t,(this.currentNavigationPosition<0||this.currentNavigationPosition>=this.elements.length)&&(this.currentNavigationPosition=0,this.logger.warn("Invalid position in quickview navigation: "+t)),this.highlightNavigation(),this.elements[this.currentNavigationPosition]},t.prototype.doCompleteInitialScanForKeywordInDocument=function(t){var e=this.parseKeywordIdentifier(t);e&&(this.indexIdentifier=e.keywordIdentifier,this.occurrence=e.keywordOccurrencesInDocument,this.indexTermPart=e.keywordTermPart,this.text=this.getText(t),this.color=new u.QuickviewDocumentWordColor(t.style.backgroundColor),this.addElement(t))},t.prototype.isTaggedWord=function(t){return"coveotaggedword"==t.nodeName.toLowerCase()},t.prototype.highlightNavigation=function(){var t=this,e=this.elements[this.currentNavigationPosition],n=i.without(this.elements,e);e.style.color=this.color.htmlColor,e.style.backgroundColor=this.color.invert(),n.forEach(function(e){e.style.color="",e.style.backgroundColor=t.color.htmlColor})},t.prototype.putElementIntoView=function(){this.elements[this.currentNavigationPosition].scrollIntoView()},t.prototype.getText=function(t){var e=this.getHighlightedInnerText(t);return this.resolveOriginalTerm(e)},t.prototype.resolveOriginalTerm=function(t){var e=this;return this.result&&this.result.termsToHighlight?i.find(i.keys(this.result.termsToHighlight),function(n){var r=o.StringUtils.equalsCaseInsensitive(n,t),s=void 0!=i.find(e.result.termsToHighlight[n],function(e){return o.StringUtils.equalsCaseInsensitive(e,t)});return r||s})||t:t},t.prototype.getHighlightedInnerText=function(t){if(!this.isTaggedWord(t))return s.$$(t).text()||"";var e=s.$$(t).children();return e.length>=1?s.$$(i.first(e)).text()||"":""},t.prototype.parseKeywordIdentifier=function(t){var e=t.id.substr(a.HIGHLIGHT_PREFIX.length+1).match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/);return!e||e.length<=3?null:{keywordIdentifier:e[1],keywordOccurrencesInDocument:parseInt(e[2],10),keywordTermPart:parseInt(e[3],10)}},t}();e.QuickviewDocumentWord=l},647:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(140),o=function(){function t(t){this.htmlColor=t;var e=t.match(/\d+/g);e&&(this.r=parseInt(e[0],10),this.g=parseInt(e[1],10),this.b=parseInt(e[2],10))}return t.prototype.invert=function(){return"rgb("+(255-this.r)+", "+(255-this.g)+", "+(255-this.b)+")"},t.prototype.saturate=function(){var t=i.ColorUtils.rgbToHsv(this.r,this.g,this.b);t[1]*=2,t[1]>1&&(t[1]=1);var e=i.ColorUtils.hsvToRgb(t[0],t[1],t[2]);return"rgb("+e[0]+", "+e[1]+", "+e[2]+")"},t}();e.QuickviewDocumentWordColor=o},648:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=function(){function t(t,e,n){this.word=t,this.previewBar=e,this.iframe=n,this.el=this.render()}return t.prototype.render=function(){var t=i.$$("span",{className:"coveo-term-for-quickview"});return t.append(this.buildName().el),t.append(this.renderArrow("up").el),t.append(this.renderArrow("down").el),t.el.style.backgroundColor=this.word.color.htmlColor,t.el.style.borderColor=this.word.color.saturate(),t.el},t.prototype.buildName=function(){var t=this,e=i.$$("span",{className:"coveo-term-for-quickview-name"},this.word.text+" ("+this.word.count+")");return e.on("click",function(){return t.navigate(!1)}),e},t.prototype.navigate=function(t){var e;if(t?(e=this.word.navigateBackward(),this.previewBar.navigateBackward(this.word)):(e=this.word.navigateForward(),this.previewBar.navigateForward(this.word)),this.iframe.isNewQuickviewDocument()){var n=i.$$(e).closest(".pc");i.$$(n).addClass("opened")}e.scrollIntoView()},t.prototype.renderArrow=function(t){var e=this,n=i.$$("span",{className:"coveo-term-for-quickview-"+t+"-arrow"}),o=i.$$("span",{className:"coveo-term-for-quickview-"+t+"-arrow-icon"});return n.append(o.el),n.on("click",function(){return e.navigate("up"==t)}),n},t}();e.QuickviewDocumentWordButton=o},649:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n(0),r=n(9),s=function(){function t(t,e){this.iframe=t,this.words=e,this.wordIndicators=new Map,this.logger=new r.Logger(this),this.renderPreviewBar()}return t.prototype.navigateForward=function(t){var e=this.wordIndicators.get(t);return e?(e.position++,e.position>=e.indicators.length&&(e.position=0),this.highlightNavigation(t),e.indicators[e.position]):(this.logger.warn("Invalid navigation for given word.",t),null)},t.prototype.navigateBackward=function(t){var e=this.wordIndicators.get(t);return e?(e.position--,e.position<0&&(e.position=e.indicators.length-1),this.highlightNavigation(t),e.indicators[e.position]):(this.logger.warn("Invalid navigation for the given word.",t),null)},t.prototype.navigateTo=function(t,e){var n=this.wordIndicators.get(e);return n?(n.position=t,(n.position<0||n.position>=n.indicators.length)&&(this.logger.warn("Invalid navigation for the given position: "+t),n.position=0),this.highlightNavigation(e),n.indicators[n.position]):(this.logger.warn("Invalid navigation for the given word",e),null)},t.prototype.highlightNavigation=function(t){var e=this,n=this.wordIndicators.get(t),i=n.indicators[n.position],r=o.without(n.indicators,i);i.style.backgroundColor=t.color.invert(),i.style.border="1px solid "+t.color.invert(),r.forEach(function(n){return e.defaultStyleColor(n,t)})},t.prototype.renderPreviewBar=function(){var t=this,e=i.$$("div");e.el.style.width="15px",e.el.style.position="fixed",e.el.style.top="0",e.el.style.right="0px",e.el.style.height="100%",this.iframe.body.appendChild(e.el),o.each(this.words.words,function(n){o.each(n.elements,function(i){var o=t.renderWordPositionIndicator(i,n).el;t.wordIndicators.has(n)?t.wordIndicators.get(n).indicators.push(o):t.wordIndicators.set(n,{indicators:[o],position:-1}),e.append(o)}),t.handleOverlappingIndicators(n)})},t.prototype.renderWordPositionIndicator=function(t,e){var n=new i.Doc(this.iframe.document).height(),o=t.getBoundingClientRect().top,r=i.$$("div");return r.el.style.position="absolute",r.el.style.top=o/n*100+"%",r.el.style.width="100%",r.el.style.height="1px",this.defaultStyleColor(r.el,e),r},t.prototype.defaultStyleColor=function(t,e){t.style.border="1px solid "+e.color.saturate(),t.style.backgroundColor=e.color.htmlColor},t.prototype.handleOverlappingIndicators=function(t){for(var e=this.wordIndicators.get(t).indicators,n=0;n<e.length;n++)!function(t){var n=o.chain(e).without(e[t]).find(function(n){return n.style.top==e[t].style.top}).value();n&&(i.$$(e[t]).remove(),e[t]=n)}(n)},t}();e.QuickviewDocumentPreviewBar=s}});
//# sourceMappingURL=Quickview.min__366f55ef8a0decc227de.js.map