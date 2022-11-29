<template>
    <div class="login"> 
        <main>
            <section class="text-center text-lg-start">
                <div class="container py-4" style="max-width: 1200px;">
                    <div class="row g-0">
                        <div class="col-lg-12 mb-5 mb-lg-0">
                            <div class="info-text">
                            <div class="title-logo">
                                <h1>Paf APP</h1>
                            </div>
                            </div>
                        </div>
                        <div class="info-card mb-4" style="
                            text-align;
                            max-width: 900px;
                            display: block;
                            margin: 0 auto;
                        " v-if="not_found">
                            <h1>¡Usuario no encontrado!</h1>
                            <router-link to="/">Volver al inicio</router-link>
                        </div>
                        <div class="info-card mb-4" style="
                            text-align: left;
                            max-width: 900px;
                            display: block;
                            margin: 0 auto;
                        " v-else>
                            <div class="row">
                                <div class="col">
                                    <p>
                                        <span style="color: var(--color-dark)">Referido por: </span>
                                        ({{sponsor.code}}) {{sponsor.name}}
                                    </p>
                                </div>
                            </div>
                            <hr style="color: var(--color-dark)">
                            <form @submit.prevent="validateRegisterUser(user)">
                                <div class="row mt-2 mb-1">
                                    <div class="col-md-12">
                                        <p>Documento</p>
                                        <input type="number" class="form-control" v-model="user.id_card">
                                    </div>
                                </div>
                                <div class="row mt-2 mb-1">
                                    <div class="col-md-6">
                                        <p>Nombres</p>
                                        <input type="text" id="name" class="form-control" v-model="user.name">
                                    </div>
                                    <div class="col-md-6">
                                        <p>Apellidos</p>
                                        <input type="text" id="last_name" class="form-control" v-model="user.last_name">
                                    </div>
                                </div>
                                <div class="row mt-2 mb-1">
                                    <div class="col-md-12">
                                        <p>WhatsApp</p>
                                        <input type="number" class="form-control" v-model="user.whatsapp">
                                    </div>
                                </div>
                                <div class="row mt-2 mb-1">
                                    <div class="col-md-6">
                                        <p>Teléfono de Contacto</p>
                                        <input type="text" id="primary_phone" class="form-control" v-model="user.primary_phone">
                                    </div>
                                    <div class="col-md-6">
                                        <p>Teléfono Secundario (opcional)</p>
                                        <input type="text" class="form-control" v-model="user.secondary_phone">
                                    </div>
                                </div>
                                <div class="row mt-2 mb-1">
                                    <div class="col-md-6">
                                        <p>País</p>
                                        <select class="form-control" v-model="user.country" @change="filterDepartments(user.country)">
                                            <option v-for="country in countries" :key="country.code" :value="country.code" >{{country.name}}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Departamento</p>
                                        <select class="form-control" v-model="user.department" @change="filterCitiesFunction(user.department)">
                                            <option value="" disabled>Selecciona una opción</option>
                                            <option v-for="(deparment, index) in departments" :key="'a'+index">{{deparment.name}}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Ciudad</p>
                                        <select class="form-control" v-model="user.city_id">
                                            <option value="" disabled>Selecciona una opción</option>
                                            <option v-for="city in cities_department" :key="city.id" :value="city.id" >{{city.name}}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Dirección, barrio o localidad (opcional)</p>
                                        <input type="text" class="form-control" v-model="user.adress">
                                    </div>
                                </div>
                                <hr style="color: var(--color-dark)">
                                <div class="row mt-2">
                                    <div class="col-md-12">
                                        <p>Correo</p>
                                        <input type="text" class="form-control" v-model="user.email">
                                    </div>
                                    <div class="col-md-6">
                                        <p>Contraseña</p>
                                        <input type="password" class="form-control" v-model="user.password">
                                    </div>
                                    <div class="col-md-6">
                                        <p>Confirmar Contraseña</p>
                                        <input type="password" class="form-control" v-model="user.password_confirmation">
                                    </div>
                                </div>
                
                                <div class="row mt-3">
                                    <div class="col-md-12 mb-4">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input"
                                            v-model="check_contract"
                                            id="permmissions-check">
                                            <label class="custom-control-label" for="permmissions-check">
                                                <b>He leído y estoy de acuerdo con los <a href="#" @click="showModalTerms()" class="link">términos y condiciones</a></b>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-8"></div>
                                    <div class="col-md-4">
                                        <button class="btn btn-primary" style="width: 100%">Registrar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import axios from 'axios';
export default {
    data: function(){
        return {
            check_contract: false,
            not_found: false,
            user : {
                name: '',
                last_name: '',
                id_card: '',
                primary_phone: '',
                secondary_phone: '',
                whatsapp: '',
                city_id: '',
                department: '',
                country: 'COL',
                email: '',
                adress: '',
                password: '',
                password_confirmation: '',
                sponsor_user: '1'
            },
            sponsor: {
                code: '',
                name: '',
            },
            welcome: {
                code: '',
                name: '',
            }
        }
    },
    methods: {
        showModalTerms(){$('#modal-terms').modal('show');},
        confirmTerms(){$('#modal-terms').modal('hide');},
        continueRegistering(){
            $('#modal-finish').modal('hide');
            this.clearFields();
        },
        welcomeTo3B(data){
            this.welcome.code = data.id;
            this.welcome.name = data.name + ' ' + data.last_name;
            $('#modal-finish').modal('show');
        },
        clearFields(){
            this.user.name = '';
            this.user.last_name = '';
            this.user.id_card = '';
            this.user.primary_phone = '';
            this.user.secondary_phone = '';
            this.user.whatsapp = '';
            this.user.city_id = '';
            this.user.department = '';
            this.user.country = 'COL';
            this.user.email = '';
            this.user.adress = '';
            this.user.password = '';
            this.user.password_confirmation = '';
            //WELCOME MESSAGE
            this.welcome.name = '';
            this.welcome.code = '';
        },
        searchUser(search){
            let url = this.api_url+'/api/search/public/users';
            axios.post(url, search, 
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => {
                if(res.data.length <= 0) return this.not_found = true;
                this.sponsor.code = res.data[0].id;
                this.user.sponsor_user = res.data[0].id;
                this.sponsor.name = res.data[0].name +' '+ res.data[0].last_name;
            }).catch(e=> console.log(e.response))
        },
        filterDepartments(code){
            this.user.department = '';
            this.user.city_id = '';
            this.getCountryCities(code);
        },
        validateRegisterUser(data){
            if(!this.isValid(data.name)){
                document.getElementById('name').focus();
                return this.launchAlert({type: 'warning', title: 'El nonbre no puede contener numeros'})
            }
            if(!this.isValid(data.last_name)){
                document.getElementById('last_name').focus();
                return this.launchAlert({type: 'warning', title: 'El apellido no puede contener numeros'})
            }
            if(!data.primary_phone){
                document.getElementById('primary_phone').focus();
                return this.launchAlert({type: 'warning', title: 'Es necesario el teléfono de contacto'})
            }
            if(!this.validateEmail(data.email)){
                return this.launchAlert({type: 'warning', title: 'Digita un correo válido'})
            }
            if(!data.city_id) return this.launchAlert({type: 'warning', title: 'Selecciona una ciudad'})
            if(!data.sponsor_user) return this.launchAlert({type: 'warning', title: 'Selecciona un patrocinador'})

            var noValido = /\s/;
            if(noValido.test(data.password)) return this.launchAlert({type: 'warning', title: 'La contraseña no puede contener espacios en blanco'})
            if(data.password.length < 3) return this.launchAlert({type: 'warning', title: 'La contraseña debe tener una longitud mínima de 3 carácteres'})
            if(data.password != data.password_confirmation) return this.launchAlert({type: 'warning', title: 'Las contraseñas no coinciden'});
            if(!this.check_contract) return this.launchAlert({type: 'warning', title: '¡Es necesario aceptar términos para iniciar a ganar!'})

            this.registerUser(data).then(res => {
                if(res.data.status == 'error' && res.data.case == 'id_card') return this.launchAlert({type: 'warning', title: 'El documento actualmente se encuentra en uso'})
                if(res.data.status == 'error' && res.data.case == 'email') return this.launchAlert({type: 'warning', title: 'El correo actualmente se encuentra en uso'})
                this.clearFields();
                this.welcomeTo3B(res.data.data);
            }).catch(err => {
                console.log(err)
                console.log(err.response)
            })
        },
        launchAlert(config){
            if(!config.timeout) config.timeout = 2500;
            const Toast = this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: config.timeout,
            })
            Toast.fire({
                icon: config.type,
                title: config.title,
                text: config.message,
            })
        },
        isValid(data){
            var regex = new RegExp("^[a-zA-ZÀ-ÿ ]+$");
            var key = data;
            if (!regex.test(key)) return false
            return true;
        },
        validateEmail(email) {
            let re = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
            if (re.test(email)) return true
            else return false
        },
        filterCitiesFunction(department){
            this.user.city_id = '';
            this.filterCities(department);
        },
        ...mapActions("user", ["registerUser"]),
        ...mapMutations("country", ["getAllCountries"]),
        ...mapMutations("country", ["getCountryCities"]),
        ...mapMutations("country", ["filterCities"]),
        ...mapMutations(['loadSessionUser']),
    },
    mounted: function(){
        this.loadSessionUser();
        this.getAllCountries();
        this.getCountryCities('COL');
        this.searchUser({search : this.$route.params.id, order: 'ASC', limit: 1});
        $('.modal-backdrop').remove();
    },
    computed: {
        ...mapState(["api_url"]),
        ...mapState(['session_user']),
        ...mapState("country", ["countries"]),
        ...mapState("country", ["departments"]),
        ...mapState("country", ["cities_department"]),
    },
    watch: {
        check_contract: function (){
            if(this.check_contract) return this.showModalTerms();
        }
    
    }
    
}
</script>
<style scoped>
  .login{
    background-color: rgba(210, 228, 247, .3);
    font-family: 'Tahoma', sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .login main {min-width: 100vw; margin-top: 0;}
  .info-text{padding: 1rem 2rem 1rem 2rem; text-align: center;}
  .info-text h1{
    display: inline;
    font-size: 2.8rem;
    font-weight: bold;
    color: rgba(84, 98, 205, .7);
    text-shadow: 0 0 1px  rgb(86, 101, 211);
  }
  .info-text h2 {
    font-size: 1.6rem;
    color: rgba(111, 122, 205, .3);
    text-shadow: 0 0 1px  rgb(111, 122, 205);
  }
  .info-text h3 {
    font-size: 1.3rem;
    color: var(--color-dark-variant);
  }
  .info-text img{
    margin-left: 20px;
    display: inline;
    width: 100px;
  }
  .btn-login,
  .btn-register{
    padding: .5rem 1.2rem;
    border-radius: .2rem;
    font-size: 1.5rem;
    font-family: "Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",
    Roboto,"Helvetica Neue",Arial,sans-serif,
    "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  .btn-login{
    color: #fff;
    background-color: rgb(106, 118, 205);
  }
  .btn-register{
    display: block;
    text-align: center;
    padding: 0 1rem;
  }
  @media screen and (max-width: 992px){
    .info-text{padding: 3rem 2rem 1rem 2rem; text-align: center;}
  }
</style>
