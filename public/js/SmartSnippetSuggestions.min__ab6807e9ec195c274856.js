webpackJsonpCoveo__temporary([28],{296:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0}),n(702);var o=n(7),s=n(3),r=n(11),u=n(1),a=n(0),l=n(703),c=n(6),p=n(2),d="coveo-smart-snippet-suggestions-questions-title";e.SmartSnippetSuggestionsClassNames={HAS_QUESTIONS_CLASSNAME:"coveo-smart-snippet-suggestions-has-questions",QUESTIONS_LIST_CLASSNAME:"coveo-smart-snippet-suggestions-questions",QUESTIONS_LIST_TITLE_CLASSNAME:d};var h=function(t){function e(n,i,o){var s=t.call(this,n,e.ID,o)||this;return s.element=n,s.options=i,s.titleId=a.uniqueId(d),s.bind.onRootElement(r.QueryEvents.deferredQuerySuccess,function(t){return s.handleQuerySuccess(t)}),s}return i(e,t),Object.defineProperty(e.prototype,"loading",{get:function(){return this.contentLoaded},enumerable:!0,configurable:!0}),e.prototype.getCorrespondingResult=function(t){return a.find(this.queryController.getLastResults().results,function(e){return e.raw[t.documentId.contentIdKey]===t.documentId.contentIdValue})},e.prototype.handleQuerySuccess=function(t){var e=t.results.questionAnswer,n=!(!e||!e.relatedQuestions.length);if(u.$$(this.element).toggleClass("coveo-smart-snippet-suggestions-has-questions",n),n){if(this.renderedQuestionAnswer&&a.isEqual(e,this.renderedQuestionAnswer))return;this.detachContent(),this.element.appendChild((this.title=this.buildTitle()).el),this.element.appendChild((this.questionAnswers=this.buildQuestionAnswers(e.relatedQuestions)).el)}else this.detachContent();this.renderedQuestionAnswer=e},e.prototype.detachContent=function(){this.title&&this.title.detach(),this.questionAnswers&&this.questionAnswers.detach(),this.title=this.questionAnswers=null},e.prototype.buildTitle=function(){return u.$$("span",{className:d,id:this.titleId},c.l("SuggestedQuestions"))},e.prototype.buildQuestionAnswers=function(t){var e=this,n=this.getInnerCSS(),i=t.map(function(t){return new l.SmartSnippetCollapsibleSuggestion(t,n,e.getCorrespondingResult(t))}),o=u.$$.apply(void 0,["ul",{className:"coveo-smart-snippet-suggestions-questions",ariaLabelledby:this.titleId}].concat(i.map(function(t){return t.build()})));return this.contentLoaded=Promise.all(i.map(function(t){return t.loading})),o},e.prototype.getInnerCSS=function(){return u.$$(this.element).children().filter(function(t){return t instanceof HTMLScriptElement&&"text/css"===t.type.toLowerCase()}).map(function(t){return t.innerHTML}).join("\n")},e.ID="SmartSnippetSuggestions",e.doExport=function(){s.exportGlobally({SmartSnippetSuggestions:e})},e}(o.Component);e.SmartSnippetSuggestions=h,p.Initialization.registerAutoCreateComponent(h),h.doExport()},517:function(t,e,n){"use strict";function i(t,e){return s(this,void 0,void 0,function(){var n,i,s,a;return r(this,function(r){switch(r.label){case 0:return n=u.$$("iframe",{className:"coveo-shadow-iframe",scrolling:"no",title:e.title}).el,i=new Promise(function(t){return n.addEventListener("load",function(){return t()})}),t.appendChild(n),[4,i];case 1:return r.sent(),s=n.contentDocument.body,s.style.margin="0",a=u.$$("div",{style:"overflow: auto;"}).el,s.appendChild(a),o(n,a),"open"===e.mode&&Object.defineProperty(t,"shadowRoot",{get:function(){return a}}),[2,a]}})})}function o(t,e){new MutationObserver(function(){t.style.height=e.clientHeight+"px"}).observe(e,{attributes:!0,characterData:!0,childList:!0,subtree:!0})}var s=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,s){function r(t){try{a(i.next(t))}catch(t){s(t)}}function u(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(r,u)}a((i=i.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,s&&(r=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(r=r.call(s,n[1])).done)return r;switch(s=0,r&&(n=[0,r.value]),n[0]){case 0:case 1:r=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,s=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){a.label=n[1];break}if(6===n[0]&&a.label<r[1]){a.label=r[1],r=n;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(n);break}r[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],s=0}finally{o=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,s,r,u,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u};Object.defineProperty(e,"__esModule",{value:!0});var u=n(1);n(582),e.attachShadow=i},582:function(t,e){},702:function(t,e){},703:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(15),s=n(12),r=n(517),u=n(1),a=n(6),l="coveo-smart-snippet-suggestions-question",c=l+"-title",p=c+"-label",d=c+"-checkbox",h=l+"-snippet",S=h+"-hidden",f=h+"-content",b=f+"-raw",g=l+"-source";e.SmartSnippetCollapsibleSuggestionClassNames={QUESTION_CLASSNAME:l,QUESTION_TITLE_CLASSNAME:c,QUESTION_TITLE_LABEL_CLASSNAME:p,QUESTION_TITLE_CHECKBOX_CLASSNAME:d,QUESTION_SNIPPET_CLASSNAME:h,QUESTION_SNIPPET_HIDDEN_CLASSNAME:S,SHADOW_CLASSNAME:f,RAW_CONTENT_CLASSNAME:b,SOURCE_CLASSNAME:g,SOURCE_TITLE_CLASSNAME:"coveo-smart-snippet-suggestions-question-source-title",SOURCE_URL_CLASSNAME:"coveo-smart-snippet-suggestions-question-source-url"};var y=function(){function t(t,e,n){this.questionAnswer=t,this.innerCSS=e,this.source=n,this.labelId=i.uniqueId(p),this.snippetId=i.uniqueId(h),this.checkboxId=i.uniqueId(d),this.expanded=!1}return Object.defineProperty(t.prototype,"loading",{get:function(){return this.contentLoaded},enumerable:!0,configurable:!0}),t.prototype.build=function(){var t=this.buildCollapsibleContainer(this.questionAnswer.answerSnippet,this.questionAnswer.question,this.innerCSS&&this.buildStyle(this.innerCSS)),e=this.buildTitle(this.questionAnswer.question);return this.updateExpanded(),u.$$("li",{className:l,ariaLabelledby:this.labelId},e,t).el},t.prototype.buildStyle=function(t){var e=document.createElement("style");return e.innerHTML=t,e},t.prototype.buildTitle=function(t){var e=this,n=this.buildCheckbox(t),i=u.$$("span",{className:p,id:this.labelId});i.text(t);var o=u.$$("span",{className:c},i,n);return o.on("click",function(){return e.toggle()}),o},t.prototype.buildCheckbox=function(t){var e=this;return this.checkbox=u.$$("div",{role:"button",tabindex:0,ariaControls:this.snippetId,className:d,id:this.checkboxId}),(new o.AccessibleButton).withElement(this.checkbox).withLabel(a.l("ExpandQuestionAnswer",t)).withEnterKeyboardAction(function(){return e.toggle()}).build(),this.checkbox},t.prototype.buildCollapsibleContainer=function(t,e,n){var i=this,o=u.$$("div",{className:f});return this.collapsibleContainer=u.$$("div",{className:h,id:this.snippetId},o),this.contentLoaded=r.attachShadow(o.el,{mode:"open",title:a.l("AnswerSpecificSnippet",e)}).then(function(e){e.appendChild(i.buildAnswerSnippetContent(t,n).el)}),this.source&&(this.collapsibleContainer.append(this.buildSourceUrl(this.source.clickUri)),this.collapsibleContainer.append(this.buildSourceTitle(this.source.title,this.source.clickUri))),this.collapsibleContainer},t.prototype.buildAnswerSnippetContent=function(t,e){var n=u.$$("div",{className:b},t),i=u.$$("div",{},n);return e&&i.append(e),i},t.prototype.buildSourceTitle=function(t,e){return this.buildLink(t,e,"coveo-smart-snippet-suggestions-question-source-title")},t.prototype.buildSourceUrl=function(t){return this.buildLink(t,t,"coveo-smart-snippet-suggestions-question-source-url")},t.prototype.buildLink=function(t,e,n){var i=u.$$("a",{className:n,href:e}).el;return i.innerText=t,i},t.prototype.toggle=function(){this.expanded=!this.expanded,this.updateExpanded()},t.prototype.updateExpanded=function(){this.checkbox.setAttribute("aria-expanded",this.expanded.toString()),this.checkbox.setHtml(this.expanded?s.SVGIcons.icons.arrowUp:s.SVGIcons.icons.arrowDown),this.collapsibleContainer.setAttribute("tabindex",""+(this.expanded?0:-1)),this.collapsibleContainer.setAttribute("aria-hidden",(!this.expanded).toString()),this.collapsibleContainer.toggleClass(S,!this.expanded)},t}();e.SmartSnippetCollapsibleSuggestion=y}});
//# sourceMappingURL=SmartSnippetSuggestions.min__ab6807e9ec195c274856.js.map