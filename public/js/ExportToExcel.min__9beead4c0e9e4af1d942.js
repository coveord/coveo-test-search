webpackJsonpCoveo__temporary([71],{250:function(t,o,e){"use strict";function n(t){b=t}var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),i=this&&this.__assign||Object.assign||function(t){for(var o,e=1,n=arguments.length;e<n;e++){o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t};Object.defineProperty(o,"__esModule",{value:!0});var s=e(7),l=e(8),c=e(55),a=e(10),u=e(2),p=e(6),f=e(0),d=e(3);e(610);var m=e(12),x=e(19),v=e(30),h=e(101),b=function(){return document.createElement("a")};o.setCreateAnchor=n;var y=function(t){function o(e,n,r,i){var s=t.call(this,e,o.ID,r)||this;return s.element=e,s.options=n,s.bindings=r,s._window=i,s._window=s._window||window,s.options=l.ComponentOptions.initComponentOptions(e,o,n),s.bind.onRootElement(c.SettingsEvents.settingsPopulateMenu,function(t){t.menuData.push({text:p.l("ExportToExcel"),className:"coveo-export-to-excel",tooltip:p.l("ExportToExcelDescription"),onOpen:function(){return s.download()},svgIcon:m.SVGIcons.icons.dropdownExport,svgIconClassName:"coveo-export-to-excel-svg"})}),s}return r(o,t),o.prototype.download=function(){var t=this,o=this.buildExcelQuery();this.logger.debug("Performing query following 'Export to Excel' click");var e=this.queryController.getEndpoint();this.usageAnalytics.logCustomEvent(a.analyticsActionCauseList.exportToExcel,{},this.element),e.fetchBinary(o).then(function(o){return t.downloadExcelFile(o)})},o.prototype.buildExcelQuery=function(){var t=this.queryController.getLastQuery();return t=f.omit(t,["numberOfResults","fieldsToInclude"]),this.options.fieldsToInclude&&(t.fieldsToInclude=this.options.fieldsToInclude),i({},t,{format:"xlsx",numberOfResults:this.options.numberOfResults})},o.prototype.downloadExcelFile=function(t){var o=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),e=this.buildExcelFileName();if(window.navigator.msSaveOrOpenBlob)return void window.navigator.msSaveOrOpenBlob(o,e);var n=URL.createObjectURL(o),r=b();r.href=n,r.download=e,r.click(),URL.revokeObjectURL(n)},o.prototype.buildExcelFileName=function(){var t=h().utc();return"query--"+t.format("YYYY")+"-"+t.format("MM")+"-"+t.format("DD")+"--"+t.format("HH")+"-"+t.format("mm")+"-"+t.format("ss")+".xlsx"},o.create=function(t,e,n){return new o(t,e,v.get(n,x.SearchInterface).getBindings())},o.ID="ExportToExcel",o.doExport=function(){d.exportGlobally({ExportToExcel:o})},o.options={numberOfResults:l.ComponentOptions.buildNumberOption({defaultValue:100,min:1}),fieldsToInclude:l.ComponentOptions.buildFieldsOption()},o}(s.Component);o.ExportToExcel=y,u.Initialization.registerAutoCreateComponent(y)},610:function(t,o){}});
//# sourceMappingURL=ExportToExcel.min__9beead4c0e9e4af1d942.js.map