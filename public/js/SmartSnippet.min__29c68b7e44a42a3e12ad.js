webpackJsonpCoveo__temporary([19,53],{218:function(e,t,n){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=n(26),s=n(464),a=n(6),r=n(1),l=n(25),c=n(21),u=function(){function e(e,t,n,s){void 0===n&&(n=i.ModalBox),void 0===s&&(s={}),this.className=e,this.ownerElement=t,this.modalboxModule=n,this.options=o({sizeMod:"big"},s)}return Object.defineProperty(e.prototype,"isOpen",{get:function(){return!!this.focusTrap},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"element",{get:function(){return this.activeModal&&this.activeModal.modalBox},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"content",{get:function(){return this.activeModal&&this.activeModal.content},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"wrapper",{get:function(){return this.activeModal&&this.activeModal.wrapper},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"headerElement",{get:function(){return this.element&&this.element.querySelector(".coveo-modal-header h1")},enumerable:!0,configurable:!0}),e.prototype.openResult=function(e){this.isOpen||(this.openModalAndTrap({content:e.content,validation:e.validation,origin:e.origin,title:c.DomUtils.getQuickviewHeader(e.result,e.options,e.bindings).el}),this.makeAccessible(e.options.title||e.result.title))},e.prototype.open=function(e){this.isOpen||(this.openModalAndTrap(e),this.makeAccessible())},e.prototype.openModalAndTrap=function(e){var t=this;this.initiallyFocusedElement=e.origin||document.activeElement,this.activeModal=this.modalboxModule.open(e.content,{title:e.title,className:this.className,validation:function(){return t.onModalClose(),e.validation()},body:this.ownerElement,sizeMod:this.options.sizeMod,overlayClose:this.options.overlayClose}),this.focusTrap=new s.FocusTrap(this.element)},e.prototype.close=function(){this.isOpen&&(this.activeModal.close(),this.activeModal=null)},e.prototype.makeAccessible=function(e){this.element.setAttribute("aria-modal","true"),e&&this.headerElement.setAttribute("aria-label",e),this.makeCloseButtonAccessible()},e.prototype.makeCloseButtonAccessible=function(){var e=this.element.querySelector(".coveo-small-close");e.setAttribute("aria-label",a.l("Close")),e.setAttribute("role","button"),e.tabIndex=0,e.focus(),r.$$(e).on("keyup",l.KeyboardUtils.keypressAction(l.KEYBOARD.ENTER,function(){return e.click()}))},e.prototype.onModalClose=function(){this.focusTrap.disable(),this.focusTrap=null,this.initiallyFocusedElement&&document.body.contains(this.initiallyFocusedElement)&&this.initiallyFocusedElement.focus()},e}();t.AccessibleModal=u},293:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),i=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function r(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,r)}l((o=o.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,s&&(a=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(s,n[1])).done)return a;switch(s=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,s=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(a=l.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){l.label=n[1];break}if(6===n[0]&&l.label<a[1]){l.label=a[1],a=n;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(n);break}a[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],s=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,s,a,r,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r};Object.defineProperty(t,"__esModule",{value:!0});var a=n(26),r=n(3),l=n(7),c=n(21);n(696);var u=n(0),p=n(697),d=n(10),h=n(698),f=n(699),b=n(6),y=n(516),m=n(4),v=[{analytics:d.AnalyticsSmartSnippetFeedbackReason.DoesNotAnswer,localeKey:"UsefulnessFeedbackDoesNotAnswer"},{analytics:d.AnalyticsSmartSnippetFeedbackReason.PartiallyAnswers,localeKey:"UsefulnessFeedbackPartiallyAnswers"},{analytics:d.AnalyticsSmartSnippetFeedbackReason.WasNotAQuestion,localeKey:"UsefulnessFeedbackWasNotAQuestion"},{analytics:d.AnalyticsSmartSnippetFeedbackReason.Other,localeKey:"Other",hasDetails:!0}],A="coveo-smart-snippet",S=A+"-source";t.SmartSnippetClassNames={QUESTION_CLASSNAME:"coveo-smart-snippet-question",ANSWER_CONTAINER_CLASSNAME:"coveo-smart-snippet-answer",HAS_ANSWER_CLASSNAME:"coveo-smart-snippet-has-answer",SHADOW_CLASSNAME:"coveo-smart-snippet-content",CONTENT_CLASSNAME:"coveo-smart-snippet-content-wrapper",SOURCE_CLASSNAME:S,SOURCE_TITLE_CLASSNAME:"coveo-smart-snippet-source-title",SOURCE_URL_CLASSNAME:"coveo-smart-snippet-source-url"};var E=function(e){function t(n,o,i,s){void 0===s&&(s=a.ModalBox);var r=e.call(this,n,t.ID,i)||this;return r.element=n,r.options=o,r.ModalBox=s,r.bind.onRootElement(c.QueryEvents.deferredQuerySuccess,function(e){return r.handleQuerySuccess(e)}),r}return o(t,e),Object.defineProperty(t.prototype,"style",{get:function(){return c.$$(this.element).children().filter(function(e){return e instanceof HTMLScriptElement&&"text/css"===e.type.toLowerCase()}).map(function(e){return e.innerHTML}).join("\n")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasAnswer",{set:function(e){c.$$(this.element).toggleClass("coveo-smart-snippet-has-answer",e)},enumerable:!0,configurable:!0}),t.prototype.createDom=function(){var e=this;this.element.appendChild(this.buildAnswerContainer()),this.feedbackBanner=new p.UserFeedbackBanner(function(t){return t?e.sendLikeSmartSnippetAnalytics():e.sendDislikeSmartSnippetAnalytics()},function(){return e.openExplanationModal()}),this.element.appendChild(this.feedbackBanner.build()),this.explanationModal=new f.ExplanationModal({reasons:v.map(function(t){return{label:b.l(t.localeKey),id:t.analytics.replace(/_/g,"-"),onSelect:function(){return e.sendExplanationAnalytics(t.analytics,e.explanationModal.details)},hasDetails:t.hasDetails}}),onClosed:function(){return e.sendCloseFeedbackModalAnalytics()},ownerElement:this.searchInterface.options.modalContainer,modalBoxModule:this.ModalBox})},t.prototype.buildAnswerContainer=function(){return c.$$("div",{className:"coveo-smart-snippet-answer"},this.buildQuestion(),this.buildShadow(),this.buildHeightLimiter(),this.buildSourceContainer()).el},t.prototype.buildQuestion=function(){return this.questionContainer=c.$$("div",{className:"coveo-smart-snippet-question"}).el},t.prototype.buildShadow=function(){var e=this;return this.shadowContainer=c.$$("div",{className:"coveo-smart-snippet-content"}).el,this.snippetContainer=c.$$("section",{className:"coveo-smart-snippet-content-wrapper"}).el,this.shadowLoading=y.attachShadow(this.shadowContainer,{mode:"open",title:b.l("AnswerSnippet")}).then(function(t){t.appendChild(e.snippetContainer);var n=e.buildStyle();return n&&t.appendChild(n),t}),this.shadowContainer},t.prototype.buildHeightLimiter=function(){var e=this;return(this.heightLimiter=new h.HeightLimiter(this.shadowContainer,this.snippetContainer,400,function(t){return t?e.sendExpandSmartSnippetAnalytics():e.sendCollapseSmartSnippetAnalytics()})).toggleButton},t.prototype.buildSourceContainer=function(){return this.sourceContainer=c.$$("div",{className:S}).el},t.prototype.buildStyle=function(){var e=this.style;if(e){var t=document.createElement("style");return t.innerHTML=e,t}},t.prototype.getCorrespondingResult=function(e){return u.find(this.queryController.getLastResults().results,function(t){return t.raw[e.documentId.contentIdKey]===e.documentId.contentIdValue})},t.prototype.handleQuerySuccess=function(e){return i(this,void 0,void 0,function(){var t;return s(this,function(n){switch(n.label){case 0:return(t=e.results.questionAnswer)?(this.hasAnswer=!0,[4,this.render(t)]):(this.hasAnswer=!1,[2]);case 1:return n.sent(),[2]}})})},t.prototype.render=function(e){return i(this,void 0,void 0,function(){var t;return s(this,function(n){switch(n.label){case 0:return this.ensureDom(),this.questionContainer.innerText=e.question,this.renderSnippet(e.answerSnippet),t=this.getCorrespondingResult(e),t&&this.renderSource(t),[4,this.shadowLoading];case 1:return n.sent(),[4,m.Utils.resolveAfter(0)];case 2:return n.sent(),this.heightLimiter.onContentHeightChanged(),[2]}})})},t.prototype.renderSnippet=function(e){this.snippetContainer.innerHTML=e},t.prototype.renderSource=function(e){c.$$(this.sourceContainer).empty(),this.sourceContainer.appendChild(this.renderSourceUrl(e.clickUri)),this.sourceContainer.appendChild(this.renderSourceTitle(e.title,e.clickUri))},t.prototype.renderSourceTitle=function(e,t){return this.renderLink(e,t,"coveo-smart-snippet-source-title")},t.prototype.renderSourceUrl=function(e){return this.renderLink(e,e,"coveo-smart-snippet-source-url")},t.prototype.renderLink=function(e,t,n){var o=this,i=c.$$("a",{className:n,href:t}).el;return i.innerText=e,this.enableAnalyticsOnLink(i,function(){return o.sendOpenSourceAnalytics()}),i},t.prototype.enableAnalyticsOnLink=function(e,t){var n=this;e.addEventListener("click",function(o){o.preventDefault(),n.openLink(e.href,o.ctrlKey,t)})},t.prototype.openLink=function(e,t,n){n(),t?window.open(e):window.location.href=e},t.prototype.openExplanationModal=function(){this.sendOpenFeedbackModalAnalytics(),this.explanationModal.open(this.feedbackBanner.explainWhy)},t.prototype.sendLikeSmartSnippetAnalytics=function(){return this.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.likeSmartSnippet,{},this.element,this.lastRenderedResult)},t.prototype.sendDislikeSmartSnippetAnalytics=function(){return this.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.dislikeSmartSnippet,{},this.element,this.lastRenderedResult)},t.prototype.sendExpandSmartSnippetAnalytics=function(){return this.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.expandSmartSnippet,{},this.element,this.lastRenderedResult)},t.prototype.sendCollapseSmartSnippetAnalytics=function(){return this.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.collapseSmartSnippet,{},this.element,this.lastRenderedResult)},t.prototype.sendOpenSourceAnalytics=function(){return this.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.openSmartSnippetSource,{},this.element,this.lastRenderedResult)},t.prototype.sendOpenFeedbackModalAnalytics=function(){return this.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.openSmartSnippetFeedbackModal,{},this.element,this.lastRenderedResult)},t.prototype.sendCloseFeedbackModalAnalytics=function(){return this.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.closeSmartSnippetFeedbackModal,{},this.element,this.lastRenderedResult)},t.prototype.sendExplanationAnalytics=function(e,t){return this.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.sendSmartSnippetReason,{reason:e,details:t},this.element,this.lastRenderedResult)},t.ID="SmartSnippet",t.doExport=function(){r.exportGlobally({SmartSnippet:t})},t}(l.Component);t.SmartSnippet=E,c.Initialization.registerAutoCreateComponent(E)},464:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(31),i=n(0),s=n(1),a=function(){function e(e){this.container=e,this.hiddenElements=[],this.enable()}return Object.defineProperty(e.prototype,"focusableElements",{get:function(){return i.sortBy(this.container.querySelectorAll("[tabindex]"),function(e){return e.tabIndex})},enumerable:!0,configurable:!0}),e.prototype.disable=function(){document.removeEventListener("focusin",this.focusInEvent),document.removeEventListener("focusout",this.focusOutEvent),this.showHiddenElements(),this.enabled=!1},e.prototype.enable=function(){var e=this;document.addEventListener("focusin",this.focusInEvent=function(t){return e.onFocusIn(t)}),document.addEventListener("focusout",this.focusOutEvent=function(t){return e.onFocusOut(t)}),this.hideAllExcept(this.container),this.enabled=!0},e.prototype.showHiddenElements=function(){for(;this.hiddenElements.length;)this.hiddenElements.pop().removeAttribute("aria-hidden")},e.prototype.hideElement=function(e){e.getAttribute("aria-hidden")||(this.hiddenElements.push(e),e.setAttribute("aria-hidden",""+!0))},e.prototype.hideSiblings=function(e){var t=this,n=e.parentElement;n&&i.without(s.$$(n).children(),e).forEach(function(e){t.hideElement(e)})},e.prototype.hideAllExcept=function(e){this.hideSiblings(e);var t=e.parentElement;t&&t!==document.body&&this.hideAllExcept(t)},e.prototype.getFocusableSibling=function(e,t){void 0===t&&(t=!1);var n=this.focusableElements,o=n.indexOf(e);return-1===o?null:n[(o+(t?-1:1)+n.length)%n.length]},e.prototype.focusSibling=function(e,t){void 0===t&&(t=!1);var n=this.getFocusableSibling(e,t);n&&n.focus()},e.prototype.focusFirstElement=function(){var e=this.focusableElements;e.length&&e[0].focus()},e.prototype.elementIsBefore=function(e,t){return!!t&&e.compareDocumentPosition(t)===Node.DOCUMENT_POSITION_PRECEDING},e.prototype.onLosingFocus=function(e,t){var n=this;o.Defer.defer(function(){n.enabled&&(n.enabled=!1,e&&n.focusIsAllowed(e)?n.focusSibling(e,n.elementIsBefore(e,t)):n.focusFirstElement(),n.enabled=!0)})},e.prototype.focusIsAllowed=function(e){return this.container.contains(e)},e.prototype.elementIsInPage=function(e){return e&&e!==document.body.parentElement},e.prototype.onFocusIn=function(e){if(this.enabled){var t=e.relatedTarget;if(!this.elementIsInPage(t)){var n=e.target;this.elementIsInPage(n)&&(this.focusIsAllowed(n)||this.onLosingFocus(null,n))}}},e.prototype.onFocusOut=function(e){if(this.enabled){var t=e.relatedTarget;this.elementIsInPage(t)&&(t&&this.focusIsAllowed(t)||this.onLosingFocus(e.target,t))}},e}();t.FocusTrap=a},516:function(e,t,n){"use strict";function o(e,t){return s(this,void 0,void 0,function(){var n,o,s,l;return a(this,function(a){switch(a.label){case 0:return n=r.$$("iframe",{className:"coveo-shadow-iframe",scrolling:"no",title:t.title}).el,o=new Promise(function(e){return n.addEventListener("load",function(){return e()})}),e.appendChild(n),[4,o];case 1:return a.sent(),s=n.contentDocument.body,s.style.margin="0",l=r.$$("div",{style:"overflow: auto;"}).el,s.appendChild(l),i(n,l),"open"===t.mode&&Object.defineProperty(e,"shadowRoot",{get:function(){return l}}),[2,l]}})})}function i(e,t){new MutationObserver(function(){e.style.height=t.clientHeight+"px"}).observe(t,{attributes:!0,characterData:!0,childList:!0,subtree:!0})}var s=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,s){function a(e){try{l(o.next(e))}catch(e){s(e)}}function r(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,r)}l((o=o.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,s&&(a=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(s,n[1])).done)return a;switch(s=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,s=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(a=l.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){l.label=n[1];break}if(6===n[0]&&l.label<a[1]){l.label=a[1],a=n;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(n);break}a[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],s=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,s,a,r,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);n(581),t.attachShadow=o},554:function(e,t){},581:function(e,t){},696:function(e,t){},697:function(e,t,n){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i,s=n(1),a=n(6),r=n(12),l=n(0),c="coveo-user-feedback-banner",u=c+"-label",p="coveo-user-feedback-banner-thanks-icon";!function(e){e[e.Unknown=0]="Unknown",e[e.Yes=1]="Yes",e[e.No=2]="No"}(i||(i={})),t.UserFeedbackBannerClassNames={ROOT_CLASSNAME:c,CONTAINER_CLASSNAME:"coveo-user-feedback-banner-container",LABEL_CLASSNAME:u,BUTTONS_CONTAINER_CLASSNAME:"coveo-user-feedback-banner-buttons",YES_BUTTON_CLASSNAME:"coveo-user-feedback-banner-yes-button",NO_BUTTON_CLASSNAME:"coveo-user-feedback-banner-no-button",BUTTON_ACTIVE_CLASSNAME:"coveo-user-feedback-banner-button-active",THANK_YOU_BANNER_CLASSNAME:"coveo-user-feedback-banner-thanks",THANK_YOU_BANNER_ACTIVE_CLASSNAME:"coveo-user-feedback-banner-thanks-active",ICON_CLASSNAME:p,EXPLAIN_WHY_CLASSNAME:"coveo-user-feedback-banner-explain-why",EXPLAIN_WHY_ACTIVE_CLASSNAME:"coveo-user-feedback-banner-explain-why-active"};var d=function(){function e(e,t){this.sendUsefulnessAnalytics=e,this.onExplainWhyPressed=t,this.isUseful=i.Unknown,this.labelId=l.uniqueId(u)}return e.prototype.build=function(){return s.$$("div",{className:c,ariaLive:"polite"},this.buildContainer(),this.buildThankYouBanner()).el},e.prototype.buildContainer=function(){return s.$$("div",{className:"coveo-user-feedback-banner-container",ariaLabelledby:this.labelId},this.buildLabel(),this.buildButtons()).el},e.prototype.buildLabel=function(){return s.$$("span",{className:u,id:this.labelId},a.l("UsefulnessFeedbackRequest")).el},e.prototype.buildThankYouBanner=function(){var e=this;this.thankYouBanner=s.$$("div",{className:"coveo-user-feedback-banner-thanks"}).el;var t=s.$$("span",{},a.l("UsefulnessFeedbackThankYou")).el;return this.thankYouBanner.appendChild(t),this.explainWhy=this.buildButton({text:a.l("UsefulnessFeedbackExplainWhy"),className:"coveo-user-feedback-banner-explain-why",action:function(){return e.requestExplaination()}}),this.thankYouBanner.appendChild(this.explainWhy),this.thankYouBanner},e.prototype.buildButtons=function(){var e=this,t=s.$$("div",{className:"coveo-user-feedback-banner-buttons"}).el;return this.yesButton=this.buildButton({text:a.l("Yes"),className:"coveo-user-feedback-banner-yes-button",action:function(){return e.showThankYouBanner(!0)},icon:{className:p,content:r.SVGIcons.icons.checkYes},attributes:{ariaPressed:!1,ariaDescribedby:this.labelId}}),this.yesButton.setAttribute("aria-pressed","false"),t.appendChild(this.yesButton),this.noButton=this.buildButton({text:a.l("No"),className:"coveo-user-feedback-banner-no-button",action:function(){return e.showThankYouBanner(!1)},icon:{className:p,content:r.SVGIcons.icons.clearSmall},attributes:{ariaPressed:!1,ariaDescribedby:this.labelId}}),t.appendChild(this.noButton),t},e.prototype.buildButton=function(e){var t=s.$$("button",o({},e.attributes||{},{className:e.className})).el;if(e.icon){var n=s.$$("span",{className:e.icon.className},e.icon.content).el;t.appendChild(n);var i=s.$$("span",{},e.text).el;t.appendChild(i)}else t.innerText=e.text;return t.addEventListener("click",function(){return e.action()}),t},e.prototype.showThankYouBanner=function(e){this.isUseful!==i.Unknown&&e===(this.isUseful===i.Yes)||(this.isUseful=e?i.Yes:i.No,s.$$(this.yesButton).toggleClass("coveo-user-feedback-banner-button-active",e),s.$$(this.yesButton).setAttribute("aria-pressed",""+e),s.$$(this.noButton).toggleClass("coveo-user-feedback-banner-button-active",!e),s.$$(this.noButton).setAttribute("aria-pressed",""+!e),s.$$(this.thankYouBanner).addClass("coveo-user-feedback-banner-thanks-active"),s.$$(this.explainWhy).toggleClass("coveo-user-feedback-banner-explain-why-active",!e),this.sendUsefulnessAnalytics(e))},e.prototype.requestExplaination=function(){this.onExplainWhyPressed()},e}();t.UserFeedbackBanner=d},698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(12),s=n(6),a="coveo-height-limiter-button";t.HeightLimiterClassNames={CONTAINER_ACTIVE_CLASSNAME:"coveo-height-limiter-container-active",CONTAINER_EXPANDED_CLASSNAME:"coveo-height-limiter-container-expanded",BUTTON_CLASSNAME:a,BUTTON_LABEL_CLASSNAME:"coveo-height-limiter-button-label",BUTTON_ICON_CLASSNAME:"coveo-height-limiter-button-icon",BUTTON_ACTIVE_CLASSNAME:"coveo-height-limiter-button-active"};var r=function(){function e(e,t,n,o){this.containerElement=e,this.contentElement=t,this.heightLimit=n,this.onToggle=o,this.isExpanded=!1,this.buildButton(),this.updateActiveAppearance()}return Object.defineProperty(e.prototype,"toggleButton",{get:function(){return this.button},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{set:function(e){this.containerElement.style.height=e+"px"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contentHeight",{get:function(){return this.contentElement.clientHeight},enumerable:!0,configurable:!0}),e.prototype.onContentHeightChanged=function(){this.updateActiveAppearance()},e.prototype.buildButton=function(){var e=this;return this.button=o.$$("button",{className:a,ariaLabel:s.l("ShowMore"),ariaPressed:"false",ariaHidden:"true"},this.buttonLabel=o.$$("span",{className:"coveo-height-limiter-button-label"}).el,this.buttonIcon=o.$$("span",{className:"coveo-height-limiter-button-icon"}).el).el,this.button.addEventListener("click",function(){return e.toggle()}),this.updateButton(),this.button},e.prototype.updateActiveAppearance=function(){var e=this.contentHeight>this.heightLimit;o.$$(this.containerElement).toggleClass("coveo-height-limiter-container-active",e),o.$$(this.button).toggleClass("coveo-height-limiter-button-active",e),e?this.updateExpandedAppearance():(this.isExpanded=!1,this.updateExpandedAppearance(),this.containerElement.style.height="")},e.prototype.updateButton=function(){this.buttonLabel.innerText=this.isExpanded?s.l("ShowLess"):s.l("ShowMore"),this.button.setAttribute("aria-pressed",""+this.isExpanded),this.buttonIcon.innerHTML=this.isExpanded?i.SVGIcons.icons.arrowUp:i.SVGIcons.icons.arrowDown},e.prototype.updateExpandedAppearance=function(){this.updateButton(),o.$$(this.containerElement).toggleClass("coveo-height-limiter-container-expanded",this.isExpanded),this.height=this.isExpanded?this.contentHeight:this.heightLimit},e.prototype.toggle=function(){this.isExpanded=!this.isExpanded,this.updateExpandedAppearance(),this.onToggle&&this.onToggle(this.isExpanded)},e}();t.HeightLimiter=r},699:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(218),i=n(6),s=n(1),a=n(94);n(700);var r="coveo-user-explanation-modal",l=r+"-content",c=r+"-explanation-section",u=r+"-explanations",p=u+"-label",d=r+"-details",h=d+"-textarea",f=d+"-label",b=r+"-buttons-section",y=r+"-send-button",m=r+"-cancel-button",v=d;t.ExplanationModalClassNames={ROOT_CLASSNAME:r,CONTENT_CLASSNAME:l,EXPLANATION_SECTION_CLASSNAME:c,REASONS_CLASSNAME:u,REASONS_LABEL_CLASSNAME:p,DETAILS_SECTION_CLASSNAME:d,DETAILS_TEXTAREA_CLASSNAME:h,DETAILS_LABEL_CLASSNAME:f,BUTTONS_SECTION_CLASSNAME:b,SEND_BUTTON_CLASSNAME:y,CANCEL_BUTTON_CLASSNAME:m};var A=function(){function e(e){this.options=e,this.shouldCallCloseEvent=!1,this.modal=new o.AccessibleModal(r,this.options.ownerElement,this.options.modalBoxModule)}return Object.defineProperty(e.prototype,"details",{get:function(){return this.selectedReason&&this.selectedReason.hasDetails?this.detailsTextArea.value:null},enumerable:!0,configurable:!0}),e.prototype.open=function(e){var t=this;this.modal.open({origin:e,title:i.l("UsefulnessFeedbackExplainWhyImperative"),content:this.buildContent(),validation:function(){return t.shouldCallCloseEvent&&(t.options.onClosed(),t.shouldCallCloseEvent=!1),!0}}),this.shouldCallCloseEvent=!0},e.prototype.buildContent=function(){return s.$$("div",{className:l},this.buildExplanationSection(),this.buildButtonsSection()).el},e.prototype.buildExplanationSection=function(){var e=this.buildDetailsSection();return s.$$("div",{className:c},this.buildReasons(),e).el},e.prototype.buildButtonsSection=function(){return s.$$("div",{className:b},this.buildSendButton(),this.buildCancelButton())},e.prototype.buildReasons=function(){var e=this,t=s.$$("fieldset",{className:u},this.buildReasonsLabel()).el;return this.reasons=this.options.reasons.map(function(t){return e.buildReasonRadioButton(t)}),this.reasons[0].select(),this.reasons.forEach(function(e){return t.appendChild(e.getElement())}),t},e.prototype.buildReasonsLabel=function(){return s.$$("legend",{className:p},i.l("UsefulnessFeedbackReason")).el},e.prototype.buildDetailsSection=function(){return s.$$("div",{className:d},s.$$("label",{className:f,for:v},i.l("Details")).el,this.detailsTextArea=s.$$("textarea",{className:h,id:v,disabled:!0}).el)},e.prototype.buildSendButton=function(){var e=this,t=s.$$("button",{className:y},i.l("Send"));return t.on("click",function(){e.selectedReason.onSelect(),e.shouldCallCloseEvent=!1,e.modal.close()}),t.el},e.prototype.buildCancelButton=function(){var e=this,t=s.$$("button",{className:m},i.l("Cancel"));return t.on("click",function(){return e.modal.close()}),t.el},e.prototype.buildReasonRadioButton=function(e){var t=this;return new a.RadioButton(function(n){n.isSelected()&&(t.detailsTextArea.disabled=!e.hasDetails,t.selectedReason=e)},e.label,"reason","coveo-reason-"+e.id)},e}();t.ExplanationModal=A},700:function(e,t){},94:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);n(554);var i=n(3),s=function(){function e(e,t,n,o){void 0===e&&(e=function(e){}),void 0===o&&(o=t),this.onChange=e,this.label=t,this.name=n,this.id=o,this.buildContent()}return e.doExport=function(){i.exportGlobally({RadioButton:e})},e.prototype.reset=function(){var e=this.isSelected();this.getRadio().checked=!1,e&&this.onChange(this)},e.prototype.select=function(e){void 0===e&&(e=!0);var t=this.isSelected();this.getRadio().checked=!0,!t&&e&&this.onChange(this)},e.prototype.build=function(){return this.element},e.prototype.getElement=function(){return this.element},e.prototype.getValue=function(){return this.label},e.prototype.isSelected=function(){return this.getRadio().checked},e.prototype.getRadio=function(){return o.$$(this.element).find("input")},e.prototype.getLabel=function(){return o.$$(this.element).find("label")},e.prototype.buildContent=function(){var e=this,t=o.$$("div",{className:"coveo-radio"}),n=o.$$("input",{type:"radio",name:this.name,id:this.id}),i=o.$$("label",{className:"coveo-radio-input-label",for:this.id});i.text(this.label),n.on("change",function(){e.onChange(e)}),t.append(n.el),t.append(i.el),this.element=t.el},e}();t.RadioButton=s}});