webpackJsonpCoveo__temporary([56],{265:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),i(642);var r=i(1),o=i(4),s=i(6),a=i(7),l=i(12),u=i(3),p=i(2),d=i(8),c=function(t){function e(i,n,r,o){var s=t.call(this,i,e.ID)||this;return s.element=i,s.options=n,s.bindings=r,s.result=o,s.options=d.ComponentOptions.initComponentOptions(i,e,n),o?(s.renderComponent(),s):(s.logger.error("No result passed to Star Rating component."),s)}return n(e,t),Object.defineProperty(e.prototype,"configuredFieldsAreValid",{get:function(){var t=o.Utils.getFieldValue(this.result,this.options.ratingField),e=o.Utils.getFieldValue(this.result,this.options.numberOfRatingsField);void 0!==e&&(this.numberOfRatings=Number(e)<0?0:Number(e)||0),this.rating=Number(t)<0?0:Number(t)||0;var i=this.options.ratingScale;return i<this.rating||i<=0?(this.logger.error("The rating scale property is either missing or invalid."),!1):(this.rating=Math.round(this.rating*(5/i)),!0)},enumerable:!0,configurable:!0}),e.prototype.renderComponent=function(){if(this.configuredFieldsAreValid){this.makeAccessible();for(var t=1;t<=5;t++)this.renderStar(t<=this.rating);void 0!==this.numberOfRatings&&this.renderNumberOfReviews(this.numberOfRatings)}},e.prototype.makeAccessible=function(){this.setDefaultTabIndex(),this.element.setAttribute("aria-label",this.getAriaLabel())},e.prototype.setDefaultTabIndex=function(){o.Utils.isNullOrUndefined(this.element.getAttribute("tabindex"))&&(this.element.tabIndex=0)},e.prototype.getAriaLabel=function(){var t=!o.Utils.isNullOrUndefined(this.numberOfRatings),e=!!this.numberOfRatings;if(t&&!e)return s.l("NoRatings");var i=s.l("Rated",this.rating,this.options.ratingScale,this.options.ratingScale);return t?i+" "+s.l("RatedBy",this.numberOfRatings,this.numberOfRatings):i},e.prototype.renderStar=function(t){var e=r.$$("span",{className:"coveo-star-rating-star"},l.SVGIcons.icons.star);e.toggleClass("coveo-star-rating-star-active",t),this.element.appendChild(e.el)},e.prototype.renderNumberOfReviews=function(t){var e=r.$$("span",{className:"coveo-star-rating-label"});e.text(t>0?"("+t+")":s.l("NoRatings")),this.element.appendChild(e.el)},e.ID="StarRating",e.doExport=function(){u.exportGlobally({StarRating:e})},e.options={ratingField:d.ComponentOptions.buildFieldOption({required:!0}),numberOfRatingsField:d.ComponentOptions.buildFieldOption(),ratingScale:d.ComponentOptions.buildNumberOption({defaultValue:5,min:1,max:1e5})},e}(a.Component);e.StarRating=c,p.Initialization.registerAutoCreateComponent(c)},642:function(t,e){}});