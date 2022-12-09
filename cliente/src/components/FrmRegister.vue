<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                <p>Seleccionar Patrocinador</p>
            </div>
            <div class="col-md-3 mb-2">
                <input type="number" v-model="search_code" class="form-control" placeholder="Buscar código...">
            </div>
            <div class="col-md-6">
                <select class="form-control" v-model="user.sponsor_user">
                    <option value="" selected disabled v-if="users.length <= 0 && search_code">Usuario no encontrado</option>
                    <option v-for="user in users" :key="user.id" :value="user.id">{{user.id +' | '+ user.name + ' ' + user.last_name}}</option>
                </select>
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
                    <p>Teléfono de Contacto</p>
                    <input type="text" id="phone" class="form-control" v-model="user.phone">
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
                <div class="col-md-12">
                    <p>Ciudad</p>
                    <select class="form-control" v-model="user.city_id">
                        <option value="" disabled>Selecciona una opción</option>
                        <option v-for="city in cities_department" :key="city.id" :value="city.id" >{{city.name}}</option>
                    </select>
                </div>
            </div>
            <div class="row mt-2 mb-1">
                <div class="col-md-6">
                    <p>Tipo de Cuenta</p>
                    <select class="form-control" v-model="user.count_type">
                        <option value="Nequi">Nequi</option>
                        <option value="Daviplata">Daviplata</option>
                        <option value="Bancolombia - Ahorros">Bancolombia - Ahorros</option>
                        <option value="Bancolombia - Corriente">Bancolombia - Corriente</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <p>N° de cuenta</p>
                    <input type="text" class="form-control" v-model="user.count_number">
                </div>
            </div>
            <hr style="color: var(--color-dark)">
            <div class="row mt-2">
                <div class="col-md-12">
                    <p>Login</p>
                    <input type="text" class="form-control" v-model="user.login">
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
                <div class="col-md-8"></div>
                <div class="col-md-4">
                    <button class="btn btn-primary" style="width: 100%">Registrar</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import axios from 'axios';
export default {
    props: ['response'],
    data: function(){
        return {
            search_code: '',
            selected_code: '',
            user : {
                name: '',
                last_name: '',
                id_card: '',
                phone: '',
                city_id: '',
                department: '',
                country: 'COL',
                login: '',
                password: '',
                password_confirmation: '',
                sponsor_user: '1',
                count_type: 'Nequi',
                count_number: '',
            },
            users: [],
        }
    },
    methods: {
        showModalContract(){$('#modal-contract').modal('show');},
        confirmContract(){$('#modal-contract').modal('hide');},
        showModalTerms(){$('#modal-terms').modal('show');},
        confirmTerms(){$('#modal-terms').modal('hide');},
        clearFields(){
            this.user.name = '';
            this.user.last_name = '';
            this.user.id_card = '';
            this.user.phone = '';
            this.user.city_id = '';
            this.user.department = '';
            this.user.country = 'COL';
            this.user.login = '';
            this.user.password = '';
            this.user.password_confirmation = '';
            this.user.sponsor_user = '1';
            this.user.count_type = 'Nequi';
            this.user.count_number = '';
            this.searchUser({search: '', order: 'DESC', limit: 20});
        },
        searchUser(search){
            let url = this.api_url+'/api/search/public/users';
            axios.post(url, search, 
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => {
                this.users = res.data;
                if(res.data.length > 0) this.user.sponsor_user = res.data[0].id;
                else this.user.sponsor_user = '';
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
            if(!data.phone){
                document.getElementById('phone').focus();
                return this.launchAlert({type: 'warning', title: 'Es necesario el teléfono de contacto'})
            }
            if(!data.count_number.trim()){
                return this.launchAlert({type: 'warning', title: 'Es necesario el número de cuenta'})
            }
            if(!data.city_id) return this.launchAlert({type: 'warning', title: 'Selecciona una ciudad'})
            if(!data.sponsor_user) return this.launchAlert({type: 'warning', title: 'Selecciona un patrocinador'})

            var noValido = /\s/;
            if(noValido.test(data.password)) return this.launchAlert({type: 'warning', title: 'La contraseña no puede contener espacios en blanco'})
            if(data.password.length < 3) return this.launchAlert({type: 'warning', title: 'La contraseña debe tener una longitud mínima de 3 carácteres'})
            if(data.password != data.password_confirmation) return this.launchAlert({type: 'warning', title: 'Las contraseñas no coinciden'});

            this.registerUser(data).then(res => {
                if(res.data.status == 'error' && res.data.case == 'id_card') return this.launchAlert({type: 'warning', title: 'El documento actualmente se encuentra en uso'})
                if(res.data.status == 'error' && res.data.case == 'email') return this.launchAlert({type: 'warning', title: 'El correo actualmente se encuentra en uso'})
                this.clearFields();
                this.response('success');
                return this.launchAlert({type: 'success', title: 'Usuario registrado exitosamente'})
            }).catch(err => {
                if(err.response.data.case == "max_sp")
                    return this.launchAlert({type: 'error', title: `¡El usuario con código ${this.user.sponsor_user} ya tiene dos usuarios afiliados!`})
                
                if(err.response.data.status === 'error')
                    return this.launchAlert({type: 'error', title: err.response.data.message});

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
        //setTimeout(() => {this.searchUser({search: this.session_user.id, order: 'ASC', limit: 20})}, 100);
        this.getAllCountries();
        this.getCountryCities('COL');
    },
    computed: {
        ...mapState(["api_url"]),
        ...mapState(['session_user']),
        ...mapState("country", ["countries"]),
        ...mapState("country", ["departments"]),
        ...mapState("country", ["cities_department"]),
    },
    watch: {
        search_code: function (){
            if(!this.search_code) this.search_code = 'NADA';
            this.searchUser({search : this.search_code, order: 'ASC', limit: 1});
        },
    }
    
}
</script>
<style>
span.link{color: #007bff;}
span.link:hover{ text-decoration: underline ; }
#modal-terms{
    background: rgba(0, 0, 0, .2);
}
</style>