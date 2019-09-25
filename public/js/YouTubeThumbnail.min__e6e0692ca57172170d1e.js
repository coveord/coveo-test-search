webpackJsonpCoveo__temporary([31,62],{113:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),s=n(8),r=n(28),l=n(9),u=n(31),p=n(64),a=n(22),c=n(172),h=n(2),d=n(21),f=n(5),m=n(4),O=n(30),v=n(1),b=n(108),g=n(0),k=n(3);n(485);var y=n(17),w=function(t){function e(n,o,i,u,p){var c=t.call(this,n,e.ID,i)||this;if(c.element=n,c.options=o,c.bindings=i,c.result=u,c.os=p,c.logOpenDocument=g.debounce(function(){c.queryController.saveLastQuery();var t=v.$$(c.element).getAttribute("href");void 0!=t&&""!=t||(t=c.result.clickUri),c.usageAnalytics.logClickEvent(l.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:c.result.title,author:m.Utils.getFieldValue(c.result,"author")},c.result,c.root),O.Defer.flush()},1500,!0),c.options=s.ComponentOptions.initComponentOptions(n,e,o),c.options=g.extend({},c.options,c.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink)),c.result=u||c.resolveResult(),null==c.options.openQuickview&&(c.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&a.DeviceUtils.isMobileDevice()),c.element.setAttribute("tabindex","0"),c.addHeadingRoleIfFirstResultLink(),f.Assert.exists(c.componentOptionsModel),f.Assert.exists(c.result),!c.quickviewShouldBeOpened()){var h=g.once(function(){return c.logOpenDocument()});v.$$(n).on(["contextmenu","click","mousedown","mouseup"],h);var d;v.$$(n).on("touchstart",function(){d=window.setTimeout(h,1e3)}),v.$$(n).on("touchend",function(){d&&clearTimeout(d)})}return c.renderUri(n,u),c.bindEventToOpen(),c}return o(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML))if(this.options.titleTemplate){var n=this.parseStringTemplate(this.options.titleTemplate);this.element.innerHTML=n?b.StreamHighlightUtils.highlightStreamText(n,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}else this.element.innerHTML=this.result.title?p.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.addHeadingRoleIfFirstResultLink=function(){this.isFirstResultLink&&(this.element.setAttribute("role","heading"),this.element.setAttribute("aria-level","2"))},Object.defineProperty(e.prototype,"isFirstResultLink",{get:function(){var t=v.$$(this.element).closest("CoveoResult");if(!t)return!1;var n="."+i.Component.computeCssClassNameForType(e.ID);return v.$$(t).find(n)===this.element},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new y.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){v.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},v.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},v.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||m.Utils.isNonEmptyString(v.$$(this.element).getAttribute("href")))&&(v.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||v.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?this.parseStringTemplate(this.options.hrefTemplate):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?m.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=m.Utils.exists(this.os)?this.os:c.OSUtils.get();t==c.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==c.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=m.Utils.exists(this.os)?this.os:c.OSUtils.get();return t==c.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==c.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.prototype.parseStringTemplate=function(t){var e=this;return t?t.replace(/\$\{(.*?)\}/g,function(t){var n=t.substring(2,t.length-1),o=e.readFromObject(e.result,n);return o||(o=e.readFromObject(window,n)),o||e.logger.warn(n+" used in the ResultLink template is undefined for this result: "+e.result.title),o||t}):""},e.prototype.readFromObject=function(t,e){if(t&&-1!==e.indexOf(".")){var n=e.substring(e.indexOf(".")+1);return e=e.substring(0,e.indexOf(".")),this.readFromObject(t[e],n)}return t?t[e]:void 0},e.ID="ResultLink",e.doExport=function(){k.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(i.Component);e.ResultLink=w,h.Initialization.registerAutoCreateComponent(w)},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(){function t(){}return t.addClassToSVGInContainer=function(e,n){var o=e.querySelector("svg");o.setAttribute("class",""+t.getClass(o)+n)},t.removeClassFromSVGInContainer=function(e,n){var o=e.querySelector("svg");o.setAttribute("class",t.getClass(o).replace(n,""))},t.addStyleToSVGInContainer=function(t,e){var n=t.querySelector("svg");o.each(e,function(t,e){n.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=i},176:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(27),s=n(3),r=n(1),l=n(79),u=n(14),p=n(12),a=n(4),c=n(6),h=n(8),d=n(2),f=n(24),m=n(113),O=function(t){function e(n,o,s,l,f){void 0===f&&(f=i.ModalBox);var O=t.call(this,n,e.ID,s)||this;O.element=n,O.options=o,O.bindings=s,O.result=l,O.ModalBox=f,O.options=h.ComponentOptions.initComponentOptions(n,e,o),O.resultLink=r.$$("a",{className:c.Component.computeCssClassName(m.ResultLink)});var v=r.$$("div",{className:"coveo-youtube-thumbnail-container"});O.resultLink.append(v.el);var b=r.$$("img",{src:a.Utils.getFieldValue(O.result,"ytthumbnailurl"),className:"coveo-youtube-thumbnail-img",alt:O.result.title,title:O.result.title});b.el.style.width=O.options.width,b.el.style.height=O.options.height,b.el.onerror=function(){var t=r.$$("div",{},p.SVGIcons.icons.video).el;u.SVGDom.addStyleToSVGInContainer(t,{width:O.options.width}),r.$$(b).remove(),v.append(t)},v.append(b.el);var g=r.$$("span",{className:"coveo-youtube-thumbnail-play-button"});return v.append(g.el),r.$$(O.element).append(O.resultLink.el),d.Initialization.automaticallyCreateComponentsInsideResult(n,l,{ResultLink:O.options.embed?{onClick:function(){return O.openYoutubeIframe()}}:null}),O}return o(e,t),e.prototype.openResultLink=function(){f.get(this.resultLink.el).openLinkAsConfigured()},e.prototype.openYoutubeIframe=function(){var t=this,e=r.$$("iframe",{src:"https://www.youtube.com/embed/"+this.extractVideoId()+"?autoplay=1",allowfullscreen:"allowfullscreen",width:"100%",height:"100%"}),n=r.$$("div");n.append(e.el),this.modalbox=this.ModalBox.open(n.el,{overlayClose:!0,title:l.DomUtils.getQuickviewHeader(this.result,{showDate:!0,title:this.result.title},this.bindings).el,className:"coveo-youtube-player",validation:function(){return!0},body:this.element.ownerDocument.body,sizeMod:"big"}),r.$$(r.$$(this.modalbox.wrapper).find(".coveo-quickview-close-button")).on("click",function(){t.modalbox.close()})},e.prototype.extractVideoId=function(){return this.result.clickUri.split("watch?v=")[1]},e.ID="YouTubeThumbnail",e.doExport=function(){s.exportGlobally({YouTubeThumbnail:e})},e.options={width:h.ComponentOptions.buildStringOption({defaultValue:"200px"}),height:h.ComponentOptions.buildStringOption({defaultValue:"112px"}),embed:h.ComponentOptions.buildBooleanOption({defaultValue:!0})},e}(c.Component);e.YouTubeThumbnail=O,d.Initialization.registerAutoCreateComponent(O)},485:function(t,e){}});