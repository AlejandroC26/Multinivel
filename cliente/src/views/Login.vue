<template>
  <div class="login">
    <main>
      <section class="text-center text-lg-start">
          <!-- Jumbotron -->
          <div class="container py-4" style="max-width: 1200px">
            <div class="row g-0">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="info-text">
                  <div class="title-logo">
                    <h1>Paf</h1>
                  </div>
                  <h2 class="mb-2">¡Regístrate y gana!</h2>
                </div>
              </div>
    
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="info-card" style="max-width: 410px; margin: 0 auto;">
                  <form @submit.prevent="LogIn()">
                      <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input type="text" v-model="user.login" class="form-control" placeholder="Correo electrónico"/>
                    </div>
                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <input type="password" v-model="user.password" class="form-control" placeholder="Contraseña"/>
                    </div>
                    <!-- Submit button -->
                    <button type="submit" class="btn-login btn-block mb-4" style="width: 100%; font-weight: bold">
                      Iniciar Sesión
                    </button>
                  </form>
                  <hr>
                  <a 
                    class="btn-register mb-3" 
                    @click="showRegisterFRM()" 
                    v-if="(dia == 'lunes' || dia  == 'jueves')"
                    style="cursor: pointer; text-decoration: none;"
                  >Registrarse</a>
                  <div class="btn-register"
                    v-else
                  ><span style="font-size: .9rem;">Registros todos los lunes y jueves</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Jumbotron -->
      </section>
    </main>
    <!---------MODAL-------->
    <div class="modal fade" id="modal-register" tabindex="-1" aria-hidden="true" >
        <div class="modal-dialog" style="max-width: 590px;">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Registro de Usuario</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <FrmRegisterVue :response="resultStatus"/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FrmRegisterVue from '../components/FrmRegister.vue'
import { mapActions, mapMutations, mapState } from 'vuex'
/* import axios from "axios" */
export default {
  name: 'Login',
  components: {
    FrmRegisterVue
  },
  data: function () {
    return {
      user: {
        login: "",
        password: "",
      },
      dia: ''
    };
  },
  methods: {
    LogIn() {
      this.login(this.user)
      .then(res => {
          if(res.data.token){
              this.setToken(res.data.token);
              localStorage.setItem('token', res.data.token);
              window.location.href = 'admin';
          }
      })
      .catch(err => {
        console.log(err.response)
        if(err) return this.launchAlert({type: 'error', title: '¡Usuario o contraseña incorrectos!'})
        
      })
    },
    resultStatus(status) {if(status == 'success') return $('#modal-register').modal('hide')},
    launchAlert(config){
        if(!config.timeout) config.timeout = 2500;
        const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: config.timeout,
        })
        Toast.fire({
            icon: config.type,
            title: config.title,
            text: config.message,
        })
    },
    showRegisterFRM(){$('#modal-register').modal('show')},
    ...mapActions("auth", ["login"]),
    ...mapMutations(["setToken"]),
  },
  mounted: function(){
    function diaSemana() {
      let date = new Date();
      let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      let dia = date.toLocaleDateString('es-MX', options).split(',');
      return dia[0];
    }
    this.dia = diaSemana();
    $('.modal-backdrop').remove();
  },
  computed: {
    ...mapState("auth", ["error"]),
    ...mapState(["api_url"]),
  },

}
</script>
<style scoped>
  a {
    cursor: pointer;
  }
  .login{
    background-color: rgba(225, 245, 255, .3);
    font-family: 'Tahoma', sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .login main {min-width: 100vw; margin-top: 0;}
  .info-text{padding: 3rem 2rem 1rem 2rem; text-align: left;}
  .info-text h1{
    display: inline;
    font-size: 2.8rem;
    font-weight: bold;
    color: rgba(0, 117, 174, 1);
    text-shadow: 0 0 1px  rgb(86, 101, 211);
  }
  .info-text h2 {
    font-size: 1.6rem;
    color: rgba(0, 117, 174, 1);
    text-shadow: 0 0 1px  rgb(111, 122, 205);
  }
  .info-text h3 {
    font-size: 1.3rem;
    color: var(--color-dark-variant);
  }
  .info-text img{
    margin-left: 20px;
    display: inline;
    width: 100px;
  }
  .form-control{
    font-size: 1.2rem;
    padding: .5rem 1.2rem;
  }
  .btn-login,
  .btn-register{
    padding: .5rem 1.2rem;
    border-radius: .2rem;
    font-size: 1.5rem;
    font-family: "Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",
    Roboto,"Helvetica Neue",Arial,sans-serif,
    "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  .btn-login{
    color: #fff;
    background-color: rgba(0, 117, 174, 1);
  }
  .btn-register{
    display: block;
    text-align: center;
    padding: 0 1rem;
  }
  @media screen and (max-width: 992px){
    .info-text{padding: 3rem 2rem 1rem 2rem; text-align: center;}
  }
</style>
