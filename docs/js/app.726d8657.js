(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5d7a66ca","chunk-05696fd8":"dddbe4e0","chunk-5845a1e7":"a07f4c72","chunk-639f7ae9":"fe459bee","chunk-f971f5b2":"eb0e1c87"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-05696fd8":1,"chunk-5845a1e7":1,"chunk-639f7ae9":1,"chunk-f971f5b2":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"3537c334","chunk-05696fd8":"7bd9374f","chunk-5845a1e7":"7bd9374f","chunk-639f7ae9":"7bd9374f","chunk-f971f5b2":"7bd9374f"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"030f":function(t,e,n){t.exports=n.p+"img/cat_ragdoll.284d93c2.png"},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"1b28":function(t,e,n){"use strict";var a=n("bc3a"),r=n.n(a),o=n("7397");e["a"]={components:{Tweet:o["Tweet"]},data:function(){return{hasError:!1,loading:!0,jsonName:""}},mounted:function(){this.getCatInfoJson()},methods:{getCatInfoJson:function(){r.a.get("https://cat-rest-bucket.s3.amazonaws.com/"+this.jsonName).then(function(t){this.list=t.data.body.statuses}.bind(this)).catch(function(t){this.hasError=!0}.bind(this)).finally(function(){this.loading=!1}.bind(this))},setJsonName:function(t){this.jsonName=t.jsonName}}}},2018:function(t,e,n){},"45e1":function(t,e,n){t.exports=n.p+"img/logo_catRest.a803ee8a.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"top"}},[a("img",{attrs:{id:"topImg",alt:"topImg",src:n("be9a")}}),a("p",{attrs:{id:"topMsg1"}},[t._v("\n    仕事やバイトで疲れているあなた。猫が好きなあなた。\n    ")]),a("p",{attrs:{id:"topMsg2"}},[t._v("\n    ねこのツイートでも見て、ちょっと癒されていきませんか？？\n    ")]),a("div",{staticClass:"nav"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"logoImg",attrs:{alt:"ねこやすみ",src:n("45e1")}})]),a("span",{staticClass:"menuPc"},[a("router-link",{staticClass:"menuitem",attrs:{to:"/ragdoll"}},[a("img",{staticClass:"menu_cat",attrs:{alt:"cat_ragdoll",src:n("030f")}})]),a("router-link",{staticClass:"menuitem",attrs:{to:"/munchkin"}},[a("img",{staticClass:"menu_cat",attrs:{alt:"cat_munchkin",src:n("6e72")}})]),a("router-link",{staticClass:"menuitem",attrs:{to:"/scottish"}},[a("img",{staticClass:"menu_cat",attrs:{alt:"cat_scottish_fold",src:n("7334")}})]),a("router-link",{staticClass:"menuitem",attrs:{to:"/american"}},[a("img",{staticClass:"menu_cat",attrs:{alt:"cat_american_shorthair",src:n("e930")}})])],1),t._m(0)],1),a("div",{staticClass:"menuSp hiddenMenu"},[a("ul",{staticClass:"menuUl"},[a("li",{staticClass:"menuli"},[a("router-link",{staticClass:"menuitem",attrs:{to:"/ragdoll"}},[t._v("ラグドール")])],1),a("li",{staticClass:"menuli"},[a("router-link",{staticClass:"menuitem",attrs:{to:"/munchkin"}},[t._v("マンチカン")])],1),a("li",{staticClass:"menuli"},[a("router-link",{staticClass:"menuitem",attrs:{to:"/scottish"}},[t._v("スコティッシュフォールド")])],1),a("li",{staticClass:"menuli"},[a("router-link",{staticClass:"menuitem",attrs:{to:"/american"}},[t._v("アメリカンショートヘア")])],1)])])]),a("main",[a("router-view")],1),t._m(1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-trigger"},[n("span"),n("span"),n("span")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"footer"}},[n("p",[n("small",[t._v("© 2019 ねこやすみ")])])])}],i=n("1157"),s=n.n(i),c={mounted:function(){s()(".menu-trigger").click((function(){s()(this).toggleClass("active"),s()(".menuSp").toggleClass("hiddenMenu")})),s()(window).on("scroll",(function(){s()(window).scrollTop()>s()("#topImg").height()?(s()(".nav").addClass("fixed"),s()(".menuSp").addClass("fixedMenu")):(s()(".nav").removeClass("fixed"),s()(".menuSp").removeClass("fixedMenu"))}))}},u=c,l=(n("034f"),n("2877")),f=Object(l["a"])(u,r,o,!1,null,null,null),d=f.exports,m=n("8c4f");a["a"].use(m["a"]);var p=new m["a"]({mode:"history",base:"",routes:[{path:"/",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/ragdoll",name:"ragdoll",component:function(){return n.e("chunk-5845a1e7").then(n.bind(null,"9ca1"))}},{path:"/munchkin",name:"munchkin",component:function(){return n.e("chunk-05696fd8").then(n.bind(null,"a4c9"))}},{path:"/scottish",name:"scottish",component:function(){return n.e("chunk-639f7ae9").then(n.bind(null,"f18e"))}},{path:"/american",name:"american",component:function(){return n.e("chunk-f971f5b2").then(n.bind(null,"25a8"))}}]}),h=n("2f62");a["a"].use(h["a"]);var g=new h["a"].Store({state:{},mutations:{},actions:{}}),b=n("9483");Object(b["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("2018"),n("1b28");a["a"].config.productionTip=!1,new a["a"]({router:p,store:g,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,n){},"6e72":function(t,e,n){t.exports=n.p+"img/cat_munchkin.5d4980e5.png"},7334:function(t,e,n){t.exports=n.p+"img/cat_scottish_fold.c99c1ea7.png"},be9a:function(t,e,n){t.exports=n.p+"img/adorable-animal-baby-256632.514bd07b.jpg"},e930:function(t,e,n){t.exports=n.p+"img/cat_american_shorthair.a233400d.png"}});
//# sourceMappingURL=app.726d8657.js.map