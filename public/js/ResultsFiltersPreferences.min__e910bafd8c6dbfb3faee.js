webpackJsonpCoveo__temporary([24,54,55],{136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(0);n(561);var r=n(3),a=function(){function e(e,t){var n=this;this.labelElement=i.$$("span",{className:"coveo-form-group-label"}),this.labelElement.text(t),this.element=i.$$("fieldset",{className:"coveo-form-group"},this.labelElement),o.each(e,function(e){n.element.append(e.build())})}return e.doExport=function(){r.exportGlobally({FormGroup:e})},e.prototype.build=function(){return this.element.el},e}();t.FormGroup=a},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(0),r=n(6);n(573);var a=n(4),s=n(3),c=function(){function e(e,t,n){void 0===e&&(e=function(e){}),this.onChange=e,this.options=t,this.label=n,this.buildContent()}return e.doExport=function(){s.exportGlobally({MultiSelect:e})},e.prototype.build=function(){return this.element},e.prototype.getElement=function(){return this.element},e.prototype.getValue=function(){return o.chain(this.element.options).toArray().filter(function(e){return e.selected}).map(function(e){return e.value}).value()},e.prototype.getUnselectedValues=function(){return o.chain(this.element.options).toArray().filter(function(e){return!e.selected}).map(function(e){return e.value}).value()},e.prototype.setValue=function(e){var t=this.getValue(),n=o.partition(o.toArray(this.element.options),function(e){return o.contains(t,e.value)}),r=o.partition(o.toArray(this.element.options),function(t){return o.contains(e,t.value)});o.each(r[0],function(e){return e.selected=!0}),o.each(r[1],function(e){return e.selected=!1});var s=!1;a.Utils.arrayEqual(n[0],r[0],!1)||(s=!0),a.Utils.arrayEqual(n[1],r[1],!1)||(s=!0),s&&i.$$(this.element).trigger("change")},e.prototype.reset=function(){var e=this.getValue();this.element.selectedIndex=-1,a.Utils.isEmptyArray(e)||i.$$(this.element).trigger("change")},e.prototype.buildContent=function(){var e=this;this.element=i.$$("select",{className:"coveo-multi-select",multiple:"",size:this.options.length.toString()}).el;var t=i.$$("optgroup",{className:"coveo-list-group",label:this.label}),n=o.map(this.options,function(e){return i.$$("option",{value:e,className:"coveo-list-item"},r.l(e))});o.each(n,function(e){return t.append(e.el)}),this.element.appendChild(t.el),i.$$(this.element).on("change",function(){return e.onChange(e)})},e}();t.MultiSelect=c},272:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0}),n(659);var o=n(0),r=n(34),a=n(17),s=n(96),c=n(11),l=n(3),u=n(18),d=n(13),p=n(6),h=n(15),f=n(1),v=n(55),m=n(16),b=n(12),y=n(4),C=n(10),F=n(7),$=n(8),x=n(2),g=n(64),E=n(136),A=n(190),I=n(54),T=function(e){function t(n,i,o){var r=e.call(this,n,t.ID,o)||this;return r.element=n,r.options=i,r.bindings=o,r.preferencePanelCheckboxInput={},r.options=$.ComponentOptions.initComponentOptions(n,t,i),r.preferencePanel=f.$$(r.element).closest(F.Component.computeCssClassNameForType("PreferencesPanel")),r.preferencePanel?(r.preferencePanelLocalStorage=new v.LocalStorageUtils(t.ID),r.mergeLocalPreferencesWithStaticPreferences(),r.bindPreferencePanelEvent(),r.bindBreadcrumbEvent(),r.bindQueryEvent(),r.bind.oneRootElement(a.InitializationEvents.afterComponentsInitialization,function(){return r.createDom()}),r.bind.oneQueryState(u.MODEL_EVENTS.CHANGE_ONE,d.QUERY_STATE_ATTRIBUTES.T,function(){return r.fromPreferencesToCheckboxInput()}),r):(r.logger.warn('Cannot instantiate ResultsFilterPreferences, as there is no "CoveoPreferencesPanel" in your page !'),r)}return i(t,e),t.prototype.createDom=function(){this.container=new E.FormGroup([],p.l("ResultsFilteringExpression")).build(),this.element.appendChild(this.container),this.buildCheckboxesInput(),this.options.showAdvancedFilters&&this.buildAdvancedFilters()},t.prototype.save=function(){this.fromCheckboxInputToPreferences();var e=o.omit(this.preferences,"tab");this.logger.info("Saving preferences",e),this.preferencePanelLocalStorage.save(e)},t.prototype.exitWithoutSave=function(){this.fromPreferencesToCheckboxInput(),this.hideAdvancedFilterBuilder()},t.prototype.bindPreferencePanelEvent=function(){var e=this;this.bind.on(this.preferencePanel,s.PreferencesPanelEvents.savePreferences,function(){return e.save()}),this.bind.on(this.preferencePanel,s.PreferencesPanelEvents.exitPreferencesWithoutSave,function(){return e.exitWithoutSave()})},t.prototype.bindBreadcrumbEvent=function(){var e=this;this.options.includeInBreadcrumb&&(this.bind.onRootElement(r.BreadcrumbEvents.populateBreadcrumb,function(t){return e.handlePopulateBreadcrumb(t)}),this.bind.onRootElement(r.BreadcrumbEvents.clearBreadcrumb,function(){return e.handleClearBreadcrumb()}))},t.prototype.bindQueryEvent=function(){var e=this;this.bind.onRootElement(c.QueryEvents.buildingQuery,function(t){return e.handleBuildingQuery(t)})},t.prototype.handleBuildingQuery=function(e){o.each(this.getActiveFilters(),function(t){y.Utils.isNonEmptyString(t.expression)&&e.queryBuilder.advancedExpression.add(t.expression)})},t.prototype.handlePopulateBreadcrumb=function(e){var t=this.getActiveFilters();if(y.Utils.isNonEmptyArray(t)){var n=f.$$("div",{className:"coveo-results-filter-preferences-breadcrumb"}),i=f.$$("span",{className:"coveo-title"});i.text(p.l("FiltersInYourPreferences")+":"),n.el.appendChild(i.el);var o=f.$$("span",{className:"coveo-values"});n.el.appendChild(o.el);for(var r=0;r<t.length;r++)o.el.appendChild(this.buildBreadcrumb(t[r]));e.breadcrumbs.push({element:n.el})}},t.prototype.handleClearBreadcrumb=function(){this.isFullBreadcrumbClear=!0,o.each(this.getActiveFilters(),function(e){e.selected=!1}),this.fromPreferencesToCheckboxInput(),this.isFullBreadcrumbClear=!1},t.prototype.buildAdvancedFilters=function(){var e=this;this.advancedFilters=f.$$("div",{className:"coveo-advanced-filters"},p.l("Create")).el,this.buildAdvancedFilterInput(),this.buildAdvancedFilterFormValidate(),this.advancedFiltersBuilder=f.$$("div",{className:"coveo-advanced-filters-builder"}).el,this.advancedFiltersBuilder.appendChild(this.advancedFilterFormValidate),f.$$(this.advancedFilters).on("click",function(){return e.openAdvancedFilterSectionOrSaveFilters()});var t=f.$$("a",{href:"https://www.coveo.com/go?dest=adminhelp70&lcid=9&context=10006",className:"coveo-online-help"},"?"),n=f.$$(this.container).find(".coveo-form-group-label");t.insertAfter(n),f.$$(this.advancedFilters).insertAfter(n),this.container.appendChild(this.advancedFiltersBuilder)},t.prototype.buildAdvancedFilterInput=function(){this.advancedFiltersTextInputCaption=new I.TextInput(function(){},p.l("Caption")),this.advancedFiltersTextInputCaption.getInput().setAttribute("required",""),this.advancedFiltersTextInputExpression=new I.TextInput(function(){},p.l("Expression")),this.advancedFiltersTextInputExpression.getInput().setAttribute("required",""),this.advancedFiltersTabSelect=new A.MultiSelect(function(){},this.getAllTabs(),p.l("Tab"))},t.prototype.buildAdvancedFilterFormValidate=function(){var e=this;this.advancedFilterFormValidate=f.$$("form").el;var t=f.$$("input",{type:"submit"}),n=f.$$("span",{className:"coveo-save"},b.SVGIcons.icons.checkboxHookExclusionMore);m.SVGDom.addClassToSVGInContainer(n.el,"coveo-save-svg");var i=f.$$("span",{className:"coveo-close"},b.SVGIcons.icons.checkboxHookExclusionMore);m.SVGDom.addClassToSVGInContainer(i.el,"coveo-close-svg");var r=f.$$("div",{className:"coveo-choice-container coveo-close-and-save"});r.el.appendChild(n.el),r.el.appendChild(i.el);var a=this.advancedFiltersTextInputCaption.build();f.$$(a).addClass("coveo-caption");var s=this.advancedFiltersTabSelect.build();f.$$(s).addClass("coveo-tab");var c=this.advancedFiltersTextInputExpression.build();f.$$(c).addClass("coveo-expression"),o.each([a,c,s,r.el,t.el],function(t){e.advancedFilterFormValidate.appendChild(t)}),n.on("click",function(){t.el.click()}),i.on("click",function(){e.hideAdvancedFilterBuilder()}),f.$$(this.advancedFilterFormValidate).on("submit",function(t){return e.validateAndSaveAdvancedFilter(t)})},t.prototype.getAllTabs=function(){var e=F.Component.getComponentRef("Tab");if(e){var t=f.$$(this.root).findAll("."+F.Component.computeCssClassName(e));return o.map(t,function(e){return F.Component.get(e).options.id})}return[]},t.prototype.getPreferencesBoxInputToBuild=function(){return o.map(this.preferences,function(e){return{label:e.caption,tab:e.tab,expression:e.expression}})},t.prototype.buildCheckboxesInput=function(){var e=this;void 0!=this.preferenceContainer&&this.preferenceContainer.remove();var t=this.getPreferencesBoxInputToBuild();y.Utils.isNonEmptyArray(t)&&(this.preferenceContainer=f.$$("div",{className:"coveo-choices-container"}).el,o.each(t,function(t){var n=new g.Checkbox(function(t){e.save();var n=e.preferences[t.getValue()];e.queryController.firstQuery||e.isFullBreadcrumbClear||(e.fromFilterToAnalyticsEvent(n,n.selected?"selected":"unselected"),e.queryController.executeQuery({closeModalBox:!1}))},t.label);f.$$(n.build()).addClass("coveo-choice-container"),e.preferencePanelCheckboxInput[t.label]=n,e.preferenceContainer.appendChild(n.getElement())}),o.each(f.$$(this.preferenceContainer).findAll(".coveo-choice-container"),function(e){e.appendChild(f.$$("div",{className:"coveo-section coveo-section-edit-delete"}).el)}),f.$$(this.container).append(this.preferenceContainer),this.buildEditAdvancedFilter(),this.buildDeleteAdvancedFilter(),this.fromPreferencesToCheckboxInput())},t.prototype.buildDeleteAdvancedFilter=function(){var e=this;o.each(this.preferences,function(t){if(t.custom){var n=f.$$("span",{className:"coveo-delete"},b.SVGIcons.icons.checkboxHookExclusionMore).el;m.SVGDom.addClassToSVGInContainer(n,"coveo-delete-svg");var i=e.getFilterElementByCaption(t.caption);f.$$(i).find(".coveo-section-edit-delete").appendChild(n),f.$$(n).on("click",function(){return e.confirmDelete(t,i)})}})},t.prototype.buildEditAdvancedFilter=function(){var e=this;o.each(this.preferences,function(t){if(t.custom){var n=f.$$("span",{className:"coveo-edit"},b.SVGIcons.icons.edit);m.SVGDom.addClassToSVGInContainer(n.el,"coveo-edit-svg");var i=e.getFilterElementByCaption(t.caption);f.$$(i).find(".coveo-section-edit-delete").appendChild(n.el),n.on("click",function(){return e.editElement(t,i)})}})},t.prototype.buildBreadcrumb=function(e){var t=this,n=f.$$("span",{className:"coveo-value"}),i=f.$$("span",{className:"coveo-caption"});i.text(e.caption),n.el.appendChild(i.el);var o=f.$$("span",{className:"coveo-clear"},b.SVGIcons.icons.mainClear);n.el.appendChild(o.el);var r=function(){e.selected=!1,t.fromFilterToAnalyticsEvent(e,"cleared from breadcrumb"),t.fromPreferencesToCheckboxInput()};return(new h.AccessibleButton).withElement(n).withLabel(p.l("RemoveFilterOn",e.caption)).withSelectAction(r).build(),n.el},t.prototype.confirmDelete=function(e,t){if(confirm(p.l("AreYouSureDeleteFilter",e.caption,e.expression))){var n=e.selected;this.deleteFilterPreference(e,t),n&&(this.fromFilterToAnalyticsEvent(e,"deleted"),this.queryController.executeQuery({closeModalBox:!1}))}},t.prototype.editElement=function(e,t){var n=this.preferences[e.caption].caption,i=this.preferences[e.caption].tab,o=this.preferences[e.caption].expression;this.deleteFilterPreference(e,t),this.openAdvancedFilterSectionOrSaveFilters(),this.populateEditSection({tab:i,caption:n,expression:o})},t.prototype.populateEditSection=function(e){void 0===e&&(e={tab:[""],caption:"",expression:""}),this.advancedFiltersTextInputCaption.setValue(e.caption),this.advancedFiltersTextInputExpression.setValue(e.expression),this.advancedFiltersTabSelect.setValue(e.tab)},t.prototype.deleteFilterPreference=function(e,t){this.preferencePanelLocalStorage.remove(e.caption),delete this.preferences[e.caption],f.$$(f.$$(t).closest(".coveo-choice-container")).detach()},t.prototype.openAdvancedFilterSectionOrSaveFilters=function(){f.$$(this.advancedFiltersBuilder).hasClass("coveo-active")?(f.$$(f.$$(this.advancedFilterFormValidate).find("input[type=submit]")).trigger("click"),this.hideAdvancedFilterBuilder()):(this.populateEditSection(),this.showAdvancedFilterBuilder())},t.prototype.validateAndSaveAdvancedFilter=function(e){e.preventDefault(),this.hideAdvancedFilterBuilder();var t=this.advancedFiltersTextInputCaption.getValue(),n=this.advancedFiltersTextInputExpression.getValue(),i=this.advancedFiltersTabSelect.getValue();this.preferences[t]={caption:t,custom:!0,expression:n,tab:i,selected:!0},this.buildCheckboxesInput(),this.save(),this.queryStateModel.set(d.QueryStateModel.attributesEnum.t,this.getActiveTab()),this.advancedFiltersTextInputCaption.reset(),this.advancedFiltersTextInputExpression.reset(),this.advancedFiltersTabSelect.reset(),this.container.appendChild(this.advancedFiltersBuilder),this.fromFilterToAnalyticsEvent(this.preferences[t],"saved"),this.queryController.executeQuery({closeModalBox:!1})},t.prototype.fromPreferencesToCheckboxInput=function(){var e=this;o.each(this.getActiveFilters(),function(t){e.preferencePanelCheckboxInput[t.caption].select()}),o.each(this.getInactiveFilters(),function(t){e.preferencePanelCheckboxInput[t.caption].reset()}),o.each(this.getDormantFilters(),function(t){e.preferencePanelCheckboxInput[t.caption].select()})},t.prototype.fromCheckboxInputToPreferences=function(){if(this.preferencePanelCheckboxInput){var e=o.map(o.filter(this.preferencePanelCheckboxInput,function(e){return e.isSelected()}),function(e){return e.getValue()});o.each(this.preferences,function(t){o.contains(e,t.caption)?t.selected=!0:t.selected=!1})}},t.prototype.getDormantFilters=function(){var e=this,t=this.getActiveTab();return o.filter(this.preferences,function(n){return n.selected&&!e.filterIsInActiveTab(n,t)})},t.prototype.getActiveFilters=function(){var e=this,t=this.getActiveTab();return o.filter(this.preferences,function(n){return n.selected&&e.filterIsInActiveTab(n,t)})},t.prototype.getInactiveFilters=function(){var e=this,t=this.getActiveTab();return o.filter(this.preferences,function(n){return!n.selected||!e.filterIsInActiveTab(n,t)})},t.prototype.getActiveTab=function(){return this.queryStateModel.get(d.QueryStateModel.attributesEnum.t)},t.prototype.filterIsInActiveTab=function(e,t){return e.tab=o.compact(e.tab),o.contains(e.tab,t)||y.Utils.isEmptyArray(e.tab)},t.prototype.getFilterElementByCaption=function(e){return f.$$(this.preferenceContainer).find("input[value='"+e+"']").parentElement},t.prototype.fromResultsFilterOptionToResultsPreferenceInterface=function(){var e={};return o.each(this.options.filters,function(t,n){e[n]={expression:t.expression,tab:t.tab,selected:!!t.selected&&t.selected,custom:!1,caption:n}}),e},t.prototype.mergeLocalPreferencesWithStaticPreferences=function(){var e=this.fromResultsFilterOptionToResultsPreferenceInterface(),t=this.preferencePanelLocalStorage.load(),n=o.filter(t,function(t){var n=t.custom,i=o.find(e,function(e){return e.caption==t.caption});return n||void 0!=i}),i={};o.each(n,function(e){i[e.caption]={expression:e.expression,tab:e.tab,selected:e.selected,custom:e.custom,caption:e.caption}}),this.preferences=y.Utils.extendDeep(e,i)},t.prototype.fromFilterToAnalyticsEvent=function(e,t){this.usageAnalytics.logSearchEvent(C.analyticsActionCauseList.customfiltersChange,{customFilterName:e.caption,customFilterExpression:e.expression,customFilterType:t})},t.prototype.enlargeModalBox=function(){var e=f.$$(document.body).find(".coveo-modal-container");e&&f.$$(e).addClass("coveo-mod-big")},t.prototype.shrinkModalBox=function(){var e=f.$$(document.body).find(".coveo-modal-container");e&&f.$$(e).removeClass("coveo-mod-big")},t.prototype.showAdvancedFilterBuilder=function(){this.advancedFiltersBuilder&&(f.$$(this.advancedFiltersBuilder).addClass("coveo-active"),this.enlargeModalBox())},t.prototype.hideAdvancedFilterBuilder=function(){this.advancedFiltersBuilder&&(f.$$(this.advancedFiltersBuilder).removeClass("coveo-active"),this.shrinkModalBox())},t.ID="ResultsFiltersPreferences",t.doExport=function(){l.exportGlobally({ResultsFiltersPreferences:t})},t.options={includeInBreadcrumb:$.ComponentOptions.buildBooleanOption({defaultValue:!0}),showAdvancedFilters:$.ComponentOptions.buildBooleanOption({defaultValue:!0}),filters:$.ComponentOptions.buildJsonOption()},t}(F.Component);t.ResultsFiltersPreferences=T,x.Initialization.registerAutoCreateComponent(T)},561:function(e,t){},573:function(e,t){},659:function(e,t){}});
//# sourceMappingURL=ResultsFiltersPreferences.min__e910bafd8c6dbfb3faee.js.map