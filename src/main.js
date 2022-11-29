import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'sweetalert2/dist/sweetalert2.min.css';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import './assets/css/loader.css'
import './assets/fonts/icons-sharp.css'
import './assets/css/app.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2);
Vue.use(require('vue-moment'));
new Vue({
  mode: 'history',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
