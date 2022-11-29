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
                    <h1>404</h1>
                  </div>
                  <h2 class="mb-2">Página no encontrada</h2>
                  <h3><router-link to="/">Regresar al inicio</router-link></h3>
                </div>
              </div></div>
          </div>
          <!-- Jumbotron -->
      </section>
    </main>
  </div>
</template>

<script>
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
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    ...mapMutations(["setToken"]),
  },
  mounted: function(){

  },
  computed: {
    ...mapState("auth", ["error"]),
  },

}
</script>
<style scoped>
  .login{
    background-color: rgba(210, 228, 247, .3);
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
    color: rgba(84, 98, 205, .7);
    text-shadow: 0 0 1px  rgb(86, 101, 211);
  }
  .info-text h2 {
    font-size: 1.6rem;
    color: rgba(111, 122, 205, .3);
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
    background-color: rgb(106, 118, 205);
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
