(this.webpackJsonpweatherfinder=this.webpackJsonpweatherfinder||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),i=(a(9),a(2)),o=(a(10),function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(c," ").concat(n)}),d=a(0);var j=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)({}),s=Object(i.a)(r,2),j=s[0],u=s[1],h=Object(c.useState)(!1),l=Object(i.a)(h,2),b=l[0],m=l[1],p=Object(c.useState)(""),O=Object(i.a)(p,2),y=O[0],f=O[1];return Object(d.jsx)("div",{className:"undefined"!=typeof j.main&&j.main.temp>14?"app warm":"app",children:Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{className:"search-box",children:Object(d.jsx)("input",{type:"text",placeholder:"Enter your City....",className:"search-bar",onChange:function(e){return n(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat("https://api.openweathermap.org/data/2.5/","weather?q=").concat(a,"&units=metric&appid=").concat("7fa9c7f8bc04cdbcac5433207a81f3e8")).then((function(e){if(e.ok)return e.json();throw new Error("Please enter correct PlaceName")})).then((function(e){n(""),u(e),m(!1),console.log(e)})).catch((function(e){console.log(e),m(!0),f(e.message),n("")}))}})}),b?Object(d.jsx)("div",{children:y}):Object(d.jsx)("div",{children:"undefined"!=typeof j.main?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"location-box",children:[Object(d.jsxs)("div",{className:"location",children:[j.name,", ",j.sys.country]}),Object(d.jsx)("div",{className:"date",children:o(new Date)})]}),Object(d.jsxs)("div",{className:"weather-box",children:[Object(d.jsxs)("div",{className:"temp",children:[Math.round(j.main.temp),"\u2103",Object(d.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(j.weather[0].icon,".png"),alt:"icon"})]}),Object(d.jsx)("div",{className:"weather",children:j.weather[0].main})]})]}):""})]})})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.828ddfba.chunk.js.map