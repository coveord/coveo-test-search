if(window.Globalize == undefined) {
/*! globalize - v0.1.1 - 2013-04-30
* https://github.com/jquery/globalize
* Copyright 2013 ; Licensed MIT */
var Globalize = (function(e,r){var t,n,a,s,u,l,i,c,o,f,d,p,h,g,b,m,y,M,v,k,z,F,A,x;t=function(e){return new t.prototype.init(e)},"undefined"!=typeof require&&"undefined"!=typeof exports&&"undefined"!=typeof module?module.exports=t:e.Globalize=t,t.cultures={},t.prototype={constructor:t,init:function(e){return this.cultures=t.cultures,this.cultureSelector=e,this}},t.prototype.init.prototype=t.prototype,t.cultures["default"]={name:"en",englishName:"English",nativeName:"English",isRTL:!1,language:"en",numberFormat:{pattern:["-n"],decimals:2,",":",",".":".",groupSizes:[3],"+":"+","-":"-",NaN:"NaN",negativeInfinity:"-Infinity",positiveInfinity:"Infinity",percent:{pattern:["-n %","n %"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"%"},currency:{pattern:["($n)","$n"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"$"}},calendars:{standard:{name:"Gregorian_USEnglish","/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}}},messages:{}},t.cultures["default"].calendar=t.cultures["default"].calendars.standard,t.cultures.en=t.cultures["default"],t.cultureSelector="en",n=/^0x[a-f0-9]+$/i,a=/^[+\-]?infinity$/i,s=/^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,u=/^\s+|\s+$/g,l=function(e,r){if(e.indexOf)return e.indexOf(r);for(var t=0,n=e.length;n>t;t++)if(e[t]===r)return t;return-1},i=function(e,r){return e.substr(e.length-r.length)===r},c=function(){var e,t,n,a,s,u,l=arguments[0]||{},i=1,p=arguments.length,h=!1;for("boolean"==typeof l&&(h=l,l=arguments[1]||{},i=2),"object"==typeof l||f(l)||(l={});p>i;i++)if(null!=(e=arguments[i]))for(t in e)n=l[t],a=e[t],l!==a&&(h&&a&&(d(a)||(s=o(a)))?(s?(s=!1,u=n&&o(n)?n:[]):u=n&&d(n)?n:{},l[t]=c(h,u,a)):a!==r&&(l[t]=a));return l},o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},f=function(e){return"[object Function]"===Object.prototype.toString.call(e)},d=function(e){return"[object Object]"===Object.prototype.toString.call(e)},p=function(e,r){return 0===e.indexOf(r)},h=function(e){return(e+"").replace(u,"")},g=function(e){return isNaN(e)?0/0:Math[0>e?"ceil":"floor"](e)},b=function(e,r,t){var n;for(n=e.length;r>n;n+=1)e=t?"0"+e:e+"0";return e},m=function(e,r){for(var t=0,n=!1,a=0,s=e.length;s>a;a++){var u=e.charAt(a);switch(u){case"'":n?r.push("'"):t++,n=!1;break;case"\\":n&&r.push("\\"),n=!n;break;default:r.push(u),n=!1}}return t},y=function(e,r){r=r||"F";var t,n=e.patterns,a=r.length;if(1===a){if(t=n[r],!t)throw"Invalid date format string '"+r+"'.";r=t}else 2===a&&"%"===r.charAt(0)&&(r=r.charAt(1));return r},M=function(e,r,t){function n(e,r){var t,n=e+"";return r>1&&r>n.length?(t=v[r-2]+n,t.substr(t.length-r,r)):t=n}function a(){return h||g?h:(h=A.test(r),g=!0,h)}function s(e,r){if(b)return b[r];switch(r){case 0:return e.getFullYear();case 1:return e.getMonth();case 2:return e.getDate();default:throw"Invalid part value "+r}}var u,l=t.calendar,i=l.convert;if(!r||!r.length||"i"===r){if(t&&t.name.length)if(i)u=M(e,l.patterns.F,t);else{var c=new Date(e.getTime()),o=z(e,l.eras);c.setFullYear(F(e,l,o)),u=c.toLocaleString()}else u=""+e;return u}var f=l.eras,d="s"===r;r=y(l,r),u=[];var p,h,g,b,v=["0","00","000"],A=/([^d]|^)(d|dd)([^d]|$)/g,x=0,I=k();for(!d&&i&&(b=i.fromGregorian(e));;){var S=I.lastIndex,w=I.exec(r),C=r.slice(S,w?w.index:r.length);if(x+=m(C,u),!w)break;if(x%2)u.push(w[0]);else{var D=w[0],H=D.length;switch(D){case"ddd":case"dddd":var O=3===H?l.days.namesAbbr:l.days.names;u.push(O[e.getDay()]);break;case"d":case"dd":h=!0,u.push(n(s(e,2),H));break;case"MMM":case"MMMM":var N=s(e,1);u.push(l.monthsGenitive&&a()?l.monthsGenitive[3===H?"namesAbbr":"names"][N]:l.months[3===H?"namesAbbr":"names"][N]);break;case"M":case"MM":u.push(n(s(e,1)+1,H));break;case"y":case"yy":case"yyyy":N=b?b[0]:F(e,l,z(e,f),d),4>H&&(N%=100),u.push(n(N,H));break;case"h":case"hh":p=e.getHours()%12,0===p&&(p=12),u.push(n(p,H));break;case"H":case"HH":u.push(n(e.getHours(),H));break;case"m":case"mm":u.push(n(e.getMinutes(),H));break;case"s":case"ss":u.push(n(e.getSeconds(),H));break;case"t":case"tt":N=12>e.getHours()?l.AM?l.AM[0]:" ":l.PM?l.PM[0]:" ",u.push(1===H?N.charAt(0):N);break;case"f":case"ff":case"fff":u.push(n(e.getMilliseconds(),3).substr(0,H));break;case"z":case"zz":p=e.getTimezoneOffset()/60,u.push((0>=p?"+":"-")+n(Math.floor(Math.abs(p)),H));break;case"zzz":p=e.getTimezoneOffset()/60,u.push((0>=p?"+":"-")+n(Math.floor(Math.abs(p)),2)+":"+n(Math.abs(e.getTimezoneOffset()%60),2));break;case"g":case"gg":l.eras&&u.push(l.eras[z(e,f)].name);break;case"/":u.push(l["/"]);break;default:throw"Invalid date format pattern '"+D+"'."}}}return u.join("")},function(){var e;e=function(e,r,t){var n=t.groupSizes,a=n[0],s=1,u=Math.pow(10,r),l=Math.round(e*u)/u;isFinite(l)||(l=e),e=l;var i=e+"",c="",o=i.split(/e/i),f=o.length>1?parseInt(o[1],10):0;i=o[0],o=i.split("."),i=o[0],c=o.length>1?o[1]:"",f>0?(c=b(c,f,!1),i+=c.slice(0,f),c=c.substr(f)):0>f&&(f=-f,i=b(i,f+1,!0),c=i.slice(-f,i.length)+c,i=i.slice(0,-f)),c=r>0?t["."]+(c.length>r?c.slice(0,r):b(c,r)):"";for(var d=i.length-1,p=t[","],h="";d>=0;){if(0===a||a>d)return i.slice(0,d+1)+(h.length?p+h+c:c);h=i.slice(d-a+1,d+1)+(h.length?p+h:""),d-=a,n.length>s&&(a=n[s],s++)}return i.slice(0,d+1)+p+h+c},v=function(r,t,n){if(!isFinite(r))return 1/0===r?n.numberFormat.positiveInfinity:r===-1/0?n.numberFormat.negativeInfinity:n.numberFormat.NaN;if(!t||"i"===t)return n.name.length?r.toLocaleString():""+r;t=t||"D";var a,s=n.numberFormat,u=Math.abs(r),l=-1;t.length>1&&(l=parseInt(t.slice(1),10));var i,c=t.charAt(0).toUpperCase();switch(c){case"D":a="n",u=g(u),-1!==l&&(u=b(""+u,l,!0)),0>r&&(u="-"+u);break;case"N":i=s;case"C":i=i||s.currency;case"P":i=i||s.percent,a=0>r?i.pattern[0]:i.pattern[1]||"n",-1===l&&(l=i.decimals),u=e(u*("P"===c?100:1),l,i);break;default:throw"Bad number format specifier: "+c}for(var o=/n|\$|-|%/g,f="";;){var d=o.lastIndex,p=o.exec(a);if(f+=a.slice(d,p?p.index:a.length),!p)break;switch(p[0]){case"n":f+=u;break;case"$":f+=s.currency.symbol;break;case"-":/[1-9]/.test(u)&&(f+=s["-"]);break;case"%":f+=s.percent.symbol}}return f}}(),k=function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},z=function(e,r){if(!r)return 0;for(var t,n=e.getTime(),a=0,s=r.length;s>a;a++)if(t=r[a].start,null===t||n>=t)return a;return 0},F=function(e,r,t,n){var a=e.getFullYear();return!n&&r.eras&&(a-=r.eras[t].offset),a},function(){var e,r,t,n,a,s,u;e=function(e,r){if(100>r){var t=new Date,n=z(t),a=F(t,e,n),s=e.twoDigitYearMax;s="string"==typeof s?(new Date).getFullYear()%100+parseInt(s,10):s,r+=a-a%100,r>s&&(r-=100)}return r},r=function(e,r,t){var n,a=e.days,i=e._upperDays;return i||(e._upperDays=i=[u(a.names),u(a.namesAbbr),u(a.namesShort)]),r=s(r),t?(n=l(i[1],r),-1===n&&(n=l(i[2],r))):n=l(i[0],r),n},t=function(e,r,t){var n=e.months,a=e.monthsGenitive||e.months,i=e._upperMonths,c=e._upperMonthsGen;i||(e._upperMonths=i=[u(n.names),u(n.namesAbbr)],e._upperMonthsGen=c=[u(a.names),u(a.namesAbbr)]),r=s(r);var o=l(t?i[1]:i[0],r);return 0>o&&(o=l(t?c[1]:c[0],r)),o},n=function(e,r){var t=e._parseRegExp;if(t){var n=t[r];if(n)return n}else e._parseRegExp=t={};for(var a,s=y(e,r).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),u=["^"],l=[],i=0,c=0,o=k();null!==(a=o.exec(s));){var f=s.slice(i,a.index);if(i=o.lastIndex,c+=m(f,u),c%2)u.push(a[0]);else{var d,p=a[0],h=p.length;switch(p){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":d="(\\D+)";break;case"tt":case"t":d="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":d="(\\d{"+h+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":d="(\\d\\d?)";break;case"zzz":d="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":d="([+-]?\\d\\d?)";break;case"/":d="(\\/)";break;default:throw"Invalid date format pattern '"+p+"'."}d&&u.push(d),l.push(a[0])}}m(s.slice(i),u),u.push("$");var g=u.join("").replace(/\s+/g,"\\s+"),b={regExp:g,groups:l};return t[r]=b},a=function(e,r,t){return r>e||e>t},s=function(e){return e.split("\u00a0").join(" ").toUpperCase()},u=function(e){for(var r=[],t=0,n=e.length;n>t;t++)r[t]=s(e[t]);return r},A=function(s,u,l){s=h(s);var i=l.calendar,c=n(i,u),o=RegExp(c.regExp).exec(s);if(null===o)return null;for(var f,d=c.groups,g=null,b=null,m=null,y=null,M=null,v=0,k=0,z=0,F=0,A=null,x=!1,I=0,S=d.length;S>I;I++){var w=o[I+1];if(w){var C=d[I],D=C.length,H=parseInt(w,10);switch(C){case"dd":case"d":if(y=H,a(y,1,31))return null;break;case"MMM":case"MMMM":if(m=t(i,w,3===D),a(m,0,11))return null;break;case"M":case"MM":if(m=H-1,a(m,0,11))return null;break;case"y":case"yy":case"yyyy":if(b=4>D?e(i,H):H,a(b,0,9999))return null;break;case"h":case"hh":if(v=H,12===v&&(v=0),a(v,0,11))return null;break;case"H":case"HH":if(v=H,a(v,0,23))return null;break;case"m":case"mm":if(k=H,a(k,0,59))return null;break;case"s":case"ss":if(z=H,a(z,0,59))return null;break;case"tt":case"t":if(x=i.PM&&(w===i.PM[0]||w===i.PM[1]||w===i.PM[2]),!x&&(!i.AM||w!==i.AM[0]&&w!==i.AM[1]&&w!==i.AM[2]))return null;break;case"f":case"ff":case"fff":if(F=H*Math.pow(10,3-D),a(F,0,999))return null;break;case"ddd":case"dddd":if(M=r(i,w,3===D),a(M,0,6))return null;break;case"zzz":var O=w.split(/:/);if(2!==O.length)return null;if(f=parseInt(O[0],10),a(f,-12,13))return null;var N=parseInt(O[1],10);if(a(N,0,59))return null;A=60*f+(p(w,"-")?-N:N);break;case"z":case"zz":if(f=H,a(f,-12,13))return null;A=60*f;break;case"g":case"gg":var T=w;if(!T||!i.eras)return null;T=h(T.toLowerCase());for(var j=0,$=i.eras.length;$>j;j++)if(T===i.eras[j].name.toLowerCase()){g=j;break}if(null===g)return null}}}var P,G=new Date,E=i.convert;if(P=E?E.fromGregorian(G)[0]:G.getFullYear(),null===b?b=P:i.eras&&(b+=i.eras[g||0].offset),null===m&&(m=0),null===y&&(y=1),E){if(G=E.toGregorian(b,m,y),null===G)return null}else{if(G.setFullYear(b,m,y),G.getDate()!==y)return null;if(null!==M&&G.getDay()!==M)return null}if(x&&12>v&&(v+=12),G.setHours(v,k,z,F),null!==A){var Y=G.getMinutes()-(A+G.getTimezoneOffset());G.setHours(G.getHours()+parseInt(Y/60,10),Y%60)}return G}}(),x=function(e,r,t){var n,a=r["-"],s=r["+"];switch(t){case"n -":a=" "+a,s=" "+s;case"n-":i(e,a)?n=["-",e.substr(0,e.length-a.length)]:i(e,s)&&(n=["+",e.substr(0,e.length-s.length)]);break;case"- n":a+=" ",s+=" ";case"-n":p(e,a)?n=["-",e.substr(a.length)]:p(e,s)&&(n=["+",e.substr(s.length)]);break;case"(n)":p(e,"(")&&i(e,")")&&(n=["-",e.substr(1,e.length-2)])}return n||["",e]},t.prototype.findClosestCulture=function(e){return t.findClosestCulture.call(this,e)},t.prototype.format=function(e,r,n){return t.format.call(this,e,r,n)},t.prototype.localize=function(e,r){return t.localize.call(this,e,r)},t.prototype.parseInt=function(e,r,n){return t.parseInt.call(this,e,r,n)},t.prototype.parseFloat=function(e,r,n){return t.parseFloat.call(this,e,r,n)},t.prototype.culture=function(e){return t.culture.call(this,e)},t.addCultureInfo=function(e,r,t){var n={},a=!1;"string"!=typeof e?(t=e,e=this.culture().name,n=this.cultures[e]):"string"!=typeof r?(t=r,a=null==this.cultures[e],n=this.cultures[e]||this.cultures["default"]):(a=!0,n=this.cultures[r]),this.cultures[e]=c(!0,{},n,t),a&&(this.cultures[e].calendar=this.cultures[e].calendars.standard)},t.findClosestCulture=function(e){var r;if(!e)return this.findClosestCulture(this.cultureSelector)||this.cultures["default"];if("string"==typeof e&&(e=e.split(",")),o(e)){var t,n,a=this.cultures,s=e,u=s.length,l=[];for(n=0;u>n;n++){e=h(s[n]);var i,c=e.split(";");t=h(c[0]),1===c.length?i=1:(e=h(c[1]),0===e.indexOf("q=")?(e=e.substr(2),i=parseFloat(e),i=isNaN(i)?0:i):i=1),l.push({lang:t,pri:i})}for(l.sort(function(e,r){return e.pri<r.pri?1:e.pri>r.pri?-1:0}),n=0;u>n;n++)if(t=l[n].lang,r=a[t])return r;for(n=0;u>n;n++)for(t=l[n].lang;;){var f=t.lastIndexOf("-");if(-1===f)break;if(t=t.substr(0,f),r=a[t])return r}for(n=0;u>n;n++){t=l[n].lang;for(var d in a){var p=a[d];if(p.language===t)return p}}}else if("object"==typeof e)return e;return r||null},t.format=function(e,r,t){var n=this.findClosestCulture(t);return e instanceof Date?e=M(e,r,n):"number"==typeof e&&(e=v(e,r,n)),e},t.localize=function(e,r){return this.findClosestCulture(r).messages[e]||this.cultures["default"].messages[e]},t.parseDate=function(e,r,t){t=this.findClosestCulture(t);var n,a,s;if(r){if("string"==typeof r&&(r=[r]),r.length)for(var u=0,l=r.length;l>u;u++){var i=r[u];if(i&&(n=A(e,i,t)))break}}else{s=t.calendar.patterns;for(a in s)if(n=A(e,s[a],t))break}return n||null},t.parseInt=function(e,r,n){return g(t.parseFloat(e,r,n))},t.parseFloat=function(e,r,t){"number"!=typeof r&&(t=r,r=10);var u=this.findClosestCulture(t),l=0/0,i=u.numberFormat;if(e.indexOf(u.numberFormat.currency.symbol)>-1&&(e=e.replace(u.numberFormat.currency.symbol,""),e=e.replace(u.numberFormat.currency["."],u.numberFormat["."])),e.indexOf(u.numberFormat.percent.symbol)>-1&&(e=e.replace(u.numberFormat.percent.symbol,"")),e=e.replace(/ /g,""),a.test(e))l=parseFloat(e);else if(!r&&n.test(e))l=parseInt(e,16);else{var c=x(e,i,i.pattern[0]),o=c[0],f=c[1];""===o&&"(n)"!==i.pattern[0]&&(c=x(e,i,"(n)"),o=c[0],f=c[1]),""===o&&"-n"!==i.pattern[0]&&(c=x(e,i,"-n"),o=c[0],f=c[1]),o=o||"+";var d,p,h=f.indexOf("e");0>h&&(h=f.indexOf("E")),0>h?(p=f,d=null):(p=f.substr(0,h),d=f.substr(h+1));var g,b,m=i["."],y=p.indexOf(m);0>y?(g=p,b=null):(g=p.substr(0,y),b=p.substr(y+m.length));var M=i[","];g=g.split(M).join("");var v=M.replace(/\u00A0/g," ");M!==v&&(g=g.split(v).join(""));var k=o+g;if(null!==b&&(k+="."+b),null!==d){var z=x(d,i,"-n");k+="e"+(z[0]||"+")+z[1]}s.test(k)&&(l=parseFloat(k))}return l},t.culture=function(e){return e!==r&&(this.cultureSelector=e),this.findClosestCulture(e)||this.cultures["default"]}; return Globalize;}(this));
}
/*
 * Globalize Culture ko
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

Globalize.addCultureInfo( "ko", "default", {
	name: "ko",
	englishName: "Korean",
	nativeName: "한국어",
	language: "ko",
	numberFormat: {
		currency: {
			pattern: ["-$n","$n"],
			decimals: 0,
			symbol: "₩"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			days: {
				names: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
				namesAbbr: ["일","월","화","수","목","금","토"],
				namesShort: ["일","월","화","수","목","금","토"]
			},
			months: {
				names: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["오전","오전","오전"],
			PM: ["오후","오후","오후"],
			eras: [{"name":"서기","start":null,"offset":0}],
			patterns: {
				d: "yyyy-MM-dd",
				D: "yyyy'년' M'월' d'일' dddd",
				t: "tt h:mm",
				T: "tt h:mm:ss",
				f: "yyyy'년' M'월' d'일' dddd tt h:mm",
				F: "yyyy'년' M'월' d'일' dddd tt h:mm:ss",
				M: "M'월' d'일'",
				Y: "yyyy'년' M'월'"
			}
		},
		Korean: {
			name: "Korean",
			"/": "-",
			days: {
				names: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
				namesAbbr: ["일","월","화","수","목","금","토"],
				namesShort: ["일","월","화","수","목","금","토"]
			},
			months: {
				names: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["오전","오전","오전"],
			PM: ["오후","오후","오후"],
			eras: [{"name":"단기","start":null,"offset":-2333}],
			twoDigitYearMax: 4362,
			patterns: {
				d: "gg yyyy-MM-dd",
				D: "gg yyyy'년' M'월' d'일' dddd",
				t: "tt h:mm",
				T: "tt h:mm:ss",
				f: "gg yyyy'년' M'월' d'일' dddd tt h:mm",
				F: "gg yyyy'년' M'월' d'일' dddd tt h:mm:ss",
				M: "M'월' d'일'",
				Y: "gg yyyy'년' M'월'"
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
      "Unknown": "알 수 없음",
      "And": "및",
      "Authenticating": "{0}을(를) 인증하는 중...",
      "Clear": "{0} 지우기",
      "CompleteQuery": "전체 쿼리",
      "Exclude": "{0} 제외",
      "EnterTag": "태그 추가",
      "Next": "다음",
      "Last": "마지막",
      "Link": "링크",
      "Or": "또는",
      "Previous": "이전",
      "QueryDidntMatchAnyDocuments": "쿼리가 어느 문서와도 일치하지 않습니다.",
      "QueryException": "쿼리에 오류가 있습니다: {0}.",
      "Me": "나",
      "Remove": "제거",
      "Search": "검색",
      "SearchFor": "{0} 검색",
      "ShareQuery": "쿼리 공유",
      "Preferences": "기본 설정",
      "LinkOpeningSettings": "링크 열기 설정",
      "Reauthenticate": "{0} 재인증",
      "ResultsFilteringExpression": "결과 필터링 표현",
      "FiltersInYourPreferences": "사용자의 기본 설정에서 필터",
      "Create": "만들기",
      "SearchIn": "{0}에서 검색",
      "Seconds": "{0} 초 후",
      "ShowingResultsOf": "결과 {0} {2} 중<pl>-{1}</pl>",
      "SwitchTo": "{0}(으)로 전환",
      "Unexclude": "{0} 비제외",
      "ClearAllFilters": "모든 필터 지우기",
      "SkipLogin": "로그인 건너뛰기",
      "LoginInProgress": "로그인 진행 중, 기다려주십시오...",
      "Login": "로그인",
      "GetStarted": "시작하기",
      "More": "더 보기",
      "Less": "덜 보기",
      "Settings": "설정",
      "Score": "점수",
      "ScoreDescription": "점수는 결과 세트 내 위치에서뿐 아니라 빈도 수로부터도 계산됩니다.",
      "Occurrences": "빈도",
      "OccurrencesDescription": "가장 큰 수가 있는 값이 먼저 표시되게 빈도 수로 정렬",
      "Label": "라벨",
      "Of": "중",
      "LabelDescription": "필드 값 알파벳 순 정렬",
      "Value": "값",
      "ValueDescription": "최초 계산된 필드의 값으로 정렬",
      "AlphaAscending": "오름차순 값",
      "AlphaDescending": "내림차순 값",
      "ChiSquare": "카이 제곱",
      "Nosort": "정렬 항목 없음",
      "RelativeFrequency": "상대 빈도",
      "RelativeFrequencyDescription": "값의 상대 빈도를 기준으로 정렬. 덜 흔한 값이 더 높은 위치에 표시됩니다.",
      "DateDistribution": "날짜 분포",
      "Custom": "사용자 정의",
      "CustomDescription": "사용자 정의 순서대로 정렬",
      "ComputedField": "계산된 필드",
      "Ascending": "오름차순",
      "Descending": "내림차순",
      "noResultFor": "{0}에 대한 검색 결과가 없습니다",
      "autoCorrectedQueryTo": "쿼리가 {0}(으)로 자동 교정됐습니다",
      "didYouMean": "다음을 뜻하셨나요: {0}",
      "SuggestedResults": "제안된 결과",
      "SuggestedQueries": "제안된 쿼리",
      "MostRelevantItems": "가장 관련 있는 항목:",
      "AllItems": "모든 항목:",
      "ShowLess": "최소 표시",
      "ShowMore": "최대 표시",
      "HideFacet": "패싯 감추기",
      "ShowFacet": "패싯 표시",
      "AndOthers": "및 기타 {0}",
      "Others": "기타 {0}",
      "MostRelevantPosts": "가장 관련 있는 게시글:",
      "CompleteThread": "전체 스레드:",
      "ShowCompleteThread": "전체 스레드 표시",
      "ShowOnlyTopMatchingPosts": "최대 일치 게시글만 표시",
      "MostRelevantReplies": "가장 관련 있는 댓글:",
      "AllConversation": "모든 대화:",
      "ShowAllConversation": "모든 대화 표시",
      "ShowAllReplies": "모든 댓글 표시",
      "ShowOnlyMostRelevantReplies": "가장 관련 있는 댓글만 표시",
      "Close": "닫기",
      "Open": "열기",
      "OpenInOutlookWhenPossible": "Outlook에서 열기(가능한 경우)",
      "AlwaysOpenInNewWindow": "결과를 항상 새 창에서 열기",
      "Quickview": "간략히 보기",
      "ErrorReport": "오류 보고",
      "OopsError": "서버에 이상이 생겼습니다.",
      "ProblemPersists": "문제가 계속되면 관리자에게 연락하십시오.",
      "GoBack": "뒤로",
      "Reset": "재설정",
      "Retry": "재시도",
      "MoreInfo": "추가 정보",
      "Username": "사용자 이름",
      "Password": "암호",
      "PostedBy": "게시자",
      "CannotConnect": "서버 주소에 연결할 수 없습니다.",
      "BadUserPass": "암호가 사용자 이름과 일치하지 않습니다.",
      "PleaseEnterYourCredentials": "{0}에 대한 자격 증명을 입력하십시오.",
      "PleaseEnterYourSearchPage": "검색 페이지 URL을 입력하십시오.",
      "Collapse": "축소",
      "Collapsable": "축소 가능",
      "Expand": "확대",
      "Today": "오늘",
      "Yesterday": "어제",
      "Tomorrow": "내일",
      "Duration": "표시 시간: {0}",
      "IndexDuration": "색인 표시 시간: {0}",
      "ProxyDuration": "프록시 표시 시간: {0}",
      "ClientDuration": "클라이언트 표시 시간: {0}",
      "Unavailable": "없음",
      "Reply": "회신",
      "ReplyAll": "모두에게 회신",
      "Forward": "전달",
      "From": "보낸 사람",
      "Caption": "제목",
      "Expression": "표현식",
      "Tab": "탭",
      "Tabs": "탭들",
      "EnterExpressionName": "표현식 이름 입력",
      "EnterExpressionToFilterWith": "다음 결과를 필터할 표현식 입력",
      "SelectTab": "탭 선택",
      "SelectAll": "모두 선택",
      "PageUrl": "검색 페이지 URL",
      "ErrorSavingToDevice": "정보를 사용자의 기기에 저장하는 중 오류",
      "ErrorReadingFromDevice": "정보를 사용자의 기기에서 읽는 중 오류",
      "AppIntro": "Coveo에 관한 질문에 답하고 Coveo 솔루션이 사용자에게 적합한지 알아보는 데 도움을 줄 수 있는 제품 전문가와 상담하십시오. 또는 실제 시연을 이용하십시오!",
      "TryDemo": "시연 이용",
      "ContactUs": "연락처",
      "NewToCoveo": "Coveo가 처음이신가요?",
      "LetUsHelpGetStarted": "저희가 시작을 돕겠습니다",
      "LikesThis": "{0}(이)가 이것을 좋아합니다.",
      "CannotConnectSearchPage": "검색 페이지에 연결할 수 없습니다",
      "AreYouSureDeleteFilter": "{1} 식이 있는 필터 {0}(을)를 삭제하시겠습니까?",
      "OnlineHelp": "온라인 도움말",
      "Done": "완료",
      "SaveFacetState": "이 패싯 상태를 저장",
      "ClearFacetState": "패싯 상태 지우기",
      "DisplayingTheOnlyMessage": "이 대화에서 유일한 메시지를 표시",
      "NoNetworkConnection": "네트워크에 연결할 수 없습니다",
      "UnknownConnection": "알 수 없는 연결",
      "EthernetConnection": "이더넷 연결",
      "WiFi": "WiFi 연결",
      "CELL": "휴대 전화 연결",
      "CELL_2G": "휴대 전화 2G 연결",
      "CELL_3G": "휴대 전화 3G 연결",
      "CELL_4G": "휴대 전화 4G 연결",
      "Relevance": "관련성",
      "Date": "날짜",
      "Amount": "금액",
      "QueryExceptionNoException": "예외가 없습니다",
      "QueryExceptionInvalidSyntax": "구문이 잘못되었습니다",
      "QueryExceptionInvalidCustomField": "사용자 정의 필드가 잘못되었습니다",
      "QueryExceptionInvalidDate": "날짜가 잘못되었습니다",
      "QueryExceptionInvalidExactPhrase": "일치하여야 하는 구가 잘못되었습니다",
      "QueryExceptionInvalidDateOp": "날짜 연산자가 잘못되었습니다",
      "QueryExceptionInvalidNear": "NEAR 연산자가 잘못되었습니다",
      "QueryExceptionInvalidWeightedNear": "가중 NEAR 연산자가 잘못되었습니다",
      "QueryExceptionInvalidTerm": "용어가 잘못되었습니다",
      "QueryExceptionTooManyTerms": "용어가 너무 많습니다",
      "QueryExceptionWildcardTooGeneral": "와일드카드가 너무 일반적입니다",
      "QueryExceptionInvalidSortField": "정렬 필드가 잘못되었습니다",
      "QueryExceptionInvalidSmallStringOp": "단문자열 연산자가 잘못되었습니다",
      "QueryExceptionRequestedResultsMax": "요청 결과 최대 한도",
      "QueryExceptionAggregatedMirrorDead": "집합 미러가 오프라인입니다",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "집합 미러 쿼리 시간 제한",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "집합 미러의 잘못된 빌드 번호",
      "QueryExceptionAggregatedMirrorCannotConnect": "집합 미러를 연결할 수 없습니다",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "선행 문자 와일드카드가 충분하지 않습니다",
      "QueryExceptionSecurityInverterNotFound": "보안 인버터를 찾을 수 없습니다",
      "QueryExceptionSecurityInverterAccessDenied": "보안 인버터 접근이 거부됐습니다",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "집합 미러를 가장할 수 없습니다",
      "QueryExceptionUnexpected": "예상하지 않은",
      "QueryExceptionAccessDenied": "접근이 거부됐습니다",
      "QueryExceptionSuperUserTokenInvalid": "슈퍼 유저 토큰이 잘못되었습니다",
      "QueryExceptionSuperUserTokenExpired": "슈퍼 유저 토큰이 만료됐습니다",
      "QueryExceptionLicenseQueriesExpired": "쿼리 라이선스가 만료됐습니다",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "지원하지 않는 라이선스 슈퍼 유저 토큰입니다",
      "QueryExceptionInvalidSession": "세션이 잘못됐습니다",
      "QueryExceptionInvalidDocument": "문서가 잘못됐습니다",
      "QueryExceptionSearchDisabled": "검색 사용 안 함",
      "FileType": "파일 형식",
      "ShowAttachment": "첨부 표시",
      "OnFeed": "{0}의 피드.",
      "Author": "작성자",
      "NoTitle": "제목 없음",
      "CurrentSelections": "현재 선택",
      "AllContent": "모든 콘텐츠",
      "CancelLastAction": "마지막 실행 취소",
      "SearchTips": "검색 요령",
      "CheckSpelling": "핵심어의 철자를 확인합니다.",
      "TryUsingFewerKeywords": "키워드를 더 적게 또는 다양하게 사용하거나 더 일반적인 키워드를 사용해봅니다",
      "SelectFewerFilters": "필터를 줄여 검색 범위를 넓힙니다.",
  }
if( window['$'] != undefined && window['$'].fn != undefined && window['$'].fn.jquery != undefined ) { 

    $(function(){

        var locales = String["locales"] || (String["locales"] = {});
  locales["ko"] = merge(locales["ko"], dict);
  String["toLocaleString"].call(this, { "ko": dict });
  String["locale"] = "ko";
  String["defaultLocale"] = "en";
  Globalize.culture("ko") 

    })

  } else {
    document.addEventListener('DOMContentLoaded', function(event){

        var locales = String["locales"] || (String["locales"] = {});
  locales["ko"] = merge(locales["ko"], dict);
  String["toLocaleString"].call(this, { "ko": dict });
  String["locale"] = "ko";
  String["defaultLocale"] = "en";
  Globalize.culture("ko")
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
      "Unknown": "알 수 없음",
      "And": "및",
      "Authenticating": "{0}을(를) 인증하는 중...",
      "Clear": "{0} 지우기",
      "CompleteQuery": "전체 쿼리",
      "Exclude": "{0} 제외",
      "EnterTag": "태그 추가",
      "Next": "다음",
      "Last": "마지막",
      "Link": "링크",
      "Or": "또는",
      "Previous": "이전",
      "QueryDidntMatchAnyDocuments": "쿼리가 어느 문서와도 일치하지 않습니다.",
      "QueryException": "쿼리에 오류가 있습니다: {0}.",
      "Me": "나",
      "Remove": "제거",
      "Search": "검색",
      "SearchFor": "{0} 검색",
      "ShareQuery": "쿼리 공유",
      "Preferences": "기본 설정",
      "LinkOpeningSettings": "링크 열기 설정",
      "Reauthenticate": "{0} 재인증",
      "ResultsFilteringExpression": "결과 필터링 표현",
      "FiltersInYourPreferences": "사용자의 기본 설정에서 필터",
      "Create": "만들기",
      "SearchIn": "{0}에서 검색",
      "Seconds": "{0} 초 후",
      "ShowingResultsOf": "결과 {0} {2} 중<pl>-{1}</pl>",
      "SwitchTo": "{0}(으)로 전환",
      "Unexclude": "{0} 비제외",
      "ClearAllFilters": "모든 필터 지우기",
      "SkipLogin": "로그인 건너뛰기",
      "LoginInProgress": "로그인 진행 중, 기다려주십시오...",
      "Login": "로그인",
      "GetStarted": "시작하기",
      "More": "더 보기",
      "Less": "덜 보기",
      "Settings": "설정",
      "Score": "점수",
      "ScoreDescription": "점수는 결과 세트 내 위치에서뿐 아니라 빈도 수로부터도 계산됩니다.",
      "Occurrences": "빈도",
      "OccurrencesDescription": "가장 큰 수가 있는 값이 먼저 표시되게 빈도 수로 정렬",
      "Label": "라벨",
      "Of": "중",
      "LabelDescription": "필드 값 알파벳 순 정렬",
      "Value": "값",
      "ValueDescription": "최초 계산된 필드의 값으로 정렬",
      "AlphaAscending": "오름차순 값",
      "AlphaDescending": "내림차순 값",
      "ChiSquare": "카이 제곱",
      "Nosort": "정렬 항목 없음",
      "RelativeFrequency": "상대 빈도",
      "RelativeFrequencyDescription": "값의 상대 빈도를 기준으로 정렬. 덜 흔한 값이 더 높은 위치에 표시됩니다.",
      "DateDistribution": "날짜 분포",
      "Custom": "사용자 정의",
      "CustomDescription": "사용자 정의 순서대로 정렬",
      "ComputedField": "계산된 필드",
      "Ascending": "오름차순",
      "Descending": "내림차순",
      "noResultFor": "{0}에 대한 검색 결과가 없습니다",
      "autoCorrectedQueryTo": "쿼리가 {0}(으)로 자동 교정됐습니다",
      "didYouMean": "다음을 뜻하셨나요: {0}",
      "SuggestedResults": "제안된 결과",
      "SuggestedQueries": "제안된 쿼리",
      "MostRelevantItems": "가장 관련 있는 항목:",
      "AllItems": "모든 항목:",
      "ShowLess": "최소 표시",
      "ShowMore": "최대 표시",
      "HideFacet": "패싯 감추기",
      "ShowFacet": "패싯 표시",
      "AndOthers": "및 기타 {0}",
      "Others": "기타 {0}",
      "MostRelevantPosts": "가장 관련 있는 게시글:",
      "CompleteThread": "전체 스레드:",
      "ShowCompleteThread": "전체 스레드 표시",
      "ShowOnlyTopMatchingPosts": "최대 일치 게시글만 표시",
      "MostRelevantReplies": "가장 관련 있는 댓글:",
      "AllConversation": "모든 대화:",
      "ShowAllConversation": "모든 대화 표시",
      "ShowAllReplies": "모든 댓글 표시",
      "ShowOnlyMostRelevantReplies": "가장 관련 있는 댓글만 표시",
      "Close": "닫기",
      "Open": "열기",
      "OpenInOutlookWhenPossible": "Outlook에서 열기(가능한 경우)",
      "AlwaysOpenInNewWindow": "결과를 항상 새 창에서 열기",
      "Quickview": "간략히 보기",
      "ErrorReport": "오류 보고",
      "OopsError": "서버에 이상이 생겼습니다.",
      "ProblemPersists": "문제가 계속되면 관리자에게 연락하십시오.",
      "GoBack": "뒤로",
      "Reset": "재설정",
      "Retry": "재시도",
      "MoreInfo": "추가 정보",
      "Username": "사용자 이름",
      "Password": "암호",
      "PostedBy": "게시자",
      "CannotConnect": "서버 주소에 연결할 수 없습니다.",
      "BadUserPass": "암호가 사용자 이름과 일치하지 않습니다.",
      "PleaseEnterYourCredentials": "{0}에 대한 자격 증명을 입력하십시오.",
      "PleaseEnterYourSearchPage": "검색 페이지 URL을 입력하십시오.",
      "Collapse": "축소",
      "Collapsable": "축소 가능",
      "Expand": "확대",
      "Today": "오늘",
      "Yesterday": "어제",
      "Tomorrow": "내일",
      "Duration": "표시 시간: {0}",
      "IndexDuration": "색인 표시 시간: {0}",
      "ProxyDuration": "프록시 표시 시간: {0}",
      "ClientDuration": "클라이언트 표시 시간: {0}",
      "Unavailable": "없음",
      "Reply": "회신",
      "ReplyAll": "모두에게 회신",
      "Forward": "전달",
      "From": "보낸 사람",
      "Caption": "제목",
      "Expression": "표현식",
      "Tab": "탭",
      "Tabs": "탭들",
      "EnterExpressionName": "표현식 이름 입력",
      "EnterExpressionToFilterWith": "다음 결과를 필터할 표현식 입력",
      "SelectTab": "탭 선택",
      "SelectAll": "모두 선택",
      "PageUrl": "검색 페이지 URL",
      "ErrorSavingToDevice": "정보를 사용자의 기기에 저장하는 중 오류",
      "ErrorReadingFromDevice": "정보를 사용자의 기기에서 읽는 중 오류",
      "AppIntro": "Coveo에 관한 질문에 답하고 Coveo 솔루션이 사용자에게 적합한지 알아보는 데 도움을 줄 수 있는 제품 전문가와 상담하십시오. 또는 실제 시연을 이용하십시오!",
      "TryDemo": "시연 이용",
      "ContactUs": "연락처",
      "NewToCoveo": "Coveo가 처음이신가요?",
      "LetUsHelpGetStarted": "저희가 시작을 돕겠습니다",
      "LikesThis": "{0}(이)가 이것을 좋아합니다.",
      "CannotConnectSearchPage": "검색 페이지에 연결할 수 없습니다",
      "AreYouSureDeleteFilter": "{1} 식이 있는 필터 {0}(을)를 삭제하시겠습니까?",
      "OnlineHelp": "온라인 도움말",
      "Done": "완료",
      "SaveFacetState": "이 패싯 상태를 저장",
      "ClearFacetState": "패싯 상태 지우기",
      "DisplayingTheOnlyMessage": "이 대화에서 유일한 메시지를 표시",
      "NoNetworkConnection": "네트워크에 연결할 수 없습니다",
      "UnknownConnection": "알 수 없는 연결",
      "EthernetConnection": "이더넷 연결",
      "WiFi": "WiFi 연결",
      "CELL": "휴대 전화 연결",
      "CELL_2G": "휴대 전화 2G 연결",
      "CELL_3G": "휴대 전화 3G 연결",
      "CELL_4G": "휴대 전화 4G 연결",
      "Relevance": "관련성",
      "Date": "날짜",
      "Amount": "금액",
      "QueryExceptionNoException": "예외가 없습니다",
      "QueryExceptionInvalidSyntax": "구문이 잘못되었습니다",
      "QueryExceptionInvalidCustomField": "사용자 정의 필드가 잘못되었습니다",
      "QueryExceptionInvalidDate": "날짜가 잘못되었습니다",
      "QueryExceptionInvalidExactPhrase": "일치하여야 하는 구가 잘못되었습니다",
      "QueryExceptionInvalidDateOp": "날짜 연산자가 잘못되었습니다",
      "QueryExceptionInvalidNear": "NEAR 연산자가 잘못되었습니다",
      "QueryExceptionInvalidWeightedNear": "가중 NEAR 연산자가 잘못되었습니다",
      "QueryExceptionInvalidTerm": "용어가 잘못되었습니다",
      "QueryExceptionTooManyTerms": "용어가 너무 많습니다",
      "QueryExceptionWildcardTooGeneral": "와일드카드가 너무 일반적입니다",
      "QueryExceptionInvalidSortField": "정렬 필드가 잘못되었습니다",
      "QueryExceptionInvalidSmallStringOp": "단문자열 연산자가 잘못되었습니다",
      "QueryExceptionRequestedResultsMax": "요청 결과 최대 한도",
      "QueryExceptionAggregatedMirrorDead": "집합 미러가 오프라인입니다",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "집합 미러 쿼리 시간 제한",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "집합 미러의 잘못된 빌드 번호",
      "QueryExceptionAggregatedMirrorCannotConnect": "집합 미러를 연결할 수 없습니다",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "선행 문자 와일드카드가 충분하지 않습니다",
      "QueryExceptionSecurityInverterNotFound": "보안 인버터를 찾을 수 없습니다",
      "QueryExceptionSecurityInverterAccessDenied": "보안 인버터 접근이 거부됐습니다",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "집합 미러를 가장할 수 없습니다",
      "QueryExceptionUnexpected": "예상하지 않은",
      "QueryExceptionAccessDenied": "접근이 거부됐습니다",
      "QueryExceptionSuperUserTokenInvalid": "슈퍼 유저 토큰이 잘못되었습니다",
      "QueryExceptionSuperUserTokenExpired": "슈퍼 유저 토큰이 만료됐습니다",
      "QueryExceptionLicenseQueriesExpired": "쿼리 라이선스가 만료됐습니다",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "지원하지 않는 라이선스 슈퍼 유저 토큰입니다",
      "QueryExceptionInvalidSession": "세션이 잘못됐습니다",
      "QueryExceptionInvalidDocument": "문서가 잘못됐습니다",
      "QueryExceptionSearchDisabled": "검색 사용 안 함",
      "FileType": "파일 형식",
      "ShowAttachment": "첨부 표시",
      "OnFeed": "{0}의 피드.",
      "Author": "작성자",
      "NoTitle": "제목 없음",
      "CurrentSelections": "현재 선택",
      "AllContent": "모든 콘텐츠",
      "CancelLastAction": "마지막 실행 취소",
      "SearchTips": "검색 요령",
      "CheckSpelling": "핵심어의 철자를 확인합니다.",
      "TryUsingFewerKeywords": "키워드를 더 적게 또는 다양하게 사용하거나 더 일반적인 키워드를 사용해봅니다",
      "SelectFewerFilters": "필터를 줄여 검색 범위를 넓힙니다.",
  }

  var locales = String["locales"] || (String["locales"] = {});
  locales["ko"] = merge(locales["ko"], dict);
  String["toLocaleString"].call(this, { "ko": dict });
  String["locale"] = "ko";
  String["defaultLocale"] = "en";
  Globalize.culture("ko")
}