<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1>Cartera</h1>
            <div class="insights">
                <div class="commissions">
                    <span class="material-icons-sharp">payments</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Dinero Pendiente</h3>
                            <div class="h3">
                                <label>${{this.formatMoney(session_wallet.current_money)[0]}}</label>
                                <label class="fs-4">,{{this.formatMoney(session_wallet.current_money)[1]}}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div @click="showPayments()">
                    <span class="material-icons-sharp">receipt_long</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Retiros</h3>
                            <h1>{{this.session_wallet.num_paid}}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-card">
                <div v-if="loading_commissions" style="display: flex; justify-content: center">
                    <div class="lds-facebook"><div></div><div></div><div></div></div>
                </div>
                <div :class="{'dnone':loading_commissions}">
                    <table class="table table-striped" id="table-commissions-user" style="border:none">
                        <thead>
                            <tr>
                                <th colspan="4"><center>COMISIONES</center></th>
                            </tr>
                            <tr>
                                <th>Punto de Venta</th>
                                <th>Patrocinador</th>
                                <th>Ganancia</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>  
        </main>
        <Right/>
        <!--------------MODAL PAGOS----------------->
        <div class="modal fade" id="modal-payments" tabindex="-1" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">
                            PAGOS COBRADOS
                        </h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <table class="table table-striped" id="table-payments" style="border:none">
                            <thead>
                                <tr>
                                    <th>Monto</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                        </table>
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

export default {
    name: 'Wallet',
    components: {
        Aside,
        Right,
    },
    data: function(){
        return {
            loading_commissions: false,
        }
    },
    methods: {
        showPayments(){
            $('#modal-payments').modal('show');
            this.userPayments({id:this.session_user.id}).then(res => {
                let new_array = [];
                res.data.forEach(element => {
                    let commission = `$${this.formatMoney(element.money)[0]},<label style="font-size: .8rem;">${this.formatMoney(element.money)[1]}</label>`;
                    let date = this.formatHourDate(element.created_at);
                    let json = {
                        commission: commission,
                        created_at: date
                    }
                    new_array.push(json);
                });
                $('#table-payments').DataTable({
                    responsive: true,
                    autoWidth: false,
                    lengthChange: false,
                    info: false,
                    destroy: true,
                    data: new_array,
                    columns: [
                        {"data": "commission"},
                        {"data": "created_at"},
                    ]
                });
            }).catch(e=>console.log(e.response))
        },  
        showCommissionsUser(){
            this.loading_commissions = true;
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
        formatHourDate(date){
            var fecha = new Date(date);
            var ano = fecha.getFullYear();
            var mes = fecha.getMonth()+1;
            var dia = fecha.getDate();
            var horas = fecha.getHours();
            var minutos = fecha.getMinutes();

            if(mes < 10){
                mes="0"+mes
            }
            if(dia < 10 ){
                dia="0"+dia
            }
            return `${ano}-${mes}-${dia} ${horas}:${minutos}`;
        },
        ...mapActions("user", ["getUsersLine"]),
        ...mapMutations(['loadSessionUser']),
        ...mapActions("user", ["userPayments"]),
    },
    mounted: function(){
        $('.modal-backdrop').remove();
        this.loadSessionUser();
        let session_interval = setInterval(() => {
            if(this.session_user.id) {
                this.showCommissionsUser();
                return clearInterval(session_interval);
            }
        }, 100);
    },
    computed: {
        ...mapState(['session_user']),
        ...mapState(['session_wallet']),
    }
}
</script>