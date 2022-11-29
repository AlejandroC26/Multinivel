<template>
    <div class="application-container">
        <Aside />
        <main>
            <h1>Perfíl</h1>

            <div class="info-card">
                <p>Patrocinadores</p>
                <hr style="color: var(--color-dark)">
                <div class="row" v-if="!session_sponsors.num_sponsors">
                    <div class="col-sm-4"><p>Patrocinador 1</p></div>
                    <div class="col-sm-2">...</div>
                    <div class="col-sm-6">Main</div>
                </div>
                <div class="row mb-2" v-for="i in session_sponsors.num_sponsors" :key="i">
                    <div class="col-sm-4"><p>Patrocinador {{i}}</p></div>
                    <div class="col-2"><p style="color: var(--color-dark)">{{session_sponsors.sponsors[i].code}}</p></div>
                    <div class="col-6"><p style="color: var(--color-dark)">{{session_sponsors.sponsors[i].name}}</p></div>
                </div>
            </div>
            <div class="info-card" v-if="session_user.id">
            <!--------NAV TABS--------->
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
                            <div class="col-md-12">
                                <p>Documento</p>
                                <p type="text" class="form-control" style="cursor: not-allowed">{{session_user.id_card}}</p>
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
                        <div class="row mt-3">
                            <div class="col-lg-6">
                                <div v-if="!session_user.consignment">
                                    <label class="circle" for="file-consignment">+</label>
                                    <label for="file-consignment" class="label-link">Adjuntar comprobante de consignación</label>
                                </div>
                                <div v-else>
                                    <p>Comprobante</p>
                                    <div class="edit-file-box">
                                        <span class="link" @click="downloadFile()">{{session_user.consignment}}</span>
                                        <label for="file-consignment" class="material-icons-sharp icon-edit">&#xe3c9;</label>
                                    </div>
                                </div>
                                <input 
                                    class="hidden-file" 
                                    type="file" 
                                    id="file-consignment" 
                                    accept="image/.png,.jpeg,.jpg"
                                    @change="loadConsignmentFile()"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div class="row mt-2 mb-1">
                            <div class="col-lg-12">
                                <p>Teléfono</p>
                                <input type="number" id="primary_phone" class="form-control" v-model="user.phone">
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
                            <div class="col-6">
                                <p>Contraseña</p>
                                <p class="form-control">****</p>
                            </div>
                            <div class="col-6">
                                <button class="mt-4 btn btn-secondary" style="width: 100%;" @click="modalPassword()">Cambiar Contraseña</button>
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
        <!------MODALS------>
        <div class="modal fade" id="modal-password" tabindex="-1" aria-hidden="true" >
            <form @submit.prevent="validateChangePasword(password)" id="change-password-form">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Cambiar Contraseña</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Contraseña Actual</label>
                                <input type="text" class="form-control" v-model="password.current">
                            </div>
                            <div class="col-md-12 mb-3">
                                <label>Nueva Contraseña</label> 
                                <input type="text" class="form-control" v-model="password.new">
                            </div>
                            <div class="col-md-12 mb-3">
                                <label>Nueva Contraseña (validación)</label>
                                <input type="text" class="form-control" v-model="password.confirm">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary">Confirmar</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "vuex";
import Aside from '../components/Aside.vue';
import Right from '../components/Right.vue';

export default {
    name: "Profile",
    components: {
        Aside,
        Right,
    },
    data: function (){
        return {
            password: {
                current: '',
                new: '',
                confirm: '',
            },
            lines: [{0: ''},{1: ''},{2: ''},{3: ''},{4: ''}],
            user: {
                id: '',
                name: '',
                last_name: '',
                id_card: '0',
                phone: '',
                city_id: '',
                city_name: '',
                department: '',
                country: '',
                login: '',
                count_type: 'Nequi',
                count_number: '',
                sponsor_user : '',
            }
        }
    },
    methods: {
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
                document.getElementById('phone').focus();
                return this.launchAlert({type: 'warning', title: 'Es necesario el teléfono de contacto'})
            }
            if(!data.count_number.trim())
                return this.launchAlert({type: 'warning', title: 'Es necesario el número de cuenta'})
            
            if(!data.city_id) return this.launchAlert({type: 'warning', title: 'Selecciona una ciudad'})
            /* ===UPDATE=== */
            this.updateUser(data).then(res=>{
                if(res.status === 201) {
                    this.loadSessionUser({reload: true});
                    return this.launchAlert({type: 'success', title: '¡Usuario actualizado!'})
                }
                else {
                    console.log(res.data)
                    if(res.data.status == 'error' && res.data.case == 'id_card') return this.launchAlert({type: 'error', title: 'Este documento ya se encuentra en uso'})
                    if(res.data.status == 'error' && res.data.case == 'login') return this.launchAlert({type: 'error', title: 'Este login ya se encuentra en uso'})
                    return this.launchAlert({type: 'error', title: 'Ha surgido un error'})
                }
            })
            .catch(e=> {
                console.log(e.response)
                return this.launchAlert({type: 'error', title: 'Ha surgido un error'})
            })
        },
        validateChangePasword(password){
            var noValido = /\s/;
            if(noValido.test(password.new)) return this.launchAlert({type: 'warning', title: 'La nueva contraseña no puede contener espacios en blanco'})
            if(password.new.length < 3) return this.launchAlert({type: 'warning', title: 'La contraseña debe tener una longitud mínima de 3 carácteres'})
            if(password.new != password.confirm) return this.launchAlert({type: 'warning', title: 'La nueva contraseña no coincide'});
            let json = {
                id: this.session_user.id,
                password: {
                    current_password: password.current,
                    new_password: password.new,
                    confirm_password: password.confirm
                }}

            this.changePassword(json).then(res=> {
                $('#modal-password').modal('hide');
                this.password.current = '';
                this.password.new = '';
                this.password.confirm = '';
                return this.launchAlert({type: 'success', title: '¡Contraseña actualizada exitosamente!'});
            })
            .catch(e => {
                console.log(e)
                if(e.response.data.message == 'Current password incorrect!') 
                    return this.launchAlert({type: 'warning', title: 'La contraseña actual es incorrecta'})
            })

        },
        isValid(data){
            var regex = new RegExp("^[a-zA-ZÀ-ÿ ]+$");
            var key = data;
            if (!regex.test(key)) return false
            return true;
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
        
        async loadConsignmentFile(){
            let file = document.getElementById('file-consignment').files[0];
            await this.fileUpload(file);
            document.getElementById('file-consignment').value = '';
        },
        async fileUpload(file){
            if(!file) return;
            let form = new FormData();
            form.append('name', this.user.name);
            form.append('last_name', this.user.last_name);
            form.append('id_card', this.user.id_card);
            form.append('phone', this.user.phone);
            form.append('city_id', this.user.city_id);
            form.append('login', this.user.login);
            form.append('consignment', file);
            form.append('count_number', this.user.count_number);
            form.append('sponsor_user', this.user.sponsor_user);
            await this.loadFiles({id: this.user.id, form}).then(res=>{
                if(res.status === 201) {
                    this.loadSessionUser({reload: true});
                    return this.launchAlert({type: 'success', title: '¡Archivo cargado exitosamente!'})
                }
                else return this.launchAlert({type: 'error', title: 'Ha surgido un error'})
            })
            .catch(e=> {
                console.log(e.response)
                return this.launchAlert({type: 'error', title: 'Ha surgido un error'})
            })
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
        modalPassword(){$('#modal-password').modal('show');},
        ...mapActions("user", ["loadFiles"]),
        ...mapActions("user", ["showFile"]),
        ...mapActions("user", ["updateUser"]),
        ...mapActions("user", ["changePassword"]),
        ...mapActions("user", ["getUsersLine"]),
        ...mapActions("country", ["getCity"]),
        ...mapMutations(["loadSessionUser"]),
        ...mapMutations(["loadSessionSponsors"]),
        ...mapMutations("country", ["getAllCountries"]),
        ...mapMutations("country", ["getCountryCities"]),
        ...mapMutations("country", ["filterCities"]),
    },
    mounted: function () {
        $('.modal-backdrop').remove();
        this.loadSessionUser();
        this.getAllCountries();
        let session_interval = setInterval(() => {
            if(this.session_user.id) {
                this.user.id = this.session_user.id;
                this.user.name = this.session_user.name;
                this.user.last_name = this.session_user.last_name;
                this.user.id_card = this.session_user.id_card;
                this.user.phone = this.session_user.phone;
                this.user.city_id = this.session_user.city_id;
                this.user.department = this.session_user.city.department;
                this.user.country = this.session_user.city.country_code;
                this.user.login = this.session_user.login;
                this.user.sponsor_user = this.session_user.sp_user_code;
                this.user.count_type = this.session_user.count_type;
                this.user.count_number = this.session_user.count_number;
                /* -----FUNCTIONS------- */
                this.loadSessionSponsors();
                this.getCountryCities(this.user.country);
                this.filterCities(this.user.department);
                return clearInterval(session_interval)
            } 
        });
    },
    computed: {
        ...mapState(["session_user"]),
        ...mapState(["session_sponsors"]),
        ...mapState("country", ["countries"]),
        ...mapState("country", ["departments"]),
        ...mapState("country", ["cities_department"]),
    }
};
</script>
<style>
.circle{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    color: #fff;
    background: var(--color-primary);
    margin-right: 5px;
}

.link,
.circle,
.icon-edit,
.label-link{
    cursor: pointer;
}
.link{
    color: var(--color-primary);
}
.link:hover,
.label-link:hover{
    text-decoration: underline;
}
.hidden-file{
    display: none;
}

.icon-edit{
    border-radius: 3px;
    padding: 2px;
    color: var(--color-primary);
    border: solid 1px var(--color-primary);
    font-size: 1rem;
    transition: all .5s;
}
.icon-edit:hover{
    background: var(--color-primary);
    color: #fff;
}

.edit-file-box{
    display: flex;
    justify-content: space-between;
}
</style>