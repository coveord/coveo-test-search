webpackJsonpCoveo__temporary([13],{14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=function(){function t(){}return t.addClassToSVGInContainer=function(e,n){var i=e.querySelector("svg");i.setAttribute("class",""+t.getClass(i)+n)},t.removeClassFromSVGInContainer=function(e,n){var i=e.querySelector("svg");i.setAttribute("class",t.getClass(i).replace(n,""))},t.addStyleToSVGInContainer=function(t,e){var n=t.querySelector("svg");i.each(e,function(t,e){n.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=o},164:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.quickviewLoaded="quickviewLoaded",t.openQuickview="openQuickview",t}();e.QuickviewEvents=i},170:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}u((i=i.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){u.label=n[1];break}if(6===n[0]&&u.label<s[1]){u.label=s[1],s=n;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(n);break}s[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],r=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,s,a,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),u=n(164),c=n(5),l=n(1),h=n(4),d=n(6),p=n(8),f=n(2),v=n(451),m=n(452),g=n(453),w=n(0),y=n(456),b=n(457);e.HIGHLIGHT_PREFIX="CoveoHighlight";var k=function(t){function e(n,i,o,r){var s=t.call(this,n,e.ID,o)||this;return s.element=n,s.options=i,s.result=r,s.options=p.ComponentOptions.initComponentOptions(n,e,i),s.result=r||s.resolveResult(),s.termsToHighlightWereModified=!1,c.Assert.exists(s.result),s}return i(e,t),e.prototype.createDom=function(){var t=l.$$("div",{className:"coveo-quickview-document"});this.element.appendChild(t.el),this.header=new m.QuickviewDocumentHeader,this.iframe=new v.QuickviewDocumentIframe,t.append(this.header.el),t.append(this.iframe.el)},e.prototype.open=function(){return r(this,void 0,void 0,function(){var t,e,n,i,o,r,c,r,h=this;return s(this,function(s){switch(s.label){case 0:this.ensureDom(),t=(new Date).getTime(),e=a.keys(this.result.termsToHighlight),l.$$(this.element).trigger(u.QuickviewEvents.openQuickview,{termsToHighlight:e}),this.checkIfTermsToHighlightWereModified(e),this.termsToHighlightWereModified&&this.handleTermsToHighlight(e,this.query),s.label=1;case 1:return s.trys.push([1,4,,6]),[4,this.queryController.getEndpoint().getDocumentHtml(this.result.uniqueId,{queryObject:this.query,requestedOutputSize:this.options.maximumDocumentSize})];case 2:return n=s.sent(),[4,this.iframe.render(n)];case 3:return s.sent(),i=new g.QuickviewDocumentWords(this.iframe,this.result),o=new b.QuickviewDocumentPreviewBar(this.iframe,i),w.each(i.words,function(t){var e=new y.QuickviewDocumentWordButton(t,o,h.iframe);h.header.addWord(e)}),r=(new Date).getTime(),this.triggerQuickviewLoaded(r-t),[3,6];case 4:return c=s.sent(),[4,this.iframe.renderError(c)];case 5:return s.sent(),r=(new Date).getTime(),this.triggerQuickviewLoaded(r-t),[3,6];case 6:return[2]}})})},Object.defineProperty(e.prototype,"query",{get:function(){return o({},this.queryController.getLastQuery())},enumerable:!0,configurable:!0}),e.prototype.triggerQuickviewLoaded=function(t){l.$$(this.element).trigger(u.QuickviewEvents.quickviewLoaded,{duration:t})},e.prototype.handleTermsToHighlight=function(t,e){var n=this;for(var i in this.result.termsToHighlight)delete this.result.termsToHighlight[i];var o="";a.each(t,function(t){o+=t+" ",n.result.termsToHighlight[t]=new Array(t)}),o=o.substring(0,o.length-1),e.q=o},e.prototype.checkIfTermsToHighlightWereModified=function(t){h.Utils.arrayEqual(t,a.keys(this.result.termsToHighlight))||(this.termsToHighlightWereModified=!0)},e.ID="QuickviewDocument",e.options={maximumDocumentSize:p.ComponentOptions.buildNumberOption({defaultValue:0,min:0})},e}(d.Component);e.QuickviewDocument=k,f.Initialization.registerAutoCreateComponent(k)},205:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}u((i=i.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){u.label=n[1];break}if(6===n[0]&&u.label<s[1]){u.label=s[1],s=n;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(n);break}s[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],r=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,s,a,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(e,"__esModule",{value:!0}),n(449);var s=n(164),a=n(33),u=n(23),c=n(3),l=n(12),h=n(7),d=n(21),p=n(1),f=n(65),v=n(18),m=n(14),g=n(13),w=n(4),y=n(9),b=n(6),k=n(8),C=n(2),A=n(53),$=n(450),I=n(170),T=function(t){function e(n,i,o,r,s){void 0===s&&(s=u.ModalBox);var c=t.call(this,n,e.ID,o)||this;if(c.element=n,c.options=i,c.bindings=o,c.result=r,c.ModalBox=s,c.options=k.ComponentOptions.initComponentOptions(n,e,i),null==c.options.contentTemplate&&(c.options.contentTemplate=new $.DefaultQuickviewTemplate),/^\s*$/.test(c.element.innerHTML)){var l=p.$$("div",{className:"coveo-icon-for-quickview"},g.SVGIcons.icons.quickview);m.SVGDom.addClassToSVGInContainer(l.el,"coveo-icon-for-quickview-svg");var h=p.$$("div",{className:"coveo-caption-for-icon",tabindex:0},"Quickview".toLocaleString()).el,d=p.$$("div");d.append(l.el),d.append(h),p.$$(c.element).append(d.el)}return c.bindClick(r),c.bindings.resultElement&&c.bind.on(c.bindings.resultElement,a.ResultListEvents.openQuickview,function(){return c.open()}),c}return i(e,t),e.prototype.open=function(){var t=this;if(null==this.modalbox){e.resultCurrentlyBeingRendered=this.result,document.activeElement&&document.activeElement instanceof HTMLElement&&p.$$(document.activeElement).trigger("blur");var n=this.prepareOpenQuickviewObject();return this.createModalBox(n).then(function(){t.bindQuickviewEvents(n),t.animateAndOpen(),t.logUsageAnalyticsEvent(),t.queryStateModel.set(l.QueryStateModel.attributesEnum.quickview,t.getHashId()),e.resultCurrentlyBeingRendered=null})}},e.prototype.close=function(){null!=this.modalbox&&(this.modalbox.close(),this.modalbox=null)},e.prototype.getHashId=function(){return this.result.queryUid+"."+this.result.index+"."+v.StringUtils.hashCode(this.result.uniqueId)},e.prototype.logUsageAnalyticsEvent=function(){this.usageAnalytics.logClickEvent(y.analyticsActionCauseList.documentQuickview,{author:w.Utils.getFieldValue(this.result,"author"),documentURL:this.result.clickUri,documentTitle:this.result.title},this.result,this.element)},e.prototype.bindClick=function(t){var e=this;if(void 0===t.hasHtmlVersion||t.hasHtmlVersion||this.options.alwaysShow){var n=function(){return e.open()};(new d.AccessibleButton).withElement(this.element).withSelectAction(n).withLabel(h.l("Quickview")).withOwner(this.bind).build()}else this.element.style.display="none"},e.prototype.bindQuickviewEvents=function(t){var e=this;p.$$(this.modalbox.content).on(s.QuickviewEvents.quickviewLoaded,function(){return o(e,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return[4,t.loadingAnimation];case 1:return e=n.sent(),p.$$(e).remove(),[2]}})})})},e.prototype.animateAndOpen=function(){var t=p.$$(this.modalbox.modalBox).find("."+b.Component.computeCssClassName(I.QuickviewDocument));t&&C.Initialization.dispatchNamedMethodCallOrComponentCreation("open",t,null)},e.prototype.createModalBox=function(t){var e=this,n=p.$$("div");return n.addClass("coveo-computed-modal-box-content"),t.content.then(function(t){n.append(t.el);var i=f.DomUtils.getQuickviewHeader(e.result,{showDate:e.options.showDate,title:e.options.title},e.bindings).el;return e.modalbox=e.ModalBox.open(n.el,{title:i,className:"coveo-quick-view",validation:function(){return e.closeQuickview(),!0},body:e.element.ownerDocument.body,sizeMod:"big"}),n})},e.prototype.prepareOpenQuickviewObject=function(){var t=this.options.loadingAnimation;return{loadingAnimation:t,content:this.prepareQuickviewContent(t)}},e.prototype.prepareQuickviewContent=function(t){return o(this,void 0,void 0,function(){var e,n,i,o,s=this;return r(this,function(r){switch(r.label){case 0:return[4,this.instantiateTemplateToDom()];case 1:return e=r.sent(),n=this.searchInterface.options,i={options:n,bindings:this.getBindings(),result:this.result},[4,C.Initialization.automaticallyCreateComponentsInside(e.el,i).initResult];case 2:return r.sent(),o=function(){return void 0!=e.find("."+b.Component.computeCssClassName(I.QuickviewDocument))&&s.options.enableLoadingAnimation},o()&&(t instanceof HTMLElement?e.prepend(t):t instanceof Promise&&t.then(function(t){e.prepend(t)})),[2,e]}})})},e.prototype.instantiateTemplateToDom=function(){return o(this,void 0,void 0,function(){var t,e;return r(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,3,6]),[4,this.options.contentTemplate.instantiateToElement(this.result)];case 1:return t=n.sent(),[3,6];case 2:return e=n.sent(),this.logger.warn(e),[3,6];case 3:return t?[3,5]:(this.logger.warn("An unexpected error happened while trying to render a custom template quickview, fallbacking on default quickview template...",this.options.contentTemplate),[4,(new $.DefaultQuickviewTemplate).instantiateToElement(this.result)]);case 4:t=n.sent(),n.label=5;case 5:return[7];case 6:return[2,p.$$(t)]}})})},e.prototype.closeQuickview=function(){this.queryStateModel.set(l.QueryStateModel.attributesEnum.quickview,"")},e.ID="Quickview",e.doExport=function(){c.exportGlobally({Quickview:e,QuickviewDocument:I.QuickviewDocument})},e.options={alwaysShow:k.ComponentOptions.buildBooleanOption({defaultValue:!1}),title:k.ComponentOptions.buildStringOption(),showDate:k.ComponentOptions.buildBooleanOption({defaultValue:!0}),enableLoadingAnimation:k.ComponentOptions.buildBooleanOption({defaultValue:!0}),contentTemplate:A.TemplateComponentOptions.buildTemplateOption({selectorAttr:"data-template-selector",idAttr:"data-template-id"}),loadingAnimation:k.ComponentOptions.buildOption(k.ComponentOptionsType.NONE,function(t){var e=t.getAttribute("data-loading-animation-selector");if(null!=e){var n=p.$$(document.documentElement).find(e);if(null!=n)return p.$$(n).detach(),n}var i=t.getAttribute("data-loading-animation-template-id");if(null!=i){var o=A.TemplateComponentOptions.loadResultTemplateFromId(i);if(o)return o.instantiateToElement(void 0,{checkCondition:!1})}return f.DomUtils.getBasicLoadingAnimation()})},e.resultCurrentlyBeingRendered=null,e}(b.Component);e.Quickview=T,C.Initialization.registerAutoCreateComponent(T)},21:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=n(26),r=n(1);n(364);var s=function(){function t(){this.logger=new i.Logger(this)}return t.prototype.withOwner=function(t){return this.eventOwner=t,this},t.prototype.withElement=function(t){return t instanceof HTMLElement?this.element=r.$$(t):this.element=t,this},t.prototype.withLabel=function(t){return this.label=t,this},t.prototype.withSelectAction=function(t){return this.clickAction=t,this.enterKeyboardAction=t,this},t.prototype.withClickAction=function(t){return this.clickAction=t,this},t.prototype.withEnterKeyboardAction=function(t){return this.enterKeyboardAction=t,this},t.prototype.withFocusAndMouseEnterAction=function(t){return this.focusAction=t,this.mouseenterAction=t,this},t.prototype.withFocusAction=function(t){return this.focusAction=t,this},t.prototype.withMouseEnterAction=function(t){return this.mouseenterAction=t,this},t.prototype.withBlurAndMouseLeaveAction=function(t){return this.mouseleaveAction=t,this.blurAction=t,this},t.prototype.withMouseLeaveAction=function(t){return this.mouseleaveAction=t,this},t.prototype.withBlurAction=function(t){return this.blurAction=t,this},t.prototype.build=function(){return this.element||(this.element=r.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},t.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var t=this,e="coveo-accessible-button-pressed",n="coveo-accessible-button-focused";r.$$(this.element).addClass("coveo-accessible-button"),r.$$(this.element).on("mousedown",function(){r.$$(t.element).addClass(e),r.$$(t.element).removeClass(n)}),r.$$(this.element).on("mouseup",function(){return r.$$(t.element).removeClass(e)}),r.$$(this.element).on("focus",function(){r.$$(t.element).hasClass(e)||r.$$(t.element).addClass(n)}),r.$$(this.element).on("blur",function(){return r.$$(t.element).removeClass(n)})},t.prototype.ensureCorrectRole=function(){this.element.setAttribute("role","button")},t.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label),this.element.setAttribute("title",this.label)},t.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},t.prototype.ensureSelectAction=function(){var t=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",o.KeyboardUtils.keypressAction(o.KEYBOARD.ENTER,function(e){return t.enterKeyboardAction(e)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},t.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},t.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},t.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},t.prototype.bindEvent=function(t,e){this.eventOwner?this.eventOwner.on(this.element,t,e):r.$$(this.element).on(t,e)},t}();e.AccessibleButton=s},364:function(t,e){},449:function(t,e){},450:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),r=function(t){function e(){return t.call(this)||this}return i(e,t),e.prototype.instantiateToString=function(t){return'<div class="coveo-quick-view-full-height"><div class="CoveoQuickviewDocument"></div></div>'},e}(o.Template);e.DefaultQuickviewTemplate=r},451:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n(0),r=n(49),s=function(){function t(){this.el=this.buildIFrame().el}return Object.defineProperty(t.prototype,"iframeHTMLElement",{get:function(){return this.iframeElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return this.iframeElement.contentWindow.document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"body",{get:function(){return this.document.body},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.iframeElement.contentWindow},enumerable:!0,configurable:!0}),t.prototype.isNewQuickviewDocument=function(){var t=i.$$(this.document.head).find("meta[name='generator']");return t&&"pdf2htmlEX"==t.getAttribute("content")},t.prototype.render=function(t){var e=this;return this.quickviewIsClosedByEndUser()?Promise.reject(null):new Promise(function(n,i){e.iframeElement.onload=function(){n(e.iframeElement)},e.addClientSideTweaksToIFrameStyling(t),e.writeToIFrame(t)})},t.prototype.renderError=function(t){var e=this;return this.quickviewIsClosedByEndUser()?Promise.reject(null):new Promise(function(n,o){var s="";switch(t.status){case 400:s=r.l("NoQuickview");break;default:s=r.l("OoopsError")}var a=document.implementation.createHTMLDocument();a.body.style.fontFamily="Arimo, 'Helvetica Neue', Helvetica, Arial, sans-serif",i.$$(a.body).text(s),e.writeToIFrame(a),n(e.iframeElement)})},t.prototype.quickviewIsClosedByEndUser=function(){return null==this.iframeElement.contentDocument},t.prototype.buildIFrame=function(){var t=i.$$("iframe",{sandbox:"allow-same-origin allow-top-navigation",src:"about:blank"});this.iframeElement=t.el;var e=i.$$("div",{className:"coveo-iframeWrapper"});return e.append(t.el),e},t.prototype.writeToIFrame=function(t){this.allowDocumentLinkToEscapeSandbox(t),this.document.open(),this.document.write(t.getElementsByTagName("html")[0].outerHTML),this.document.close()},t.prototype.allowDocumentLinkToEscapeSandbox=function(t){o.each(i.$$(t.body).findAll("a"),function(t){t.setAttribute("target","_top")})},t.prototype.addClientSideTweaksToIFrameStyling=function(t){var e=i.$$("style",{type:"text/css"}).el,n="\n      html pre {\n        white-space: pre-wrap;\n        word-wrap: break-word;\n      }\n      body, html {\n        font-family: Arimo, 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-text-size-adjust: none;\n      }\n      "+(r.DeviceUtils.isIos()?"\n      body, html {\n        height: 1px !important;\n        min-height: 100%;\n        width: 1px !important;\n        min-width: 100%;\n        overflow: scroll;\n        margin: auto\n      }\n      ":"")+"\n      ";r.DeviceUtils.isIos()&&(i.$$(this.iframeElement).setAttribute("scrolling","no"),this.iframeElement.parentElement.style.margin="0 0 5px 5px"),e.appendChild(document.createTextNode(n)),t.head.appendChild(e)},t}();e.QuickviewDocumentIframe=s},452:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=function(){function t(){this.el=this.buildHeader().el}return t.prototype.addWord=function(t){this.el.appendChild(t.el)},t.prototype.buildHeader=function(){return i.$$("div",{className:"coveo-quickview-header"})},t}();e.QuickviewDocumentHeader=o},453:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n(0),r=n(454),s=n(170),a=function(){function t(t,e){this.iframe=t,this.result=e,this.words={},this.scanDocument()}return t.prototype.scanDocument=function(){var t=this;o.each(i.$$(this.iframe.body).findAll('[id^="'+s.HIGHLIGHT_PREFIX+'"]'),function(e,n){var i=new r.QuickviewDocumentWord(t.result);i.doCompleteInitialScanForKeywordInDocument(e);var o=t.words[i.indexIdentifier];o?(o.addElement(e),o.occurrence==i.occurrence&&(o.text+=i.text)):t.words[i.indexIdentifier]=i})},t}();e.QuickviewDocumentWords=a},454:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(49),r=n(11),s=n(1),a=n(170),u=n(455),c=function(){function t(t){this.result=t,this.count=0,this.elements=[],this.currentNavigationPosition=-1,this.logger=new r.Logger(this)}return t.prototype.addElement=function(t){this.count++,this.elements.push(t)},t.prototype.navigateForward=function(){return this.currentNavigationPosition++,this.currentNavigationPosition>=this.elements.length&&(this.currentNavigationPosition=0),this.highlightNavigation(),this.putElementIntoView(),this.elements[this.currentNavigationPosition]},t.prototype.navigateBackward=function(){return this.currentNavigationPosition--,this.currentNavigationPosition<0&&(this.currentNavigationPosition=this.elements.length-1),this.highlightNavigation(),this.putElementIntoView(),this.elements[this.currentNavigationPosition]},t.prototype.navigateTo=function(t){return this.currentNavigationPosition=t,(this.currentNavigationPosition<0||this.currentNavigationPosition>=this.elements.length)&&(this.currentNavigationPosition=0,this.logger.warn("Invalid position in quickview navigation: "+t)),this.highlightNavigation(),this.elements[this.currentNavigationPosition]},t.prototype.doCompleteInitialScanForKeywordInDocument=function(t){var e=this.parseKeywordIdentifier(t);e&&(this.indexIdentifier=e.keywordIdentifier,this.occurrence=e.keywordOccurrencesInDocument,this.indexTermPart=e.keywordTermPart,this.text=this.getText(t),this.color=new u.QuickviewDocumentWordColor(t.style.backgroundColor),this.addElement(t))},t.prototype.isTaggedWord=function(t){return"coveotaggedword"==t.nodeName.toLowerCase()},t.prototype.highlightNavigation=function(){var t=this,e=this.elements[this.currentNavigationPosition],n=i.without(this.elements,e);e.style.color=this.color.htmlColor,e.style.backgroundColor=this.color.invert(),n.forEach(function(e){e.style.color="",e.style.backgroundColor=t.color.htmlColor})},t.prototype.putElementIntoView=function(){this.elements[this.currentNavigationPosition].scrollIntoView()},t.prototype.getText=function(t){var e=this.getHighlightedInnerText(t);return this.resolveOriginalTerm(e)},t.prototype.resolveOriginalTerm=function(t){var e=this;return this.result&&this.result.termsToHighlight?i.find(i.keys(this.result.termsToHighlight),function(n){var r=o.StringUtils.equalsCaseInsensitive(n,t),s=void 0!=i.find(e.result.termsToHighlight[n],function(e){return o.StringUtils.equalsCaseInsensitive(e,t)});return r||s})||t:t},t.prototype.getHighlightedInnerText=function(t){if(!this.isTaggedWord(t))return s.$$(t).text()||"";var e=s.$$(t).children();return e.length>=1?s.$$(i.first(e)).text()||"":""},t.prototype.parseKeywordIdentifier=function(t){var e=t.id.substr(a.HIGHLIGHT_PREFIX.length+1).match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/);return!e||e.length<=3?null:{keywordIdentifier:e[1],keywordOccurrencesInDocument:parseInt(e[2],10),keywordTermPart:parseInt(e[3],10)}},t}();e.QuickviewDocumentWord=c},455:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(106),o=function(){function t(t){this.htmlColor=t;var e=t.match(/\d+/g);e&&(this.r=parseInt(e[0],10),this.g=parseInt(e[1],10),this.b=parseInt(e[2],10))}return t.prototype.invert=function(){return"rgb("+(255-this.r)+", "+(255-this.g)+", "+(255-this.b)+")"},t.prototype.saturate=function(){var t=i.ColorUtils.rgbToHsv(this.r,this.g,this.b);t[1]*=2,t[1]>1&&(t[1]=1);var e=i.ColorUtils.hsvToRgb(t[0],t[1],t[2]);return"rgb("+e[0]+", "+e[1]+", "+e[2]+")"},t}();e.QuickviewDocumentWordColor=o},456:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=function(){function t(t,e,n){this.word=t,this.previewBar=e,this.iframe=n,this.el=this.render()}return t.prototype.render=function(){var t=i.$$("span",{className:"coveo-term-for-quickview"});return t.append(this.buildName().el),t.append(this.renderArrow("up").el),t.append(this.renderArrow("down").el),t.el.style.backgroundColor=this.word.color.htmlColor,t.el.style.borderColor=this.word.color.saturate(),t.el},t.prototype.buildName=function(){var t=this,e=i.$$("span",{className:"coveo-term-for-quickview-name"},this.word.text+" ("+this.word.count+")");return e.on("click",function(){return t.navigate(!1)}),e},t.prototype.navigate=function(t){var e;if(t?(e=this.word.navigateBackward(),this.previewBar.navigateBackward(this.word)):(e=this.word.navigateForward(),this.previewBar.navigateForward(this.word)),this.iframe.isNewQuickviewDocument()){var n=i.$$(e).closest(".pc");i.$$(n).addClass("opened")}e.scrollIntoView()},t.prototype.renderArrow=function(t){var e=this,n=i.$$("span",{className:"coveo-term-for-quickview-"+t+"-arrow"}),o=i.$$("span",{className:"coveo-term-for-quickview-"+t+"-arrow-icon"});return n.append(o.el),n.on("click",function(){return e.navigate("up"==t)}),n},t}();e.QuickviewDocumentWordButton=o},457:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n(0),r=n(11),s=function(){function t(t,e){this.iframe=t,this.words=e,this.wordIndicators=new Map,this.logger=new r.Logger(this),this.renderPreviewBar()}return t.prototype.navigateForward=function(t){var e=this.wordIndicators.get(t);return e?(e.position++,e.position>=e.indicators.length&&(e.position=0),this.highlightNavigation(t),e.indicators[e.position]):(this.logger.warn("Invalid navigation for given word.",t),null)},t.prototype.navigateBackward=function(t){var e=this.wordIndicators.get(t);return e?(e.position--,e.position<0&&(e.position=e.indicators.length-1),this.highlightNavigation(t),e.indicators[e.position]):(this.logger.warn("Invalid navigation for the given word.",t),null)},t.prototype.navigateTo=function(t,e){var n=this.wordIndicators.get(e);return n?(n.position=t,(n.position<0||n.position>=n.indicators.length)&&(this.logger.warn("Invalid navigation for the given position: "+t),n.position=0),this.highlightNavigation(e),n.indicators[n.position]):(this.logger.warn("Invalid navigation for the given word",e),null)},t.prototype.highlightNavigation=function(t){var e=this,n=this.wordIndicators.get(t),i=n.indicators[n.position],r=o.without(n.indicators,i);i.style.backgroundColor=t.color.invert(),i.style.border="1px solid "+t.color.invert(),r.forEach(function(n){return e.defaultStyleColor(n,t)})},t.prototype.renderPreviewBar=function(){var t=this,e=i.$$("div");e.el.style.width="15px",e.el.style.position="fixed",e.el.style.top="0",e.el.style.right="0px",e.el.style.height="100%",this.iframe.body.appendChild(e.el),o.each(this.words.words,function(n){o.each(n.elements,function(i){var o=t.renderWordPositionIndicator(i,n).el;t.wordIndicators.has(n)?t.wordIndicators.get(n).indicators.push(o):t.wordIndicators.set(n,{indicators:[o],position:-1}),e.append(o)}),t.handleOverlappingIndicators(n)})},t.prototype.renderWordPositionIndicator=function(t,e){var n=new i.Doc(this.iframe.document).height(),o=t.getBoundingClientRect().top,r=i.$$("div");return r.el.style.position="absolute",r.el.style.top=o/n*100+"%",r.el.style.width="100%",r.el.style.height="1px",this.defaultStyleColor(r.el,e),r},t.prototype.defaultStyleColor=function(t,e){t.style.border="1px solid "+e.color.saturate(),t.style.backgroundColor=e.color.htmlColor},t.prototype.handleOverlappingIndicators=function(t){for(var e=this.wordIndicators.get(t).indicators,n=0;n<e.length;n++)!function(t){var n=o.chain(e).without(e[t]).find(function(n){return n.style.top==e[t].style.top}).value();n&&(i.$$(e[t]).remove(),e[t]=n)}(n)},t}();e.QuickviewDocumentPreviewBar=s}});