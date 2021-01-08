webpackJsonpCoveo__temporary([68],{291:function(e,t,i){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0}),i(694);var o=i(22),r=i(3),s=i(10),a=i(7),u=i(8),p=i(203),c=i(204),m=function(e){function t(i,n,o,r){var s=e.call(this,i,t.ID,o)||this;return s.element=i,s.options=n,s.result=r,s.options=u.ComponentOptions.initComponentOptions(i,t,n),s.addMissingTerms(),s}return n(t,e),Object.defineProperty(t.prototype,"missingTerms",{get:function(){for(var e=[],t=0,i=this.result.absentTerms;t<i.length;t++){var n=i[t],o=this.createWordBoundaryDelimitedRegex(n),r=this.queryStateModel.get("q"),s=o.exec(r);if(s){var a=s[4];e.push(a)}}return e},enumerable:!0,configurable:!0}),t.prototype.addTermForcedToAppear=function(e){if(-1===this.missingTerms.indexOf(e))return void this.logger.warn('Method execution aborted because the term to inject in aq ("'+e+'") is not a missing term.',"Allowed missing terms: "+this.missingTerms.toString()+".");this.updateTermForcedToAppear(),this.termForcedToAppear.push(e),this.queryStateModel.set("missingTerms",this.termForcedToAppear.slice())},t.prototype.updateTermForcedToAppear=function(){this.termForcedToAppear=this.queryStateModel.get("missingTerms").slice()},t.prototype.addMissingTerms=function(){var e=this;if(0!==this.missingTerms.length){var t=this.buildContainer();t.length>1&&(this.hideMissingTermsOverTheNumberOfResults(t),t.map(function(t){o.$$(e.element).append(t)}))}},t.prototype.buildContainer=function(){var e=[];return e.push(this.buildCaption().el),this.buildMissingTerms().forEach(function(t){t&&e.push(t.el)}),e},t.prototype.buildCaption=function(){return o.$$("span",{className:"coveo-field-caption"},this.options.caption)},t.prototype.buildMissingTerms=function(){var e=this;return this.missingTerms.filter(function(t){return e.isValidTerm(t)}).map(function(t){return e.makeTermClickableIfEnabled(t)})},t.prototype.executeNewQuery=function(e){void 0===e&&(e=this.queryStateModel.get("q")),this.queryController.executeQuery()},t.prototype.makeTermClickableIfEnabled=function(e){var t=this;if(this.options.clickable){var i=o.$$("button",{className:"coveo-missing-term coveo-clickable"},e);return i.on("click",function(){t.addTermForcedToAppear(e),t.logAnalyticsAddMissingTerm(e),t.executeNewQuery(e)}),i}return o.$$("span",{className:"coveo-missing-term"},e)},t.prototype.createWordBoundaryDelimitedRegex=function(e){return c(p.MissingTermManager.wordBoundary+"("+e+")"+p.MissingTermManager.wordBoundary,"gi")},t.prototype.containsFeaturedResults=function(e){return this.updateTermForcedToAppear(),-1!==this.termForcedToAppear.indexOf(e)},t.prototype.hideMissingTermsOverTheNumberOfResults=function(e){var t=this,i=e.filter(function(e){return"BUTTON"===e.tagName});if(!(i.length<=this.options.numberOfTerms)){for(var n=this.options.numberOfTerms;n<i.length;n++)o.$$(i[n]).hide();var r=i.length-this.options.numberOfTerms,s=o.$$("button",{className:"coveo-missing-term-show-more coveo-clickable"},o.l("NMore",[r]));s.on("click",function(){t.showAllHiddenMissingTerms()}),e.push(s.el)}},t.prototype.showAllHiddenMissingTerms=function(){var e=o.$$(this.element).find(".coveo-missing-term-show-more");e.parentNode.removeChild(e);for(var t=o.$$(this.element).findAll(".coveo-missing-term"),i=this.options.numberOfTerms;i<t.length;i++)o.$$(t[i]).show(),t[i].removeAttribute("style")},t.prototype.isValidTerm=function(e){return this.isNonBoundaryTerm(e)&&!this.containsFeaturedResults(e)},t.prototype.isNonBoundaryTerm=function(e){var t=c("\\p{L}*[-'?*’.~=,/\\\\:`;_!&()]+\\p{L}*","gi");return(this.queryStateModel.get("q").match(t)||[]).every(function(t){return-1===t.indexOf(e)})},t.prototype.logAnalyticsAddMissingTerm=function(e){this.usageAnalytics.logSearchEvent(s.analyticsActionCauseList.addMissingTerm,{missingTerm:e})},t.ID="MissingTerms",t.options={clickable:u.ComponentOptions.buildBooleanOption({defaultValue:!0}),caption:u.ComponentOptions.buildLocalizedStringOption({localizedString:function(){return o.l("Missing")}}),numberOfTerms:u.ComponentOptions.buildNumberOption({defaultValue:5,min:1})},t.doExport=function(){r.exportGlobally({MissingTerms:t})},t}(a.Component);t.MissingTerms=m,o.Initialization.registerAutoCreateComponent(m)},694:function(e,t){}});