<!-- composant principal -->
<template>
  <v-app>
    <v-app-bar id="test" dark app>

      <v-toolbar-title  class="headline text-uppercase">
        <span class="font-weight-light">Au Chaudron Magique </span>
      
    <!-- Réussir à mettre l'image de façon jolie dans la barre -->
        
       
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <span> Votre compte 
        <v-avatar color="red" size="60">
        <span class="white--text headline">62</span>
      </v-avatar>
      </span>
    </v-app-bar>

    <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Application
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>


    <v-content>
      <Accueil/>
    </v-content>
  </v-app>
</template>


<!-- Pour le code JS -->
<script>
import Accueil from './components/Accueil';

export default {
  name: 'App',
  components: {
    Accueil,
  },
  data(){
    return {
      items: [
        { title: 'Chaudrons', icon: 'mdi-expansion-card' },
        { title: 'Baguettes', icon: 'mdi-auto-fix' },
        { title: 'Qui sommes nous?', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  },
};


</script>

<style scoped>
  #test{
    background-color: rebeccapurple;
  }
</style>