<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1>Panel de administración</h1>
            <div class="info-card">
                <h3>Datos del Usuario</h3>
                <hr>
                <div class="row">
                    <div class="col-md-7">
                        <div class="row mb-2">
                            <div class="col-md-5"><p>Código de Referencia</p></div>
                            <div class="col-md-7"><b>{{session_user.id}}</b></div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-5"><p>Nombre</p></div>
                            <div class="col-md-7"><b>{{session_user.name + ' ' + session_user.last_name}}</b></div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-5"><p>Patrocinador</p></div>
                            <div class="col-md-7">
                                <b v-if="session_user.sp_user_code">{{session_user.sp_user_name}}</b>
                                <b v-else>Main</b>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-5"><p>Estado</p></div>
                            <div class="col-md-7">
                                <b v-if="session_user.state == 'Inactivo' || session_user.state == 'Finalizado'" style="color: red">{{session_user.state}}</b>
                                <b v-if="session_user.state == 'Activo'" style="color: green">{{session_user.state}}</b>
                                <b v-if="session_user.state == 'Revisión'" style="color: orange">{{session_user.state}}</b>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <a href="/perfil" style="text-decoration: none">
                        <!-- <div 
                            class="dashed-div" 
                            style="--color-dashed: green">
                            LLEVAS 8 DÍAS ACTIVO
                        </div> -->
                        <div 
                            class="dashed-div" 
                            style="--color-dashed: orange"
                            v-if="(
                                formatDate(sumarDias(session_user.created_at, 12)) === formatDate(new Date()) ||
                                formatDate(sumarDias(session_user.created_at, 23)) === formatDate(new Date()) ||
                                formatDate(sumarDias(session_user.created_at, 34)) === formatDate(new Date())
                            )">
                            ¡Hoy es día de devoluciones!<br>
                            <p class="mb-2" v-if="(formatDate(sumarDias(session_user.created_at, 12)) === formatDate(new Date()))" style="font-size: .85rem">Recuerda cargar tu comprobante N° 1</p>
                            <p class="mb-2" v-if="(formatDate(sumarDias(session_user.created_at, 23)) === formatDate(new Date()))" style="font-size: .85rem">Recuerda cargar tu comprobante N° 2</p>
                            <p class="mb-2" v-if="(formatDate(sumarDias(session_user.created_at, 34)) === formatDate(new Date()))" style="font-size: .85rem">Recuerda cargar tu comprobante N° 3</p>
                            <span style="font-size: 1rem;">Paga al usuario: {{session_user.sp_user_name}}</span> <br>
                            <span style="font-size: 1rem">{{session_user.sp_user_count_type}} - {{session_user.sp_user_count_number}}</span> 
                        </div>
                        <div 
                            class="dashed-div" 
                            style="--color-dashed: red"
                            v-if="session_user.state === 'Inactivo'"
                        >
                            Tu cuenta se encuentra inactiva actualmente, carga la imagen de tu consignación inicial y espera a ser activado.
                        </div>
                        <div 
                            class="dashed-div" 
                            style="--color-dashed: orange"
                            v-if="session_user.state === 'Revisión'"
                        >
                            Tu consignación está siendo revisada, una vez el pago sea confimado la cuenta se activará automáticamente
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="insights">
                <!--=============END OF EXPENSES========= -->
                <div v-if="session_lines.loaded" @click="showLine('all')">
                    <span class="material-icons-sharp">group</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Usuarios en Red</h3>
                            <h1>{{session_lines.total_users}} </h1>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div style="display: flex; justify-content: center; ">
                        <div class="lds-dual-ring"></div>
                    </div>
                </div>
                <!--=============END OF INCOME========= -->
                <div 
                    class="commissions" 
                    v-if="session_user.pages.user_list"
                >
                    <router-link to="/revision">
                        <span class="material-icons-sharp" style="background: var(--color-danger)">group</span>
                        <div class="middle">
                            <div class="left">
                                <h3>Usuarios por Revisión</h3>
                                <h1>{{peding}}</h1>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </main>
        <Right/>
        <!-- MODAL ALERTAS -->
        <div class="modal fade" id="modal-alerts" tabindex="-1" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">¡HOY ES DÍA DE DEVOLUCIONES!</h1>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <span v-if="(formatDate(sumarDias(session_user.created_at, 12)) === formatDate(new Date()))" style="font-size: 1.5rem">Recuerda cargar tu comprobante N° 1</span>
                        <span v-if="(formatDate(sumarDias(session_user.created_at, 23)) === formatDate(new Date()))" style="font-size: 1.5rem">Recuerda cargar tu comprobante N° 2</span>
                        <span v-if="(formatDate(sumarDias(session_user.created_at, 34)) === formatDate(new Date()))" style="font-size: 1.5rem">Recuerda cargar tu comprobante N° 3</span>
                        <br>
                        <span style="font-size: 1.3rem">Paga al usuario: {{session_user.sp_user_name}}</span> <br>
                        <span style="font-size: 1.3rem">{{session_user.sp_user_count_type}} - {{session_user.sp_user_count_number}}</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import Right from '../components/Right.vue';
import axios from 'axios';

export default {
    name: 'Dashboard',
    components: {
        Aside,
        Right,
    },
    data: function(){
        return {
            peding: 0,
            loading_commissions: false,
        }
    },
    methods:{
        showLine(line) {
            let active_line = document.getElementById('active_line');
            active_line.innerHTML = 'Usuarios en Red'
            $('#modal-lines').modal('show');
            this.getUsersLine({
                user_id: this.session_user.id,
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
                    autoWidth: false,
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
        formatMoney(number){
            let money = new Intl.NumberFormat('em-IN').format(number);
            let split = money.split(',');
            let decimals = split[1];
            if(!decimals) decimals = '00';
            if (window.innerWidth <= 838) return [Math.trunc(number), '']; 
            return [split[0], decimals];
        },
        countPending(){
            let url = this.api_url+'/api/users/count-waiting';
            axios.get(url, 
            { headers: { "Authorization": "Bearer " + localStorage.getItem('token')}})
            .then(res => this.peding = res.data[0].count)
            .catch(e=> console.log(e.response))
        },
        formatDate(date){
            var fecha = new Date(date);
            var ano = fecha.getFullYear();
            var mes = fecha.getMonth()+1;
            var dia = fecha.getDate();
            if(mes < 10)  mes = "0" + mes
            if(dia < 10) dia = "0" + dia
            return ano+"/"+mes+"/"+dia;
        },
        sumarDias(fecha, dias){
            fecha = new Date(fecha);
            fecha.setDate(fecha.getDate() + dias);
            return fecha;
        },
        ...mapActions("user", ["getUsersLine"]),
        ...mapMutations(['loadSessionUser']),
        ...mapMutations(['loadSessionLines']),
    },
    mounted() {
        $('.modal-backdrop').remove();
        this.loadSessionUser();
        this.countPending();
        let session_interval = setInterval(() => {
            if(this.session_user.id) {
                if(this.formatDate(this.sumarDias(this.session_user.created_at, 12)) === this.formatDate(new Date()) ||
                this.formatDate(this.sumarDias(this.session_user.created_at, 23)) === this.formatDate(new Date()) ||
                this.formatDate(this.sumarDias(this.session_user.created_at, 34)) === this.formatDate(new Date())) {
                    $('#modal-alerts').modal('show');
                }
                return clearInterval(session_interval)
            }
        });
    },
    computed: {
        ...mapState(['session_user']),
        ...mapState(['session_lines']),
        ...mapState(['api_url']),
    }
}
</script>
<style>
.link{color: #007bff;}
</style>