<template>
  <v-container style="background-color:#FFFFFF;">
    <v-layout text-center wrap align-center>
      <v-flex xs12>
        <v-img :src="require('../assets/logoHarryPotter.jpg')" class="my-3" contain height="200"></v-img>
        </v-flex>
        <v-flex xs12>
          <h1 align="left">
            <v-icon>mdi-wallet-giftcard</v-icon>
            <FONT face="impact">Panier</FONT>
          </h1>
          <div>
            <v-btn rounded color="primary" @click="listElement(bagRon)" dark>listerPanier</v-btn>
          </div>
          <v-container fluid>
          <v-data-iterator
            :items="items"
            :items-per-page.sync="itemsPerPage"
            :footer-props="{ itemsPerPageOptions }"
          >
          <template v-slot:default="props">
            <v-row
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
            <v-col>
              <v-card>
                <v-card-title><h4>{{ item.name }}</h4></v-card-title>
                  <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <!-- je n'arrive pas a afficher l'image de la liste -->
                          <v-img :src="require('../assets/baguetteHarry.jpg')" class="my-3" contain height="200" width="200"></v-img>
                        </v-list-item-content>
                        <v-list-item-content class="align-end">
                          <center>
                            <!-- problème de retour a la ligne -->
                            {{ item.description }}
                          </center>
                          <b>{{ item.prix }}</b>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </template>
          </v-data-iterator>
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
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    url: 'http://localhost:4000',
    text: '',
    itemsPerPageOptions: [4, 8, 12],
    itemsPerPage: 4,
    items: [],
    snackbar: false
  }),
  methods: {
    async listElement (event) {
      const response = await this.axios.get(this.url + '/api/test')
      this.items = response.data
      console.log('response is:', response.data)
    }
  }
}
</script>
