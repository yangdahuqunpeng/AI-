import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import PageNotFound from '../vuetify-components/NotFound.vue';
Vue.use(VueRouter);

// Define routes
export default new VueRouter({
  routes: [
    { 
      path: '/',
      name: 'Home',
      component: App,
    },
    {
      path: '/panduan',
      name: 'panduan',
      component: PageNotFound,
    },
    {
      path: '/informasi',
      name: 'informasi',
      component: PageNotFound,
    },
  ],
});