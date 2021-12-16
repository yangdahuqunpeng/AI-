<template>
  <v-app id='app'>
    <NavBar/>
    <Card/>
    <Title/>
    <Form/>
    <Footer/>
  </v-app>
</template>

<script>
import Card from './tailwind-components/Card.vue'
// import ChatNotification from './tailwind-components/ChatNotification.vue'
import NavBar from './bootstrap-vue-components/NavBar.vue'
import Footer from './vuetify-components/Footer.vue'
import Form   from './vuetify-components/Form.vue'
import Title  from './vuetify-components/Title.vue'
import './index.css'
export default {
  name: 'App',
  components: {
    Card,
    NavBar,
    Footer,
    Form,
    Title,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

#app {
  background-color: white;
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  margin: 0 auto;
  padding: 0;
  width: 100%;
}
</style>