webpackJsonpCoveo__temporary([42,52],{133:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(3),s=n(10),l=n(5),u=n(1),a=n(4),d=n(6),p=n(8),c=n(2),h=n(36),f=n(357),g=function(e){function t(n,i,r){var o=e.call(this,n,t.ID,r)||this;return o.element=n,o.options=i,o.options=p.ComponentOptions.initComponentOptions(n,t,i),l.Assert.check(a.Utils.isCoveoField(o.options.field),o.options.field+" is not a valid field"),l.Assert.exists(o.options.maximumExpandedResults),o.swapParentChildFoldingFields(),o.bind.onRootElement(s.QueryEvents.buildingQuery,o.handleBuildingQuery),o.bind.onRootElement(s.QueryEvents.preprocessResults,o.handlepreprocessResults),o}return i(t,e),t.foldWithParent=function(e){var n={score:Number.NEGATIVE_INFINITY,children:[],result:{raw:!1}};r.each(e,function(e,i){var o=t.findUniqueId(n.children,e.uniqueId);if(null==e.parentResult||e.parentResult.uniqueId==e.uniqueId)null==o&&(o={result:e,score:i,children:[]},n.children.push(o),o.parent=n);else{null!=o?(o.score=Math.min(i,o.score),o.parent.children=r.without(o.parent.children,o)):o={result:e,score:i,children:[]};var s=t.findUniqueId(n.children,e.parentResult.uniqueId);null==s&&(s={result:e.parentResult,score:Number.POSITIVE_INFINITY,children:[]},n.children.push(s),s.parent=n),s.children.push(o),o.parent=s;for(var l=s;null!=l&&o.score<l.score;)l.score=o.score,l=l.parent}});var i=t.resultNodeToQueryResult(n);return r.each(i.attachments,function(e){return e.parentResult=null}),i.attachments},t.defaultGetResult=function(e){var n=e.childResults||[];n.unshift(e),e.childResults=[],n=t.foldWithParent(n);var i=n.shift();return i.childResults=n,i},t.defaultGetMoreResults=function(e){return t.foldWithParent(e)},t.resultNodeToQueryResult=function(e){var n=e.result;return n.attachments=r.map(r.sortBy(e.children,"score"),t.resultNodeToQueryResult),n.parentResult=null!=e.parent?e.parent.result:null,n},t.findUniqueId=function(e,n){for(var i=0;i<e.length;i++){if(e[i].result.uniqueId==n)return e[i];var r=t.findUniqueId(e[i].children,n);if(null!=r)return r}return null},t.prototype.swapParentChildFoldingFields=function(){null!=this.options.childField&&(this.logger.warn('Detecting usage of deprecated option "childField". Assigning it automatically to the "parent" option instead.'),this.logger.warn("The option definition was changed to support universal folding across all sources."),this.logger.warn('To remove this warning, rename the "childField" option (data-child-field) to "parent" (data-parent).'),this.options.parent=this.options.childField),null!=this.options.parentField&&(this.logger.warn('Detecting usage of deprecated option "parentField". Assigning it automatically to the "child" option instead.'),this.logger.warn("The option definition was changed to support universal folding across all sources."),this.logger.warn('To remove this warning, rename the "parentField" option (data-parent-field) to "child" (data-child).'),this.options.child=this.options.parentField)},t.prototype.handleBuildingQuery=function(e){l.Assert.exists(e),this.disabled||(e.queryBuilder.childField=this.options.parent,e.queryBuilder.parentField=this.options.child,e.queryBuilder.filterField=this.options.field,e.queryBuilder.filterFieldRange=this.options.range,e.queryBuilder.requiredFields.push(this.options.field),null!=this.options.parent&&e.queryBuilder.requiredFields.push(this.options.parent),null!=this.options.child&&e.queryBuilder.requiredFields.push(this.options.child))},t.prototype.handlepreprocessResults=function(e){var n=this;l.Assert.exists(e),l.Assert.check(!e.results._folded,"Two or more Folding components are active at the same time for the same Tab. Cannot process the results."),e.results._folded=!0;var i=e.results,o=this.options.getResult||t.defaultGetResult;i.results=r.map(i.results,o),this.options.rearrange&&i.results.forEach(function(e){e.childResults=r.sortBy(e.childResults,function(e){return a.Utils.getFieldValue(e,n.options.rearrange.sort)}),n.shouldBeReversed(e.childResults)&&(e.childResults=e.childResults.reverse())}),this.addLoadMoreHandler(i.results,e.query)},t.prototype.shouldBeReversed=function(e){var t=this;return"ascending"!=this.options.rearrange.direction&&!r.any(e,function(e){return a.Utils.isNullOrUndefined(a.Utils.getFieldValue(e,t.options.rearrange.sort))})},t.prototype.addLoadMoreHandler=function(e,t){var n=this;return r.map(e,function(e){return n.options.enableExpand&&!a.Utils.isNullOrUndefined(a.Utils.getFieldValue(e,n.options.field))&&(e.moreResults=function(){return n.moreResults(e,t)}),e})},t.prototype.moreResults=function(e,t){var n=this,i=r.clone(t),o=new h.QueryBuilder;i.numberOfResults=this.options.maximumExpandedResults;var s=a.Utils.getFieldValue(e,this.options.field);return a.Utils.isNonEmptyString(s)&&(o.advancedExpression.addFieldExpression(this.options.field,"=",[s]),i.aq=o.build().aq),a.Utils.isNonEmptyString(t.q)&&(t.enableQuerySyntax?i.q="( "+t.q+" ) OR @uri":(i.enableQuerySyntax=!0,i.q="( <@- "+t.q+" -@> ) OR @uri")),a.Utils.isNonEmptyString(this.options.expandExpression)&&(i.cq=this.options.expandExpression),null!=this.options.child&&(i.parentField=this.options.child),null!=this.options.parent&&(i.childField=this.options.parent),i.filterField=null,i.filterFieldRange=null,i.firstResult=0,this.options.rearrange?(this.options.rearrange.putInQueryBuilder(o),i.sortCriteria=o.sortCriteria,i.sortField=o.sortField):(i.sortCriteria=t.sortCriteria,i.sortField=t.sortField),this.queryController.getEndpoint().search(i).then(function(e){return n.handlePreprocessMoreResults(e),e.results}).catch(function(e){return n.logger.error("Invalid query performed while trying to retrieve more results for folding.",e),[]})},t.prototype.handlePreprocessMoreResults=function(e){var n=this.options.getMoreResults||t.defaultGetMoreResults;e.results=n(e.results),u.$$(this.element).trigger(s.QueryEvents.preprocessMoreResults,{results:e})},t.ID="Folding",t.doExport=function(){o.exportGlobally({Folding:t})},t.options={field:p.ComponentOptions.buildFieldOption({defaultValue:"@foldingcollection"}),child:p.ComponentOptions.buildFieldOption({defaultValue:"@foldingchild"}),parent:p.ComponentOptions.buildFieldOption({defaultValue:"@foldingparent"}),childField:p.ComponentOptions.buildFieldOption({deprecated:"This option is deprecated. Instead, use the data-parent option."}),parentField:p.ComponentOptions.buildFieldOption({deprecated:"This option is deprecated. Instead, use the data-child option."}),range:p.ComponentOptions.buildNumberOption({defaultValue:2,min:0}),rearrange:p.ComponentOptions.buildCustomOption(function(e){return a.Utils.isNonEmptyString(e)?f.SortCriteria.parse(e):null}),enableExpand:p.ComponentOptions.buildBooleanOption({defaultValue:!0}),expandExpression:p.ComponentOptions.buildQueryExpressionOption({depend:"enableExpand"}),maximumExpandedResults:p.ComponentOptions.buildNumberOption({defaultValue:100,min:1,depend:"enableExpand"}),getResult:p.ComponentOptions.buildCustomOption(function(){return null}),getMoreResults:p.ComponentOptions.buildCustomOption(function(){return null})},t}(d.Component);t.Folding=g,c.Initialization.registerAutoCreateComponent(g)},194:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(2),s=n(133),l=function(e){function t(t,n,i){var r=e.call(this,t,n,i)||this;return r.element=t,r.options=n,r.options.getMoreResults=function(e){return s.Folding.foldWithParent(e)[0].attachments},r.options.getResult=function(e){var t=s.Folding.defaultGetResult(e);return t.childResults=t.attachments,t.attachments=[],t},r}return i(t,e),t.ID="FoldingForThread",t.doExport=function(){r.exportGlobally({FoldingForThread:t})},t}(s.Folding);t.FoldingForThread=l,o.Initialization.registerAutoCreateComponent(l)},357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(0),o=n(5);!function(e){e.RELEVANCY="relevancy",e.DATE="date",e.QRE="qre"}(i=t.VALID_SORT||(t.VALID_SORT={}));var s;!function(e){e.ASCENDING="ascending",e.DESCENDING="descending"}(s=t.VALID_DIRECTION||(t.VALID_DIRECTION={}));var l=function(){function e(t,n){void 0===n&&(n=""),this.sort=t,this.direction=n,e.sortIsField(t)||o.Assert.check(this.isValidSort(t),t+" is not a valid sort criteria. Valid values are "+r.values(i)+" or a valid index sortable index field."),e.sortNeedsDirection(t)?o.Assert.check(this.isValidDirection(n),n+" is not a valid sort criteria direction. Valid values are "+r.values(s)):o.Assert.check(""==n)}return e.prototype.isValidDirection=function(e){return r.chain(s).values().contains(e).value()},e.prototype.isValidSort=function(e){return r.chain(i).values().contains(e).value()},e.sortIsField=function(e){return"@"==e.charAt(0)},e.sortNeedsDirection=function(t){return r.contains(e.sortsNeedingDirection,t)||e.sortIsField(t)},e.sortsNeedingDirection=[i.DATE],e}();t.SortCriterion=l;var u=function(){function e(e){var t=this;this.criteria=[],e.split(";").forEach(function(e){var n=e.match(/\S+/g);t.criteria.push(new l(n[0],n[1]))})}return Object.defineProperty(e.prototype,"direction",{get:function(){return r.first(this.criteria).direction},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sort",{get:function(){return r.first(this.criteria).sort},enumerable:!0,configurable:!0}),e.parse=function(t){return new e(t)},e.prototype.putInQueryBuilder=function(e){o.Assert.exists(e),e.sortCriteria=this.toString().split(";").join(",")},e.prototype.toString=function(){return this.criteria.map(function(e){return e.direction?e.sort+" "+e.direction:""+e.sort}).join(";")},e.prototype.equals=function(e){return e.toString()==this.toString()},e}();t.SortCriteria=u}});