webpackJsonpCoveo__temporary([27,78],{14:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),s=function(){function e(){}return e.addClassToSVGInContainer=function(t,o){var n=t.querySelector("svg");n.setAttribute("class",""+e.getClass(n)+o)},e.removeClassFromSVGInContainer=function(t,o){var n=t.querySelector("svg");n.setAttribute("class",e.getClass(n).replace(o,""))},e.addStyleToSVGInContainer=function(e,t){var o=e.querySelector("svg");n.each(t,function(e,t){o.style[t]=e})},e.getClass=function(e){var t=e.getAttribute("class");return t?t+" ":""},e}();t.SVGDom=s},212:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SUBSCRIPTION_TYPE={followQuery:"followQuery",followDocument:"followDocument"}},262:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var s=o(0),l=o(10),i=o(80),r=o(53),a=o(27),c=o(3),u=o(5),p=o(212),d=o(7),h=o(1),f=o(12),y=o(9),v=o(6),m=o(8),g=o(2),b=o(24),$=o(67),S=o(18),A=o(617),C=function(e){function t(o,n,s,i){void 0===i&&(i=a.ModalBox);var c=e.call(this,o,t.ID,s)||this;c.element=o,c.options=n,c.ModalBox=i,c.options=m.ComponentOptions.initComponentOptions(o,t,n),c.options.enableMessage&&(c.message=new A.SearchAlertsMessage(o,{closeDelay:c.options.messageCloseDelay},c.getBindings())),c.queryController.getEndpoint().options.isGuestUser?c.logger.warn("Logged in as guest user, search alerts are therefore not available."):c.bind.onRootElement(r.SettingsEvents.settingsPopulateMenu,function(e){c.options.enableManagePanel&&e.menuData.push({text:d.l("SearchAlerts_Panel"),className:"coveo-subscriptions-panel",onOpen:function(){return c.openPanel()},onClose:function(){return c.close()},svgIcon:f.SVGIcons.icons.dropdownFollowQuery,svgIconClassName:"coveo-subscriptions-panel-svg"})});var u=!1;return c.bind.onRootElement(l.QueryEvents.querySuccess,function(){u||(u=!0,c.queryController.getEndpoint().listSubscriptions().then(function(){c.bind.onRootElement(r.SettingsEvents.settingsPopulateMenu,function(e){c.options.enableFollowQuery&&e.menuData.push({text:d.l("SearchAlerts_followQuery"),className:"coveo-follow-query",tooltip:d.l("FollowQueryDescription"),onOpen:function(){return c.followQuery()},onClose:function(){},svgIcon:f.SVGIcons.icons.dropdownFollowQuery,svgIconClassName:"coveo-follow-query-svg"})})}).catch(function(e){if(403!=e.status)throw e}))}),c}return n(t,e),t.prototype.followQuery=function(){var e=this,t=this.queryController.createQueryBuilder({}),o=this.buildFollowQueryRequest(t.build(),this.options);this.usageAnalytics.logCustomEvent(y.analyticsActionCauseList.searchAlertsFollowQuery,{subscription:o.name},this.element),this.queryController.getEndpoint().follow(o).then(function(t){if(t){var o={subscription:t,dom:e.findQueryBoxDom()};h.$$(e.root).trigger(i.SearchAlertsEvents.searchAlertsCreated,o)}else e.triggerSearchAlertsFail()}).catch(function(){e.triggerSearchAlertsFail()})},t.prototype.openPanel=function(){var e=this,t=h.$$("div"),o=h.$$("div",{className:"coveo-subscriptions-panel-title"},d.l("SearchAlerts_Panel"));t.append(o.el);var n=h.$$("div"),l=h.$$("table",{className:"coveo-subscriptions-panel-content",cellspacing:0});n.append(l.el);var i=h.$$("thead");l.append(i.el);var r=h.$$("tr");i.append(r.el);var a=h.$$("th",{className:"coveo-subscriptions-panel-content-type"},d.l("SearchAlerts_Type")),c=h.$$("th",null,d.l("SearchAlerts_Content")),u=h.$$("th",null,d.l("SearchAlerts_Frequency")),p=h.$$("th",{className:"coveo-subscriptions-panel-content-actions"},d.l("SearchAlerts_Actions"));r.append(a.el),r.append(c.el),r.append(u.el),r.append(p.el);var f=h.$$("tbody",{className:"coveo-subscriptions-panel-spacer"},h.$$("tr",null,h.$$("td",{colsspan:3})));l.append(f.el);var y=h.$$("tbody",{className:"coveo-subscriptions-panel-subscriptions"},h.$$("tr",{className:"coveo-subscriptions-panel-no-subscriptions"},h.$$("td",{colspan:3},d.l("SearchAlerts_PanelNoSearchAlerts"))));l.append(y.el);var v="big";return this.queryController.getEndpoint().listSubscriptions().then(function(t){s.each(t,function(t){e.addSearchAlert(t,n)})}).catch(function(){v="small",n.empty(),n.append(e.getFailureMessage().el)}).finally(function(){e.modal=e.ModalBox.open(n.el,{title:t.el.outerHTML,className:"coveo-subscriptions-panel",sizeMod:v})})},t.prototype.getFailureMessage=function(){return h.$$("div",{className:"coveo-subscriptions-panel-fail"},d.l("SearchAlerts_Fail"))},t.prototype.handleSearchAlertsFail=function(){if(null!=this.modal){var e=h.$$(this.modal.wrapper).find(".coveo-modal-body");h.$$(e).empty(),h.$$(e).append(this.getFailureMessage().el)}},t.prototype.close=function(){this.modal&&(this.modal.close(),this.modal=null)},t.prototype.addSearchAlert=function(e,t){var o,n=this,l=[{value:"monthly",label:d.l("Monthly")},{value:"daily",label:d.l("Daily")},{value:"monday",label:d.l("Monday")},{value:"tuesday",label:d.l("Tuesday")},{value:"wednesday",label:d.l("Wednesday")},{value:"thursday",label:d.l("Thursday")},{value:"friday",label:d.l("Friday")},{value:"saturday",label:d.l("Saturday")},{value:"sunday",label:d.l("Sunday")}];if(e.name)if("<empty>"==e.name)o="&lt;empty&gt;";else{var r=h.$$("div").el;r.innerHTML=e.name,o=h.$$(r).text()}else if(e.type==p.SUBSCRIPTION_TYPE.followQuery){var a=e.typeConfig;o=s.escape(a.query.q)||d.l("EmptyQuery")}else{var a=e.typeConfig;o=s.escape(a.title||a.id)}var c=h.$$("tr",{className:"coveo-subscriptions-panel-subscription"}),u=s.pluck(l,"value"),f=function(e){return s.findWhere(l,{value:e}).label},v=h.$$("td",{className:"coveo-subscriptions-panel-content-type"},d.l("SearchAlerts_Type_"+e.type)),m=h.$$("td",{className:"coveo-subscriptions-panel-context",title:o});m.setHtml(o);var g=h.$$("td",null,h.$$("div",{className:"coveo-subscriptions-panel-frequency"},function(){return new $.Dropdown(function(t){n.usageAnalytics.logCustomEvent(y.analyticsActionCauseList.searchAlertsUpdateSubscription,{subscription:o,frequency:t.getValue()},n.element),e.frequency=t.getValue(),n.updateAndSyncSearchAlert(e)},u,f).build()}())),b=h.$$("td",{className:"coveo-subscriptions-panel-content-actions"},null,h.$$("div",{className:"coveo-subscriptions-panel-action coveo-subscriptions-panel-action-unfollow"},d.l("SearchAlerts_unFollowing")),h.$$("div",{className:"coveo-subscriptions-panel-action coveo-subscriptions-panel-action-follow"},d.l("SearchAlerts_follow")));c.append(v.el),c.append(m.el),c.append(g.el),c.append(b.el);var S=t.find(".coveo-subscriptions-panel-no-subscriptions");c.insertBefore(S),g.find("select").value=e.frequency,h.$$(c.find(".coveo-subscriptions-panel-action-unfollow")).on("click",function(){c.addClass("coveo-subscription-unfollowed"),n.queryController.getEndpoint().deleteSubscription(e).then(function(){e.type==p.SUBSCRIPTION_TYPE.followDocument?n.logAnalyticsEvent(y.analyticsActionCauseList.searchAlertsUnfollowDocument,e):e.type==p.SUBSCRIPTION_TYPE.followQuery&&n.logAnalyticsEvent(y.analyticsActionCauseList.searchAlertsUnfollowQuery,e),delete e.id;var t={subscription:e};h.$$(n.root).trigger(i.SearchAlertsEvents.searchAlertsDeleted,t)}).catch(function(){n.handleSearchAlertsFail()})}),h.$$(c.find(".coveo-subscriptions-panel-action-follow")).on("click",function(){c.removeClass("coveo-subscription-unfollowed"),n.queryController.getEndpoint().follow(e).then(function(t){e.type==p.SUBSCRIPTION_TYPE.followDocument?n.logAnalyticsEvent(y.analyticsActionCauseList.searchAlertsFollowDocument,e):e.type==p.SUBSCRIPTION_TYPE.followQuery&&n.logAnalyticsEvent(y.analyticsActionCauseList.searchAlertsFollowQuery,e),e.id=t.id;var o={subscription:e};h.$$(n.root).trigger(i.SearchAlertsEvents.searchAlertsCreated,o)}).catch(function(){n.handleSearchAlertsFail()})})},t.prototype.updateAndSyncSearchAlert=function(e){var t=this;this.queryController.getEndpoint().updateSubscription(e).then(function(t){return s.extend(e,t)}).catch(function(){t.handleSearchAlertsFail()})},t.prototype.triggerSearchAlertsFail=function(){var e={dom:this.findQueryBoxDom()};h.$$(this.root).trigger(i.SearchAlertsEvents.searchAlertsFail,e)},t.prototype.findQueryBoxDom=function(){var e,t=this.searchInterface.getComponents("Querybox");if(t&&t.length>0)e=s.first(t).element;else{var o=this.searchInterface.getComponents("Omnibox");o&&o.length>0&&(e=s.first(o).element)}return e},t.prototype.buildFollowQueryRequest=function(e,t){var o={query:e};return t.modifiedDateField&&(o.modifiedDateField=t.modifiedDateField),{type:p.SUBSCRIPTION_TYPE.followQuery,typeConfig:o,name:this.message.getFollowQueryMessage(e.q)}},t.prototype.logAnalyticsEvent=function(e,t){this.usageAnalytics.logCustomEvent(e,{subscription:t.name},this.element)},t.create=function(e,o,n){return u.Assert.exists(e),new t(e,o,b.get(n,S.SearchInterface).getBindings())},t.ID="SearchAlerts",t.doExport=function(){c.exportGlobally({SearchAlerts:t,SearchAlertsMessage:A.SearchAlertsMessage})},t.options={enableManagePanel:m.ComponentOptions.buildBooleanOption({defaultValue:!0}),enableFollowQuery:m.ComponentOptions.buildBooleanOption({defaultValue:!0}),modifiedDateField:m.ComponentOptions.buildFieldOption(),enableMessage:m.ComponentOptions.buildBooleanOption({defaultValue:!0}),messageCloseDelay:m.ComponentOptions.buildNumberOption({defaultValue:2e3,min:0,depend:"enableMessage"})},t}(v.Component);t.SearchAlerts=C,g.Initialization.registerAutoCreateComponent(C)},617:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var s=o(6),l=o(8),i=o(80),r=o(10),a=o(212),c=o(130),u=o(7),p=o(1),d=o(0),h=o(12),f=o(14),y=function(e){function t(o,n,s){var l=e.call(this,o,t.ID,s)||this;return l.element=o,l.options=n,l.bindings=s,l.bind.onRootElement(i.SearchAlertsEvents.searchAlertsCreated,function(e){return l.handleSubscriptionCreated(e)}),l.bind.oneRootElement(i.SearchAlertsEvents.searchAlertsFail,function(e){return l.handleSearchAlertsFail(e)}),l.bind.oneRootElement(i.SearchAlertsEvents.searchAlertsDeleted,function(){return l.close()}),l.bind.oneRootElement(r.QueryEvents.newQuery,function(){return l.close()}),l}return n(t,e),t.prototype.getCssClass=function(){return"coveo-subscriptions-messages"},t.prototype.getFollowQueryMessage=function(e,t){var o=this;void 0===t&&(t=!1);var n={text:[]};p.$$(this.root).trigger(i.SearchAlertsEvents.searchAlertsPopulateMessage,n);var s,l=(t?"<ul>":"")+function(){return d.map(n.text,function(e){return e=o.formatMessageArgumentsText(e),(t?"<li>":"(")+e+(t?"</li>":")")}).join(" ")}()+(t?"</ul>":"");return e&&0!=n.text.length&&(s=d.escape(e)+" "+l),e&&0==n.text.length&&(s=""+d.escape(e)),e||0==n.text.length||(s=""+l),e||0!=n.text.length||(s=t?u.l("EmptyQuery"):d.unescape(u.l("EmptyQuery"))),s},t.prototype.showMessage=function(e,t,o){var n=this;this.message=p.$$("div",{className:"coveo-subscriptions-messages"}),this.message.el.innerHTML="\n      <div class='coveo-subscriptions-messages-message'>\n        <div class='coveo-subscriptions-messages-content'><span>"+t+"</span></div>\n        <div class='coveo-subscriptions-messages-info-close'>"+h.SVGIcons.icons.checkboxHookExclusionMore+"</div>\n      </div>",this.message.toggleClass("coveo-subscriptions-messages-error",o);var s=this.message.find(".coveo-subscriptions-messages-info-close");f.SVGDom.addClassToSVGInContainer(s,"coveo-subscript-messages-info-close-svg"),p.$$(s).on("click",function(){return n.close()}),c.PopupUtils.positionPopup(this.message.el,e.el,this.root,{horizontal:c.PopupHorizontalAlignment.INNERLEFT,vertical:c.PopupVerticalAlignment.BOTTOM,verticalOffset:12,horizontalClip:!0},this.root),this.startCloseDelay(),this.message.on("mouseleave",function(){n.startCloseDelay()}),this.message.on("mouseenter",function(){n.stopCloseDelay()})},t.prototype.formatMessageArgumentsText=function(e){return e=d.isString(e)?d.escape(e):e.lineThrough?'<span style="text-decoration:line-through">'+d.escape(e.value)+"</span>":d.escape(e.value)},t.prototype.handleSubscriptionCreated=function(e){if(this.close(),null!=e.dom)if(e.subscription.type==a.SUBSCRIPTION_TYPE.followQuery){var t=e.subscription.typeConfig;this.showMessage(p.$$(e.dom),u.l("SubscriptionsMessageFollowQuery",this.getFollowQueryMessage(t.query.q,!0)),!1)}else this.showMessage(p.$$(e.dom),u.l("SubscriptionsMessageFollow"),!1)},t.prototype.handleSearchAlertsFail=function(e){this.close(),null!=e.dom&&this.showMessage(p.$$(e.dom),u.l("SearchAlerts_Fail"),!0)},t.prototype.startCloseDelay=function(){var e=this;clearTimeout(this.closeTimeout),this.closeTimeout=window.setTimeout(function(){e.close()},this.options.closeDelay)},t.prototype.stopCloseDelay=function(){clearTimeout(this.closeTimeout)},t.prototype.close=function(){null!=this.message&&(clearTimeout(this.closeTimeout),this.message.remove(),this.message=null)},t.ID="SubscriptionsMessages",t.options={closeDelay:l.ComponentOptions.buildNumberOption({defaultValue:2e3,min:0})},t}(s.Component);t.SearchAlertsMessage=y},67:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),s=o(7),l=o(0),i=o(3),r=function(){function e(e,t,o,n){void 0===e&&(e=function(e){}),void 0===o&&(o=s.l),this.onChange=e,this.listOfValues=t,this.getDisplayValue=o,this.label=n,this.optionsElement=[],this.buildContent(),this.select(0,!1),this.bindEvents()}return e.doExport=function(){i.exportGlobally({Dropdown:e})},e.prototype.reset=function(){this.select(0,!1)},e.prototype.setId=function(e){n.$$(this.element).setAttribute("id",e)},e.prototype.getElement=function(){return this.element},e.prototype.getValue=function(){return this.selectElement.value},e.prototype.select=function(e,t){void 0===t&&(t=!0),this.selectOption(this.optionsElement[e],t)},e.prototype.build=function(){return this.element},e.prototype.setValue=function(e){var t=this;l.each(this.optionsElement,function(o){n.$$(o).getAttribute("data-value")==e&&t.selectOption(o)})},e.prototype.selectOption=function(e,t){void 0===t&&(t=!0),this.selectElement.value=e.value,t&&this.onChange(this)},e.prototype.buildContent=function(){var e=this;this.selectElement=n.$$("select",{className:"coveo-dropdown"}).el,this.label&&this.selectElement.setAttribute("aria-label",s.l(this.label));var t=this.buildOptions();l.each(t,function(t){n.$$(e.selectElement).append(t)}),this.element=this.selectElement},e.prototype.buildOptions=function(){var e=this,t=[];return l.each(this.listOfValues,function(o){t.push(e.buildOption(o))}),t},e.prototype.buildOption=function(e){var t=n.$$("option");return t.setAttribute("data-value",e),t.setAttribute("value",e),t.text(this.getDisplayValue(e)),this.optionsElement.push(t.el),t.el},e.prototype.bindEvents=function(){var e=this;n.$$(this.selectElement).on("change",function(){return e.onChange(e)})},e}();t.Dropdown=r}});