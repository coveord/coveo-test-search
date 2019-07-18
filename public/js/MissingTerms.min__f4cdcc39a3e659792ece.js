webpackJsonpCoveo__temporary([64],{268:function(e,t,i){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0}),i(612);var o=i(3),r=i(6),s=i(8),a=i(38),u=i(9),p=i(187),c=i(186),m=function(e){function t(i,n,o,r){var a=e.call(this,i,t.ID,o)||this;return a.element=i,a.options=n,a.result=r,a.options=s.ComponentOptions.initComponentOptions(i,t,n),a.addMissingTerms(),a}return n(t,e),Object.defineProperty(t.prototype,"missingTerms",{get:function(){var e=this;return this.result.absentTerms.filter(function(t){return e.createWordBoundaryDelimitedRegex(t).test(e.queryStateModel.get("q"))})},enumerable:!0,configurable:!0}),t.prototype.addTermForcedToAppear=function(e){if(-1===this.missingTerms.indexOf(e))return void this.logger.warn('Method execution aborted because the term to inject in aq ("'+e+'") is not a missing term.',"Allowed missing terms: "+this.missingTerms.toString()+".");this.updateTermForcedToAppear(),this.termForcedToAppear.push(e),this.queryStateModel.set("missingTerms",this.termForcedToAppear.slice())},t.prototype.updateTermForcedToAppear=function(){this.termForcedToAppear=this.queryStateModel.get("missingTerms").slice()},t.prototype.addMissingTerms=function(){var e=this;if(0!==this.missingTerms.length){var t=this.buildContainer();t.length>1&&(this.hideMissingTermsOverTheNumberOfResults(t),t.map(function(t){a.$$(e.element).append(t)}))}},t.prototype.buildContainer=function(){var e=[];return e.push(this.buildCaption().el),this.buildMissingTerms().forEach(function(t){t&&e.push(t.el)}),e},t.prototype.buildCaption=function(){return a.$$("span",{className:"coveo-field-caption"},this.options.caption)},t.prototype.buildMissingTerms=function(){var e=this;return this.missingTerms.filter(function(t){return e.isValidTerm(t)}).map(function(t){return e.makeTermClickableIfEnabled(t)})},t.prototype.executeNewQuery=function(e){void 0===e&&(e=this.queryStateModel.get("q")),this.queryController.executeQuery()},t.prototype.makeTermClickableIfEnabled=function(e){var t=this;if(this.options.clickable){var i=a.$$("button",{className:"coveo-missing-term coveo-clickable"},e);return i.on("click",function(){t.addTermForcedToAppear(e),t.logAnalyticsAddMissingTerm(e),t.executeNewQuery(e)}),i}return a.$$("span",{className:"coveo-missing-term"},e)},t.prototype.createWordBoundaryDelimitedRegex=function(e){return p(c.MissingTermManager.wordBoundary+"("+e+")"+c.MissingTermManager.wordBoundary,"g")},t.prototype.containsFeaturedResults=function(e){return this.updateTermForcedToAppear(),-1!==this.termForcedToAppear.indexOf(e)},t.prototype.hideMissingTermsOverTheNumberOfResults=function(e){var t=this,i=e.filter(function(e){return"BUTTON"===e.tagName});if(!(i.length<=this.options.numberOfTerms)){for(var n=this.options.numberOfTerms;n<i.length;n++)a.$$(i[n]).hide();var o=i.length-this.options.numberOfTerms,r=a.$$("button",{className:"coveo-missing-term-show-more coveo-clickable"},a.l("NMore",[o]));r.on("click",function(){t.showAllHiddenMissingTerms()}),e.push(r.el)}},t.prototype.showAllHiddenMissingTerms=function(){var e=a.$$(this.element).find(".coveo-missing-term-show-more");e.parentNode.removeChild(e);for(var t=a.$$(this.element).findAll(".coveo-missing-term"),i=this.options.numberOfTerms;i<t.length;i++)a.$$(t[i]).show(),t[i].removeAttribute("style")},t.prototype.isValidTerm=function(e){return this.isNonBoundaryTerm(e)&&!this.containsFeaturedResults(e)},t.prototype.isNonBoundaryTerm=function(e){var t=p("\\p{L}*[-'?*’.~=,/\\\\:`;_!&()]+\\p{L}*","gi");return(this.queryStateModel.get("q").match(t)||[]).every(function(t){return-1===t.indexOf(e)})},t.prototype.logAnalyticsAddMissingTerm=function(e){this.usageAnalytics.logSearchEvent(u.analyticsActionCauseList.addMissingTerm,{missingTerm:e})},t.ID="MissingTerms",t.options={clickable:s.ComponentOptions.buildBooleanOption({defaultValue:!0}),caption:s.ComponentOptions.buildLocalizedStringOption({defaultValue:"Missing"}),numberOfTerms:s.ComponentOptions.buildNumberOption({defaultValue:5,min:1})},t.doExport=function(){o.exportGlobally({MissingTerms:t})},t}(r.Component);t.MissingTerms=m,a.Initialization.registerAutoCreateComponent(m)},612:function(e,t){}});