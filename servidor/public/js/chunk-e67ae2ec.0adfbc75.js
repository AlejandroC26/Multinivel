(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e67ae2ec"],{1171:function(t,e,s){"use strict";s("2999")},2999:function(t,e,s){},"3d13":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("aside",[t._m(0),e("div",{staticClass:"sidebar"},[e("router-link",{class:{active:t.routeActive("admin")},attrs:{to:"/admin"}},[e("span",{staticClass:"material-icons-sharp"},[t._v("")]),e("h3",[t._v("Inicio")])]),e("router-link",{class:{active:t.routeActive("perfil")},attrs:{to:"/perfil"}},[e("span",{staticClass:"material-icons-sharp"},[t._v("")]),e("h3",[t._v("Perfíl")])]),"lunes"==t.dia||"jueves"==t.dia?e("router-link",{class:{active:t.routeActive("registro")},attrs:{to:"/registro"}},[e("span",{staticClass:"material-icons-sharp"},[t._v("")]),e("h3",[t._v("Nuevo Registro")])]):t._e(),t.session_user.pages.user_view||t.session_user.pages.user_list?e("hr",{staticStyle:{color:"var(--color-dark)"}}):t._e(),t.session_user.pages.user_view?e("router-link",{class:{active:t.routeActive("vision-usuario")},attrs:{to:"/vision-usuario"}},[e("span",{staticClass:"material-icons-sharp"},[t._v("")]),e("h3",[t._v("Visión de Usuario")])]):t._e(),t.session_user.pages.user_list?e("router-link",{class:{active:t.routeActive("listar-usuarios")},attrs:{to:"/listar-usuarios"}},[e("span",{staticClass:"material-icons-sharp"},[t._v("")]),e("h3",[t._v("Listar Usuarios")])]):t._e(),e("hr",{staticStyle:{color:"var(--color-dark)"}}),e("router-link",{class:{active:t.routeActive("devoluciones")},attrs:{to:"/devoluciones"}},[e("span",{staticClass:"material-icons-sharp"},[t._v("")]),e("h3",[t._v("Devoluciones")])]),e("hr",{staticStyle:{color:"var(--color-dark)"}}),t.session_user.pages.role?e("router-link",{class:{active:t.routeActive("permisos")},attrs:{to:"/permisos"}},[e("span",{staticClass:"material-icons-sharp"},[t._v("")]),e("h3",[t._v("Permisos")])]):t._e(),e("a",{attrs:{href:"#"},on:{click:function(e){return t.logout()}}},[e("span",{staticClass:"material-icons-sharp"},[t._v("")]),e("h3",[t._v("Logout")])])],1)])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top"},[e("div",{staticClass:"logo"},[e("h2",[e("b",[t._v("PAF APP")])])]),e("div",{staticClass:"close",attrs:{id:"close-btn"}},[e("span",{staticClass:"material-icons-sharp"},[t._v("close")])])])}],n=s("2f62"),r={data:function(){return{isActive:!0,dia:""}},methods:{...Object(n["b"])("auth",["logout"]),routeActive(t){var e=this.$router.history.current.path.replace(/\//g,"");return t==e},validateUrlImage(){let t=this.$route.path;return t.split("/").length>2?"../logo3b.png":"logo3b.png"}},mounted(){const t=document.querySelector("aside"),e=document.querySelector("#menu-btn"),s=document.querySelector("#close-btn");function a(){let t=new Date,e={weekday:"long",year:"numeric",month:"long",day:"numeric"},s=t.toLocaleDateString("es-MX",e).split(",");return s[0]}e.addEventListener("click",()=>{t.style.display="block"}),s.addEventListener("click",()=>{t.style.display="none"}),this.dia=a()},computed:{...Object(n["d"])(["session_user"])}},o=r,l=s("0c7c"),c=Object(l["a"])(o,a,i,!1,null,null,null);e["a"]=c.exports},8084:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"right"},[e("div",{staticClass:"top"},[t._m(0),e("div",{staticClass:"profile"},[e("div",{staticClass:"info"},[e("p",[t._v("Bienvenido, "),e("b",[t._v(t._s(t.session_user.name+" "+t.session_user.last_name))])])])])]),t.session_lines.loaded?e("div",{staticClass:"sales-analytics mt-3"},[e("h2",[t._v("Niveles ")]),t._l(9,(function(s){return e("div",{key:s,staticClass:"item",on:{click:function(e){return t.showLine(s)}}},[t._m(1,!0),e("div",{staticClass:"right"},[e("div",{staticClass:"info"},[e("h3",[t._v(t._s(t.renderNumLinea(s)))])]),e("h3",[t._v(t._s(t.session_lines.lines[s]))])])])}))],2):e("div",[t.session_lines.loaded?e("h2",[e("p",[t._v("No hay líneas activas")])]):e("div",{staticStyle:{display:"flex","justify-content":"center"}},[t._m(2)])]),e("div",{staticClass:"modal fade",attrs:{id:"modal-lines",tabindex:"-1","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(3),e("div",{staticClass:"modal-body"},[t.loading_line?e("div",{staticStyle:{display:"flex","justify-content":"center"}},[t._m(4)]):t._e(),e("div",{class:{dnone:t.loading_line}},[t._m(5)])])])])])])},i=[function(){var t=this,e=t._self._c;return e("button",{attrs:{id:"menu-btn"}},[e("span",{staticClass:"material-icons-sharp"},[t._v("menu")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon"},[e("span",{staticClass:"material-icons-sharp active"},[t._v("")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"lds-facebook"},[e("div"),e("div"),e("div")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"modal-title",attrs:{id:"active_line"}}),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"lds-facebook"},[e("div"),e("div"),e("div")])},function(){var t=this,e=t._self._c;return e("table",{staticClass:"table table-striped",staticStyle:{border:"none"},attrs:{id:"table-line"}},[e("thead",[e("tr",[e("th",[t._v("Código")]),e("th",[t._v("Nombre")]),e("th",[t._v("Fecha Ingreso")])])])])}],n=(s("14d9"),s("2f62")),r={components:{},data(){return{search:"",count_lines:0,active_line:!1,loading_line:!1}},methods:{showLine(t){this.loading_line=!0;let e=document.getElementById("active_line");e.innerHTML=this.renderNumLinea(t),$("#modal-lines").modal("show"),this.getUsersLine({user_id:this.session_user.id,line:t}).then(t=>{var e=[];t.data.forEach(t=>{var s=this.formatDate(t.created_at);let a={id:t.id,name:t.name,date:s};e.push(a)}),this.loading_line=!1,$("#table-line").DataTable({responsive:!0,autoWidth:!1,lengthChange:!1,info:!1,destroy:!0,data:e,columns:[{data:"id"},{data:"name"},{data:"date"}]})})},renderNumLinea(t){switch(t){case 1:return"Nivel 1";case 2:return"Nivel 2";case 3:return"Nivel 3";case 5:return"Nivel 4";case 4:return"Nivel 5";case 6:return"Nivel 6";case 7:return"Nivel 7";case 8:return"Nivel 8";case 9:return"Nivel 9";default:return""}},formatDate(t){var e=new Date(t),s=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return a<10&&(a="0"+a),i<10&&(i="0"+i),s+"/"+a+"/"+i},...Object(n["b"])("user",["getUsersLine"]),...Object(n["c"])(["loadSessionLines"])},computed:{...Object(n["d"])(["session_user"]),...Object(n["d"])(["session_lines"])},mounted(){let t=setInterval(()=>{if(this.session_user.id)return this.loadSessionLines(),clearInterval(t)})}},o=r,l=(s("1171"),s("0c7c")),c=Object(l["a"])(o,a,i,!1,null,null,null);e["a"]=c.exports},"940b":function(t,e,s){"use strict";s("953e")},"953e":function(t,e,s){},c66d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"application-container"},[e("Aside"),e("main",[e("h1",[t._v("Perfíl")]),e("div",{staticClass:"info-card"},[e("p",[t._v("Patrocinadores")]),e("hr",{staticStyle:{color:"var(--color-dark)"}}),t.session_sponsors.num_sponsors?t._e():e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-sm-2"},[t._v("...")]),e("div",{staticClass:"col-sm-6"},[t._v("Main")])]),t._l(t.session_sponsors.num_sponsors,(function(s){return e("div",{key:s,staticClass:"row mb-2"},[e("div",{staticClass:"col-sm-4"},[e("p",[t._v("Patrocinador "+t._s(s))])]),e("div",{staticClass:"col-2"},[e("p",{staticStyle:{color:"var(--color-dark)"}},[t._v(t._s(t.session_sponsors.sponsors[s].code))])]),e("div",{staticClass:"col-6"},[e("p",{staticStyle:{color:"var(--color-dark)"}},[t._v(t._s(t.session_sponsors.sponsors[s].name))])])])}))],2),t.session_user.id?e("div",{staticClass:"info-card"},[t._m(1),e("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-personal",role:"tabpanel","aria-labelledby":"nav-personal-tab"}},[e("div",{staticClass:"row mt-3 mb-1"},[e("div",{staticClass:"col-md-12"},[e("p",[t._v("Documento")]),e("p",{staticClass:"form-control",staticStyle:{cursor:"not-allowed"},attrs:{type:"text"}},[t._v(t._s(t.session_user.id_card))])])]),e("div",{staticClass:"row mt-2 mb-1"},[e("div",{staticClass:"col-md-6"},[e("p",[t._v("Nombres")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),e("div",{staticClass:"col-md-6"},[e("p",[t._v("Apellidos")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.last_name,expression:"user.last_name"}],staticClass:"form-control",attrs:{type:"text",id:"last_name"},domProps:{value:t.user.last_name},on:{input:function(e){e.target.composing||t.$set(t.user,"last_name",e.target.value)}}})])]),e("div",{staticClass:"row mt-2 mb-1"},[e("div",{staticClass:"col-md-6"},[e("p",[t._v("Tipo de Cuenta")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.count_type,expression:"user.count_type"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"count_type",e.target.multiple?s:s[0])}}},[e("option",{attrs:{value:"Nequi"}},[t._v("Nequi")]),e("option",{attrs:{value:"Daviplata"}},[t._v("Nequi")]),e("option",{attrs:{value:"Bancolombia - Ahorros"}},[t._v("Bancolombia - Ahorros")]),e("option",{attrs:{value:"Bancolombia - Corriente"}},[t._v("Bancolombia - Corriente")])])]),e("div",{staticClass:"col-md-6"},[e("p",[t._v("N° de cuenta")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.count_number,expression:"user.count_number"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.count_number},on:{input:function(e){e.target.composing||t.$set(t.user,"count_number",e.target.value)}}})])])]),e("div",{staticClass:"tab-pane fade",attrs:{id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"}},[e("div",{staticClass:"row mt-2 mb-1"},[e("div",{staticClass:"col-lg-12"},[e("p",[t._v("Teléfono")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{type:"number",id:"primary_phone"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}})])]),e("div",{staticClass:"row mt-2 mb-1"},[e("div",{staticClass:"col-md-12"},[e("p",[t._v("País")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.country,expression:"user.country"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"country",e.target.multiple?s:s[0])},function(e){return t.filterDepartments(t.user.country)}]}},t._l(t.countries,(function(s){return e("option",{key:s.code,domProps:{value:s.code}},[t._v(t._s(s.name))])})),0)])]),e("div",{staticClass:"row mt-2 mb-1"},[e("div",{staticClass:"col-lg-6"},[e("p",[t._v("Departamento")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.department,expression:"user.department"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"department",e.target.multiple?s:s[0])},function(e){return t.filterCitiesProfile(t.user.department)}]}},[e("option",{attrs:{value:"",disabled:""}},[t._v("Selecciona un Departamento")]),t._l(t.departments,(function(s,a){return e("option",{key:"a"+a},[t._v(t._s(s.name))])}))],2)]),e("div",{staticClass:"col-lg-6"},[e("p",[t._v("Ciudad")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.city_id,expression:"user.city_id"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"city_id",e.target.multiple?s:s[0])}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Selecciona una ciudad")]),t._l(t.cities_department,(function(s){return e("option",{key:s.id,domProps:{value:s.id}},[t._v(t._s(s.name))])}))],2)])])]),e("div",{staticClass:"tab-pane fade",attrs:{id:"nav-access",role:"tabpanel","aria-labelledby":"nav-access-tab"}},[e("div",{staticClass:"row mt-3 mb-1"},[e("div",{staticClass:"col-md-12"},[e("p",[t._v("Login")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.login,expression:"user.login"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.login},on:{input:function(e){e.target.composing||t.$set(t.user,"login",e.target.value)}}})])]),e("div",{staticClass:"row mt-2 mb-1"},[t._m(2),e("div",{staticClass:"col-6"},[e("button",{staticClass:"mt-4 btn btn-secondary",staticStyle:{width:"100%"},on:{click:function(e){return t.modalPassword()}}},[t._v("Cambiar Contraseña")])])])]),e("div",{staticClass:"tab-pane fade",attrs:{id:"nav-devolution",role:"tabpanel","aria-labelledby":"nav-devolution-tab"}},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-lg-12"},["Inactivo"===!t.session_user.state?e("div",[e("label",{staticClass:"circle",attrs:{for:"file-consignment"}},[t._v("+")]),e("label",{staticClass:"label-link",attrs:{for:"file-consignment"}},[t._v("Adjuntar comprobante")])]):e("div",[t._l(t.user.consignments,(function(s){return e("div",{key:s.id,staticClass:"mb-2"},[e("p",[t._v(t._s(s.type))]),e("div",{staticClass:"edit-file-box"},[e("span",{staticClass:"link",on:{click:function(e){return t.downloadFile(s.id)}}},[t._v(t._s(s.image))]),e("span",{staticStyle:{color:"var(--color-dark-variant)"}},[t._v(t._s(s.state))]),"Espera"===s.state||"Rechazado"===s.state?e("label",{staticClass:"material-icons-sharp icon-edit",attrs:{for:"update-file-consignment"},on:{click:function(e){return t.loadConsignmentId(s.id)}}},[t._v("")]):t._e()])])})),t.user.consignments.length<3?e("div",[0===t.user.consignments.length?e("p",[t._v("Activación")]):t._e(),"Revisión"==t.session_user.state?e("div",[e("p",[t._v("Espera hasta ser activado para iniciar con el ahorro")])]):e("div",[t.user.consignments.length>=1?e("p",[t._v("Devolución "+t._s(t.user.consignments.length))]):t._e(),e("label",{staticClass:"circle",attrs:{for:"file-consignment"}},[t._v("+")]),e("label",{staticClass:"label-link",attrs:{for:"file-consignment"}},[t._v("Adjuntar comprobante")])])]):t._e()],2),e("input",{staticClass:"hidden-file",attrs:{type:"file",id:"file-consignment",accept:"image/.png,.jpeg,.jpg"},on:{change:function(e){return t.loadConsignmentFile()}}}),e("input",{staticClass:"hidden-file",attrs:{type:"file",id:"update-file-consignment",accept:"image/.png,.jpeg,.jpg"},on:{change:function(e){return t.updateFileConsignment()}}})])])])]),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-md-9"}),e("div",{staticClass:"col-md-3"},[e("button",{staticClass:"btn btn-primary",staticStyle:{width:"100%"},on:{click:function(e){return t.updateUserFunction(t.user)}}},[t._v("Guardar")])])])]):e("div",{staticClass:"info-card"},[t._m(3)])]),e("Right"),e("div",{staticClass:"modal fade",attrs:{id:"modal-password",tabindex:"-1","aria-hidden":"true"}},[e("form",{attrs:{id:"change-password-form"},on:{submit:function(e){return e.preventDefault(),t.validateChangePasword(t.password)}}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(4),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-3"},[e("label",[t._v("Contraseña Actual")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password.current,expression:"password.current"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.password.current},on:{input:function(e){e.target.composing||t.$set(t.password,"current",e.target.value)}}})]),e("div",{staticClass:"col-md-12 mb-3"},[e("label",[t._v("Nueva Contraseña")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password.new,expression:"password.new"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.password.new},on:{input:function(e){e.target.composing||t.$set(t.password,"new",e.target.value)}}})]),e("div",{staticClass:"col-md-12 mb-3"},[e("label",[t._v("Nueva Contraseña (validación)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password.confirm,expression:"password.confirm"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.password.confirm},on:{input:function(e){e.target.composing||t.$set(t.password,"confirm",e.target.value)}}})])])]),t._m(5)])])])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-4"},[e("p",[t._v("Patrocinador 1")])])},function(){var t=this,e=t._self._c;return e("nav",[e("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[e("button",{staticClass:"nav-link active",attrs:{id:"nav-personal-tab","data-toggle":"tab","data-target":"#nav-personal",type:"button",role:"tab","aria-controls":"nav-personal","aria-selected":"true"}},[t._v("Información Personal")]),e("button",{staticClass:"nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab","data-target":"#nav-contact",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}},[t._v("Información de Contacto")]),e("button",{staticClass:"nav-link",attrs:{id:"nav-access-tab","data-toggle":"tab","data-target":"#nav-access",type:"button",role:"tab","aria-controls":"nav-access","aria-selected":"false"}},[t._v("Información de Acceso")]),e("button",{staticClass:"nav-link",attrs:{id:"nav-devolution-tab","data-toggle":"tab","data-target":"#nav-devolution",type:"button",role:"tab","aria-controls":"nav-devolution","aria-selected":"false"}},[t._v("Comprobante de Devolución")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-6"},[e("p",[t._v("Contraseña")]),e("p",{staticClass:"form-control"},[t._v("****")])])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("div",{staticClass:"lds-dual-ring"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"modal-title"},[t._v("Cambiar Contraseña")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary"},[t._v("Confirmar")])])}],n=s("bc3a"),r=s.n(n),o=s("2f62"),l=s("3d13"),c=s("8084"),u={name:"Profile",components:{Aside:l["a"],Right:c["a"]},data:function(){return{id_consign:"",password:{current:"",new:"",confirm:""},lines:[{0:""},{1:""},{2:""},{3:""},{4:""}],user:{id:"",name:"",last_name:"",id_card:"0",phone:"",city_id:"",city_name:"",department:"",country:"",login:"",count_type:"Nequi",count_number:"",sponsor_user:"",consignments:[]}}},methods:{loadConsignmentId(t){this.id_consign=t},getUserConsignments(t){let e=this.api_url+`/api/users/${t}/listUserConsignments`;r.a.get(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(t=>this.user.consignments=t.data).catch(t=>console.log(t.response))},filterCitiesProfile(t){this.user.city_id="",this.filterCities(t)},updateUserFunction(t){return this.isValid(t.name)?this.isValid(t.last_name)?t.phone?t.count_number.trim()?t.city_id?void this.updateUser(t).then(t=>201===t.status?(this.loadSessionUser({reload:!0}),this.launchAlert({type:"success",title:"¡Usuario actualizado!"})):(console.log(t.data),"error"==t.data.status&&"id_card"==t.data.case?this.launchAlert({type:"error",title:"Este documento ya se encuentra en uso"}):"error"==t.data.status&&"login"==t.data.case?this.launchAlert({type:"error",title:"Este login ya se encuentra en uso"}):this.launchAlert({type:"error",title:"Ha surgido un error"}))).catch(t=>(console.log(t.response),this.launchAlert({type:"error",title:"Ha surgido un error"}))):this.launchAlert({type:"warning",title:"Selecciona una ciudad"}):this.launchAlert({type:"warning",title:"Es necesario el número de cuenta"}):(document.getElementById("phone").focus(),this.launchAlert({type:"warning",title:"Es necesario el teléfono de contacto"})):(document.getElementById("last_name").focus(),this.launchAlert({type:"warning",title:"El apellido no puede contener numeros"})):(document.getElementById("name").focus(),this.launchAlert({type:"warning",title:"El nonbre no puede contener numeros"}))},validateChangePasword(t){var e=/\s/;if(e.test(t.new))return this.launchAlert({type:"warning",title:"La nueva contraseña no puede contener espacios en blanco"});if(t.new.length<3)return this.launchAlert({type:"warning",title:"La contraseña debe tener una longitud mínima de 3 carácteres"});if(t.new!=t.confirm)return this.launchAlert({type:"warning",title:"La nueva contraseña no coincide"});let s={id:this.session_user.id,password:{current_password:t.current,new_password:t.new,confirm_password:t.confirm}};this.changePassword(s).then(t=>($("#modal-password").modal("hide"),this.password.current="",this.password.new="",this.password.confirm="",this.launchAlert({type:"success",title:"¡Contraseña actualizada exitosamente!"}))).catch(t=>{if(console.log(t),"Current password incorrect!"==t.response.data.message)return this.launchAlert({type:"warning",title:"La contraseña actual es incorrecta"})})},isValid(t){var e=new RegExp("^[a-zA-ZÀ-ÿ ]+$"),s=t;return!!e.test(s)},launchAlert(t){t.timeout||(t.timeout=2500);const e=this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:t.timeout});e.fire({icon:t.type,title:t.title,text:t.message})},filterDepartments(t){this.user.department="",this.user.city_id="",this.getCountryCities(t)},async loadConsignmentFile(){let t=document.getElementById("file-consignment").files[0];await this.fileUpload(t),document.getElementById("file-consignment").value=""},async updateFileConsignment(){let t=document.getElementById("update-file-consignment").files[0],e=new FormData;e.append("image",t);let s=this.api_url+`/api/users/${this.id_consign}/updateConsignmentFile`;r.a.post(s,e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(t=>201===t.status?(this.getUserConsignments(this.session_user.id),this.loadSessionUser({reload:!0}),this.launchAlert({type:"success",title:"¡Archivo cargado exitosamente!"})):this.launchAlert({type:"error",title:"Ha surgido un error"})).catch(t=>console.log(t.response))},async fileUpload(t){if(!t)return;let e=new FormData;e.append("image",t),await this.loadFiles({id:this.user.id,form:e}).then(t=>201===t.status?(this.getUserConsignments(this.session_user.id),this.loadSessionUser({reload:!0}),this.launchAlert({type:"success",title:"¡Archivo cargado exitosamente!"})):this.launchAlert({type:"error",title:"Ha surgido un error"})).catch(t=>(console.log(t.response),this.launchAlert({type:"error",title:"Ha surgido un error"})))},async downloadFile(t){try{const e=await this.showFile({id:t}),s="data:image/jpeg;base64,"+e.data.data,a=document.createElement("a"),i="consignment_"+this.user.id+".jpeg";a.href=s,a.download=i,a.click()}catch(e){console.log(e.response)}},modalPassword(){$("#modal-password").modal("show")},...Object(o["b"])("user",["loadFiles"]),...Object(o["b"])("user",["showFile"]),...Object(o["b"])("user",["updateUser"]),...Object(o["b"])("user",["changePassword"]),...Object(o["b"])("user",["getUsersLine"]),...Object(o["b"])("country",["getCity"]),...Object(o["c"])(["loadSessionUser"]),...Object(o["c"])(["loadSessionSponsors"]),...Object(o["c"])("country",["getAllCountries"]),...Object(o["c"])("country",["getCountryCities"]),...Object(o["c"])("country",["filterCities"])},mounted:function(){$(".modal-backdrop").remove(),this.loadSessionUser(),this.getAllCountries();let t=setInterval(()=>{if(this.session_user.id)return this.user.id=this.session_user.id,this.user.name=this.session_user.name,this.user.last_name=this.session_user.last_name,this.user.id_card=this.session_user.id_card,this.user.phone=this.session_user.phone,this.user.city_id=this.session_user.city_id,this.user.department=this.session_user.city.department,this.user.country=this.session_user.city.country_code,this.user.login=this.session_user.login,this.user.sponsor_user=this.session_user.sp_user_code,this.user.count_type=this.session_user.count_type,this.user.count_number=this.session_user.count_number,this.loadSessionSponsors(),this.getCountryCities(this.user.country),this.filterCities(this.user.department),this.getUserConsignments(this.session_user.id),clearInterval(t)})},computed:{...Object(o["d"])(["api_url"]),...Object(o["d"])(["session_user"]),...Object(o["d"])(["session_sponsors"]),...Object(o["d"])("country",["countries"]),...Object(o["d"])("country",["departments"]),...Object(o["d"])("country",["cities_department"])}},d=u,v=(s("940b"),s("0c7c")),m=Object(v["a"])(d,a,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-e67ae2ec.0adfbc75.js.map