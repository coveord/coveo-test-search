webpackJsonpCoveo__temporary([42],{245:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0}),o(502);var i=o(0),s=o(33),r=o(3),l=o(5),u=o(13),a=o(1),c=o(4),p=o(10),d=o(7),m=o(8),f=o(2),g=o(501),b=function(e){function t(o,n,r){var u=e.call(this,o,t.ID,r)||this;u.options=n,u.options&&"omniboxSuggestionOptions"in u.options&&(u.options=i.extend(u.options,u.options.omniboxSuggestionOptions)),u.options=m.ComponentOptions.initComponentOptions(o,t,n),l.Assert.check(c.Utils.isCoveoField(u.options.field),u.options.field+" is not a valid field"),u.options.onSelect=u.options.onSelect||u.onRowSelection;var p,d=function(e){var t=a.$$("div",{className:"magic-box-suggestion coveo-omnibox-selectable coveo-top-field-suggestion-row"});return e.data&&(t.el.innerHTML=e.data),t.el.outerHTML};if(null==u.options.headerTitle)p={row:d};else{p={header:{template:function(){var e=a.$$("div",{className:"coveo-top-field-suggestion-header"}),t=a.$$("span",{className:"coveo-icon-top-field"}),o=a.$$("span",{className:"coveo-caption"});return u.options.headerTitle&&o.text(u.options.headerTitle),e.append(t.el),e.append(o.el),e.el.outerHTML},title:u.options.headerTitle},row:d}}return u.suggestionForOmnibox=new g.SuggestionForOmnibox(p,function(e,t){u.options.onSelect.call(u,e,t)},function(e,t){u.onRowTab(e,t)}),u.bind.onRootElement(s.OmniboxEvents.populateOmnibox,function(e){return u.handlePopulateOmnibox(e)}),u}return n(t,e),t.prototype.selectSuggestion=function(e){if(this.currentlyDisplayedSuggestions)if(isNaN(e))this.currentlyDisplayedSuggestions[e]&&a.$$(this.currentlyDisplayedSuggestions[e].element).trigger("click");else{var t=i.findWhere(this.currentlyDisplayedSuggestions,{pos:e});t&&a.$$(t.element).trigger("click")}},t.prototype.handlePopulateOmnibox=function(e){var t=this;l.Assert.exists(e);var o=e.completeQueryExpression.word,n=new Promise(function(n){t.queryController.getEndpoint().listFieldValues(t.buildListFieldValueRequest(o)).then(function(o){var s=t.suggestionForOmnibox.buildOmniboxElement(o,e);t.currentlyDisplayedSuggestions={},s?(i.map(a.$$(s).findAll(".coveo-omnibox-selectable"),function(e,o){t.currentlyDisplayedSuggestions[a.$$(e).text()]={element:e,pos:o}}),n({element:s,zIndex:t.options.omniboxZIndex})):n({element:void 0})}).catch(function(){n({element:void 0})})});e.rows.push({deferred:n})},t.prototype.onRowSelection=function(e,t){t.closeOmnibox(),this.queryStateModel.set(u.QueryStateModel.attributesEnum.q,e),this.usageAnalytics.logSearchEvent(p.analyticsActionCauseList.omniboxField,{}),this.queryController.executeQuery()},t.prototype.onRowTab=function(e,t){t.clear(),t.closeOmnibox(),this.queryStateModel.set(u.QueryStateModel.attributesEnum.q,""+e),this.usageAnalytics.logCustomEvent(p.analyticsActionCauseList.omniboxField,{},this.element)},t.prototype.buildListFieldValueRequest=function(e){return{field:this.options.field,ignoreAccents:!0,sortCriteria:"occurrences",maximumNumberOfValues:this.options.numberOfSuggestions,patternType:"Wildcards",pattern:"*"+e+"*",queryOverride:this.options.queryOverride}},t.ID="FieldSuggestions",t.doExport=function(){r.exportGlobally({FieldSuggestions:t})},t.options={field:m.ComponentOptions.buildFieldOption({required:!0}),queryOverride:m.ComponentOptions.buildQueryExpressionOption({defaultValue:""}),omniboxZIndex:m.ComponentOptions.buildNumberOption({defaultValue:51,min:0}),headerTitle:m.ComponentOptions.buildLocalizedStringOption(),numberOfSuggestions:m.ComponentOptions.buildNumberOption({defaultValue:5,min:1}),onSelect:m.ComponentOptions.buildCustomOption(function(){return null})},t}(d.Component);t.FieldSuggestions=b,f.Initialization.registerAutoCreateComponent(b)},501:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(89),i=o(1),s=o(0),r=function(){function e(e,t,o){this.structure=e,this.onSelect=t,this.onTabPress=o}return e.prototype.buildOmniboxElement=function(e,t){var o;if(0!=e.length){if(o=i.$$("div").el,this.structure.header){var n=this.buildElementHeader();o.appendChild(n)}var r=this.buildRowElements(e,t);s.each(r,function(e){o.appendChild(e)})}return o},e.prototype.buildElementHeader=function(){return i.$$("div",void 0,this.structure.header.template({headerTitle:this.structure.header.title})).el},e.prototype.buildRowElements=function(e,t){var o=this,r=[];return s.each(e,function(e){var s=i.$$("div",void 0,o.structure.row({rawValue:e.value,data:n.DomUtils.highlightElement(e.value,t.completeQueryExpression.word)})).el;i.$$(s).on("click",function(){o.onSelect.call(o,e.value,t)}),i.$$(s).on("keyboardSelect",function(){o.onSelect.call(o,e.value,t)}),i.$$(s).on("tabSelect",function(){o.onTabPress.call(o,e.value,t)}),r.push(s)}),r},e}();t.SuggestionForOmnibox=r},502:function(e,t){}});