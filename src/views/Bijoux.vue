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
            <v-icon> mdi-watch</v-icon>
            <FONT face="impact">Bijoux</FONT>
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
                <v-card-title><h4>Collier Retourneur de temps</h4></v-card-title>
                  <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-img :src="require('../assets/bijouxHermione.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                        </v-list-item-content>
                        <v-list-item-content class="align-end">
                          <center>
                            Matière: plaqué or<br/>
                            Taille: le pendentif mesure environ 3cmx3cm avec une chaîne en maille serpent de 40cm de longueur<br/>
                          </center>
                          <b>prix: 20€</b>
                          <div>
                            <v-btn rounded color="primary" @click="addElement(bijHer)" dark>{{ item.bouton }}</v-btn>
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card>
                    <v-card-title><h4>Collier Vif d’or avec cristaux Swarovski</h4></v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-img :src="require('../assets/bijouxHarry.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                        </v-list-item-content>
                        <v-list-item-content class="align-end">
                          <centre>
                            Matière : Argent 925ème avec des cristaux de Swarovski®<br/>
                            Taille : le pendentif mesure environ 1,5cm de haut et 1,5cm de large. Chaîne serpent de 45cm.<br/>
                          </centre>
                          <b>prix: 75€</b>
                          <div>
                            <v-btn rounded color="primary" @click="addElement(bijHar)" dark>{{ item.bouton }}</v-btn>
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card>
                    <v-card-title><h4>Collier Reliques de la mort avec cristaux de Swarovski</h4></v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-img :src="require('../assets/bijouxRelique.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                        </v-list-item-content>
                        <v-list-item-content class="align-end">
                          <centre>
                            Matière : Argent 925ème avec des cristaux Swarovski®<br/>
                            Taille : le pendentif mesure environ 1,5cm de haut et 1,5cm de large. Chaîne serpent de 45cm.<br/>
                          </centre>
                          <b>prix: 75€</b>
                          <div>
                            <v-btn rounded color="primary" @click="addElement(bijReq)" dark>{{ item.bouton }}</v-btn>
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
    bijHer: 'Hermione',
    bijHar: 'Harry',
    bijReq: 'Relique',
    itemsPerPageOptions: [4, 8, 12],
    itemsPerPage: 4,
    items: [ { bouton: 'Ajouter au panier' } ],
    snackbar: false,
    text: ''
  }),
  methods: {
    async addElement (event) {
      if (event === this.bijHer) {
        const response = await this.axios.post(this.url + '/api/panier', {
          name: 'Collier Retourneur de temps',
          description: 'Matière: plaqué or/Taille: le pendentif mesure environ 3cmx3cm avec une chaîne en maille serpent de 40cm de longueur',
          prix: '20€'
        })
        if (response.status === 200) {
          console.log('response is:', response)
          this.snackbar = true
          this.text = response.data.message
        }
      }
      if (event === this.bijHar) {
        const response = await this.axios.post(this.url + '/api/panier', {
          name: 'Collier Vif d’or avec cristaux Swarovski',
          description: 'Matière : Argent 925ème avec des cristaux de Swarovski®/Taille : le pendentif mesure environ 1,5cm de haut et 1,5cm de large. Chaîne serpent de 45cm.',
          prix: '75€'
        })
        if (response.status === 200) {
          console.log('response is:', response)
          this.snackbar = true
          this.text = response.data.message
        }
      }
      if (event === this.bijReq) {
        const response = await this.axios.post(this.url + '/api/panier', {
          name: 'Collier Reliques de la mort avec cristaux de Swarovski',
          description: 'Matière : Argent 925ème avec des cristaux Swarovski®/Taille : le pendentif mesure environ 1,5cm de haut et 1,5cm de large. Chaîne serpent de 45cm.',
          prix: '75€'
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
