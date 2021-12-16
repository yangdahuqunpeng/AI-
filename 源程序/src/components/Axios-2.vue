<template>
  <div class="form mx-auto my-2 rounded-xl">
    
    <h5> API 1</h5>

    <header>
      <h1> Daftar Nama User : </h1>
    </header>

    <div class="list">
      
      <ul 
        v-for="user in users" 
        :key="user.id" 
        style="list-style: none"
        class="mx-auto"
      >
        <li>
          <router-link 
            :to="{ name: 'User', params: { id: user.id } }"
          >
          {{ user.name }}
          </router-link>
        </li>
      </ul>

      <h5>API 2</h5>

      <ul 
        v-for="joke in jokes" 
        :key="joke.id" 
        style="list-style: none"
        class="mx-auto"
      >
        <li>{{ joke.id }}</li>
        <li>{{ joke.joke }}</li>
        <li>{{ joke.category }}</li>
      </ul>
      
      <h1>{{ message }}</h1>
      <h1>{{ status }}</h1>

      <button v-on:click="say('hi')">Say hi</button>

      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="#0531a1"
        class="ma-2 white--text rounded-xl btn-hover"
        @click="getApi()"
      >
        Submit
      </v-btn>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      jokes: [],
      loading: false,
      message: [],
      status: [],
      users: [],
    }
  },
  created() {
    this.getApi()
    this.getAllUser()
    this.getMessage()
  },
  methods: {
    getAllUser() {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.users = response.data
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getApi() {
      this.loading = true;
      axios.get("https://api.icndb.com/jokes/random/10")
      .then((response) => {
        this.jokes = response.data.value
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      })
    },
    // chatbot-backend-hapi.herokuapp.com
    getMessage() {
      axios.get('http://localhost:5000')
      .then((response) => {
        this.message = response.data.message;
        this.status = response.data.status;
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    say: function (message) {
      alert(message)
    }
  }
}
</script>

<style scoped>
.form {
  background-color: white;
  border: 3px solid #0531a1;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  color: #0531a1;
  padding: 10px 20px;
  width: 95%;
  max-width: 600px;
}
.form p {
  font-size: 16px;
}
</style>