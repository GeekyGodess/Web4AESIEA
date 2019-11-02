<template>
  <v-container style="background-color:	#FFFFFF;">
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
          <FONT face="Impact">Bienvenue sur Harry Potter Shop</FONT>
        </h1>
        <p class="subheading font-weight-regular" style="background-color:#FFFFFF;">
          Connectez vous pour accéder au magasin
          <v-container fluid align-center>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="login" label="identifiant"></v-text-field>
                <v-text-field v-model="mdp" :type="show4 ? 'text' : 'password'" label="mot de passe"></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="login">Connexion</v-btn>
          </v-container>
          <a href="https://community.vuetifyjs.com" target="_blank">Pas encore inscris? inscrivez-vous!</a>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    description: '',
    todos: [],
    url: '' // 'http://localhost:4000'
  }),
  methods: {
    async login () {
      // connecter l'utilisateur
      const response = await this.axios.post(this.url + '/api/login', {
        login: 'admin',
        password: 'changethispassword'
      })
      alert(response);
      //console.log('response is:', response)
    },
    async logout () {
      // connecter l'utilisateur
      const response = await this.axios.get(this.url + '/api/test')
      alert(response)
      //console.log('response is:', response)
    },
  }
}
</script>