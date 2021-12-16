<template>
  <div class='p-2'>
    <div 
      class="container w-100 mw-50 mb-3 mx-auto p-3 
      shadow-hover rounded border border-red-500"
    >
      <p class="font-weight-bold blue--text text--darken-4">
        Pilih Salah Satu atau Beberapa Gejala di Bawah ini
      </p>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Peka terhadap cahaya (fotofobia)"
        value="gejala1"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Terasa nyeri"
        value="gejala2"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Tampak bintik nanah berwarna kuning keputihan pada kornea"
        value="gejala3"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Terdapat kotoran mata"
        value="gejala4"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Kelopak mata membengkak"
        value="gejala5"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mengalami iritasi"
        value="gejala6"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Terjadi pembengkakan bundar pada kelopak mata dan tumbuh secara perlahan"
        value="gejala7"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Terbentuk daerah kemerahan/abu-abu di bawah kelopak mata"
        value="gejala8"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mengalami iritasi"
        value="gejala9"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata sukar dibuka ketika bangun dipagi hari"
        value="gejala10"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Alergi"
        value="gejala11"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata terasa panas"
        value="gejala12"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata seperti kelilipan"
        value="gejala13"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata berair"
        value="gejala14"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Nyeri pada tepi kelopak mata"
        value="gejala15"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Kornea tampak keruh"
        value="gejala16"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Konjungtiva meradang"
        value="gejala17"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Penglihatan kabur"
        value="gejala18"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Terlihat bentuk-bentuk iregular yang melayang-layang atau kilatan cahaya"
        value="gejala19"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Hilangnya fungsi penglihatan pada salah satu mata, yang kemudian menyebar sejalan perkembangan ablasio"
        value="gejala20"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Kesulitan melihat di malam hari"
        value="gejala21"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Penurunan ketajaman penglihatan (bahkan siang hari)"
        value="gejala22"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Kemerahan pada skelra"
        value="gejala23"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata menonjol"
        value="gejala24"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Demam"
        value="gejala25"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Bola mata bengkak dan tampak berkabut "
        value="gejala26"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata merah"
        value="gejala27"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata terasa gatal"
        value="gejala28"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata terasa perih"
        value="gejala29"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Konjungtiva menjadi merah"
        value="gejala30"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Konjungtiva bengkak"
        value="gejala31"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Peradangan mata yang agak menonjol dan berwarna kuning"
        value="gejala32"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata nyeri bila ditekan"
        value="gejala33"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Gangguan Penglihatan"
        value="gejala34"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Sakit kepala"
        value="gejala35"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Koma"
        value="gejala36"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Kejang"
        value="gejala37"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Sakit dengan gerakan mata"
        value="gejala38"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Kehilangan penglihatan"
        value="gejala39"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Nyeri di daerah sekitar kantong air mata"
        value="gejala40"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata mengeluarkan nanah "
        value="gejala41"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Pusing karena lelah"
        value="gejala42"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mengalami mual dan muntah"
        value="gejala43"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Pupil melebar dan tidak mengecil jika diberi sinar yang terang"
        value="gejala44"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Sel batang retina sulit berdaptasi diruang yang remang-remang"
        value="gejala45"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Tidak dapat melihat pada lingkungan yang kurang bercahaya"
        value="gejala46"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Gangguan penglihatan pada salah satu mata"
        value="gejala47"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Garis mata lurus terlihat bergelombang"
        value="gejala48"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata tidak nyeri"
        value="gejala49"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Riwayat penyakit menular seksual pada ibu"
        value="gejala50"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Air mata berlebihan"
        value="gejala51"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Mata kering"
        value="gejala52"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Benjolan pada mata bagian atas atau bawah"
        value="gejala53"
      ></v-checkbox>
      <v-checkbox
        class="mx-0 my-0"
        v-model="selected"
        label="Seperti ada benda asing di mata"
        value="gejala54"
      ></v-checkbox>

      <v-row
        justify="left"
        no-gutters
      >
        <p>Anda memilih gejala dengan kode: &nbsp;</p>
        <p 
          v-for="i in selected"
          :key="i"
        >
          {{ i }}, &nbsp;
        </p>
      </v-row>

      <!-- Button in Vuetify 
      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color=""
        class="mb-1 ml-0 white--text rounded-xl blue darken-4"
        @click="send()"
      >
        Submit
      </v-btn> -->

      <!-- Button in Bootstrap Vue -->
      <b-button
        className='mb-3'
        variant="warning" 
        @click='send()'
      >
        Submit
      </b-button>

    </div>
    <div 
      class="container mw-50 w-100 mx-auto my-3 py-2 px-3 white--text rounded shadow-hover blue darken-4"
    >
      <p>Hasil Diagnosis</p>
      <p>{{ diagnosis }}</p>
      <p>{{ message2 }}</p>
    </div>

  </div>
</template>

<script>
import axios from "axios"
export default {
  components: {
  },
  data() {
    return {
      selected: [],
      diagnosis: '',
      message: '',
      messages: '',
    };
  },
  created(){
    this.send()
    this.getTest(),
    this.get()
  },
  methods: {
    send() { //
      axios.post('https://chatbot-backend-hapi.herokuapp.com', {
        selected: this.selected
      })
      .then((response) => {
        this.diagnosis=response.data.diagnosis
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getTest() {
      axios.get('https://chatbot-backend-hapi.herokuapp.com')
      .then((response) => {
        this.message=response.data.message
      })
      .catch((error) => {
        console.log(error)
      })
    },
    get() {
      axios.get('http://localhost:8000/hello')
      .then((response)=> {
        this.messages=response.data.message
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
};

</script>

<style scoped>
.shadow-hover:hover {
  box-shadow: 0 0 10px 0 #c4c4c4;
	transition: box-shadow 0.3s ease-in-out;
}
</style>

