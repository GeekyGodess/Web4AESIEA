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
            <v-icon>mdi-newspaper</v-icon>
            <FONT face="impact">Nouveautés</FONT>
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
                <v-card-title><h4>Robe de Sorcier Serpentard</h4></v-card-title>
                  <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-img :src="require('../assets/robeSerpentard.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                        </v-list-item-content>
                        <v-list-item-content class="align-end">
                          <center>
                            Description: La pièce de costume indispensable pour tout amateur de la maison Serpentard ou pour un costume de Drago Malefoy ! Unisexe.<br/>
                            Matière : 100% polyester, Doublure satin en polyester<br/>
                            Tailles Européennes: XS, S, M, L, XL<br/>
                          </center>
                          <b>prix: 80€</b>
                          <div>
                            <v-btn rounded color="primary" @click="addElement(robSep)" dark>{{ item.bouton }}</v-btn>
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
    url: '', // 'http://localhost:4000'
    text: '',
    robSep: 'Hermione',
    bagHar: 'Harry',
    bijHar: 'Harry2',
    itemsPerPageOptions: [4, 8, 12],
    itemsPerPage: 4,
    items: [ { bouton: 'Ajouter au panier' } ],
    snackbar: false
  }),
  methods: {
    async addElement (event) {
      if (event === this.robSep) {
        const response = await this.axios.post(this.url + '/api/panier', {
          name: 'Robe de Sorcier Serpentard',
          image: '../assets/robeSerpentard.jpeg',
          description: 'Description: La pièce de costume indispensable pour tout amateur de la maison Serpentard ou pour un costume de Drago Malefoy ! Unisexe.\nMatière : 100% polyester, Doublure satin en polyester\nTailles Européennes: XS, S, M, L, XL',
          prix: 'prix: 80€'
        })
        if (response.status === 200) {
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
          this.snackbar = true
          this.text = response.data.message
        }
      }
      if (event === this.bijHar) {
        const response = await this.axios.post(this.url + '/api/panier', {
          name: 'Collier Vif d’or avec cristaux Swarovski',
          image: '../assets/bijouxHarry.jpeg',
          description: 'Matière : Argent 925ème avec des cristaux de Swarovski®\nTaille : le pendentif mesure environ 1,5cm de haut et 1,5cm de large. Chaîne serpent de 45cm.',
          prix: 'prix: 75€'
        })
        if (response.status === 200) {
          this.snackbar = true
          this.text = response.data.message
        }
      }
    }
  }
}
</script>
