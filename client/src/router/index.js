import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter)
Vue.use(BootstrapVue);

const routes = [{
  path: '/',
  name: 'Identification',
  component: () => import('../components/SignupUser.vue')
}, {
  path: '/notes',
  name: 'Notes',
  component: () => import('../components/ListNotes.vue')
}, {
  path: '/ajouter-une-note',
  name: 'Ajouter une note',
  component: () => import('../components/AddNote.vue')
}, {
  path: '/modifier/:id',
  name: 'Modifier',
  component: () => import('../components/UpdateNote.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router