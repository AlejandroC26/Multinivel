<template>
    <div class="application-container">
        <Aside/>
        <main>
            <h1>Template</h1>
        </main>
        <Right/>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import Aside from '../components/Aside.vue';
import Right from '../components/Right.vue';

export default {
    name: '',
    components: {
        Aside,
        Right,
    },
    methods: {
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