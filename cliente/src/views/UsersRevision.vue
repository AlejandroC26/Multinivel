<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1>Usuarios en revisión</h1>
            <div class="info-card mb-4">
                <table class="table" id="table-users">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Documento</th>
                            <th>Tipo</th>
                            <th>Ingreso</th>
                            <th>Depósito</th>
                            <th>Activación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="(users.length <= 0)">
                            <td colspan="6"><center>No hay usuairos para mostrar</center></td>
                        </tr>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{user.id}}</td>
                            <td>{{user.name}} {{user.last_name}}</td>
                            <td>{{user.id_card}}</td>
                            <td>{{user.type}}</td>
                            <td>{{user.fecha_registro}}</td>
                            <td>
                                <span class="link" @click="downloadFile(user)">{{user.image}}</span>
                            </td>
                            <td>
                                <div class="activation-buttons"
                                v-if="user.consignment_state != 'Rechazado'">
                                    <span 
                                        class="material-icons-sharp" 
                                        style="--color: #1E8449"
                                        @click="cambiarEstado({...user, estado: 'Aceptado'})"
                                    >&#xe876;
                                    </span>
                                    <span 
                                        class="material-icons-sharp" 
                                        style="--color: #E53935"
                                        @click="cambiarEstado({...user, estado: 'Rechazado'})"
                                    >&#xe5cd;
                                    </span>
                                </div>
                                <div v-else>
                                    <p>Esperando al usuario</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        <Right/>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import axios from 'axios';
import Aside from '../components/Aside.vue';
import Right from '../components/Right.vue';
import FrmRegister from '../components/FrmRegister.vue';
export default {
    name: 'UserRegiser',
    components: {
        Aside,
        Right,
        FrmRegister
    },
    data: function (){
        return {
            users: []
        }
    },
    methods: {
        searchUser(){
            let url = this.api_url+'/api/users/waiting';
            axios.get(url, 
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => {
                this.users = res.data;
                this.loading_users = false;
            }).catch(e=> console.log(e.response))
        },
        cambiarEstado(data){
            let url = this.api_url+`/api/users/consignment/${data.id_image}/changestate`;
            axios.post(url, {state: data.estado}, 
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => {
                console.log(res)
                this.searchUser();
            }).catch(e=> console.log(e.response))
        },
        async downloadFile(user){
            try {
                const imgFile = await this.showFile({id:user.id_image});
                const linkSource = `data:image/jpeg;base64,${imgFile.data.data}`;
                const downloadLink = document.createElement("a");
                const fileName = 'consignment_'+user.id+'.jpeg';
                downloadLink.href = linkSource;
                downloadLink.download = fileName;
                downloadLink.click();
            } catch (e) {
                console.log(e)
                console.log(e.response)
            }
        },
        ...mapActions("user", ["showFile"]),
        ...mapActions("user", ["getUsersLine"]),
        ...mapMutations(['loadSessionUser']),
    },
    mounted: function(){
        $('.modal-backdrop').remove();
        this.loadSessionUser();
        this.searchUser();
    },
    computed: {
        ...mapState(['session_user']),
        ...mapState(['api_url']),
    },
}
</script>
<style scoped>
    .activation-buttons {
        display: flex;
        gap: .7rem;
    }
    .activation-buttons span {
        cursor: pointer;
        color: var(--color);
        border: solid 2px var(--color);
        border-radius: .1rem;
        user-select: none; 
        transition: background .2s ease-in-out;
    }
    .activation-buttons span:hover{
        background: var(--color);
        color: #fff;
    }
    
</style>