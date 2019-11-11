<template>
  <nav >
    <v-toolbar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span  class="font-weight-light"> Harry Potter</span>
        <span > Shop </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/panier" icon>
        <img src="../assets/iconPannier.png" style="float:right" height="20%" width="20%" />
      </v-btn>
      <v-btn @click="logout" icon>
        <img src="../assets/iconUser.png" style="float:right" height="20%" width="20%" />
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer temporary v-model="drawer" app class="indigo">
      <v-list class="indigo">
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon dark >{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-title-content>
            <v-list-title class="white--text" >
              {{link.text}}
            </v-list-title>
          </v-list-title-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
  </nav>
</template>

<script>
export default {
  data () {
    return {
      url: 'http://localhost:4000',
      snackbar: false,
      text: '',
      drawer: false,
      links: [
        { icon: 'mdi-home-variant', text: 'Accueil', route: '/home' },
        { icon: 'mdi-hanger', text: 'Vêtements', route: '/vetements' },
        { icon: 'mdi-auto-fix', text: 'Baguettes', route: '/baguettes' },
        { icon: 'mdi-watch', text: 'Bijoux', route: '/bijoux' },
        { icon: 'mdi-newspaper', text: 'Nouveautés', route: '/new' },
        { icon: 'mdi-heart', text: 'Coups de coeur', route: '/heart' },
        { icon: 'mdi-account-group-outline', text: 'Team', route: '/team' }
      ]
    }
  },
  methods: {
    async logout () {
      const response = await this.axios.get(this.url + '/api/user')
      if (response.data === 1000) {
        const response2 = await this.axios.get(this.url + '/api/logout')
        if (response2.status === 200) {
          this.snackbar = true
          console.log(response2)
          this.text = response2.data.message
          this.$router.push('/')
        }
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
