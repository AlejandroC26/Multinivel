<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1>Visión de Usuario</h1>
            <div class="info-card">
                <p>Busca un usuario para ver su perfíl</p>
                <form @submit.prevent="searchUser(id)">
                <div class="row mt-1">

                    <div class="col-sm-4">
                        <input type="number" placeholder="Busca código" class="form-control" v-model="id">
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-primary">Buscar</button>
                    </div>
                </div>
                </form>
            </div>
            <div v-if="this.search && this.user.id">
                <div class="info-card">
                    <p>Patrocinadores</p>
                    <hr>
                    <div v-if="!user.num_sponsors && !user.loaded_sponsors">
                        <div style="display: flex; justify-content: center; ">
                            <div class="lds-facebook"><div></div><div></div><div></div></div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="row" v-if="!user.num_sponsors && user.loaded_sponsors">
                            <div class="col-sm-4">Patrocinador 1</div>
                            <div class="col-2">...</div>
                            <div class="col-6">Main</div>
                        </div>
                        <div class="row mb-2" v-for="i in user.num_sponsors" :key="i">
                            <div class="col-sm-4"><p>Patrocinador {{i}}</p></div>
                            <div class="col-2"><p style="color: var(--color-dark)">{{user.sponsors[i].code}}</p></div>
                            <div class="col-6"><p style="color: var(--color-dark)">{{user.sponsors[i].name}}</p></div>
                        </div>
                    </div>
                </div>
                <div class="info-card">
                    <p>Líneas</p>
                    <hr>
                    <div v-for="i in 9" :key="i"
                        @click="showLine(i)"
                        class="mb-2 active-line row" style="margin:0;">
                        <div class="col">{{renderNumLinea(i)}}</div>
                        <div class="col"><b>{{user.lines[i]}}</b></div>
                    </div>
                </div>
                <div class="info-card mb-5" v-if="this.user.id">
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
                                    <p type="text" class="form-control">{{this.user.id}}</p>
                                </div>
                                <div class="col-md-9">
                                    <p>Documento</p>
                                    <p type="text" class="form-control">{{this.user.id_card}}</p>
                                </div>
                            </div>
                            <div class="row mt-2 mb-1">
                                <div class="col-md-6">
                                    <p>Nombres</p>
                                    <p type="text" class="form-control">{{this.user.name}}</p>
                                </div>
                                <div class="col-md-6">
                                    <p>Apellidos</p>
                                    <p type="text" class="form-control">{{this.user.last_name}}</p>
                                </div>
                            </div>
                            <div class="row mt-3"
                                v-if="this.user.consignment">
                                <div class="col-lg-6"
                                    v-if="this.user.consignment">
                                    <p>Comprobante</p>
                                    <span class="link" @click="downloadFile()">{{this.user.consignment}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <!------------------------- -->
                            <div class="row mt-2 mb-1">
                                <div class="col-lg-12">
                                    <p>Teléfono</p>
                                    <p type="text" class="form-control">{{this.user.phone}}</p>
                                </div>
                            </div>
                            <!--------------------------->
                            <div class="row mt-2 mb-1">
                                <div class="col-md-12">
                                    <p>País</p>
                                    <p type="text" class="form-control">{{this.user.country_name}}</p>
                                </div>
                            </div>
                            <!--------------------------->
                            <div class="row mt-2 mb-1">
                                <div class="col-lg-6">
                                    <p>Departamento</p>
                                    <p type="text" class="form-control">{{this.user.department}}</p>
                                </div>
                                <div class="col-lg-6">
                                    <p>Ciudad</p>
                                    <p type="text" class="form-control">{{this.user.city_name}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-access" role="tabpanel" aria-labelledby="nav-access-tab">
                            <div class="row mt-3 mb-1">
                                <div class="col-md-12">
                                    <p>Login</p>
                                    <p type="text" class="form-control">{{this.user.login}}</p>
                                </div>
                            </div>
                            <div class="row mt-2 mb-1">
                                <div class="col-md-12">
                                    <p>Contraseña</p>
                                    <p class="form-control">****</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-card" v-else>
                    <div style="display: flex; justify-content: center; ">
                        <div class="lds-dual-ring"></div>
                    </div>
                </div>
            </div>
            <div v-if="this.search && this.user.loaded && !this.user.id">
                <div class="info-card">
                    <p>Usuario no encontrado</p>
                </div>
            </div>
            <div v-if="this.search && !this.user.loaded" style="display: flex; justify-content: center">
                <div class="lds-dual-ring"></div>
            </div>
        </main>
        <Right/>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import Right from '../components/Right.vue';
export default {
    name: 'UserVision',
    components: {
        Aside,
        Right,
    },
    data: function (){
        return {
            id: this.$route.params.id,
            search: false,
        }
    },
    methods: {
        showLine(line) {
            let active_line = document.getElementById('active_line');
            active_line.innerHTML = this.renderNumLinea(line)
            $('#modal-lines').modal('show');
            this.getUsersLine({
                user_id: this.id,
                line: line,
            }).then((res)=>{
                var data = [];
                res.data.forEach((element) => {
                    var date = this.formatDate(element.created_at);
                    let array = {
                        id: element.id,
                        name: element.name,
                        date
                    }
                    data.push(array);
                });
                $("#table-line").DataTable({
                    responsive: true,
                    lengthChange: false,
                    info: false,
                    destroy: true,
                    data,
                    columns: [
                        {"data": "id"},
                        {"data": "name"},
                        {"data": "date"},
                    ]
                });
            });
        },
        renderNumLinea(num){
            switch (num) {
                case 1:return 'Primera Línea'
                case 2:return 'Segunda Línea'
                case 3:return 'Tercera Línea'
                case 4:return 'Cuarta Línea'
                case 5:return 'Quinta Línea' 
                case 6:return 'Sexta Línea' 
                case 7:return 'Séptima Línea' 
                case 8:return 'Octava Línea' 
                case 9:return 'Novena Línea' 
                default:return ''
            }
        },
        formatDate(date){
            var fecha = new Date(date);
            var ano = fecha.getFullYear();
            var mes = fecha.getMonth()+1;
            var dia = fecha.getDate();
            if(mes < 10){
                mes="0"+mes
            }
            if(dia < 10 ){
                dia="0"+dia
            }
            return ano+"/"+mes+"/"+dia;
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
        searchUser(id){
            this.search = true;
            this.loadUser(id);
            this.loadLines(id);
            this.loadSponsors(id);
        },
        ...mapActions("user", ["showFile"]),
        ...mapActions("user", ["getUsersLine"]),
        ...mapMutations("user", ["loadUser"]),
        ...mapMutations("user", ["loadLines"]),
        ...mapMutations("user", ["loadSponsors"]),
        ...mapMutations(['loadSessionUser']),
    },
    mounted: function(){
        $('.modal-backdrop').remove();
        this.search = false;
        this.loadSessionUser();
        if(this.id) {
            this.search = true;
            this.loadUser(this.id);
            this.loadLines(this.id);
            this.loadSponsors(this.id);
        }
    },
    computed: {
        ...mapState("user", ["user"]),
        ...mapState(['session_user']),
    }
}
</script>
<style scoped>
    .active-line{
        border-bottom: solid 1px #c2c2c5;
        transition: opacity 0.3s;
    }
    .active-line:hover{
        opacity: .5;
    }
    .link,
    .active-line{
        cursor: pointer;
    }
    .link{
        color: var(--color-primary);
    }
    .link:hover{
        text-decoration: underline;
    }
</style>