(function(e){function t(t){for(var a,r,i=t[0],u=t[1],c=t[2],p=0,d=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},s={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-45187ee0":"cda12156","chunk-7659fe53":"1a7ec79e","chunk-030411bc":"5f72d098","chunk-0a8e27a0":"3582467e","chunk-3bf83d90":"3c5c13ab","chunk-4305578a":"51b89865","chunk-46bb8a78":"4b6c5986","chunk-5d26626b":"2ed5545a","chunk-73169ffd":"badc34b0","chunk-7f8d04ad":"0c59dc36","chunk-897b4b40":"d9464793","chunk-a9458ed8":"da22cee1","chunk-2d0d36c6":"9289dc9a","chunk-b82475c8":"48fbc887","chunk-d7c54d2a":"ad51cd3d","chunk-d90d1c06":"70165196","chunk-50954566":"62636737","chunk-6ea2e86d":"4178caad"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-45187ee0":1,"chunk-7659fe53":1,"chunk-0a8e27a0":1,"chunk-46bb8a78":1,"chunk-73169ffd":1,"chunk-7f8d04ad":1,"chunk-897b4b40":1,"chunk-a9458ed8":1,"chunk-50954566":1,"chunk-6ea2e86d":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-45187ee0":"90272efe","chunk-7659fe53":"2f17c9f2","chunk-030411bc":"31d6cfe0","chunk-0a8e27a0":"3eba766d","chunk-3bf83d90":"31d6cfe0","chunk-4305578a":"31d6cfe0","chunk-46bb8a78":"91c59f2d","chunk-5d26626b":"31d6cfe0","chunk-73169ffd":"08410fff","chunk-7f8d04ad":"32f50649","chunk-897b4b40":"d841ac9e","chunk-a9458ed8":"5c974453","chunk-2d0d36c6":"31d6cfe0","chunk-b82475c8":"31d6cfe0","chunk-d7c54d2a":"31d6cfe0","chunk-d90d1c06":"31d6cfe0","chunk-50954566":"88c17e0b","chunk-6ea2e86d":"20376854"}[e]+".css",s=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===a||p===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],p=c.getAttribute("data-href");if(p===a||p===s)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],l.parentNode.removeChild(l),n(o)},l.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=i(e);var d=new Error;c=function(t){p.onerror=p.onload=null,clearTimeout(l);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=p;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3804:function(e,t,n){},"557b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view",{attrs:{id:"application"}})},s=[],o=n("5530"),i=n("2f62"),u={methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["readToken"])),Object(i["c"])(["loadSessionUser"])),computed:Object(o["a"])({},Object(i["d"])(["token"])),mounted:function(){var e=n("1157");window.$=e,this.loadSessionUser()},created:function(){this.readToken()}},c=u,p=n("0c7c"),d=Object(p["a"])(c,r,s,!1,null,null,null),l=d.exports,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["a"].use(m["a"]);var _=[{path:"/",name:"Login",component:function(){return Promise.all([n.e("chunk-a9458ed8"),n.e("chunk-6ea2e86d")]).then(n.bind(null,"a55b"))}},{path:"/Login",component:function(){return Promise.all([n.e("chunk-a9458ed8"),n.e("chunk-6ea2e86d")]).then(n.bind(null,"a55b"))}},{path:"/registro/:id",component:function(){return n.e("chunk-45187ee0").then(n.bind(null,"5588"))}},{path:"/admin",name:"Dashboard",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-73169ffd")]).then(n.bind(null,"7277"))},meta:{protectedRoute:!0}},{path:"/perfil",name:"Profile",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-897b4b40")]).then(n.bind(null,"c66d"))},meta:{protectedRoute:!0}},{path:"/registro",name:"UserRegister",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-a9458ed8"),n.e("chunk-2d0d36c6")]).then(n.bind(null,"5d67"))},meta:{protectedRoute:!0}},{path:"/cartera",name:"Wallet",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-5d26626b")]).then(n.bind(null,"4dd7"))},meta:{protectedRoute:!0}},{path:"/cartera/:id",name:"UserWallet",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-030411bc")]).then(n.bind(null,"b961"))},meta:{protectedRoute:!0}},{path:"/vision-usuario",name:"UserVision",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-0a8e27a0")]).then(n.bind(null,"6202"))},meta:{protectedRoute:!0}},{path:"/vision-usuario/:id",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-0a8e27a0")]).then(n.bind(null,"6202"))},meta:{protectedRoute:!0}},{path:"/listar-usuarios",name:"Users",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-3bf83d90")]).then(n.bind(null,"ed81"))},meta:{protectedRoute:!0}},{path:"/edicion-usuario/:id",name:"UserEdit",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-d90d1c06")]).then(n.bind(null,"da5c"))},meta:{protectedRoute:!0}},{path:"/comisiones",name:"Commissions",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-4305578a")]).then(n.bind(null,"f94e"))},meta:{protectedRoute:!0}},{path:"/alianzas",name:"Partnerships",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-7f8d04ad")]).then(n.bind(null,"a02f"))},meta:{protectedRoute:!0}},{path:"/cargar-comision/:id",name:"LoadCommissions",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-d7c54d2a")]).then(n.bind(null,"26e9"))},meta:{protectedRoute:!0}},{path:"/comisiones-cargadas/:id",name:"CommissionsCharged",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-b82475c8")]).then(n.bind(null,"4b48"))},meta:{protectedRoute:!0}},{path:"/permisos",name:"Permissions",component:function(){return Promise.all([n.e("chunk-7659fe53"),n.e("chunk-46bb8a78")]).then(n.bind(null,"2a2e"))},meta:{protectedRoute:!0}},{path:"*",component:function(){return Promise.all([n.e("chunk-a9458ed8"),n.e("chunk-50954566")]).then(n.bind(null,"8cdb"))}}],h=new m["a"]({mode:"history",base:"/",routes:_});h.beforeEach((function(e,t,n){var a=e.matched.some((function(e){return e.meta.protectedRoute}));a&&null===localStorage.getItem("token")?n("/"):n()}));var f=h,k=(n("159b"),n("b0c0"),n("ac1f"),n("841c"),n("bc3a")),g=n.n(k),b=n("1da1"),w=(n("96cf"),n("99af"),{namespaced:!0,state:{user:{loaded:!1,loaded_lines:!1,loaded_sponsors:!1,id:"",name:"",last_name:"",id_card:"0",primary_phone:"",secondary_phone:"",whatsapp:"",city_id:"",city_name:"",department:"",country:"",country_name:"",email:"",adress:"",lines:{},sponsor_user:"",num_paid:0,current_money:0,sponsors:{},total_sp:0,num_sponsors:0,active_lines:0},wallet:{loaded:!1,money:0,paid_money:0,num_paid:0,current_money:0}},mutations:{loadUser:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=function(){e.user.loaded=!1,e.user.loaded_lines=!1,e.user.loaded_sponsors=!1,e.user.id="",e.user.name="",e.user.last_name="",e.user.id_card="",e.user.lines={},e.user.total_sp=0,e.user.num_sponsors=0,e.user.active_lines=0,e.user.sponsor_user=0},a(),r=j.state.api_url+"/api/users/list/".concat(t),n.next=5,g.a.get(r,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.user.id=t.data.id,e.user.name=t.data.name,e.user.last_name=t.data.last_name,e.user.id_card=t.data.id_card,e.user.primary_phone=t.data.primary_phone,e.user.secondary_phone=t.data.secondary_phone,e.user.whatsapp=t.data.whatsapp,e.user.city_id=t.data.city_id,e.user.city_name=t.data.city.city_name,e.user.department=t.data.city.department,e.user.country=t.data.city.country_code,e.user.country_name=t.data.city.country_name,e.user.email=t.data.email,e.user.adress=t.data.adress,e.user.sponsor_user=t.data.sponsor_user,e.user.num_paid=t.data.num_paid,e.user.current_money=t.data.current_money,e.user.root_file=t.data.root_file,e.user.card_file=t.data.card_file,e.user.loaded=!0})).catch((function(t){a(),console.log(t.response),404==t.response.status&&(e.user.loaded=!0)}));case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},loadLines:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=j.state.api_url+"/api/users/".concat(t,"/lines"),n.next=3,g.a.get(a,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.user.loaded_lines=!0,e.user.lines={1:t.data.line_1,2:t.data.line_2,3:t.data.line_3,4:t.data.line_4,5:t.data.line_5},e.user.total_sp=parseInt(t.data.line_1)+parseInt(t.data.line_2)+parseInt(t.data.line_3)+parseInt(t.data.line_4)+parseInt(t.data.line_5),e.user.lines[1]>0&&(e.user.active_lines=1),e.user.lines[2]>0&&e.user.active_lines++,e.user.lines[3]>0&&e.user.active_lines++,e.user.lines[4]>0&&e.user.active_lines++,e.user.lines[5]>0&&e.user.active_lines++}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},loadSponsors:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=j.state.api_url+"/api/users/".concat(t,"/sponsors"),n.next=3,g.a.get(a,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.user.loaded_sponsors=!0,e.user.sponsors={1:{code:t.data.sp_user_1,name:t.data.sp_user_1_name},2:{code:t.data.sp_user_2,name:t.data.sp_user_2_name},3:{code:t.data.sp_user_3,name:t.data.sp_user_3_name},4:{code:t.data.sp_user_4,name:t.data.sp_user_4_name},5:{code:t.data.sp_user_5,name:t.data.sp_user_5_name}},e.user.sponsors[1].code&&(e.user.num_sponsors=1),e.user.sponsors[2].code&&e.user.num_sponsors++,e.user.sponsors[3].code&&e.user.num_sponsors++,e.user.sponsors[4].code&&e.user.num_sponsors++,e.user.sponsors[5].code&&e.user.num_sponsors++})).catch((function(e){console.log(e.response)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},loadWallet:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=j.state.api_url+"/api/users/".concat(t,"/wallet"),e.wallet.loaded=!1,n.next=4,g.a.get(a,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.wallet.loaded=!0,e.wallet.money=t.data.money,e.wallet.paid_money=t.data.paid_money,e.wallet.num_paid=t.data.num_paid,e.wallet.current_money=t.data.current_money})).catch((function(e){console.log(e.response)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()}},actions:{getUsersLine:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=t.line,r=t.user_id,s=j.state.api_url+"/api/users/".concat(r,"/line/").concat(a),n.next=6,g.a.get(s,{headers:{Authorization:"Bearer "+j.state.token}});case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))()},userCommissions:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/users/".concat(t.id,"/commissions"),n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},userPayments:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/users/".concat(t.id,"/payments"),n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},registerUser:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/users/register",n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},updateUser:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/users/update/".concat(t.id),n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},loadFiles:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/users/update/".concat(t.id),n.next=4,g.a.post(a,t.form,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},showFile:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/users/".concat(t.id,"/file/").concat(t.file),n.abrupt("return",g.a.get(a,{headers:{Authorization:"Bearer "+j.state.token}}));case 3:case"end":return n.stop()}}),n)})))()},changePassword:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/users/change_password/".concat(t.id),n.next=4,g.a.post(a,t.password,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},resetePassword:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/users/reset_password/".concat(t.id),n.next=4,g.a.post(a,null,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()}}}),y={namespaced:!0,state:{error:null},mutations:{setError:function(e,t){e.error="401"}},actions:{login:function(e,t){e.commit;var n=j.state.api_url+"/api/auth/login";return g.a.post(n,t)},logout:function(e){var t=e.commit,n=j.state.api_url+"/api/auth/logout";g.a.post(n,null,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(){t("setToken",null,{root:!0}),localStorage.removeItem("token"),window.location.href="/"})).catch((function(e){t("setError",e.response),localStorage.removeItem("token"),window.location.href="/"}))}}},v=(n("7db0"),n("4de4"),{namespaced:!0,state:{countries:[],departments:[],cities_department:[],cities:[]},mutations:{getAllCountries:function(e,t){var n=j.state.api_url+"/api/countries/list";g.a.get(n,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.countries=t.data})).catch((function(e){return console.log(e.response)}))},getCountryCities:function(e,t){var n=j.state.api_url+"/api/countries/cities/".concat(t);g.a.get(n,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.cities=t.data,e.departments=[],e.cities_department=t.data,t.data.forEach((function(t){var n=e.departments.find((function(e){return e.name===t.department}));n||e.departments.push({name:t.department})}))})).catch((function(e){return console.log(e)}))},filterCities:function(e,t){e.cities_department=[];var n=e.cities.filter((function(e){return e.department===t}));e.cities_department=n}},actions:{getCity:function(e,t){e.commit;console.log(t)}}}),R={namespaced:!0,state:{comm_data:{loaded:!1,total_comm_money:0,total_payments_money:0,pending_coms_money:0,users_comm_money:0,company_comm_money:0}},mutations:{infoCommissions:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=j.state.api_url+"/api/commission/general",t.next=3,g.a.get(n,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){200==t.status&&(e.comm_data.total_comm_money=t.data.total_comm_money,e.comm_data.total_payments_money=t.data.total_payments_money,e.comm_data.users_comm_money=t.data.users_comm_money,e.comm_data.company_comm_money=t.data.company_comm_money,e.comm_data.pending_coms_money=t.data.users_comm_money-t.data.total_payments_money,e.comm_data.loaded=!0)})).catch((function(e){return console.error(e.response)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()}},actions:{searchCommissions:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/search/commissions",n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},searchPayments:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/search/payments",n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},paymentCommission:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/commission/payment",n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()}}},x={namespaced:!0,state:{sale_point:{id:"",name:"",nit:"",city_id:"",city_name:"",department:"",adress:"",representative:"",contact_phone:"",percent_gain:"",start_date:"",end_date:"",type:"",modality:"",options:[],state:"",code:"",created_at:"",password:"",password_confirmation:""},loaded:!1,commissions:[],sale_points:[]},mutations:{loadSalePoint:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.sale_point.id="",e.sale_point.city_name="",a=j.state.api_url+"/api/salepoints/list/".concat(t),n.next=5,g.a.post(a,null,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.sale_point.id=t.data.id,e.sale_point.name=t.data.name,e.sale_point.nit=t.data.nit,e.sale_point.total_com=t.data.total_com,e.sale_point.payments=t.data.payments,e.sale_point.pending_payments=t.data.pending_payments,e.sale_point.city_id=t.data.city_id,e.sale_point.city_name=t.data.city_name,e.sale_point.department=t.data.department,e.sale_point.adress=t.data.adress,e.sale_point.representative=t.data.representative,e.sale_point.contact_phone=t.data.contact_phone,e.sale_point.percent_gain=t.data.percent_gain,e.sale_point.start_date=t.data.start_date,e.sale_point.end_date=t.data.end_date,e.sale_point.type=t.data.type,e.sale_point.modality=t.data.modality,e.sale_point.options=t.data.options,e.sale_point.state=t.data.state,e.sale_point.code=t.data.code,e.sale_point.created_at=t.data.created_at})).catch((function(e){console.log(e.response)}));case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},loadSalePoints:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.loaded_sale_points=!1,a=j.state.api_url+"/api/search/sale_points",n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.loaded=!0,e.sale_points=t.data})).catch((function(e){console.log(e)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},loadCommissions:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=j.state.api_url+"/api/salepoints/".concat(t,"/commissions"),n.next=3,g.a.get(a,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){for(var n=t.data,a=[],r=0;r<n.length;r++){var s,o=n[r],i={};s!=o.year&&(s=o.year,i.year=s,i.money=0,i.months=n.filter((function(e){return e.year==s})),i.months.forEach((function(e){i.money+=e.money})),a.push(i))}e.commissions=a})).catch((function(e){return console.log(e.response)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()}},actions:{searchPayments:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/salepoints/".concat(t.id,"/payments/list"),n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},createSalePoint:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/salepoints/create",n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},updateSalePoint:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/salepoints/update/".concat(t.id),n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},createPercentOption:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/salepoints/percent/".concat(t.id),n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},deletePercentOption:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/salepoints/percent/delete/".concat(t),n.next=4,g.a.post(a,null,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},createMoneyOption:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/salepoints/option/".concat(t.id),n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},deleteMoneyOption:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/salepoints/option/delete/".concat(t),n.next=4,g.a.post(a,null,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()}}},O={namespaced:!0,state:{users:[],roles:[],permissions:[]},mutations:{getRoles:function(e){var t=j.state.api_url+"/api/roles";g.a.get(t,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.roles=t.data})).catch((function(e){return console.log(e.response)}))},getUsersWithRoles:function(e){var t=j.state.api_url+"/api/roles/users";g.a.get(t,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.users=t.data})).catch((function(e){return console.log(e.response)}))},getPermissions:function(e){var t=j.state.api_url+"/api/roles/permissions";g.a.get(t,{headers:{Authorization:"Bearer "+j.state.token}}).then((function(t){e.permissions=t.data})).catch((function(e){return console.log(e)}))}},actions:{registerRoleToUser:function(e,t){e.commit;var n=j.state.api_url+"/api/roles/asign_user";return g.a.post(n,{role_id:t.role_id,user_id:t.user_id},{headers:{Authorization:"Bearer "+j.state.token}})}}},A={namespaced:!0,mutations:{},actions:{createSale:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/sale/create",n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},searchSales:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=j.state.api_url+"/api/search/sales",n.next=4,g.a.post(a,t,{headers:{Authorization:"Bearer "+j.state.token}});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()}}};a["a"].use(i["a"]);var j=new i["a"].Store({modules:{user:w,auth:y,country:v,commission:R,sale_point:x,permission:O,sale:A},state:{token:null,api_url:"https://comercializadora3b.com",session_user:{id:"",name:"",last_name:"",city_id:"",sp_user_code:"",sp_user_name:"",root_file:"",card_file:"",sponsors:{},permissions:{},pages:{},total_sp:0,num_sponsors:0},session_lines:{loaded:!1,lines:{},total_users:0,active_lines:0},session_wallet:{money:0,paid_money:0,num_paid:0,current_money:0},session_sponsors:{loaded:!1,num_sponsors:0,sponsors:{}},session_sale_points:{loaded:!1,sale_points:{}},alphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"]},mutations:{setToken:function(e,t){e.token=t},loadSessionUser:function(e,t){if(!e.session_user.id&&e.token||t&&t.reload){var n=e.api_url+"/api/auth/me";g.a.post(n,"",{headers:{Authorization:"Bearer "+e.token}}).then((function(t){e.session_user=t.data.user,e.session_user.pages={},t.data.user.permissions.forEach((function(t){switch(t.name){case"users.show":e.session_user.pages.user_list=!0,e.session_user.pages.user_view=!0;break;case"users.edit_sponsor":e.session_user.pages.user_sp_edit=!0;break;case"users.edit":e.session_user.pages.user_edit=!0;break;case"salepoint.show":e.session_user.pages.aliance=!0;break;case"salepoint.create":e.session_user.pages.aliance_create=!0;break;case"salepoint.edit":e.session_user.pages.aliance_edit=!0;break;case"salepoint.asignuser":e.session_user.pages.aliance_asignuser=!0;break;case"salepoint.removeuser":e.session_user.pages.aliance_removeuser=!0;break;case"salepoint.payment":e.session_user.pages.aliance_payment=!0;break;case"salepoint.create.payment":e.session_user.pages.aliance_createpayment=!0;break;case"commission.show":e.session_user.pages.commision=!0;break;case"commission.payment":e.session_user.pages.commision_payment=!0;break;case"commission.create_many":e.session_user.pages.commision_many=!0;break;case"payment.show":e.session_user.pages.payment=!0;break;case"role.manage":e.session_user.pages.role=!0;break}})),e.loaded_user=0})).catch((function(t){if(console.log(t),401==t.response.status){var n=e.api_url+"/api/auth/logout";g.a.post(n,"",{headers:{Authorization:"Bearer "+e.token}}).then((function(){e.token=null,localStorage.removeItem("token"),window.location.href="/"})).catch((function(e){localStorage.removeItem("token"),window.location.href="/"}))}}))}else e.loaded_user++},loadSessionWallet:function(e){var t=e.api_url+"/api/users/".concat(e.session_user.id,"/wallet");return g.a.get(t,{headers:{Authorization:"Bearer "+e.token}}).then((function(t){"error"==t.data.status?(e.session_wallet.money=0,e.session_wallet.paid_money=0,e.session_wallet.num_paid=0,e.session_wallet.current_money=0):(e.session_wallet.money=t.data.money,e.session_wallet.paid_money=t.data.paid_money,e.session_wallet.num_paid=t.data.num_paid,e.session_wallet.current_money=t.data.current_money)})).catch((function(e){console.log(e.response)}))},loadSessionLines:function(e,t){if(!e.session_sponsors.loaded||t&&t.reload){e.session_lines.loaded=!1;var n=e.api_url+"/api/users/".concat(e.session_user.id,"/lines");return g.a.get(n,{headers:{Authorization:"Bearer "+e.token}}).then((function(t){e.session_lines.total_users=parseInt(t.data.total),e.session_lines.active_lines=5,e.session_lines.loaded=!0})).catch((function(e){console.log(e.response)}))}},loadSessionSponsors:function(e){if(!e.session_sponsors.loaded){var t=e.api_url+"/api/users/".concat(e.session_user.id,"/sponsors");return g.a.get(t,{headers:{Authorization:"Bearer "+e.token}}).then((function(t){e.session_sponsors.sponsors={1:{code:t.data.sp_user_1,name:t.data.sp_user_1_name},2:{code:t.data.sp_user_2,name:t.data.sp_user_2_name},3:{code:t.data.sp_user_3,name:t.data.sp_user_3_name},4:{code:t.data.sp_user_4,name:t.data.sp_user_4_name},5:{code:t.data.sp_user_5,name:t.data.sp_user_5_name}},e.session_sponsors.sponsors[1].code&&(e.session_sponsors.num_sponsors=1),e.session_sponsors.sponsors[2].code&&e.session_sponsors.num_sponsors++,e.session_sponsors.sponsors[3].code&&e.session_sponsors.num_sponsors++,e.session_sponsors.sponsors[4].code&&e.session_sponsors.num_sponsors++,e.session_sponsors.sponsors[5].code&&e.session_sponsors.num_sponsors++,e.session_sponsors.loaded=!0})).catch((function(e){return console.log(e)}))}},loadSessionSalePoints:function(e,t){if(!e.session_sale_points.loaded||t&&t.reload){var n="";t&&(n={search:t.search});var a=e.api_url+"/api/users/".concat(e.session_user.id,"/sale_points");g.a.post(a,n,{headers:{Authorization:"Bearer "+e.token}}).then((function(t){e.session_sale_points.loaded=!0,e.session_sale_points.sale_points=t.data})).catch((function(e){console.log(e)}))}}},actions:{readToken:function(e){var t=e.commit;localStorage.getItem("token")?t("setToken",localStorage.getItem("token")):t("setToken",null)}}}),z=n("f9d5"),B=n.n(z),P=n("130e");n("ab8b"),n("4989"),n("f507"),n("4413"),n("b9b1"),n("1e4b"),n("3804"),n("819a"),n("557b");a["a"].config.productionTip=!1,a["a"].use(P["a"],g.a),a["a"].use(B.a),a["a"].use(n("2ead")),new a["a"]({mode:"history",router:f,store:j,render:function(e){return e(l)}}).$mount("#app")},"819a":function(e,t,n){}});
//# sourceMappingURL=app.5dd45dae.js.map