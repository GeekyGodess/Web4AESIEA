<!-- composant principal -->
<template>
    <v-app>
        <app-navigation></app-navigation>

        <v-content transition="slide-x-transition">
            <router-view></router-view>
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