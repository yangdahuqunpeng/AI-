<template>
  <v-app-bar app color='transparent' id='appbar' class='m-0 p-0'>
    <div class='d-flex justify-center mx-auto my-0 py-2'>
      <router-link to='/'>
        <div class='nav-item mx-1 px-1 py-1'>
          Home
        </div>
      </router-link>
      <router-link to='/dokumentasi'>
        <div class='nav-item mx-1 px-1 py-1'>
          Dokumentasi
        </div>
      </router-link>
      <router-link to='/creator'>
        <div class='nav-item mx-1 px-1 py-1'>
          Creator
        </div>
      </router-link>

      <!--<transition name='fade' mode='out-in'>-->
      <router-view class='view'></router-view>
    </div>
  </v-app-bar>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import PageNotFound from './NotFound.vue';
Vue.use(VueRouter);

// Define routes
export default new VueRouter({
  routes: [
    { 
      path: '/', 
      name: 'Home', 
      component: PageNotFound,
    },
    {
      path: '/dokumentasi',
      name: 'Dokumentasi',
      component: PageNotFound,
    },
    {
      path: '/creator',
      name: 'Creator',
      component: PageNotFound,
    },
  ],
});
</script>

<style scoped>
#appbar {
  box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.4);
}
.nav-item {
  background-color: #f5f3f3;
  border: 2px solid #0531a1;
  border-radius: 15px;
  color: #0531a1;
  font-size: 16px;
  text-decoration: none;
}
.nav-item:hover {
  background-color: #0531a1;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);
  color: white;
}
</style>
