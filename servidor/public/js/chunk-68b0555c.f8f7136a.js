(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68b0555c"],{"525c":function(t,e,s){},5588:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("main",[e("section",{staticClass:"text-center text-lg-start"},[e("div",{staticClass:"container py-4",staticStyle:{"max-width":"1200px"}},[e("div",{staticClass:"row g-0"},[t._m(0),t.not_found?e("div",{staticClass:"info-card mb-4",staticStyle:{"max-width":"900px",display:"block",margin:"0 auto"}},[e("h1",[t._v("¡Usuario no encontrado!")]),e("router-link",{attrs:{to:"/"}},[t._v("Volver al inicio")])],1):e("div",{staticClass:"info-card mb-4",staticStyle:{"text-align":"left","max-width":"900px",display:"block",margin:"0 auto"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",[e("span",{staticStyle:{color:"var(--color-dark)"}},[t._v("Referido por: ")]),t._v(" ("+t._s(t.sponsor.code)+") "+t._s(t.sponsor.name)+" ")])])]),e("hr",{staticStyle:{color:"var(--color-dark)"}}),e("form",{on:{submit:function(e){return e.preventDefault(),t.validateRegisterUser(t.user)}}},[e("div",{staticClass:"row mt-2 mb-1"},[e("div",{staticClass:"col-md-12"},[e("p",[t._v("Documento")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.id_card,expression:"user.id_card"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.user.id_card},on:{input:function(e){e.target.composing||t.$set(t.user,"id_card",e.target.value)}}})])]),e("div",{staticClass:"row mt-2 mb-1"},[e("div",{staticClass:"col-md-6"},[e("p",[t._v("Nombres")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),e("div",{staticClass:"col-md-6"},[e("p",[t._v("Apellidos")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.last_name,expression:"user.last_name"}],staticClass:"form-control",attrs:{type:"text",id:"last_name"},domProps:{value:t.user.last_name},on:{input:function(e){e.target.composing||t.$set(t.user,"last_name",e.target.value)}}})])]),e("div",{staticClass:"row mt-2 mb-1"},[e("div",{staticClass:"col-md-12"},[e("p",[t._v("WhatsApp")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.whatsapp,expression:"user.whatsapp"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.user.whatsapp},on:{input:function(e){e.target.composing||t.$set(t.user,"whatsapp",e.target.value)}}})])]),e("div",{staticClass:"row mt-2 mb-1"},[e("div",{staticClass:"col-md-6"},[e("p",[t._v("Teléfono de Contacto")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.primary_phone,expression:"user.primary_phone"}],staticClass:"form-control",attrs:{type:"text",id:"primary_phone"},domProps:{value:t.user.primary_phone},on:{input:function(e){e.target.composing||t.$set(t.user,"primary_phone",e.target.value)}}})]),e("div",{staticClass:"col-md-6"},[e("p",[t._v("Teléfono Secundario (opcional)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.secondary_phone,expression:"user.secondary_phone"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.secondary_phone},on:{input:function(e){e.target.composing||t.$set(t.user,"secondary_phone",e.target.value)}}})])]),e("div",{staticClass:"row mt-2 mb-1"},[e("div",{staticClass:"col-md-6"},[e("p",[t._v("País")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.country,expression:"user.country"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"country",e.target.multiple?s:s[0])},function(e){return t.filterDepartments(t.user.country)}]}},t._l(t.countries,(function(s){return e("option",{key:s.code,domProps:{value:s.code}},[t._v(t._s(s.name))])})),0)]),e("div",{staticClass:"col-md-6"},[e("p",[t._v("Departamento")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.department,expression:"user.department"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"department",e.target.multiple?s:s[0])},function(e){return t.filterCitiesFunction(t.user.department)}]}},[e("option",{attrs:{value:"",disabled:""}},[t._v("Selecciona una opción")]),t._l(t.departments,(function(s,a){return e("option",{key:"a"+a},[t._v(t._s(s.name))])}))],2)]),e("div",{staticClass:"col-md-6"},[e("p",[t._v("Ciudad")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.city_id,expression:"user.city_id"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"city_id",e.target.multiple?s:s[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v("Selecciona una opción")]),t._l(t.cities_department,(function(s){return e("option",{key:s.id,domProps:{value:s.id}},[t._v(t._s(s.name))])}))],2)]),e("div",{staticClass:"col-md-6"},[e("p",[t._v("Dirección, barrio o localidad (opcional)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.adress,expression:"user.adress"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.adress},on:{input:function(e){e.target.composing||t.$set(t.user,"adress",e.target.value)}}})])]),e("hr",{staticStyle:{color:"var(--color-dark)"}}),e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-md-12"},[e("p",[t._v("Correo")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),e("div",{staticClass:"col-md-6"},[e("p",[t._v("Contraseña")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),e("div",{staticClass:"col-md-6"},[e("p",[t._v("Confirmar Contraseña")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.user.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.user,"password_confirmation",e.target.value)}}})])]),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-md-12 mb-4"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.check_contract,expression:"check_contract"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"permmissions-check"},domProps:{checked:Array.isArray(t.check_contract)?t._i(t.check_contract,null)>-1:t.check_contract},on:{change:function(e){var s=t.check_contract,a=e.target,r=!!a.checked;if(Array.isArray(s)){var o=null,i=t._i(s,o);a.checked?i<0&&(t.check_contract=s.concat([o])):i>-1&&(t.check_contract=s.slice(0,i).concat(s.slice(i+1)))}else t.check_contract=r}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"permmissions-check"}},[e("b",[t._v("He leído y estoy de acuerdo con los "),e("a",{staticClass:"link",attrs:{href:"#"},on:{click:function(e){return t.showModalTerms()}}},[t._v("términos y condiciones")])])])])]),e("div",{staticClass:"col-md-8"}),t._m(1)])])])])])])])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-12 mb-5 mb-lg-0"},[e("div",{staticClass:"info-text"},[e("div",{staticClass:"title-logo"},[e("h1",[t._v("Paf APP")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-4"},[e("button",{staticClass:"btn btn-primary",staticStyle:{width:"100%"}},[t._v("Registrar")])])}],o=s("2f62"),i=s("bc3a"),n=s.n(i),c={data:function(){return{check_contract:!1,not_found:!1,user:{name:"",last_name:"",id_card:"",primary_phone:"",secondary_phone:"",whatsapp:"",city_id:"",department:"",country:"COL",email:"",adress:"",password:"",password_confirmation:"",sponsor_user:"1"},sponsor:{code:"",name:""},welcome:{code:"",name:""}}},methods:{showModalTerms(){$("#modal-terms").modal("show")},confirmTerms(){$("#modal-terms").modal("hide")},continueRegistering(){$("#modal-finish").modal("hide"),this.clearFields()},welcomeTo3B(t){this.welcome.code=t.id,this.welcome.name=t.name+" "+t.last_name,$("#modal-finish").modal("show")},clearFields(){this.user.name="",this.user.last_name="",this.user.id_card="",this.user.primary_phone="",this.user.secondary_phone="",this.user.whatsapp="",this.user.city_id="",this.user.department="",this.user.country="COL",this.user.email="",this.user.adress="",this.user.password="",this.user.password_confirmation="",this.welcome.name="",this.welcome.code=""},searchUser(t){let e=this.api_url+"/api/search/public/users";n.a.post(e,t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(t=>{if(t.data.length<=0)return this.not_found=!0;this.sponsor.code=t.data[0].id,this.user.sponsor_user=t.data[0].id,this.sponsor.name=t.data[0].name+" "+t.data[0].last_name}).catch(t=>console.log(t.response))},filterDepartments(t){this.user.department="",this.user.city_id="",this.getCountryCities(t)},validateRegisterUser(t){if(!this.isValid(t.name))return document.getElementById("name").focus(),this.launchAlert({type:"warning",title:"El nonbre no puede contener numeros"});if(!this.isValid(t.last_name))return document.getElementById("last_name").focus(),this.launchAlert({type:"warning",title:"El apellido no puede contener numeros"});if(!t.primary_phone)return document.getElementById("primary_phone").focus(),this.launchAlert({type:"warning",title:"Es necesario el teléfono de contacto"});if(!this.validateEmail(t.email))return this.launchAlert({type:"warning",title:"Digita un correo válido"});if(!t.city_id)return this.launchAlert({type:"warning",title:"Selecciona una ciudad"});if(!t.sponsor_user)return this.launchAlert({type:"warning",title:"Selecciona un patrocinador"});var e=/\s/;return e.test(t.password)?this.launchAlert({type:"warning",title:"La contraseña no puede contener espacios en blanco"}):t.password.length<3?this.launchAlert({type:"warning",title:"La contraseña debe tener una longitud mínima de 3 carácteres"}):t.password!=t.password_confirmation?this.launchAlert({type:"warning",title:"Las contraseñas no coinciden"}):this.check_contract?void this.registerUser(t).then(t=>"error"==t.data.status&&"id_card"==t.data.case?this.launchAlert({type:"warning",title:"El documento actualmente se encuentra en uso"}):"error"==t.data.status&&"email"==t.data.case?this.launchAlert({type:"warning",title:"El correo actualmente se encuentra en uso"}):(this.clearFields(),void this.welcomeTo3B(t.data.data))).catch(t=>{console.log(t),console.log(t.response)}):this.launchAlert({type:"warning",title:"¡Es necesario aceptar términos para iniciar a ganar!"})},launchAlert(t){t.timeout||(t.timeout=2500);const e=this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:t.timeout});e.fire({icon:t.type,title:t.title,text:t.message})},isValid(t){var e=new RegExp("^[a-zA-ZÀ-ÿ ]+$"),s=t;return!!e.test(s)},validateEmail(t){let e=/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;return!!e.test(t)},filterCitiesFunction(t){this.user.city_id="",this.filterCities(t)},...Object(o["b"])("user",["registerUser"]),...Object(o["c"])("country",["getAllCountries"]),...Object(o["c"])("country",["getCountryCities"]),...Object(o["c"])("country",["filterCities"]),...Object(o["c"])(["loadSessionUser"])},mounted:function(){this.loadSessionUser(),this.getAllCountries(),this.getCountryCities("COL"),this.searchUser({search:this.$route.params.id,order:"ASC",limit:1}),$(".modal-backdrop").remove()},computed:{...Object(o["d"])(["api_url"]),...Object(o["d"])(["session_user"]),...Object(o["d"])("country",["countries"]),...Object(o["d"])("country",["departments"]),...Object(o["d"])("country",["cities_department"])},watch:{check_contract:function(){if(this.check_contract)return this.showModalTerms()}}},l=c,u=(s("8b97"),s("0c7c")),d=Object(u["a"])(l,a,r,!1,null,"c8d14982",null);e["default"]=d.exports},"8b97":function(t,e,s){"use strict";s("525c")}}]);
//# sourceMappingURL=chunk-68b0555c.f8f7136a.js.map