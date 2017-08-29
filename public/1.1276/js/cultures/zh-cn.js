if(window.Globalize == undefined) {
/*! globalize - v0.1.1 - 2013-04-30
* https://github.com/jquery/globalize
* Copyright 2013 ; Licensed MIT */
var Globalize = (function(e,r){var t,n,a,s,u,l,i,c,o,f,d,p,h,g,b,m,y,M,v,k,z,F,A,x;t=function(e){return new t.prototype.init(e)},"undefined"!=typeof require&&"undefined"!=typeof exports&&"undefined"!=typeof module?module.exports=t:e.Globalize=t,t.cultures={},t.prototype={constructor:t,init:function(e){return this.cultures=t.cultures,this.cultureSelector=e,this}},t.prototype.init.prototype=t.prototype,t.cultures["default"]={name:"en",englishName:"English",nativeName:"English",isRTL:!1,language:"en",numberFormat:{pattern:["-n"],decimals:2,",":",",".":".",groupSizes:[3],"+":"+","-":"-",NaN:"NaN",negativeInfinity:"-Infinity",positiveInfinity:"Infinity",percent:{pattern:["-n %","n %"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"%"},currency:{pattern:["($n)","$n"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"$"}},calendars:{standard:{name:"Gregorian_USEnglish","/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}}},messages:{}},t.cultures["default"].calendar=t.cultures["default"].calendars.standard,t.cultures.en=t.cultures["default"],t.cultureSelector="en",n=/^0x[a-f0-9]+$/i,a=/^[+\-]?infinity$/i,s=/^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,u=/^\s+|\s+$/g,l=function(e,r){if(e.indexOf)return e.indexOf(r);for(var t=0,n=e.length;n>t;t++)if(e[t]===r)return t;return-1},i=function(e,r){return e.substr(e.length-r.length)===r},c=function(){var e,t,n,a,s,u,l=arguments[0]||{},i=1,p=arguments.length,h=!1;for("boolean"==typeof l&&(h=l,l=arguments[1]||{},i=2),"object"==typeof l||f(l)||(l={});p>i;i++)if(null!=(e=arguments[i]))for(t in e)n=l[t],a=e[t],l!==a&&(h&&a&&(d(a)||(s=o(a)))?(s?(s=!1,u=n&&o(n)?n:[]):u=n&&d(n)?n:{},l[t]=c(h,u,a)):a!==r&&(l[t]=a));return l},o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},f=function(e){return"[object Function]"===Object.prototype.toString.call(e)},d=function(e){return"[object Object]"===Object.prototype.toString.call(e)},p=function(e,r){return 0===e.indexOf(r)},h=function(e){return(e+"").replace(u,"")},g=function(e){return isNaN(e)?0/0:Math[0>e?"ceil":"floor"](e)},b=function(e,r,t){var n;for(n=e.length;r>n;n+=1)e=t?"0"+e:e+"0";return e},m=function(e,r){for(var t=0,n=!1,a=0,s=e.length;s>a;a++){var u=e.charAt(a);switch(u){case"'":n?r.push("'"):t++,n=!1;break;case"\\":n&&r.push("\\"),n=!n;break;default:r.push(u),n=!1}}return t},y=function(e,r){r=r||"F";var t,n=e.patterns,a=r.length;if(1===a){if(t=n[r],!t)throw"Invalid date format string '"+r+"'.";r=t}else 2===a&&"%"===r.charAt(0)&&(r=r.charAt(1));return r},M=function(e,r,t){function n(e,r){var t,n=e+"";return r>1&&r>n.length?(t=v[r-2]+n,t.substr(t.length-r,r)):t=n}function a(){return h||g?h:(h=A.test(r),g=!0,h)}function s(e,r){if(b)return b[r];switch(r){case 0:return e.getFullYear();case 1:return e.getMonth();case 2:return e.getDate();default:throw"Invalid part value "+r}}var u,l=t.calendar,i=l.convert;if(!r||!r.length||"i"===r){if(t&&t.name.length)if(i)u=M(e,l.patterns.F,t);else{var c=new Date(e.getTime()),o=z(e,l.eras);c.setFullYear(F(e,l,o)),u=c.toLocaleString()}else u=""+e;return u}var f=l.eras,d="s"===r;r=y(l,r),u=[];var p,h,g,b,v=["0","00","000"],A=/([^d]|^)(d|dd)([^d]|$)/g,x=0,I=k();for(!d&&i&&(b=i.fromGregorian(e));;){var S=I.lastIndex,w=I.exec(r),C=r.slice(S,w?w.index:r.length);if(x+=m(C,u),!w)break;if(x%2)u.push(w[0]);else{var D=w[0],H=D.length;switch(D){case"ddd":case"dddd":var O=3===H?l.days.namesAbbr:l.days.names;u.push(O[e.getDay()]);break;case"d":case"dd":h=!0,u.push(n(s(e,2),H));break;case"MMM":case"MMMM":var N=s(e,1);u.push(l.monthsGenitive&&a()?l.monthsGenitive[3===H?"namesAbbr":"names"][N]:l.months[3===H?"namesAbbr":"names"][N]);break;case"M":case"MM":u.push(n(s(e,1)+1,H));break;case"y":case"yy":case"yyyy":N=b?b[0]:F(e,l,z(e,f),d),4>H&&(N%=100),u.push(n(N,H));break;case"h":case"hh":p=e.getHours()%12,0===p&&(p=12),u.push(n(p,H));break;case"H":case"HH":u.push(n(e.getHours(),H));break;case"m":case"mm":u.push(n(e.getMinutes(),H));break;case"s":case"ss":u.push(n(e.getSeconds(),H));break;case"t":case"tt":N=12>e.getHours()?l.AM?l.AM[0]:" ":l.PM?l.PM[0]:" ",u.push(1===H?N.charAt(0):N);break;case"f":case"ff":case"fff":u.push(n(e.getMilliseconds(),3).substr(0,H));break;case"z":case"zz":p=e.getTimezoneOffset()/60,u.push((0>=p?"+":"-")+n(Math.floor(Math.abs(p)),H));break;case"zzz":p=e.getTimezoneOffset()/60,u.push((0>=p?"+":"-")+n(Math.floor(Math.abs(p)),2)+":"+n(Math.abs(e.getTimezoneOffset()%60),2));break;case"g":case"gg":l.eras&&u.push(l.eras[z(e,f)].name);break;case"/":u.push(l["/"]);break;default:throw"Invalid date format pattern '"+D+"'."}}}return u.join("")},function(){var e;e=function(e,r,t){var n=t.groupSizes,a=n[0],s=1,u=Math.pow(10,r),l=Math.round(e*u)/u;isFinite(l)||(l=e),e=l;var i=e+"",c="",o=i.split(/e/i),f=o.length>1?parseInt(o[1],10):0;i=o[0],o=i.split("."),i=o[0],c=o.length>1?o[1]:"",f>0?(c=b(c,f,!1),i+=c.slice(0,f),c=c.substr(f)):0>f&&(f=-f,i=b(i,f+1,!0),c=i.slice(-f,i.length)+c,i=i.slice(0,-f)),c=r>0?t["."]+(c.length>r?c.slice(0,r):b(c,r)):"";for(var d=i.length-1,p=t[","],h="";d>=0;){if(0===a||a>d)return i.slice(0,d+1)+(h.length?p+h+c:c);h=i.slice(d-a+1,d+1)+(h.length?p+h:""),d-=a,n.length>s&&(a=n[s],s++)}return i.slice(0,d+1)+p+h+c},v=function(r,t,n){if(!isFinite(r))return 1/0===r?n.numberFormat.positiveInfinity:r===-1/0?n.numberFormat.negativeInfinity:n.numberFormat.NaN;if(!t||"i"===t)return n.name.length?r.toLocaleString():""+r;t=t||"D";var a,s=n.numberFormat,u=Math.abs(r),l=-1;t.length>1&&(l=parseInt(t.slice(1),10));var i,c=t.charAt(0).toUpperCase();switch(c){case"D":a="n",u=g(u),-1!==l&&(u=b(""+u,l,!0)),0>r&&(u="-"+u);break;case"N":i=s;case"C":i=i||s.currency;case"P":i=i||s.percent,a=0>r?i.pattern[0]:i.pattern[1]||"n",-1===l&&(l=i.decimals),u=e(u*("P"===c?100:1),l,i);break;default:throw"Bad number format specifier: "+c}for(var o=/n|\$|-|%/g,f="";;){var d=o.lastIndex,p=o.exec(a);if(f+=a.slice(d,p?p.index:a.length),!p)break;switch(p[0]){case"n":f+=u;break;case"$":f+=s.currency.symbol;break;case"-":/[1-9]/.test(u)&&(f+=s["-"]);break;case"%":f+=s.percent.symbol}}return f}}(),k=function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},z=function(e,r){if(!r)return 0;for(var t,n=e.getTime(),a=0,s=r.length;s>a;a++)if(t=r[a].start,null===t||n>=t)return a;return 0},F=function(e,r,t,n){var a=e.getFullYear();return!n&&r.eras&&(a-=r.eras[t].offset),a},function(){var e,r,t,n,a,s,u;e=function(e,r){if(100>r){var t=new Date,n=z(t),a=F(t,e,n),s=e.twoDigitYearMax;s="string"==typeof s?(new Date).getFullYear()%100+parseInt(s,10):s,r+=a-a%100,r>s&&(r-=100)}return r},r=function(e,r,t){var n,a=e.days,i=e._upperDays;return i||(e._upperDays=i=[u(a.names),u(a.namesAbbr),u(a.namesShort)]),r=s(r),t?(n=l(i[1],r),-1===n&&(n=l(i[2],r))):n=l(i[0],r),n},t=function(e,r,t){var n=e.months,a=e.monthsGenitive||e.months,i=e._upperMonths,c=e._upperMonthsGen;i||(e._upperMonths=i=[u(n.names),u(n.namesAbbr)],e._upperMonthsGen=c=[u(a.names),u(a.namesAbbr)]),r=s(r);var o=l(t?i[1]:i[0],r);return 0>o&&(o=l(t?c[1]:c[0],r)),o},n=function(e,r){var t=e._parseRegExp;if(t){var n=t[r];if(n)return n}else e._parseRegExp=t={};for(var a,s=y(e,r).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),u=["^"],l=[],i=0,c=0,o=k();null!==(a=o.exec(s));){var f=s.slice(i,a.index);if(i=o.lastIndex,c+=m(f,u),c%2)u.push(a[0]);else{var d,p=a[0],h=p.length;switch(p){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":d="(\\D+)";break;case"tt":case"t":d="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":d="(\\d{"+h+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":d="(\\d\\d?)";break;case"zzz":d="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":d="([+-]?\\d\\d?)";break;case"/":d="(\\/)";break;default:throw"Invalid date format pattern '"+p+"'."}d&&u.push(d),l.push(a[0])}}m(s.slice(i),u),u.push("$");var g=u.join("").replace(/\s+/g,"\\s+"),b={regExp:g,groups:l};return t[r]=b},a=function(e,r,t){return r>e||e>t},s=function(e){return e.split("\u00a0").join(" ").toUpperCase()},u=function(e){for(var r=[],t=0,n=e.length;n>t;t++)r[t]=s(e[t]);return r},A=function(s,u,l){s=h(s);var i=l.calendar,c=n(i,u),o=RegExp(c.regExp).exec(s);if(null===o)return null;for(var f,d=c.groups,g=null,b=null,m=null,y=null,M=null,v=0,k=0,z=0,F=0,A=null,x=!1,I=0,S=d.length;S>I;I++){var w=o[I+1];if(w){var C=d[I],D=C.length,H=parseInt(w,10);switch(C){case"dd":case"d":if(y=H,a(y,1,31))return null;break;case"MMM":case"MMMM":if(m=t(i,w,3===D),a(m,0,11))return null;break;case"M":case"MM":if(m=H-1,a(m,0,11))return null;break;case"y":case"yy":case"yyyy":if(b=4>D?e(i,H):H,a(b,0,9999))return null;break;case"h":case"hh":if(v=H,12===v&&(v=0),a(v,0,11))return null;break;case"H":case"HH":if(v=H,a(v,0,23))return null;break;case"m":case"mm":if(k=H,a(k,0,59))return null;break;case"s":case"ss":if(z=H,a(z,0,59))return null;break;case"tt":case"t":if(x=i.PM&&(w===i.PM[0]||w===i.PM[1]||w===i.PM[2]),!x&&(!i.AM||w!==i.AM[0]&&w!==i.AM[1]&&w!==i.AM[2]))return null;break;case"f":case"ff":case"fff":if(F=H*Math.pow(10,3-D),a(F,0,999))return null;break;case"ddd":case"dddd":if(M=r(i,w,3===D),a(M,0,6))return null;break;case"zzz":var O=w.split(/:/);if(2!==O.length)return null;if(f=parseInt(O[0],10),a(f,-12,13))return null;var N=parseInt(O[1],10);if(a(N,0,59))return null;A=60*f+(p(w,"-")?-N:N);break;case"z":case"zz":if(f=H,a(f,-12,13))return null;A=60*f;break;case"g":case"gg":var T=w;if(!T||!i.eras)return null;T=h(T.toLowerCase());for(var j=0,$=i.eras.length;$>j;j++)if(T===i.eras[j].name.toLowerCase()){g=j;break}if(null===g)return null}}}var P,G=new Date,E=i.convert;if(P=E?E.fromGregorian(G)[0]:G.getFullYear(),null===b?b=P:i.eras&&(b+=i.eras[g||0].offset),null===m&&(m=0),null===y&&(y=1),E){if(G=E.toGregorian(b,m,y),null===G)return null}else{if(G.setFullYear(b,m,y),G.getDate()!==y)return null;if(null!==M&&G.getDay()!==M)return null}if(x&&12>v&&(v+=12),G.setHours(v,k,z,F),null!==A){var Y=G.getMinutes()-(A+G.getTimezoneOffset());G.setHours(G.getHours()+parseInt(Y/60,10),Y%60)}return G}}(),x=function(e,r,t){var n,a=r["-"],s=r["+"];switch(t){case"n -":a=" "+a,s=" "+s;case"n-":i(e,a)?n=["-",e.substr(0,e.length-a.length)]:i(e,s)&&(n=["+",e.substr(0,e.length-s.length)]);break;case"- n":a+=" ",s+=" ";case"-n":p(e,a)?n=["-",e.substr(a.length)]:p(e,s)&&(n=["+",e.substr(s.length)]);break;case"(n)":p(e,"(")&&i(e,")")&&(n=["-",e.substr(1,e.length-2)])}return n||["",e]},t.prototype.findClosestCulture=function(e){return t.findClosestCulture.call(this,e)},t.prototype.format=function(e,r,n){return t.format.call(this,e,r,n)},t.prototype.localize=function(e,r){return t.localize.call(this,e,r)},t.prototype.parseInt=function(e,r,n){return t.parseInt.call(this,e,r,n)},t.prototype.parseFloat=function(e,r,n){return t.parseFloat.call(this,e,r,n)},t.prototype.culture=function(e){return t.culture.call(this,e)},t.addCultureInfo=function(e,r,t){var n={},a=!1;"string"!=typeof e?(t=e,e=this.culture().name,n=this.cultures[e]):"string"!=typeof r?(t=r,a=null==this.cultures[e],n=this.cultures[e]||this.cultures["default"]):(a=!0,n=this.cultures[r]),this.cultures[e]=c(!0,{},n,t),a&&(this.cultures[e].calendar=this.cultures[e].calendars.standard)},t.findClosestCulture=function(e){var r;if(!e)return this.findClosestCulture(this.cultureSelector)||this.cultures["default"];if("string"==typeof e&&(e=e.split(",")),o(e)){var t,n,a=this.cultures,s=e,u=s.length,l=[];for(n=0;u>n;n++){e=h(s[n]);var i,c=e.split(";");t=h(c[0]),1===c.length?i=1:(e=h(c[1]),0===e.indexOf("q=")?(e=e.substr(2),i=parseFloat(e),i=isNaN(i)?0:i):i=1),l.push({lang:t,pri:i})}for(l.sort(function(e,r){return e.pri<r.pri?1:e.pri>r.pri?-1:0}),n=0;u>n;n++)if(t=l[n].lang,r=a[t])return r;for(n=0;u>n;n++)for(t=l[n].lang;;){var f=t.lastIndexOf("-");if(-1===f)break;if(t=t.substr(0,f),r=a[t])return r}for(n=0;u>n;n++){t=l[n].lang;for(var d in a){var p=a[d];if(p.language===t)return p}}}else if("object"==typeof e)return e;return r||null},t.format=function(e,r,t){var n=this.findClosestCulture(t);return e instanceof Date?e=M(e,r,n):"number"==typeof e&&(e=v(e,r,n)),e},t.localize=function(e,r){return this.findClosestCulture(r).messages[e]||this.cultures["default"].messages[e]},t.parseDate=function(e,r,t){t=this.findClosestCulture(t);var n,a,s;if(r){if("string"==typeof r&&(r=[r]),r.length)for(var u=0,l=r.length;l>u;u++){var i=r[u];if(i&&(n=A(e,i,t)))break}}else{s=t.calendar.patterns;for(a in s)if(n=A(e,s[a],t))break}return n||null},t.parseInt=function(e,r,n){return g(t.parseFloat(e,r,n))},t.parseFloat=function(e,r,t){"number"!=typeof r&&(t=r,r=10);var u=this.findClosestCulture(t),l=0/0,i=u.numberFormat;if(e.indexOf(u.numberFormat.currency.symbol)>-1&&(e=e.replace(u.numberFormat.currency.symbol,""),e=e.replace(u.numberFormat.currency["."],u.numberFormat["."])),e.indexOf(u.numberFormat.percent.symbol)>-1&&(e=e.replace(u.numberFormat.percent.symbol,"")),e=e.replace(/ /g,""),a.test(e))l=parseFloat(e);else if(!r&&n.test(e))l=parseInt(e,16);else{var c=x(e,i,i.pattern[0]),o=c[0],f=c[1];""===o&&"(n)"!==i.pattern[0]&&(c=x(e,i,"(n)"),o=c[0],f=c[1]),""===o&&"-n"!==i.pattern[0]&&(c=x(e,i,"-n"),o=c[0],f=c[1]),o=o||"+";var d,p,h=f.indexOf("e");0>h&&(h=f.indexOf("E")),0>h?(p=f,d=null):(p=f.substr(0,h),d=f.substr(h+1));var g,b,m=i["."],y=p.indexOf(m);0>y?(g=p,b=null):(g=p.substr(0,y),b=p.substr(y+m.length));var M=i[","];g=g.split(M).join("");var v=M.replace(/\u00A0/g," ");M!==v&&(g=g.split(v).join(""));var k=o+g;if(null!==b&&(k+="."+b),null!==d){var z=x(d,i,"-n");k+="e"+(z[0]||"+")+z[1]}s.test(k)&&(l=parseFloat(k))}return l},t.culture=function(e){return e!==r&&(this.cultureSelector=e),this.findClosestCulture(e)||this.cultures["default"]}; return Globalize;}(this));
}
/*
 * Globalize Culture zh-CN
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "zh-CN", "default", {
	name: "zh-CN",
	englishName: "Chinese (Simplified, PRC)",
	nativeName: "中文(中华人民共和国)",
	language: "zh-CHS",
	numberFormat: {
		"NaN": "非数字",
		negativeInfinity: "负无穷大",
		positiveInfinity: "正无穷大",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["$-n","$n"],
			symbol: "¥"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
				namesAbbr: ["周日","周一","周二","周三","周四","周五","周六"],
				namesShort: ["日","一","二","三","四","五","六"]
			},
			months: {
				names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
				namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]
			},
			AM: ["上午","上午","上午"],
			PM: ["下午","下午","下午"],
			eras: [{"name":"公元","start":null,"offset":0}],
			patterns: {
				d: "yyyy/M/d",
				D: "yyyy'年'M'月'd'日'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "yyyy'年'M'月'd'日' H:mm",
				F: "yyyy'年'M'月'd'日' H:mm:ss",
				M: "M'月'd'日'",
				Y: "yyyy'年'M'月'"
			}
		}
	}
});

}( this ));

(function() {
	var merge = function(obj1, obj2) {
		var obj3 = {};
		for(var attrname in obj1){obj3[attrname] = obj1[attrname]; }
		for(var attrname in obj2){obj3[attrname] = obj2[attrname]; }
		return obj3;
}
  var dict = {
      "Unknown": "未知",
      "And": "与",
      "Authenticating": "验证 {0}...",
      "Clear": "清除 {0}",
      "CompleteQuery": "完整查询",
      "Exclude": "排除 {0}",
      "EnterTag": "添加标记",
      "Next": "下一页",
      "Last": "最后一页",
      "Link": "链接",
      "Or": "或",
      "Previous": "上一页",
      "QueryDidntMatchAnyDocuments": "您的查询与任何文档都不匹配。",
      "QueryException": "您的查询存在错误： {0}。",
      "Me": "我",
      "Remove": "删除",
      "Search": "搜索",
      "SearchFor": "搜索 {0}",
      "ShareQuery": "共享查询",
      "Preferences": "首选项",
      "LinkOpeningSettings": "链接打开设置",
      "Reauthenticate": "重新验证 {0}",
      "ResultsFilteringExpression": "结果筛选表达式",
      "FiltersInYourPreferences": "首选项中的筛选条件",
      "Create": "创建",
      "SearchIn": "在 {0} 中搜索",
      "Seconds": "用时 {0} 秒",
      "ShowingResultsOf": "结果数 {0}<pl>-{1}</pl>，总数 {2}",
      "SwitchTo": "切换到 {0}",
      "Unexclude": "不排除 {0}",
      "ClearAllFilters": "清除所有筛选条件",
      "SkipLogin": "跳过登录",
      "LoginInProgress": "正在登录，请稍候...",
      "Login": "登录",
      "GetStarted": "开始体验",
      "More": "更多",
      "Less": "更少",
      "Settings": "设置",
      "Score": "得分",
      "ScoreDescription": "得分是根据出现次数和在结果集中的位置计算得来。",
      "Occurrences": "出现次数",
      "OccurrencesDescription": "按出现次数排序，出现次数最高的值排在首位。",
      "Label": "标签",
      "Of": "第...个，共...个",
      "LabelDescription": "对字段值按字母顺序排序。",
      "Value": "值",
      "ValueDescription": "按第一个计算得出的字段的值排序",
      "AlphaAscending": "值升序排序",
      "AlphaDescending": "值降序排序",
      "ChiSquare": "卡方值",
      "Nosort": "无排序",
      "RelativeFrequency": "相对频率",
      "RelativeFrequencyDescription": "基于值的相对频率排序。较不常见的值将出现在较高位置。",
      "DateDistribution": "日期分布",
      "Custom": "自定义",
      "CustomDescription": "基于自定义顺序排序",
      "ComputedField": "计算得出的字段",
      "Ascending": "升序",
      "Descending": "降序",
      "noResultFor": "没有找到与 {0} 相关的结果",
      "autoCorrectedQueryTo": "查询自动更正为 {0}",
      "didYouMean": "您要找的是不是： {0}",
      "SuggestedResults": "建议的结果",
      "SuggestedQueries": "建议的查询",
      "MostRelevantItems": "最相关的项：",
      "AllItems": "所有项：",
      "ShowLess": "显示较少的值",
      "ShowMore": "显示较多的值",
      "HideFacet": "隐藏快捷控制界面",
      "ShowFacet": "显示快捷控制界面",
      "AndOthers": "以及 {0} 个其他项",
      "Others": "{0} 个其他项",
      "MostRelevantPosts": "最相关的帖子：",
      "CompleteThread": "完整的主题：",
      "ShowCompleteThread": "显示完整的主题",
      "ShowOnlyTopMatchingPosts": "仅显示最匹配的帖子",
      "MostRelevantReplies": "最相关的回复：",
      "AllConversation": "所有对话：",
      "ShowAllConversation": "显示所有对话",
      "ShowAllReplies": "显示所有回复",
      "ShowOnlyMostRelevantReplies": "仅显示最相关的回复",
      "Close": "关闭",
      "Open": "打开",
      "OpenInOutlookWhenPossible": "在 Outlook 中打开（如果可能）",
      "AlwaysOpenInNewWindow": "总是在新窗口中打开结果",
      "Quickview": "快速查看",
      "ErrorReport": "错误报告",
      "OopsError": "服务器出现了错误。",
      "ProblemPersists": "如果问题仍然存在，请联系管理员。",
      "GoBack": "返回",
      "Reset": "重置",
      "Retry": "重试",
      "MoreInfo": "更多信息",
      "Username": "用户名",
      "Password": "密码",
      "PostedBy": "发贴者",
      "CannotConnect": "无法连接到该服务器地址。",
      "BadUserPass": "密码与用户名不匹配。",
      "PleaseEnterYourCredentials": "请输入您的 {0} 凭据。",
      "PleaseEnterYourSearchPage": "请输入您的搜索页面的网址",
      "Collapse": "折叠",
      "Collapsable": "可折叠",
      "Expand": "展开",
      "Today": "今天",
      "Yesterday": "昨天",
      "Tomorrow": "明天",
      "Duration": "持续时间： {0}",
      "IndexDuration": "索引持续时间： {0}",
      "ProxyDuration": "代理持续时间： {0}",
      "ClientDuration": "客户端持续时间： {0}",
      "Unavailable": "不可用",
      "Reply": "回复",
      "ReplyAll": "全部回复",
      "Forward": "转发",
      "From": "发件人",
      "Caption": "标题",
      "Expression": "表达式",
      "Tab": "选项卡",
      "Tabs": "多个选项卡",
      "EnterExpressionName": "输入表达式名称",
      "EnterExpressionToFilterWith": "输入用于筛选结果的表达式",
      "SelectTab": "选择选项卡",
      "SelectAll": "全选",
      "PageUrl": "搜索页面的网址",
      "ErrorSavingToDevice": "在将信息保存到您的设备时出错",
      "ErrorReadingFromDevice": "在从您的设备读取信息时出错",
      "AppIntro": "咨询能够回答您有关 Coveo 的问题的产品专家，并帮助您确定哪个 Coveo 解决方案适合您。或者，尝试现场演示！",
      "TryDemo": "尝试演示",
      "ContactUs": "联系我们",
      "NewToCoveo": "Coveo 的新用户？",
      "LetUsHelpGetStarted": "让我们帮助您开始体验",
      "LikesThis": "{0} 喜欢此解决方案。",
      "CannotConnectSearchPage": "无法连接到您的搜索页面",
      "AreYouSureDeleteFilter": "您是否确定要删除采用 {1} 表达式的筛选条件 {0}",
      "OnlineHelp": "在线帮助",
      "Done": "完成",
      "SaveFacetState": "保存此快捷控制界面状态",
      "ClearFacetState": "清除快捷控制界面状态",
      "DisplayingTheOnlyMessage": "仅显示此对话中的消息",
      "NoNetworkConnection": "没有网络连接",
      "UnknownConnection": "未知的连接",
      "EthernetConnection": "以太网连接",
      "WiFi": "WiFi 连接",
      "CELL": "移动连接",
      "CELL_2G": "移动 2G 连接",
      "CELL_3G": "移动 3G 连接",
      "CELL_4G": "移动 4G 连接",
      "Relevance": "关联",
      "Date": "日期",
      "Amount": "数量",
      "QueryExceptionNoException": "没有例外",
      "QueryExceptionInvalidSyntax": "无效语法",
      "QueryExceptionInvalidCustomField": "无效自定义字段",
      "QueryExceptionInvalidDate": "无效日期",
      "QueryExceptionInvalidExactPhrase": "无效精确短语",
      "QueryExceptionInvalidDateOp": "无效日期运算符",
      "QueryExceptionInvalidNear": "无效 NEAR 运算符",
      "QueryExceptionInvalidWeightedNear": "无效加权 NEAR",
      "QueryExceptionInvalidTerm": "无效条件",
      "QueryExceptionTooManyTerms": "太多条件",
      "QueryExceptionWildcardTooGeneral": "通配符太常见",
      "QueryExceptionInvalidSortField": "无效排序字段",
      "QueryExceptionInvalidSmallStringOp": "无效小字符串运算符",
      "QueryExceptionRequestedResultsMax": "要求的最大结果数",
      "QueryExceptionAggregatedMirrorDead": "远程聚合镜像处于离线状态",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "远程聚合镜像查询超时",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "远程聚合镜像无效版本号",
      "QueryExceptionAggregatedMirrorCannotConnect": "远程聚合镜像无法连接",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "主字符通配符不足",
      "QueryExceptionSecurityInverterNotFound": "未找到安全变换器",
      "QueryExceptionSecurityInverterAccessDenied": "安全变换器访问被拒绝",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "远程聚合镜像无法模拟",
      "QueryExceptionUnexpected": "意外",
      "QueryExceptionAccessDenied": "访问被拒绝",
      "QueryExceptionSuperUserTokenInvalid": "超级用户令牌无效",
      "QueryExceptionSuperUserTokenExpired": "超级用户令牌已过期",
      "QueryExceptionLicenseQueriesExpired": "查询许可证已过期",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "许可证超级用户令牌不支持",
      "QueryExceptionInvalidSession": "无效会话",
      "QueryExceptionInvalidDocument": "无效文档",
      "QueryExceptionSearchDisabled": "搜索被禁用",
      "FileType": "文件类型",
      "ShowAttachment": "显示附件",
      "OnFeed": "有关 {0} 的输入。",
      "Author": "作者",
      "NoTitle": "无标题",
      "CurrentSelections": "当前选择",
      "AllContent": "所有内容",
      "CancelLastAction": "取消最后一个动作",
      "SearchTips": "搜索提示",
      "CheckSpelling": "检查关键字的拼写。",
      "TryUsingFewerKeywords": "尝试使用更少、更常用或不同的关键字。",
      "SelectFewerFilters": "选择较少的筛选条件以扩大您的搜索范围。",
  }
if( window['$'] != undefined && window['$'].fn != undefined && window['$'].fn.jquery != undefined ) { 

    $(function(){

        var locales = String["locales"] || (String["locales"] = {});
  locales["zh-CN"] = merge(locales["zh-CN"], dict);
  String["toLocaleString"].call(this, { "zh-CN": dict });
  String["locale"] = "zh-CN";
  String["defaultLocale"] = "en";
  Globalize.culture("zh-CN") 

    })

  } else {
    document.addEventListener('DOMContentLoaded', function(event){

        var locales = String["locales"] || (String["locales"] = {});
  locales["zh-CN"] = merge(locales["zh-CN"], dict);
  String["toLocaleString"].call(this, { "zh-CN": dict });
  String["locale"] = "zh-CN";
  String["defaultLocale"] = "en";
  Globalize.culture("zh-CN")
  })}})();
if(!window.Coveo){window.Coveo = {};}
Coveo.setLanguageAfterPageLoaded = function() {
	var merge = function(obj1, obj2) {
		var obj3 = {};
		for(var attrname in obj1){obj3[attrname] = obj1[attrname]; }
		for(var attrname in obj2){obj3[attrname] = obj2[attrname]; }
		return obj3;
}

  var dict = {
      "Unknown": "未知",
      "And": "与",
      "Authenticating": "验证 {0}...",
      "Clear": "清除 {0}",
      "CompleteQuery": "完整查询",
      "Exclude": "排除 {0}",
      "EnterTag": "添加标记",
      "Next": "下一页",
      "Last": "最后一页",
      "Link": "链接",
      "Or": "或",
      "Previous": "上一页",
      "QueryDidntMatchAnyDocuments": "您的查询与任何文档都不匹配。",
      "QueryException": "您的查询存在错误： {0}。",
      "Me": "我",
      "Remove": "删除",
      "Search": "搜索",
      "SearchFor": "搜索 {0}",
      "ShareQuery": "共享查询",
      "Preferences": "首选项",
      "LinkOpeningSettings": "链接打开设置",
      "Reauthenticate": "重新验证 {0}",
      "ResultsFilteringExpression": "结果筛选表达式",
      "FiltersInYourPreferences": "首选项中的筛选条件",
      "Create": "创建",
      "SearchIn": "在 {0} 中搜索",
      "Seconds": "用时 {0} 秒",
      "ShowingResultsOf": "结果数 {0}<pl>-{1}</pl>，总数 {2}",
      "SwitchTo": "切换到 {0}",
      "Unexclude": "不排除 {0}",
      "ClearAllFilters": "清除所有筛选条件",
      "SkipLogin": "跳过登录",
      "LoginInProgress": "正在登录，请稍候...",
      "Login": "登录",
      "GetStarted": "开始体验",
      "More": "更多",
      "Less": "更少",
      "Settings": "设置",
      "Score": "得分",
      "ScoreDescription": "得分是根据出现次数和在结果集中的位置计算得来。",
      "Occurrences": "出现次数",
      "OccurrencesDescription": "按出现次数排序，出现次数最高的值排在首位。",
      "Label": "标签",
      "Of": "第...个，共...个",
      "LabelDescription": "对字段值按字母顺序排序。",
      "Value": "值",
      "ValueDescription": "按第一个计算得出的字段的值排序",
      "AlphaAscending": "值升序排序",
      "AlphaDescending": "值降序排序",
      "ChiSquare": "卡方值",
      "Nosort": "无排序",
      "RelativeFrequency": "相对频率",
      "RelativeFrequencyDescription": "基于值的相对频率排序。较不常见的值将出现在较高位置。",
      "DateDistribution": "日期分布",
      "Custom": "自定义",
      "CustomDescription": "基于自定义顺序排序",
      "ComputedField": "计算得出的字段",
      "Ascending": "升序",
      "Descending": "降序",
      "noResultFor": "没有找到与 {0} 相关的结果",
      "autoCorrectedQueryTo": "查询自动更正为 {0}",
      "didYouMean": "您要找的是不是： {0}",
      "SuggestedResults": "建议的结果",
      "SuggestedQueries": "建议的查询",
      "MostRelevantItems": "最相关的项：",
      "AllItems": "所有项：",
      "ShowLess": "显示较少的值",
      "ShowMore": "显示较多的值",
      "HideFacet": "隐藏快捷控制界面",
      "ShowFacet": "显示快捷控制界面",
      "AndOthers": "以及 {0} 个其他项",
      "Others": "{0} 个其他项",
      "MostRelevantPosts": "最相关的帖子：",
      "CompleteThread": "完整的主题：",
      "ShowCompleteThread": "显示完整的主题",
      "ShowOnlyTopMatchingPosts": "仅显示最匹配的帖子",
      "MostRelevantReplies": "最相关的回复：",
      "AllConversation": "所有对话：",
      "ShowAllConversation": "显示所有对话",
      "ShowAllReplies": "显示所有回复",
      "ShowOnlyMostRelevantReplies": "仅显示最相关的回复",
      "Close": "关闭",
      "Open": "打开",
      "OpenInOutlookWhenPossible": "在 Outlook 中打开（如果可能）",
      "AlwaysOpenInNewWindow": "总是在新窗口中打开结果",
      "Quickview": "快速查看",
      "ErrorReport": "错误报告",
      "OopsError": "服务器出现了错误。",
      "ProblemPersists": "如果问题仍然存在，请联系管理员。",
      "GoBack": "返回",
      "Reset": "重置",
      "Retry": "重试",
      "MoreInfo": "更多信息",
      "Username": "用户名",
      "Password": "密码",
      "PostedBy": "发贴者",
      "CannotConnect": "无法连接到该服务器地址。",
      "BadUserPass": "密码与用户名不匹配。",
      "PleaseEnterYourCredentials": "请输入您的 {0} 凭据。",
      "PleaseEnterYourSearchPage": "请输入您的搜索页面的网址",
      "Collapse": "折叠",
      "Collapsable": "可折叠",
      "Expand": "展开",
      "Today": "今天",
      "Yesterday": "昨天",
      "Tomorrow": "明天",
      "Duration": "持续时间： {0}",
      "IndexDuration": "索引持续时间： {0}",
      "ProxyDuration": "代理持续时间： {0}",
      "ClientDuration": "客户端持续时间： {0}",
      "Unavailable": "不可用",
      "Reply": "回复",
      "ReplyAll": "全部回复",
      "Forward": "转发",
      "From": "发件人",
      "Caption": "标题",
      "Expression": "表达式",
      "Tab": "选项卡",
      "Tabs": "多个选项卡",
      "EnterExpressionName": "输入表达式名称",
      "EnterExpressionToFilterWith": "输入用于筛选结果的表达式",
      "SelectTab": "选择选项卡",
      "SelectAll": "全选",
      "PageUrl": "搜索页面的网址",
      "ErrorSavingToDevice": "在将信息保存到您的设备时出错",
      "ErrorReadingFromDevice": "在从您的设备读取信息时出错",
      "AppIntro": "咨询能够回答您有关 Coveo 的问题的产品专家，并帮助您确定哪个 Coveo 解决方案适合您。或者，尝试现场演示！",
      "TryDemo": "尝试演示",
      "ContactUs": "联系我们",
      "NewToCoveo": "Coveo 的新用户？",
      "LetUsHelpGetStarted": "让我们帮助您开始体验",
      "LikesThis": "{0} 喜欢此解决方案。",
      "CannotConnectSearchPage": "无法连接到您的搜索页面",
      "AreYouSureDeleteFilter": "您是否确定要删除采用 {1} 表达式的筛选条件 {0}",
      "OnlineHelp": "在线帮助",
      "Done": "完成",
      "SaveFacetState": "保存此快捷控制界面状态",
      "ClearFacetState": "清除快捷控制界面状态",
      "DisplayingTheOnlyMessage": "仅显示此对话中的消息",
      "NoNetworkConnection": "没有网络连接",
      "UnknownConnection": "未知的连接",
      "EthernetConnection": "以太网连接",
      "WiFi": "WiFi 连接",
      "CELL": "移动连接",
      "CELL_2G": "移动 2G 连接",
      "CELL_3G": "移动 3G 连接",
      "CELL_4G": "移动 4G 连接",
      "Relevance": "关联",
      "Date": "日期",
      "Amount": "数量",
      "QueryExceptionNoException": "没有例外",
      "QueryExceptionInvalidSyntax": "无效语法",
      "QueryExceptionInvalidCustomField": "无效自定义字段",
      "QueryExceptionInvalidDate": "无效日期",
      "QueryExceptionInvalidExactPhrase": "无效精确短语",
      "QueryExceptionInvalidDateOp": "无效日期运算符",
      "QueryExceptionInvalidNear": "无效 NEAR 运算符",
      "QueryExceptionInvalidWeightedNear": "无效加权 NEAR",
      "QueryExceptionInvalidTerm": "无效条件",
      "QueryExceptionTooManyTerms": "太多条件",
      "QueryExceptionWildcardTooGeneral": "通配符太常见",
      "QueryExceptionInvalidSortField": "无效排序字段",
      "QueryExceptionInvalidSmallStringOp": "无效小字符串运算符",
      "QueryExceptionRequestedResultsMax": "要求的最大结果数",
      "QueryExceptionAggregatedMirrorDead": "远程聚合镜像处于离线状态",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "远程聚合镜像查询超时",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "远程聚合镜像无效版本号",
      "QueryExceptionAggregatedMirrorCannotConnect": "远程聚合镜像无法连接",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "主字符通配符不足",
      "QueryExceptionSecurityInverterNotFound": "未找到安全变换器",
      "QueryExceptionSecurityInverterAccessDenied": "安全变换器访问被拒绝",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "远程聚合镜像无法模拟",
      "QueryExceptionUnexpected": "意外",
      "QueryExceptionAccessDenied": "访问被拒绝",
      "QueryExceptionSuperUserTokenInvalid": "超级用户令牌无效",
      "QueryExceptionSuperUserTokenExpired": "超级用户令牌已过期",
      "QueryExceptionLicenseQueriesExpired": "查询许可证已过期",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "许可证超级用户令牌不支持",
      "QueryExceptionInvalidSession": "无效会话",
      "QueryExceptionInvalidDocument": "无效文档",
      "QueryExceptionSearchDisabled": "搜索被禁用",
      "FileType": "文件类型",
      "ShowAttachment": "显示附件",
      "OnFeed": "有关 {0} 的输入。",
      "Author": "作者",
      "NoTitle": "无标题",
      "CurrentSelections": "当前选择",
      "AllContent": "所有内容",
      "CancelLastAction": "取消最后一个动作",
      "SearchTips": "搜索提示",
      "CheckSpelling": "检查关键字的拼写。",
      "TryUsingFewerKeywords": "尝试使用更少、更常用或不同的关键字。",
      "SelectFewerFilters": "选择较少的筛选条件以扩大您的搜索范围。",
  }

  var locales = String["locales"] || (String["locales"] = {});
  locales["zh-CN"] = merge(locales["zh-CN"], dict);
  String["toLocaleString"].call(this, { "zh-CN": dict });
  String["locale"] = "zh-CN";
  String["defaultLocale"] = "en";
  Globalize.culture("zh-CN")
}