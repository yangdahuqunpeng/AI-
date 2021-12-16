<template>
  <v-footer
    padless
    class="footer"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <!--
      <v-col
        class="blue darken-4 py-1 text-center white--text"
        cols="12"
      >

        <v-
        btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          :href="link.link"
          class="my-0"
        >
          {{ link.nama }}
        </v-btn>
      </v-col>
      -->      
      <v-col
        class="blue darken-4 py-1 text-center white--text"
        cols="12"
      >
        Released under the 
        <a href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt"
        class="white--text">MIT License</a>
      </v-col>

      <v-col
        class="blue darken-4 py-2 text-center white--text"
        cols="12"
      >
        &copy; {{ new Date().getFullYear() }} — Mochamad Rafli Ramadhan
      </v-col>
      <v-col
        class="blue darken-4 py-1 text-center white--text"
        cols="12"
      >
        <v-btn
          v-for="i in icons"
          :key="i"
          class="mx-1 white--text"
          icon
          :href= "i.link"
          target="_blank"
        >
          <v-icon 
            class='icon' 
            size="24px"
          >{{ i.icon }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    components: {
    },
    data: () => ({
      links: [
        {
          nama: 'Ke atas',
          link: '#title-1',
        },
        {
          nama: 'Tentang',
          link: '',
        },
        {
          nama: 'Privasi',
          link: '',
        },
        {
          nama: 'Panduan',
          link: '',
        }
      ],
      icons: [
        {
          icon:'mdi-github',
          link:'https://www.github.com/mochamadrafli2018'
        },
        {
          icon:'mdi-email',
          link:'https://mail.google.com/mail/?view=cm&fs=1&to=mochamadrafli2018@mail.ugm.ac.id'
        },
        {
          icon:'mdi-linkedin',
          link:'https://www.linkedin.com/in/mochamad-rafli-ramadhan'
        },
        {
          icon:'mdi-instagram',
          link:'https://www.instagram.com/rafli.r.rmdhn'
        },
      ],
    }),
  }
</script>

<style scoped>
.footer{
  width: 100%;
}
</style>