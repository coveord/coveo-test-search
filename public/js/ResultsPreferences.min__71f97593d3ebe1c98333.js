webpackJsonpCoveo__temporary([23,55,57],{113:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1);t(523);var r=t(3),s=function(){function e(e,n,t){void 0===e&&(e=function(e){}),this.onChange=e,this.label=n,this.name=t,this.buildContent()}return e.doExport=function(){r.exportGlobally({RadioButton:e})},e.prototype.reset=function(){var e=this.isSelected();this.getRadio().checked=!1,e&&this.onChange(this)},e.prototype.select=function(e){void 0===e&&(e=!0);var n=this.isSelected();this.getRadio().checked=!0,!n&&e&&this.onChange(this)},e.prototype.build=function(){return this.element},e.prototype.getElement=function(){return this.element},e.prototype.getValue=function(){return this.label},e.prototype.isSelected=function(){return this.getRadio().checked},e.prototype.getRadio=function(){return o.$$(this.element).find("input")},e.prototype.getLabel=function(){return o.$$(this.element).find("label")},e.prototype.buildContent=function(){var e=this,n=o.$$("div",{className:"coveo-radio"}),t=o.$$("input",{type:"radio",name:this.name,id:this.label}),r=o.$$("label",{className:"coveo-radio-input-label",for:this.label});r.text(this.label),t.on("change",function(){e.onChange(e)}),n.append(t.el),n.append(r.el),this.element=n.el},e}();n.RadioButton=s},132:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),r=t(0);t(528);var s=t(3),i=function(){function e(e,n){var t=this;this.labelElement=o.$$("span",{className:"coveo-form-group-label"}),this.labelElement.text(n),this.element=o.$$("fieldset",{className:"coveo-form-group"},this.labelElement),r.each(e,function(e){t.element.append(e.build())})}return e.doExport=function(){s.exportGlobally({FormGroup:e})},e.prototype.build=function(){return this.element.el},e}();n.FormGroup=i},254:function(e,n,t){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=t(6),s=t(8),i=t(28),l=t(44),p=t(90),a=t(9),c=t(2),u=t(5),f=t(7),d=t(1),h=t(0),y=t(3),b=t(29),m=t(60),O=t(113),I=t(132);t(613);var v=function(e){function n(t,o,i){var a=e.call(this,t,n.ID,i)||this;return a.element=t,a.options=o,a.bindings=i,a.preferencePanelCheckboxInputs={},a.preferencePanelRadioInputs={},a.options=s.ComponentOptions.initComponentOptions(t,n,o),a.preferencesPanel=d.$$(a.element).closest(r.Component.computeCssClassNameForType("PreferencesPanel")),a.preferencePanelLocalStorage=new l.LocalStorageUtils(n.ID),u.Assert.exists(a.componentOptionsModel),u.Assert.exists(window.localStorage),u.Assert.exists(a.preferencesPanel),a.preferences=a.preferencePanelLocalStorage.load()||{},a.adjustPreferencesToComponentConfig(),s.ComponentOptions.initComponentOptions(a.element,n,a.options),a.updateComponentOptionsModel(),a.bind.on(a.preferencesPanel,p.PreferencesPanelEvents.savePreferences,function(){return a.save()}),a.bind.on(a.preferencesPanel,p.PreferencesPanelEvents.exitPreferencesWithoutSave,function(){return a.exitWithoutSave()}),a.buildCheckboxesInput(),a.buildRadiosInput(),a}return o(n,e),n.prototype.save=function(){this.fromInputToPreferences(),this.logger.info("Saving preferences",this.preferences),this.preferencePanelLocalStorage.save(this.preferences),this.updateComponentOptionsModel()},n.prototype.exitWithoutSave=function(){this.fromPreferencesToCheckboxInput()},n.prototype.updateComponentOptionsModel=function(){var e=h.pick(this.preferences,"openInOutlook","alwaysOpenInNewWindow"),n=h.pick(this.preferences,"enableQuerySyntax");this.componentOptionsModel.set(i.ComponentOptionsModel.attributesEnum.resultLink,e),this.componentOptionsModel.set(i.ComponentOptionsModel.attributesEnum.searchBox,n)},n.prototype.buildRadiosInput=function(){var e=this;if(this.options.enableQuerySyntax){var n=function(n){return new O.RadioButton(function(t){e.fromPreferenceChangeEventToUsageAnalyticsLog(t.isSelected()?"selected":"unselected",n),e.save(),e.queryController.executeQuery({closeModalBox:!1})},n,"coveo-results-preferences-query-syntax")},t=h.map(["On","Off","Automatic"],function(e){return f.l(e)}),o=h.map(t,function(t){var o=n(t);return e.preferencePanelRadioInputs[t]=o,o}),r=new I.FormGroup(o,f.l("EnableQuerySyntax"));d.$$(this.element).append(r.build()),this.fromPreferencesToRadioInput()}},n.prototype.buildCheckboxesInput=function(){var e=this,n=function(n){var t=new m.Checkbox(function(t){e.fromPreferenceChangeEventToUsageAnalyticsLog(t.isSelected()?"selected":"unselected",n),e.save(),e.queryController.executeQuery({closeModalBox:!1})},n);return e.preferencePanelCheckboxInputs[n]=t,t},t=[];this.options.enableOpenInOutlook&&t.push(n(f.l("OpenInOutlookWhenPossible"))),this.options.enableOpenInNewWindow&&t.push(n(f.l("AlwaysOpenInNewWindow"))),this.element.appendChild(new I.FormGroup(t,f.l("ResultLinks")).build()),this.fromPreferencesToCheckboxInput()},n.prototype.fromInputToPreferences=function(){var e=this;this.preferences=this.preferences||{openInOutlook:!1,alwaysOpenInNewWindow:!1,enableQuerySyntax:void 0},h.each(this.preferencePanelCheckboxInputs,function(n,t){t==f.l("OpenInOutlookWhenPossible")&&(e.isSelected(f.l("OpenInOutlookWhenPossible"),t,n)?e.preferences.openInOutlook=!0:null!=e.preferences.openInOutlook&&(e.preferences.openInOutlook=!1)),t==f.l("AlwaysOpenInNewWindow")&&(e.isSelected(f.l("AlwaysOpenInNewWindow"),t,n)?e.preferences.alwaysOpenInNewWindow=!0:null!=e.preferences.alwaysOpenInNewWindow&&(e.preferences.alwaysOpenInNewWindow=!1))}),h.each(this.preferencePanelRadioInputs,function(n,t){e.isSelected(f.l("On"),t,n)&&(e.preferences.enableQuerySyntax=!0),e.isSelected(f.l("Off"),t,n)&&(e.preferences.enableQuerySyntax=!1),e.isSelected(f.l("Automatic"),t,n)&&delete e.preferences.enableQuerySyntax})},n.prototype.fromPreferencesToCheckboxInput=function(){this.preferences.openInOutlook&&this.preferencePanelCheckboxInputs[f.l("OpenInOutlookWhenPossible")].select(!1),this.preferences.alwaysOpenInNewWindow&&this.preferencePanelCheckboxInputs[f.l("AlwaysOpenInNewWindow")].select(!1)},n.prototype.fromPreferencesToRadioInput=function(){!0===this.preferences.enableQuerySyntax?this.preferencePanelRadioInputs[f.l("On")].select(!1):!1===this.preferences.enableQuerySyntax?this.preferencePanelRadioInputs[f.l("Off")].select(!1):this.preferencePanelRadioInputs[f.l("Automatic")].select(!1)},n.prototype.fromPreferenceChangeEventToUsageAnalyticsLog=function(e,n){this.usageAnalytics.logCustomEvent(a.analyticsActionCauseList.preferencesChange,{preferenceName:n,preferenceType:e},this.element),this.usageAnalytics.logSearchEvent(a.analyticsActionCauseList.preferencesChange,{preferenceName:n,preferenceType:e})},n.prototype.adjustPreferencesToComponentConfig=function(){var e=this,n=!1;this.options.enableOpenInNewWindow||(delete this.preferences.alwaysOpenInNewWindow,n=!0),this.options.enableOpenInOutlook||(delete this.preferences.openInOutlook,n=!0),this.options.enableQuerySyntax||(delete this.preferences.enableQuerySyntax,n=!0),n&&b.Defer.defer(function(){e.save()})},n.prototype.isSelected=function(e,n,t){return e==n&&t.isSelected()},n.ID="ResultsPreferences",n.doExport=function(){y.exportGlobally({ResultsPreferences:n})},n.options={enableOpenInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),enableOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!0}),enableQuerySyntax:s.ComponentOptions.buildBooleanOption({defaultValue:!1})},n}(r.Component);n.ResultsPreferences=v,c.Initialization.registerAutoCreateComponent(v)},523:function(e,n){},528:function(e,n){},613:function(e,n){}});