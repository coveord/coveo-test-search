webpackJsonpCoveo__temporary([47],{195:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=o(366),s=o(6),r=o(8),l=o(5),u=o(4),a=o(32),c=o(12),p=o(2),d=o(9),m=o(1),f=o(0),g=o(3);o(367);var b=function(e){function t(o,n,s){var c=e.call(this,o,t.ID,s)||this;c.options=n,c.options&&"omniboxSuggestionOptions"in c.options&&(c.options=f.extend(c.options,c.options.omniboxSuggestionOptions)),c.options=r.ComponentOptions.initComponentOptions(o,t,n),l.Assert.check(u.Utils.isCoveoField(c.options.field),c.options.field+" is not a valid field"),c.options.onSelect=c.options.onSelect||c.onRowSelection;var p,d=function(e){var t=m.$$("div",{className:"magic-box-suggestion coveo-omnibox-selectable coveo-top-field-suggestion-row"});return e.data&&(t.el.innerHTML=e.data),t.el.outerHTML};if(null==c.options.headerTitle)p={row:d};else{p={header:{template:function(){var e=m.$$("div",{className:"coveo-top-field-suggestion-header"}),t=m.$$("span",{className:"coveo-icon-top-field"}),o=m.$$("span",{className:"coveo-caption"});return c.options.headerTitle&&o.text(c.options.headerTitle),e.append(t.el),e.append(o.el),e.el.outerHTML},title:c.options.headerTitle},row:d}}return c.suggestionForOmnibox=new i.SuggestionForOmnibox(p,function(e,t){c.options.onSelect.call(c,e,t)},function(e,t){c.onRowTab(e,t)}),c.bind.onRootElement(a.OmniboxEvents.populateOmnibox,function(e){return c.handlePopulateOmnibox(e)}),c}return n(t,e),t.prototype.selectSuggestion=function(e){if(this.currentlyDisplayedSuggestions)if(isNaN(e))this.currentlyDisplayedSuggestions[e]&&m.$$(this.currentlyDisplayedSuggestions[e].element).trigger("click");else{var t=f.findWhere(this.currentlyDisplayedSuggestions,{pos:e});t&&m.$$(t.element).trigger("click")}},t.prototype.handlePopulateOmnibox=function(e){var t=this;l.Assert.exists(e);var o=e.completeQueryExpression.word,n=new Promise(function(n){t.queryController.getEndpoint().listFieldValues(t.buildListFieldValueRequest(o)).then(function(o){var i=t.suggestionForOmnibox.buildOmniboxElement(o,e);t.currentlyDisplayedSuggestions={},i?(f.map(m.$$(i).findAll(".coveo-omnibox-selectable"),function(e,o){t.currentlyDisplayedSuggestions[m.$$(e).text()]={element:e,pos:o}}),n({element:i,zIndex:t.options.omniboxZIndex})):n({element:void 0})}).catch(function(){n({element:void 0})})});e.rows.push({deferred:n})},t.prototype.onRowSelection=function(e,t){t.clear(),t.closeOmnibox(),this.queryStateModel.set(c.QueryStateModel.attributesEnum.q,e),this.usageAnalytics.logSearchEvent(d.analyticsActionCauseList.omniboxField,{}),this.queryController.executeQuery()},t.prototype.onRowTab=function(e,t){t.clear(),t.closeOmnibox(),this.queryStateModel.set(c.QueryStateModel.attributesEnum.q,""+e),this.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.omniboxField,{},this.element)},t.prototype.buildListFieldValueRequest=function(e){return{field:this.options.field,ignoreAccents:!0,sortCriteria:"occurrences",maximumNumberOfValues:this.options.numberOfSuggestions,patternType:"Wildcards",pattern:"*"+e+"*",queryOverride:this.options.queryOverride}},t.ID="FieldSuggestions",t.doExport=function(){g.exportGlobally({FieldSuggestions:t})},t.options={field:r.ComponentOptions.buildFieldOption({required:!0}),queryOverride:r.ComponentOptions.buildQueryExpressionOption({defaultValue:""}),omniboxZIndex:r.ComponentOptions.buildNumberOption({defaultValue:51,min:0}),headerTitle:r.ComponentOptions.buildLocalizedStringOption(),numberOfSuggestions:r.ComponentOptions.buildNumberOption({defaultValue:5,min:1}),onSelect:r.ComponentOptions.buildCustomOption(function(){return null})},t}(s.Component);t.FieldSuggestions=b,p.Initialization.registerAutoCreateComponent(b)},366:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(64),i=o(1),s=o(0),r=function(){function e(e,t,o){this.structure=e,this.onSelect=t,this.onTabPress=o}return e.prototype.buildOmniboxElement=function(e,t){var o;if(0!=e.length){if(o=i.$$("div").el,this.structure.header){var n=this.buildElementHeader();o.appendChild(n)}var r=this.buildRowElements(e,t);s.each(r,function(e){o.appendChild(e)})}return o},e.prototype.buildElementHeader=function(){return i.$$("div",void 0,this.structure.header.template({headerTitle:this.structure.header.title})).el},e.prototype.buildRowElements=function(e,t){var o=this,r=[];return s.each(e,function(e){var s=i.$$("div",void 0,o.structure.row({rawValue:e.value,data:n.DomUtils.highlightElement(e.value,t.completeQueryExpression.word)})).el;i.$$(s).on("click",function(){o.onSelect.call(o,e.value,t)}),i.$$(s).on("keyboardSelect",function(){o.onSelect.call(o,e.value,t)}),i.$$(s).on("tabSelect",function(){o.onTabPress.call(o,e.value,t)}),r.push(s)}),r},e}();t.SuggestionForOmnibox=r},367:function(e,t){}});