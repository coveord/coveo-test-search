webpackJsonpCoveo__temporary([32,83],{226:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SUBSCRIPTION_TYPE={followQuery:"followQuery",followDocument:"followDocument"}},277:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),s=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(s,l){function i(e){try{a(n.next(e))}catch(e){l(e)}}function r(e){try{a(n.throw(e))}catch(e){l(e)}}function a(e){e.done?s(e.value):new o(function(t){t(e.value)}).then(i,r)}a((n=n.apply(e,t||[])).next())})},l=this&&this.__generator||function(e,t){function o(e){return function(t){return n([e,t])}}function n(o){if(s)throw new TypeError("Generator is already executing.");for(;a;)try{if(s=1,l&&(i=l[2&o[0]?"return":o[0]?"throw":"next"])&&!(i=i.call(l,o[1])).done)return i;switch(l=0,i&&(o=[0,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,l=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],l=0}finally{s=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}var s,l,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r};Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(11),a=o(84),c=o(54),u=o(26),p=o(3),h=o(5),d=o(226),f=o(6),y=o(1),v=o(12),m=o(10),g=o(7),b=o(8),$=o(2),A=o(30),S=o(63),w=o(19),C=o(668),E=function(e){function t(o,n,s,l){void 0===l&&(l=u.ModalBox);var i=e.call(this,o,t.ID,s)||this;i.element=o,i.options=n,i.ModalBox=l,i.options=b.ComponentOptions.initComponentOptions(o,t,n),i.options.enableMessage&&(i.message=new C.SearchAlertsMessage(o,{closeDelay:i.options.messageCloseDelay},i.getBindings())),i.queryController.getEndpoint().options.isGuestUser?i.logger.warn("Logged in as guest user, search alerts are therefore not available."):i.bind.onRootElement(c.SettingsEvents.settingsPopulateMenu,function(e){i.options.enableManagePanel&&e.menuData.push({text:f.l("SearchAlerts_Panel"),className:"coveo-subscriptions-panel",onOpen:function(){return i.openPanel()},onClose:function(){return i.close()},svgIcon:v.SVGIcons.icons.dropdownFollowQuery,svgIconClassName:"coveo-subscriptions-panel-svg"})});var a=!1;return i.bind.onRootElement(r.QueryEvents.querySuccess,function(){a||(a=!0,i.queryController.getEndpoint().listSubscriptions().then(function(){i.bind.onRootElement(c.SettingsEvents.settingsPopulateMenu,function(e){i.options.enableFollowQuery&&e.menuData.push({text:f.l("SearchAlerts_followQuery"),className:"coveo-follow-query",tooltip:f.l("FollowQueryDescription"),onOpen:function(){return i.followQuery()},onClose:function(){},svgIcon:v.SVGIcons.icons.dropdownFollowQuery,svgIconClassName:"coveo-follow-query-svg"})})}).catch(function(e){if(403!=e.status)throw e}))}),i}return n(t,e),t.prototype.followQuery=function(){var e=this,t=this.queryController.createQueryBuilder({}),o=this.buildFollowQueryRequest(t.build(),this.options);this.usageAnalytics.logCustomEvent(m.analyticsActionCauseList.searchAlertsFollowQuery,{subscription:o.name},this.element),this.queryController.getEndpoint().follow(o).then(function(t){if(t){var o={subscription:t,dom:e.findQueryBoxDom()};y.$$(e.root).trigger(a.SearchAlertsEvents.searchAlertsCreated,o)}else e.triggerSearchAlertsFail()}).catch(function(){e.triggerSearchAlertsFail()})},t.prototype.openPanel=function(){return s(this,void 0,void 0,function(){var e,t,o,n,s,r,a,c,u,p,h,d,v,m,g,b=this;return l(this,function(l){switch(l.label){case 0:e=y.$$("div"),t=y.$$("div",{className:"coveo-subscriptions-panel-title"},f.l("SearchAlerts_Panel")),e.append(t.el),o=y.$$("div"),n=y.$$("table",{className:"coveo-subscriptions-panel-content",cellspacing:0}),o.append(n.el),s=y.$$("thead"),n.append(s.el),r=y.$$("tr"),s.append(r.el),a=y.$$("th",{className:"coveo-subscriptions-panel-content-type"},f.l("SearchAlerts_Type")),c=y.$$("th",null,f.l("SearchAlerts_Content")),u=y.$$("th",null,f.l("SearchAlerts_Frequency")),p=y.$$("th",{className:"coveo-subscriptions-panel-content-actions"},f.l("SearchAlerts_Actions")),r.append(a.el),r.append(c.el),r.append(u.el),r.append(p.el),h=y.$$("tbody",{className:"coveo-subscriptions-panel-spacer"},y.$$("tr",null,y.$$("td",{colsspan:3}))),n.append(h.el),d=y.$$("tbody",{className:"coveo-subscriptions-panel-subscriptions"},y.$$("tr",{className:"coveo-subscriptions-panel-no-subscriptions"},y.$$("td",{colspan:3},f.l("SearchAlerts_PanelNoSearchAlerts")))),n.append(d.el),v="big",l.label=1;case 1:return l.trys.push([1,3,,4]),[4,this.queryController.getEndpoint().listSubscriptions()];case 2:return m=l.sent(),i.each(m,function(e){return b.addSearchAlert(e,o)}),[3,4];case 3:return g=l.sent(),this.logger.error("Error retrieving subscriptions",g),v="small",o.empty(),o.append(this.getFailureMessage().el),[3,4];case 4:return this.modal=this.ModalBox.open(o.el,{title:e.el.outerHTML,className:"coveo-subscriptions-panel",sizeMod:v,body:this.searchInterface.options.modalContainer}),[2]}})})},t.prototype.getFailureMessage=function(){return y.$$("div",{className:"coveo-subscriptions-panel-fail"},f.l("SearchAlerts_Fail"))},t.prototype.handleSearchAlertsFail=function(){if(null!=this.modal){var e=y.$$(this.modal.wrapper).find(".coveo-modal-body");y.$$(e).empty(),y.$$(e).append(this.getFailureMessage().el)}},t.prototype.close=function(){this.modal&&(this.modal.close(),this.modal=null)},t.prototype.addSearchAlert=function(e,t){var o,n=this,s=[{value:"monthly",label:f.l("Monthly")},{value:"daily",label:f.l("Daily")},{value:"monday",label:f.l("Monday")},{value:"tuesday",label:f.l("Tuesday")},{value:"wednesday",label:f.l("Wednesday")},{value:"thursday",label:f.l("Thursday")},{value:"friday",label:f.l("Friday")},{value:"saturday",label:f.l("Saturday")},{value:"sunday",label:f.l("Sunday")}];if(e.name)if("<empty>"==e.name)o="&lt;empty&gt;";else{var l=y.$$("div").el;l.innerHTML=e.name,o=y.$$(l).text()}else if(e.type==d.SUBSCRIPTION_TYPE.followQuery){var r=e.typeConfig;o=i.escape(r.query.q)||f.l("EmptyQuery")}else{var r=e.typeConfig;o=i.escape(r.title||r.id)}var c=y.$$("tr",{className:"coveo-subscriptions-panel-subscription"}),u=i.pluck(s,"value"),p=function(e){return i.findWhere(s,{value:e}).label},h=y.$$("td",{className:"coveo-subscriptions-panel-content-type"},f.l("SearchAlerts_Type_"+e.type)),v=y.$$("td",{className:"coveo-subscriptions-panel-context",title:o});v.setHtml(o);var g=y.$$("td",null,y.$$("div",{className:"coveo-subscriptions-panel-frequency"},function(){return new S.Dropdown(function(t){n.usageAnalytics.logCustomEvent(m.analyticsActionCauseList.searchAlertsUpdateSubscription,{subscription:o,frequency:t.getValue()},n.element),e.frequency=t.getValue(),n.updateAndSyncSearchAlert(e)},u,p).build()}())),b=y.$$("td",{className:"coveo-subscriptions-panel-content-actions"},null,y.$$("div",{className:"coveo-subscriptions-panel-action coveo-subscriptions-panel-action-unfollow"},f.l("SearchAlerts_unFollowing")),y.$$("div",{className:"coveo-subscriptions-panel-action coveo-subscriptions-panel-action-follow"},f.l("SearchAlerts_follow")));c.append(h.el),c.append(v.el),c.append(g.el),c.append(b.el);var $=t.find(".coveo-subscriptions-panel-no-subscriptions");c.insertBefore($),g.find("select").value=e.frequency,y.$$(c.find(".coveo-subscriptions-panel-action-unfollow")).on("click",function(){c.addClass("coveo-subscription-unfollowed"),n.queryController.getEndpoint().deleteSubscription(e).then(function(){e.type==d.SUBSCRIPTION_TYPE.followDocument?n.logAnalyticsEvent(m.analyticsActionCauseList.searchAlertsUnfollowDocument,e):e.type==d.SUBSCRIPTION_TYPE.followQuery&&n.logAnalyticsEvent(m.analyticsActionCauseList.searchAlertsUnfollowQuery,e),delete e.id;var t={subscription:e};y.$$(n.root).trigger(a.SearchAlertsEvents.searchAlertsDeleted,t)}).catch(function(){n.handleSearchAlertsFail()})}),y.$$(c.find(".coveo-subscriptions-panel-action-follow")).on("click",function(){c.removeClass("coveo-subscription-unfollowed"),n.queryController.getEndpoint().follow(e).then(function(t){e.type==d.SUBSCRIPTION_TYPE.followDocument?n.logAnalyticsEvent(m.analyticsActionCauseList.searchAlertsFollowDocument,e):e.type==d.SUBSCRIPTION_TYPE.followQuery&&n.logAnalyticsEvent(m.analyticsActionCauseList.searchAlertsFollowQuery,e),e.id=t.id;var o={subscription:e};y.$$(n.root).trigger(a.SearchAlertsEvents.searchAlertsCreated,o)}).catch(function(){n.handleSearchAlertsFail()})})},t.prototype.updateAndSyncSearchAlert=function(e){var t=this;this.queryController.getEndpoint().updateSubscription(e).then(function(t){return i.extend(e,t)}).catch(function(){t.handleSearchAlertsFail()})},t.prototype.triggerSearchAlertsFail=function(){var e={dom:this.findQueryBoxDom()};y.$$(this.root).trigger(a.SearchAlertsEvents.searchAlertsFail,e)},t.prototype.findQueryBoxDom=function(){var e,t=this.searchInterface.getComponents("Querybox");if(t&&t.length>0)e=i.first(t).element;else{var o=this.searchInterface.getComponents("Omnibox");o&&o.length>0&&(e=i.first(o).element)}return e},t.prototype.buildFollowQueryRequest=function(e,t){var o={query:e};return t.modifiedDateField&&(o.modifiedDateField=t.modifiedDateField),{type:d.SUBSCRIPTION_TYPE.followQuery,typeConfig:o,name:this.message.getFollowQueryMessage(e.q)}},t.prototype.logAnalyticsEvent=function(e,t){this.usageAnalytics.logCustomEvent(e,{subscription:t.name},this.element)},t.create=function(e,o,n){return h.Assert.exists(e),new t(e,o,A.get(n,w.SearchInterface).getBindings())},t.ID="SearchAlerts",t.doExport=function(){p.exportGlobally({SearchAlerts:t,SearchAlertsMessage:C.SearchAlertsMessage})},t.options={enableManagePanel:b.ComponentOptions.buildBooleanOption({defaultValue:!0}),enableFollowQuery:b.ComponentOptions.buildBooleanOption({defaultValue:!0}),modifiedDateField:b.ComponentOptions.buildFieldOption(),enableMessage:b.ComponentOptions.buildBooleanOption({defaultValue:!0}),messageCloseDelay:b.ComponentOptions.buildNumberOption({defaultValue:2e3,min:0,depend:"enableMessage"})},t}(g.Component);t.SearchAlerts=E,$.Initialization.registerAutoCreateComponent(E)},63:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),s=o(6),l=o(0),i=o(3),r=function(){function e(e,t,o,n){void 0===e&&(e=function(e){}),void 0===o&&(o=s.l),this.onChange=e,this.listOfValues=t,this.getDisplayValue=o,this.label=n,this.optionsElement=[],this.buildContent(),this.select(0,!1),this.bindEvents()}return e.doExport=function(){i.exportGlobally({Dropdown:e})},e.prototype.reset=function(){this.select(0,!1)},e.prototype.setId=function(e){n.$$(this.element).setAttribute("id",e)},e.prototype.getElement=function(){return this.element},e.prototype.getValue=function(){return this.selectElement.value},e.prototype.select=function(e,t){void 0===t&&(t=!0),this.selectOption(this.optionsElement[e],t)},e.prototype.build=function(){return this.element},e.prototype.setValue=function(e){var t=this;l.each(this.optionsElement,function(o){n.$$(o).getAttribute("data-value")==e&&t.selectOption(o)})},e.prototype.selectOption=function(e,t){void 0===t&&(t=!0),this.selectElement.value=e.value,t&&this.onChange(this)},e.prototype.buildContent=function(){var e=this;this.selectElement=n.$$("select",{className:"coveo-dropdown"}).el,this.label&&this.selectElement.setAttribute("aria-label",s.l(this.label));var t=this.buildOptions();l.each(t,function(t){n.$$(e.selectElement).append(t)}),this.element=this.selectElement},e.prototype.buildOptions=function(){var e=this,t=[];return l.each(this.listOfValues,function(o){t.push(e.buildOption(o))}),t},e.prototype.buildOption=function(e){var t=n.$$("option");return t.setAttribute("data-value",e),t.setAttribute("value",e),t.text(this.getDisplayValue(e)),this.optionsElement.push(t.el),t.el},e.prototype.bindEvents=function(){var e=this;n.$$(this.selectElement).on("change",function(){return e.onChange(e)})},e}();t.Dropdown=r},668:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var s=o(7),l=o(8),i=o(84),r=o(11),a=o(226),c=o(194),u=o(6),p=o(1),h=o(0),d=o(12),f=o(15),y=function(e){function t(o,n,s){var l=e.call(this,o,t.ID,s)||this;return l.element=o,l.options=n,l.bindings=s,l.bind.onRootElement(i.SearchAlertsEvents.searchAlertsCreated,function(e){return l.handleSubscriptionCreated(e)}),l.bind.oneRootElement(i.SearchAlertsEvents.searchAlertsFail,function(e){return l.handleSearchAlertsFail(e)}),l.bind.oneRootElement(i.SearchAlertsEvents.searchAlertsDeleted,function(){return l.close()}),l.bind.oneRootElement(r.QueryEvents.newQuery,function(){return l.close()}),l}return n(t,e),t.prototype.getCssClass=function(){return"coveo-subscriptions-messages"},t.prototype.getFollowQueryMessage=function(e,t){var o=this;void 0===t&&(t=!1);var n={text:[]};p.$$(this.root).trigger(i.SearchAlertsEvents.searchAlertsPopulateMessage,n);var s,l=(t?"<ul>":"")+function(){return h.map(n.text,function(e){return e=o.formatMessageArgumentsText(e),(t?"<li>":"(")+e+(t?"</li>":")")}).join(" ")}()+(t?"</ul>":"");return e&&0!=n.text.length&&(s=h.escape(e)+" "+l),e&&0==n.text.length&&(s=""+h.escape(e)),e||0==n.text.length||(s=""+l),e||0!=n.text.length||(s=t?u.l("EmptyQuery"):h.unescape(u.l("EmptyQuery"))),s},t.prototype.showMessage=function(e,t,o){var n=this;this.message=p.$$("div",{className:"coveo-subscriptions-messages"}),this.message.el.innerHTML="\n      <div class='coveo-subscriptions-messages-message'>\n        <div class='coveo-subscriptions-messages-content'><span>"+t+"</span></div>\n        <div class='coveo-subscriptions-messages-info-close'>"+d.SVGIcons.icons.checkboxHookExclusionMore+"</div>\n      </div>",this.message.toggleClass("coveo-subscriptions-messages-error",o);var s=this.message.find(".coveo-subscriptions-messages-info-close");f.SVGDom.addClassToSVGInContainer(s,"coveo-subscript-messages-info-close-svg"),p.$$(s).on("click",function(){return n.close()}),c.PopupUtils.positionPopup(this.message.el,e.el,this.root,{horizontal:c.PopupHorizontalAlignment.INNERLEFT,vertical:c.PopupVerticalAlignment.BOTTOM,verticalOffset:12,horizontalClip:!0},this.root),this.startCloseDelay(),this.message.on("mouseleave",function(){n.startCloseDelay()}),this.message.on("mouseenter",function(){n.stopCloseDelay()})},t.prototype.formatMessageArgumentsText=function(e){return e=h.isString(e)?h.escape(e):e.lineThrough?'<span style="text-decoration:line-through">'+h.escape(e.value)+"</span>":h.escape(e.value)},t.prototype.handleSubscriptionCreated=function(e){if(this.close(),null!=e.dom)if(e.subscription.type==a.SUBSCRIPTION_TYPE.followQuery){var t=e.subscription.typeConfig;this.showMessage(p.$$(e.dom),u.l("SubscriptionsMessageFollowQuery",this.getFollowQueryMessage(t.query.q,!0)),!1)}else this.showMessage(p.$$(e.dom),u.l("SubscriptionsMessageFollow"),!1)},t.prototype.handleSearchAlertsFail=function(e){this.close(),null!=e.dom&&this.showMessage(p.$$(e.dom),u.l("SearchAlerts_Fail"),!0)},t.prototype.startCloseDelay=function(){var e=this;clearTimeout(this.closeTimeout),this.closeTimeout=window.setTimeout(function(){e.close()},this.options.closeDelay)},t.prototype.stopCloseDelay=function(){clearTimeout(this.closeTimeout)},t.prototype.close=function(){null!=this.message&&(clearTimeout(this.closeTimeout),this.message.remove(),this.message=null)},t.ID="SubscriptionsMessages",t.options={closeDelay:l.ComponentOptions.buildNumberOption({defaultValue:2e3,min:0})},t}(s.Component);t.SearchAlertsMessage=y}});
//# sourceMappingURL=SearchAlerts.min__96eeaf9466001777995a.js.map