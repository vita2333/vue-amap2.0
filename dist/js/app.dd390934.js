(function(t){function e(e){for(var o,i,c=e[0],u=e[1],s=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return c.p+"js/"+({demo:"demo"}[t]||t)+"."+{demo:"e74fc315"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var s=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[t]=void 0}};var p=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vmap/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var l=s;a.push(["c31f","chunk-vendors"]),n()})({"383d":function(t,e,n){"use strict";(function(t){n("4160"),n("d81d"),n("fb6a"),n("cca6"),n("b64b"),n("159b"),n("96cf");var o=n("1da1"),r=n("2b0e");e["a"]={name:"Vmap",props:{width:{type:String,default:"500px"},height:{type:String,default:"500px"},events:{type:Object}},data:function(){return{map:void 0,unwatchFns:[]}},computed:{optionsProps:function(){var t=Object.assign({},this.$attrs);for(var e in t)t[e]||delete t[e];return Object.keys(t).length>0?t:void 0}},mounted:function(){this._initMap()},destroyed:function(){this.map&&this.map.destroy(),this.unwatchFns.forEach((function(t){return t()})),this.unwatchFns=[]},methods:{_initMap:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$amapLoader();case 2:t.AMap=n.sent,e.$set(e,"map",new AMap.Map(e.$refs.container,e.optionsProps)),e._bindEvents(),e._setPropWatchers();case 6:case"end":return n.stop()}}),n)})))()},_setPropWatchers:function(){var t=this;r["a"].observable(this.$attrs),this.optionsProps&&Object.keys(this.optionsProps).forEach((function(e){function n(t){return t.slice(0,1).toUpperCase()+t.slice(1)}var o=t.map["set".concat(n(e))];o&&(console.log(e),t.unwatchFns.push(t.$watch(t.$attrs[e],(function(t){console.log("now======================"),console.log(t),console.log("======================"),o(t)}))))}))},_bindEvents:function(){if(this.events)for(var t in this.events)this.map.on(t,this.events[t])},getMap:function(t){var e=this,n=function n(){e.map?t(e.map):setTimeout(n,50)};n()}},provide:function(){return{getMap:this.getMap}}}}).call(this,n("c8ba"))},"4d1c":function(t,e,n){"use strict";var o=n("accf"),r=n.n(o);r.a},7055:function(t,e,n){},accf:function(t,e,n){},c31f:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},t._l(t.demos,(function(e){return n("router-link",{key:e.path,attrs:{to:e.path}},[t._v(t._s(e.meta.title)+" |")])})),1),n("router-view")],1)},a=[],i=(n("d3b7"),n("8c4f"));o["a"].use(i["a"]);var c=[{path:"/",name:"BaseDemo",component:function(){return n.e("demo").then(n.bind(null,"ec14"))},meta:{title:"基本用法"}},{path:"/MarkerDemo",name:"MarkerDemo",component:function(){return n.e("demo").then(n.bind(null,"7154"))},meta:{title:"地图标记"}},{path:"/PluginDemo",name:"PluginDemo",component:function(){return n.e("demo").then(n.bind(null,"bcda"))},meta:{title:"缩放按钮"}},{path:"/SearchDemo",name:"SearchDemo",component:function(){return n.e("demo").then(n.bind(null,"40a0"))},meta:{title:"地址搜索"}}],u=new i["a"]({mode:"history",base:"/vmap/",routes:c}),s=u,p={name:"App",computed:{demos:function(){return c}}},l=p,d=(n("4d1c"),n("2877")),f=Object(d["a"])(l,r,a,!1,null,null,null),m=f.exports,h=n("2f62");o["a"].use(h["a"]);var v,b,g,y,w=new h["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=(n("4160"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",style:{width:t.width,height:t.height}},[t._t("default")],2)}),M=[],j=n("383d"),_=j["a"],O=Object(d["a"])(_,k,M,!1,null,"41e4e3ea",null),P=O.exports,$=(n("b64b"),{name:"VmapMarker",props:["events"],data:function(){return{marker:void 0}},computed:{optionsProps:function(){var t=Object.assign({},this.$attrs);for(var e in t)t[e]||delete t[e];return Object.keys(t).length>0?t:void 0}},mounted:function(){var t=this;this.getMap((function(e){t.marker=new AMap.Marker(t.optionsProps),e.add(t.marker)}))},destroyed:function(){var t=this;this.marker&&this.getMap((function(e){e.remove(t.marker)}))},methods:{},inject:["getMap"],render:function(t,e){return null}}),x=$,A=Object(d["a"])(x,v,b,!1,null,null,null),C=A.exports,E={name:"VmapPlugin",props:["name","events"],data:function(){return{marker:void 0}},computed:{optionsProps:function(){var t=Object.assign({},this.$attrs);for(var e in t)t[e]||delete t[e];return Object.keys(t).length>0?t:void 0}},mounted:function(){var t=this;this.getMap((function(e){AMap.plugin(["AMap.".concat(t.name)],(function(){t.marker=new AMap[t.name](t.optionsProps),e.addControl(t.marker)}))}))},destroyed:function(){var t=this;this.marker&&this.getMap((function(e){e.removeControl(t.marker)}))},methods:{},inject:["getMap"],render:function(t,e){return null}},S=E,D=Object(d["a"])(S,g,y,!1,null,null,null),T=D.exports,F=n("862d"),L=n.n(F),V={name:"VmapAutoComplete",props:[],data:function(){return{component:void 0}},computed:{optionsProps:function(){var t=Object.assign({},this.$attrs);for(var e in t)t[e]||delete t[e];return Object.keys(t).length>0?t:void 0}},mounted:function(){var t=this;this.getMap((function(e){AMap.plugin(["AMap.AutoComplete"],(function(){t.component=new AMap.AutoComplete(t.optionsProps),console.log("thisComponent======================"),console.log(t.component),console.log("======================")}))}))},destroyed:function(){},methods:{},inject:["getMap"],render:function(t,e){return null}},B=[P,C,T,V],J=function(t,e){t.prototype.$amapLoader=function(){return L.a.load(e)},B.forEach((function(e){return t.component(e.name,e)}))},R={install:J},W={key:"608d75903d29ad471362f8c58c550daf",plugins:[],version:"2.0"},q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-block"},[n("p",{staticClass:"demo-block--title"},[t._v(t._s(t.title)+" "),t.doc?n("a",{attrs:{href:t.doc,target:"_blank"}},[t._v("(文档)")]):t._e()]),t._t("default")],2)},U=[],z={name:"DemoBlock",props:["title","doc"]},G=z,H=(n("d656"),Object(d["a"])(G,q,U,!1,null,"4f7ac3e2",null)),I=H.exports;o["a"].config.productionTip=!1,o["a"].component(I.name,I),o["a"].use(R,W),new o["a"]({router:s,store:w,render:function(t){return t(m)}}).$mount("#app")},d656:function(t,e,n){"use strict";var o=n("7055"),r=n.n(o);r.a}});
//# sourceMappingURL=app.dd390934.js.map