webpackJsonpCoveo__temporary([22],{173:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function o(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function n(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ce))}}function i(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function r(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function s(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function a(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=r(e),o=t.overflow,n=t.overflowX;return/(auto|scroll|overlay)/.test(o+t.overflowY+n)?e:a(s(e))}function l(e){return 11===e?me:10===e?ve:me||ve}function p(e){if(!e)return document.documentElement;for(var t=l(10)?document.body:null,o=e.offsetParent;o===t&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var n=o&&o.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(o.nodeName)&&"static"===r(o,"position")?p(o):o:e?e.ownerDocument.documentElement:document.documentElement}function d(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||p(e.firstElementChild)===e)}function c(e){return null!==e.parentNode?c(e.parentNode):e}function f(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var s=r.commonAncestorContainer;if(e!==s&&t!==s||n.contains(i))return d(s)?s:p(s);var a=c(e);return a.host?f(a.host,t):f(e,c(t).host)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",o="top"===t?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var i=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||i)[o]}return e[o]}function h(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=u(t,"top"),i=u(t,"left"),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o="x"===t?"Left":"Top",n="Left"===o?"Right":"Bottom";return parseFloat(e["border"+o+"Width"],10)+parseFloat(e["border"+n+"Width"],10)}function v(e,t,o,n){return Math.max(t["offset"+e],t["scroll"+e],o["client"+e],o["offset"+e],o["scroll"+e],l(10)?o["offset"+e]+n["margin"+("Height"===e?"Top":"Left")]+n["margin"+("Height"===e?"Bottom":"Right")]:0)}function b(){var e=document.body,t=document.documentElement,o=l(10)&&getComputedStyle(t);return{height:v("Height",e,t,o),width:v("Width",e,t,o)}}function g(e){return ye({},e,{right:e.left+e.width,bottom:e.top+e.height})}function w(e){var t={};try{if(l(10)){t=e.getBoundingClientRect();var o=u(e,"top"),n=u(e,"left");t.top+=o,t.left+=n,t.bottom+=o,t.right+=n}else t=e.getBoundingClientRect()}catch(e){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},s="HTML"===e.nodeName?b():{},a=s.width||e.clientWidth||i.right-i.left,p=s.height||e.clientHeight||i.bottom-i.top,d=e.offsetWidth-a,c=e.offsetHeight-p;if(d||c){var f=r(e);d-=m(f,"x"),c-=m(f,"y"),i.width-=d,i.height-=c}return g(i)}function y(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=l(10),i="HTML"===t.nodeName,s=w(e),p=w(t),d=a(e),c=r(t),f=parseFloat(c.borderTopWidth,10),u=parseFloat(c.borderLeftWidth,10);o&&"HTML"===t.nodeName&&(p.top=Math.max(p.top,0),p.left=Math.max(p.left,0));var m=g({top:s.top-p.top-f,left:s.left-p.left-u,width:s.width,height:s.height});if(m.marginTop=0,m.marginLeft=0,!n&&i){var v=parseFloat(c.marginTop,10),b=parseFloat(c.marginLeft,10);m.top-=f-v,m.bottom-=f-v,m.left-=u-b,m.right-=u-b,m.marginTop=v,m.marginLeft=b}return(n&&!o?t.contains(d):t===d&&"BODY"!==d.nodeName)&&(m=h(m,t)),m}function C(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=y(e,o),i=Math.max(o.clientWidth,window.innerWidth||0),r=Math.max(o.clientHeight,window.innerHeight||0),s=t?0:u(o),a=t?0:u(o,"left");return g({top:s-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:i,height:r})}function S(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===r(e,"position")||S(s(e)))}function O(e){if(!e||!e.parentElement||l())return document.documentElement;for(var t=e.parentElement;t&&"none"===r(t,"transform");)t=t.parentElement;return t||document.documentElement}function E(e,t,o,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},l=i?O(e):f(e,t);if("viewport"===n)r=C(l,i);else{var p=void 0;"scrollParent"===n?(p=a(s(t)),"BODY"===p.nodeName&&(p=e.ownerDocument.documentElement)):p="window"===n?e.ownerDocument.documentElement:n;var d=y(p,l,i);if("HTML"!==p.nodeName||S(l))r=d;else{var c=b(),u=c.height,h=c.width;r.top+=d.top-d.marginTop,r.bottom=u+d.top,r.left+=d.left-d.marginLeft,r.right=h+d.left}}return r.left+=o,r.top+=o,r.right-=o,r.bottom-=o,r}function T(e){return e.width*e.height}function D(e,t,o,n,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=E(o,n,r,i),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},l=Object.keys(a).map(function(e){return ye({key:e},a[e],{area:T(a[e])})}).sort(function(e,t){return t.area-e.area}),p=l.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),d=p.length>0?p[0].key:l[0].key,c=e.split("-")[1];return d+(c?"-"+c:"")}function A(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return y(o,n?O(t):f(t,o),n)}function N(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+n,height:e.offsetHeight+o}}function _(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function L(e,t,o){o=o.split("-")[0];var n=N(e),i={width:n.width,height:n.height},r=-1!==["right","left"].indexOf(o),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",p=r?"width":"height";return i[s]=t[s]+t[l]/2-n[l]/2,i[a]=o===a?t[a]-n[p]:t[_(a)],i}function R(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function x(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=R(e,function(e){return e[t]===o});return e.indexOf(n)}function I(e,t,o){return(void 0===o?e:e.slice(0,x(e,"name",o))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=e.function||e.fn;e.enabled&&i(o)&&(t.offsets.popper=g(t.offsets.popper),t.offsets.reference=g(t.offsets.reference),t=o(t,e))}),t}function $(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=A(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=D(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=L(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=I(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function M(e,t){return e.some(function(e){var o=e.name;return e.enabled&&o===t})}function F(e){for(var t=[!1,"ms","Webkit","Moz","O"],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?""+i+o:e;if(void 0!==document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,M(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[F("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function P(e){var t=e.ownerDocument;return t?t.defaultView:window}function B(e,t,o,n){var i="BODY"===e.nodeName,r=i?e.ownerDocument.defaultView:e;r.addEventListener(t,o,{passive:!0}),i||B(a(r.parentNode),t,o,n),n.push(r)}function k(e,t,o,n){o.updateBound=n,P(e).addEventListener("resize",o.updateBound,{passive:!0});var i=a(e);return B(i,"scroll",o.updateBound,o.scrollParents),o.scrollElement=i,o.eventsEnabled=!0,o}function W(){this.state.eventsEnabled||(this.state=k(this.reference,this.options,this.state,this.scheduleUpdate))}function U(e,t){return P(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function j(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=U(this.reference,this.state))}function q(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(o)&&q(t[o])&&(n="px"),e.style[o]=t[o]+n})}function z(e,t){Object.keys(t).forEach(function(o){!1!==t[o]?e.setAttribute(o,t[o]):e.removeAttribute(o)})}function Q(e){return V(e.instance.popper,e.styles),z(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e}function Y(e,t,o,n,i){var r=A(i,t,e,o.positionFixed),s=D(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute("x-placement",s),V(t,{position:o.positionFixed?"fixed":"absolute"}),o}function G(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=R(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:t.gpuAcceleration,a=p(e.instance.popper),l=w(a),d={position:i.position},c={left:Math.floor(i.left),top:Math.round(i.top),bottom:Math.round(i.bottom),right:Math.floor(i.right)},f="bottom"===o?"top":"bottom",u="right"===n?"left":"right",h=F("transform"),m=void 0,v=void 0;if(v="bottom"===f?-l.height+c.bottom:c.top,m="right"===u?-l.width+c.right:c.left,s&&h)d[h]="translate3d("+m+"px, "+v+"px, 0)",d[f]=0,d[u]=0,d.willChange="transform";else{var b="bottom"===f?-1:1,g="right"===u?-1:1;d[f]=v*b,d[u]=m*g,d.willChange=f+", "+u}var y={"x-placement":e.placement};return e.attributes=ye({},y,e.attributes),e.styles=ye({},d,e.styles),e.arrowStyles=ye({},e.offsets.arrow,e.arrowStyles),e}function K(e,t,o){var n=R(e,function(e){return e.name===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r="`"+t+"`",s="`"+o+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return i}function J(e,t){var o;if(!K(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],s=e.offsets,a=s.popper,l=s.reference,p=-1!==["left","right"].indexOf(i),d=p?"height":"width",c=p?"Top":"Left",f=c.toLowerCase(),u=p?"left":"top",h=p?"bottom":"right",m=N(n)[d];l[h]-m<a[f]&&(e.offsets.popper[f]-=a[f]-(l[h]-m)),l[f]+m>a[h]&&(e.offsets.popper[f]+=l[f]+m-a[h]),e.offsets.popper=g(e.offsets.popper);var v=l[f]+l[d]/2-m/2,b=r(e.instance.popper),w=parseFloat(b["margin"+c],10),y=parseFloat(b["border"+c+"Width"],10),C=v-e.offsets.popper[f]-w-y;return C=Math.max(Math.min(a[d]-m,C),0),e.arrowElement=n,e.offsets.arrow=(o={},we(o,f,Math.round(C)),we(o,u,""),o),e}function X(e){return"end"===e?"start":"start"===e?"end":e}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=Se.indexOf(e),n=Se.slice(o+1).concat(Se.slice(0,o));return t?n.reverse():n}function ee(e,t){if(M(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=E(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split("-")[0],i=_(n),r=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case Oe.FLIP:s=[n,i];break;case Oe.CLOCKWISE:s=Z(n);break;case Oe.COUNTERCLOCKWISE:s=Z(n,!0);break;default:s=t.behavior}return s.forEach(function(a,l){if(n!==a||s.length===l+1)return e;n=e.placement.split("-")[0],i=_(n);var p=e.offsets.popper,d=e.offsets.reference,c=Math.floor,f="left"===n&&c(p.right)>c(d.left)||"right"===n&&c(p.left)<c(d.right)||"top"===n&&c(p.bottom)>c(d.top)||"bottom"===n&&c(p.top)<c(d.bottom),u=c(p.left)<c(o.left),h=c(p.right)>c(o.right),m=c(p.top)<c(o.top),v=c(p.bottom)>c(o.bottom),b="left"===n&&u||"right"===n&&h||"top"===n&&m||"bottom"===n&&v,g=-1!==["top","bottom"].indexOf(n),w=!!t.flipVariations&&(g&&"start"===r&&u||g&&"end"===r&&h||!g&&"start"===r&&m||!g&&"end"===r&&v);(f||b||w)&&(e.flipped=!0,(f||b)&&(n=s[l+1]),w&&(r=X(r)),e.placement=n+(r?"-"+r:""),e.offsets.popper=ye({},e.offsets.popper,L(e.instance.popper,e.offsets.reference,e.placement)),e=I(e.instance.modifiers,e,"flip"))}),e}function te(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(i),a=s?"right":"bottom",l=s?"left":"top",p=s?"width":"height";return o[a]<r(n[l])&&(e.offsets.popper[l]=r(n[l])-o[p]),o[l]>r(n[a])&&(e.offsets.popper[l]=r(n[a])),e}function oe(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],s=i[2];if(!r)return e;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=o;break;case"%":case"%r":default:a=n}return g(a)[t]/100*r}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r}return r}function ne(e,t,o,n){var i=[0,0],r=-1!==["right","left"].indexOf(n),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=s.indexOf(R(s,function(e){return-1!==e.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,p=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];return p=p.map(function(e,n){var i=(1===n?!r:r)?"height":"width",s=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return oe(e,i,t,o)})}),p.forEach(function(e,t){e.forEach(function(o,n){q(o)&&(i[t]+=o*("-"===e[n-1]?-1:1))})}),i}function ie(e,t){var o=t.offset,n=e.placement,i=e.offsets,r=i.popper,s=i.reference,a=n.split("-")[0],l=void 0;return l=q(+o)?[+o,0]:ne(o,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),e.popper=r,e}function re(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=F("transform"),i=e.instance.popper.style,r=i.top,s=i.left,a=i[n];i.top="",i.left="",i[n]="";var l=E(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=a,t.boundaries=l;var d=t.priority,c=e.offsets.popper,f={primary:function(e){var o=c[e];return c[e]<l[e]&&!t.escapeWithReference&&(o=Math.max(c[e],l[e])),we({},e,o)},secondary:function(e){var o="right"===e?"left":"top",n=c[o];return c[e]>l[e]&&!t.escapeWithReference&&(n=Math.min(c[o],l[e]-("right"===e?c.width:c.height))),we({},o,n)}};return d.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";c=ye({},c,f[t](e))}),e.offsets.popper=c,e}function se(e){var t=e.placement,o=t.split("-")[0],n=t.split("-")[1];if(n){var i=e.offsets,r=i.reference,s=i.popper,a=-1!==["bottom","top"].indexOf(o),l=a?"left":"top",p=a?"width":"height",d={start:we({},l,r[l]),end:we({},l,r[l]+r[p]-s[p])};e.offsets.popper=ye({},s,d[n])}return e}function ae(e){if(!K(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,o=R(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function le(e){var t=e.placement,o=t.split("-")[0],n=e.offsets,i=n.popper,r=n.reference,s=-1!==["left","right"].indexOf(o),a=-1===["top","left"].indexOf(o);return i[s?"left":"top"]=r[o]-(a?i[s?"width":"height"]:0),e.placement=_(t),e.offsets.popper=g(i),e}for(var pe="undefined"!=typeof window&&"undefined"!=typeof document,de=["Edge","Trident","Firefox"],ce=0,fe=0;fe<de.length;fe+=1)if(pe&&navigator.userAgent.indexOf(de[fe])>=0){ce=1;break}var ue=pe&&window.Promise,he=ue?o:n,me=pe&&!(!window.MSInputMethodContext||!document.documentMode),ve=pe&&/MSIE 10/.test(navigator.userAgent),be=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ge=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),we=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},Ce=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Se=Ce.slice(3),Oe={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},Ee={shift:{order:100,enabled:!0,fn:se},offset:{order:200,enabled:!0,fn:ie,offset:0},preventOverflow:{order:300,enabled:!0,fn:re,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:te},arrow:{order:500,enabled:!0,fn:J,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:ee,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:le},hide:{order:800,enabled:!0,fn:ae},computeStyle:{order:850,enabled:!0,fn:G,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:Q,onLoad:Y,gpuAcceleration:void 0}},Te={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Ee},De=function(){function e(t,o){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};be(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=he(this.update.bind(this)),this.options=ye({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(ye({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){n.options.modifiers[t]=ye({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ye({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&i(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return ge(e,[{key:"update",value:function(){return $.call(this)}},{key:"destroy",value:function(){return H.call(this)}},{key:"enableEventListeners",value:function(){return W.call(this)}},{key:"disableEventListeners",value:function(){return j.call(this)}}]),e}();De.Utils=("undefined"!=typeof window?window:e).PopperUtils,De.placements=Ce,De.Defaults=Te,t.default=De}.call(t,o(86))},200:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0}),o(673);var i=o(0),r=o(17),s=o(11),a=o(3),l=o(5),p=o(18),d=o(13),c=o(52),f=o(16),u=o(1),h=o(4),m=o(10),v=o(7),b=o(8),g=o(2),w=o(674),y=function(e){function t(o,n,i){var a=e.call(this,o,t.ID,i)||this;return a.element=o,a.options=n,a.options=b.ComponentOptions.initComponentOptions(o,t,n),a.bind.onRootElement(s.QueryEvents.buildingQuery,function(e){return a.handleBuildingQuery(e)}),a.bind.onRootElement(r.InitializationEvents.afterInitialization,function(){return a.handleAfterInitialization()}),a.bind.onQueryState(p.MODEL_EVENTS.CHANGE_ONE,d.QUERY_STATE_ATTRIBUTES.T,function(e){return a.handleQueryStateChanged(e)}),(new f.AccessibleButton).withElement(o).withSelectAction(function(){return a.select()}).withTitle(a.options.caption).withOwner(a.bind).build(),a.render(),w.ResponsiveTabs.init(a.root,a,a.options),a}return n(t,e),t.prototype.select=function(){if(!this.disabled){var e={t:this.options.id,sort:this.options.sort||d.QueryStateModel.defaultAttributes.sort};this.options.layout&&(e.layout=this.options.layout),this.queryStateModel.setMultiple(e),this.usageAnalytics.logSearchEvent(m.analyticsActionCauseList.interfaceChange,{interfaceChangeTo:this.options.id}),this.queryController.executeQuery()}},t.prototype.isElementIncludedInTab=function(e){l.Assert.exists(e);var t=this.splitListOfTabs(e.getAttribute("data-tab")),o=this.splitListOfTabs(e.getAttribute("data-tab-not"));return l.Assert.check(!(0!=t.length&&0!=o.length),"You cannot both explicitly include and exclude an element from tabs."),0!=t.length&&-1!=i.indexOf(t,this.options.id)||0!=o.length&&-1==i.indexOf(o,this.options.id)||0==t.length&&0==o.length},t.prototype.render=function(){var e=this.options.icon;if(h.Utils.isNonEmptyString(e)){var t=u.$$("span").el;u.$$(t).addClass(["coveo-icon",e]),this.element.insertBefore(t,this.element.firstChild)}var o=this.options.caption;if(h.Utils.isNonEmptyString(o)){var n=document.createElement("p");u.$$(n).text(o),this.element.appendChild(n)}},t.prototype.handleBuildingQuery=function(e){l.Assert.exists(e),!this.disabled&&this.isSelected()&&(e.queryBuilder.tab=this.options.id,h.Utils.isNonEmptyString(this.options.expression)&&(this.options.constant?e.queryBuilder.constantExpression.add(this.options.expression):e.queryBuilder.advancedExpression.add(this.options.expression)),this.options.enableDuplicateFiltering&&(e.queryBuilder.enableDuplicateFiltering=!0),null!=this.options.pipeline&&(e.queryBuilder.pipeline=this.options.pipeline),null!=this.options.maximumAge&&(e.queryBuilder.maximumAge=this.options.maximumAge))},t.prototype.handleQueryStateChanged=function(e){l.Assert.exists(e),!this.disabled&&this.isSelected()?(u.$$(this.element).addClass("coveo-selected"),this.queryController.setEndpoint(this.options.endpoint),this.showAndHideAppropriateElements()):u.$$(this.element).removeClass("coveo-selected")},t.prototype.handleAfterInitialization=function(){this.isSelected()&&this.options.layout&&this.queryStateModel.set(d.QUERY_STATE_ATTRIBUTES.LAYOUT,this.options.layout)},t.prototype.isSelected=function(){return this.queryStateModel.get(d.QueryStateModel.attributesEnum.t)==this.options.id},t.prototype.showAndHideAppropriateElements=function(){var e=this,t=[],o=[];i.each(u.$$(this.root).findAll("[data-tab],[data-tab-not]"),function(n){e.isElementIncludedInTab(n)?(e.toggleAllComponentsUnder(n,!0),t.push(n)):(e.toggleAllComponentsUnder(n,!1),o.push(n))}),u.$$(this.root).one(s.QueryEvents.querySuccess,function(){i.each(t,function(e){return u.$$(e).removeClass("coveo-tab-disabled")}),i.each(o,function(e){return u.$$(e).addClass("coveo-tab-disabled")})})},t.prototype.splitListOfTabs=function(e){return h.Utils.exists(e)?i.map(e.split(","),function(e){return h.Utils.trim(e)}):[]},t.prototype.toggleAllComponentsUnder=function(e,t){l.Assert.exists(e);var o=function(e){var o=v.Component.get(e,void 0,!0);o&&(t?o.enable():o.disable())};o(e),i.each(u.$$(e).findAll("*"),function(e){o(e)})},t.prototype.enable=function(){e.prototype.enable.call(this),this.element.style.display=""},t.prototype.disable=function(){e.prototype.disable.call(this),this.element.style.display="none"},t.ID="Tab",t.doExport=function(){a.exportGlobally({Tab:t})},t.options={id:b.ComponentOptions.buildStringOption({required:!0,section:"Common Options"}),caption:b.ComponentOptions.buildLocalizedStringOption({required:!0,section:"Common Options"}),icon:b.ComponentOptions.buildStringOption(),expression:b.ComponentOptions.buildQueryExpressionOption({section:"Common Options"}),endpoint:b.ComponentOptions.buildCustomOption(function(e){return null!=e?c.SearchEndpoint.endpoints[e]:null}),sort:b.ComponentOptions.buildStringOption(),layout:b.ComponentOptions.buildStringOption(),constant:b.ComponentOptions.buildBooleanOption({defaultValue:!0,section:"Filtering"}),enableDuplicateFiltering:b.ComponentOptions.buildBooleanOption({defaultValue:!1}),pipeline:b.ComponentOptions.buildStringOption(),maximumAge:b.ComponentOptions.buildNumberOption(),enableResponsiveMode:b.ComponentOptions.buildBooleanOption({defaultValue:!0,section:"ResponsiveOptions"}),dropdownHeaderLabel:b.ComponentOptions.buildLocalizedStringOption({section:"ResponsiveOptions"})},t}(v.Component);t.Tab=y,g.Initialization.registerAutoCreateComponent(y)},482:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),i=function(){function e(){}return e.addPrefixedEvent=function(e,t,o){n.each(this.prefixes,function(n){""==n&&(t=t.toLowerCase()),e.addEventListener(n+t,o,!1)})},e.removePrefixedEvent=function(e,t,o){n.each(this.prefixes,function(n){""==n&&(t=t.toLowerCase()),e.removeEventListener(n+t,o,!1)})},e.prefixes=["webkit","moz","MS","o",""],e}();t.EventsUtils=i},50:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(67),i=function(){function e(){}return e.shouldDrawFacetSlider=function(e,t){return n.ResponsiveDropdownContent.isTargetInsideOpenedDropdown(t)||!this.isSmallFacetActivated(e)},e.isSmallTabsActivated=function(e){return e.hasClass(this.smallTabsClassName)},e.isSmallFacetActivated=function(e){return e.hasClass(this.smallFacetClassName)},e.isSmallRecommendationActivated=function(e){return e.hasClass(this.smallRecommendationClassName)},e.activateSmallTabs=function(e){e.addClass(this.smallTabsClassName)},e.deactivateSmallTabs=function(e){e.removeClass(this.smallTabsClassName)},e.activateSmallFacet=function(e){e.addClass(this.smallFacetClassName)},e.deactivateSmallFacet=function(e){e.removeClass(this.smallFacetClassName)},e.activateSmallRecommendation=function(e){e.addClass(this.smallRecommendationClassName)},e.deactivateSmallRecommendation=function(e){e.removeClass(this.smallRecommendationClassName)},e.smallTabsClassName="coveo-small-tabs",e.smallFacetClassName="coveo-small-facets",e.smallRecommendationClassName="coveo-small-recommendation",e}();t.ResponsiveComponentsUtils=i},673:function(e,t){},674:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(675);var n=o(0),i=o(17),r=o(9),s=o(6),a=o(1),l=o(482),p=o(15),d=o(12),c=o(4),f=o(7),u=o(20),h=o(200),m=o(54),v=o(84),b=o(50),g=o(16),w=o(173),y=o(26),C=function(){function e(e,t){this.coveoRoot=e,this.ID=t,this.ignoreNextDocumentClick=!1,this.dropdownHeaderLabel=this.getDropdownHeaderLabel(),this.searchInterface=f.Component.get(this.coveoRoot.el,u.SearchInterface,!1),this.dropdownContent=this.buildDropdownContent(),this.dropdownHeader=this.buildDropdownHeader(),this.bindDropdownContentEvents(),this.bindDropdownHeaderEvents(),this.tabSection=a.$$(this.coveoRoot.find(".coveo-tab-section")),this.manageTabSwapping(),this.bindNukeEvents(),this.initialTabOrder=this.tabsInTabSection.slice()}return e.init=function(t,o,n){if(this.logger=new r.Logger("ResponsiveTabs"),!a.$$(t).find(".coveo-tab-section"))return void this.logger.info("No element with class coveo-tab-section. Responsive tabs cannot be enabled.");v.ResponsiveComponentsManager.register(e,a.$$(t),h.Tab.ID,o,n)},e.prototype.handleResizeEvent=function(){this.needSmallMode()&&!b.ResponsiveComponentsUtils.isSmallTabsActivated(this.coveoRoot)?this.changeToSmallMode():!this.needSmallMode()&&b.ResponsiveComponentsUtils.isSmallTabsActivated(this.coveoRoot)&&this.changeToLargeMode(),this.shouldAddTabsToDropdown()?this.addTabsToDropdown():this.shouldRemoveTabsFromDropdown()&&this.removeTabsFromDropdown(),this.isDropdownOpen()&&this.positionPopup()},e.prototype.needSmallMode=function(){if(!this.searchInterface)return this.shouldAutoModeResolveToSmall();switch(this.searchInterface.responsiveComponents.getResponsiveMode()){case"small":case"medium":return!0;case"auto":default:return this.shouldAutoModeResolveToSmall()}},e.prototype.shouldAutoModeResolveToSmall=function(){var e=this.searchInterface?this.searchInterface.responsiveComponents.getMediumScreenWidth():(new m.ResponsiveComponents).getMediumScreenWidth();return this.coveoRoot.width()<=e||(b.ResponsiveComponentsUtils.isSmallTabsActivated(this.coveoRoot)?this.isLargeFormatOverflowing():this.isOverflowing(this.tabSection.el))},e.prototype.changeToSmallMode=function(){b.ResponsiveComponentsUtils.activateSmallTabs(this.coveoRoot)},e.prototype.changeToLargeMode=function(){this.emptyDropdown(),this.cleanUpDropdown(),b.ResponsiveComponentsUtils.deactivateSmallTabs(this.coveoRoot)},e.prototype.shouldAddTabsToDropdown=function(){return(this.isOverflowing(this.tabSection.el)||0===this.tabSection.el.clientWidth)&&b.ResponsiveComponentsUtils.isSmallTabsActivated(this.coveoRoot)},e.prototype.addTabsToDropdown=function(){var t;if(!this.tabSection.find("."+e.TAB_IN_DROPDOWN_HEADER_CSS_CLASS)){var o=this.tabSection.find(".coveo-facet-dropdown-header");o?this.dropdownHeader.insertBefore(o):this.tabSection.el.appendChild(this.dropdownHeader.el)}for(var n=this.initialTabOrder.length-1;n>=0&&(t=this.initialTabOrder[n],this.tabIsSelected(t)&&n>0&&(t=this.initialTabOrder[--n]),this.addToDropdownIfNeeded(t),this.isOverflowing(this.tabSection.el));n--);},e.prototype.shouldRemoveTabsFromDropdown=function(){return!this.isOverflowing(this.tabSection.el)&&0!==this.tabSection.el.clientWidth&&b.ResponsiveComponentsUtils.isSmallTabsActivated(this.coveoRoot)&&!this.isDropdownEmpty()},e.prototype.removeTabsFromDropdown=function(){for(var e,t=this,o=this.tabsInTabDropdown;!this.isOverflowing(this.tabSection.el)&&!this.isDropdownEmpty();)e=o.shift(),this.removeFromDropdownIfNeeded(e),this.fromDropdownToTabSection(a.$$(e));if(this.isOverflowing(this.tabSection.el)){var i=n.filter(this.tabsInTabSection,function(e){return!t.tabIsSelected(e)});this.addToDropdownIfNeeded(i.pop())}this.isDropdownEmpty()&&this.cleanUpDropdown()},e.prototype.emptyDropdown=function(){var e=this;if(!this.isDropdownEmpty()){for(var t=this.tabsInTabDropdown;!this.isDropdownEmpty();){var o=t.shift();this.removeFromDropdownIfNeeded(o)}this.initialTabOrder.forEach(function(t){return e.tabSection.append(t)})}},e.prototype.isLargeFormatOverflowing=function(){var t=a.$$(this.tabSection.el.cloneNode(!0)),o=t.find("."+e.TAB_IN_DROPDOWN_HEADER_CSS_CLASS);o&&t.el.removeChild(o),t.el.style.position="absolute",t.el.style.visibility="hidden",this.isDropdownEmpty()||n.each(this.dropdownContent.findAll(".CoveoTab"),function(e){t.el.appendChild(e.cloneNode(!0))}),t.insertBefore(this.tabSection.el),b.ResponsiveComponentsUtils.deactivateSmallTabs(this.coveoRoot);var i=this.isOverflowing(this.tabSection.el)||this.isOverflowing(t.el);return b.ResponsiveComponentsUtils.activateSmallTabs(this.coveoRoot),t.detach(),i},e.prototype.isOverflowing=function(e){return e.clientWidth<e.scrollWidth},e.prototype.buildDropdownHeader=function(){var t=a.$$("a",{className:"coveo-dropdown-header "+e.TAB_IN_DROPDOWN_HEADER_CSS_CLASS}),o=a.$$("p");o.text(this.dropdownHeaderLabel);var n=a.$$("span",{className:"coveo-more-tabs"},d.SVGIcons.icons.arrowDown);return p.SVGDom.addClassToSVGInContainer(n.el,"coveo-more-tabs-svg"),o.el.appendChild(n.el),t.el.appendChild(o.el),t},e.prototype.bindDropdownHeaderEvents=function(){var e=this,t=function(t){e.isDropdownOpen()?e.closeDropdown():e.openDropdown(),"click"===t.type&&(e.ignoreNextDocumentClick=!0)};(new g.AccessibleButton).withElement(this.dropdownHeader).withSelectAction(t).withLabel(this.getDropdownHeaderLabel()).build()},e.prototype.buildDropdownContent=function(){var e=a.$$("div",{className:"coveo-tab-list-container "+u.SearchInterface.SMALL_INTERFACE_CLASS_NAME}),t=a.$$("ol",{className:"coveo-tab-list"});return e.el.appendChild(t.el),e},e.prototype.bindDropdownContentEvents=function(){var e=this;this.dropdownClickListener=function(){e.isDropdownOpen()&&(e.ignoreNextDocumentClick=!0)},this.documentClickListener=function(t){e.ignoreNextDocumentClick||e.closeDropdown(),e.ignoreNextDocumentClick=!1},a.$$(this.dropdownHeader).on("click",this.dropdownClickListener),a.$$(this.dropdownContent).on("click",this.dropdownClickListener)},e.prototype.isDropdownOpen=function(){return this.dropdownHeader.hasClass(e.ACTIVE_DROPDOWN_CSS_CLASS)},e.prototype.closeDropdown=function(){a.$$(document.documentElement).off("click",this.documentClickListener),this.dropdownContent.detach(),this.dropdownHeader.removeClass(e.ACTIVE_DROPDOWN_CSS_CLASS)},e.prototype.openDropdown=function(){a.$$(document.documentElement).on("click",this.documentClickListener),this.positionPopup(),this.dropdownHeader.addClass(e.ACTIVE_DROPDOWN_CSS_CLASS)},e.prototype.addToDropdownIfNeeded=function(t){if(this.canAddTabToDropdown(t)){a.$$(t).addClass(e.TAB_IN_DROPDOWN_CSS_CLASS);var o=a.$$(this.dropdownContent.find("ol")),n=a.$$("li",null,t);o.prepend(n.el)}},e.prototype.removeFromDropdownIfNeeded=function(t){this.canRemoveTabFromDropdown(t)&&(a.$$(t).removeClass(e.TAB_IN_DROPDOWN_CSS_CLASS),a.$$(t.parentElement).detach())},e.prototype.canAddTabToDropdown=function(e){return e&&!this.tabIsInDropdown(e)&&this.dropdownHeader},e.prototype.canRemoveTabFromDropdown=function(e){return e&&this.tabIsInDropdown(e)&&this.dropdownContent},e.prototype.cleanUpDropdown=function(){this.dropdownHeader.removeClass(e.ACTIVE_DROPDOWN_CSS_CLASS),this.dropdownHeader.detach(),this.dropdownContent.detach()},e.prototype.isDropdownEmpty=function(){if(this.dropdownContent){return 0==this.dropdownContent.findAll(".CoveoTab").length}return!1},e.prototype.manageTabSwapping=function(){var t=this;n.each(this.coveoRoot.findAll("."+f.Component.computeCssClassNameForType(this.ID)),function(o){var n=a.$$(o),i=function(o){var r=t.tabsInTabSection.pop();"opacity"==o.propertyName&&("0"==n.el.style.opacity?(a.$$(r).addClass(e.TAB_IN_DROPDOWN_CSS_CLASS),n.replaceWith(r),n.removeClass(e.TAB_IN_DROPDOWN_CSS_CLASS),t.fromDropdownToTabSection(n),window.getComputedStyle(n.el).opacity,window.getComputedStyle(r).opacity,n.el.style.opacity=r.style.opacity="1"):"1"==n.el.style.opacity&&(t.closeDropdown(),l.EventsUtils.removePrefixedEvent(n.el,"TransitionEnd",i),t.handleResizeEvent()))},r=function(){if(t.tabIsInDropdown(n)){var e=t.tabsInTabSection.pop();e&&(l.EventsUtils.addPrefixedEvent(n.el,"TransitionEnd",i),n.el.style.opacity=e.style.opacity="0")}};n.on("click",function(){return r()}),n.on("keyup",y.KeyboardUtils.keypressAction(y.KEYBOARD.ENTER,r)),n.on("blur",function(e){e.relatedTarget&&!t.tabIsInDropdown(e.relatedTarget)&&t.closeDropdown()})})},e.prototype.bindNukeEvents=function(){var e=this;a.$$(this.coveoRoot).on(i.InitializationEvents.nuke,function(){a.$$(document.documentElement).off("click",e.documentClickListener)})},e.prototype.positionPopup=function(){this.dropdownContent.insertAfter(this.dropdownHeader.el),new w.default(this.dropdownHeader.el,this.dropdownContent.el,{modifiers:{preventOverflow:{boundariesElement:this.coveoRoot.el}}})},e.prototype.fromDropdownToTabSection=function(e){var t=n.last(this.tabsInTabSection);if(!t)return void this.tabSection.prepend(e.el);this.initialTabOrder.indexOf(e.el)>this.initialTabOrder.indexOf(t)?e.insertAfter(t):e.insertBefore(t)},e.prototype.getDropdownHeaderLabel=function(){var t;return n.each(a.$$(this.coveoRoot.find(".coveo-tab-section")).findAll("."+f.Component.computeCssClassName(h.Tab)),function(e){var o=f.Component.get(e,h.Tab);!t&&o&&o.options.dropdownHeaderLabel&&(t=o.options.dropdownHeaderLabel)}),t||(t=s.l(e.DROPDOWN_HEADER_LABEL_DEFAULT_VALUE)),t},e.prototype.tabIsSelected=function(e){return a.$$(e).hasClass("coveo-selected")},e.prototype.tabIsInDropdown=function(t){return a.$$(t).hasClass(e.TAB_IN_DROPDOWN_CSS_CLASS)},Object.defineProperty(e.prototype,"tabsInTabSection",{get:function(){var e=this,t=[];return n.each(this.tabSection.children(),function(o){if(c.Utils.isHtmlElement(o)){var n=a.$$(o),i=n.hasClass(f.Component.computeCssClassNameForType(e.ID));!e.tabIsInDropdown(n)&&i&&t.push(n.el)}}),t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tabsInTabDropdown",{get:function(){return this.dropdownContent?this.dropdownContent.findAll("."+e.TAB_IN_DROPDOWN_CSS_CLASS):[]},enumerable:!0,configurable:!0}),e.DROPDOWN_HEADER_LABEL_DEFAULT_VALUE="More",e.TAB_IN_DROPDOWN_CSS_CLASS="coveo-tab-dropdown",e.TAB_IN_DROPDOWN_HEADER_CSS_CLASS=e.TAB_IN_DROPDOWN_CSS_CLASS+"-header",e.ACTIVE_DROPDOWN_CSS_CLASS="coveo-dropdown-header-active",e}();t.ResponsiveTabs=C},675:function(e,t){}});
//# sourceMappingURL=Tab.min__a9b0c0df44822bb24a08.js.map