webpackJsonpCoveo__temporary([25,30,61],{111:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(6),s=o(8),r=o(28),l=o(9),u=o(30),p=o(63),a=o(22),c=o(170),d=o(2),h=o(20),f=o(5),m=o(4),O=o(29),v=o(1),g=o(106),b=o(0),y=o(3);o(479);var k=o(17),w=function(t){function e(o,n,i,u,p){var c=t.call(this,o,e.ID,i)||this;if(c.element=o,c.options=n,c.bindings=i,c.result=u,c.os=p,c.logOpenDocument=b.debounce(function(){c.queryController.saveLastQuery();var t=v.$$(c.element).getAttribute("href");void 0!=t&&""!=t||(t=c.result.clickUri),c.usageAnalytics.logClickEvent(l.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:c.result.title,author:m.Utils.getFieldValue(c.result,"author")},c.result,c.root),O.Defer.flush()},1500,!0),c.options=s.ComponentOptions.initComponentOptions(o,e,n),c.options=b.extend({},c.options,c.componentOptionsModel.get(r.ComponentOptionsModel.attributesEnum.resultLink)),c.result=u||c.resolveResult(),null==c.options.openQuickview&&(c.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&a.DeviceUtils.isMobileDevice()),c.element.setAttribute("tabindex","0"),c.addHeadingRoleIfFirstResultLink(),f.Assert.exists(c.componentOptionsModel),f.Assert.exists(c.result),!c.quickviewShouldBeOpened()){var d=b.once(function(){return c.logOpenDocument()});v.$$(o).on(["contextmenu","click","mousedown","mouseup"],d);var h;v.$$(o).on("touchstart",function(){h=window.setTimeout(d,1e3)}),v.$$(o).on("touchend",function(){h&&clearTimeout(h)})}return c.renderUri(o,u),c.bindEventToOpen(),c}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML))if(this.options.titleTemplate){var o=this.parseStringTemplate(this.options.titleTemplate);this.element.innerHTML=o?g.StreamHighlightUtils.highlightStreamText(o,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}else this.element.innerHTML=this.result.title?p.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.addHeadingRoleIfFirstResultLink=function(){this.isFirstResultLink&&(this.element.setAttribute("role","heading"),this.element.setAttribute("aria-level","2"))},Object.defineProperty(e.prototype,"isFirstResultLink",{get:function(){var t=v.$$(this.element).closest("CoveoResult");if(!t)return!1;var o="."+i.Component.computeCssClassNameForType(e.ID);return v.$$(t).find(o)===this.element},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new k.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){v.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},v.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},v.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||m.Utils.isNonEmptyString(v.$$(this.element).getAttribute("href")))&&(v.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||v.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?this.parseStringTemplate(this.options.hrefTemplate):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?m.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=m.Utils.exists(this.os)?this.os:c.OSUtils.get();t==c.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==c.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=m.Utils.exists(this.os)?this.os:c.OSUtils.get();return t==c.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==c.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&h.QueryUtils.hasHTMLVersion(this.result)},e.prototype.parseStringTemplate=function(t){var e=this;return t?t.replace(/\$\{(.*?)\}/g,function(t){var o=t.substring(2,t.length-1),n=e.readFromObject(e.result,o);return n||(n=e.readFromObject(window,o)),n||e.logger.warn(o+" used in the ResultLink template is undefined for this result: "+e.result.title),n||t}):""},e.prototype.readFromObject=function(t,e){if(t&&-1!==e.indexOf(".")){var o=e.substring(e.indexOf(".")+1);return e=e.substring(0,e.indexOf(".")),this.readFromObject(t[e],o)}return t?t[e]:void 0},e.ID="ResultLink",e.doExport=function(){y.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(i.Component);e.ResultLink=w,d.Initialization.registerAutoCreateComponent(w)},14:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0),i=function(){function t(){}return t.addClassToSVGInContainer=function(e,o){var n=e.querySelector("svg");n.setAttribute("class",""+t.getClass(n)+o)},t.removeClassFromSVGInContainer=function(e,o){var n=e.querySelector("svg");n.setAttribute("class",t.getClass(n).replace(o,""))},t.addStyleToSVGInContainer=function(t,e){var o=t.querySelector("svg");n.each(e,function(t,e){o.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=i},174:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(27),s=o(3),r=o(1),l=o(79),u=o(14),p=o(12),a=o(4),c=o(6),d=o(8),h=o(2),f=o(24),m=o(111),O=function(t){function e(o,n,s,l,f){void 0===f&&(f=i.ModalBox);var O=t.call(this,o,e.ID,s)||this;O.element=o,O.options=n,O.bindings=s,O.result=l,O.ModalBox=f,O.options=d.ComponentOptions.initComponentOptions(o,e,n),O.resultLink=r.$$("a",{className:c.Component.computeCssClassName(m.ResultLink)});var v=r.$$("div",{className:"coveo-youtube-thumbnail-container"});O.resultLink.append(v.el);var g=r.$$("img",{src:a.Utils.getFieldValue(O.result,"ytthumbnailurl"),className:"coveo-youtube-thumbnail-img",alt:O.result.title,title:O.result.title});g.el.style.width=O.options.width,g.el.style.height=O.options.height,g.el.onerror=function(){var t=r.$$("div",{},p.SVGIcons.icons.video).el;u.SVGDom.addStyleToSVGInContainer(t,{width:O.options.width}),r.$$(g).remove(),v.append(t)},v.append(g.el);var b=r.$$("span",{className:"coveo-youtube-thumbnail-play-button"});return v.append(b.el),r.$$(O.element).append(O.resultLink.el),h.Initialization.automaticallyCreateComponentsInsideResult(o,l,{ResultLink:O.options.embed?{onClick:function(){return O.openYoutubeIframe()}}:null}),O}return n(e,t),e.prototype.openResultLink=function(){f.get(this.resultLink.el).openLinkAsConfigured()},e.prototype.openYoutubeIframe=function(){var t=this,e=r.$$("iframe",{src:"https://www.youtube.com/embed/"+this.extractVideoId()+"?autoplay=1",allowfullscreen:"allowfullscreen",width:"100%",height:"100%"}),o=r.$$("div");o.append(e.el),this.modalbox=this.ModalBox.open(o.el,{overlayClose:!0,title:l.DomUtils.getQuickviewHeader(this.result,{showDate:!0,title:this.result.title},this.bindings).el,className:"coveo-youtube-player",validation:function(){return!0},body:this.element.ownerDocument.body,sizeMod:"big"}),r.$$(r.$$(this.modalbox.wrapper).find(".coveo-quickview-close-button")).on("click",function(){t.modalbox.close()})},e.prototype.extractVideoId=function(){return this.result.clickUri.split("watch?v=")[1]},e.ID="YouTubeThumbnail",e.doExport=function(){s.exportGlobally({YouTubeThumbnail:e})},e.options={width:d.ComponentOptions.buildStringOption({defaultValue:"200px"}),height:d.ComponentOptions.buildStringOption({defaultValue:"112px"}),embed:d.ComponentOptions.buildBooleanOption({defaultValue:!0})},e}(c.Component);e.YouTubeThumbnail=O,h.Initialization.registerAutoCreateComponent(O)},218:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(6),s=o(8),r=o(2),l=o(4),u=o(3),p=o(174),a=o(1),c=o(27);o(549);var d=function(t){function e(o,n,i,u,p,a){void 0===a&&(a=c.ModalBox);var d=t.call(this,o,e.ID,i)||this;d.element=o,d.options=n,d.result=u,d._window=p,d.ModalBox=a,d.options=s.ComponentOptions.initComponentOptions(o,e,n),d._window=d._window||window;var h="";return d.options.overlayColor&&(h+="linear-gradient("+d.options.overlayColor+", "+(d.options.overlayGradient?"rgba(0,0,0,0)":d.options.overlayColor)+"), "),h+="url('"+(d.options.imageUrl||l.Utils.getFieldValue(u,d.options.imageField))+"') center center",d.element.style.background=h,d.element.style.backgroundSize="cover",r.Initialization.automaticallyCreateComponentsInsideResult(o,u),d.configureSpecialBackdropActions(),d}return n(e,t),e.prototype.configureSpecialBackdropActions=function(){if(l.Utils.getFieldValue(this.result,"ytthumbnailurl")){var t=new p.YouTubeThumbnail(a.$$("div").el,{embed:!0},this.getBindings(),this.result,this.ModalBox);a.$$(this.element).on("click",function(e){a.$$(e.target).hasClass("CoveoResultLink")||t.openResultLink()})}},e.ID="Backdrop",e.doExport=function(){u.exportGlobally({Backdrop:e})},e.options={imageUrl:s.ComponentOptions.buildStringOption(),imageField:s.ComponentOptions.buildFieldOption(),overlayColor:s.ComponentOptions.buildColorOption(),overlayGradient:s.ComponentOptions.buildBooleanOption({defaultValue:!1,depend:"overlayColor"})},e}(i.Component);e.Backdrop=d,r.Initialization.registerAutoCreateComponent(d)},479:function(t,e){},549:function(t,e){}});