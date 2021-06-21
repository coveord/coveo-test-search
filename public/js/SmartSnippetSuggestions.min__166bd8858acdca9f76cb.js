webpackJsonpCoveo__temporary([21,63],{295:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0}),n(704);var o=n(7),s=n(3),r=n(11),l=n(1),u=n(0),a=n(705),c=n(6),p=n(2),h=n(4),d=n(518),f="coveo-smart-snippet-suggestions-questions-title";e.SmartSnippetSuggestionsClassNames={HAS_QUESTIONS_CLASSNAME:"coveo-smart-snippet-suggestions-has-questions",QUESTIONS_LIST_CLASSNAME:"coveo-smart-snippet-suggestions-questions",QUESTIONS_LIST_TITLE_CLASSNAME:f};var g=function(t){function e(n,i,o){var s=t.call(this,n,e.ID,o)||this;return s.element=n,s.options=i,s.titleId=u.uniqueId(f),s.bind.onRootElement(r.QueryEvents.deferredQuerySuccess,function(t){return s.handleQuerySuccess(t)}),s}return i(e,t),Object.defineProperty(e.prototype,"loading",{get:function(){return this.contentLoaded},enumerable:!0,configurable:!0}),e.prototype.getCorrespondingResult=function(t){return u.find(this.queryController.getLastResults().results,function(e){return e.raw[t.documentId.contentIdKey]===t.documentId.contentIdValue})},e.prototype.handleQuerySuccess=function(t){var e=t.results.questionAnswer,n=!(!e||!e.relatedQuestions.length);if(l.$$(this.element).toggleClass("coveo-smart-snippet-suggestions-has-questions",n),n){if(this.searchUid=t.results.searchUid,this.renderedQuestionAnswer&&u.isEqual(e,this.renderedQuestionAnswer))return;this.detachContent(),this.element.appendChild((this.title=this.buildTitle()).el),this.element.appendChild((this.questionAnswers=this.buildQuestionAnswers(e.relatedQuestions)).el)}else this.detachContent();this.renderedQuestionAnswer=e},e.prototype.detachContent=function(){this.title&&this.title.detach(),this.questionAnswers&&this.questionAnswers.detach(),this.title=this.questionAnswers=null},e.prototype.buildTitle=function(){return l.$$("span",{className:f,id:this.titleId},c.l("SuggestedQuestions"))},e.prototype.buildQuestionAnswers=function(t){var e=this,n=this.getInnerCSS(),i=t.map(function(t){return new a.SmartSnippetCollapsibleSuggestion(t,e.getBindings(),h.Utils.isNullOrUndefined(n)?d.getDefaultSnippetStyle(a.SmartSnippetCollapsibleSuggestionClassNames.RAW_CONTENT_CLASSNAME):n,e.searchUid,e.getCorrespondingResult(t))}),o=l.$$.apply(void 0,["ul",{className:"coveo-smart-snippet-suggestions-questions",ariaLabelledby:this.titleId}].concat(i.map(function(t){return t.build()})));return this.contentLoaded=Promise.all(i.map(function(t){return t.loading.then(function(){return t})})),o},e.prototype.getInnerCSS=function(){var t=l.$$(this.element).children().filter(function(t){return t instanceof HTMLScriptElement&&"text/css"===t.type.toLowerCase()}).map(function(t){return t.innerHTML});return t.length?t.join("\n"):null},e.ID="SmartSnippetSuggestions",e.doExport=function(){s.exportGlobally({SmartSnippetSuggestions:e})},e}(o.Component);e.SmartSnippetSuggestions=g,p.Initialization.registerAutoCreateComponent(g),g.doExport()},517:function(t,e,n){"use strict";function i(t,e){return s(this,void 0,void 0,function(){var n,i,s,u;return r(this,function(r){switch(r.label){case 0:return n=l.$$("iframe",{className:"coveo-shadow-iframe",scrolling:"no",title:e.title}).el,i=new Promise(function(t){return n.addEventListener("load",function(){return t()})}),t.appendChild(n),[4,i];case 1:return r.sent(),s=n.contentDocument.body,s.style.margin="0",u=l.$$("div",{style:"overflow: auto;"}).el,s.appendChild(u),o(n,u,e.onSizeChanged),"open"===e.mode&&Object.defineProperty(t,"shadowRoot",{get:function(){return u}}),[2,u]}})})}function o(t,e,n){var i=e.clientWidth,o=e.clientHeight;new MutationObserver(function(){i===e.clientWidth&&o===e.clientHeight||(i=e.clientWidth,o=e.clientHeight,t.style.width=e.clientWidth+"px",t.style.height=e.clientHeight+"px",n&&n())}).observe(e,{attributes:!0,characterData:!0,childList:!0,subtree:!0})}var s=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,s){function r(t){try{u(i.next(t))}catch(t){s(t)}}function l(t){try{u(i.throw(t))}catch(t){s(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(r,l)}u((i=i.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,s&&(r=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(r=r.call(s,n[1])).done)return r;switch(s=0,r&&(n=[0,r.value]),n[0]){case 0:case 1:r=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,s=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(r=u.trys,!(r=r.length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){u.label=n[1];break}if(6===n[0]&&u.label<r[1]){u.label=r[1],r=n;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(n);break}r[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],s=0}finally{o=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,s,r,l,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l};Object.defineProperty(e,"__esModule",{value:!0});var l=n(1);n(583),e.attachShadow=i},518:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDefaultSnippetStyle=function(t){return'\n  body {\n    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif, sans-serif;\n  }\n\n  .'+t+" > :first-child {\n    margin-top: 0;\n  }\n\n  ."+t+" > :last-child {\n    margin-bottom: 0;\n  }\n"}},530:function(t,e){},583:function(t,e){},69:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),s=n(8),r=n(28),l=n(10),u=n(29),a=n(67),c=n(24),p=n(179),h=n(2),d=n(21),f=n(5),g=n(4),S=n(31),b=n(1),m=n(114),y=n(22),v=n(0),O=n(3);n(530);var A=n(16),C=function(t){function e(n,i,o,u,a){var p=t.call(this,n,e.ID,o)||this;p.element=n,p.options=i,p.bindings=o,p.result=u,p.os=a,p.logOpenDocument=v.debounce(function(){p.queryController.saveLastQuery();var t=b.$$(p.element).getAttribute("href");void 0!=t&&""!=t||(t=p.escapedClickUri),p.usageAnalytics.logClickEvent(l.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:p.result.title,author:g.Utils.getFieldValue(p.result,"author")},p.result,p.root),S.Defer.flush()},1500,!0);var h=s.ComponentOptions.initComponentOptions(n,e,i),d=p.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink);if(p.options=v.extend({},h,d),p.result=u||p.resolveResult(),null==p.options.openQuickview&&(p.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&c.DeviceUtils.isMobileDevice()),p.element.setAttribute("tabindex","0"),f.Assert.exists(p.componentOptionsModel),f.Assert.exists(p.result),!p.quickviewShouldBeOpened()){var m=v.once(function(){return p.logOpenDocument()});b.$$(n).on(["contextmenu","click","mousedown","mouseup"],m);var y;b.$$(n).on("touchstart",function(){y=window.setTimeout(m,1e3)}),b.$$(n).on("touchend",function(){y&&clearTimeout(y)})}return p.renderUri(n,u),p.bindEventToOpen(),p}return i(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML)){var n=this.getDisplayedTitle();this.element.innerHTML=n,this.element.title||(this.element.title=this.getDisplayedTitleAsText())}},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.getDisplayedTitle=function(){if(this.options.titleTemplate){var t=y.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);return t?m.StreamHighlightUtils.highlightStreamText(t,this.result.termsToHighlight,this.result.phrasesToHighlight):this.escapedClickUri}return this.result.title?a.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.escapedClickUri},e.prototype.getDisplayedTitleAsText=function(){var t=b.$$("div");return t.setHtml(this.getDisplayedTitle()),t.text()},Object.defineProperty(e.prototype,"escapedClickUri",{get:function(){return v.escape(this.result.clickUri)},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new A.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){b.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},b.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},b.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||g.Utils.isNonEmptyString(b.$$(this.element).getAttribute("href")))&&(b.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||b.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.filterProtocol=function(t){var e=/^(https?|ftp|file|mailto|tel):/i.test(t),n=/^(\/|\.\/|\.\.\/)/.test(t);return e||n?t:""},e.prototype.getResultUri=function(){if(this.options.hrefTemplate){var t=y.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result);return this.filterProtocol(t)}return void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?this.filterProtocol(g.Utils.getFieldValue(this.result,this.options.field)):this.filterProtocol(this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=g.Utils.exists(this.os)?this.os:p.OSUtils.get();t==p.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==p.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=g.Utils.exists(this.os)?this.os:p.OSUtils.get();return t==p.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==p.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.escapedClickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){O.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=C,h.Initialization.registerAutoCreateComponent(C)},704:function(t,e){},705:function(t,e,n){"use strict";var i=this&&this.__assign||Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=n(16),r=n(12),l=n(517),u=n(1),a=n(6),c=n(10),p=n(69),h="coveo-smart-snippet-suggestions-question",d=h+"-title",f=d+"-label",g=d+"-checkbox",S=h+"-snippet",b=S+"-container",m=S+"-hidden",y=S+"-content",v=y+"-raw",O=h+"-source";e.SmartSnippetCollapsibleSuggestionClassNames={QUESTION_CLASSNAME:h,QUESTION_TITLE_CLASSNAME:d,QUESTION_TITLE_LABEL_CLASSNAME:f,QUESTION_TITLE_CHECKBOX_CLASSNAME:g,QUESTION_SNIPPET_CLASSNAME:S,QUESTION_SNIPPET_CONTAINER_CLASSNAME:b,QUESTION_SNIPPET_HIDDEN_CLASSNAME:m,SHADOW_CLASSNAME:y,RAW_CONTENT_CLASSNAME:v,SOURCE_CLASSNAME:O,SOURCE_TITLE_CLASSNAME:"coveo-smart-snippet-suggestions-question-source-title",SOURCE_URL_CLASSNAME:"coveo-smart-snippet-suggestions-question-source-url"};var A=function(){function t(t,e,n,i,s){this.questionAnswer=t,this.bindings=e,this.innerCSS=n,this.searchUid=i,this.source=s,this.labelId=o.uniqueId(f),this.snippetId=o.uniqueId(S),this.checkboxId=o.uniqueId(g),this.expanded=!1}return Object.defineProperty(t.prototype,"loading",{get:function(){return this.contentLoaded},enumerable:!0,configurable:!0}),t.prototype.build=function(){var t=this.buildCollapsibleContainer(this.questionAnswer.answerSnippet,this.questionAnswer.question,this.buildStyle(this.innerCSS)),e=this.buildTitle(this.questionAnswer.question);return this.updateExpanded(),u.$$("li",{className:h,ariaLabelledby:this.labelId},e,t).el},t.prototype.buildStyle=function(t){var e=document.createElement("style");return e.innerHTML=t,e},t.prototype.buildTitle=function(t){var e=this,n=this.buildCheckbox(t),i=u.$$("span",{className:f,id:this.labelId});i.text(t);var o=u.$$("span",{className:d},i,n);return o.on("click",function(){return e.toggle()}),o},t.prototype.buildCheckbox=function(t){var e=this;return this.checkbox=u.$$("div",{role:"button",tabindex:0,ariaControls:this.snippetId,className:g,id:this.checkboxId}),(new s.AccessibleButton).withElement(this.checkbox).withLabel(a.l("ExpandQuestionAnswer",t)).withEnterKeyboardAction(function(){return e.toggle()}).build(),this.checkbox},t.prototype.buildCollapsibleContainer=function(t,e,n){var i=this,o=u.$$("div",{className:y});return this.snippetAndSourceContainer=u.$$("div",{className:b},o),this.collapsibleContainer=u.$$("div",{className:S,id:this.snippetId},this.snippetAndSourceContainer),this.contentLoaded=l.attachShadow(o.el,{mode:"open",title:a.l("AnswerSpecificSnippet",e)}).then(function(e){e.appendChild(i.buildAnswerSnippetContent(t,n).el)}),this.source&&(this.snippetAndSourceContainer.append(this.buildSourceUrl()),this.snippetAndSourceContainer.append(this.buildSourceTitle())),this.collapsibleContainer},t.prototype.buildAnswerSnippetContent=function(t,e){var n=u.$$("div",{className:v},t),i=u.$$("div",{},n);return i.append(e),i},t.prototype.buildSourceTitle=function(){return this.buildLink(this.source.title,"coveo-smart-snippet-suggestions-question-source-title")},t.prototype.buildSourceUrl=function(){return this.buildLink(this.source.clickUri,"coveo-smart-snippet-suggestions-question-source-url")},t.prototype.buildLink=function(t,e){var n=u.$$("a",{className:"CoveoResultLink "+e}).el;return n.innerText=t,new p.ResultLink(n,{},i({},this.bindings,{resultElement:this.collapsibleContainer.el}),this.source),n},t.prototype.toggle=function(){this.expanded=!this.expanded,this.updateExpanded(),this.expanded?this.sendExpandAnalytics():this.sendCollapseAnalytics()},t.prototype.updateExpanded=function(){this.checkbox.setAttribute("aria-expanded",this.expanded.toString()),this.checkbox.setHtml(this.expanded?r.SVGIcons.icons.arrowUp:r.SVGIcons.icons.arrowDown),this.collapsibleContainer.setAttribute("tabindex",""+(this.expanded?0:-1)),this.collapsibleContainer.setAttribute("aria-hidden",(!this.expanded).toString()),this.collapsibleContainer.toggleClass(m,!this.expanded),this.collapsibleContainer.el.style.height=this.expanded?this.snippetAndSourceContainer.el.clientHeight+"px":"0px"},t.prototype.sendExpandAnalytics=function(){return this.bindings.usageAnalytics.logCustomEvent(c.analyticsActionCauseList.expandSmartSnippetSuggestion,{searchQueryUid:this.searchUid,documentId:this.questionAnswer.documentId},this.checkbox.el)},t.prototype.sendCollapseAnalytics=function(){return this.bindings.usageAnalytics.logCustomEvent(c.analyticsActionCauseList.collapseSmartSnippetSuggestion,{searchQueryUid:this.searchUid,documentId:this.questionAnswer.documentId},this.checkbox.el)},t}();e.SmartSnippetCollapsibleSuggestion=A}});
//# sourceMappingURL=SmartSnippetSuggestions.min__166bd8858acdca9f76cb.js.map