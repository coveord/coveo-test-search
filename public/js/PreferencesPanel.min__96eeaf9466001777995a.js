webpackJsonpCoveo__temporary([67],{262:function(e,n,t){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=t(7),i=t(8),s=t(54),c=t(97),a=t(2),l=t(6),p=t(1),u=t(3),f=t(26),v=t(0);t(637);var h=t(16),d=t(12),m=function(e){function n(t,o,r,c){void 0===c&&(c=f.ModalBox);var a=e.call(this,t,n.ID,r)||this;return a.element=t,a.options=o,a.ModalBox=c,a.content=[],a.options=i.ComponentOptions.initComponentOptions(t,n,o),a.bind.onRootElement(s.SettingsEvents.settingsPopulateMenu,function(e){e.menuData.push({className:"coveo-preferences-panel",text:l.l("Preferences"),onOpen:function(){return a.open()},onClose:function(){return a.close()},svgIcon:d.SVGIcons.icons.dropdownPreferences,svgIconClassName:"coveo-preferences-panel-svg"})}),a.bind.onRootElement(h.InitializationEvents.afterComponentsInitialization,function(){a.content=p.$$(a.element).children()}),a}return o(n,e),n.prototype.open=function(){var e=this;if(null==this.modalbox){var n=p.$$("div");v.each(this.content,function(e){n.append(e)}),this.modalbox=this.ModalBox.open(n.el,{title:l.l("Preferences"),validation:function(){return e.cleanupOnExit(),!0},body:this.searchInterface.options.modalContainer})}},n.prototype.close=function(){this.modalbox&&(this.cleanupOnExit(),this.modalbox.close(),this.modalbox=null)},n.prototype.save=function(){p.$$(this.element).trigger(c.PreferencesPanelEvents.savePreferences),this.queryController.executeQuery()},n.prototype.cleanupOnExit=function(){p.$$(this.element).trigger(c.PreferencesPanelEvents.exitPreferencesWithoutSave)},n.ID="PreferencesPanel",n.doExport=function(){u.exportGlobally({PreferencesPanel:n})},n.options={},n}(r.Component);n.PreferencesPanel=m,a.Initialization.registerAutoCreateComponent(m)},637:function(e,n){}});
//# sourceMappingURL=PreferencesPanel.min__96eeaf9466001777995a.js.map