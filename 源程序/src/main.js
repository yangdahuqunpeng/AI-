import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Bootstrap Icon
import 'bootstrap-icons/font/bootstrap-icons.css';
Vue.use(BootstrapVue)

//Tailwind CSS
import './index.css';

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
