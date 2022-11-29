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
                                <b v-if="session_user.state == 'Inactivo'" style="color: red">{{session_user.state}}</b>
                                <b v-if="session_user.state == 'Finalizado'" style="color: orange">{{session_user.state}}</b>
                                <b v-if="session_user.state == 'Activo'" style="color: green">{{session_user.state}}</b>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <a href="/perfil" style="text-decoration: none">
                        <div 
                            class="dashed-div" 
                            style="--color-dashed: red"
                            v-if="session_user.state === 'Inactivo' && !session_user.consignment"
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
                <!--=============END OF SALES========= -->
                <!-- <div @click="showCommissionsUser()" class="commissions">
                    <span class="material-icons-sharp">&#xef63;</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Comisiones Totales</h3>
                            <div class="h3">
                                <label>${{this.formatMoney(session_wallet.current_money)[0]}}</label>
                                <label class="fs-4">,{{this.formatMoney(session_wallet.current_money)[1]}}</label>
                            </div>
                        </div>
                    </div>
                </div> -->
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
    name: 'Dashboard',
    components: {
        Aside,
        Right,
    },
    data: function(){
        return {
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
        formatDate(date){
            var fecha = new Date(date);
            var ano = fecha.getFullYear();
            var mes = fecha.getMonth()+1;
            var dia = fecha.getDate();
            if(mes < 10)  mes = "0" + mes
            if(dia < 10) dia = "0" + dia
            return ano+"/"+mes+"/"+dia;
        },
        ...mapActions("user", ["getUsersLine"]),
        ...mapMutations(['loadSessionUser']),
        ...mapMutations(['loadSessionLines']),
    },
    mounted() {
        $('.modal-backdrop').remove();
        this.loadSessionUser();
    },
    computed: {
        ...mapState(['session_user']),
        ...mapState(['session_wallet']),
        ...mapState(['session_lines']),
    }
}
</script>
<style>
.link{color: #007bff;}
</style>