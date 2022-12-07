<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1>Devoluciones</h1>
            <div class="info-card mb-4">
                <table class="table" id="table-users">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Documento</th>
                            <th>Ingreso</th>
                            <th>Tipo</th>
                            <th>Depósito</th>
                            <th>Aceptar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="(devoluciones.length <= 0)">
                            <td colspan="6"><center>No hay devoluciones para mostrar</center></td>
                        </tr>
                        <tr v-for="devolucion in devoluciones" :key="devolucion.id">
                            <td>{{devolucion.id}}</td>
                            <td>{{devolucion.name}}</td>
                            <td>{{devolucion.id_card}}</td>
                            <td>{{devolucion.created_at}}</td>
                            <td>{{devolucion.type}}</td>
                            <td>
                                <span class="link" @click="downloadFile(devolucion)">{{devolucion.image}}</span>
                            </td>
                            <td>
                                <div class="activation-buttons">
                                    <span 
                                        class="material-icons-sharp" 
                                        style="--color: #1E8449"
                                        @click="cambiarEstado({...devolucion, estado: 'Aceptado'})"
                                    >&#xe876;
                                    </span>
                                    <span 
                                        class="material-icons-sharp" 
                                        style="--color: #E53935"
                                        @click="cambiarEstado({...devolucion, estado: 'Rechazado'})"
                                    >&#xe5cd;
                                    </span>
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
            devoluciones: [],
        }
    },
    methods: {
        searchUser(){
            this.count_consult++;
            this.loading_users = true;
            setTimeout(() => {this.count_consult = 0}, 1000);
            if(this.count_consult > 20) return;
            let url = this.api_url+'/api/users/'+this.session_user.id+'/devolution';
            console.log(url)
            axios.post(url, {devolucion: 1},
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => {
                console.log(res.data)
                this.devoluciones = res.data;
                this.loading_users = false;
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
        cambiarEstado(data){
            let url = this.api_url+`/api/users/consignment/${data.id_image}/changestate`;
            axios.post(url, {state: data.estado}, 
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => {
                console.log(res)
                this.searchUser();
            }).catch(e=> console.log(e.response))
        },
        ...mapActions("user", ["showFile"]),
        ...mapActions("user", ["getUsersLine"]),
        ...mapMutations(['loadSessionUser']),
    },
    mounted: function(){
        $('.modal-backdrop').remove();
        this.loadSessionUser();
        let session_interval = setInterval(() => {
            if(this.session_user.id) {
                this.searchUser();
                return clearInterval(session_interval)
            }
        });
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