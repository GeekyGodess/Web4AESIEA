<!-- composant principal -->
<template>
  <v-app>
    <v-app-bar app>

      <v-toolbar-title class="headline text-uppercase">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span>Harry Potter</span>
        <span class="font-weight-light">Shop</span>
      </v-toolbar-title>


      <div class="flex-grow-1"></div>
      <v-btn icon>
        <img src="./assets/iconPannier.png" style="float:right" height="20%" width="20%">
      </v-btn>
      <v-btn icon>
        <img src="./assets/iconUser.png" style="float:right" height="20%" width="20%">
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>

        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon> mdi-hanger</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Vêtements</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon> mdi-auto-fix</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Baguettes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon> mdi-watch</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Bijoux</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-numeric-1-box</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Articles du moment</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-newspaper</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Nouveautés</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Coups de coeur</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <!--<Connexion/>-->
      <Accueil/>
      <v-footer
        v-bind="localAttrs"
        :padless="padless"
      >
        <v-card
          flat
          tile
          width="100%"
          class="grey lighten-1 text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              icon
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-content>
  </v-app>
</template>


<!-- Pour le code JS -->
<script>
//import Connexion from './components/Connexion';
import Accueil from './components/Accueil';

export default {
  name: 'App',
  components: {
    /*Connexion,*/ 
    Accueil,
  },
  data: () => ({
    //
    drawer: null,
     icons: [
      'mdi-home',
      'mdi-email',
      'mdi-facebook-box',
      'mdi-twitter',
    ],
  }),
};
</script>