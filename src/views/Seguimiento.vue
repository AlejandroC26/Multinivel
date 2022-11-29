<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1>Seguimiento - Usuarios</h1>
            <div class="info-card">
                <FullCalendar :options="calendarOptions" />
            </div>
        </main>
        <Right/>
    </div>
</template>
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'


import { mapMutations, mapActions, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import Right from '../components/Right.vue';

export default {
    name: 'Wallet',
    components: {
        Aside,
        Right,
        FullCalendar 
    },
    data: function(){
        return {
            loading_commissions: false,
            calendarOptions: {
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth'
            }
        }
    },
    methods: {
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
    },
    mounted: function(){
        $('.modal-backdrop').remove();
        this.loadSessionUser();
    },
    computed: {
        ...mapState(['session_user']),
    }
}
</script>