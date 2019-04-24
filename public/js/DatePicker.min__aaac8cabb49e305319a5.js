webpackJsonpCoveo__temporary([55],{105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=n(31),s=n(3),o=n(7),r=n(23),l=n(406),h=function(){function e(e){void 0===e&&(e=function(){}),this.onChange=e,this.wasReset=!0,this.buildContent()}return e.prototype.reset=function(){this.picker.setDate(void 0),this.wasReset=!0,this.onChange(this)},e.prototype.getElement=function(){return this.element},e.prototype.getValue=function(){return this.wasReset?"":this.picker.getDate()?i.DateUtils.dateForQuery(this.picker.getDate()):""},e.prototype.getDateValue=function(){return this.wasReset?null:this.picker.getDate()},e.prototype.setValue=function(e){this.picker.setDate(e),this.wasReset=!1},e.prototype.build=function(){return this.element},e.prototype.buildContent=function(){var e=this;this.element=a.$$("input",{className:"coveo-button","aria-label":o.l("Date")}).el,this.element.readOnly=!0,this.picker=new l({field:this.element,onSelect:function(){e.wasReset=!1,e.onChange.call(e,e)},i18n:{previousMonth:o.l("PreviousMonth"),nextMonth:o.l("NextMonth"),months:r.culture().calendar.months.names,weekdays:r.culture().calendar.days.names,weekdaysShort:r.culture().calendar.days.namesAbbr}})},e.doExport=function(){s.exportGlobally({DatePicker:e})},e}();t.DatePicker=h},406:function(e,t,n){/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
!function(t,a){"use strict";var i;try{i=n(106)}catch(e){}e.exports=a(i)}(0,function(e){"use strict";var t="function"==typeof e,n=!!window.addEventListener,a=window.document,i=window.setTimeout,s=function(e,t,a,i){n?e.addEventListener(t,a,!!i):e.attachEvent("on"+t,a)},o=function(e,t,a,i){n?e.removeEventListener(t,a,!!i):e.detachEvent("on"+t,a)},r=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},l=function(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")},h=function(e,t){l(e,t)||(e.className=""===e.className?t:e.className+" "+t)},d=function(e,t){e.className=r((" "+e.className+" ").replace(" "+t+" "," "))},u=function(e){return/Array/.test(Object.prototype.toString.call(e))},c=function(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())},f=function(e){var t=e.getDay();return 0===t||6===t},p=function(e){return e%4==0&&e%100!=0||e%400==0},g=function(e,t){return[31,p(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},m=function(e){c(e)&&e.setHours(0,0,0,0)},y=function(e,t){return e.getTime()===t.getTime()},D=function(e,t,n){var a,i;for(a in t)i=void 0!==e[a],i&&"object"==typeof t[a]&&null!==t[a]&&void 0===t[a].nodeName?c(t[a])?n&&(e[a]=new Date(t[a].getTime())):u(t[a])?n&&(e[a]=t[a].slice(0)):e[a]=D({},t[a],n):!n&&i||(e[a]=t[a]);return e},v=function(e,t,n){var i;a.createEvent?(i=a.createEvent("HTMLEvents"),i.initEvent(t,!0,!1),i=D(i,n),e.dispatchEvent(i)):a.createEventObject&&(i=a.createEventObject(),i=D(i,n),e.fireEvent("on"+t,i))},b=function(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),e.month>11&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e},_={field:null,bound:void 0,position:"bottom left",reposition:!0,format:"YYYY-MM-DD",toString:null,parse:null,defaultDate:null,setDefaultDate:!1,firstDay:0,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,pickWholeWeek:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,enableSelectionDaysInNextAndPreviousMonths:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,blurFieldOnSelect:!0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null,keyboardInput:!0},w=function(e,t,n){for(t+=e.firstDay;t>=7;)t-=7;return n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]},k=function(e){var t=[],n="false";if(e.isEmpty){if(!e.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';t.push("is-outside-current-month"),e.enableSelectionDaysInNextAndPreviousMonths||t.push("is-selection-disabled")}return e.isDisabled&&t.push("is-disabled"),e.isToday&&t.push("is-today"),e.isSelected&&(t.push("is-selected"),n="true"),e.hasEvent&&t.push("has-event"),e.isInRange&&t.push("is-inrange"),e.isStartRange&&t.push("is-startrange"),e.isEndRange&&t.push("is-endrange"),'<td data-day="'+e.day+'" class="'+t.join(" ")+'" aria-selected="'+n+'"><button class="pika-button pika-day" type="button" data-pika-year="'+e.year+'" data-pika-month="'+e.month+'" data-pika-day="'+e.day+'">'+e.day+"</button></td>"},M=function(e,t,n){var a=new Date(n,0,1);return'<td class="pika-week">'+Math.ceil(((new Date(n,t,e)-a)/864e5+a.getDay()+1)/7)+"</td>"},x=function(e,t,n,a){return'<tr class="pika-row'+(n?" pick-whole-week":"")+(a?" is-selected":"")+'">'+(t?e.reverse():e).join("")+"</tr>"},R=function(e){return"<tbody>"+e.join("")+"</tbody>"},N=function(e){var t,n=[];for(e.showWeekNumber&&n.push("<th></th>"),t=0;t<7;t++)n.push('<th scope="col"><abbr title="'+w(e,t)+'">'+w(e,t,!0)+"</abbr></th>");return"<thead><tr>"+(e.isRTL?n.reverse():n).join("")+"</tr></thead>"},C=function(e,t,n,a,i,s){var o,r,l,h,d,c=e._o,f=n===c.minYear,p=n===c.maxYear,g='<div id="'+s+'" class="pika-title" role="heading" aria-live="assertive">',m=!0,y=!0;for(l=[],o=0;o<12;o++)l.push('<option value="'+(n===i?o-t:12+o-t)+'"'+(o===a?' selected="selected"':"")+(f&&o<c.minMonth||p&&o>c.maxMonth?'disabled="disabled"':"")+">"+c.i18n.months[o]+"</option>");for(h='<div class="pika-label">'+c.i18n.months[a]+'<select class="pika-select pika-select-month" tabindex="-1">'+l.join("")+"</select></div>",u(c.yearRange)?(o=c.yearRange[0],r=c.yearRange[1]+1):(o=n-c.yearRange,r=1+n+c.yearRange),l=[];o<r&&o<=c.maxYear;o++)o>=c.minYear&&l.push('<option value="'+o+'"'+(o===n?' selected="selected"':"")+">"+o+"</option>");return d='<div class="pika-label">'+n+c.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+l.join("")+"</select></div>",c.showMonthAfterYear?g+=d+h:g+=h+d,f&&(0===a||c.minMonth>=a)&&(m=!1),p&&(11===a||c.maxMonth<=a)&&(y=!1),0===t&&(g+='<button class="pika-prev'+(m?"":" is-disabled")+'" type="button">'+c.i18n.previousMonth+"</button>"),t===e._o.numberOfMonths-1&&(g+='<button class="pika-next'+(y?"":" is-disabled")+'" type="button">'+c.i18n.nextMonth+"</button>"),g+="</div>"},S=function(e,t,n){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+n+'">'+N(e)+R(t)+"</table>"},I=function(o){var r=this,h=r.config(o);r._onMouseDown=function(e){if(r._v){e=e||window.event;var t=e.target||e.srcElement;if(t)if(l(t,"is-disabled")||(!l(t,"pika-button")||l(t,"is-empty")||l(t.parentNode,"is-disabled")?l(t,"pika-prev")?r.prevMonth():l(t,"pika-next")&&r.nextMonth():(r.setDate(new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day"))),h.bound&&i(function(){r.hide(),h.blurFieldOnSelect&&h.field&&h.field.blur()},100))),l(t,"pika-select"))r._c=!0;else{if(!e.preventDefault)return e.returnValue=!1,!1;e.preventDefault()}}},r._onChange=function(e){e=e||window.event;var t=e.target||e.srcElement;t&&(l(t,"pika-select-month")?r.gotoMonth(t.value):l(t,"pika-select-year")&&r.gotoYear(t.value))},r._onKeyChange=function(e){if(e=e||window.event,r.isVisible())switch(e.keyCode){case 13:case 27:h.field&&h.field.blur();break;case 37:e.preventDefault(),r.adjustDate("subtract",1);break;case 38:r.adjustDate("subtract",7);break;case 39:r.adjustDate("add",1);break;case 40:r.adjustDate("add",7)}},r._onInputChange=function(n){var a;n.firedBy!==r&&(h.parse?a=h.parse(h.field.value,h.format):t?(a=e(h.field.value,h.format,h.formatStrict),a=a&&a.isValid()?a.toDate():null):a=new Date(Date.parse(h.field.value)),c(a)&&r.setDate(a),r._v||r.show())},r._onInputFocus=function(){r.show()},r._onInputClick=function(){r.show()},r._onInputBlur=function(){var e=a.activeElement;do{if(l(e,"pika-single"))return}while(e=e.parentNode);r._c||(r._b=i(function(){r.hide()},50)),r._c=!1},r._onClick=function(e){e=e||window.event;var t=e.target||e.srcElement,a=t;if(t){!n&&l(t,"pika-select")&&(t.onchange||(t.setAttribute("onchange","return;"),s(t,"change",r._onChange)));do{if(l(a,"pika-single")||a===h.trigger)return}while(a=a.parentNode);r._v&&t!==h.trigger&&a!==h.trigger&&r.hide()}},r.el=a.createElement("div"),r.el.className="pika-single"+(h.isRTL?" is-rtl":"")+(h.theme?" "+h.theme:""),s(r.el,"mousedown",r._onMouseDown,!0),s(r.el,"touchend",r._onMouseDown,!0),s(r.el,"change",r._onChange),h.keyboardInput&&s(a,"keydown",r._onKeyChange),h.field&&(h.container?h.container.appendChild(r.el):h.bound?a.body.appendChild(r.el):h.field.parentNode.insertBefore(r.el,h.field.nextSibling),s(h.field,"change",r._onInputChange),h.defaultDate||(t&&h.field.value?h.defaultDate=e(h.field.value,h.format).toDate():h.defaultDate=new Date(Date.parse(h.field.value)),h.setDefaultDate=!0));var d=h.defaultDate;c(d)?h.setDefaultDate?r.setDate(d,!0):r.gotoDate(d):r.gotoDate(new Date),h.bound?(this.hide(),r.el.className+=" is-bound",s(h.trigger,"click",r._onInputClick),s(h.trigger,"focus",r._onInputFocus),s(h.trigger,"blur",r._onInputBlur)):this.show()};return I.prototype={config:function(e){this._o||(this._o=D({},_,!0));var t=D(this._o,e,!0);t.isRTL=!!t.isRTL,t.field=t.field&&t.field.nodeName?t.field:null,t.theme="string"==typeof t.theme&&t.theme?t.theme:null,t.bound=!!(void 0!==t.bound?t.field&&t.bound:t.field),t.trigger=t.trigger&&t.trigger.nodeName?t.trigger:t.field,t.disableWeekends=!!t.disableWeekends,t.disableDayFn="function"==typeof t.disableDayFn?t.disableDayFn:null;var n=parseInt(t.numberOfMonths,10)||1;if(t.numberOfMonths=n>4?4:n,c(t.minDate)||(t.minDate=!1),c(t.maxDate)||(t.maxDate=!1),t.minDate&&t.maxDate&&t.maxDate<t.minDate&&(t.maxDate=t.minDate=!1),t.minDate&&this.setMinDate(t.minDate),t.maxDate&&this.setMaxDate(t.maxDate),u(t.yearRange)){var a=(new Date).getFullYear()-10;t.yearRange[0]=parseInt(t.yearRange[0],10)||a,t.yearRange[1]=parseInt(t.yearRange[1],10)||a}else t.yearRange=Math.abs(parseInt(t.yearRange,10))||_.yearRange,t.yearRange>100&&(t.yearRange=100);return t},toString:function(n){return n=n||this._o.format,c(this._d)?this._o.toString?this._o.toString(this._d,n):t?e(this._d).format(n):this._d.toDateString():""},getMoment:function(){return t?e(this._d):null},setMoment:function(n,a){t&&e.isMoment(n)&&this.setDate(n.toDate(),a)},getDate:function(){return c(this._d)?new Date(this._d.getTime()):null},setDate:function(e,t){if(!e)return this._d=null,this._o.field&&(this._o.field.value="",v(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof e&&(e=new Date(Date.parse(e))),c(e)){var n=this._o.minDate,a=this._o.maxDate;c(n)&&e<n?e=n:c(a)&&e>a&&(e=a),this._d=new Date(e.getTime()),m(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),v(this._o.field,"change",{firedBy:this})),t||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},gotoDate:function(e){var t=!0;if(c(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),a=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),i=e.getTime();a.setMonth(a.getMonth()+1),a.setDate(a.getDate()-1),t=i<n.getTime()||a.getTime()<i}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustDate:function(e,t){var n,a=this.getDate()||new Date,i=24*parseInt(t)*60*60*1e3;"add"===e?n=new Date(a.valueOf()+i):"subtract"===e&&(n=new Date(a.valueOf()-i)),this.setDate(n)},adjustCalendars:function(){this.calendars[0]=b(this.calendars[0]);for(var e=1;e<this._o.numberOfMonths;e++)this.calendars[e]=b({month:this.calendars[0].month+e,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},setMinDate:function(e){e instanceof Date?(m(e),this._o.minDate=e,this._o.minYear=e.getFullYear(),this._o.minMonth=e.getMonth()):(this._o.minDate=_.minDate,this._o.minYear=_.minYear,this._o.minMonth=_.minMonth,this._o.startRange=_.startRange),this.draw()},setMaxDate:function(e){e instanceof Date?(m(e),this._o.maxDate=e,this._o.maxYear=e.getFullYear(),this._o.maxMonth=e.getMonth()):(this._o.maxDate=_.maxDate,this._o.maxYear=_.maxYear,this._o.maxMonth=_.maxMonth,this._o.endRange=_.endRange),this.draw()},setStartRange:function(e){this._o.startRange=e},setEndRange:function(e){this._o.endRange=e},draw:function(e){if(this._v||e){var t,n=this._o,a=n.minYear,s=n.maxYear,o=n.minMonth,r=n.maxMonth,l="";this._y<=a&&(this._y=a,!isNaN(o)&&this._m<o&&(this._m=o)),this._y>=s&&(this._y=s,!isNaN(r)&&this._m>r&&(this._m=r)),t="pika-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);for(var h=0;h<n.numberOfMonths;h++)l+='<div class="pika-lendar">'+C(this,h,this.calendars[h].year,this.calendars[h].month,this.calendars[0].year,t)+this.render(this.calendars[h].year,this.calendars[h].month,t)+"</div>";this.el.innerHTML=l,n.bound&&"hidden"!==n.field.type&&i(function(){n.trigger.focus()},1),"function"==typeof this._o.onDraw&&this._o.onDraw(this),n.bound&&n.field.setAttribute("aria-label","Use the arrow keys to pick a date")}},adjustPosition:function(){var e,t,n,i,s,o,r,l,h,d;if(!this._o.container){if(this.el.style.position="absolute",e=this._o.trigger,t=e,n=this.el.offsetWidth,i=this.el.offsetHeight,s=window.innerWidth||a.documentElement.clientWidth,o=window.innerHeight||a.documentElement.clientHeight,r=window.pageYOffset||a.body.scrollTop||a.documentElement.scrollTop,"function"==typeof e.getBoundingClientRect)d=e.getBoundingClientRect(),l=d.left+window.pageXOffset,h=d.bottom+window.pageYOffset;else for(l=t.offsetLeft,h=t.offsetTop+t.offsetHeight;t=t.offsetParent;)l+=t.offsetLeft,h+=t.offsetTop;(this._o.reposition&&l+n>s||this._o.position.indexOf("right")>-1&&l-n+e.offsetWidth>0)&&(l=l-n+e.offsetWidth),(this._o.reposition&&h+i>o+r||this._o.position.indexOf("top")>-1&&h-i-e.offsetHeight>0)&&(h=h-i-e.offsetHeight),this.el.style.left=l+"px",this.el.style.top=h+"px"}},render:function(e,t,n){var a=this._o,i=new Date,s=g(e,t),o=new Date(e,t,1).getDay(),r=[],l=[];m(i),a.firstDay>0&&(o-=a.firstDay)<0&&(o+=7);for(var h=0===t?11:t-1,d=11===t?0:t+1,u=0===t?e-1:e,p=11===t?e+1:e,D=g(u,h),v=s+o,b=v;b>7;)b-=7;v+=7-b;for(var _=!1,w=0,R=0;w<v;w++){var N=new Date(e,t,w-o+1),C=!!c(this._d)&&y(N,this._d),I=y(N,i),E=-1!==a.events.indexOf(N.toDateString()),T=w<o||w>=s+o,O=w-o+1,Y=t,j=e,A=a.startRange&&y(a.startRange,N),W=a.endRange&&y(a.endRange,N),F=a.startRange&&a.endRange&&a.startRange<N&&N<a.endRange,P=a.minDate&&N<a.minDate||a.maxDate&&N>a.maxDate||a.disableWeekends&&f(N)||a.disableDayFn&&a.disableDayFn(N);T&&(w<o?(O=D+O,Y=h,j=u):(O-=s,Y=d,j=p));var L={day:O,month:Y,year:j,hasEvent:E,isSelected:C,isToday:I,isDisabled:P,isEmpty:T,isStartRange:A,isEndRange:W,isInRange:F,showDaysInNextAndPreviousMonths:a.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:a.enableSelectionDaysInNextAndPreviousMonths};a.pickWholeWeek&&C&&(_=!0),l.push(k(L)),7==++R&&(a.showWeekNumber&&l.unshift(M(w-o,t,e)),r.push(x(l,a.isRTL,a.pickWholeWeek,_)),l=[],R=0,_=!1)}return S(a,r,n)},isVisible:function(){return this._v},show:function(){this.isVisible()||(this._v=!0,this.draw(),d(this.el,"is-hidden"),this._o.bound&&(s(a,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var e=this._v;!1!==e&&(this._o.bound&&o(a,"click",this._onClick),this.el.style.position="static",this.el.style.left="auto",this.el.style.top="auto",h(this.el,"is-hidden"),this._v=!1,void 0!==e&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){var e=this._o;this.hide(),o(this.el,"mousedown",this._onMouseDown,!0),o(this.el,"touchend",this._onMouseDown,!0),o(this.el,"change",this._onChange),e.keyboardInput&&o(a,"keydown",this._onKeyChange),e.field&&(o(e.field,"change",this._onInputChange),e.bound&&(o(e.trigger,"click",this._onInputClick),o(e.trigger,"focus",this._onInputFocus),o(e.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},I})}});