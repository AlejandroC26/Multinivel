import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/Login',
    component: () => import('../views/Login')
  },
  {
    path: '/registro/:id',
    component: () => import('../views/RegisterTool')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard'),
    meta: { protectedRoute: true }
  },
  {
    path: '/perfil',
    name: 'Profile',
    component: () => import('../views/Profile'),
    meta: { protectedRoute: true }
  },
  {
    path: '/registro',
    name: 'UserRegister',
    component: () => import('../views/UserRegister'),
    meta: { protectedRoute: true }
  },
  {
    path: '/cartera',
    name: 'Wallet',
    component: () => import('../views/Wallet'),
    meta: { protectedRoute: true }
  },
  {
    path: '/vision-usuario',
    name: 'UserVision',
    component: () => import('../views/UserVision'),
    meta: { protectedRoute: true }
  },
  {
    path: '/vision-usuario/:id',
    component: () => import('../views/UserVision'),
    meta: { protectedRoute: true }
  },
  {
    path: '/listar-usuarios',
    name: 'Users',
    component: () => import('../views/Users'),
    meta: { protectedRoute: true }
  },
  {
    path: '/edicion-usuario/:id',
    name: 'UserEdit',
    component: () => import('../views/UserEdit'),
    meta: { protectedRoute: true }
  },
  {
    path: '/permisos',
    name: 'Permissions',
    component: () => import('../views/Permissions'),
    meta: { protectedRoute: true }
  },
  {
    path: '/revision',
    name: 'Revision',
    component: () => import('../views/UsersRevision'),
    meta: { protectedRoute: true }
  },
  {
    path: '/devoluciones',
    name: 'Devoluciones',
    component: () => import('../views/Devoluciones'),
    meta: { protectedRoute: true }
  },
  {
    path: '/seguimiento',
    name: 'Seguimiento',
    component: () => import('../views/Seguimiento'),
    meta: { protectedRoute: true }
  },
  { path: "*", component: () => import('../views/404'), }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //about homem only about is protected
  const routeIsProtected = to.matched.some(item => item.meta.protectedRoute);
  if(routeIsProtected && localStorage.getItem('token') === null){
    next('/')
  } else {
    next()
  }
})

export default router
