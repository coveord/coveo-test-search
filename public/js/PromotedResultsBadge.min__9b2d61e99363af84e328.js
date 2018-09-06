webpackJsonpCoveo__temporary([66],{226:function(e,o,t){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])};return function(o,t){function n(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(o,"__esModule",{value:!0});var s=t(6),r=t(49),i=t(3);t(486);var d=function(e){function o(t,n,s){var i=e.call(this,t,o.ID,s)||this;return i.element=t,i.options=n,i.bindings=s,i.options=r.ComponentOptions.initComponentOptions(t,o,n),i.bind.onRootElement(r.ResultListEvents.newResultDisplayed,function(e){var o=i.buildBadge(e.result,e.item);o&&i.appendBadge(o,e.item)}),i}return n(o,e),o.prototype.buildBadge=function(e,o){if(!this.shouldShowABadge(e,o))return null;var t=r.$$("div",{className:this.getClassName(e)});return this.applyTagline(e,t),this.applyColor(e,t),t},o.prototype.appendBadge=function(e,o){this.isCardLayout(o)?this.addBadgeToCardLayout(e,o):r.$$(o).prepend(e.el)},o.prototype.addBadgeToCardLayout=function(e,o){var t;null==o.parentElement?(t=r.$$("div",{className:"coveo-promoted-result-badge-container-card-layout"}),t.insertBefore(o)):t=r.$$(o.parentElement),t.append(e.el),t.append(o)},o.prototype.applyColor=function(e,o){this.isFeatured(e)&&this.options.colorForFeaturedResults&&(o.el.style.backgroundColor=this.options.colorForFeaturedResults),this.isRecommended(e)&&this.options.colorForRecommendedResults&&(o.el.style.backgroundColor=this.options.colorForRecommendedResults)},o.prototype.applyTagline=function(e,o){if(this.isFeatured(e)&&this.options.showBadgeForFeaturedResults&&o.text(this.options.captionForFeatured),this.isRecommended(e)&&this.options.showBadgeForRecommendedResults)return o.text(this.options.captionForRecommended)},o.prototype.isFeatured=function(e){return e.isTopResult},o.prototype.isRecommended=function(e){return e.isRecommendation&&!e.isTopResult},o.prototype.isTableLayout=function(e){return r.$$(e).hasClass("coveo-table-layout")},o.prototype.isCardLayout=function(e){return r.$$(e).hasClass("coveo-card-layout")},o.prototype.getClassName=function(e){return"coveo-promoted-result-badge coveo-"+(this.isFeatured(e)?"featured":"recommended")+"-result-badge"},o.prototype.shouldShowABadge=function(e,o){return!this.isTableLayout(o)&&(!(!this.isFeatured(e)||!this.options.showBadgeForFeaturedResults)||!(!this.isRecommended(e)||!this.options.showBadgeForRecommendedResults))},o.ID="PromotedResultsBadge",o.doExport=function(){i.exportGlobally({PromotedResultsBadge:o})},o.options={showBadgeForFeaturedResults:r.ComponentOptions.buildBooleanOption({defaultValue:!0}),showBadgeForRecommendedResults:r.ComponentOptions.buildBooleanOption({defaultValue:!1}),captionForRecommended:r.ComponentOptions.buildLocalizedStringOption({defaultValue:r.l("Recommended"),depend:"showBadgeForRecommendedResults"}),captionForFeatured:r.ComponentOptions.buildLocalizedStringOption({defaultValue:r.l("Featured"),depend:"showBadgeForFeaturedResults"}),colorForFeaturedResults:r.ComponentOptions.buildColorOption({depend:"showBadgeForFeaturedResults"}),colorForRecommendedResults:r.ComponentOptions.buildColorOption({depend:"showBadgeForRecommendedResults"})},o}(s.Component);o.PromotedResultsBadge=d,r.Initialization.registerAutoCreateComponent(d)},486:function(e,o){}});