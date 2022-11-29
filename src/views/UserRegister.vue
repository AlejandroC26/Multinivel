<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1>Registro de Usuario</h1>
            <FrmRegister :response="resultStatus" class="info-card mb-4"/>
        </main>
        <Right/>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
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
        return {}
    },
    methods: {
        resultStatus(status){},
        ...mapActions("user", ["getUsersLine"]),
        ...mapMutations(['loadSessionUser']),
    },
    mounted: function(){
        $('.modal-backdrop').remove();
        this.loadSessionUser();
    },
    computed: {
        ...mapState(['session_user']),
    },
}
</script>