webpackJsonpCoveo__temporary([39],{173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function n(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function o(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},le))}}function i(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function r(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function s(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function a(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=r(e),n=t.overflow,o=t.overflowX;return/(auto|scroll|overlay)/.test(n+t.overflowY+o)?e:a(s(e))}function f(e){return 11===e?me:10===e?ve:me||ve}function p(e){if(!e)return document.documentElement;for(var t=f(10)?document.body:null,n=e.offsetParent;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===r(n,"position")?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function u(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||p(e.firstElementChild)===e)}function l(e){return null!==e.parentNode?l(e.parentNode):e}function c(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,i=n?t:e,r=document.createRange();r.setStart(o,0),r.setEnd(i,0);var s=r.commonAncestorContainer;if(e!==s&&t!==s||o.contains(i))return u(s)?s:p(s);var a=l(e);return a.host?c(a.host,t):c(e,l(t).host)}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var i=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||i)[n]}return e[n]}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=d(t,"top"),i=d(t,"left"),r=n?-1:1;return e.top+=o*r,e.bottom+=o*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}function v(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],f(10)?n["offset"+e]+o["margin"+("Height"===e?"Top":"Left")]+o["margin"+("Height"===e?"Bottom":"Right")]:0)}function g(){var e=document.body,t=document.documentElement,n=f(10)&&getComputedStyle(t);return{height:v("Height",e,t,n),width:v("Width",e,t,n)}}function b(e){return ye({},e,{right:e.left+e.width,bottom:e.top+e.height})}function w(e){var t={};try{if(f(10)){t=e.getBoundingClientRect();var n=d(e,"top"),o=d(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(e){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},s="HTML"===e.nodeName?g():{},a=s.width||e.clientWidth||i.right-i.left,p=s.height||e.clientHeight||i.bottom-i.top,u=e.offsetWidth-a,l=e.offsetHeight-p;if(u||l){var c=r(e);u-=m(c,"x"),l-=m(c,"y"),i.width-=u,i.height-=l}return b(i)}function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=f(10),i="HTML"===t.nodeName,s=w(e),p=w(t),u=a(e),l=r(t),c=parseFloat(l.borderTopWidth,10),d=parseFloat(l.borderLeftWidth,10);n&&"HTML"===t.nodeName&&(p.top=Math.max(p.top,0),p.left=Math.max(p.left,0));var m=b({top:s.top-p.top-c,left:s.left-p.left-d,width:s.width,height:s.height});if(m.marginTop=0,m.marginLeft=0,!o&&i){var v=parseFloat(l.marginTop,10),g=parseFloat(l.marginLeft,10);m.top-=c-v,m.bottom-=c-v,m.left-=d-g,m.right-=d-g,m.marginTop=v,m.marginLeft=g}return(o&&!n?t.contains(u):t===u&&"BODY"!==u.nodeName)&&(m=h(m,t)),m}function E(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=y(e,n),i=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=t?0:d(n),a=t?0:d(n,"left");return b({top:s-o.top+o.marginTop,left:a-o.left+o.marginLeft,width:i,height:r})}function O(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===r(e,"position")||O(s(e)))}function x(e){if(!e||!e.parentElement||f())return document.documentElement;for(var t=e.parentElement;t&&"none"===r(t,"transform");)t=t.parentElement;return t||document.documentElement}function M(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},f=i?x(e):c(e,t);if("viewport"===o)r=E(f,i);else{var p=void 0;"scrollParent"===o?(p=a(s(t)),"BODY"===p.nodeName&&(p=e.ownerDocument.documentElement)):p="window"===o?e.ownerDocument.documentElement:o;var u=y(p,f,i);if("HTML"!==p.nodeName||O(f))r=u;else{var l=g(),d=l.height,h=l.width;r.top+=u.top-u.marginTop,r.bottom=d+u.top,r.left+=u.left-u.marginLeft,r.right=h+u.left}}return r.left+=n,r.top+=n,r.right-=n,r.bottom-=n,r}function C(e){return e.width*e.height}function L(e,t,n,o,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=M(n,o,r,i),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},f=Object.keys(a).map(function(e){return ye({key:e},a[e],{area:C(a[e])})}).sort(function(e,t){return t.area-e.area}),p=f.filter(function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight}),u=p.length>0?p[0].key:f[0].key,l=e.split("-")[1];return u+(l?"-"+l:"")}function T(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return y(n,o?x(t):c(t,n),o)}function N(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function I(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function D(e,t,n){n=n.split("-")[0];var o=N(e),i={width:o.width,height:o.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",f=r?"height":"width",p=r?"width":"height";return i[s]=t[s]+t[f]/2-o[f]/2,i[a]=n===a?t[a]-o[p]:t[I(a)],i}function A(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function S(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=A(e,function(e){return e[t]===n});return e.indexOf(o)}function F(e,t,n){return(void 0===n?e:e.slice(0,S(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&i(n)&&(t.offsets.popper=b(t.offsets.popper),t.offsets.reference=b(t.offsets.reference),t=n(t,e))}),t}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=T(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=L(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=D(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=F(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function P(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function B(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var i=t[o],r=i?""+i+n:e;if(void 0!==document.body.style[r])return r}return null}function W(){return this.state.isDestroyed=!0,P(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[B("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e){var t=e.ownerDocument;return t?t.defaultView:window}function $(e,t,n,o){var i="BODY"===e.nodeName,r=i?e.ownerDocument.defaultView:e;r.addEventListener(t,n,{passive:!0}),i||$(a(r.parentNode),t,n,o),o.push(r)}function j(e,t,n,o){n.updateBound=o,H(e).addEventListener("resize",n.updateBound,{passive:!0});var i=a(e);return $(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function _(){this.state.eventsEnabled||(this.state=j(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return H(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function q(e,t){Object.keys(t).forEach(function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&Y(t[n])&&(o="px"),e.style[n]=t[n]+o})}function z(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function G(e){return q(e.instance.popper,e.styles),z(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&q(e.arrowElement,e.arrowStyles),e}function V(e,t,n,o,i){var r=T(i,t,e,n.positionFixed),s=L(n.placement,r,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),q(t,{position:n.positionFixed?"fixed":"absolute"}),n}function K(e,t){var n=t.x,o=t.y,i=e.offsets.popper,r=A(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:t.gpuAcceleration,a=p(e.instance.popper),f=w(a),u={position:i.position},l={left:Math.floor(i.left),top:Math.round(i.top),bottom:Math.round(i.bottom),right:Math.floor(i.right)},c="bottom"===n?"top":"bottom",d="right"===o?"left":"right",h=B("transform"),m=void 0,v=void 0;if(v="bottom"===c?-f.height+l.bottom:l.top,m="right"===d?-f.width+l.right:l.left,s&&h)u[h]="translate3d("+m+"px, "+v+"px, 0)",u[c]=0,u[d]=0,u.willChange="transform";else{var g="bottom"===c?-1:1,b="right"===d?-1:1;u[c]=v*g,u[d]=m*b,u.willChange=c+", "+d}var y={"x-placement":e.placement};return e.attributes=ye({},y,e.attributes),e.styles=ye({},u,e.styles),e.arrowStyles=ye({},e.offsets.arrow,e.arrowStyles),e}function J(e,t,n){var o=A(e,function(e){return e.name===t}),i=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!i){var r="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return i}function X(e,t){var n;if(!J(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],s=e.offsets,a=s.popper,f=s.reference,p=-1!==["left","right"].indexOf(i),u=p?"height":"width",l=p?"Top":"Left",c=l.toLowerCase(),d=p?"left":"top",h=p?"bottom":"right",m=N(o)[u];f[h]-m<a[c]&&(e.offsets.popper[c]-=a[c]-(f[h]-m)),f[c]+m>a[h]&&(e.offsets.popper[c]+=f[c]+m-a[h]),e.offsets.popper=b(e.offsets.popper);var v=f[c]+f[u]/2-m/2,g=r(e.instance.popper),w=parseFloat(g["margin"+l],10),y=parseFloat(g["border"+l+"Width"],10),E=v-e.offsets.popper[c]-w-y;return E=Math.max(Math.min(a[u]-m,E),0),e.arrowElement=o,e.offsets.arrow=(n={},we(n,c,Math.round(E)),we(n,d,""),n),e}function Q(e){return"end"===e?"start":"start"===e?"end":e}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Oe.indexOf(e),o=Oe.slice(n+1).concat(Oe.slice(0,n));return t?o.reverse():o}function ee(e,t){if(P(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=M(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],i=I(o),r=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case xe.FLIP:s=[o,i];break;case xe.CLOCKWISE:s=Z(o);break;case xe.COUNTERCLOCKWISE:s=Z(o,!0);break;default:s=t.behavior}return s.forEach(function(a,f){if(o!==a||s.length===f+1)return e;o=e.placement.split("-")[0],i=I(o);var p=e.offsets.popper,u=e.offsets.reference,l=Math.floor,c="left"===o&&l(p.right)>l(u.left)||"right"===o&&l(p.left)<l(u.right)||"top"===o&&l(p.bottom)>l(u.top)||"bottom"===o&&l(p.top)<l(u.bottom),d=l(p.left)<l(n.left),h=l(p.right)>l(n.right),m=l(p.top)<l(n.top),v=l(p.bottom)>l(n.bottom),g="left"===o&&d||"right"===o&&h||"top"===o&&m||"bottom"===o&&v,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===r&&d||b&&"end"===r&&h||!b&&"start"===r&&m||!b&&"end"===r&&v);(c||g||w)&&(e.flipped=!0,(c||g)&&(o=s[f+1]),w&&(r=Q(r)),e.placement=o+(r?"-"+r:""),e.offsets.popper=ye({},e.offsets.popper,D(e.instance.popper,e.offsets.reference,e.placement)),e=F(e.instance.modifiers,e,"flip"))}),e}function te(e){var t=e.offsets,n=t.popper,o=t.reference,i=e.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(i),a=s?"right":"bottom",f=s?"left":"top",p=s?"width":"height";return n[a]<r(o[f])&&(e.offsets.popper[f]=r(o[f])-n[p]),n[f]>r(o[a])&&(e.offsets.popper[f]=r(o[a])),e}function ne(e,t,n,o){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],s=i[2];if(!r)return e;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=o}return b(a)[t]/100*r}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r}return r}function oe(e,t,n,o){var i=[0,0],r=-1!==["right","left"].indexOf(o),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=s.indexOf(A(s,function(e){return-1!==e.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var f=/\s*,\s*|\s+/,p=-1!==a?[s.slice(0,a).concat([s[a].split(f)[0]]),[s[a].split(f)[1]].concat(s.slice(a+1))]:[s];return p=p.map(function(e,o){var i=(1===o?!r:r)?"height":"width",s=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return ne(e,i,t,n)})}),p.forEach(function(e,t){e.forEach(function(n,o){Y(n)&&(i[t]+=n*("-"===e[o-1]?-1:1))})}),i}function ie(e,t){var n=t.offset,o=e.placement,i=e.offsets,r=i.popper,s=i.reference,a=o.split("-")[0],f=void 0;return f=Y(+n)?[+n,0]:oe(n,r,s,a),"left"===a?(r.top+=f[0],r.left-=f[1]):"right"===a?(r.top+=f[0],r.left+=f[1]):"top"===a?(r.left+=f[0],r.top-=f[1]):"bottom"===a&&(r.left+=f[0],r.top+=f[1]),e.popper=r,e}function re(e,t){var n=t.boundariesElement||p(e.instance.popper);e.instance.reference===n&&(n=p(n));var o=B("transform"),i=e.instance.popper.style,r=i.top,s=i.left,a=i[o];i.top="",i.left="",i[o]="";var f=M(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);i.top=r,i.left=s,i[o]=a,t.boundaries=f;var u=t.priority,l=e.offsets.popper,c={primary:function(e){var n=l[e];return l[e]<f[e]&&!t.escapeWithReference&&(n=Math.max(l[e],f[e])),we({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=l[n];return l[e]>f[e]&&!t.escapeWithReference&&(o=Math.min(l[n],f[e]-("right"===e?l.width:l.height))),we({},n,o)}};return u.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";l=ye({},l,c[t](e))}),e.offsets.popper=l,e}function se(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var i=e.offsets,r=i.reference,s=i.popper,a=-1!==["bottom","top"].indexOf(n),f=a?"left":"top",p=a?"width":"height",u={start:we({},f,r[f]),end:we({},f,r[f]+r[p]-s[p])};e.offsets.popper=ye({},s,u[o])}return e}function ae(e){if(!J(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=A(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function fe(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,i=o.popper,r=o.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return i[s?"left":"top"]=r[n]-(a?i[s?"width":"height"]:0),e.placement=I(t),e.offsets.popper=b(i),e}for(var pe="undefined"!=typeof window&&"undefined"!=typeof document,ue=["Edge","Trident","Firefox"],le=0,ce=0;ce<ue.length;ce+=1)if(pe&&navigator.userAgent.indexOf(ue[ce])>=0){le=1;break}var de=pe&&window.Promise,he=de?n:o,me=pe&&!(!window.MSInputMethodContext||!document.documentMode),ve=pe&&/MSIE 10/.test(navigator.userAgent),ge=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},be=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),we=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ee=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Oe=Ee.slice(3),xe={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},Me={shift:{order:100,enabled:!0,fn:se},offset:{order:200,enabled:!0,fn:ie,offset:0},preventOverflow:{order:300,enabled:!0,fn:re,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:te},arrow:{order:500,enabled:!0,fn:X,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:ee,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:fe},hide:{order:800,enabled:!0,fn:ae},computeStyle:{order:850,enabled:!0,fn:K,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:G,onLoad:V,gpuAcceleration:void 0}},Ce={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Me},Le=function(){function e(t,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ge(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=he(this.update.bind(this)),this.options=ye({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(ye({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){o.options.modifiers[t]=ye({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ye({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&i(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return be(e,[{key:"update",value:function(){return k.call(this)}},{key:"destroy",value:function(){return W.call(this)}},{key:"enableEventListeners",value:function(){return _.call(this)}},{key:"disableEventListeners",value:function(){return U.call(this)}}]),e}();Le.Utils=("undefined"!=typeof window?window:e).PopperUtils,Le.placements=Ee,Le.Defaults=Ce,t.default=Le}.call(t,n(85))},280:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(173);n(671);var r=n(0),s=n(17),a=n(54),f=n(3),p=n(6),u=n(16),l=n(1),c=n(15),d=n(7),h=n(8),m=n(2),v=function(e){function t(n,o,i){var r=e.call(this,n,t.ID,i)||this;return r.element=n,r.options=o,r.isOpened=!1,r.options=h.ComponentOptions.initComponentOptions(n,t,o),r.bind.onRootElement(s.InitializationEvents.afterInitialization,function(){return r.init()}),r}return o(t,e),t.prototype.open=function(){this.isOpened=!0,null!=this.menu&&l.$$(this.menu).detach(),this.menu=this.buildMenu(),l.$$(this.menu).insertAfter(this.element),new i.default(this.element,this.menu,{placement:"bottom-end",modifiers:{offset:{offset:"0, 5"},preventOverflow:{boundariesElement:this.root}}})},t.prototype.close=function(){this.isOpened=!1,null!=this.menu&&(l.$$(this.menu).detach(),this.menu=null)},t.prototype.toggle=function(){this.isOpened?this.close():this.open()},t.prototype.init=function(){var e=this,t=l.$$("span",{className:"coveo-settings-square"}).el,n=l.$$("span",{className:"coveo-settings-squares"}).el;r.times(3,function(){return n.appendChild(t.cloneNode())}),this.element.appendChild(n),(new u.AccessibleButton).withElement(this.element).withOwner(this.bind).withSelectAction(function(){return e.toggle()}).withFocusAndMouseEnterAction(function(){return e.onfocus()}).withBlurAndMouseLeaveAction(function(){return e.onblur()}).withLabel(p.l("Settings")).build()},t.prototype.buildMenu=function(){var e=this,t=l.$$("div",{className:"coveo-settings-advanced-menu"}).el,n={settings:this,menuData:[]};return l.$$(this.root).trigger(a.SettingsEvents.settingsPopulateMenu,n),r.each(n.menuData,function(o){var i=e.buildMenuItem(o,n),r=i.menuItemElement,s=i.menuItemIcon,a=i.menuItemText;r.appendChild(s),r.appendChild(a),t.appendChild(r)}),t},t.prototype.buildMenuItem=function(e,t){var n=this,o=l.$$("div",{className:"coveo-settings-item "+e.className}).el,i=function(){r.each(t.menuData,function(e){e.onClose&&e.onClose()}),n.close(),e.onOpen()};return(new u.AccessibleButton).withElement(o).withSelectAction(i).withFocusAndMouseEnterAction(function(){return n.onfocus()}).withBlurAndMouseLeaveAction(function(){return n.onblur()}).withLabel(e.tooltip||e.text).build(),{menuItemElement:o,menuItemIcon:this.buildMenuItemIcon(e),menuItemText:this.buildMenuItemText(e)}},t.prototype.buildMenuItemIcon=function(e){var t=l.$$("div",{className:"coveo-icon"}).el;return e.svgIcon&&(t.innerHTML=e.svgIcon),e.svgIconClassName&&c.SVGDom.addClassToSVGInContainer(t,e.svgIconClassName),t},t.prototype.buildMenuItemText=function(e){return l.$$("div",{className:"coveo-settings-text"},r.escape(e.text)).el},t.prototype.onblur=function(){var e=this;clearTimeout(this.closeTimeout),this.closeTimeout=window.setTimeout(function(){e.close()},this.options.menuDelay)},t.prototype.onfocus=function(){clearTimeout(this.closeTimeout)},t.ID="Settings",t.doExport=function(){f.exportGlobally({Settings:t})},t.options={menuDelay:h.ComponentOptions.buildNumberOption({defaultValue:300,min:0})},t}(d.Component);t.Settings=v,m.Initialization.registerAutoCreateComponent(v)},671:function(e,t){}});
//# sourceMappingURL=Settings.min__aec9a3688de9d25c6748.js.map