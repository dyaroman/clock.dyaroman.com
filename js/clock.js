!function n(s,a,c){function o(t,e){if(!a[t]){if(!s[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(u)return u(t,!0);throw new Error("Cannot find module '"+t+"'")}var r=a[t]={exports:{}};s[t][0].call(r.exports,function(e){var i=s[t][1][e];return o(i||e)},r,r.exports,n,s,a,c)}return a[t].exports}for(var u="function"==typeof require&&require,e=0;e<c.length;e++)o(c[e]);return o}({1:[function(e,i,t){"use strict";var r=function(){function r(e,i){for(var t=0;t<i.length;t++){var r=i[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,t){return i&&r(e.prototype,i),t&&r(e,t),e}}();new(function(){function t(e){var i=this;!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.renderClock(e),this.showTime(),setInterval(function(){i.showTime()},1e3)}return r(t,[{key:"renderDigit",value:function(){return'\n    <div class="clock__digit digit">\n      <div class="digit__item digit__item--1"></div>\n      <div class="digit__item digit__item--2"></div>\n      <div class="digit__item digit__item--3"></div>\n      <div class="digit__item digit__item--4"></div>\n      <div class="digit__item digit__item--5"></div>\n      <div class="digit__item digit__item--6"></div>\n      <div class="digit__item digit__item--7"></div>\n    </div>\n    '}},{key:"renderDivider",value:function(){return'\n    <div class="clock__divider divider">\n      <div class="divider__item"></div>\n      <div class="divider__item"></div>\n    </div>\n    '}},{key:"renderClock",value:function(e){var t=this,i=document.querySelector(e),r=document.createElement("div");r.classList.add("js_clock","clock"),this.getArrayFromTime().forEach(function(e,i){r.innerHTML+=t.renderDigit(),i%2==1&&i!==t.getArrayFromTime().length-1&&(r.innerHTML+=t.renderDivider())}),i.appendChild(r)}},{key:"convertDigitInArray",value:function(e){var i=[];switch(e){case 0:i.push(1,2,3,4,5,6);break;case 1:i.push(2,3);break;case 2:i.push(1,2,4,5,7);break;case 3:i.push(1,2,3,4,7);break;case 4:i.push(2,3,6,7);break;case 5:i.push(1,3,4,6,7);break;case 6:i.push(1,3,4,5,6,7);break;case 7:i.push(1,2,3);break;case 8:i.push(1,2,3,4,5,6,7);break;case 9:i.push(1,2,3,4,6,7)}return i}},{key:"getArrayFromTime",value:function(){var e=new Date,i="";return i+=e.getHours()<10?"0"+e.getHours():e.getHours(),i+=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),(i+=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()).split("").map(function(e){return parseInt(e)})}},{key:"displayDigit",value:function(e,t){for(var r=document.querySelectorAll(".digit")[e].querySelectorAll(".digit__item"),n="digit__item--action",i=function(i){r[i].classList.remove(n),t.forEach(function(e){r[i].classList.contains("digit__item--"+e)&&r[i].classList.add(n)})},s=0;s<r.length;s++)i(s)}},{key:"showTime",value:function(){var t=this;this.getArrayFromTime().forEach(function(e,i){t.displayDigit(i,t.convertDigitInArray(e))})}}]),t}())(".clock_holder")},{}]},{},[1]);