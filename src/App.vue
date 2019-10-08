<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span>Harry Potter</span>
        <span class="font-weight-light">Shops</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon>
        <img src="./assets/iconPannier.png" style="float:right" height="20%" width="20%">
      </v-btn>
      <v-btn icon>
        <img src="./assets/iconUser.png" style="float:right" height="20%" width="20%">
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon> mdi-database</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Catégorie</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-numeric-1-box</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Article du moment</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-newspaper</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Nouveauté</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Coup de coeur</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <!--<Connexion/>-->
      <Accueil/>
    </v-content>
  </v-app>
</template>

<script>
//import Connexion from './components/Connexion';
import Accueil from './components/Accueil';

export default {
  name: 'App',
  components: {
    /*Connexion,*/ Accueil,
  },
  data: () => ({
    //
    drawer: true
  }),
};

</script>
