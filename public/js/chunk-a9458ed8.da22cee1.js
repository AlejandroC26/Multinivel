(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9458ed8"],{"00b4":function(e,a,t){"use strict";t("ac1f");var o=t("23e7"),r=t("da84"),s=t("c65b"),n=t("e330"),i=t("1626"),c=t("861d"),l=function(){var e=!1,a=/[ac]/;return a.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===a.test("abc")&&e}(),d=r.Error,u=n(/./.test);o({target:"RegExp",proto:!0,forced:!l},{test:function(e){var a=this.exec;if(!i(a))return u(this,e);var t=s(a,this,e);if(null!==t&&!c(t))throw new d("RegExp exec method returned something other than an Object or null");return!!t}})},"25f0":function(e,a,t){"use strict";var o=t("e330"),r=t("5e77").PROPER,s=t("6eeb"),n=t("825a"),i=t("3a9b"),c=t("577e"),l=t("d039"),d=t("ad6d"),u="toString",m=RegExp.prototype,p=m[u],v=o(d),f=l((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),h=r&&p.name!=u;(f||h)&&s(RegExp.prototype,u,(function(){var e=n(this),a=c(e.source),t=e.flags,o=c(void 0===t&&i(m,e)&&!("flags"in m)?v(e):t);return"/"+a+"/"+o}),{unsafe:!0})},"2c3e":function(e,a,t){var o=t("da84"),r=t("83ab"),s=t("9f7f").MISSED_STICKY,n=t("c6b6"),i=t("9bf2").f,c=t("69f3").get,l=RegExp.prototype,d=o.TypeError;r&&s&&i(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===n(this))return!!c(this).sticky;throw d("Incompatible receiver, RegExp required")}}})},"4d63":function(e,a,t){var o=t("83ab"),r=t("da84"),s=t("e330"),n=t("94ca"),i=t("7156"),c=t("9112"),l=t("9bf2").f,d=t("241c").f,u=t("3a9b"),m=t("44e7"),p=t("577e"),v=t("ad6d"),f=t("9f7f"),h=t("6eeb"),g=t("d039"),_=t("1a2d"),y=t("69f3").enforce,b=t("2626"),C=t("b622"),E=t("fce3"),w=t("107c"),A=C("match"),x=r.RegExp,I=x.prototype,O=r.SyntaxError,k=s(v),N=s(I.exec),R=s("".charAt),D=s("".replace),q=s("".indexOf),S=s("".slice),j=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,P=/a/g,T=new x(L)!==L,$=f.MISSED_STICKY,U=f.UNSUPPORTED_Y,M=o&&(!T||$||E||w||g((function(){return P[A]=!1,x(L)!=L||x(P)==P||"/a/i"!=x(L,"i")}))),z=function(e){for(var a,t=e.length,o=0,r="",s=!1;o<=t;o++)a=R(e,o),"\\"!==a?s||"."!==a?("["===a?s=!0:"]"===a&&(s=!1),r+=a):r+="[\\s\\S]":r+=a+R(e,++o);return r},B=function(e){for(var a,t=e.length,o=0,r="",s=[],n={},i=!1,c=!1,l=0,d="";o<=t;o++){if(a=R(e,o),"\\"===a)a+=R(e,++o);else if("]"===a)i=!1;else if(!i)switch(!0){case"["===a:i=!0;break;case"("===a:N(j,S(e,o+1))&&(o+=2,c=!0),r+=a,l++;continue;case">"===a&&c:if(""===d||_(n,d))throw new O("Invalid capture group name");n[d]=!0,s[s.length]=[d,l],c=!1,d="";continue}c?d+=a:r+=a}return[r,s]};if(n("RegExp",M)){for(var V=function(e,a){var t,o,r,s,n,l,d=u(I,this),v=m(e),f=void 0===a,h=[],g=e;if(!d&&v&&f&&e.constructor===V)return e;if((v||u(I,e))&&(e=e.source,f&&(a="flags"in g?g.flags:k(g))),e=void 0===e?"":p(e),a=void 0===a?"":p(a),g=e,E&&"dotAll"in L&&(o=!!a&&q(a,"s")>-1,o&&(a=D(a,/s/g,""))),t=a,$&&"sticky"in L&&(r=!!a&&q(a,"y")>-1,r&&U&&(a=D(a,/y/g,""))),w&&(s=B(e),e=s[0],h=s[1]),n=i(x(e,a),d?this:I,V),(o||r||h.length)&&(l=y(n),o&&(l.dotAll=!0,l.raw=V(z(e),t)),r&&(l.sticky=!0),h.length&&(l.groups=h)),e!==g)try{c(n,"source",""===g?"(?:)":g)}catch(_){}return n},Z=function(e){e in V||l(V,e,{configurable:!0,get:function(){return x[e]},set:function(a){x[e]=a}})},F=d(x),Y=0;F.length>Y;)Z(F[Y++]);I.constructor=V,V.prototype=I,h(r,"RegExp",V)}b("RegExp")},7156:function(e,a,t){var o=t("1626"),r=t("861d"),s=t("d2bb");e.exports=function(e,a,t){var n,i;return s&&o(n=a.constructor)&&n!==t&&r(i=n.prototype)&&i!==t.prototype&&s(e,i),e}},"9cec":function(e,a,t){},"9d26":function(e,a,t){"use strict";var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"row"},[e._m(0),t("div",{staticClass:"col-md-3 mb-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search_code,expression:"search_code"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Buscar código..."},domProps:{value:e.search_code},on:{input:function(a){a.target.composing||(e.search_code=a.target.value)}}})]),t("div",{staticClass:"col-md-6"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.user.sponsor_user,expression:"user.sponsor_user"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.user,"sponsor_user",a.target.multiple?t:t[0])}}},[e.users.length<=0&&e.search_code?t("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Usuario no encontrado")]):e._e(),e._l(e.users,(function(a){return t("option",{key:a.id,domProps:{value:a.id}},[e._v(e._s(a.id+" | "+a.name+" "))])}))],2)])]),t("hr",{staticStyle:{color:"var(--color-dark)"}}),t("form",{on:{submit:function(a){return a.preventDefault(),e.validateRegisterUser(e.user)}}},[t("div",{staticClass:"row mt-2 mb-1"},[t("div",{staticClass:"col-md-12"},[t("p",[e._v("Documento")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.id_card,expression:"user.id_card"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.user.id_card},on:{input:function(a){a.target.composing||e.$set(e.user,"id_card",a.target.value)}}})])]),t("div",{staticClass:"row mt-2 mb-1"},[t("div",{staticClass:"col-md-6"},[t("p",[e._v("Nombres")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:e.user.name},on:{input:function(a){a.target.composing||e.$set(e.user,"name",a.target.value)}}})]),t("div",{staticClass:"col-md-6"},[t("p",[e._v("Apellidos")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.last_name,expression:"user.last_name"}],staticClass:"form-control",attrs:{type:"text",id:"last_name"},domProps:{value:e.user.last_name},on:{input:function(a){a.target.composing||e.$set(e.user,"last_name",a.target.value)}}})])]),t("div",{staticClass:"row mt-2 mb-1"},[t("div",{staticClass:"col-md-12"},[t("p",[e._v("WhatsApp")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.whatsapp,expression:"user.whatsapp"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.user.whatsapp},on:{input:function(a){a.target.composing||e.$set(e.user,"whatsapp",a.target.value)}}})])]),t("div",{staticClass:"row mt-2 mb-1"},[t("div",{staticClass:"col-md-6"},[t("p",[e._v("Teléfono de Contacto")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.primary_phone,expression:"user.primary_phone"}],staticClass:"form-control",attrs:{type:"text",id:"primary_phone"},domProps:{value:e.user.primary_phone},on:{input:function(a){a.target.composing||e.$set(e.user,"primary_phone",a.target.value)}}})]),t("div",{staticClass:"col-md-6"},[t("p",[e._v("Teléfono Secundario (opcional)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.secondary_phone,expression:"user.secondary_phone"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.secondary_phone},on:{input:function(a){a.target.composing||e.$set(e.user,"secondary_phone",a.target.value)}}})])]),t("div",{staticClass:"row mt-2 mb-1"},[t("div",{staticClass:"col-md-6"},[t("p",[e._v("País")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.user.country,expression:"user.country"}],staticClass:"form-control",on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.user,"country",a.target.multiple?t:t[0])},function(a){return e.filterDepartments(e.user.country)}]}},e._l(e.countries,(function(a){return t("option",{key:a.code,domProps:{value:a.code}},[e._v(e._s(a.name))])})),0)]),t("div",{staticClass:"col-md-6"},[t("p",[e._v("Departamento")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.user.department,expression:"user.department"}],staticClass:"form-control",on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.user,"department",a.target.multiple?t:t[0])},function(a){return e.filterCitiesFunction(e.user.department)}]}},[t("option",{attrs:{value:"",disabled:""}},[e._v("Selecciona una opción")]),e._l(e.departments,(function(a,o){return t("option",{key:"a"+o},[e._v(e._s(a.name))])}))],2)]),t("div",{staticClass:"col-md-6"},[t("p",[e._v("Ciudad")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.user.city_id,expression:"user.city_id"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(e.user,"city_id",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"",disabled:""}},[e._v("Selecciona una opción")]),e._l(e.cities_department,(function(a){return t("option",{key:a.id,domProps:{value:a.id}},[e._v(e._s(a.name))])}))],2)]),t("div",{staticClass:"col-md-6"},[t("p",[e._v("Dirección, barrio o localidad (opcional)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.adress,expression:"user.adress"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.adress},on:{input:function(a){a.target.composing||e.$set(e.user,"adress",a.target.value)}}})])]),t("hr",{staticStyle:{color:"var(--color-dark)"}}),t("div",{staticClass:"row mt-2"},[t("div",{staticClass:"col-md-12"},[t("p",[e._v("Correo")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.email},on:{input:function(a){a.target.composing||e.$set(e.user,"email",a.target.value)}}})]),t("div",{staticClass:"col-md-6"},[t("p",[e._v("Contraseña")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.user.password},on:{input:function(a){a.target.composing||e.$set(e.user,"password",a.target.value)}}})]),t("div",{staticClass:"col-md-6"},[t("p",[e._v("Confirmar Contraseña")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.user.password_confirmation},on:{input:function(a){a.target.composing||e.$set(e.user,"password_confirmation",a.target.value)}}})])]),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-md-12 mb-4"},[t("div",{staticClass:"custom-control custom-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.check_contract,expression:"check_contract"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"permmissions-check"},domProps:{checked:Array.isArray(e.check_contract)?e._i(e.check_contract,null)>-1:e.check_contract},on:{change:function(a){var t=e.check_contract,o=a.target,r=!!o.checked;if(Array.isArray(t)){var s=null,n=e._i(t,s);o.checked?n<0&&(e.check_contract=t.concat([s])):n>-1&&(e.check_contract=t.slice(0,n).concat(t.slice(n+1)))}else e.check_contract=r}}}),e._m(1)]),t("div",{staticClass:"custom-control custom-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.check_terms,expression:"check_terms"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"terms-check"},domProps:{checked:Array.isArray(e.check_terms)?e._i(e.check_terms,null)>-1:e.check_terms},on:{change:function(a){var t=e.check_terms,o=a.target,r=!!o.checked;if(Array.isArray(t)){var s=null,n=e._i(t,s);o.checked?n<0&&(e.check_terms=t.concat([s])):n>-1&&(e.check_terms=t.slice(0,n).concat(t.slice(n+1)))}else e.check_terms=r}}}),e._m(2)])]),t("div",{staticClass:"col-md-8"}),e._m(3)])]),t("div",{staticClass:"modal fade",attrs:{id:"modal-terms",tabindex:"-1","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog",staticStyle:{"max-width":"650px"}},[t("div",{staticClass:"modal-content"},[e._m(4),e._m(5),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-primary",on:{click:function(a){return e.confirmTerms()}}},[e._v("Confirmar")])])])])]),t("div",{staticClass:"modal fade",attrs:{id:"modal-contract",tabindex:"-1","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog",staticStyle:{"max-width":"650px"}},[t("div",{staticClass:"modal-content"},[e._m(6),e._m(7),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-primary",on:{click:function(a){return e.confirmContract()}}},[e._v("Confirmar")])])])])])])},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-md-3"},[t("p",[e._v("Seleccionar Patrocinador")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("label",{staticClass:"custom-control-label",attrs:{for:"permmissions-check"}},[t("b",[e._v("He leído y estoy de acuerdo con el "),t("span",{staticClass:"link"},[e._v("contrato de afiliación")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("label",{staticClass:"custom-control-label",attrs:{for:"terms-check"}},[t("b",[e._v("He leído y estoy de acuerdo con los "),t("span",{staticClass:"link"},[e._v("términos y condiciones")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-md-4"},[t("button",{staticClass:"btn btn-primary",staticStyle:{width:"100%"}},[e._v("Registrar")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"modal-header"},[t("h3",{staticClass:"modal-title"},[t("p",[e._v("Autorización para tratamiento de datos personales")])]),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"modal-body",staticStyle:{"max-height":"500px","overflow-y":"scroll"}},[t("p",[e._v("De conformidad con lo definido por la Ley 1581 de 2012, el Decreto Reglamentario 1377 de 2013, la Circular Externa 002 de 2015 expedida por la Superintendencia de Industria y Comercio, la política interna de manejo de la información implementada por la sociedad COMERCIALIZADORA MULTINIVEL 3B S.A.S, sociedad legalmente constituida por documento privado del 13 de octubre de 2020, inscrito en el registro mercantil de la Cámara de Comercio de Putumayo el día 14 de octubre de 2020 con el número 9548 del libro IX, con domicilio en Puerto Guzmán, Putumayo, con NIT. 901422267-9, y las demás normas concordantes, a través de las cuales se establecen disposiciones generales en materia de hábeas data y se regula el tratamiento de la información que contenga datos personales, me permito declarar de manera expresa que:")]),t("p",[e._v("PRIMERO. Autorizo de manera libre, voluntaria, previa, explícita, informada e inequívoca a la sociedad COMERCIALIZADORA MULTINIVEL 3B S.A.S, para que en los términos legalmente establecidos realice la recolección, almacenamiento, uso, circulación, supresión y en general, el tratamiento de los datos personales que he procedido a entregar o que entregaré, en virtud de las relaciones legales, contractuales, comerciales y/o de cualquier otra índole que surja, en desarrollo y ejecución de los fines descritos en el presente documento.")]),t("p",[e._v("SEGUNDO. Dicha autorización para adelantar el tratamiento de mis datos personales, se extiende durante la totalidad del tiempo en el que pueda llegar consolidarse un vínculo o este persista por cualquier circunstancia con la sociedad COMERCIALIZADORA MULTINIVEL 3B S.A.S y con posterioridad al fenecimiento del mismo, siempre que tal tratamiento se encuentre relacionado con las finalidades para las cuales los datos personales, fueron inicialmente suministrados.")]),t("p",[e._v("TERCERO. En ese sentido, declaro conocer que los datos personales objeto de tratamiento, serán utilizados específicamente para las finalidades derivadas como VENDEDOR INDEPENDIENTE.")]),t("p",[e._v("CUARTO. Der igual forma, declaro que me han sido informados y conozco los derechos que el ordenamiento legal y la jurisprudencia, conceden al titular de los datos personales y que incluyen entre otras prerrogativas las que a continuación se relacionan: 1.) Conocer, actualizar y rectificar datos personales frente a los responsables o encargados del tratamiento. Este derecho se podrá ejercer, entre otros frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo tratamiento esté expresamente prohibido o no haya sido autorizado, 2.) solicitar prueba de la autorización otorgada al responsable del tratamiento salvo cuando expresamente se exceptúe como requisito para el tratamiento, 3.) ser informado por el responsable del tratamiento o el encargado del tratamiento, previa solicitud, respecto del uso que le ha dado a mis datos personales, 4.) presentar ante la Superintendencia de Industria y Comercio quejas por infracciones al régimen de protección de datos personales, 5.) revocar la autorización y/o solicitar la supresión del dato personal cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales y 6.) acceder en forma gratuita a mis datos personales que hayan sido objeto de Tratamiento.")]),t("p",[e._v("QUINTO. La política de manejo de datos personales adoptada por la sociedad COMERCIALIZADORA MULTINIVEL 3B S.A.S, se encuentran en la página web.")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"modal-header"},[t("h3",{staticClass:"modal-title"},[t("p",[e._v("Contrato de vinculación")])]),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"modal-body",staticStyle:{"max-height":"500px","overflow-y":"scroll"}},[t("p",[e._v("INTERPRETACIÓN")]),t("p",[e._v("Para la adecuada interpretación de este contrato, los términos que aparezcan en mayúsculas iniciales tendrán el significado que se les atribuye en el presente contrato. Los términos definidos en singular incluyen su acepción en plural cuando a ello hubiere lugar, y aquellos definidos en género masculino incluyen su acepción en género femenino cuando a ello hubiere lugar. Los términos que no sean expresamente definidos deberán entenderse de acuerdo con el sentido que les confiera el lenguaje técnico respectivo o por su significado y sentido natural y obvio, de conformidad con su uso general")]),t("p",[e._v("CONSIDERACIONES PRELIMINARES")]),t("p",[e._v("1. La COMERCIALIZADORA 3B MULTINIVEL 3B S.A.S con NIT 901.422.267-9 tiene por objeto social la ejecución de operaciones y actos de comercio relacionados con actividades organizadas de mercadeo, de promoción o de ventas donde confluyen la búsqueda o incorporación de personas naturales con el fin último de vender determinados bienes, productos y servicios, el pago o la obtención de compensaciones u otros beneficios económicos relacionados directamente con la venta de bienes, productos y servicios a través de las personas incorporadas y la coordinación, dentro de una misma red comercial, de las personas incorporadas para la respectiva operación o acto de comercio de conformidad con lo dispuesto en la Ley 1700 del 2013, el Decreto Reglamentario 024 del 12 de enero de 2016 y cualquier norma concordante o reglamentaria que aplique. ")]),t("p",[e._v("2. En desarrollo de su objeto social, la COMERCIALIZADORA 3B ha desplegado diferentes estrategias de mercadeo para vincular a los sujetos interesados a su red de mercadeo multinivel, a través de videos informativos, volantes, charlas y otros medios de comunicación que establecen de manera clara y precisa el fin último de las actividades comerciales de bienes, productos y servicios a través de la estrategia de mercadeo llamada multinivel o mercadeo en red, y los beneficios para sus VENDEDOR INDEPENDIENTE (AFILIADO), dando a conocer de manera previa el plan de compensación, el cual hace parte integral de este contrato, en cumplimiento del mandato expresado en el artículo 2.2.2.50.2 del Decreto Reglamentario 024 del 12 de enero de 2016, señalándole de manera clara y categórica que los beneficios económicos a los que pueda acceder guardan un relación de causalidad directa con la venta de los bienes, productos y servicios objeto de la actividad mercantil de la COMERCIALIZADORA 3B. ")]),t("p",[e._v("3. El VENDEDOR INDEPENDIENTE (AFILIADO) como consecuencia de la información recibida suscribió una declaración de vinculación, de manera libre y espontanea, manifestando haber recibido información suficiente y satisfactoria sobre las condiciones y la naturaleza jurídica del negocio con la COMERCIALIZADORA 3B.")]),t("p",[e._v("4. El VENDEDOR INDEPENDIENTE (AFILIADO), arriba identificado(a), es mayor de edad y se encuentra interesado en hacer parte del multinivel o red de mercadeo, siendo este un sistema de distribución lícito, organizado por la COMERCIALIZADORA 3B, consistente en la creación de una red de mercadeo con 5 niveles de vendedores independientes. Los vendedores independientes (afiliados), recomiendan a otros vendedores independientes para conformar su primer nivel y cuya distribución será fundamentalmente proporcional al volumen de negocio que cada componente haya logrado, según el plan de compensación que hace parte integra del presente documento")]),t("p",[e._v("5. Para el VENDEDOR INDEPENDIENTE (AFILIADO) es claro que las posibles ganancias que pueda obtener al suscribir el contrato como VENDEDOR INDEPENDIENTE dependen de su ejercicio como tal, manifestando categóricamente que no hay atajos, ni garantía de éxito. Así mismo, comprender que, la utilidad que reciba de las ventas según el plan de compensación ya distinguido se liquidara sobre concepto de venta neta, es decir que se liquidara el porcentaje que corresponda después de deducir gastos como impuestos, descuentos, devoluciones, entre otros.")]),t("p",[e._v("6. Así las cosas, las partes declaran que actúan y actuarán, bajo el principio de la buena fe en todas las etapas del desarrollo del objeto del presente contrato.")]),t("p",[e._v("7. Finalmente, las partes reconocen que de la celebración del presente contrato NO SE CONSTITUYE una sociedad de hecho, como tampoco una relación laboral, de modo que, tanto el éxito que resulte de la colaboración, como la responsabilidad de cada una de las partes en la ejecución de sus obligaciones, es suya propia, en relación con la responsabilidad, compromiso y diligencia en el cumplimiento de sus obligaciones enmarcadas en el cuerpo de este contrato. ")])])}],s=t("5530"),n=(t("b0c0"),t("ac1f"),t("00b4"),t("4d63"),t("c607"),t("2c3e"),t("25f0"),t("2f62")),i=t("bc3a"),c=t.n(i),l={props:["response"],data:function(){return{check_terms:!1,check_contract:!1,search_code:"",selected_code:"",user:{name:"",last_name:"",id_card:"",primary_phone:"",secondary_phone:"",whatsapp:"",city_id:"",department:"",country:"COL",email:"",adress:"",password:"",password_confirmation:"",sponsor_user:"1"},users:[]}},methods:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({showModalContract:function(){$("#modal-contract").modal("show")},confirmContract:function(){$("#modal-contract").modal("hide")},showModalTerms:function(){$("#modal-terms").modal("show")},confirmTerms:function(){$("#modal-terms").modal("hide")},clearFields:function(){this.user.name="",this.user.last_name="",this.user.id_card="",this.user.primary_phone="",this.user.secondary_phone="",this.user.whatsapp="",this.user.city_id="",this.user.department="",this.user.country="COL",this.user.email="",this.user.adress="",this.user.password="",this.user.password_confirmation="",this.user.sponsor_user="1",this.searchUser({search:"",order:"DESC",limit:20})},searchUser:function(e){var a=this,t=this.api_url+"/api/search/public/users";c.a.post(t,e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){a.users=e.data,e.data.length>0?a.user.sponsor_user=e.data[0].id:a.user.sponsor_user=""})).catch((function(e){return console.log(e.response)}))},filterDepartments:function(e){this.user.department="",this.user.city_id="",this.getCountryCities(e)},validateRegisterUser:function(e){var a=this;if(!this.isValid(e.name))return document.getElementById("name").focus(),this.launchAlert({type:"warning",title:"El nonbre no puede contener numeros"});if(!this.isValid(e.last_name))return document.getElementById("last_name").focus(),this.launchAlert({type:"warning",title:"El apellido no puede contener numeros"});if(!e.primary_phone)return document.getElementById("primary_phone").focus(),this.launchAlert({type:"warning",title:"Es necesario el teléfono de contacto"});if(!this.validateEmail(e.email))return this.launchAlert({type:"warning",title:"Digita un correo válido"});if(!e.city_id)return this.launchAlert({type:"warning",title:"Selecciona una ciudad"});if(!e.sponsor_user)return this.launchAlert({type:"warning",title:"Selecciona un patrocinador"});var t=/\s/;return t.test(e.password)?this.launchAlert({type:"warning",title:"La contraseña no puede contener espacios en blanco"}):e.password.length<3?this.launchAlert({type:"warning",title:"La contraseña debe tener una longitud mínima de 3 carácteres"}):e.password!=e.password_confirmation?this.launchAlert({type:"warning",title:"Las contraseñas no coinciden"}):this.check_terms?this.check_contract?void this.registerUser(e).then((function(e){return"error"==e.data.status&&"id_card"==e.data.case?a.launchAlert({type:"warning",title:"El documento actualmente se encuentra en uso"}):"error"==e.data.status&&"email"==e.data.case?a.launchAlert({type:"warning",title:"El correo actualmente se encuentra en uso"}):(a.clearFields(),a.response("success"),a.launchAlert({type:"success",title:"Usuario registrado exitosamente"}))})).catch((function(e){console.log(e),console.log(e.response)})):this.launchAlert({type:"warning",title:"¡Es necesario leer y aceptar el contrato para iniciar!"}):this.launchAlert({type:"warning",title:"¡Es necesario aceptar términos para iniciar a ganar!"})},launchAlert:function(e){e.timeout||(e.timeout=2500);var a=this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:e.timeout});a.fire({icon:e.type,title:e.title,text:e.message})},isValid:function(e){var a=new RegExp("^[a-zA-ZÀ-ÿ ]+$"),t=e;return!!a.test(t)},validateEmail:function(e){var a=/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;return!!a.test(e)},filterCitiesFunction:function(e){this.user.city_id="",this.filterCities(e)}},Object(n["b"])("user",["registerUser"])),Object(n["c"])("country",["getAllCountries"])),Object(n["c"])("country",["getCountryCities"])),Object(n["c"])("country",["filterCities"])),Object(n["c"])(["loadSessionUser"])),mounted:function(){var e=this;this.loadSessionUser(),setTimeout((function(){e.searchUser({search:e.session_user.id,order:"ASC",limit:20})}),100),this.getAllCountries(),this.getCountryCities("COL")},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(n["d"])(["api_url"])),Object(n["d"])(["session_user"])),Object(n["d"])("country",["countries"])),Object(n["d"])("country",["departments"])),Object(n["d"])("country",["cities_department"])),watch:{search_code:function(){this.searchUser({search:this.search_code,order:"ASC",limit:20})},check_contract:function(){if(this.check_contract)return this.showModalContract()},check_terms:function(){if(this.check_terms)return this.showModalTerms()}}},d=l,u=(t("f723"),t("0c7c")),m=Object(u["a"])(d,o,r,!1,null,null,null);a["a"]=m.exports},c607:function(e,a,t){var o=t("da84"),r=t("83ab"),s=t("fce3"),n=t("c6b6"),i=t("9bf2").f,c=t("69f3").get,l=RegExp.prototype,d=o.TypeError;r&&s&&i(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===n(this))return!!c(this).dotAll;throw d("Incompatible receiver, RegExp required")}}})},f723:function(e,a,t){"use strict";t("9cec")}}]);
//# sourceMappingURL=chunk-a9458ed8.da22cee1.js.map