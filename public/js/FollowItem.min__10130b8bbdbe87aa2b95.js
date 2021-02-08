webpackJsonpCoveo__temporary([52],{226:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SUBSCRIPTION_TYPE={followQuery:"followQuery",followDocument:"followDocument"}},276:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),l=o(84),s=o(3),r=o(5),c=o(226),a=o(6),u=o(1),d=o(25),p=o(21),h=o(15),f=o(12),m=o(4),g=o(9),v=o(7),w=o(8),y=o(2),b=function(t){function e(o,n,i,s){var c=t.call(this,o,e.ID,i)||this;c.element=o,c.options=n,c.bindings=i,c.result=s,c.options=w.ComponentOptions.initComponentOptions(o,e,n),r.Assert.exists(c.result),c.container=u.$$(c.element),c.text=u.$$("span");var a=c.buildIcon(),p=c.buildLoadingIcon();return c.container.append(a),c.container.append(p),c.container.append(c.text.el),c.container.on("click",function(){return c.toggleFollow()}),c.container.setAttribute("tabindex","0"),c.bind.on(c.container,"keyup",d.KeyboardUtils.keypressAction(d.KEYBOARD.ENTER,function(){return c.toggleFollow()})),c.bind.onRootElement(l.SearchAlertsEvents.searchAlertsDeleted,function(t){return c.handleSubscriptionDeleted(t)}),c.bind.onRootElement(l.SearchAlertsEvents.searchAlertsCreated,function(t){return c.handleSubscriptionCreated(t)}),c.container.addClass("coveo-follow-item-loading"),c.updateIsFollowed(),c}return n(e,t),e.prototype.setFollowed=function(t){this.container.removeClass("coveo-follow-item-loading"),this.subscription=t,this.container.addClass("coveo-follow-item-followed"),this.text.text(a.l("SearchAlerts_unFollowing"))},e.prototype.setNotFollowed=function(){this.container.removeClass("coveo-follow-item-loading"),this.subscription=e.buildFollowRequest(this.getId(),this.result.title,this.options),this.container.removeClass("coveo-follow-item-followed"),this.text.text(a.l("SearchAlerts_follow"))},e.prototype.toggleFollow=function(){var t=this;this.container.hasClass("coveo-follow-item-loading")||(this.container.removeClass("coveo-follow-item-followed"),this.container.addClass("coveo-follow-item-loading"),this.subscription.id?(this.logAnalyticsEvent(g.analyticsActionCauseList.searchAlertsUnfollowDocument),this.queryController.getEndpoint().deleteSubscription(this.subscription).then(function(){var e={subscription:t.subscription,dom:t.element};u.$$(t.root).trigger(l.SearchAlertsEvents.searchAlertsDeleted,e)}).catch(function(){t.container.removeClass("coveo-follow-item-loading");var e={dom:t.element};u.$$(t.root).trigger(l.SearchAlertsEvents.searchAlertsFail,e)})):(this.logAnalyticsEvent(g.analyticsActionCauseList.searchAlertsFollowDocument),this.queryController.getEndpoint().follow(this.subscription).then(function(e){var o={subscription:e,dom:t.element};u.$$(t.root).trigger(l.SearchAlertsEvents.searchAlertsCreated,o)}).catch(function(){t.container.removeClass("coveo-follow-item-loading");var e={dom:t.element};u.$$(t.root).trigger(l.SearchAlertsEvents.searchAlertsFail,e)})))},e.prototype.getText=function(){return this.text.text()},e.prototype.updateIsFollowed=function(){var t=this;this.queryController.getEndpoint().listSubscriptions().then(function(e){if(i.isArray(e)){var o=i.find(e,function(e){var o=e.typeConfig;return o&&null!=o.id&&o.id==t.getId()});null!=o?t.setFollowed(o):t.setNotFollowed()}else t.remove()}).catch(function(){t.remove()})},e.prototype.buildIcon=function(){var t=u.$$("span",{className:"coveo-follow-item-icon"},f.SVGIcons.icons.dropdownFollowQuery);return h.SVGDom.addClassToSVGInContainer(t.el,"coveo-follow-item-icon-svg"),t.el},e.prototype.buildLoadingIcon=function(){var t=u.$$("span",{className:"coveo-follow-item-icon-loading"},f.SVGIcons.icons.loading);return h.SVGDom.addClassToSVGInContainer(t.el,"coveo-follow-item-icon-loading-svg"),t.el},e.prototype.handleSubscriptionDeleted=function(t){if(t.subscription&&t.subscription.type==c.SUBSCRIPTION_TYPE.followDocument){t.subscription.typeConfig.id==this.getId()&&this.setNotFollowed()}},e.prototype.handleSubscriptionCreated=function(t){if(t.subscription&&t.subscription.type==c.SUBSCRIPTION_TYPE.followDocument){t.subscription.typeConfig.id==this.getId()&&this.setFollowed(t.subscription)}},e.prototype.remove=function(){this.element.parentElement&&this.element.parentElement.removeChild(this.element)},e.prototype.getId=function(){return m.Utils.getFieldValue(this.result,"sysurihash")||m.Utils.getFieldValue(this.result,"urihash")},e.buildFollowRequest=function(t,e,o){var n={id:t,title:e};return o.modifiedDateField&&(n.modifiedDateField=o.modifiedDateField),o.watchedFields&&(n.watchedFields=o.watchedFields),{type:c.SUBSCRIPTION_TYPE.followDocument,typeConfig:n,name:e}},e.prototype.logAnalyticsEvent=function(t){this.usageAnalytics.logCustomEvent(t,{author:p.QueryUtils.getAuthor(this.result),documentLanguage:p.QueryUtils.getLanguage(this.result),documentSource:p.QueryUtils.getSource(this.result),documentTitle:this.result.title,contentIDValue:p.QueryUtils.getPermanentId(this.result).fieldValue,contentIDKey:p.QueryUtils.getPermanentId(this.result).fieldUsed},this.element)},e.ID="FollowItem",e.doExport=function(){s.exportGlobally({FollowItem:e})},e.options={watchedFields:w.ComponentOptions.buildFieldsOption(),modifiedDateField:w.ComponentOptions.buildStringOption()},e}(v.Component);e.FollowItem=b,y.Initialization.registerAutoCreateComponent(b)}});
//# sourceMappingURL=FollowItem.min__10130b8bbdbe87aa2b95.js.map