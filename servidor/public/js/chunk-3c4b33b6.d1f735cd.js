(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c4b33b6"],{1171:function(e,s,t){"use strict";t("2999")},2999:function(e,s,t){},"2a2e":function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e._self._c;return s("div",{staticClass:"application-container"},[s("Aside"),s("main",[s("h1",{staticClass:"mb-3"},[e._v("Permisos")]),s("div",{staticClass:"info-card"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"add-button",on:{click:function(s){return e.showNewRolModal()}}},[e._m(0)])]),s("div",{staticClass:"col-sm-8"},[s("div",{staticClass:"add-button",on:{click:function(s){return e.showNewSpecialUserModal()}}},[e._m(1)])])]),s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-md-4"},[e._m(2),e._l(e.roles,(function(t){return s("div",{key:t.id,staticClass:"role-card mb-1"},[s("div",{on:{click:function(s){return e.showManageRoleModal(t)}}},[e._v(e._s(t.name))]),"Admin"!=t.name?s("div",{on:{click:function(s){return e.deleteRole(t)}}},[s("span",{staticClass:"material-icons-sharp active"},[e._v("")])]):s("div")])}))],2),s("div",{staticClass:"col-md-8"},[e._m(3),e._l(e.users,(function(t){return s("div",{key:t.id,staticClass:"role-user-card mt-2",on:{click:function(s){return e.showManageRolesUser(t)}}},[s("div",[s("b",{staticStyle:{color:"var(--color-primary)"}},[e._v(e._s(t.id)+".")]),e._v(" "+e._s(t.name+" "+t.last_name))]),s("div",{staticStyle:{display:"flex","justify-content":"flex-end",gap:"5px"}},e._l(t.roles,(function(t){return s("div",{key:t.id,staticClass:"roles-section"},[s("span",{staticClass:"count"},[e._v(e._s(t.name))])])})),0)])}))],2)])])]),s("Right"),s("div",{staticClass:"modal fade",attrs:{id:"modal-new-role",tabindex:"-1","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[e._m(4),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 mb-2"},[s("p",[e._v("Nombre")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.role.name,expression:"role.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.role.name},on:{input:function(s){s.target.composing||e.$set(e.role,"name",s.target.value)}}})])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",on:{click:function(s){return e.registerRole()}}},[e._v("Registrar")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"modal-new-special-user",tabindex:"-1","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[e._m(5),s("div",{staticClass:"modal-body"},[s("p",[e._v("Seleccionar Usuario")]),s("UserSearch",{attrs:{search:e.resultSearch}}),s("hr"),s("p",[e._v("Roles")]),s("div",{staticClass:"row"},e._l(e.roles,(function(t){return s("div",{key:"a-"+t.id,staticClass:"col-md-4"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"role-check-"+t.id},domProps:{value:t.id},on:{change:function(s){return e.manageUserRoles(t.id)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"role-check-"+t.id}},[e._v(" "+e._s(t.name)+" ")])])])})),0)],1),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",on:{click:function(s){return e.registerRoleUser()}}},[e._v("Registrar")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"modal-update-special-user",tabindex:"-1","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[e._m(6),s("div",{staticClass:"modal-body"},[s("p",[e._v("Usuario")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-control"},[e._v(e._s(this.user.id))])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"form-control"},[e._v(e._s(this.user.name)+" "+e._s(this.user.last_name))])])]),s("hr"),s("p",[e._v("Roles")]),s("div",{staticClass:"row"},e._l(e.user.roles,(function(t){return s("div",{key:t.id,staticClass:"col-md-4"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",disabled:"disabled"},domProps:{checked:!0}}),s("label",{staticClass:"custom-control-label"},[e._v(" "+e._s(t.name)+" ")])])])})),0)]),s("div",{staticClass:"modal-footer"},[e.userIsAdmin()?s("button",{staticClass:"btn btn-danger",on:{click:function(s){return e.removeAllRoleOfUser()}}},[s("span",{staticStyle:{"font-size":"1rem"}},[e._v("Eliminar")])]):e._e()])])])]),s("div",{staticClass:"modal fade",attrs:{id:"modal-manage-role",tabindex:"-1","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h3",{staticClass:"modal-title"},[e._v(" "+e._s(e.role.name.toUpperCase())+" - ROLE ")]),e._m(7)]),s("div",{staticClass:"modal-body",staticStyle:{"max-height":"450px","overflow-y":"scroll"}},[s("div",{staticClass:"row",staticStyle:{"margin-right":"0"}},[e._m(8),e._l(e.permissions,(function(t){return s("div",{key:t.id,staticClass:"col-sm-6"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"permission-check-"+t.id},domProps:{value:t.id,checked:e.validateRolePermission(t.id)},on:{change:function(s){return e.manageRolePermissions(t.id)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"permission-check-"+t.id}},[e._v(" "+e._s(t.name)+" ")])])])}))],2)])])])])],1)},a=[function(){var e=this,s=e._self._c;return s("div",[s("span",{staticClass:"material-icons-sharp"},[e._v("")]),e._v("Nuevo Rol")])},function(){var e=this,s=e._self._c;return s("div",[s("span",{staticClass:"material-icons-sharp"},[e._v("")]),e._v("Nuevo Usuario Especial")])},function(){var e=this,s=e._self._c;return s("h3",{staticClass:"mb-1"},[s("b",[e._v("Roles")])])},function(){var e=this,s=e._self._c;return s("h3",{staticClass:"mb-1"},[s("b",[e._v("Usuarios Especiales")])])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"modal-header"},[s("h3",{staticClass:"modal-title"},[e._v("REGISTRAR ROL")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"modal-header"},[s("h3",{staticClass:"modal-title"},[e._v(" ASIGNAR ROL A USUARIO ")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"modal-header"},[s("h3",{staticClass:"modal-title"},[e._v(" ROLES DE USUARIO ")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,s=e._self._c;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"col-md-12"},[s("h3",[s("b",[e._v("Permisos")])])])}],r=(t("14d9"),t("bc3a")),o=t.n(r),l=t("2f62"),n=t("3d13"),c=t("8084"),d=function(){var e=this,s=e._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 mb-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.search_code,expression:"search_code"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Buscar código..."},domProps:{value:e.search_code},on:{input:function(s){s.target.composing||(e.search_code=s.target.value)}}})]),s("div",{staticClass:"col-md-8"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.selected_user,expression:"selected_user"}],staticClass:"form-control",on:{change:[function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.selected_user=s.target.multiple?t:t[0]},function(s){return e.changeSelectedUser(e.selected_user)}]}},[e.users.length<=0&&e.search_code?s("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Usuario no encontrado")]):e._e(),e._l(e.users,(function(t){return s("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.id+" | "+t.name+" "))])}))],2)])])},u=[],m={props:["search"],data:function(){return{search_code:"",selected_user:"",users:[]}},methods:{searchUser(e){let s=this.api_url+"/api/search/public/users";o.a.post(s,e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>{this.users=e.data,e.data.length>0?this.selected_user=e.data[0].id:this.selected_user="",this.search(this.selected_user)}).catch(e=>console.log(e.response))},changeSelectedUser(e){this.search(e)}},mounted:function(){this.searchUser({search:"",order:"DESC",limit:20})},computed:{...Object(l["d"])(["api_url"])},watch:{search_code:function(){this.searchUser({search:this.search_code,order:"ASC",limit:20})}}},h=m,v=t("0c7c"),_=Object(v["a"])(h,d,u,!1,null,null,null),p=_.exports,f={name:"Permissions",components:{Aside:n["a"],Right:c["a"],UserSearch:p},data:function(){return{role:{id:"",name:"",permissions:[]},user_search:"",user:{id:"",name:"",last_name:"",roles:[]},selected_roles:[]}},methods:{resultSearch(e){this.user_search=e},userIsAdmin(){let e=this.user.roles.find(e=>"Admin"==e.name);return!e},removeAllRoleOfUser(){this.$swal.fire({title:"¿Estás seguro que deseas eliminar este usuario especial?",html:"Al eliminar el usuario especial perderá acceso a las páginas asignadas",showDenyButton:!0,confirmButtonText:"Confirmar",denyButtonText:"Cancelar"}).then(e=>{if(e.isConfirmed)return this.user.roles.forEach(e=>{1!=e.id&&(console.log(e),this.removeRoleUser(e.id))}),this.getUsersWithRoles(),$("#modal-update-special-user").modal("hide"),this.launchAlert({type:"success",title:"Usuario especial removido exitosamente"})})},registerRoleUser(){return this.user_search?this.selected_roles.length<=0?this.launchAlert({type:"warning",title:"Selecciona al menos un rol"}):void this.selected_roles.forEach(e=>{this.registerRoleToUser({role_id:e,user_id:this.user_search}).then(e=>{201==e.status&&(this.getUsersWithRoles(),$("#modal-new-special-user").modal("hide"),this.launchAlert({type:"success",title:"Usuario especial registrado exitosamente"}))}).catch(e=>console.log(e))}):this.launchAlert({type:"warning",title:"Selecciona un usuairo válido"})},removeRoleUser(e){let s=this.api_url+"/api/roles/remove_user";o.a.post(s,{role_id:e,user_id:this.user.id},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(()=>{this.getUsersWithRoles()}).catch(e=>{console.log(e)})},validateuserRoles(e){let s=this.user.roles.find(s=>s.id==e);return!!s},validateRolePermission(e){let s=this.role.permissions.find(s=>s.id==e);return!!s},manageUserRoles(e){let s=this.selected_roles.find(s=>s==e);s?this.selected_roles=this.selected_roles.filter(s=>s!=e):this.selected_roles.push(e)},manageRolePermissions(e){let s=document.getElementById("permission-check-"+e);if(1==this.role.id)return s.checked=!0,this.launchAlert({type:"warning",title:"No está permitido editar permisos del administrador"});s.checked?this.addRolePermission(e):this.removeRolePermission(e)},registerRole(){if(!this.role.name.trim())return this.launchAlert({type:"warning",title:"Registra un nombre válido"});let e=this.api_url+"/api/roles/create";o.a.post(e,{name:this.role.name.trim()},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>{if(201==e.status)return this.role.id="",this.role.name="",this.getRoles(),$("#modal-new-role").modal("hide"),this.launchAlert({type:"success",title:"Rol registrado exitosamente"})}).catch(e=>{if(console.log(e.response),400==e.response.status)return this.launchAlert({type:"error",title:"Digita un nombre de rol válido o que no se encuentre repetido"})})},deleteRole(e){this.$swal.fire({title:"¿Estás seguro que deseas eliminar este rol?",html:"Se debe en cuenta que si eliminas este rol muchos usuarios podrán perder acceso a partes importantes del sistema",showDenyButton:!0,confirmButtonText:"Confirmar",denyButtonText:"Cancelar"}).then(s=>{if(s.isConfirmed){let s=this.api_url+"/api/roles/"+e.id;o.a.delete(s,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>{if(200==e.status)return this.getRoles(),this.launchAlert({type:"success",title:"Rol eliminado exitosamente"})}).catch(e=>{console.log(e.response)})}})},addRolePermission(e){let s={role_id:this.role.id,permission_id:e},t=this.api_url+"/api/roles/add_permission";o.a.post(t,s,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},removeRolePermission(e){let s={role_id:this.role.id,permission_id:e},t=this.api_url+"/api/roles/remove_permission";o.a.post(t,s,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},showNewRolModal(){this.user={roles:[]},this.role.name="",$("#modal-new-role").modal("show")},showManageRolesUser(e){this.user.roles=[],this.user.id=e.id,this.user.name=e.name,this.user.last_name=e.last_name,this.user.roles=e.roles,$("#modal-update-special-user").modal("show")},showNewSpecialUserModal(){this.role.name="",$("#modal-new-special-user").modal("show")},showManageRoleModal(e){this.role.id=e.id,this.role.name=e.name,this.getRolePermissions(e.id),$("#modal-manage-role").modal("show")},getRolePermissions(e){let s=this.api_url+"/api/roles/"+e;o.a.get(s,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>{this.role.permissions=e.data.permissions}).catch(e=>console.log(e.response))},launchAlert(e){e.timeout||(e.timeout=2500);const s=this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:e.timeout});s.fire({icon:e.type,title:e.title,text:e.message})},...Object(l["b"])("user",["getUsersLine"]),...Object(l["b"])("permission",["registerRoleToUser"]),...Object(l["c"])("permission",["getRoles"]),...Object(l["c"])("permission",["getPermissions"]),...Object(l["c"])("permission",["getUsersWithRoles"]),...Object(l["c"])(["loadSessionUser"])},mounted:function(){$(".modal-backdrop").remove(),this.getRoles(),this.getPermissions(),this.getUsersWithRoles(),this.loadSessionUser()},computed:{...Object(l["d"])(["api_url"]),...Object(l["d"])(["session_user"]),...Object(l["d"])("permission",["users"]),...Object(l["d"])("permission",["roles"]),...Object(l["d"])("permission",["permissions"])}},g=f,C=(t("abd0"),Object(v["a"])(g,i,a,!1,null,null,null));s["default"]=C.exports},"3d13":function(e,s,t){"use strict";var i=function(){var e=this,s=e._self._c;return s("aside",[e._m(0),s("div",{staticClass:"sidebar"},[s("router-link",{class:{active:e.routeActive("admin")},attrs:{to:"/admin"}},[s("span",{staticClass:"material-icons-sharp"},[e._v("")]),s("h3",[e._v("Inicio")])]),s("router-link",{class:{active:e.routeActive("perfil")},attrs:{to:"/perfil"}},[s("span",{staticClass:"material-icons-sharp"},[e._v("")]),s("h3",[e._v("Perfíl")])]),"lunes"==e.dia||"jueves"==e.dia?s("router-link",{class:{active:e.routeActive("registro")},attrs:{to:"/registro"}},[s("span",{staticClass:"material-icons-sharp"},[e._v("")]),s("h3",[e._v("Nuevo Registro")])]):e._e(),e.session_user.pages.user_view||e.session_user.pages.user_list?s("hr",{staticStyle:{color:"var(--color-dark)"}}):e._e(),e.session_user.pages.user_view?s("router-link",{class:{active:e.routeActive("vision-usuario")},attrs:{to:"/vision-usuario"}},[s("span",{staticClass:"material-icons-sharp"},[e._v("")]),s("h3",[e._v("Visión de Usuario")])]):e._e(),e.session_user.pages.user_list?s("router-link",{class:{active:e.routeActive("listar-usuarios")},attrs:{to:"/listar-usuarios"}},[s("span",{staticClass:"material-icons-sharp"},[e._v("")]),s("h3",[e._v("Listar Usuarios")])]):e._e(),s("hr",{staticStyle:{color:"var(--color-dark)"}}),s("router-link",{class:{active:e.routeActive("devoluciones")},attrs:{to:"/devoluciones"}},[s("span",{staticClass:"material-icons-sharp"},[e._v("")]),s("h3",[e._v("Devoluciones")])]),s("hr",{staticStyle:{color:"var(--color-dark)"}}),e.session_user.pages.role?s("router-link",{class:{active:e.routeActive("permisos")},attrs:{to:"/permisos"}},[s("span",{staticClass:"material-icons-sharp"},[e._v("")]),s("h3",[e._v("Permisos")])]):e._e(),s("a",{attrs:{href:"#"},on:{click:function(s){return e.logout()}}},[s("span",{staticClass:"material-icons-sharp"},[e._v("")]),s("h3",[e._v("Logout")])])],1)])},a=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"top"},[s("div",{staticClass:"logo"},[s("h2",[s("b",[e._v("PAF APP")])])]),s("div",{staticClass:"close",attrs:{id:"close-btn"}},[s("span",{staticClass:"material-icons-sharp"},[e._v("close")])])])}],r=t("2f62"),o={data:function(){return{isActive:!0,dia:""}},methods:{...Object(r["b"])("auth",["logout"]),routeActive(e){var s=this.$router.history.current.path.replace(/\//g,"");return e==s},validateUrlImage(){let e=this.$route.path;return e.split("/").length>2?"../logo3b.png":"logo3b.png"}},mounted(){const e=document.querySelector("aside"),s=document.querySelector("#menu-btn"),t=document.querySelector("#close-btn");function i(){let e=new Date,s={weekday:"long",year:"numeric",month:"long",day:"numeric"},t=e.toLocaleDateString("es-MX",s).split(",");return t[0]}s.addEventListener("click",()=>{e.style.display="block"}),t.addEventListener("click",()=>{e.style.display="none"}),this.dia=i()},computed:{...Object(r["d"])(["session_user"])}},l=o,n=t("0c7c"),c=Object(n["a"])(l,i,a,!1,null,null,null);s["a"]=c.exports},8084:function(e,s,t){"use strict";var i=function(){var e=this,s=e._self._c;return s("div",{staticClass:"right"},[s("div",{staticClass:"top"},[e._m(0),s("div",{staticClass:"profile"},[s("div",{staticClass:"info"},[s("p",[e._v("Bienvenido, "),s("b",[e._v(e._s(e.session_user.name+" "+e.session_user.last_name))])])])])]),e.session_lines.loaded?s("div",{staticClass:"sales-analytics mt-3"},[s("h2",[e._v("Niveles ")]),e._l(9,(function(t){return s("div",{key:t,staticClass:"item",on:{click:function(s){return e.showLine(t)}}},[e._m(1,!0),s("div",{staticClass:"right"},[s("div",{staticClass:"info"},[s("h3",[e._v(e._s(e.renderNumLinea(t)))])]),s("h3",[e._v(e._s(e.session_lines.lines[t]))])])])}))],2):s("div",[e.session_lines.loaded?s("h2",[s("p",[e._v("No hay líneas activas")])]):s("div",{staticStyle:{display:"flex","justify-content":"center"}},[e._m(2)])]),s("div",{staticClass:"modal fade",attrs:{id:"modal-lines",tabindex:"-1","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[e._m(3),s("div",{staticClass:"modal-body"},[e.loading_line?s("div",{staticStyle:{display:"flex","justify-content":"center"}},[e._m(4)]):e._e(),s("div",{class:{dnone:e.loading_line}},[e._m(5)])])])])])])},a=[function(){var e=this,s=e._self._c;return s("button",{attrs:{id:"menu-btn"}},[s("span",{staticClass:"material-icons-sharp"},[e._v("menu")])])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"icon"},[s("span",{staticClass:"material-icons-sharp active"},[e._v("")])])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"lds-facebook"},[s("div"),s("div"),s("div")])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"modal-header"},[s("h3",{staticClass:"modal-title",attrs:{id:"active_line"}}),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,s=e._self._c;return s("div",{staticClass:"lds-facebook"},[s("div"),s("div"),s("div")])},function(){var e=this,s=e._self._c;return s("table",{staticClass:"table table-striped",staticStyle:{border:"none"},attrs:{id:"table-line"}},[s("thead",[s("tr",[s("th",[e._v("Código")]),s("th",[e._v("Nombre")]),s("th",[e._v("Fecha Ingreso")])])])])}],r=(t("14d9"),t("2f62")),o={components:{},data(){return{search:"",count_lines:0,active_line:!1,loading_line:!1}},methods:{showLine(e){this.loading_line=!0;let s=document.getElementById("active_line");s.innerHTML=this.renderNumLinea(e),$("#modal-lines").modal("show"),this.getUsersLine({user_id:this.session_user.id,line:e}).then(e=>{var s=[];e.data.forEach(e=>{var t=this.formatDate(e.created_at);let i={id:e.id,name:e.name,date:t};s.push(i)}),this.loading_line=!1,$("#table-line").DataTable({responsive:!0,autoWidth:!1,lengthChange:!1,info:!1,destroy:!0,data:s,columns:[{data:"id"},{data:"name"},{data:"date"}]})})},renderNumLinea(e){switch(e){case 1:return"Nivel 1";case 2:return"Nivel 2";case 3:return"Nivel 3";case 5:return"Nivel 4";case 4:return"Nivel 5";case 6:return"Nivel 6";case 7:return"Nivel 7";case 8:return"Nivel 8";case 9:return"Nivel 9";default:return""}},formatDate(e){var s=new Date(e),t=s.getFullYear(),i=s.getMonth()+1,a=s.getDate();return i<10&&(i="0"+i),a<10&&(a="0"+a),t+"/"+i+"/"+a},...Object(r["b"])("user",["getUsersLine"]),...Object(r["c"])(["loadSessionLines"])},computed:{...Object(r["d"])(["session_user"]),...Object(r["d"])(["session_lines"])},mounted(){let e=setInterval(()=>{if(this.session_user.id)return this.loadSessionLines(),clearInterval(e)})}},l=o,n=(t("1171"),t("0c7c")),c=Object(n["a"])(l,i,a,!1,null,null,null);s["a"]=c.exports},a62e:function(e,s,t){},abd0:function(e,s,t){"use strict";t("a62e")}}]);
//# sourceMappingURL=chunk-3c4b33b6.d1f735cd.js.map