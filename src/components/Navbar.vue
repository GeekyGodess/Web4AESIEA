<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light"> Harry Potter</span>
                <span> Shop </span>
            </v-toolbar-title>  
            <v-spacer></v-spacer>
            <v-btn icon>
                <img src="../assets/iconPannier.png" style="float:right" height="20%" width="20%" />
            </v-btn>
            <v-btn icon>
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


    </nav>
</template>





<script>
export default {
    data(){
        return{
            drawer:false,
            links:[
                {icon:'mdi-home-variant', text:'Accueil', route:'/'},
                {icon:'mdi-hanger', text:'Vêtements', route:'/vetements'},
                {icon:'mdi-auto-fix', text:'Baguettes', route:'/baguettes'},
                {icon:'mdi-watch', text:'Bijoux', route:'/bijoux'},
                {icon:'mdi-newspaper', text:'Nouveautés', route:'/new'},
                {icon:'mdi-heart', text:'Coups de coeur', route:'/heart'},
                {icon:'mdi-account-group-outline', text:'Team', route:'/team'},
            ]
        }
    }
    
}
</script>