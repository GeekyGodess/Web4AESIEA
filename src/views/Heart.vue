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
                    <v-icon>mdi-heart</v-icon>
                    <FONT face="impact">Coups de coeur</FONT>
                </h1>
                <v-simple-table>
                    <template v-slot:default>
                        <tbody>
                            <tr>
                                <td>
                                    <v-img :src="require('../assets/teddyGryffondor.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                                </td>
                                <td>
                                    <h3>
                                        Teddy Gryffondor Quidditch bordeaux
                                    </h3>
                                    Description: Teddy Harry Potter - Gryffindor Blazon Col, poignets et ceinture en tricot à rayures décoratives Manches longues contrastées Poches passepoilées contrastées Boutons-pressions contrastés Sérigraphie recto-verso <br/>
                                    Matière: 70% coton, 30% polyester <br/>
                                    Tailles Européennes: S, M, L, XL, XXL<br/>
                                    <b>prix: 40€</b>
                                    <div>
                                        <v-btn rounded color="primary" dark>Ajouter au panier</v-btn>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <v-img :src="require('../assets/bijouxHermione.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                                </td>
                                <td>
                                    <h3>
                                        Collier Retourneur de temps
                                    </h3>
                                    Matière: plaqué or<br/>
                                    Taille: le pendentif mesure environ 3cmx3cm avec une chaîne en maille serpent de 40cm de longueur<br/>
                                    <b>prix: 20€</b>
                                    <div>
                                        <v-btn rounded color="primary" dark>Ajouter au panier</v-btn>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <v-img :src="require('../assets/baguetteHermione.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                                </td>
                                <td>
                                    <h3>
                                        Baguette Hermione Granger
                                    </h3>
                                    Bois: Vigne <br/>
                                    Coeur: Ventricule de Dragon<br/>
                                    Longeur: 27,30 centimètres<br/>
                                    <b>prix: 40€</b>
                                    <div>
                                        <v-btn rounded color="primary" dark>Ajouter au panier</v-btn>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                     </template>
                </v-simple-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>
