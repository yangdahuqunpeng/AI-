<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto my-3 rounded-xl"
        max-width="350"
        id="card"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        >
          <v-card-title>Pencegahan Penyakit Mata</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          Langkah-langkah pencegahan penyakit mata
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Oleh Aladokter</div>
        </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="white"
          >
            <v-card-actions>
              <v-btn
                depressed
                class="font-weight-bold mx-2 btn-font-size"
                color="black"
                text
              >
                Share
              </v-btn>

              <v-btn
                depressed
                class="font-weight-bold mx-2 btn-font-size"
                color="black"
                href="https://www.alodokter.com/inilah-gejala-dan-cara-mengobati-sakit-mata-secara-alami"
                text
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-overlay>
        </v-fade-transition>
      </v-card>  
    </template>
  </v-hover>
</template>

<script>
  export default {
    data: () => ({
      overlay: false,
    }),
  }
</script>

<style scoped>
#card{
  border: 3px solid #0531a1;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
}
.btn-font-size {
  font-size: 18px;
}
</style>