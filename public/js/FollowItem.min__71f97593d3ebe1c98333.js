webpackJsonpCoveo__temporary([38],{14:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0),i=function(){function t(){}return t.addClassToSVGInContainer=function(e,o){var n=e.querySelector("svg");n.setAttribute("class",""+t.getClass(n)+o)},t.removeClassFromSVGInContainer=function(e,o){var n=e.querySelector("svg");n.setAttribute("class",t.getClass(n).replace(o,""))},t.addStyleToSVGInContainer=function(t,e){var o=t.querySelector("svg");n.each(e,function(t,e){o.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=i},207:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SUBSCRIPTION_TYPE={followQuery:"followQuery",followDocument:"followDocument"}},256:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(6),l=o(8),s=o(5),r=o(80),c=o(207),a=o(2),u=o(7),d=o(1),p=o(9),f=o(20),h=o(0),m=o(4),g=o(26),v=o(3),y=o(12),w=o(14),C=function(t){function e(o,n,i,c){var a=t.call(this,o,e.ID,i)||this;a.element=o,a.options=n,a.bindings=i,a.result=c,a.options=l.ComponentOptions.initComponentOptions(o,e,n),s.Assert.exists(a.result),a.container=d.$$(a.element),a.text=d.$$("span");var u=a.buildIcon(),p=a.buildLoadingIcon();return a.container.append(u),a.container.append(p),a.container.append(a.text.el),a.container.on("click",function(){return a.toggleFollow()}),a.container.setAttribute("tabindex","0"),a.bind.on(a.container,"keyup",g.KeyboardUtils.keypressAction(g.KEYBOARD.ENTER,function(){return a.toggleFollow()})),a.bind.onRootElement(r.SearchAlertsEvents.searchAlertsDeleted,function(t){return a.handleSubscriptionDeleted(t)}),a.bind.onRootElement(r.SearchAlertsEvents.searchAlertsCreated,function(t){return a.handleSubscriptionCreated(t)}),a.container.addClass("coveo-follow-item-loading"),a.updateIsFollowed(),a}return n(e,t),e.prototype.setFollowed=function(t){this.container.removeClass("coveo-follow-item-loading"),this.subscription=t,this.container.addClass("coveo-follow-item-followed"),this.text.text(u.l("SearchAlerts_unFollowing"))},e.prototype.setNotFollowed=function(){this.container.removeClass("coveo-follow-item-loading"),this.subscription=e.buildFollowRequest(this.getId(),this.result.title,this.options),this.container.removeClass("coveo-follow-item-followed"),this.text.text(u.l("SearchAlerts_follow"))},e.prototype.toggleFollow=function(){var t=this;this.container.hasClass("coveo-follow-item-loading")||(this.container.removeClass("coveo-follow-item-followed"),this.container.addClass("coveo-follow-item-loading"),this.subscription.id?(this.logAnalyticsEvent(p.analyticsActionCauseList.searchAlertsUnfollowDocument),this.queryController.getEndpoint().deleteSubscription(this.subscription).then(function(){var e={subscription:t.subscription,dom:t.element};d.$$(t.root).trigger(r.SearchAlertsEvents.searchAlertsDeleted,e)}).catch(function(){t.container.removeClass("coveo-follow-item-loading");var e={dom:t.element};d.$$(t.root).trigger(r.SearchAlertsEvents.searchAlertsFail,e)})):(this.logAnalyticsEvent(p.analyticsActionCauseList.searchAlertsFollowDocument),this.queryController.getEndpoint().follow(this.subscription).then(function(e){var o={subscription:e,dom:t.element};d.$$(t.root).trigger(r.SearchAlertsEvents.searchAlertsCreated,o)}).catch(function(){t.container.removeClass("coveo-follow-item-loading");var e={dom:t.element};d.$$(t.root).trigger(r.SearchAlertsEvents.searchAlertsFail,e)})))},e.prototype.getText=function(){return this.text.text()},e.prototype.updateIsFollowed=function(){var t=this;this.queryController.getEndpoint().listSubscriptions().then(function(e){if(h.isArray(e)){var o=h.find(e,function(e){var o=e.typeConfig;return o&&null!=o.id&&o.id==t.getId()});null!=o?t.setFollowed(o):t.setNotFollowed()}else t.remove()}).catch(function(){t.remove()})},e.prototype.buildIcon=function(){var t=d.$$("span",{className:"coveo-follow-item-icon"},y.SVGIcons.icons.dropdownFollowQuery);return w.SVGDom.addClassToSVGInContainer(t.el,"coveo-follow-item-icon-svg"),t.el},e.prototype.buildLoadingIcon=function(){var t=d.$$("span",{className:"coveo-follow-item-icon-loading"},y.SVGIcons.icons.loading);return w.SVGDom.addClassToSVGInContainer(t.el,"coveo-follow-item-icon-loading-svg"),t.el},e.prototype.handleSubscriptionDeleted=function(t){if(t.subscription&&t.subscription.type==c.SUBSCRIPTION_TYPE.followDocument){t.subscription.typeConfig.id==this.getId()&&this.setNotFollowed()}},e.prototype.handleSubscriptionCreated=function(t){if(t.subscription&&t.subscription.type==c.SUBSCRIPTION_TYPE.followDocument){t.subscription.typeConfig.id==this.getId()&&this.setFollowed(t.subscription)}},e.prototype.remove=function(){this.element.parentElement&&this.element.parentElement.removeChild(this.element)},e.prototype.getId=function(){return m.Utils.getFieldValue(this.result,"sysurihash")||m.Utils.getFieldValue(this.result,"urihash")},e.buildFollowRequest=function(t,e,o){var n={id:t,title:e};return o.modifiedDateField&&(n.modifiedDateField=o.modifiedDateField),o.watchedFields&&(n.watchedFields=o.watchedFields),{type:c.SUBSCRIPTION_TYPE.followDocument,typeConfig:n,name:e}},e.prototype.logAnalyticsEvent=function(t){this.usageAnalytics.logCustomEvent(t,{author:f.QueryUtils.getAuthor(this.result),documentLanguage:f.QueryUtils.getLanguage(this.result),documentSource:f.QueryUtils.getSource(this.result),documentTitle:this.result.title,contentIDValue:f.QueryUtils.getPermanentId(this.result).fieldValue,contentIDKey:f.QueryUtils.getPermanentId(this.result).fieldUsed},this.element)},e.ID="FollowItem",e.doExport=function(){v.exportGlobally({FollowItem:e})},e.options={watchedFields:l.ComponentOptions.buildFieldsOption(),modifiedDateField:l.ComponentOptions.buildStringOption()},e}(i.Component);e.FollowItem=C,a.Initialization.registerAutoCreateComponent(C)}});