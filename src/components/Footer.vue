<template>
    <v-footer 
        v-bind="localAttrs"
        :padless="padless">
      <v-card
        flat
        tile
        width="100%"
        class="grey lighten-1 text-center">
        <v-card-text>
          <v-btn small fab depressed>
              <v-icon size="24px" >mdi-twitter</v-icon>
            </v-btn>
            
            <v-btn small fab depressed>
              <v-icon size="24px">mdi-facebook</v-icon>
            </v-btn>

            <v-btn small fab depressed>
              <v-icon size="24px">mdi-linkedin</v-icon>
            </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Harry Potter Shop </strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>