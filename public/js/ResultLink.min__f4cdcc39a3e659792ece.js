webpackJsonpCoveo__temporary([59],{105:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),s=n(8),r=n(26),l=n(9),u=n(30),p=n(61),h=n(22),c=n(165),a=n(2),d=n(20),f=n(5),O=n(4),m=n(29),g=n(1),k=n(104),v=n(0),w=n(3);n(465);var b=n(17),y=function(t){function e(n,i,o,u,p){var c=t.call(this,n,e.ID,o)||this;if(c.element=n,c.options=i,c.bindings=o,c.result=u,c.os=p,c.logOpenDocument=v.debounce(function(){c.queryController.saveLastQuery();var t=g.$$(c.element).getAttribute("href");void 0!=t&&""!=t||(t=c.result.clickUri),c.usageAnalytics.logClickEvent(l.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:c.result.title,author:O.Utils.getFieldValue(c.result,"author")},c.result,c.root),m.Defer.flush()},1500,!0),c.options=s.ComponentOptions.initComponentOptions(n,e,i),c.options=v.extend({},c.options,c.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink)),c.result=u||c.resolveResult(),null==c.options.openQuickview&&(c.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&h.DeviceUtils.isMobileDevice()),c.element.setAttribute("tabindex","0"),c.addHeadingRoleIfFirstResultLink(),f.Assert.exists(c.componentOptionsModel),f.Assert.exists(c.result),!c.quickviewShouldBeOpened()){var a=v.once(function(){return c.logOpenDocument()});g.$$(n).on(["contextmenu","click","mousedown","mouseup"],a);var d;g.$$(n).on("touchstart",function(){d=window.setTimeout(a,1e3)}),g.$$(n).on("touchend",function(){d&&clearTimeout(d)})}return c.renderUri(n,u),c.bindEventToOpen(),c}return i(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML))if(this.options.titleTemplate){var n=this.parseStringTemplate(this.options.titleTemplate);this.element.innerHTML=n?k.StreamHighlightUtils.highlightStreamText(n,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}else this.element.innerHTML=this.result.title?p.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.addHeadingRoleIfFirstResultLink=function(){this.isFirstResultLink&&(this.element.setAttribute("role","heading"),this.element.setAttribute("aria-level","2"))},Object.defineProperty(e.prototype,"isFirstResultLink",{get:function(){var t=g.$$(this.element).closest("CoveoResult");if(!t)return!1;var n="."+o.Component.computeCssClassNameForType(e.ID);return g.$$(t).find(n)===this.element},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new b.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){g.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},g.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},g.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||O.Utils.isNonEmptyString(g.$$(this.element).getAttribute("href")))&&(g.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||g.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?this.parseStringTemplate(this.options.hrefTemplate):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?O.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=O.Utils.exists(this.os)?this.os:c.OSUtils.get();t==c.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==c.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=O.Utils.exists(this.os)?this.os:c.OSUtils.get();return t==c.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==c.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.prototype.parseStringTemplate=function(t){var e=this;return t?t.replace(/\$\{(.*?)\}/g,function(t){var n=t.substring(2,t.length-1),i=e.readFromObject(e.result,n);return i||(i=e.readFromObject(window,n)),i||e.logger.warn(n+" used in the ResultLink template is undefined for this result: "+e.result.title),i||t}):""},e.prototype.readFromObject=function(t,e){if(t&&-1!==e.indexOf(".")){var n=e.substring(e.indexOf(".")+1);return e=e.substring(0,e.indexOf(".")),this.readFromObject(t[e],n)}return t?t[e]:void 0},e.ID="ResultLink",e.doExport=function(){w.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=y,a.Initialization.registerAutoCreateComponent(y)},465:function(t,e){}});