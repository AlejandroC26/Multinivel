<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1>Edición de Usuario</h1>
            <div class="info-card">
                <p>Patrocinadores</p>
                <hr>
                <div v-if="!user.num_sponsors && !user.loaded_sponsors">
                    <div style="display: flex; justify-content: center; ">
                        <div class="lds-facebook"><div></div><div></div><div></div></div>
                    </div>
                </div>
                <div v-else>
                    <div class="row">
                        <div class="col-4"><p>Patrocinador</p></div>
                        <div class="col-2"><p>Código</p></div>
                        <div class="col-6"><p>Nombre</p></div>
                    </div>
                    <div class="row" v-if="!user.num_sponsors && user.loaded_sponsors">
                        <div class="col-4">Patrocinador 1</div>
                        <div class="col-2">...</div>
                        <div class="col-6">Main</div>
                    </div>
                    <div class="row" v-for="i in user.num_sponsors" :key="i">
                        <div class="col-4"><p>Patrocinador {{i}}</p></div>
                        <div class="col-2"><p>{{user.sponsors[i].code}}</p></div>
                        <div class="col-6"><p>{{user.sponsors[i].name}}</p></div>
                    </div>
                </div>
            </div>
            <div class="info-card" v-if="user.id">
                <div class="row">
                    <div class="col-sm-3">
                        <p>Patrocinador</p>
                    </div>
                    <div class="col-sm-5 mb-2" v-if="user.sponsors[1]">
                        {{user.sponsors[1].code + ' | ' + user.sponsors[1].name}}
                    </div>
                    <div class="col-sm-5 mb-2" v-else>
                        Main
                    </div>
                    <div class="col-sm-4" v-if="session_user.pages.user_sp_edit">
                        <button style="width: 100%;" class="btn btn-secondary" @click="changeSponsorModal()">Editar Patrocinador</button>
                    </div>
                </div>
                <hr style="color: var(--color-dark)">
                <!---------------------------------->
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-personal-tab" data-toggle="tab" data-target="#nav-personal" type="button" role="tab" aria-controls="nav-personal" aria-selected="true">Información Personal</button>
                        <button class="nav-link" id="nav-contact-tab" data-toggle="tab" data-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Información de Contacto</button>
                        <button class="nav-link" id="nav-access-tab" data-toggle="tab" data-target="#nav-access" type="button" role="tab" aria-controls="nav-access" aria-selected="false">Información de Acceso</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-personal" role="tabpanel" aria-labelledby="nav-personal-tab">
                        <div class="row mt-3 mb-1">
                            <div class="col-md-3">
                                <p>Código</p>
                                <p type="text" class="form-control" style="cursor: not-allowed">{{user.id}}</p>
                            </div>
                            <div class="col-md-9">
                                <p>Documento</p>
                                <input type="number" v-model="user.id_card" class="form-control">
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
                            <div class="col-md-6">
                                <p>Tipo de Cuenta</p>
                                <select class="form-control" v-model="user.count_type">
                                    <option value="Nequi">Nequi</option>
                                    <option value="Bancolombia - Ahorros">Bancolombia - Ahorros</option>
                                    <option value="Bancolombia - Corriente">Bancolombia - Corriente</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <p>N° de cuenta</p>
                                <input type="text" class="form-control" v-model="user.count_number">
                            </div>
                        </div>
                        <div class="row mt-3"
                            v-if="this.user.consignment">
                            <div class="col-md-6"
                                v-if="this.user.consignment">
                                <p>Comprobante</p>
                                <span class="link" @click="downloadFile()">{{this.user.consignment}}</span>
                            </div>
                            <div class="col-md-6">
                                <p>Estado</p>
                                <select class="form-control" v-model="user.state">
                                    <option value="Revisión">Revisión</option>
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <!------------------------- -->
                        <div class="row mt-2 mb-1">
                            <div class="col-lg-12">
                                <p>Teléfono</p>
                                <input type="number" id="phone" class="form-control" v-model="user.phone">
                            </div>
                        </div>
                        <!--------------------------->
                        <div class="row mt-2 mb-1">
                            <div class="col-md-12">
                                <p>País</p>
                                <select class="form-control" v-model="user.country" @change="filterDepartments(user.country)">
                                    <option v-for="country in countries" :key="country.code" :value="country.code" >{{country.name}}</option>
                                </select>
                            </div>
                        </div>
                        <!--------------------------->
                        <div class="row mt-2 mb-1">
                            <div class="col-lg-6">
                                <p>Departamento</p>
                                <select class="form-control" v-model="user.department" @change="filterCitiesProfile(user.department)">
                                    <option value="" disabled>Selecciona un Departamento</option>
                                    <option v-for="(deparment, index) in departments" :key="'a'+index">{{deparment.name}}</option>
                                </select>
                            </div>
                            <div class="col-lg-6">
                                <p>Ciudad</p>
                                <select class="form-control" v-model="user.city_id">
                                    <option value="" disabled selected>Selecciona una ciudad</option>
                                    <option v-for="city in cities_department" :key="city.id" :value="city.id" >{{city.name}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-access" role="tabpanel" aria-labelledby="nav-access-tab">
                        <div class="row mt-3 mb-1">
                            <div class="col-md-12">
                                <p>Login</p>
                                <input type="text" class="form-control" v-model="user.login">
                            </div>
                        </div>
                        <div class="row mt-2 mb-1">
                            <div class="col-8">
                                <p>Contraseña</p>
                                <p class="form-control">****</p>
                            </div>
                            <div class="col-4">
                                <button class="mt-4 btn btn-secondary" style="width: 100%;" @click="modalPassword()">Restablecer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-9"></div>
                    <div class="col-md-3">
                        <button class="btn btn-primary" style="width: 100%;" @click="updateUserFunction(user)">Editar</button>
                    </div>
                </div>
            </div>
            <!--------LOADING-------->
            <div class="info-card" v-else>
                <div style="display: flex; justify-content: center; ">
                    <div class="lds-dual-ring"></div>
                </div>
            </div>
        </main>
        <Right />
        <!---------MODAL------------->
        <div class="modal fade" id="modal-sponsor-edit" tabindex="-1" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Editar Patrocinador</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-3">
                                <p>Seleccionar</p>
                            </div>
                            <div class="col-md-3 mb-2">
                                <input type="number" v-model="search_code" class="form-control" placeholder="Buscar código...">
                            </div>
                            <div class="col-md-6">
                                <select class="form-control" v-model="user.sponsor_user">
                                    <option value="" selected disabled v-if="users.length <= 0">Usuario no encontrado</option>
                                    <option v-for="user in users" :key="user.id" :value="user.id">{{user.id +' | '+ user.name + ' '}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="updateUserFunction(user)" class="btn btn-primary" style="min-width: 200px;">Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import axios from 'axios';
import Aside from '../components/Aside.vue';
import Right from '../components/Right.vue';

export default {
    name: "UserEdit",
    components: {
        Aside,
        Right,
    },
    data: function (){
        return {
            search_code: '',
            loaded_user : false,
            lines: [{0: ''},{1: ''},{2: ''},{3: ''},{4: ''},],
            users: [],
        }
    },
    methods: {
        searchUser(search){
            let url = this.api_url+'/api/search/users';
            axios.post(url, search, 
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => {
                this.users = res.data;
                if(res.data.length > 0) this.user.sponsor_user = res.data[0].id;
                else this.user.sponsor_user = '';
            }).catch(e=> console.log(e.response))
        },
        changeSponsorModal(){
            $('#modal-sponsor-edit').modal('show')
        },
        filterCitiesProfile(department){
            this.user.city_id = '';
            this.filterCities(department)
        },
        updateUserFunction(data){
            if(!this.isValid(data.name)){
                document.getElementById('name').focus();
                return this.launchAlert({type: 'warning', title: 'El nonbre no puede contener numeros'})
            }
            if(!this.isValid(data.last_name)){
                document.getElementById('last_name').focus();
                return this.launchAlert({type: 'warning', title: 'El apellido no puede contener numeros'})
            }
            if(!data.phone){
                document.getElementById('primary_phone').focus();
                return this.launchAlert({type: 'warning', title: 'Es necesario el teléfono de contacto'})
            }
            if(!data.city_id) return this.launchAlert({type: 'warning', title: 'Selecciona una ciudad'})
            /* ===UPDATE=== */
            delete data.consignment;
            this.updateUser(data).then(res=>{
                if(res.status === 201) {
                    this.loadUser(this.$route.params.id);
                    this.loadSponsors(this.$route.params.id);
                    $('#modal-sponsor-edit').modal('hide')
                    return this.launchAlert({type: 'success', title: '¡Usuario actualizado!'})
                }
                else {
                    if(res.data.status == 'error' && res.data.case == 'id_card') return this.launchAlert({type: 'error', title: 'Este documento ya se encuentra en uso'})
                    if(res.data.status == 'error' && res.data.case == 'email') return this.launchAlert({type: 'error', title: 'Este correo ya se encuentra en uso'})
                    return this.launchAlert({type: 'error', title: 'Ha surgido un error'})
                }
            })
            .catch(e=> {
                console.log(e.response)
                return this.launchAlert({type: 'error', title: 'Ha surgido un error'})
            })
        },
        modalPassword(){
            this.$swal.fire({
                title: '¿Estás seguro que deseas restablecer esta contraseña?',
                text: 'Una vez restablecida será por defecto el número de documento',
                showDenyButton: true,
                confirmButtonText: 'Confirmar',
                denyButtonText: `Cancelar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.resetePassword({id: this.user.id}).then(res => {
                        return this.launchAlert({type: 'success', title: '¡Contraseña restablecida exitosamente!'})
                    }).catch(e => console.log(e.response))
                }
            })
        },
        isValid(data){
            var regex = new RegExp("^[a-zA-ZÀ-ÿ ]+$");
            var key = data;
            if (!regex.test(key)) return false
            return true;
        },
        async downloadFile(){
            try {
                const imgFile = await this.showFile({id: this.user.id});
                const linkSource = `data:image/jpeg;base64,${imgFile.data.data}`;
                const downloadLink = document.createElement("a");
                const fileName = 'consignment_'+this.user.id+'.jpeg';
                downloadLink.href = linkSource;
                downloadLink.download = fileName;
                downloadLink.click();
            } catch (e) {
                console.log(e)
            }
        },
        validateEmail(email) {
            let re = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
            if (re.test(email)) return true
            else return false
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
        filterDepartments(code){
            this.user.department = '';
            this.user.city_id = '';
            this.getCountryCities(code);
        },
        ...mapActions("user", ["updateUser"]),
        ...mapActions("user", ["resetePassword"]),
        ...mapActions("user", ["getUsersLine"]),
        ...mapActions("user", ["showFile"]),
        ...mapActions("country", ["getCity"]),
        ...mapMutations(["loadSessionUser"]),
        ...mapMutations("user", ["loadUser"]),
        ...mapMutations("user", ["loadSponsors"]),
        ...mapMutations("country", ["getAllCountries"]),
        ...mapMutations("country", ["getCountryCities"]),
        ...mapMutations("country", ["filterCities"]),
    },
    mounted: function () {
        $('.modal-backdrop').remove();
        this.loadSessionUser();
        this.getAllCountries();
        this.loadUser(this.$route.params.id);
        this.loadSponsors(this.$route.params.id);
        setTimeout(() => {this.searchUser({search: this.user.sponsor_user});}, 1000);
        setTimeout(() => {this.loaded_user = true;}, 400);
        setTimeout(() => {
            if(!this.user.country) return this.getCountryCities('COL');
            this.getCountryCities(this.user.country);
        ;}, 600);
        setTimeout(() => {if(this.user.department) return this.filterCities(this.user.department);}, 800);
    },
    computed: {
        ...mapState(["api_url"]),
        ...mapState(["session_user"]),
        ...mapState("user", ["user"]),
        ...mapState("country", ["countries"]),
        ...mapState("country", ["departments"]),
        ...mapState("country", ["cities_department"]),
    },
    watch: {
        search_code: function (){
            this.searchUser({search : this.search_code, order: 'ASC',});
        }
    }
};
</script>
<style>
.link {
    cursor: pointer;
    color: var(--color-primary);
}
.link:hover {
    text-decoration: underline;
}
</style>