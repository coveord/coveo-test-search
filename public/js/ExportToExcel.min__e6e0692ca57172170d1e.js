webpackJsonpCoveo__temporary([69],{236:function(o,t,e){"use strict";var n=this&&this.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)t.hasOwnProperty(e)&&(o[e]=t[e])};return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=e(6),r=e(8),s=e(53),l=e(9),c=e(2),p=e(7),u=e(0),a=e(3);e(562);var d=e(12),f=e(18),x=e(24),m=function(o){function t(e,n,i,l){var c=o.call(this,e,t.ID,i)||this;return c.element=e,c.options=n,c.bindings=i,c._window=l,c._window=c._window||window,c.options=r.ComponentOptions.initComponentOptions(e,t,n),c.bind.onRootElement(s.SettingsEvents.settingsPopulateMenu,function(o){o.menuData.push({text:p.l("ExportToExcel"),className:"coveo-export-to-excel",tooltip:p.l("ExportToExcelDescription"),onOpen:function(){return c.download()},svgIcon:d.SVGIcons.icons.dropdownExport,svgIconClassName:"coveo-export-to-excel-svg"})}),c}return n(t,o),t.prototype.download=function(){var o=this.queryController.getLastQuery();if(o){o=u.omit(o,["numberOfResults","fieldsToInclude"]),this.options.fieldsToInclude&&(o.fieldsToInclude=this.options.fieldsToInclude),this.logger.debug("Performing query following 'Export to Excel' click");var t=this.queryController.getEndpoint();this.usageAnalytics.logCustomEvent(l.analyticsActionCauseList.exportToExcel,{},this.element),this._window.location.replace(t.getExportToExcelLink(o,this.options.numberOfResults))}},t.create=function(o,e,n){return new t(o,e,x.get(n,f.SearchInterface).getBindings())},t.ID="ExportToExcel",t.doExport=function(){a.exportGlobally({ExportToExcel:t})},t.options={numberOfResults:r.ComponentOptions.buildNumberOption({defaultValue:100,min:1}),fieldsToInclude:r.ComponentOptions.buildFieldsOption()},t}(i.Component);t.ExportToExcel=m,c.Initialization.registerAutoCreateComponent(m)},562:function(o,t){}});