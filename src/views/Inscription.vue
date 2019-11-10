<template>
  <v-container style="background-color:#FFFFFF;">
    <v-layout text-center wrap align-center>
      <v-flex xs12>
        <v-img
          :src="require('../assets/logoHarryPotter.jpg')"
          class="my-3"
          contain
          height="300"
        ></v-img>
      </v-flex>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3" style="color:#000000">
          <FONT face="Impact">Welcome to Harry Potter shop</FONT>
        </h1>
        <p class="subheading font-weight-regular" style="background-color:#FFFFFF;">
          <v-icon> mdi-watch</v-icon>
          Inscrivez vous au shop!
          <v-container fluid align-center>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="login2" label="Name" required></v-text-field>
                <v-text-field v-model="mdp" :type="show4 ? 'text' : 'password'" label="Password" required></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="inscription">Inscription</v-btn>
            <v-snackbar v-model="snackbar">
              {{ text }}
              <v-btn
                color="pink"
                text
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </v-snackbar>
          </v-container>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    valid: false,
    login2: '',
    mdp: '',
    todos: [],
    url: 'http://localhost:4000',
    snackbar: false,
    text: ''
  }),
  methods: {
    async inscription () {
      // inscription l'utilisateur
      const response = await this.axios.post(this.url + '/api/inscription', {
        login: this.login2,
        password: this.mdp
      })
      if (response.status === 200) {
        this.snackbar = true
        this.text = response.data.message
        this.login2 = ''
        this.mdp = ''
      }
    }
  }
}
</script>
