webpackJsonpCoveo__temporary([36],{259:function(e,t,o){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=o(23);o(632);var s=o(0),r=o(11),l=o(3),u=o(13),a=o(1),d=o(21),p=o(4),c=o(7),h=o(8),m=o(2),f=o(61),v=o(633),w=o(634),y=function(e){function t(o,i,n){var s=e.call(this,o,t.ID,n)||this;return s.element=o,s.options=i,s.groupByIndex=[],s.rowId="",s.columnId="",s.selectedRowValue=void 0,s.selectedColumnValue=void 0,s.numberOfRows=0,s.numberOfColumns=0,s.options=h.ComponentOptions.initComponentOptions(o,t,i),s.options.previewTemplate||(s.options.previewTemplate=new w.DefaultMatrixResultPreviewTemplate(s.options.computedField,s.options.computedFieldFormat)),s.options.previewSortField||(s.options.previewSortField=s.options.computedField),s.options.columnFieldValues.length!=s.options.columnLabels.length&&(s.options.columnLabels=s.options.columnFieldValues),s.buildMatrix(),null==s.options.rowField?s.logger.error("'rowField' option is required in the Matrix component"):null==s.options.columnField?s.logger.error("'columnField' option is required in the Matrix component"):null==s.options.computedField?s.logger.error("'computedField' option is required in the Matrix component"):(s.bindEvents(),s.initQueryState()),s}return i(t,e),t.prototype.selectCell=function(e,t){var o,i;0!==e&&e!==this.numberOfRows-1&&(o=this.getRowValue(e)),0!==t&&t!==this.numberOfColumns-1&&(i=this.getColumnValue(t)),o&&this.isRowFacetPresent()?this.queryStateModel.set(this.rowId,[o]):(this.selectedRowValue=o,this.queryStateModel.set(this.rowId,[])),i&&this.isColumnFacetPresent()?this.queryStateModel.set(this.columnId,[i]):(this.selectedColumnValue=i,this.queryStateModel.set(this.columnId,[]))},t.prototype.getSelectedColumnValue=function(){return this.selectedColumnValue},t.prototype.getSelectedRowValue=function(){return this.selectedRowValue},t.prototype.getCellElement=function(e,t){return this.data[e][t].getHTML()},t.prototype.getCellValue=function(e,t){var o=this.getCellElement(e,t);return a.$$(o).text()},t.prototype.drawMatrix=function(){var e=this,t=a.$$("div",{className:"coveo-matrix-row matrix-header-row"});this.drawRow(t.el,0);for(var o=this.options.enableColumnTotals?this.numberOfRows-1:this.numberOfRows,i=1;i<o;i++){var n=a.$$("div",{className:"coveo-matrix-row"}).el;this.drawRow(n,i)}if(this.options.enableColumnTotals){var r=a.$$("div",{className:"coveo-matrix-row matrix-total-row"}).el;this.drawRow(r,this.numberOfRows-1)}if(""!==this.options.cellFontSize){var l=a.$$(this.element).findAll(".coveo-matrix-cell");s.each(l,function(t){t.style.fontSize=e.options.cellFontSize})}},t.prototype.bindEvents=function(){var e=this;this.bind.onRootElement(r.QueryEvents.buildingQuery,function(t){return e.handleBuildingQuery(t)}),this.bind.onRootElement(r.QueryEvents.doneBuildingQuery,function(t){return e.handleDoneBuildingQuery(t)}),this.bind.onRootElement(r.QueryEvents.deferredQuerySuccess,function(t){return e.handleDeferredQuerySuccess(t)})},t.prototype.initQueryState=function(){this.rowId=u.QueryStateModel.getFacetId(this.options.rowField),this.columnId=u.QueryStateModel.getFacetId(this.options.columnField),this.queryStateModel.registerNewAttribute(this.rowId,[]),this.queryStateModel.registerNewAttribute(this.columnId,[])},t.prototype.buildMatrix=function(){this.buildTitle(),this.buildBody(),this.data=new Array,this.addHeaderRow()},t.prototype.buildTitle=function(){var e=this.options.title?this.options.title:"",t=a.$$("div",{className:"coveo-matrix-title"},e).el;this.element.appendChild(t)},t.prototype.buildBody=function(){var e=a.$$("div",{className:"coveo-matrix"}).el;this.element.appendChild(e)},t.prototype.handleBuildingQuery=function(e){this.areFacetsPresent()||(this.selectedRowValue&&!this.isRowFacetPresent()&&e.queryBuilder.advancedExpression.addFieldExpression(this.options.rowField,"=",[this.selectedRowValue]),this.selectedColumnValue&&!this.isColumnFacetPresent()&&e.queryBuilder.advancedExpression.addFieldExpression(this.options.columnField,"=",[this.selectedColumnValue]))},t.prototype.handleDoneBuildingQuery=function(e){this.groupByIndex=[],this.addMainGroubByRequest(e.queryBuilder),this.addColumnsGroupByRequests(e.queryBuilder)},t.prototype.handleDeferredQuerySuccess=function(e){this.reset(),this.parseResults(e.results),this.addTotals(),this.drawMatrix(),this.formatCells(),this.selectedRowValue=void 0,this.selectedColumnValue=void 0},t.prototype.addMainGroubByRequest=function(e){var t={field:this.options.rowField,sortCriteria:this.options.sortCriteria,computedFields:this.getComputedFields(),maximumNumberOfValues:this.options.maximumNumberOfRows};this.groupByIndex.push(e.groupByRequests.length),e.groupByRequests.push(t)},t.prototype.addColumnsGroupByRequests=function(e){for(var t=0;t<this.options.columnFieldValues.length;t++){var o={field:this.options.rowField,sortCriteria:this.options.sortCriteria,computedFields:this.getComputedFields(),queryOverride:"("+this.buildExpression(e)+")("+this.options.columnField+"='"+this.options.columnFieldValues[t]+"')",maximumNumberOfValues:this.options.maximumNumberOfValuesInGroupBy};this.groupByIndex.push(e.groupByRequests.length),e.groupByRequests.push(o)}},t.prototype.buildExpression=function(e){var t=e.expression.build(),o=e.advancedExpression.build(),i=e.constantExpression.build(),n="";return t&&(n+=" "+t),o&&(n+=" "+o),i&&(n+=" "+i),n},t.prototype.getComputedFields=function(){return[{field:this.options.computedField,operation:this.options.computedFieldOperation}]},t.prototype.getCellResult=function(e,t,o){for(var i=this.getRowValue(t),n=this.getColumnValue(o),s=0,r=0;r<e.values.length;r++)if(e.values[r].value===i){s=e.values[r].computedFieldResults[0];break}return this.isAColumnSelected()&&!this.isColumnSelected(n)&&(s=0),s},t.prototype.addTotals=function(){this.options.enableRowTotals&&this.addRowTotals(),this.options.enableColumnTotals&&this.addColumnTotals()},t.prototype.addRowTotals=function(){var e=this;this.addColumn(),this.setValue("Total",0,this.numberOfColumns-1);for(var t=1;t<this.numberOfRows;t++){var o=this.computeRowTotal(t);this.setValue(o,t,this.numberOfColumns-1)}"computedfielddescending"==this.options.sortCriteria.toLowerCase()&&this.data.sort(function(t,o){return o[e.numberOfColumns-1].getValue()-t[e.numberOfColumns-1].getValue()}),"computedfieldascending"==this.options.sortCriteria.toLowerCase()&&this.data.sort(function(t,o){return t[e.numberOfColumns-1].getValue()-o[e.numberOfColumns-1].getValue()})},t.prototype.addColumnTotals=function(){this.addRow(),this.setValue("Total",this.numberOfRows-1,0);for(var e=1;e<this.numberOfColumns;e++){var t=this.computeColumnTotal(e);this.setValue(t,this.numberOfRows-1,e)}},t.prototype.computeRowTotal=function(e){for(var t=0,o=1;o<this.numberOfColumns-1;o++)t+=parseInt(this.getCellValue(e,o));return t},t.prototype.computeColumnTotal=function(e){for(var t=0,o=1;o<this.numberOfRows-1;o++)t+=parseInt(this.getCellValue(o,e));return t},t.prototype.formatCells=function(){for(var e=1;e<this.numberOfRows;e++)for(var t=1;t<this.numberOfColumns;t++){var o=this.getCellValue(e,t);o=n.format(parseInt(o),this.options.computedFieldFormat),this.setValue(o,e,t)}},t.prototype.addHeaderRow=function(){this.addRow(),this.addColumn(),this.setValue(this.options.columnHeader,0,0);for(var e=0;e<this.options.columnLabels.length;e++)this.addColumn(),this.setValue(this.options.columnLabels[e],0,e+1)},t.prototype.addRow=function(){this.data.push(new Array);for(var e=0;e<this.numberOfColumns;e++)this.addCellToRow(this.numberOfRows,e);this.numberOfRows++},t.prototype.addColumn=function(){for(var e=0;e<this.numberOfRows;e++)this.addCellToRow(e,this.numberOfColumns);this.numberOfColumns++},t.prototype.addCellToRow=function(e,t){var o=a.$$("div",{className:"coveo-matrix-cell"});0==t&&o.addClass("matrix-first-column"),this.data[e].push(new v.Cell(0,o.el))},t.prototype.setValue=function(e,t,o){var i=this.getCellElement(t,o);p.Utils.isNullOrUndefined(e)||a.$$(i).text(e.toString()),this.isCellSelected(this.getRowValue(t),this.getColumnValue(o))&&a.$$(i).addClass("coveo-matrix-selected"),this.isAColumnSelected()&&!this.isColumnSelected(this.getColumnValue(o))&&0!=o&&0!=t&&a.$$(i).addClass("coveo-matrix-unimportant"),this.data[t][o].setValue(e)},t.prototype.handleClick=function(e,t){this.selectCell(e,t),this.queryController.executeQuery()},t.prototype.getRowValue=function(e){return this.data[e][0].getValue()},t.prototype.getColumnValue=function(e){return this.options.columnFieldValues[e-1]},t.prototype.isAColumnSelected=function(){return 0!==(this.queryStateModel.get(this.columnId)||[]).length||void 0!=this.selectedColumnValue},t.prototype.isColumnSelected=function(e){if(this.isAColumnSelected()&&e)for(var t=this.queryStateModel.attributes[this.columnId]||[],o=0;o<t.length;o++)if(t[o].toLowerCase()===e.toLowerCase())return!0;return this.selectedColumnValue==e},t.prototype.isARowSelected=function(){return 0!==(this.queryStateModel.get(this.rowId)||[]).length||void 0!==this.selectedRowValue},t.prototype.isRowSelected=function(e){if(this.isARowSelected()&&e)for(var t=this.queryStateModel.get(this.rowId)||[],o=0;o<t.length;o++)if(t[o].toLowerCase()===e.toLowerCase())return!0;return this.selectedRowValue==e},t.prototype.isCellSelected=function(e,t){return this.isAColumnSelected()&&this.isARowSelected()?this.isRowSelected(e)&&this.isColumnSelected(t):!!this.isAColumnSelected()&&this.isColumnSelected(t)},t.prototype.areFacetsPresent=function(){return this.isRowFacetPresent()&&this.isColumnFacetPresent()},t.prototype.isRowFacetPresent=function(){var e=this.componentStateModel.get(this.rowId);return e&&!e[0].disabled},t.prototype.isColumnFacetPresent=function(){var e=this.componentStateModel.get(this.columnId);return e&&!e[0].disabled},t.prototype.reset=function(){a.$$(this.element).empty(),this.numberOfRows=0,this.numberOfColumns=0,this.data=new Array,this.buildMatrix()},t.prototype.parseResults=function(e){if(e){var t=e.groupByResults[this.groupByIndex[0]];if(t)for(var o=0;o<t.values.length;o++){var i=t.values[o].value;this.addRow(),this.setValue(i,o+1,0)}for(var o=1;o<this.numberOfRows;o++)for(var n=1;n<this.numberOfColumns;n++){var s=e.groupByResults[this.groupByIndex[n]],r=this.getCellResult(s,o,n);this.setValue(r,o,n)}}},t.prototype.drawRow=function(e,t){for(var o=this,i=a.$$(this.element).find(".coveo-matrix"),n=this,s=0;s<this.numberOfColumns;s++)!function(i){var s=n.data[t][i].getHTML();a.$$(s).on("click",function(){!function(e){o.handleClick(t,e)}(i)}),n.options.enableHoverPreview&&function(e){a.$$(s).on("mouseover",function(){return o.handleHoverIn(t,e)}),a.$$(s).on("mouseout",function(){return o.handleHoverOut(t,e)})}(i),e.appendChild(s)}(s);i.appendChild(e)},t.prototype.handleHoverIn=function(e,t){var o=this;this.isHoverWorkingOnRow(e)&&this.isHoverWorkingOnColumn(t)&&(this.previewTimeout=window.setTimeout(function(){o.displayResultsPreview(e,t)},this.options.previewDelay))},t.prototype.handleHoverOut=function(e,t){clearTimeout(this.previewTimeout),this.data[e][t].removePreview()},t.prototype.displayResultsPreview=function(e,t){var o=this,i=this.createPreviewQuery(e,t);this.data[e][t].addPreview(this.options.previewMinWidth,this.options.previewMaxWidth),this.queryController.getEndpoint().search(i).then(function(i){if(o.isDataAvailable(e,t)){var n=o.data[e][t],r=s.map(i.results,function(e){return o.instantiateTemplate(e)}),l="";s.each(r,function(e){e.then(function(e){l+=e.outerHTML})}),Promise.all(r).then(function(){n.updatePreview(l)})}})},t.prototype.instantiateTemplate=function(e){var t=this;return this.options.previewTemplate.instantiateToElement(e,{checkCondition:!1,responsiveComponents:this.searchInterface.responsiveComponents}).then(function(o){var i={options:t.options,bindings:t.getBindings(),result:e};return m.Initialization.automaticallyCreateComponentsInside(o,i).initResult.then(function(){return o})})},t.prototype.createPreviewQuery=function(e,t){var o="("+d.QueryUtils.buildFieldExpression(this.options.rowField,"=",[this.getRowValue(e)])+")",i="("+d.QueryUtils.buildFieldExpression(this.options.columnField,"=",[this.getColumnValue(t)])+")",n=this.queryController.getLastQuery();n.aq=o,n.aq+=i,n.sortCriteria=this.options.previewSortCriteria,n.sortField=this.options.previewSortField;var r=this.options.computedField.slice(1);return!s.find(n.fieldsToInclude,function(e){return e==r})&&n.fieldsToInclude&&n.fieldsToInclude.push(r),n},t.prototype.isHoverWorkingOnRow=function(e){return this.options.enableColumnTotals?0!==e&&e!==this.numberOfRows-1:0!==e},t.prototype.isHoverWorkingOnColumn=function(e){return this.options.enableRowTotals?0!==e&&e!==this.numberOfColumns-1:0!==e},t.prototype.isDataAvailable=function(e,t){return void 0!==this.data[e]&&void 0!==this.data[e][t]},t.ID="Matrix",t.doExport=function(){l.exportGlobally({Matrix:t})},t.options={title:h.ComponentOptions.buildStringOption(),rowField:h.ComponentOptions.buildFieldOption({required:!0}),columnField:h.ComponentOptions.buildFieldOption({required:!0}),sortCriteria:h.ComponentOptions.buildStringOption({defaultValue:"computedfielddescending"}),maximumNumberOfRows:h.ComponentOptions.buildNumberOption({defaultValue:10,min:0}),enableRowTotals:h.ComponentOptions.buildBooleanOption({defaultValue:!0}),columnFieldValues:h.ComponentOptions.buildListOption({defaultValue:[]}),columnLabels:h.ComponentOptions.buildListOption({defaultValue:[]}),columnHeader:h.ComponentOptions.buildStringOption(),maximumNumberOfValuesInGroupBy:h.ComponentOptions.buildNumberOption({defaultValue:100,min:0}),enableColumnTotals:h.ComponentOptions.buildBooleanOption({defaultValue:!0}),computedField:h.ComponentOptions.buildFieldOption({required:!0}),computedFieldOperation:h.ComponentOptions.buildStringOption({defaultValue:"sum"}),computedFieldFormat:h.ComponentOptions.buildStringOption({defaultValue:"c0"}),cellFontSize:h.ComponentOptions.buildStringOption({defaultValue:""}),enableHoverPreview:h.ComponentOptions.buildBooleanOption({defaultValue:!0}),previewSortCriteria:h.ComponentOptions.buildStringOption({defaultValue:"FieldDescending"}),previewSortField:h.ComponentOptions.buildFieldOption(),previewMaxWidth:h.ComponentOptions.buildStringOption({defaultValue:"500px"}),previewMinWidth:h.ComponentOptions.buildStringOption({defaultValue:"0"}),previewDelay:h.ComponentOptions.buildNumberOption({defaultValue:500}),previewTemplate:f.TemplateComponentOptions.buildTemplateOption()},t}(c.Component);t.Matrix=y,m.Initialization.registerAutoCreateComponent(y)},632:function(e,t){},633:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),n=o(0),s=function(){function e(e,t){void 0===e&&(e=0),this.previewActive=!1,this.element=t,this.value=e}return e.prototype.getValue=function(){return this.value},e.prototype.getHTML=function(){return this.element},e.prototype.setValue=function(e){this.value=e},e.prototype.setHTML=function(e){this.element=e},e.prototype.addPreview=function(e,t){this.previewActive=!0;var o=i.$$("div",{className:"matrix-results-preview-container"});o.el.style.minWidth=e,o.el.style.maxWidth=t,o.on("click",function(e){e.stopPropagation()}),this.element.appendChild(o.el);var s=i.$$(this.element).findAll(".matrix-results-preview-container");n.each(s,function(e){i.$$(e).hide()})},e.prototype.removePreview=function(){this.previewActive=!1;var e=i.$$(this.element).find(".matrix-results-preview-container");e&&i.$$(e).detach()},e.prototype.updatePreview=function(e){if(this.previewActive){var t=i.$$(this.element).find(".matrix-results-preview-container");t.innerHTML+=e,i.$$(t).show()}},e}();t.Cell=s},634:function(e,t,o){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=o(27),s=o(1),r=o(23),l=function(e){function t(t,o){var i=e.call(this)||this;return i.computedField=t,i.format=o,i}return i(t,e),t.prototype.instantiateToString=function(e,t){return"<div class='coveo-result-frame'><div class='coveo-result-row'><div class='coveo-result-cell' style='width: 40px; padding-right:5px;vertical-align: middle'><a class='CoveoIcon' data-small='true'></a></div><div class='coveo-result-cell' style='font-size:13px;vertical-align: middle'><a class='CoveoResultLink'></a></div><div class='coveo-result-cell' style='width:80px; text-align:right; font-size:13px; padding-right: 5px;vertical-align: middle'>"+r.format(parseInt(e.raw[this.computedField.slice(1)]),this.format)+"</div></div></div>"},t.prototype.instantiateToElement=function(e,t){var o=this;return new Promise(function(t,i){return s.$$("div",void 0,o.instantiateToString(e)).el})},t}(n.Template);t.DefaultMatrixResultPreviewTemplate=l}});
//# sourceMappingURL=Matrix.min__5ebc66d1c8fc250de81a.js.map