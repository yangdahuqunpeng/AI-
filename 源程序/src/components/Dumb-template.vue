<template>
  <v-app id='app'>
    <!-- AppBar -->
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Chatbot</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
    <v-row class="text-center">
        <v-col class="mb-5 title">
          <h2 class="headline font-weight-bold mb-3">
            eyechatbot
          </h2>
          <p class="subheadline font-weight-regular">
            Sistem pakar deteksi penyakit mata berbasis pemrograman Java Script,
            <br> Dokumentasi?
            <a
              href="https://community.vuetifyjs.com"
              target="_blank"
            >Klik link ini</a>
          </p>
        </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
    </v-main>
    <p 
      v-for="i in gejala"
      :key="i"
    >
      {{ i }}
    </p>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      gejala: [
        'Gejala 1',
        'Gejala 2',
        'Gejala 3',
        'Gejala 4',
        'Gejala 5',
        'Gejala 6',
        'Gejala 7',
        'Gejala 8',
        'Gejala 9',
        'Gejala 10',
        'Gejala 11',
        'Gejala 12',
        'Gejala 13',
        'Gejala 14',
        'Gejala 15',
        'Gejala 16',
        'Gejala 17',
        'Gejala 18',
        'Gejala 19',
        'Gejala 20',
        'Gejala 21',
        'Gejala 22',
        'Gejala 23',
        'Gejala 24',
        'Gejala 25',
        'Gejala 26',
        'Gejala 27',
        'Gejala 28',
        'Gejala 29',
        'Gejala 30',
        'Gejala 31',
        'Gejala 32',
        'Gejala 33',
        'Gejala 34',
        'Gejala 35',
        'Gejala 36',
        'Gejala 37',
        'Gejala 38',
        'Gejala 39',
        'Gejala 40',
        'Gejala 41',
        'Gejala 42',
        'Gejala 43',
        'Gejala 44',
      ],
    }),
    computed: {
      checkedNames: {
        get: function () {
          return this.gejala;
        },
        set: function (newVal) {
          console.log(newVal); //with computed we have true/false value instead of array
          this._checkedNames = newVal;
        }
      }
    }
  }
</script>