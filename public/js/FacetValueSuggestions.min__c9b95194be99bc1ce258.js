webpackJsonpCoveo__temporary([43],{247:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function u(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(u,s)}l((o=o.apply(e,t||[])).next())})},u=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(u=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(i,n[1])).done)return u;switch(i=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,i=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(u=l.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){l.label=n[1];break}if(6===n[0]&&l.label<u[1]){l.label=u[1],u=n;break}if(u&&l.label<u[2]){l.label=u[2],l.ops.push(n);break}u[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],i=0}finally{r=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,i,u,s,l={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(t,"__esModule",{value:!0}),n(502);var s=n(0),l=n(33),a=n(3),c=n(70),p=n(197),f=n(1),g=n(121),h=n(10),d=n(7),y=n(8),m=n(2),b=n(596),v=function(e){function t(n,o,r){var i=e.call(this,n,t.ID,r)||this;return i.options=o,i.options=y.ComponentOptions.initComponentOptions(n,t,o),i.facetValueSuggestionsProvider=new b.FacetValueSuggestionsProvider(i.queryController,{field:i.options.field,expression:i.options.expression}),i.queryStateFieldFacetId="f:"+i.options.field,i.options.templateHelper||(i.options.templateHelper=t.defaultTemplate),f.$$(i.root).on(l.OmniboxEvents.populateOmniboxSuggestions,function(e,t){t.suggestions.push(i.getSuggestions(t.omnibox))}),i}return o(t,e),t.defaultTemplate=function(e,t){var n=e.keyword.html,o=g.DomUtils.highlight(e.value,"coveo-omnibox-hightlight"),r=this.options.displayEstimateNumberOfResults?g.DomUtils.highlight(" ("+c.l("ResultCount",e.numberOfResults.toString(),e.numberOfResults)+")","coveo-omnibox-suggestion-results-count",!0):"";return""+c.l("KeywordInCategory",n,o)+r},t.getQuerySuggestionKeywordFromText=function(e){return{text:e,html:g.DomUtils.highlight(e,"coveo-omnibox-hightlight")}},t.prototype.getSuggestions=function(e){return i(this,void 0,void 0,function(){var t,n;return u(this,function(o){switch(o.label){case 0:return 0==this.options.numberOfSuggestions?[2,[]]:(t=e.getText(),[4,this.getFacetValueSuggestions(t,e)]);case 1:return n=o.sent(),[2,n||[]]}})})},t.prototype.getQuerySuggestionsKeywords=function(e){return i(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return this.options.useQuerySuggestions&&e.suggestionAddon?[4,e.suggestionAddon.getSuggestion()]:[3,2];case 1:return t=n.sent(),[2,t.map(function(e){var t=e.text,n=e.html;return{text:t||"",html:n}})];case 2:return[2,[]]}})})},t.prototype.getFacetValueSuggestions=function(e,n){return i(this,void 0,void 0,function(){var o,r,i;return u(this,function(u){switch(u.label){case 0:return o=this.options.useValueFromSearchbox?[t.getQuerySuggestionKeywordFromText(e)]:[],[4,this.getQuerySuggestionsKeywords(n)];case 1:return r=u.sent(),i=s.unique(o.concat(r).filter(function(e){return""!=e.text}),function(e){return e.text}),0===i.length?[2,[]]:[2,this.getSuggestionsForWords(i,n)]}})})},t.prototype.getSuggestionsForWords=function(e,t){return i(this,void 0,void 0,function(){var n,o,r,i,s=this;return u(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),[4,this.facetValueSuggestionsProvider.getSuggestions(e)];case 1:return n=u.sent(),this.logger.debug("FacetValue Suggestions Results",n),o=this.queryStateModel.get(this.queryStateFieldFacetId)||[],r=n.filter(function(e){return s.isSuggestionRowAlreadyCheckedInFacet(e,o)}),[2,this.rankSuggestionRows(r).map(function(e){return s.mapFacetValueSuggestion(e,t)})];case 2:return i=u.sent(),this.logger.error(i),[2,[]];case 3:return[2]}})})},t.prototype.isSuggestionRowAlreadyCheckedInFacet=function(e,t){return!t.some(function(t){return t==e.value})},t.prototype.rankSuggestionRows=function(e){var t=e.sort(function(e,t){return t.score.distanceFromTotalForField-e.score.distanceFromTotalForField}).slice(),n=Math.ceil(this.options.numberOfSuggestions/2),o=-Math.floor(this.options.numberOfSuggestions/2),r=t.splice(0,n);if(0!=o){var i=t.slice(o);return r.concat(i)}return r},t.prototype.mapFacetValueSuggestion=function(e,t){var n=this,o={html:this.buildDisplayNameForRow(e,t),text:e.keyword.text},r=this.options.isCategoryField?e.value.split(this.options.categoryFieldDelimitingCharacter):[e.value];return o.advancedQuery=r.map(function(e){return n.options.field+'=="'+e+'"'}).join(" AND "),o.onSelect=function(){return n.onSuggestionSelected(o,r,t)},o},t.prototype.buildDisplayNameForRow=function(e,n){try{return this.options.templateHelper.call(this,e,n)}catch(o){return this.logger.error("Could not apply template from options for the given row. Will use default template.",o,e,n),t.defaultTemplate.call(this,e,n)}},t.prototype.onSuggestionSelected=function(e,t,n){n.setText(e.text);var o=r({},this.queryStateModel.get(p.QueryStateModel.attributesEnum.fv)),i=o[this.options.field.toString()]||[];o[this.options.field.toString()]=i.concat(t),this.queryStateModel.set(p.QueryStateModel.attributesEnum.fv,o),n.magicBox.blur(),this.usageAnalytics.logSearchEvent(h.analyticsActionCauseList.omniboxField,{}),this.queryController.executeQuery()},t.ID="FacetValueSuggestions",t.doExport=function(){a.exportGlobally({FacetValueSuggestions:t})},t.options={field:y.ComponentOptions.buildFieldOption({required:!0}),numberOfSuggestions:y.ComponentOptions.buildNumberOption({defaultValue:5,min:1}),useQuerySuggestions:y.ComponentOptions.buildBooleanOption({defaultValue:!0}),useValueFromSearchbox:y.ComponentOptions.buildBooleanOption({postProcessing:function(e,t){return e||!t.useQuerySuggestions}}),displayEstimateNumberOfResults:y.ComponentOptions.buildBooleanOption({defaultValue:!1}),templateHelper:y.ComponentOptions.buildCustomOption(function(){return null}),isCategoryField:y.ComponentOptions.buildBooleanOption({defaultValue:!1}),categoryFieldDelimitingCharacter:y.ComponentOptions.buildStringOption({defaultValue:"|",depend:"isCategoryField"}),expression:y.ComponentOptions.buildQueryExpressionOption()},t}(d.Component);t.FacetValueSuggestions=v,m.Initialization.registerAutoCreateComponent(v)},502:function(e,t){},596:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function u(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(u,s)}l((o=o.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(u=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(i,n[1])).done)return u;switch(i=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,i=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(u=l.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){l.label=n[1];break}if(6===n[0]&&l.label<u[1]){l.label=u[1],u=n;break}if(u&&l.label<u[2]){l.label=u[2],l.ops.push(n);break}u[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],i=0}finally{r=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,i,u,s,l={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.queryController=e,this.options=t}return e.prototype.getSuggestions=function(e){return o(this,void 0,void 0,function(){var t;return r(this,function(n){switch(n.label){case 0:return[4,this.getFieldValuesToQuery(e)];case 1:return t=n.sent(),[2,this.getAllSuggestionsRows(t.responses,t.reference)]}})})},e.prototype.getAllSuggestionsRows=function(e,t){var n=this;return e.reduce(function(e,o){var r=o.values.map(function(e){return{numberOfResults:e.numberOfResults,keyword:o.keyword,value:e.value,score:n.computeScoreForSuggestionRow(e,t),field:n.options.field}});return e.concat(r)},[])},e.prototype.getFieldValuesToQuery=function(e){return o(this,void 0,void 0,function(){var t,n,o,i,u,s,l,a=this;return r(this,function(r){switch(r.label){case 0:return t=this.buildReferenceFieldValueRequest(),n=this.getQueryToExecuteParts(),this.options.expression&&n.push(this.options.expression),o=e.map(function(e){var t=n.concat([e.text]).join(" ");return a.buildListFieldValueRequest(t)}),i=o.concat([t]),[4,this.queryController.getEndpoint().listFieldValuesBatch({batch:i})];case 1:return u=r.sent(),s=this.computeReferenceFromBatch(u.pop()),l=u.map(function(t,n){return{keyword:e[n],values:t}}),[2,{responses:l,reference:s}]}})})},e.prototype.computeScoreForSuggestionRow=function(e,t){var n=t.fieldsTotal[e.value]||t.smallestTotal;return{distanceFromTotalForField:(n-e.numberOfResults)/n*100}},e.prototype.computeReferenceFromBatch=function(e){var t={};return e.forEach(function(e){return t[e.value]=e.numberOfResults}),{fieldsTotal:t,smallestTotal:e[e.length-1].numberOfResults}},e.prototype.buildListFieldValueRequest=function(e){return{field:this.options.field,ignoreAccents:!0,maximumNumberOfValues:3,queryOverride:e}},e.prototype.buildReferenceFieldValueRequest=function(){return{field:this.options.field}},e.prototype.getQueryToExecuteParts=function(){var e=this.queryController.getLastQuery();return[e&&e.aq?this.removeFieldExpressionFromExpression(this.options.field.toString(),e.aq):"",e.cq].filter(function(e){return!!e})},e.prototype.removeFieldExpressionFromExpression=function(e,t){return t.replace(new RegExp(e+"==([^)]*)","gi"),"").replace(new RegExp(e+"==[^ ]*","gi"),"")},e}();t.FacetValueSuggestionsProvider=i}});