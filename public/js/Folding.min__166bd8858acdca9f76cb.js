webpackJsonpCoveo__temporary([47],{186:function(e,t,i){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=i(0),o=i(11),s=i(3),l=i(5),u=i(1),a=i(4),d=i(7),p=i(8),c=i(2),h=i(47),f=i(498),g=function(e){function t(i,n,r){var s=e.call(this,i,t.ID,r)||this;return s.element=i,s.options=n,s.options=p.ComponentOptions.initComponentOptions(i,t,n),l.Assert.check(a.Utils.isCoveoField(s.options.field),s.options.field+" is not a valid field"),l.Assert.exists(s.options.maximumExpandedResults),s.swapParentChildFoldingFields(),s.bind.onRootElement(o.QueryEvents.buildingQuery,s.handleBuildingQuery),s.bind.onRootElement(o.QueryEvents.preprocessResults,s.handlepreprocessResults),s}return n(t,e),t.foldWithParent=function(e){var i={score:Number.NEGATIVE_INFINITY,children:[],result:{raw:!1}};r.each(e,function(e,n){var o=t.findUniqueId(i.children,e.uniqueId);if(null==e.parentResult||e.parentResult.uniqueId==e.uniqueId)null==o&&(o={result:e,score:n,children:[]},i.children.push(o),o.parent=i);else{null!=o?(o.score=Math.min(n,o.score),o.parent.children=r.without(o.parent.children,o)):o={result:e,score:n,children:[]};var s=t.findUniqueId(i.children,e.parentResult.uniqueId);null==s&&(s={result:e.parentResult,score:Number.POSITIVE_INFINITY,children:[]},i.children.push(s),s.parent=i),s.children.push(o),o.parent=s;for(var l=s;null!=l&&o.score<l.score;)l.score=o.score,l=l.parent}});var n=t.resultNodeToQueryResult(i);return r.each(n.attachments,function(e){return e.parentResult=null}),n.attachments},t.defaultGetResult=function(e){var i=e.childResults||[];i.unshift(e),e.childResults=[],i=t.foldWithParent(i);var n=i.shift();return n.childResults=i,n},t.defaultGetMoreResults=function(e){return t.foldWithParent(e)},t.resultNodeToQueryResult=function(e){var i=e.result;return i.attachments=r.map(r.sortBy(e.children,"score"),t.resultNodeToQueryResult),i.parentResult=null!=e.parent?e.parent.result:null,i},t.findUniqueId=function(e,i){for(var n=0;n<e.length;n++){if(e[n].result.uniqueId==i)return e[n];var r=t.findUniqueId(e[n].children,i);if(null!=r)return r}return null},t.prototype.swapParentChildFoldingFields=function(){null!=this.options.childField&&(this.logger.warn('Detecting usage of deprecated option "childField". Assigning it automatically to the "parent" option instead.'),this.logger.warn("The option definition was changed to support universal folding across all sources."),this.logger.warn('To remove this warning, rename the "childField" option (data-child-field) to "parent" (data-parent).'),this.options.parent=this.options.childField),null!=this.options.parentField&&(this.logger.warn('Detecting usage of deprecated option "parentField". Assigning it automatically to the "child" option instead.'),this.logger.warn("The option definition was changed to support universal folding across all sources."),this.logger.warn('To remove this warning, rename the "parentField" option (data-parent-field) to "child" (data-child).'),this.options.child=this.options.parentField)},t.prototype.handleBuildingQuery=function(e){l.Assert.exists(e),this.disabled||(e.queryBuilder.childField=this.options.parent,e.queryBuilder.parentField=this.options.child,e.queryBuilder.filterField=this.options.field,e.queryBuilder.filterFieldRange=this.options.range,e.queryBuilder.requiredFields.push(this.options.field),null!=this.options.parent&&e.queryBuilder.requiredFields.push(this.options.parent),null!=this.options.child&&e.queryBuilder.requiredFields.push(this.options.child))},t.prototype.handlepreprocessResults=function(e){var i=this;l.Assert.exists(e),l.Assert.check(!e.results._folded,"Two or more Folding components are active at the same time for the same Tab. Cannot process the results."),e.results._folded=!0;var n=e.results,o=this.options.getResult||t.defaultGetResult;n.results=r.map(n.results,o),this.options.rearrange&&n.results.forEach(function(e){e.childResults=r.sortBy(e.childResults,function(e){return a.Utils.getFieldValue(e,i.options.rearrange.sort)}),i.shouldBeReversed(e.childResults)&&(e.childResults=e.childResults.reverse())}),this.addLoadMoreHandler(n.results,e.query)},t.prototype.shouldBeReversed=function(e){var t=this;return"ascending"!=this.options.rearrange.direction&&!r.any(e,function(e){return a.Utils.isNullOrUndefined(a.Utils.getFieldValue(e,t.options.rearrange.sort))})},t.prototype.addLoadMoreHandler=function(e,t){var i=this;return r.map(e,function(e){return i.options.enableExpand&&!a.Utils.isNullOrUndefined(a.Utils.getFieldValue(e,i.options.field))&&(e.moreResults=function(){return i.moreResults(e,t)}),e})},t.prototype.moreResults=function(e,t){var i=this,n=r.clone(t),o=new h.QueryBuilder;n.numberOfResults=this.options.maximumExpandedResults;var s=a.Utils.getFieldValue(e,this.options.field);return a.Utils.isNonEmptyString(s)&&(o.advancedExpression.addFieldExpression(this.options.field,"=",[s]),n.aq=o.build().aq),a.Utils.isNonEmptyString(t.q)&&(t.enableQuerySyntax?n.q="( "+t.q+" ) OR @uri":(n.enableQuerySyntax=!0,n.q="( <@- "+t.q+" -@> ) OR @uri")),a.Utils.isNonEmptyString(this.options.expandExpression)&&(n.cq=this.options.expandExpression),null!=this.options.child&&(n.parentField=this.options.child),null!=this.options.parent&&(n.childField=this.options.parent),n.filterField=null,n.filterFieldRange=null,n.firstResult=0,this.options.rearrange?(this.options.rearrange.putInQueryBuilder(o),n.sortCriteria=o.sortCriteria,n.sortField=o.sortField):(n.sortCriteria=t.sortCriteria,n.sortField=t.sortField),this.queryController.getEndpoint().search(n).then(function(e){return i.handlePreprocessMoreResults(e),e.results}).catch(function(e){return i.logger.error("Invalid query performed while trying to retrieve more results for folding.",e),[]})},t.prototype.handlePreprocessMoreResults=function(e){var i=this.options.getMoreResults||t.defaultGetMoreResults;e.results=i(e.results),u.$$(this.element).trigger(o.QueryEvents.preprocessMoreResults,{results:e})},t.ID="Folding",t.doExport=function(){s.exportGlobally({Folding:t})},t.options={field:p.ComponentOptions.buildFieldOption({defaultValue:"@foldingcollection"}),child:p.ComponentOptions.buildFieldOption({defaultValue:"@foldingchild"}),parent:p.ComponentOptions.buildFieldOption({defaultValue:"@foldingparent"}),childField:p.ComponentOptions.buildFieldOption({deprecated:"This option is deprecated. Instead, use the data-parent option."}),parentField:p.ComponentOptions.buildFieldOption({deprecated:"This option is deprecated. Instead, use the data-child option."}),range:p.ComponentOptions.buildNumberOption({defaultValue:2,min:0}),rearrange:p.ComponentOptions.buildCustomOption(function(e){return a.Utils.isNonEmptyString(e)?f.SortCriteria.parse(e):null}),enableExpand:p.ComponentOptions.buildBooleanOption({defaultValue:!0}),expandExpression:p.ComponentOptions.buildQueryExpressionOption({depend:"enableExpand"}),maximumExpandedResults:p.ComponentOptions.buildNumberOption({defaultValue:100,min:1,depend:"enableExpand"}),getResult:p.ComponentOptions.buildCustomOption(function(){return null}),getMoreResults:p.ComponentOptions.buildCustomOption(function(){return null})},t}(d.Component);t.Folding=g,c.Initialization.registerAutoCreateComponent(g)},498:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=i(0),o=i(5);!function(e){e.RELEVANCY="relevancy",e.DATE="date",e.QRE="qre"}(n=t.VALID_SORT||(t.VALID_SORT={}));var s;!function(e){e.ASCENDING="ascending",e.DESCENDING="descending"}(s=t.VALID_DIRECTION||(t.VALID_DIRECTION={}));var l=function(){function e(t,i){void 0===i&&(i=""),this.sort=t,this.direction=i,e.sortIsField(t)||o.Assert.check(this.isValidSort(t),t+" is not a valid sort criteria. Valid values are "+r.values(n)+" or a valid index sortable index field."),e.sortNeedsDirection(t)?o.Assert.check(this.isValidDirection(i),i+" is not a valid sort criteria direction. Valid values are "+r.values(s)):o.Assert.check(""==i)}return e.prototype.isValidDirection=function(e){return r.chain(s).values().contains(e).value()},e.prototype.isValidSort=function(e){return r.chain(n).values().contains(e).value()},e.sortIsField=function(e){return"@"==e.charAt(0)},e.sortNeedsDirection=function(t){return r.contains(e.sortsNeedingDirection,t)||e.sortIsField(t)},e.sortsNeedingDirection=[n.DATE],e}();t.SortCriterion=l;var u=function(){function e(e){var t=this;this.criteria=[],e.split(";").forEach(function(e){var i=e.match(/\S+/g);t.criteria.push(new l(i[0],i[1]))})}return Object.defineProperty(e.prototype,"direction",{get:function(){return r.first(this.criteria).direction},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sort",{get:function(){return r.first(this.criteria).sort},enumerable:!0,configurable:!0}),e.parse=function(t){return new e(t)},e.prototype.putInQueryBuilder=function(e){o.Assert.exists(e),e.sortCriteria=this.toString().split(";").join(",")},e.prototype.toString=function(){return this.criteria.map(function(e){return e.direction?e.sort+" "+e.direction:""+e.sort}).join(";")},e.prototype.equals=function(e){return e.toString()==this.toString()},e}();t.SortCriteria=u}});
//# sourceMappingURL=Folding.min__166bd8858acdca9f76cb.js.map