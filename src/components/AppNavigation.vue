<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span>Harry Potter</span>
        <span class="font-weight-light">Shop</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon>
        <img src="../assets/iconPannier.png" style="float:right" height="20%" width="20%" />
      </v-btn>
      <v-btn icon>
        <img src="../assets/iconUser.png" style="float:right" height="20%" width="20%" />
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-hanger</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title><v-btn text large v-on:click="choise">Vêtements</v-btn></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-auto-fix</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title><v-btn text large v-on:click="choise">Baguettes</v-btn></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-watch</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title><v-btn text large v-on:click="choise">Bijoux</v-btn></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-numeric-1-box</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title><v-btn text large v-on:click="choise">Articles du moment</v-btn></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-newspaper</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title><v-btn text large v-on:click="choise">Nouveautés</v-btn></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title><v-btn text large v-on:click="choise">Coups de coeur</v-btn></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer absolute
        v-bind="localAttrs"
        :padless="padless">
      <v-card
        flat
        tile
        width="100%"
        class="grey lighten-1 text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
  props: ['type'],
  data: () => ({
    //
    drawer: null,
    icons: ["mdi-home", "mdi-email", "mdi-facebook-box", "mdi-twitter"]
  }),
  methods: {
    choise: function (event) {
      this.name = event.target.textContent;
      this.type = this.name
      this.$emit(this.name);
      this.$emit(event.target.textContent)
      this.$emit(this.type)
    }
  }
};
</script>

<style scoped>
</style>