<template>
  <v-main class="mx-0 p-0">
    <Title/>
    <FormGejala/>
    <Footer/>
  </v-main>
</template>

<script>
import Footer from './Footer.vue'
import FormGejala from './FormGejala.vue';
import Title from './Title.vue'

export default {
  name: 'App',
  components: {
    Footer,
    FormGejala,
    Title,
  },
}
</script>