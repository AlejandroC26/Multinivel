(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36f8da82"],{1171:function(t,s,e){"use strict";e("2999")},2999:function(t,s,e){},"3d13":function(t,s,e){"use strict";var a=function(){var t=this,s=t._self._c;return s("aside",[t._m(0),s("div",{staticClass:"sidebar"},[s("router-link",{class:{active:t.routeActive("admin")},attrs:{to:"/admin"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("")]),s("h3",[t._v("Inicio")])]),s("router-link",{class:{active:t.routeActive("perfil")},attrs:{to:"/perfil"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("")]),s("h3",[t._v("Perfíl")])]),"lunes"==t.dia||"jueves"==t.dia?s("router-link",{class:{active:t.routeActive("registro")},attrs:{to:"/registro"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("")]),s("h3",[t._v("Nuevo Registro")])]):t._e(),t.session_user.pages.user_view||t.session_user.pages.user_list?s("hr",{staticStyle:{color:"var(--color-dark)"}}):t._e(),t.session_user.pages.user_view?s("router-link",{class:{active:t.routeActive("vision-usuario")},attrs:{to:"/vision-usuario"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("")]),s("h3",[t._v("Visión de Usuario")])]):t._e(),t.session_user.pages.user_list?s("router-link",{class:{active:t.routeActive("listar-usuarios")},attrs:{to:"/listar-usuarios"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("")]),s("h3",[t._v("Listar Usuarios")])]):t._e(),s("hr",{staticStyle:{color:"var(--color-dark)"}}),s("router-link",{class:{active:t.routeActive("devoluciones")},attrs:{to:"/devoluciones"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("")]),s("h3",[t._v("Devoluciones")])]),s("hr",{staticStyle:{color:"var(--color-dark)"}}),t.session_user.pages.role?s("router-link",{class:{active:t.routeActive("permisos")},attrs:{to:"/permisos"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("")]),s("h3",[t._v("Permisos")])]):t._e(),s("a",{attrs:{href:"#"},on:{click:function(s){return t.logout()}}},[s("span",{staticClass:"material-icons-sharp"},[t._v("")]),s("h3",[t._v("Logout")])])],1)])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"top"},[s("div",{staticClass:"logo"},[s("h2",[s("b",[t._v("PAF APP")])])]),s("div",{staticClass:"close",attrs:{id:"close-btn"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("close")])])])}],n=e("2f62"),r={data:function(){return{isActive:!0,dia:""}},methods:{...Object(n["b"])("auth",["logout"]),routeActive(t){var s=this.$router.history.current.path.replace(/\//g,"");return t==s},validateUrlImage(){let t=this.$route.path;return t.split("/").length>2?"../logo3b.png":"logo3b.png"}},mounted(){const t=document.querySelector("aside"),s=document.querySelector("#menu-btn"),e=document.querySelector("#close-btn");function a(){let t=new Date,s={weekday:"long",year:"numeric",month:"long",day:"numeric"},e=t.toLocaleDateString("es-MX",s).split(",");return e[0]}s.addEventListener("click",()=>{t.style.display="block"}),e.addEventListener("click",()=>{t.style.display="none"}),this.dia=a()},computed:{...Object(n["d"])(["session_user"])}},o=r,l=e("0c7c"),c=Object(l["a"])(o,a,i,!1,null,null,null);s["a"]=c.exports},8084:function(t,s,e){"use strict";var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"right"},[s("div",{staticClass:"top"},[t._m(0),s("div",{staticClass:"profile"},[s("div",{staticClass:"info"},[s("p",[t._v("Bienvenido, "),s("b",[t._v(t._s(t.session_user.name+" "+t.session_user.last_name))])])])])]),t.session_lines.loaded?s("div",{staticClass:"sales-analytics mt-3"},[s("h2",[t._v("Niveles ")]),t._l(9,(function(e){return s("div",{key:e,staticClass:"item",on:{click:function(s){return t.showLine(e)}}},[t._m(1,!0),s("div",{staticClass:"right"},[s("div",{staticClass:"info"},[s("h3",[t._v(t._s(t.renderNumLinea(e)))])]),s("h3",[t._v(t._s(t.session_lines.lines[e]))])])])}))],2):s("div",[t.session_lines.loaded?s("h2",[s("p",[t._v("No hay líneas activas")])]):s("div",{staticStyle:{display:"flex","justify-content":"center"}},[t._m(2)])]),s("div",{staticClass:"modal fade",attrs:{id:"modal-lines",tabindex:"-1","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(3),s("div",{staticClass:"modal-body"},[t.loading_line?s("div",{staticStyle:{display:"flex","justify-content":"center"}},[t._m(4)]):t._e(),s("div",{class:{dnone:t.loading_line}},[t._m(5)])])])])])])},i=[function(){var t=this,s=t._self._c;return s("button",{attrs:{id:"menu-btn"}},[s("span",{staticClass:"material-icons-sharp"},[t._v("menu")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"icon"},[s("span",{staticClass:"material-icons-sharp active"},[t._v("")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"lds-facebook"},[s("div"),s("div"),s("div")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"modal-header"},[s("h3",{staticClass:"modal-title",attrs:{id:"active_line"}}),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"lds-facebook"},[s("div"),s("div"),s("div")])},function(){var t=this,s=t._self._c;return s("table",{staticClass:"table table-striped",staticStyle:{border:"none"},attrs:{id:"table-line"}},[s("thead",[s("tr",[s("th",[t._v("Código")]),s("th",[t._v("Nombre")]),s("th",[t._v("Fecha Ingreso")])])])])}],n=(e("14d9"),e("2f62")),r={components:{},data(){return{search:"",count_lines:0,active_line:!1,loading_line:!1}},methods:{showLine(t){this.loading_line=!0;let s=document.getElementById("active_line");s.innerHTML=this.renderNumLinea(t),$("#modal-lines").modal("show"),this.getUsersLine({user_id:this.session_user.id,line:t}).then(t=>{var s=[];t.data.forEach(t=>{var e=this.formatDate(t.created_at);let a={id:t.id,name:t.name,date:e};s.push(a)}),this.loading_line=!1,$("#table-line").DataTable({responsive:!0,autoWidth:!1,lengthChange:!1,info:!1,destroy:!0,data:s,columns:[{data:"id"},{data:"name"},{data:"date"}]})})},renderNumLinea(t){switch(t){case 1:return"Nivel 1";case 2:return"Nivel 2";case 3:return"Nivel 3";case 5:return"Nivel 4";case 4:return"Nivel 5";case 6:return"Nivel 6";case 7:return"Nivel 7";case 8:return"Nivel 8";case 9:return"Nivel 9";default:return""}},formatDate(t){var s=new Date(t),e=s.getFullYear(),a=s.getMonth()+1,i=s.getDate();return a<10&&(a="0"+a),i<10&&(i="0"+i),e+"/"+a+"/"+i},...Object(n["b"])("user",["getUsersLine"]),...Object(n["c"])(["loadSessionLines"])},computed:{...Object(n["d"])(["session_user"]),...Object(n["d"])(["session_lines"])},mounted(){let t=setInterval(()=>{if(this.session_user.id)return this.loadSessionLines(),clearInterval(t)})}},o=r,l=(e("1171"),e("0c7c")),c=Object(l["a"])(o,a,i,!1,null,null,null);s["a"]=c.exports},ed81:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"application-container"},[s("Aside"),s("main",[s("h1",[t._v("Lista de Usuarios")]),s("div",{staticClass:"info-card"},[s("p",[t._v("Búsqueda personalizada")]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 mb-3"},[s("small",[t._v("Tipo de búsqueda")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"form-control",attrs:{name:""},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.state=s.target.multiple?e:e[0]}}},[s("option",{attrs:{value:"Activo"}},[t._v("Activo")]),s("option",{attrs:{value:"Inactivo"}},[t._v("Inactivo")])])])])]),s("div",{staticClass:"info-card"},[s("p",[t._v("Listado de usuarios")]),s("hr"),t.loading_users?s("div",{staticStyle:{display:"flex","justify-content":"center"}},[t._m(0)]):t._e(),s("div",{class:{dnone:t.loading_users}},[s("table",{staticClass:"table",attrs:{id:"table-users"}},[t._m(1),s("tbody",[t._l(t.users,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.name))]),s("td",[t._v(t._s(e.id_card))]),s("td",[t._v(t._s(e.state))]),s("td",[e.activation_date?s("span",[t._v(t._s(t.formatDate(e.activation_date)))]):s("span",[t._v("N/A")])]),s("td",[t._v(t._s(t.formatDate(e.created_at)))]),s("td",[e.sp_user_1_name?s("span",[t._v(t._s(e.sp_user_1_name))]):s("span",[t._v("Main")])]),s("td",[s("div",{staticClass:"btn-group"},[t.session_user.pages.user_edit?s("router-link",{staticClass:"btn btn-primary",staticStyle:{display:"inline-flex","align-items":"center"},attrs:{to:"/edicion-usuario/"+e.id}},[s("span",{staticClass:"material-icons-sharp active",staticStyle:{"font-size":"1.2rem"}},[t._v("edit")])]):t._e(),s("router-link",{staticClass:"btn btn-secondary",staticStyle:{display:"inline-flex","align-items":"center"},attrs:{to:"/vision-usuario/"+e.id}},[s("span",{staticClass:"material-icons-sharp active",staticStyle:{"font-size":"1.2rem"}},[t._v("visibility")])])],1)])])})),t.users.length<=0?s("tr",[s("td",{attrs:{colspan:"8"}},[s("center",[t._v("No se encontraron coincidencias")])],1)]):t._e()],2)])])])]),s("Right")],1)},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"lds-facebook"},[s("div"),s("div"),s("div")])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",[t._v("Código")]),s("th",[t._v("Nombre")]),s("th",[t._v("Documento")]),s("th",[t._v("Estado")]),s("th",[t._v("Activación")]),s("th",[t._v("Ingreso")]),s("th",[t._v("Patrocinador")]),s("th",[t._v("Acción")])])])}],n=e("bc3a"),r=e.n(n),o=e("3d13"),l=e("8084"),c=e("2f62"),d={name:"",components:{Aside:o["a"],Right:l["a"]},data:function(){return{state:"Activo",count_consult:0,users:[],loading_users:!1}},methods:{searchUser(){if(this.count_consult++,this.loading_users=!0,setTimeout(()=>{this.count_consult=0},1e3),this.count_consult>20)return;let t=this.api_url+"/api/users/state/"+this.state;r.a.get(t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(t=>{this.users=t.data,this.loading_users=!1}).catch(t=>console.log(t))},formatDate(t){var s=new Date(t),e=s.getFullYear(),a=s.getMonth()+1,i=s.getDate();return a<10&&(a="0"+a),i<10&&(i="0"+i),e+"/"+a+"/"+i},...Object(c["b"])("user",["getUsersLine"]),...Object(c["c"])(["loadSessionUser"])},mounted:function(){$(".modal-backdrop").remove(),this.searchUser(),this.loadSessionUser()},computed:{...Object(c["d"])(["session_user"]),...Object(c["d"])(["api_url"])},watch:{state:function(){this.searchUser()}}},u=d,v=e("0c7c"),_=Object(v["a"])(u,a,i,!1,null,null,null);s["default"]=_.exports}}]);
//# sourceMappingURL=chunk-36f8da82.33a0ab37.js.map