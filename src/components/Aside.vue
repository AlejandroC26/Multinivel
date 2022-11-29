<template>
    <aside>
        <div class="top">
            <div class="logo">
                <h2><b>PAF APP</b></h2>
            </div>
            <div class="close" id="close-btn">
                <span class="material-icons-sharp">close</span>
            </div>
        </div>
        <div class="sidebar">
            <router-link to="/admin" v-bind:class="{'active': routeActive('admin')}">
                <span class="material-icons-sharp">&#xe9b0;</span>
                <h3>Inicio</h3>
            </router-link>
            <router-link to="/perfil" v-bind:class="{'active': routeActive('perfil')}">
                <span class="material-icons-sharp">&#xe7fd;</span>
                <h3>Perfíl</h3>
            </router-link>
            <router-link to="/registro" v-bind:class="{'active': routeActive('registro')}">
                <span class="material-icons-sharp">&#xe7fe;</span>
                <h3>Nuevo Registro</h3>
            </router-link>
            <!-- <router-link to="/cartera" v-bind:class="{'active': routeActive('cartera')}">
                <span class="material-icons-sharp">&#xf8ff;</span>
                <h3>Cartera</h3>
            </router-link> -->
            <!-------------------------------->
            <hr style="color: var(--color-dark)"
            v-if="session_user.pages.user_view || session_user.pages.user_list">
            <!----------------------------- -->
            <router-link to="/vision-usuario" v-bind:class="{'active': routeActive('vision-usuario')}"
            v-if="session_user.pages.user_view">
                <span class="material-icons-sharp">&#xea67;</span>
                <h3>Visión de Usuario</h3>
            </router-link>
            <router-link to="/listar-usuarios" v-bind:class="{'active': routeActive('listar-usuarios')}"
             v-if="session_user.pages.user_list">
                <span class="material-icons-sharp">&#xf106;</span>
                <h3>Listar Usuarios</h3>
            </router-link>
            <hr>
            <router-link to="/seguimiento" v-bind:class="{'active': routeActive('seguimiento')}"
             v-if="session_user.pages.user_list">
                <span class="material-icons-sharp">&#xebcc;</span>
                <h3>Seguimiento</h3>
            </router-link>
            <!----------------------------------->
            <hr style="color: var(--color-dark)" >
            <!----------------------------------->
            <router-link to="/permisos" v-bind:class="{'active': routeActive('permisos')}"
            v-if="session_user.pages.role">
                <span class="material-icons-sharp">&#xe897;</span>
                <h3>Permisos</h3>
            </router-link>
            <a href="#" @click="logout()">
                <span class="material-icons-sharp">&#xe9ba;</span>
                <h3>Logout</h3>
            </a>

        </div>
    </aside>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    data: function () {
        return{
            isActive:true,
        }
    },
    methods: {
        ...mapActions('auth',['logout']),
        routeActive(link_route){
            var route = this.$router.history.current.path.replace(/\//g, '');
            if(link_route == route) return true;
            return false;
        },
        validateUrlImage(){
            let path = this.$route.path;
            if(path.split('/').length > 2) return '../logo3b.png';
            return 'logo3b.png';
        }
    },
    mounted() {
        const sideMenu = document.querySelector('aside');
        const menuBtn = document.querySelector('#menu-btn');
        const closeBtn = document.querySelector('#close-btn');
        /* const themeToggler = document.querySelector('.theme-toggler'); */

        menuBtn.addEventListener('click',()=> {
            sideMenu.style.display = 'block';
        })

        closeBtn.addEventListener('click',()=> {
            sideMenu.style.display = 'none';
        })

       /*  themeToggler.addEventListener('click',()=> {
            document.body.classList.toggle('dark-theme-variables');
            themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
            themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
        }) */
    },
    computed: {
        ...mapState(["session_user"]),
    }
}
</script>