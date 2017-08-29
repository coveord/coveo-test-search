if(window.Globalize == undefined) {
/*! globalize - v0.1.1 - 2013-04-30
* https://github.com/jquery/globalize
* Copyright 2013 ; Licensed MIT */
var Globalize = (function(e,r){var t,n,a,s,u,l,i,c,o,f,d,p,h,g,b,m,y,M,v,k,z,F,A,x;t=function(e){return new t.prototype.init(e)},"undefined"!=typeof require&&"undefined"!=typeof exports&&"undefined"!=typeof module?module.exports=t:e.Globalize=t,t.cultures={},t.prototype={constructor:t,init:function(e){return this.cultures=t.cultures,this.cultureSelector=e,this}},t.prototype.init.prototype=t.prototype,t.cultures["default"]={name:"en",englishName:"English",nativeName:"English",isRTL:!1,language:"en",numberFormat:{pattern:["-n"],decimals:2,",":",",".":".",groupSizes:[3],"+":"+","-":"-",NaN:"NaN",negativeInfinity:"-Infinity",positiveInfinity:"Infinity",percent:{pattern:["-n %","n %"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"%"},currency:{pattern:["($n)","$n"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"$"}},calendars:{standard:{name:"Gregorian_USEnglish","/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}}},messages:{}},t.cultures["default"].calendar=t.cultures["default"].calendars.standard,t.cultures.en=t.cultures["default"],t.cultureSelector="en",n=/^0x[a-f0-9]+$/i,a=/^[+\-]?infinity$/i,s=/^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,u=/^\s+|\s+$/g,l=function(e,r){if(e.indexOf)return e.indexOf(r);for(var t=0,n=e.length;n>t;t++)if(e[t]===r)return t;return-1},i=function(e,r){return e.substr(e.length-r.length)===r},c=function(){var e,t,n,a,s,u,l=arguments[0]||{},i=1,p=arguments.length,h=!1;for("boolean"==typeof l&&(h=l,l=arguments[1]||{},i=2),"object"==typeof l||f(l)||(l={});p>i;i++)if(null!=(e=arguments[i]))for(t in e)n=l[t],a=e[t],l!==a&&(h&&a&&(d(a)||(s=o(a)))?(s?(s=!1,u=n&&o(n)?n:[]):u=n&&d(n)?n:{},l[t]=c(h,u,a)):a!==r&&(l[t]=a));return l},o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},f=function(e){return"[object Function]"===Object.prototype.toString.call(e)},d=function(e){return"[object Object]"===Object.prototype.toString.call(e)},p=function(e,r){return 0===e.indexOf(r)},h=function(e){return(e+"").replace(u,"")},g=function(e){return isNaN(e)?0/0:Math[0>e?"ceil":"floor"](e)},b=function(e,r,t){var n;for(n=e.length;r>n;n+=1)e=t?"0"+e:e+"0";return e},m=function(e,r){for(var t=0,n=!1,a=0,s=e.length;s>a;a++){var u=e.charAt(a);switch(u){case"'":n?r.push("'"):t++,n=!1;break;case"\\":n&&r.push("\\"),n=!n;break;default:r.push(u),n=!1}}return t},y=function(e,r){r=r||"F";var t,n=e.patterns,a=r.length;if(1===a){if(t=n[r],!t)throw"Invalid date format string '"+r+"'.";r=t}else 2===a&&"%"===r.charAt(0)&&(r=r.charAt(1));return r},M=function(e,r,t){function n(e,r){var t,n=e+"";return r>1&&r>n.length?(t=v[r-2]+n,t.substr(t.length-r,r)):t=n}function a(){return h||g?h:(h=A.test(r),g=!0,h)}function s(e,r){if(b)return b[r];switch(r){case 0:return e.getFullYear();case 1:return e.getMonth();case 2:return e.getDate();default:throw"Invalid part value "+r}}var u,l=t.calendar,i=l.convert;if(!r||!r.length||"i"===r){if(t&&t.name.length)if(i)u=M(e,l.patterns.F,t);else{var c=new Date(e.getTime()),o=z(e,l.eras);c.setFullYear(F(e,l,o)),u=c.toLocaleString()}else u=""+e;return u}var f=l.eras,d="s"===r;r=y(l,r),u=[];var p,h,g,b,v=["0","00","000"],A=/([^d]|^)(d|dd)([^d]|$)/g,x=0,I=k();for(!d&&i&&(b=i.fromGregorian(e));;){var S=I.lastIndex,w=I.exec(r),C=r.slice(S,w?w.index:r.length);if(x+=m(C,u),!w)break;if(x%2)u.push(w[0]);else{var D=w[0],H=D.length;switch(D){case"ddd":case"dddd":var O=3===H?l.days.namesAbbr:l.days.names;u.push(O[e.getDay()]);break;case"d":case"dd":h=!0,u.push(n(s(e,2),H));break;case"MMM":case"MMMM":var N=s(e,1);u.push(l.monthsGenitive&&a()?l.monthsGenitive[3===H?"namesAbbr":"names"][N]:l.months[3===H?"namesAbbr":"names"][N]);break;case"M":case"MM":u.push(n(s(e,1)+1,H));break;case"y":case"yy":case"yyyy":N=b?b[0]:F(e,l,z(e,f),d),4>H&&(N%=100),u.push(n(N,H));break;case"h":case"hh":p=e.getHours()%12,0===p&&(p=12),u.push(n(p,H));break;case"H":case"HH":u.push(n(e.getHours(),H));break;case"m":case"mm":u.push(n(e.getMinutes(),H));break;case"s":case"ss":u.push(n(e.getSeconds(),H));break;case"t":case"tt":N=12>e.getHours()?l.AM?l.AM[0]:" ":l.PM?l.PM[0]:" ",u.push(1===H?N.charAt(0):N);break;case"f":case"ff":case"fff":u.push(n(e.getMilliseconds(),3).substr(0,H));break;case"z":case"zz":p=e.getTimezoneOffset()/60,u.push((0>=p?"+":"-")+n(Math.floor(Math.abs(p)),H));break;case"zzz":p=e.getTimezoneOffset()/60,u.push((0>=p?"+":"-")+n(Math.floor(Math.abs(p)),2)+":"+n(Math.abs(e.getTimezoneOffset()%60),2));break;case"g":case"gg":l.eras&&u.push(l.eras[z(e,f)].name);break;case"/":u.push(l["/"]);break;default:throw"Invalid date format pattern '"+D+"'."}}}return u.join("")},function(){var e;e=function(e,r,t){var n=t.groupSizes,a=n[0],s=1,u=Math.pow(10,r),l=Math.round(e*u)/u;isFinite(l)||(l=e),e=l;var i=e+"",c="",o=i.split(/e/i),f=o.length>1?parseInt(o[1],10):0;i=o[0],o=i.split("."),i=o[0],c=o.length>1?o[1]:"",f>0?(c=b(c,f,!1),i+=c.slice(0,f),c=c.substr(f)):0>f&&(f=-f,i=b(i,f+1,!0),c=i.slice(-f,i.length)+c,i=i.slice(0,-f)),c=r>0?t["."]+(c.length>r?c.slice(0,r):b(c,r)):"";for(var d=i.length-1,p=t[","],h="";d>=0;){if(0===a||a>d)return i.slice(0,d+1)+(h.length?p+h+c:c);h=i.slice(d-a+1,d+1)+(h.length?p+h:""),d-=a,n.length>s&&(a=n[s],s++)}return i.slice(0,d+1)+p+h+c},v=function(r,t,n){if(!isFinite(r))return 1/0===r?n.numberFormat.positiveInfinity:r===-1/0?n.numberFormat.negativeInfinity:n.numberFormat.NaN;if(!t||"i"===t)return n.name.length?r.toLocaleString():""+r;t=t||"D";var a,s=n.numberFormat,u=Math.abs(r),l=-1;t.length>1&&(l=parseInt(t.slice(1),10));var i,c=t.charAt(0).toUpperCase();switch(c){case"D":a="n",u=g(u),-1!==l&&(u=b(""+u,l,!0)),0>r&&(u="-"+u);break;case"N":i=s;case"C":i=i||s.currency;case"P":i=i||s.percent,a=0>r?i.pattern[0]:i.pattern[1]||"n",-1===l&&(l=i.decimals),u=e(u*("P"===c?100:1),l,i);break;default:throw"Bad number format specifier: "+c}for(var o=/n|\$|-|%/g,f="";;){var d=o.lastIndex,p=o.exec(a);if(f+=a.slice(d,p?p.index:a.length),!p)break;switch(p[0]){case"n":f+=u;break;case"$":f+=s.currency.symbol;break;case"-":/[1-9]/.test(u)&&(f+=s["-"]);break;case"%":f+=s.percent.symbol}}return f}}(),k=function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},z=function(e,r){if(!r)return 0;for(var t,n=e.getTime(),a=0,s=r.length;s>a;a++)if(t=r[a].start,null===t||n>=t)return a;return 0},F=function(e,r,t,n){var a=e.getFullYear();return!n&&r.eras&&(a-=r.eras[t].offset),a},function(){var e,r,t,n,a,s,u;e=function(e,r){if(100>r){var t=new Date,n=z(t),a=F(t,e,n),s=e.twoDigitYearMax;s="string"==typeof s?(new Date).getFullYear()%100+parseInt(s,10):s,r+=a-a%100,r>s&&(r-=100)}return r},r=function(e,r,t){var n,a=e.days,i=e._upperDays;return i||(e._upperDays=i=[u(a.names),u(a.namesAbbr),u(a.namesShort)]),r=s(r),t?(n=l(i[1],r),-1===n&&(n=l(i[2],r))):n=l(i[0],r),n},t=function(e,r,t){var n=e.months,a=e.monthsGenitive||e.months,i=e._upperMonths,c=e._upperMonthsGen;i||(e._upperMonths=i=[u(n.names),u(n.namesAbbr)],e._upperMonthsGen=c=[u(a.names),u(a.namesAbbr)]),r=s(r);var o=l(t?i[1]:i[0],r);return 0>o&&(o=l(t?c[1]:c[0],r)),o},n=function(e,r){var t=e._parseRegExp;if(t){var n=t[r];if(n)return n}else e._parseRegExp=t={};for(var a,s=y(e,r).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),u=["^"],l=[],i=0,c=0,o=k();null!==(a=o.exec(s));){var f=s.slice(i,a.index);if(i=o.lastIndex,c+=m(f,u),c%2)u.push(a[0]);else{var d,p=a[0],h=p.length;switch(p){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":d="(\\D+)";break;case"tt":case"t":d="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":d="(\\d{"+h+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":d="(\\d\\d?)";break;case"zzz":d="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":d="([+-]?\\d\\d?)";break;case"/":d="(\\/)";break;default:throw"Invalid date format pattern '"+p+"'."}d&&u.push(d),l.push(a[0])}}m(s.slice(i),u),u.push("$");var g=u.join("").replace(/\s+/g,"\\s+"),b={regExp:g,groups:l};return t[r]=b},a=function(e,r,t){return r>e||e>t},s=function(e){return e.split("\u00a0").join(" ").toUpperCase()},u=function(e){for(var r=[],t=0,n=e.length;n>t;t++)r[t]=s(e[t]);return r},A=function(s,u,l){s=h(s);var i=l.calendar,c=n(i,u),o=RegExp(c.regExp).exec(s);if(null===o)return null;for(var f,d=c.groups,g=null,b=null,m=null,y=null,M=null,v=0,k=0,z=0,F=0,A=null,x=!1,I=0,S=d.length;S>I;I++){var w=o[I+1];if(w){var C=d[I],D=C.length,H=parseInt(w,10);switch(C){case"dd":case"d":if(y=H,a(y,1,31))return null;break;case"MMM":case"MMMM":if(m=t(i,w,3===D),a(m,0,11))return null;break;case"M":case"MM":if(m=H-1,a(m,0,11))return null;break;case"y":case"yy":case"yyyy":if(b=4>D?e(i,H):H,a(b,0,9999))return null;break;case"h":case"hh":if(v=H,12===v&&(v=0),a(v,0,11))return null;break;case"H":case"HH":if(v=H,a(v,0,23))return null;break;case"m":case"mm":if(k=H,a(k,0,59))return null;break;case"s":case"ss":if(z=H,a(z,0,59))return null;break;case"tt":case"t":if(x=i.PM&&(w===i.PM[0]||w===i.PM[1]||w===i.PM[2]),!x&&(!i.AM||w!==i.AM[0]&&w!==i.AM[1]&&w!==i.AM[2]))return null;break;case"f":case"ff":case"fff":if(F=H*Math.pow(10,3-D),a(F,0,999))return null;break;case"ddd":case"dddd":if(M=r(i,w,3===D),a(M,0,6))return null;break;case"zzz":var O=w.split(/:/);if(2!==O.length)return null;if(f=parseInt(O[0],10),a(f,-12,13))return null;var N=parseInt(O[1],10);if(a(N,0,59))return null;A=60*f+(p(w,"-")?-N:N);break;case"z":case"zz":if(f=H,a(f,-12,13))return null;A=60*f;break;case"g":case"gg":var T=w;if(!T||!i.eras)return null;T=h(T.toLowerCase());for(var j=0,$=i.eras.length;$>j;j++)if(T===i.eras[j].name.toLowerCase()){g=j;break}if(null===g)return null}}}var P,G=new Date,E=i.convert;if(P=E?E.fromGregorian(G)[0]:G.getFullYear(),null===b?b=P:i.eras&&(b+=i.eras[g||0].offset),null===m&&(m=0),null===y&&(y=1),E){if(G=E.toGregorian(b,m,y),null===G)return null}else{if(G.setFullYear(b,m,y),G.getDate()!==y)return null;if(null!==M&&G.getDay()!==M)return null}if(x&&12>v&&(v+=12),G.setHours(v,k,z,F),null!==A){var Y=G.getMinutes()-(A+G.getTimezoneOffset());G.setHours(G.getHours()+parseInt(Y/60,10),Y%60)}return G}}(),x=function(e,r,t){var n,a=r["-"],s=r["+"];switch(t){case"n -":a=" "+a,s=" "+s;case"n-":i(e,a)?n=["-",e.substr(0,e.length-a.length)]:i(e,s)&&(n=["+",e.substr(0,e.length-s.length)]);break;case"- n":a+=" ",s+=" ";case"-n":p(e,a)?n=["-",e.substr(a.length)]:p(e,s)&&(n=["+",e.substr(s.length)]);break;case"(n)":p(e,"(")&&i(e,")")&&(n=["-",e.substr(1,e.length-2)])}return n||["",e]},t.prototype.findClosestCulture=function(e){return t.findClosestCulture.call(this,e)},t.prototype.format=function(e,r,n){return t.format.call(this,e,r,n)},t.prototype.localize=function(e,r){return t.localize.call(this,e,r)},t.prototype.parseInt=function(e,r,n){return t.parseInt.call(this,e,r,n)},t.prototype.parseFloat=function(e,r,n){return t.parseFloat.call(this,e,r,n)},t.prototype.culture=function(e){return t.culture.call(this,e)},t.addCultureInfo=function(e,r,t){var n={},a=!1;"string"!=typeof e?(t=e,e=this.culture().name,n=this.cultures[e]):"string"!=typeof r?(t=r,a=null==this.cultures[e],n=this.cultures[e]||this.cultures["default"]):(a=!0,n=this.cultures[r]),this.cultures[e]=c(!0,{},n,t),a&&(this.cultures[e].calendar=this.cultures[e].calendars.standard)},t.findClosestCulture=function(e){var r;if(!e)return this.findClosestCulture(this.cultureSelector)||this.cultures["default"];if("string"==typeof e&&(e=e.split(",")),o(e)){var t,n,a=this.cultures,s=e,u=s.length,l=[];for(n=0;u>n;n++){e=h(s[n]);var i,c=e.split(";");t=h(c[0]),1===c.length?i=1:(e=h(c[1]),0===e.indexOf("q=")?(e=e.substr(2),i=parseFloat(e),i=isNaN(i)?0:i):i=1),l.push({lang:t,pri:i})}for(l.sort(function(e,r){return e.pri<r.pri?1:e.pri>r.pri?-1:0}),n=0;u>n;n++)if(t=l[n].lang,r=a[t])return r;for(n=0;u>n;n++)for(t=l[n].lang;;){var f=t.lastIndexOf("-");if(-1===f)break;if(t=t.substr(0,f),r=a[t])return r}for(n=0;u>n;n++){t=l[n].lang;for(var d in a){var p=a[d];if(p.language===t)return p}}}else if("object"==typeof e)return e;return r||null},t.format=function(e,r,t){var n=this.findClosestCulture(t);return e instanceof Date?e=M(e,r,n):"number"==typeof e&&(e=v(e,r,n)),e},t.localize=function(e,r){return this.findClosestCulture(r).messages[e]||this.cultures["default"].messages[e]},t.parseDate=function(e,r,t){t=this.findClosestCulture(t);var n,a,s;if(r){if("string"==typeof r&&(r=[r]),r.length)for(var u=0,l=r.length;l>u;u++){var i=r[u];if(i&&(n=A(e,i,t)))break}}else{s=t.calendar.patterns;for(a in s)if(n=A(e,s[a],t))break}return n||null},t.parseInt=function(e,r,n){return g(t.parseFloat(e,r,n))},t.parseFloat=function(e,r,t){"number"!=typeof r&&(t=r,r=10);var u=this.findClosestCulture(t),l=0/0,i=u.numberFormat;if(e.indexOf(u.numberFormat.currency.symbol)>-1&&(e=e.replace(u.numberFormat.currency.symbol,""),e=e.replace(u.numberFormat.currency["."],u.numberFormat["."])),e.indexOf(u.numberFormat.percent.symbol)>-1&&(e=e.replace(u.numberFormat.percent.symbol,"")),e=e.replace(/ /g,""),a.test(e))l=parseFloat(e);else if(!r&&n.test(e))l=parseInt(e,16);else{var c=x(e,i,i.pattern[0]),o=c[0],f=c[1];""===o&&"(n)"!==i.pattern[0]&&(c=x(e,i,"(n)"),o=c[0],f=c[1]),""===o&&"-n"!==i.pattern[0]&&(c=x(e,i,"-n"),o=c[0],f=c[1]),o=o||"+";var d,p,h=f.indexOf("e");0>h&&(h=f.indexOf("E")),0>h?(p=f,d=null):(p=f.substr(0,h),d=f.substr(h+1));var g,b,m=i["."],y=p.indexOf(m);0>y?(g=p,b=null):(g=p.substr(0,y),b=p.substr(y+m.length));var M=i[","];g=g.split(M).join("");var v=M.replace(/\u00A0/g," ");M!==v&&(g=g.split(v).join(""));var k=o+g;if(null!==b&&(k+="."+b),null!==d){var z=x(d,i,"-n");k+="e"+(z[0]||"+")+z[1]}s.test(k)&&(l=parseFloat(k))}return l},t.culture=function(e){return e!==r&&(this.cultureSelector=e),this.findClosestCulture(e)||this.cultures["default"]}; return Globalize;}(this));
}
/*
 * Globalize Culture pl
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

Globalize.addCultureInfo( "pl", "default", {
	name: "pl",
	englishName: "Polish",
	nativeName: "polski",
	language: "pl",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "nie jest liczbą",
		negativeInfinity: "-nieskończoność",
		positiveInfinity: "+nieskończoność",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "zł"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],
				namesAbbr: ["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],
				namesShort: ["N","Pn","Wt","Śr","Cz","Pt","So"]
			},
			months: {
				names: ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień",""],
				namesAbbr: ["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]
			},
			monthsGenitive: {
				names: ["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia",""],
				namesAbbr: ["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "yyyy-MM-dd",
				D: "d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d MMMM yyyy HH:mm",
				F: "d MMMM yyyy HH:mm:ss",
				M: "d MMMM",
				Y: "MMMM yyyy"
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
      "Unknown": "Nieznany",
      "And": "I",
      "Authenticating": "Trwa uwierzytelnianie użytkownika {0}...",
      "Clear": "Wyczyść {0}",
      "CompleteQuery": "Całe zapytanie",
      "Exclude": "Wyklucz {0}",
      "EnterTag": "Dodaj znacznik",
      "Next": "Następna",
      "Last": "Ostatnia",
      "Link": "Łącze",
      "Or": "LUB",
      "Previous": "Poprzednia",
      "QueryDidntMatchAnyDocuments": "Żaden dokument nie pasuje do zapytania.",
      "QueryException": "Zapytanie zawiera błąd: {0}.",
      "Me": "Ja",
      "Remove": "Usuń",
      "Search": "Wyszukaj",
      "SearchFor": "Wyszukaj {0}",
      "ShareQuery": "Udostępnij zapytanie",
      "Preferences": "Preferencje",
      "LinkOpeningSettings": "Ustawienia dotyczące otwierania łączy",
      "Reauthenticate": "Ponownie uwierzytelnij użytkownika {0}",
      "ResultsFilteringExpression": "Wyrażenia filtrowania wyników",
      "FiltersInYourPreferences": "Filtry w preferencjach użytkownika",
      "Create": "Utwórz",
      "SearchIn": "Wyszukaj w {0}",
      "Seconds": "w {0} sekundę<pl>(sekundy/sekund)</pl>",
      "ShowingResultsOf": "Wynik<pl>i</pl> {0}<pl>-{1}</pl> z {2}",
      "SwitchTo": "Przełącz na {0}",
      "Unexclude": "Cofnij wykluczenie {0}",
      "ClearAllFilters": "Wyczyść wszystkie filtry",
      "SkipLogin": "Pomiń logowanie",
      "LoginInProgress": "Logowanie w toku, proszę czekać...",
      "Login": "Zaloguj",
      "GetStarted": "Rozpocznij",
      "More": "Więcej",
      "Less": "Mniej",
      "Settings": "Ustawienia",
      "Score": "Punktacja",
      "ScoreDescription": "Punktacja jest obliczana na podstawie liczby wystąpień oraz pozycji w zestawie wyników.",
      "Occurrences": "Wystąpienia",
      "OccurrencesDescription": "Sortuj według liczby wystąpień, tak aby wartości o najwyższej liczbie pojawiały się jako pierwsze.",
      "Label": "Etykieta",
      "Of": "z",
      "LabelDescription": "Sortuj alfabetycznie według wartości pól.",
      "Value": "Wartość",
      "ValueDescription": "Sortuj według wartości pierwszego obliczonego pola",
      "AlphaAscending": "Wartość rosnąco",
      "AlphaDescending": "Wartość malejąco",
      "ChiSquare": "Chi-kwadrat",
      "Nosort": "Bez sortowania",
      "RelativeFrequency": "Częstotliwość względna",
      "RelativeFrequencyDescription": "Sortuj według względnej częstotliwości występowania wartości. Mniej rozpowszechnione wartości będą pojawiały się wyżej.",
      "DateDistribution": "Rozłożenie dat",
      "Custom": "Niestandardowe",
      "CustomDescription": "Sortuj według niestandardowej kolejności",
      "ComputedField": "Pole obliczane",
      "Ascending": "Rosnąco",
      "Descending": "Malejąco",
      "noResultFor": "Brak wyników dla zapytania {0}",
      "autoCorrectedQueryTo": "Zapytanie zostało automatycznie poprawione na {0}",
      "didYouMean": "Czy chodziło Ci o: {0}",
      "SuggestedResults": "Sugerowane wyniki",
      "SuggestedQueries": "Sugerowane zapytania",
      "MostRelevantItems": "Najbardziej trafne elementy:",
      "AllItems": "Wszystkie elementy:",
      "ShowLess": "Pokaż mniej",
      "ShowMore": "Pokaż więcej",
      "HideFacet": "Ukryj Aspekt",
      "ShowFacet": "Pokaż Aspekt",
      "AndOthers": "i {0} pozostały<pl>(pozostałe/pozostałych)</pl>",
      "Others": "{0} pozostały<pl>(pozostałe/pozostałych)</pl>",
      "MostRelevantPosts": "Najbardziej trafne wpisy:",
      "CompleteThread": "Cały wątek:",
      "ShowCompleteThread": "Pokaż cały wątek",
      "ShowOnlyTopMatchingPosts": "Pokaż tylko wpisy o najwyższej zgodności",
      "MostRelevantReplies": "Najbardziej trafne odpowiedzi:",
      "AllConversation": "Cała rozmowa:",
      "ShowAllConversation": "Pokaż całą rozmowę",
      "ShowAllReplies": "Pokaż wszystkie odpowiedzi",
      "ShowOnlyMostRelevantReplies": "Pokaż tylko najbardziej trafne odpowiedzi",
      "Close": "Zamknij",
      "Open": "Otwórz",
      "OpenInOutlookWhenPossible": "Otwórz w programie Outlook (o ile to możliwe)",
      "AlwaysOpenInNewWindow": "Zawsze otwieraj wyniki w nowym oknie",
      "Quickview": "Szybki podgląd",
      "ErrorReport": "Raport o błędach",
      "OopsError": "Wystąpił problem dotyczący serwera.",
      "ProblemPersists": "Jeśli ten problem będzie się powtarzać, skontaktuj się z administratorem.",
      "GoBack": "Powrót",
      "Reset": "Resetuj",
      "Retry": "Spróbuj ponownie",
      "MoreInfo": "Więcej informacji",
      "Username": "Nazwa użytkownika",
      "Password": "Hasło",
      "PostedBy": "Opublikował użytkownik",
      "CannotConnect": "Nie można nawiązać połączenia z adresem serwera.",
      "BadUserPass": "Hasło nie pasuje do nazwy użytkownika.",
      "PleaseEnterYourCredentials": "Proszę wpisać poświadczenia dla systemu {0}.",
      "PleaseEnterYourSearchPage": "Proszę wpisać adres URL strony wyszukiwania",
      "Collapse": "Zwiń",
      "Collapsable": "Zwijany",
      "Expand": "Rozwiń",
      "Today": "Dzisiaj",
      "Yesterday": "Wczoraj",
      "Tomorrow": "Jutro",
      "Duration": "Czas trwania: {0}",
      "IndexDuration": "Czas trwania indeksu: {0}",
      "ProxyDuration": "Czas trwania serwera proxy: {0}",
      "ClientDuration": "Czas trwania klienta: {0}",
      "Unavailable": "Niedostępny",
      "Reply": "Odpowiedz",
      "ReplyAll": "Odpowiedz wszystkim",
      "Forward": "Prześlij dalej",
      "From": "Od",
      "Caption": "Podpis",
      "Expression": "Wyrażenie",
      "Tab": "Karta",
      "Tabs": "Karty",
      "EnterExpressionName": "Wprowadź nazwę wyrażenia",
      "EnterExpressionToFilterWith": "Wprowadź wyrażenie do filtrowania wyników",
      "SelectTab": "Zaznacz kartę",
      "SelectAll": "Zaznacz wszystko",
      "PageUrl": "Adres URL strony wyszukiwania",
      "ErrorSavingToDevice": "Podczas zapisywania informacji na urządzeniu wystąpił błąd",
      "ErrorReadingFromDevice": "Podczas odczytu informacji z urządzenia wystąpił błąd",
      "AppIntro": "Skontaktuj się ze specjalistą ds. produktów, który odpowie na pytania dotyczące Coveo i pomoże Ci w wyborze odpowiedniego rozwiązania Coveo. Możesz też wypróbować interaktywne demo!",
      "TryDemo": "Wypróbuj demo",
      "ContactUs": "Skontaktuj się z nami",
      "NewToCoveo": "Jeszcze nie znasz Coveo?",
      "LetUsHelpGetStarted": "Pomożemy Ci zacząć",
      "LikesThis": "{0} lubią<sn>(lubi)</sn> to.",
      "CannotConnectSearchPage": "Nie można połączyć ze stroną wyszukiwania",
      "AreYouSureDeleteFilter": "Czy na pewno chcesz usunąć filtr {0} z wyrażeniem {1}?",
      "OnlineHelp": "Pomoc online",
      "Done": "Gotowe",
      "SaveFacetState": "Zapisz stan aspektu",
      "ClearFacetState": "Wyczyść stan aspektu",
      "DisplayingTheOnlyMessage": "Wyświetlanie jedynej wiadomości w ramach rozmowy",
      "NoNetworkConnection": "Brak połączenia sieciowego",
      "UnknownConnection": "Nieznane połączenie",
      "EthernetConnection": "Połączenie Ethernet",
      "WiFi": "Połączenie WiFi",
      "CELL": "Połączenie komórkowe",
      "CELL_2G": "Połączenie komórkowe 2G",
      "CELL_3G": "Połączenie komórkowe 3G",
      "CELL_4G": "Połączenie komórkowe 4G",
      "Relevance": "Trafność",
      "Date": "Data",
      "Amount": "Ilość",
      "QueryExceptionNoException": "Brak wyjątków",
      "QueryExceptionInvalidSyntax": "Nieprawidłowa składnia",
      "QueryExceptionInvalidCustomField": "Nieprawidłowe pole niestandardowe",
      "QueryExceptionInvalidDate": "Nieprawidłowa data",
      "QueryExceptionInvalidExactPhrase": "Nieprawidłowa dokładna fraza",
      "QueryExceptionInvalidDateOp": "Nieprawidłowy operator daty",
      "QueryExceptionInvalidNear": "Nieprawidłowy operator NEAR",
      "QueryExceptionInvalidWeightedNear": "Nieprawidłowy ważony operator NEAR",
      "QueryExceptionInvalidTerm": "Nieprawidłowy termin",
      "QueryExceptionTooManyTerms": "Zbyt wiele terminów",
      "QueryExceptionWildcardTooGeneral": "Symbol wieloznaczny zbyt ogólny",
      "QueryExceptionInvalidSortField": "Nieprawidłowe pole sortowania",
      "QueryExceptionInvalidSmallStringOp": "Nieprawidłowy operator małych ciągów",
      "QueryExceptionRequestedResultsMax": "Maksymalna liczba żądanych wyników",
      "QueryExceptionAggregatedMirrorDead": "Duplikat agregowany jest niedostępny",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Limit czasu zapytania duplikatu agregowanego",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Nieprawidłowy numer kompilacji duplikatu agregowanego",
      "QueryExceptionAggregatedMirrorCannotConnect": "Brak połączenia z duplikatem agregowanym",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Zbyt mała liczba znaków poprzedzających symbol wieloznaczny",
      "QueryExceptionSecurityInverterNotFound": "Brak inwertora zabezpieczeń",
      "QueryExceptionSecurityInverterAccessDenied": "Odmowa dostępu do inwertora zabezpieczeń",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Duplikat agregowany nie może dokonać personifikacji",
      "QueryExceptionUnexpected": "Nieoczekiwany",
      "QueryExceptionAccessDenied": "Odmowa dostępu",
      "QueryExceptionSuperUserTokenInvalid": "Nieprawidłowy token administratora",
      "QueryExceptionSuperUserTokenExpired": "Wygasły token administratora",
      "QueryExceptionLicenseQueriesExpired": "Wygasła licencja zapytań",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Nieobsługiwany token administratora licencji",
      "QueryExceptionInvalidSession": "Nieprawidłowa sesja",
      "QueryExceptionInvalidDocument": "Nieprawidłowy dokument",
      "QueryExceptionSearchDisabled": "Wyszukiwanie wyłączone",
      "FileType": "Typ pliku",
      "ShowAttachment": "Pokaż załącznik",
      "OnFeed": "w kanale użytkownika {0}.",
      "Author": "Autor",
      "NoTitle": "Brak tytułu",
      "CurrentSelections": "Bieżące zaznaczenia",
      "AllContent": "Cała zawartość",
      "CancelLastAction": "Anuluj ostatnią czynność",
      "SearchTips": "Wskazówki dotyczące wyszukiwania",
      "CheckSpelling": "Sprawdź pisownię słów kluczowych.",
      "TryUsingFewerKeywords": "Spróbuj użyć różnych lub bardziej ogólnych słów kluczowych albo zmniejsz ich liczbę.",
      "SelectFewerFilters": "Zmniejsz liczbę filtrów, aby poszerzyć zakres wyszukiwania.",
  }
if( window['$'] != undefined && window['$'].fn != undefined && window['$'].fn.jquery != undefined ) { 

    $(function(){

        var locales = String["locales"] || (String["locales"] = {});
  locales["pl"] = merge(locales["pl"], dict);
  String["toLocaleString"].call(this, { "pl": dict });
  String["locale"] = "pl";
  String["defaultLocale"] = "en";
  Globalize.culture("pl") 

    })

  } else {
    document.addEventListener('DOMContentLoaded', function(event){

        var locales = String["locales"] || (String["locales"] = {});
  locales["pl"] = merge(locales["pl"], dict);
  String["toLocaleString"].call(this, { "pl": dict });
  String["locale"] = "pl";
  String["defaultLocale"] = "en";
  Globalize.culture("pl")
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
      "Unknown": "Nieznany",
      "And": "I",
      "Authenticating": "Trwa uwierzytelnianie użytkownika {0}...",
      "Clear": "Wyczyść {0}",
      "CompleteQuery": "Całe zapytanie",
      "Exclude": "Wyklucz {0}",
      "EnterTag": "Dodaj znacznik",
      "Next": "Następna",
      "Last": "Ostatnia",
      "Link": "Łącze",
      "Or": "LUB",
      "Previous": "Poprzednia",
      "QueryDidntMatchAnyDocuments": "Żaden dokument nie pasuje do zapytania.",
      "QueryException": "Zapytanie zawiera błąd: {0}.",
      "Me": "Ja",
      "Remove": "Usuń",
      "Search": "Wyszukaj",
      "SearchFor": "Wyszukaj {0}",
      "ShareQuery": "Udostępnij zapytanie",
      "Preferences": "Preferencje",
      "LinkOpeningSettings": "Ustawienia dotyczące otwierania łączy",
      "Reauthenticate": "Ponownie uwierzytelnij użytkownika {0}",
      "ResultsFilteringExpression": "Wyrażenia filtrowania wyników",
      "FiltersInYourPreferences": "Filtry w preferencjach użytkownika",
      "Create": "Utwórz",
      "SearchIn": "Wyszukaj w {0}",
      "Seconds": "w {0} sekundę<pl>(sekundy/sekund)</pl>",
      "ShowingResultsOf": "Wynik<pl>i</pl> {0}<pl>-{1}</pl> z {2}",
      "SwitchTo": "Przełącz na {0}",
      "Unexclude": "Cofnij wykluczenie {0}",
      "ClearAllFilters": "Wyczyść wszystkie filtry",
      "SkipLogin": "Pomiń logowanie",
      "LoginInProgress": "Logowanie w toku, proszę czekać...",
      "Login": "Zaloguj",
      "GetStarted": "Rozpocznij",
      "More": "Więcej",
      "Less": "Mniej",
      "Settings": "Ustawienia",
      "Score": "Punktacja",
      "ScoreDescription": "Punktacja jest obliczana na podstawie liczby wystąpień oraz pozycji w zestawie wyników.",
      "Occurrences": "Wystąpienia",
      "OccurrencesDescription": "Sortuj według liczby wystąpień, tak aby wartości o najwyższej liczbie pojawiały się jako pierwsze.",
      "Label": "Etykieta",
      "Of": "z",
      "LabelDescription": "Sortuj alfabetycznie według wartości pól.",
      "Value": "Wartość",
      "ValueDescription": "Sortuj według wartości pierwszego obliczonego pola",
      "AlphaAscending": "Wartość rosnąco",
      "AlphaDescending": "Wartość malejąco",
      "ChiSquare": "Chi-kwadrat",
      "Nosort": "Bez sortowania",
      "RelativeFrequency": "Częstotliwość względna",
      "RelativeFrequencyDescription": "Sortuj według względnej częstotliwości występowania wartości. Mniej rozpowszechnione wartości będą pojawiały się wyżej.",
      "DateDistribution": "Rozłożenie dat",
      "Custom": "Niestandardowe",
      "CustomDescription": "Sortuj według niestandardowej kolejności",
      "ComputedField": "Pole obliczane",
      "Ascending": "Rosnąco",
      "Descending": "Malejąco",
      "noResultFor": "Brak wyników dla zapytania {0}",
      "autoCorrectedQueryTo": "Zapytanie zostało automatycznie poprawione na {0}",
      "didYouMean": "Czy chodziło Ci o: {0}",
      "SuggestedResults": "Sugerowane wyniki",
      "SuggestedQueries": "Sugerowane zapytania",
      "MostRelevantItems": "Najbardziej trafne elementy:",
      "AllItems": "Wszystkie elementy:",
      "ShowLess": "Pokaż mniej",
      "ShowMore": "Pokaż więcej",
      "HideFacet": "Ukryj Aspekt",
      "ShowFacet": "Pokaż Aspekt",
      "AndOthers": "i {0} pozostały<pl>(pozostałe/pozostałych)</pl>",
      "Others": "{0} pozostały<pl>(pozostałe/pozostałych)</pl>",
      "MostRelevantPosts": "Najbardziej trafne wpisy:",
      "CompleteThread": "Cały wątek:",
      "ShowCompleteThread": "Pokaż cały wątek",
      "ShowOnlyTopMatchingPosts": "Pokaż tylko wpisy o najwyższej zgodności",
      "MostRelevantReplies": "Najbardziej trafne odpowiedzi:",
      "AllConversation": "Cała rozmowa:",
      "ShowAllConversation": "Pokaż całą rozmowę",
      "ShowAllReplies": "Pokaż wszystkie odpowiedzi",
      "ShowOnlyMostRelevantReplies": "Pokaż tylko najbardziej trafne odpowiedzi",
      "Close": "Zamknij",
      "Open": "Otwórz",
      "OpenInOutlookWhenPossible": "Otwórz w programie Outlook (o ile to możliwe)",
      "AlwaysOpenInNewWindow": "Zawsze otwieraj wyniki w nowym oknie",
      "Quickview": "Szybki podgląd",
      "ErrorReport": "Raport o błędach",
      "OopsError": "Wystąpił problem dotyczący serwera.",
      "ProblemPersists": "Jeśli ten problem będzie się powtarzać, skontaktuj się z administratorem.",
      "GoBack": "Powrót",
      "Reset": "Resetuj",
      "Retry": "Spróbuj ponownie",
      "MoreInfo": "Więcej informacji",
      "Username": "Nazwa użytkownika",
      "Password": "Hasło",
      "PostedBy": "Opublikował użytkownik",
      "CannotConnect": "Nie można nawiązać połączenia z adresem serwera.",
      "BadUserPass": "Hasło nie pasuje do nazwy użytkownika.",
      "PleaseEnterYourCredentials": "Proszę wpisać poświadczenia dla systemu {0}.",
      "PleaseEnterYourSearchPage": "Proszę wpisać adres URL strony wyszukiwania",
      "Collapse": "Zwiń",
      "Collapsable": "Zwijany",
      "Expand": "Rozwiń",
      "Today": "Dzisiaj",
      "Yesterday": "Wczoraj",
      "Tomorrow": "Jutro",
      "Duration": "Czas trwania: {0}",
      "IndexDuration": "Czas trwania indeksu: {0}",
      "ProxyDuration": "Czas trwania serwera proxy: {0}",
      "ClientDuration": "Czas trwania klienta: {0}",
      "Unavailable": "Niedostępny",
      "Reply": "Odpowiedz",
      "ReplyAll": "Odpowiedz wszystkim",
      "Forward": "Prześlij dalej",
      "From": "Od",
      "Caption": "Podpis",
      "Expression": "Wyrażenie",
      "Tab": "Karta",
      "Tabs": "Karty",
      "EnterExpressionName": "Wprowadź nazwę wyrażenia",
      "EnterExpressionToFilterWith": "Wprowadź wyrażenie do filtrowania wyników",
      "SelectTab": "Zaznacz kartę",
      "SelectAll": "Zaznacz wszystko",
      "PageUrl": "Adres URL strony wyszukiwania",
      "ErrorSavingToDevice": "Podczas zapisywania informacji na urządzeniu wystąpił błąd",
      "ErrorReadingFromDevice": "Podczas odczytu informacji z urządzenia wystąpił błąd",
      "AppIntro": "Skontaktuj się ze specjalistą ds. produktów, który odpowie na pytania dotyczące Coveo i pomoże Ci w wyborze odpowiedniego rozwiązania Coveo. Możesz też wypróbować interaktywne demo!",
      "TryDemo": "Wypróbuj demo",
      "ContactUs": "Skontaktuj się z nami",
      "NewToCoveo": "Jeszcze nie znasz Coveo?",
      "LetUsHelpGetStarted": "Pomożemy Ci zacząć",
      "LikesThis": "{0} lubią<sn>(lubi)</sn> to.",
      "CannotConnectSearchPage": "Nie można połączyć ze stroną wyszukiwania",
      "AreYouSureDeleteFilter": "Czy na pewno chcesz usunąć filtr {0} z wyrażeniem {1}?",
      "OnlineHelp": "Pomoc online",
      "Done": "Gotowe",
      "SaveFacetState": "Zapisz stan aspektu",
      "ClearFacetState": "Wyczyść stan aspektu",
      "DisplayingTheOnlyMessage": "Wyświetlanie jedynej wiadomości w ramach rozmowy",
      "NoNetworkConnection": "Brak połączenia sieciowego",
      "UnknownConnection": "Nieznane połączenie",
      "EthernetConnection": "Połączenie Ethernet",
      "WiFi": "Połączenie WiFi",
      "CELL": "Połączenie komórkowe",
      "CELL_2G": "Połączenie komórkowe 2G",
      "CELL_3G": "Połączenie komórkowe 3G",
      "CELL_4G": "Połączenie komórkowe 4G",
      "Relevance": "Trafność",
      "Date": "Data",
      "Amount": "Ilość",
      "QueryExceptionNoException": "Brak wyjątków",
      "QueryExceptionInvalidSyntax": "Nieprawidłowa składnia",
      "QueryExceptionInvalidCustomField": "Nieprawidłowe pole niestandardowe",
      "QueryExceptionInvalidDate": "Nieprawidłowa data",
      "QueryExceptionInvalidExactPhrase": "Nieprawidłowa dokładna fraza",
      "QueryExceptionInvalidDateOp": "Nieprawidłowy operator daty",
      "QueryExceptionInvalidNear": "Nieprawidłowy operator NEAR",
      "QueryExceptionInvalidWeightedNear": "Nieprawidłowy ważony operator NEAR",
      "QueryExceptionInvalidTerm": "Nieprawidłowy termin",
      "QueryExceptionTooManyTerms": "Zbyt wiele terminów",
      "QueryExceptionWildcardTooGeneral": "Symbol wieloznaczny zbyt ogólny",
      "QueryExceptionInvalidSortField": "Nieprawidłowe pole sortowania",
      "QueryExceptionInvalidSmallStringOp": "Nieprawidłowy operator małych ciągów",
      "QueryExceptionRequestedResultsMax": "Maksymalna liczba żądanych wyników",
      "QueryExceptionAggregatedMirrorDead": "Duplikat agregowany jest niedostępny",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Limit czasu zapytania duplikatu agregowanego",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Nieprawidłowy numer kompilacji duplikatu agregowanego",
      "QueryExceptionAggregatedMirrorCannotConnect": "Brak połączenia z duplikatem agregowanym",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Zbyt mała liczba znaków poprzedzających symbol wieloznaczny",
      "QueryExceptionSecurityInverterNotFound": "Brak inwertora zabezpieczeń",
      "QueryExceptionSecurityInverterAccessDenied": "Odmowa dostępu do inwertora zabezpieczeń",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Duplikat agregowany nie może dokonać personifikacji",
      "QueryExceptionUnexpected": "Nieoczekiwany",
      "QueryExceptionAccessDenied": "Odmowa dostępu",
      "QueryExceptionSuperUserTokenInvalid": "Nieprawidłowy token administratora",
      "QueryExceptionSuperUserTokenExpired": "Wygasły token administratora",
      "QueryExceptionLicenseQueriesExpired": "Wygasła licencja zapytań",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Nieobsługiwany token administratora licencji",
      "QueryExceptionInvalidSession": "Nieprawidłowa sesja",
      "QueryExceptionInvalidDocument": "Nieprawidłowy dokument",
      "QueryExceptionSearchDisabled": "Wyszukiwanie wyłączone",
      "FileType": "Typ pliku",
      "ShowAttachment": "Pokaż załącznik",
      "OnFeed": "w kanale użytkownika {0}.",
      "Author": "Autor",
      "NoTitle": "Brak tytułu",
      "CurrentSelections": "Bieżące zaznaczenia",
      "AllContent": "Cała zawartość",
      "CancelLastAction": "Anuluj ostatnią czynność",
      "SearchTips": "Wskazówki dotyczące wyszukiwania",
      "CheckSpelling": "Sprawdź pisownię słów kluczowych.",
      "TryUsingFewerKeywords": "Spróbuj użyć różnych lub bardziej ogólnych słów kluczowych albo zmniejsz ich liczbę.",
      "SelectFewerFilters": "Zmniejsz liczbę filtrów, aby poszerzyć zakres wyszukiwania.",
  }

  var locales = String["locales"] || (String["locales"] = {});
  locales["pl"] = merge(locales["pl"], dict);
  String["toLocaleString"].call(this, { "pl": dict });
  String["locale"] = "pl";
  String["defaultLocale"] = "en";
  Globalize.culture("pl")
}