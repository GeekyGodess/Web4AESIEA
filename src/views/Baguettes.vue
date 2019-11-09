<template>
  <v-container style="background-color:#FFFFFF;">
    <v-layout text-center wrap align-center>
      <v-flex xs12>
        <v-img :src="require('../assets/logoHarryPotter.jpg')" class="my-3" contain height="200"></v-img>
        <v-row align="center" justify="space-around">
          <v-text-field label="Recherche" ></v-text-field>
          <v-icon>mdi-magnify</v-icon>
        </v-row>
        </v-flex>
        <v-flex xs12>
          <h1 align="left">
            <v-icon> mdi-auto-fix</v-icon>
            <FONT face="impact">Baguettes</FONT>
          </h1>
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
                <v-card-title><h4>Baguette Hermione Granger</h4></v-card-title>
                  <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-img :src="require('../assets/baguetteHermione.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                        </v-list-item-content>
                        <v-list-item-content class="align-end">
                          <center>
                            Bois: Vigne <br/>
                            Coeur: Ventricule de Dragon<br/>
                            Longeur: 27,30 centimètres<br/>
                          </center>
                          <b>prix: 40€</b>
                          <div>
                            <v-btn rounded color="primary" @click="addElement(bagHer)" dark>{{ item.bouton }}</v-btn>
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card>
                    <v-card-title><h4>Baguette Harry Potter</h4></v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-img :src="require('../assets/baguetteHarry.jpg')" class="my-3" contain height="200" width="200"></v-img>
                        </v-list-item-content>
                        <v-list-item-content class="align-end">
                          <centre>
                            Bois: Houx<br/>
                            Coeur: Plume de phénix<br/>
                            Longeur: 27,50 centimètres très souple<br/>
                          </centre>
                          <b>prix: 40€</b>
                          <div>
                            <v-btn rounded color="primary" @click="addElement(bagHar)" dark>{{ item.bouton }}</v-btn>
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card>
                    <v-card-title><h4>Baguette Ronald Weasley</h4></v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-img :src="require('../assets/baguetteRon.jpg')" class="my-3" contain height="200" width="200"></v-img>
                        </v-list-item-content>
                        <v-list-item-content class="align-end">
                          <centre>
                            Bois: Saule<br/>
                            Coeur: Crin de licorne<br/>
                            Longeur: 35 centimètres<br/>
                          </centre>
                          <b>prix: 40€</b>
                          <div>
                            <v-btn rounded color="primary" @click="addElement(bagRon)" dark>{{ item.bouton }}</v-btn>
                          </div>
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
    bagHer: 'Hermione',
    bagHar: 'Harry',
    bagRon: 'Ron',
    itemsPerPageOptions: [4, 8, 12],
    itemsPerPage: 4,
    items: [ { bouton: 'Ajouter au panier' } ],
    snackbar: false
  }),
  methods: {
    async addElement (event) {
      if (event === this.bagHer) {
        const response = await this.axios.post(this.url + '/api/panier', {
          name: 'Baguette Hermione Granger',
          image: '../assets/baguetteHermione.jpeg',
          description: 'Bois: Vigne\nCoeur: Ventricule de Dragon\nLongeur: 27,30 centimètres',
          prix: 'prix: 40€'
        })
        console.log('response is:', response)
        if (response.status === 200) {
          console.log('response is:', response)
          this.snackbar = true
          this.text = response.data.message
        }
      }
      if (event === this.bagHar) {
        const response = await this.axios.post(this.url + '/api/panier', {
          name: 'Baguette Harry Potter',
          image: '../assets/baguetteHarry.jpg',
          description: 'Bois: Houx\nCoeur: Plume de phénix\nLongeur: 27,50 centimètres très souple',
          prix: 'prix: 40€'
        })
        if (response.status === 200) {
          console.log('response is:', response)
          this.snackbar = true
          this.text = response.data.message
        }
      }
      if (event === this.bagRon) {
        const response = await this.axios.post(this.url + '/api/panier', {
          name: 'Baguette Ronald Weasley',
          image: '../assets/baguetteRon.jpg',
          description: 'Bois: Saule\nCoeur: Crin de licorne\nLongeur: 35 centimètres',
          prix: 'prix: 40€'
        })
        if (response.status === 200) {
          console.log('response is:', response)
          this.snackbar = true
          this.text = response.data.message
        }
      }
    }
  }
}
</script>
