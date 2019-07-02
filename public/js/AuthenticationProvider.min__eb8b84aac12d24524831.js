webpackJsonpCoveo__temporary([71],{183:function(t,o,e){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])};return function(o,e){function i(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}();Object.defineProperty(o,"__esModule",{value:!0});var n=e(6),r=e(8),a=e(5),s=e(10),u=e(15),p=e(44),c=e(65),h=e(1),d=e(2),l=e(7),v=e(25),m=e(0),f=e(3);e(431);var g=e(13),y=function(t){function o(e,i,n,c){void 0===i&&(i={});var h=t.call(this,e,o.ID,n)||this;return h.element=e,h.options=i,h._window=c,h.options=r.ComponentOptions.initComponentOptions(e,o,i),a.Assert.exists(h.options.name),h.handlers=[],h._window=h._window||window,h.redirectCount=0,h.bind.onRootElement(s.QueryEvents.buildingCallOptions,h.handleBuildingCallOptions),h.bind.onRootElement(s.QueryEvents.queryError,h.handleQueryError),h.bind.onRootElement(u.InitializationEvents.nuke,h.handleNuke),h.bind.onRootElement(p.SettingsEvents.settingsPopulateMenu,function(t){t.menuData.push({text:l.l("Reauthenticate",h.options.caption),className:"coveo-authentication-provider",onOpen:function(){return h.authenticateWithProvider()},svgIcon:g.SVGIcons.icons.dropdownAuthenticate,svgIconClassName:"coveo-authentication-provider-svg"})}),h}return i(o,t),o.prototype.handleBuildingCallOptions=function(t){t.options.authentication.push(this.options.name)},o.prototype.handleQueryError=function(t){var o=t.error;o.isMissingAuthentication&&o.provider===this.options.name&&this.redirectCount<2&&-1!==this.redirectCount?(++this.redirectCount,this.authenticateWithProvider()):(this.logger.error("The AuthenticationProvider is in a redirect loop. This may be due to a back-end configuration problem."),this.redirectCount=-1)},o.prototype.authenticateWithProvider=function(){this.options.useIFrame?this.authenticateWithIFrame():this.redirectToAuthenticationProvider()},o.prototype.redirectToAuthenticationProvider=function(){this.logger.info("Redirecting to authentication provider "+this.options.name),this._window.location.href=this.getAuthenticationProviderUriForRedirect()},o.prototype.authenticateWithIFrame=function(){this.logger.info("Using iframe to retrieve authentication for provider "+this.options.name);var t,o=h.$$("iframe",{src:this.getAuthenticationProviderUriForIFrame()}).el;t=this.options.showIFrame?this.createPopupForVisibleIFrame(o):this.createPopupForWaitMessage(o);var e=this.createHandler(t,o);h.$$(this._window).one("message",e),this.handlers.push(e)},o.prototype.createHandler=function(t,o){var e=this;return function(){h.$$(o).detach(),e.logger.info("Got authentication for provider "+e.options.name+"; retrying query."),t.close(),e.queryController.executeQuery()}},o.prototype.handleNuke=function(){var t=this;m.each(this.handlers,function(o){return h.$$(t._window).off("message",o)})},o.prototype.createPopupForWaitMessage=function(t){var o=h.$$("div",{className:"coveo-waiting-for-authentication-popup"},c.DomUtils.getBasicLoadingAnimation()).el;return h.$$(t).hide(),document.body.appendChild(t),v.ModalBox.open(o,{title:l.l("Authenticating",this.options.caption),sizeMod:"small"}),v.ModalBox},o.prototype.createPopupForVisibleIFrame=function(t){h.$$(t).addClass("coveo-authentication-iframe");var o=h.$$("div",{},t).el;return v.ModalBox.open(o,{title:l.l("Authenticating",this.options.caption),className:"coveo-authentication-popup",sizeMod:"big"}),v.ModalBox},o.prototype.getAuthenticationProviderUriForRedirect=function(){return this.queryController.getEndpoint().getAuthenticationProviderUri(this.options.name,this._window.location.href,void 0)},o.prototype.getAuthenticationProviderUriForIFrame=function(){return this.queryController.getEndpoint().getAuthenticationProviderUri(this.options.name,void 0,"success")},o.ID="AuthenticationProvider",o.doExport=function(){f.exportGlobally({AuthenticationProvider:o})},o.options={name:r.ComponentOptions.buildStringOption(),caption:r.ComponentOptions.buildStringOption({postProcessing:function(t,o){return t||o.name}}),useIFrame:r.ComponentOptions.buildBooleanOption({defaultValue:!1,alias:["useIframe"]}),showIFrame:r.ComponentOptions.buildBooleanOption({defaultValue:!0,alias:["showIframe"],depend:"useIFrame"})},o}(n.Component);o.AuthenticationProvider=y,d.Initialization.registerAutoCreateComponent(y)},431:function(t,o){}});