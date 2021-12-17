webpackJsonpCoveo__temporary([76],{236:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o(7),i=o(8),a=o(5),s=o(11),u=o(16),c=o(54),h=o(93),p=o(1),l=o(2),d=o(6),g=o(26),f=o(0),m=o(3);o(600);var v=o(12),k=o(42),y=o(13),A=o(41),F=function(e){function t(o,n,r,h){void 0===n&&(n={});var p=e.call(this,o,t.ID,r)||this;return p.element=o,p.options=n,p._window=h,p.storage=new A.SafeLocalStorage,p.options=i.ComponentOptions.initComponentOptions(o,t,n),a.Assert.exists(p.options.name),p.handlers=[],p._window=p._window||window,p.redirectCount=0,p.bind.onRootElement(s.QueryEvents.buildingCallOptions,p.handleBuildingCallOptions),p.bind.onRootElement(s.QueryEvents.queryError,p.handleQueryError),p.bind.onRootElement(u.InitializationEvents.nuke,p.handleNuke),p.bind.onRootElement(u.InitializationEvents.afterComponentsInitialization,function(e){return p.onAfterComponentsInitialization(e)}),p.bind.onRootElement(c.SettingsEvents.settingsPopulateMenu,function(e){e.menuData.push({text:d.l("Reauthenticate",p.options.caption),className:"coveo-authentication-provider",onOpen:function(){return p.authenticateWithProvider()},svgIcon:v.SVGIcons.icons.dropdownAuthenticate,svgIconClassName:"coveo-authentication-provider-svg"})}),p}return n(t,e),t.prototype.getHandshakeTokenFromUrl=function(){var e=this.getHashAfterAdjustingForAngular(),t=k.HashUtils.getValue("handshake_token",e);return"string"==typeof t?t:""},t.prototype.getHashAfterAdjustingForAngular=function(){var e=k.HashUtils.getHash();return this.isAngularHash?"#"+e.slice(2):e},Object.defineProperty(t.prototype,"isAngularHash",{get:function(){return 0===k.HashUtils.getHash().indexOf("#/")},enumerable:!0,configurable:!0}),t.prototype.onAfterComponentsInitialization=function(e){var o=this;if(t.handshakeInProgress){var n=this.waitForHandshakeToFinish().then(function(){return o.loadAccessTokenFromStorage()});return void e.defer.push(n)}var r=this.getHandshakeTokenFromUrl();if(!r)return this.loadAccessTokenFromStorage();if(this.shouldExchangeHandshakeToken){this.enableHandshakeInProgressFlag();var i=this.exchangeHandshakeToken(r).then(function(e){return o.storeAccessToken(e)}).then(function(){return o.removeHandshakeTokenFromUrl()}).then(function(){return o.loadAccessTokenFromStorage()}).catch(function(e){return o.logger.error(e)}).finally(function(){return o.disableHandshakeInProgressFlag()});e.defer.push(i)}},Object.defineProperty(t.prototype,"shouldExchangeHandshakeToken",{get:function(){var e=p.$$(this.element).getAttribute("data-tab"),t=k.HashUtils.getHash(),o=k.HashUtils.getValue(y.QUERY_STATE_ATTRIBUTES.T,t);return!e||e===o},enumerable:!0,configurable:!0}),t.prototype.exchangeHandshakeToken=function(e){var t=this.getAccessTokenFromStorage(),o=t?{handshakeToken:e,accessToken:t}:{handshakeToken:e};return this.queryController.getEndpoint().exchangeHandshakeToken(o)},t.prototype.storeAccessToken=function(e){this.storage.setItem(this.accessTokenStorageKey,e)},Object.defineProperty(t.prototype,"accessTokenStorageKey",{get:function(){return"coveo-auth-provider-access-token-"+this.queryController.getEndpoint().options.queryStringArguments.organizationId},enumerable:!0,configurable:!0}),t.prototype.waitForHandshakeToFinish=function(){return new Promise(function(e){var o=setInterval(function(){t.handshakeInProgress||(clearInterval(o),e())},100)})},t.prototype.enableHandshakeInProgressFlag=function(){t.handshakeInProgress=!0},t.prototype.disableHandshakeInProgressFlag=function(){t.handshakeInProgress=!1},t.prototype.removeHandshakeTokenFromUrl=function(){var e=this.getHashAfterAdjustingForAngular(),t=this.getHandshakeTokenFromUrl(),o="handshake_token="+t,n=e.substr(1).split("&"),r=n.filter(function(e){return e!==o}).join("&"),i=this.isAngularHash?"/"+r:r;this._window.history.replaceState(null,"","#"+i)},t.prototype.loadAccessTokenFromStorage=function(){var e=this.getAccessTokenFromStorage();e&&this.queryController.getEndpoint().accessToken.updateToken(e)},t.prototype.getAccessTokenFromStorage=function(){return this.storage.getItem(this.accessTokenStorageKey)},t.prototype.handleBuildingCallOptions=function(e){e.options.authentication.push(this.options.name)},t.prototype.handleQueryError=function(e){var t=this.getAccessTokenFromStorage(),o=this.shouldClearTokenFollowingErrorEvent(e);if(t&&o)return this.storage.removeItem(this.accessTokenStorageKey),void this._window.location.reload();var n=e.error;n.isMissingAuthentication&&n.provider===this.options.name&&this.redirectCount<2&&-1!==this.redirectCount?(++this.redirectCount,this.authenticateWithProvider()):(this.logger.error("The AuthenticationProvider is in a redirect loop. This may be due to a back-end configuration problem."),this.redirectCount=-1)},t.prototype.shouldClearTokenFollowingErrorEvent=function(e){var t=["InvalidTokenException","ExpiredTokenException","InvalidAuthenticationProviderException"],o=e.error.name;return-1!==t.indexOf(o)},t.prototype.authenticateWithProvider=function(){this.options.useIFrame?this.authenticateWithIFrame():this.redirectToAuthenticationProvider()},t.prototype.redirectToAuthenticationProvider=function(){this.logger.info("Redirecting to authentication provider "+this.options.name),this._window.location.href=this.getAuthenticationProviderUriForRedirect()},t.prototype.authenticateWithIFrame=function(){this.logger.info("Using iframe to retrieve authentication for provider "+this.options.name);var e,t=p.$$("iframe",{src:this.getAuthenticationProviderUriForIFrame()}).el;e=this.options.showIFrame?this.createPopupForVisibleIFrame(t):this.createPopupForWaitMessage(t);var o=this.createHandler(e,t);p.$$(this._window).one("message",o),this.handlers.push(o)},t.prototype.createHandler=function(e,t){var o=this;return function(){p.$$(t).detach(),o.logger.info("Got authentication for provider "+o.options.name+"; retrying query."),e.close(),o.queryController.executeQuery()}},t.prototype.handleNuke=function(){var e=this;f.each(this.handlers,function(t){return p.$$(e._window).off("message",t)})},t.prototype.createPopupForWaitMessage=function(e){var t=p.$$("div",{className:"coveo-waiting-for-authentication-popup"},h.DomUtils.getBasicLoadingAnimation()).el;return p.$$(e).hide(),document.body.appendChild(e),g.ModalBox.open(t,{title:d.l("Authenticating",this.options.caption),sizeMod:"small",body:this.searchInterface.options.modalContainer}),g.ModalBox},t.prototype.createPopupForVisibleIFrame=function(e){p.$$(e).addClass("coveo-authentication-iframe");var t=p.$$("div",{},e).el;return g.ModalBox.open(t,{title:d.l("Authenticating",this.options.caption),className:"coveo-authentication-popup",sizeMod:"big",body:this.searchInterface.options.modalContainer}),g.ModalBox},t.prototype.getAuthenticationProviderUriForRedirect=function(){return this.queryController.getEndpoint().getAuthenticationProviderUri(this.options.name,this._window.location.href,void 0)},t.prototype.getAuthenticationProviderUriForIFrame=function(){return this.queryController.getEndpoint().getAuthenticationProviderUri(this.options.name,void 0,"success")},t.ID="AuthenticationProvider",t.handshakeInProgress=!1,t.doExport=function(){m.exportGlobally({AuthenticationProvider:t})},t.options={name:i.ComponentOptions.buildStringOption(),caption:i.ComponentOptions.buildStringOption({postProcessing:function(e,t){return e||t.name}}),useIFrame:i.ComponentOptions.buildBooleanOption({defaultValue:!1,alias:["useIframe"]}),showIFrame:i.ComponentOptions.buildBooleanOption({defaultValue:!0,alias:["showIframe"],depend:"useIFrame"})},t}(r.Component);t.AuthenticationProvider=F,l.Initialization.registerAutoCreateComponent(F)},600:function(e,t){}});
//# sourceMappingURL=AuthenticationProvider.min__a4b611449371d83d6111.js.map