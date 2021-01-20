webpackJsonpCoveo__temporary([23,53,55],{136:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),r=t(0);t(561);var s=t(3),i=function(){function e(e,n){var t=this;this.labelElement=o.$$("span",{className:"coveo-form-group-label"}),this.labelElement.text(n),this.element=o.$$("fieldset",{className:"coveo-form-group"},this.labelElement),r.each(e,function(e){t.element.append(e.build())})}return e.doExport=function(){s.exportGlobally({FormGroup:e})},e.prototype.build=function(){return this.element.el},e}();n.FormGroup=i},274:function(e,n,t){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();Object.defineProperty(n,"__esModule",{value:!0}),t(661);var r=t(0),s=t(96),i=t(3),l=t(5),p=t(31),a=t(28),c=t(6),u=t(1),f=t(205),d=t(10),h=t(7),y=t(8),m=t(2),b=t(64),O=t(136),I=t(94),v=function(e){function n(t,o,r){var i=e.call(this,t,n.ID,r)||this;return i.element=t,i.options=o,i.bindings=r,i.preferencePanelCheckboxInputs={},i.preferencePanelRadioInputs={},i.options=y.ComponentOptions.initComponentOptions(t,n,o),i.preferencesPanel=u.$$(i.element).closest(h.Component.computeCssClassNameForType("PreferencesPanel")),i.preferencePanelLocalStorage=new f.StorageUtils(n.ID),l.Assert.exists(i.componentOptionsModel),l.Assert.exists(window.localStorage),l.Assert.exists(i.preferencesPanel),i.preferences=i.preferencePanelLocalStorage.load()||{},i.adjustPreferencesToComponentConfig(),y.ComponentOptions.initComponentOptions(i.element,n,i.options),i.updateComponentOptionsModel(),i.bind.on(i.preferencesPanel,s.PreferencesPanelEvents.savePreferences,function(){return i.save()}),i.bind.on(i.preferencesPanel,s.PreferencesPanelEvents.exitPreferencesWithoutSave,function(){return i.exitWithoutSave()}),i.buildCheckboxesInput(),i.buildRadiosInput(),i}return o(n,e),n.prototype.save=function(){this.fromInputToPreferences(),this.logger.info("Saving preferences",this.preferences),this.preferencePanelLocalStorage.save(this.preferences),this.updateComponentOptionsModel()},n.prototype.exitWithoutSave=function(){this.fromPreferencesToCheckboxInput()},n.prototype.updateComponentOptionsModel=function(){var e=r.pick(this.preferences,"openInOutlook","alwaysOpenInNewWindow"),n=r.pick(this.preferences,"enableQuerySyntax");this.componentOptionsModel.set(a.ComponentOptionsModel.attributesEnum.resultLink,e),this.componentOptionsModel.set(a.ComponentOptionsModel.attributesEnum.searchBox,n)},n.prototype.buildRadiosInput=function(){var e=this;if(this.options.enableQuerySyntax){var n=function(n){return new I.RadioButton(function(t){e.fromPreferenceChangeEventToUsageAnalyticsLog(t.isSelected()?"selected":"unselected",n),e.save(),e.queryController.executeQuery({closeModalBox:!1})},n,"coveo-results-preferences-query-syntax")},t=r.map(["On","Off","Automatic"],function(e){return c.l(e)}),o=r.map(t,function(t){var o=n(t);return e.preferencePanelRadioInputs[t]=o,o}),s=new O.FormGroup(o,c.l("EnableQuerySyntax"));u.$$(this.element).append(s.build()),this.fromPreferencesToRadioInput()}},n.prototype.buildCheckboxesInput=function(){var e=this,n=function(n){var t=new b.Checkbox(function(t){e.fromPreferenceChangeEventToUsageAnalyticsLog(t.isSelected()?"selected":"unselected",n),e.save(),e.queryController.executeQuery({closeModalBox:!1})},n);return e.preferencePanelCheckboxInputs[n]=t,t},t=[];this.options.enableOpenInOutlook&&t.push(n(c.l("OpenInOutlookWhenPossible"))),this.options.enableOpenInNewWindow&&t.push(n(c.l("AlwaysOpenInNewWindow"))),this.element.appendChild(new O.FormGroup(t,c.l("ResultLinks")).build()),this.fromPreferencesToCheckboxInput()},n.prototype.fromInputToPreferences=function(){var e=this;this.preferences=this.preferences||{openInOutlook:!1,alwaysOpenInNewWindow:!1,enableQuerySyntax:void 0},r.each(this.preferencePanelCheckboxInputs,function(n,t){t==c.l("OpenInOutlookWhenPossible")&&(e.isSelected(c.l("OpenInOutlookWhenPossible"),t,n)?e.preferences.openInOutlook=!0:null!=e.preferences.openInOutlook&&(e.preferences.openInOutlook=!1)),t==c.l("AlwaysOpenInNewWindow")&&(e.isSelected(c.l("AlwaysOpenInNewWindow"),t,n)?e.preferences.alwaysOpenInNewWindow=!0:null!=e.preferences.alwaysOpenInNewWindow&&(e.preferences.alwaysOpenInNewWindow=!1))}),r.each(this.preferencePanelRadioInputs,function(n,t){e.isSelected(c.l("On"),t,n)&&(e.preferences.enableQuerySyntax=!0),e.isSelected(c.l("Off"),t,n)&&(e.preferences.enableQuerySyntax=!1),e.isSelected(c.l("Automatic"),t,n)&&delete e.preferences.enableQuerySyntax})},n.prototype.fromPreferencesToCheckboxInput=function(){this.preferences.openInOutlook&&this.preferencePanelCheckboxInputs[c.l("OpenInOutlookWhenPossible")].select(!1),this.preferences.alwaysOpenInNewWindow&&this.preferencePanelCheckboxInputs[c.l("AlwaysOpenInNewWindow")].select(!1)},n.prototype.fromPreferencesToRadioInput=function(){!0===this.preferences.enableQuerySyntax?this.preferencePanelRadioInputs[c.l("On")].select(!1):!1===this.preferences.enableQuerySyntax?this.preferencePanelRadioInputs[c.l("Off")].select(!1):this.preferencePanelRadioInputs[c.l("Automatic")].select(!1)},n.prototype.fromPreferenceChangeEventToUsageAnalyticsLog=function(e,n){this.usageAnalytics.logCustomEvent(d.analyticsActionCauseList.preferencesChange,{preferenceName:n,preferenceType:e},this.element),this.usageAnalytics.logSearchEvent(d.analyticsActionCauseList.preferencesChange,{preferenceName:n,preferenceType:e})},n.prototype.adjustPreferencesToComponentConfig=function(){var e=this,n=!1;this.options.enableOpenInNewWindow||(delete this.preferences.alwaysOpenInNewWindow,n=!0),this.options.enableOpenInOutlook||(delete this.preferences.openInOutlook,n=!0),this.options.enableQuerySyntax||(delete this.preferences.enableQuerySyntax,n=!0),n&&p.Defer.defer(function(){e.save()})},n.prototype.isSelected=function(e,n,t){return e==n&&t.isSelected()},n.ID="ResultsPreferences",n.doExport=function(){i.exportGlobally({ResultsPreferences:n})},n.options={enableOpenInOutlook:y.ComponentOptions.buildBooleanOption({defaultValue:!1}),enableOpenInNewWindow:y.ComponentOptions.buildBooleanOption({defaultValue:!0}),enableQuerySyntax:y.ComponentOptions.buildBooleanOption({defaultValue:!1})},n}(h.Component);n.ResultsPreferences=v,m.Initialization.registerAutoCreateComponent(v)},555:function(e,n){},561:function(e,n){},661:function(e,n){},94:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1);t(555);var r=t(3),s=function(){function e(e,n,t,o){void 0===e&&(e=function(e){}),void 0===o&&(o=n),this.onChange=e,this.label=n,this.name=t,this.id=o,this.buildContent()}return e.doExport=function(){r.exportGlobally({RadioButton:e})},e.prototype.reset=function(){var e=this.isSelected();this.getRadio().checked=!1,e&&this.onChange(this)},e.prototype.select=function(e){void 0===e&&(e=!0);var n=this.isSelected();this.getRadio().checked=!0,!n&&e&&this.onChange(this)},e.prototype.build=function(){return this.element},e.prototype.getElement=function(){return this.element},e.prototype.getValue=function(){return this.label},e.prototype.isSelected=function(){return this.getRadio().checked},e.prototype.getRadio=function(){return o.$$(this.element).find("input")},e.prototype.getLabel=function(){return o.$$(this.element).find("label")},e.prototype.buildContent=function(){var e=this,n=o.$$("div",{className:"coveo-radio"}),t=o.$$("input",{type:"radio",name:this.name,id:this.id}),r=o.$$("label",{className:"coveo-radio-input-label",for:this.id});r.text(this.label),t.on("change",function(){e.onChange(e)}),n.append(t.el),n.append(r.el),this.element=n.el},e}();n.RadioButton=s}});
//# sourceMappingURL=ResultsPreferences.min__e910bafd8c6dbfb3faee.js.map