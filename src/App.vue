<template>
<<<<<<< HEAD
    <v-app>
        <app-navigation></app-navigation>

        <v-content transition="slide-x-transition">
            <router-view></router-view>
            <Accueil/>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import Accueil from '@/components/Accueil.vue'

export default {
    name: 'App',
    components: {
        AppNavigation,
        Accueil
    }
};
</script>

<style>
</style>
=======
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{ Navbar},
  data: () => ({
    //
  }),
};
</script>
>>>>>>> master
