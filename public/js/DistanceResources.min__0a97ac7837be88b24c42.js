webpackJsonpCoveo__temporary([32],{191:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function u(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(s,u)}l((n=n.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){function o(t){return function(e){return n([t,e])}}function n(o){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,r&&(s=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[0,s.value]),o[0]){case 0:case 1:s=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(s=l.trys,!(s=s.length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){l.label=o[1];break}if(6===o[0]&&l.label<s[1]){l.label=s[1],s=o;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(o);break}s[2]&&l.ops.pop(),l.trys.pop();continue}o=e.call(t,l)}catch(t){o=[6,t],r=0}finally{i=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}var i,r,s,u,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u};Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),u=o(149),l=o(9),a=o(6),c=o(8),p=o(107),d=o(2),h=o(22),f=o(3),g=o(434),v=o(435),y=o(436),b=function(t){function e(o,n,i){var r=t.call(this,o,e.ID,i)||this;return r.element=o,r.options=n,r.bindings=i,r.isFirstPositionResolved=!1,r.options=c.ComponentOptions.initComponentOptions(o,e,n),r.registerDistanceQuery(),r.bind.onRootElement(p.InitializationEvents.afterComponentsInitialization,function(t){return r.onAfterComponentsInitialization(t)}),r}return n(e,t),e.prototype.setPosition=function(t,e){this.enable(),this.latitude=t,this.longitude=e;var o={position:{latitude:t,longitude:e}};this.bind.trigger(this.element,u.DistanceEvents.onPositionResolved,o);var n=this.shouldTriggerQueryWhenPositionSet();this.isFirstPositionResolved=!0,n&&(this.sendAnalytics(),this.queryController.executeQuery())},e.prototype.getLastPositionRequest=function(){return i(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return this.lastPositionRequest?[4,this.lastPositionRequest]:[3,2];case 1:return t.sent(),[2,{latitude:this.latitude,longitude:this.longitude}];case 2:Promise.reject("No position request was executed yet."),t.label=3;case 3:return[2]}})})},e.prototype.sendAnalytics=function(){this.usageAnalytics.logSearchEvent(l.analyticsActionCauseList.positionSet,{})},e.prototype.shouldTriggerQueryWhenPositionSet=function(){return!this.queryController.firstQuery&&this.options.triggerNewQueryOnNewPosition},e.prototype.onAfterComponentsInitialization=function(t){var e={providers:this.getProvidersFromOptions()};this.bind.trigger(this.element,u.DistanceEvents.onResolvingPosition,e),this.lastPositionRequest=this.tryToSetPositionFromProviders(e.providers),this.options.cancelQueryUntilPositionResolved&&t.defer.push(this.lastPositionRequest)},e.prototype.tryToSetPositionFromProviders=function(t){return i(this,void 0,void 0,function(){var e,o;return r(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.tryGetPositionFromProviders(t)];case 1:return e=n.sent(),e?this.setPosition(e.latitude,e.longitude):this.triggerDistanceNotSet(),[3,3];case 2:return o=n.sent(),this.logger.error("An error occurred while trying to resolve the current position.",o),this.triggerDistanceNotSet(),[3,3];case 3:return[2]}})})},e.prototype.getProvidersFromOptions=function(){var t=[];return this.options.useNavigator&&t.push(new g.NavigatorPositionProvider),this.options.googleApiKey&&t.push(new v.GoogleApiPositionProvider(this.options.googleApiKey)),this.options.longitudeValue&&this.options.latitudeValue&&t.push(new y.StaticPositionProvider(this.options.latitudeValue,this.options.longitudeValue)),t},e.prototype.tryGetPositionFromProviders=function(t){return i(this,void 0,void 0,function(){var e,o,n;return r(this,function(i){switch(i.label){case 0:if(!(t.length>0))return[3,5];e=t.shift(),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,e.getPosition()];case 2:return o=i.sent(),o.latitude&&o.longitude?[2,o]:[3,4];case 3:return n=i.sent(),this.logger.warn("An error occurred while trying to resolve the position within a position provider.",n),[3,4];case 4:return[3,0];case 5:return[2]}})})},e.prototype.triggerDistanceNotSet=function(){this.isFirstPositionResolved=!0,this.logger.warn("None of the given position providers could resolve the current position. The distance field will not be calculated and the distance components will be disabled until the next call to 'setPosition'."),this.bind.trigger(this.element,u.DistanceEvents.onPositionNotResolved,{}),this.disable()},e.prototype.registerDistanceQuery=function(){var t=this;this.bind.onRootElement(p.QueryEvents.buildingQuery,function(e){if(t.isFirstPositionResolved&&e&&e.queryBuilder){var o={function:t.getConvertedUnitsFunction("dist("+t.options.latitudeField+", "+t.options.longitudeField+", "+t.latitude+", "+t.longitude+")"),fieldName:""+t.options.distanceField};e.queryBuilder.queryFunctions.push(o),t.enableDistanceComponents()}})},e.prototype.enableDistanceComponents=function(){var t=this;s.$$(this.root).findAll("."+this.options.disabledDistanceCssClass).forEach(function(e){try{e.classList.remove(t.options.disabledDistanceCssClass);var o=h.get(e);o&&o.enable()}catch(o){t.logger.error("Could not re-enable distance component.",o,e)}})},e.prototype.getConvertedUnitsFunction=function(t){return t+"/"+this.options.unitConversionFactor},e.ID="DistanceResources",e.doExport=function(){f.exportGlobally({DistanceResources:e})},e.options={distanceField:c.ComponentOptions.buildFieldOption({required:!0}),latitudeField:c.ComponentOptions.buildFieldOption({required:!0}),longitudeField:c.ComponentOptions.buildFieldOption({required:!0}),unitConversionFactor:c.ComponentOptions.buildNumberOption({defaultValue:1e3,validator:function(t){return!!t&&t>0}}),disabledDistanceCssClass:c.ComponentOptions.buildStringOption({defaultValue:"coveo-distance-disabled"}),latitudeValue:c.ComponentOptions.buildNumberOption({float:!0}),longitudeValue:c.ComponentOptions.buildNumberOption({float:!0}),googleApiKey:c.ComponentOptions.buildStringOption(),useNavigator:c.ComponentOptions.buildBooleanOption(),triggerNewQueryOnNewPosition:c.ComponentOptions.buildBooleanOption({defaultValue:!1}),cancelQueryUntilPositionResolved:c.ComponentOptions.buildBooleanOption({defaultValue:!0})},e}(a.Component);e.DistanceResources=b,d.Initialization.registerAutoCreateComponent(b)},434:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.prototype.getPosition=function(){return new Promise(function(t,e){navigator.geolocation.getCurrentPosition(function(e){t({latitude:e.coords.latitude,longitude:e.coords.longitude})},function(t){e(t)})})},t}();e.NavigatorPositionProvider=n},435:function(t,e,o){"use strict";var n=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function u(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(s,u)}l((n=n.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){function o(t){return function(e){return n([t,e])}}function n(o){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,r&&(s=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[0,s.value]),o[0]){case 0:case 1:s=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(s=l.trys,!(s=s.length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){l.label=o[1];break}if(6===o[0]&&l.label<s[1]){l.label=s[1],s=o;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(o);break}s[2]&&l.ops.pop(),l.trys.pop();continue}o=e.call(t,l)}catch(t){o=[6,t],r=0}finally{i=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}var i,r,s,u,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u};Object.defineProperty(e,"__esModule",{value:!0});var r=o(68),s=function(){function t(t){this.googleApiKey=t}return t.prototype.getPosition=function(){return n(this,void 0,void 0,function(){var t,e;return i(this,function(o){switch(o.label){case 0:return[4,(new r.EndpointCaller).call({errorsAsSuccess:!1,method:"POST",queryString:["key="+this.googleApiKey],requestData:{},responseType:"json",url:"https://www.googleapis.com/geolocation/v1/geolocate"})];case 1:return t=o.sent(),e=t.data.location,[2,{longitude:e.lng,latitude:e.lat}]}})})},t}();e.GoogleApiPositionProvider=s},436:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){this.latitude=t,this.longitude=e}return t.prototype.getPosition=function(){return Promise.resolve({longitude:this.longitude,latitude:this.latitude})},t}();e.StaticPositionProvider=n}});