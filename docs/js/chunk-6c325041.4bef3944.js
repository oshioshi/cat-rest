(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c325041"],{1705:function(n,t,i){},"6e72":function(n,t,i){n.exports=i.p+"img/cat_munchkin.5d4980e5.png"},"6ed2":function(n,t,i){"use strict";var e=i("1705"),s=i.n(e);s.a},a4c9:function(n,t,i){"use strict";i.r(t);var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"munchkin"},[i("h1",[n._v("マンチカン")]),n._m(0),n.hasError?i("section",[n._v("\n      Error.\n    ")]):i("section",[n.loading?i("div",[n._v("\n        Loading ...\n      ")]):i("div",[i("ul",n._l(n.list,(function(n){return i("li",{key:n},[i("Tweet",{attrs:{id:n.id_str,options:{align:"center"}}})],1)})),0)])])])},s=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"cat_img"},[e("img",{attrs:{alt:"cat_munchkin",src:i("6e72")}})])}],a=i("bc3a"),c=i.n(a),o=i("7397"),u={name:"munchkin",components:{Tweet:o["Tweet"]},data:function(){return{bpi:null,hasError:!1,loading:!0}},mounted:function(){c.a.get("https://mqsovxheh7.execute-api.us-east-1.amazonaws.com/default/getMunchkin").then(function(n){console.log(n.data.body.statuses),this.list=n.data.body.statuses}.bind(this)).catch(function(n){console.log(n),this.hasError=!0}.bind(this)).finally(function(){this.loading=!1}.bind(this))}},r=u,l=(i("6ed2"),i("2877")),d=Object(l["a"])(r,e,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6c325041.4bef3944.js.map