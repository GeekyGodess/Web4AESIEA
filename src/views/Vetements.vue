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
            <v-icon>mdi-hanger</v-icon>
            <FONT face="impact">Vêtements</FONT>
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
                    <v-card-title><h4>Pull de Quidditch Poufsouffle</h4></v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-img :src="require('../assets/pullPoufsouffle.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                        </v-list-item-content>
                        <v-list-item-content class="align-end">
                          <centre>
                            Matière : 100% laine d'agneau (avec broderie)<br/>
                            Tailles Européennes: S, M, L, XL<br/>
                          </centre>
                          <b>prix: 75€</b>
                          <div>
                            <v-btn rounded color="primary" @click="addElement(pullPouf)" dark>{{ item.bouton }}</v-btn>
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card>
                    <v-card-title><h4>Teddy Gryffondor Quidditch bordeaux</h4></v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-img :src="require('../assets/teddyGryffondor.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                        </v-list-item-content>
                        <v-list-item-content class="align-end">
                          <centre>
                            Description: Teddy Harry Potter - Gryffindor Blazon Col, poignets et ceinture en tricot à rayures décoratives Manches longues contrastées Poches passepoilées contrastées Boutons-pressions contrastés Sérigraphie recto-verso <br/>
                            Matière: 70% coton, 30% polyester <br/>
                            Tailles Européennes: S, M, L, XL, XXL<br/>
                          </centre>
                          <b>prix: 40€</b>
                          <div>
                            <v-btn rounded color="primary" @click="addElement(tedGry)" dark>{{ item.bouton }}</v-btn>
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
    robSep: 'Serpentard',
    tedGry: 'Gryfondor',
    pullPouf: 'Poufsouffe',
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
      if (event === this.tedGry) {
        const response = await this.axios.post(this.url + '/api/panier', {
          name: 'Teddy Gryffondor Quidditch bordeaux',
          image: '../assets/teddyGryffondor.jpeg',
          description: 'Description: Teddy Harry Potter - Gryffindor Blazon Col, poignets et ceinture en tricot à rayures décoratives Manches longues contrastées Poches passepoilées contrastées Boutons-pressions contrastés Sérigraphie recto-verso\nMatière: 70% coton, 30% polyester\nTailles Européennes: S, M, L, XL, XXL',
          prix: 'prix: 40€'
        })
        if (response.status === 200) {
          this.snackbar = true
          this.text = response.data.message
        }
      }
      if (event === this.pullPouf) {
        const response = await this.axios.post(this.url + '/api/panier', {
          name: 'Pull de Quidditch Poufsouffle',
          image: '../assets/pullPoufsouffle.jpeg',
          description: 'Matière : 100% laine en agneau (avec broderie)\nTailles Européennes: S, M, L, XL',
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
