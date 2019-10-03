(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],h=0,f=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0285":function(t,e,a){"use strict";var n=a("5fcb"),r=a.n(n);r.a},"11aa":function(t,e,a){t.exports=a.p+"img/back.d7e39af3.jpg"},"3b54":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("TheNavbar"),a("TheHomePage"),a("ParallaxBanner"),a("TheSkillsPage"),a("ParallaxBanner"),a("TheProjectsPage"),a("ParallaxBanner"),a("TheContactPage")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-container"},[a("NavbarButton",{staticClass:"fas fa-2x fa-home",attrs:{href:"#home",name:"home",title:"Home"}}),a("NavbarButton",{staticClass:"fas fa-2x fa-code",attrs:{href:"#skills",name:"Skills",title:"Skills"}}),a("NavbarButton",{staticClass:"fas fa-2x fa-folder-open",attrs:{href:"#projects",name:"Projects",title:"Projects"}}),a("NavbarButton",{staticClass:"far fa-2x fa-id-card",attrs:{href:"#info",name:"info",title:"info"}})],1)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"NavbarButton"})},c=[],u={name:"NavbarButton",props:["name"]},h=u,f=(a("e498"),a("2877")),d=Object(f["a"])(h,l,c,!1,null,"587a99e8",null),p=d.exports,v={name:"TheNavbar",components:{NavbarButton:p}},g=v,b=(a("d0c4"),Object(f["a"])(g,s,o,!1,null,"7d084d58",null)),m=b.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container",attrs:{id:"home"}},[n("div",{staticClass:"home-card"},[n("img",{staticClass:"avatar",attrs:{src:a("915e"),alt:"avatar"}}),n("h1",[t._v("Hi! I'm Cheung Kin Wong")]),n("p",[t._v("\n      I’m a Junior Web Developer at BeCode Antwerp. This portfolio website is a personal project made using Vue.JS, because I wanted to learn more about it.\n      I love to be challenged, learning new things and I'm passionate about my projects. Thanks for visiting my portfolio and see you around.\n    ")])])])}],w={name:"TheHomePage"},C=w,y=(a("9656"),Object(f["a"])(C,_,k,!1,null,"4e43f328",null)),j=y.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parallax"})},P=[],I={name:"ParralaxBanner"},T=I,O=(a("f67f"),Object(f["a"])(T,x,P,!1,null,"05bfb9b9",null)),E=O.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"skills"}},[a("h1",{staticClass:"gradient-title"},[t._v("Skills")]),a("div",{staticClass:"portfolio-container"},[a("div",{staticClass:"portfolio-card"},[a("i",{staticClass:"fas fa-2x fa-tv"}),a("h2",[t._v("Front-end")]),a("ul",[a("li",[t._v("React")]),a("li",[t._v("Vue")]),a("li",[t._v("JS")]),a("li",[t._v("HTML5")]),a("li",[t._v("CSS + Sass")])])]),a("div",{staticClass:"portfolio-card"},[a("i",{staticClass:"fas fa-2x fa-database"}),a("h2",[t._v("Back-end")]),a("ul",[a("li",[t._v("PHP")]),a("li",[t._v("MySQL")]),a("li",[t._v("Rest API")]),a("li",[t._v("Node.JS")]),a("li",[t._v("Docker")])])]),a("div",{staticClass:"portfolio-card"},[a("i",{staticClass:"fas fa-2x fa-edit"}),a("h2",[t._v("Design")]),a("ul",[a("li",[t._v("Photoshop")]),a("li",[t._v("Illustrator")]),a("li",[t._v("InDesign")]),a("li",[t._v("Figma")]),a("li",[t._v("Photopea")])])]),a("div",{staticClass:"portfolio-card"},[a("i",{staticClass:"fas fa-2x fa-globe-asia"}),a("h2",[t._v("Language")]),a("ul",[a("li",[t._v("Cantonese")]),a("li",[t._v("Dutch")]),a("li",[t._v("English")]),a("li",[t._v("French")]),a("li",[t._v("Mandarin")])])])])])}],D={name:"TheskillsPage"},M=D,$=Object(f["a"])(M,B,S,!1,null,null,null),N=$.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"projects"}},[n("h1",{staticClass:"gradient-title"},[t._v("Projects")]),n("div",{staticClass:"portfolio-container"},[n("div",{staticClass:"portfolio-card"},[n("a",{attrs:{href:"https://cheungkinwong.github.io/Memory-game/",target:"_blank"}},[n("img",{staticClass:"avatar",attrs:{src:a("11aa"),alt:"avatar"}})]),n("h2",[t._v("Memory game")]),n("p",[t._v("It's playable by keyboard and mouse and has local multiplayer. The project challenged my knowledge of HTML, CSS and JS.")]),n("div",{staticClass:"link-container"},[n("a",{staticClass:"link-button",attrs:{href:"https://cheungkinwong.github.io/Memory-game/",target:"_blank"}},[t._v("DEMO")]),n("a",{staticClass:"link-button",attrs:{href:"https://github.com/cheungkinwong/Memory-game/",target:"_blank"}},[t._v("CODE")])])]),n("div",{staticClass:"portfolio-card"},[n("a",{attrs:{href:"https://cheungkinwong.github.io/weather-app/",target:"_blank"}},[n("img",{staticClass:"avatar",attrs:{src:a("9634"),alt:"avatar"}})]),n("h2",[t._v("Weather app")]),n("p",[t._v("Excercise using Rest API, enter a city name and get the weather forecast for the next five days. Figuring out how to request and use data from an API took a while.")]),n("div",{staticClass:"link-container"},[n("a",{staticClass:"link-button",attrs:{href:"https://cheungkinwong.github.io/weather-app/",target:"_blank"}},[t._v("DEMO")]),n("a",{staticClass:"link-button",attrs:{href:"https://github.com/cheungkinwong/weather-app/",target:"_blank"}},[t._v("CODE")])])]),n("div",{staticClass:"portfolio-card"},[n("a",{attrs:{href:"https://cheungkinwong.github.io/project-eden/",target:"_blank"}},[n("img",{staticClass:"avatar",attrs:{src:a("c97e"),alt:"avatar"}})]),n("h2",[t._v("Project Eden")]),n("p",[t._v("A group project to make a 1 page website for a fictional project. I was responsible for the navbar and making sure there were no merge conflicts.")]),n("div",{staticClass:"link-container"},[n("a",{staticClass:"link-button",attrs:{href:"https://cheungkinwong.github.io/project-eden/",target:"_blank"}},[t._v("DEMO")]),n("a",{staticClass:"link-button",attrs:{href:"https://github.com/cheungkinwong/project-eden/",target:"_blank"}},[t._v("CODE")])])]),n("div",{staticClass:"portfolio-card"},[n("a",{attrs:{href:"https://cheungkinwong.github.io/threejs-The-World/",target:"_blank"}},[n("img",{staticClass:"avatar",attrs:{src:a("786e"),alt:"avatar"}})]),n("h2",[t._v("The world")]),n("p",[t._v("Introduction project to three.js full 3D controls, with both keyboard and mouse.")]),n("div",{staticClass:"link-container"},[n("a",{staticClass:"link-button",attrs:{href:"https://cheungkinwong.github.io/threejs-The-World/",target:"_blank"}},[t._v("DEMO")]),n("a",{staticClass:"link-button",attrs:{href:"https://github.com/cheungkinwong/threejs-The-World/",target:"_blank"}},[t._v("CODE")])])])])])}],A={name:"TheprojectsPage"},H=A,L=(a("0285"),Object(f["a"])(H,J,W,!1,null,"64289f57",null)),F=L.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"info"}},[a("h1",{staticClass:"gradient-title"},[t._v("Info")]),a("div",{staticClass:"home-container"},[a("div",{staticClass:"home-card"},[a("i",{staticClass:"fas fa-2x fa-user-circle"}),a("h2",[t._v("About me")]),a("p",[t._v("Born in Vilvoorde, 28/12/1983. My parents are from Hong Kong, China. Growing up I've always been fascinated by technology and science. I spend a lot of time in the library and loved to play on the computer.")]),a("p",[t._v("\n        When I had to choose my studies, I chose science because I loved chemistry and doing experiments. But when I started working in a laboratory I quickly found out that studying science and doing a job in science wasn't quite the same thing.\n        I wanted to do something more creative and more tech related and with the proper retraining started to work in the printing sector.\n      ")]),a("p",[t._v("\n        I really enjoyed my job as a prepress, every project came with it's own set of challenges and it allowed me to be creative at times.\n        But after 9 years, I've noticed the printing sector going into a decline, there were less work, and the boss asked if I'd make a website with a webshop for the company to boost sales. I didn't had any experience making websites at that point but was eager to do give it a try.\n      ")]),a("p",[t._v("It took a while and a lot of trial and error but It was functional and while I learned a lot in the process I wanted to be able to do it properly. When I saw an add from BeCode for a free retraining in Junior Web Developer I knew what my next step was going to be.")])])]),a("div",{staticClass:"portfolio-container"},[a("div",{staticClass:"portfolio-card"},[a("i",{staticClass:"fas fa-2x fa-user-graduate"}),a("h2",[t._v("Education")]),a("table",[a("tr",[a("td",[t._v("AP hogeschool:")]),a("td",[t._v("Chemistry")])]),a("tr",[a("td",[t._v("VDAB:")]),a("td",[t._v("Prepress")])]),a("tr",[a("td",[t._v("BeCode:")]),a("td",[t._v("Junior Web Developer")])]),a("tr",[a("td",[t._v("Drivers License:")]),a("td",[t._v("B")])])])]),a("div",{staticClass:"portfolio-card"},[a("i",{staticClass:"fas fa-2x fa-briefcase"}),a("h2",[t._v("Experience")]),a("table",[a("tr",[a("td",[t._v("2007-2009:")]),a("td",[t._v("Umicore Lab Technician")])]),a("tr",[a("td",[t._v("2010:")]),a("td",[t._v("Internship: JPG Pharma Desktop Publisher")])]),a("tr",[a("td",[t._v("2011-2019:")]),a("td",[t._v("Gazelle Prepress Coordinator")])])])]),a("div",{staticClass:"portfolio-card"},[a("i",{staticClass:"fas fa-2x fa-info-circle"}),a("h2",[t._v("contact")]),a("ul",[a("li",[t._v("Grote Markt 50, Antwerp")]),a("li",[t._v("+32 (0) 485 47 41 48")]),a("a",{attrs:{href:"mailto:cheungkin.wong@gmail.com",title:"cheungkin.wong@gmail.com"}},[a("i",{staticClass:"fas fa-2x fa-envelope"})]),a("a",{attrs:{href:"https://www.linkedin.com/in/cheungkin/",target:"_blank",title:"www.linkedin.com/in/cheungkin"}},[a("i",{staticClass:"fab fa-2x fa-linkedin"})]),a("a",{attrs:{href:"https://github.com/cheungkinwong?tab=repositories",target:"_blank",title:"github.com/cheungkinwong"}},[a("i",{staticClass:"fab fa-2x fa-github"})])])])])])}],q={name:"ThecontactPage"},R=q,K=(a("5e41"),Object(f["a"])(R,G,V,!1,null,"069f95be",null)),z=K.exports,Q={name:"app",components:{TheNavbar:m,TheHomePage:j,ParallaxBanner:E,TheSkillsPage:N,TheProjectsPage:F,TheContactPage:z}},U=Q,X=(a("5c0b"),Object(f["a"])(U,r,i,!1,null,null,null)),Y=X.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("e332"),r=a.n(n);r.a},"5e41":function(t,e,a){"use strict";var n=a("e735"),r=a.n(n);r.a},"5fcb":function(t,e,a){},"786e":function(t,e,a){t.exports=a.p+"img/earthmap1k.9e5b71d3.jpg"},"915e":function(t,e,a){t.exports=a.p+"img/avatar.815f1845.jpg"},9634:function(t,e,a){t.exports=a.p+"img/10d.3495abbf.jpg"},9656:function(t,e,a){"use strict";var n=a("3b54"),r=a.n(n);r.a},"9b0d":function(t,e,a){},c97e:function(t,e,a){t.exports=a.p+"img/image2.4c909041.jpg"},ca77:function(t,e,a){},ce87:function(t,e,a){},d0c4:function(t,e,a){"use strict";var n=a("9b0d"),r=a.n(n);r.a},e332:function(t,e,a){},e498:function(t,e,a){"use strict";var n=a("ca77"),r=a.n(n);r.a},e735:function(t,e,a){},f67f:function(t,e,a){"use strict";var n=a("ce87"),r=a.n(n);r.a}});
//# sourceMappingURL=app.8d16c3bd.js.map