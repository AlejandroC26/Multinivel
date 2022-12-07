<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1>Lista de Usuarios</h1>
            <div class="info-card">
                <p>Búsqueda personalizada</p>
                <hr>
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <small>Tipo de búsqueda</small>
                        <select name="" v-model="state" class="form-control">
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>
                </div>
            </div>
             <div class="info-card">
                <p>Listado de usuarios</p>
                <hr>
                <div v-if="loading_users" style="display: flex; justify-content: center">
                    <div class="lds-facebook"><div></div><div></div><div></div></div>
                </div>
                <div :class="{'dnone':loading_users}">
                    <table class="table" id="table-users">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Documento</th>
                                <th>Estado</th>
                                <th>Activación</th>
                                <th>Ingreso</th>
                                <th>Patrocinador</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td>{{user.id}}</td>
                                <td>{{user.name}}</td>
                                <td>{{user.id_card}}</td>
                                <td>{{user.state}}</td>
                                <td>
                                    <span v-if="user.activation_date">{{formatDate(user.activation_date)}}</span>
                                    <span v-else>N/A</span>
                                </td>
                                <td>{{formatDate(user.created_at)}}</td>
                                <td>
                                    <span v-if="user.sp_user_1_name">{{user.sp_user_1_name}}</span>
                                    <span v-else>Main</span>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <router-link v-if="session_user.pages.user_edit"
                                        :to="'/edicion-usuario/'+user.id" class="btn btn-primary" 
                                        style="display: inline-flex; align-items: center;">
                                            <span class="material-icons-sharp active" style="font-size: 1.2rem;">edit</span>
                                        </router-link>
                                        <router-link :to="'/vision-usuario/'+user.id" class="btn btn-secondary" style="display: inline-flex; align-items: center;">
                                            <span class="material-icons-sharp active" style="font-size: 1.2rem;">visibility</span>
                                        </router-link>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="users.length <= 0"><td colspan="8"><center>No se encontraron coincidencias</center></td></tr>
                        </tbody>
                    </table>
                </div>
             </div>
        </main>
        <Right/>
    </div>
</template>
<script>
    import axios from 'axios';
    import Aside from '../components/Aside.vue';
    import Right from '../components/Right.vue';
    import { mapMutations, mapActions, mapState } from 'vuex';

    export default {
        name: '',
        components: {
            Aside,
            Right,
        },
        data:function(){
            return {
                state: 'Activo',
                count_consult: 0,
                users: [],
                loading_users: false,
            }
        },
        methods: {
            searchUser(){
                this.count_consult++;
                this.loading_users = true;
                setTimeout(() => {this.count_consult = 0}, 1000);
                if(this.count_consult > 20) return;
                let url = this.api_url+'/api/users/state/'+this.state;
                axios.get(url, 
                { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
                .then(res => {
                    this.users = res.data;
                    this.loading_users = false;
                }).catch(e=> console.log(e))
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
            ...mapActions("user", ["getUsersLine"]),
            ...mapMutations(['loadSessionUser']),
        },
        mounted: function(){
            $('.modal-backdrop').remove();
            this.searchUser();
            this.loadSessionUser();
        },
        computed: {
            ...mapState(['session_user']),
            ...mapState(['api_url']),
        },
        watch: {
            state: function () {
                this.searchUser();
            }
        }
    }
</script>