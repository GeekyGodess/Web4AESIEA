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
                <v-simple-table>
                    <template v-slot:default>
                        <tbody>
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
                                    <v-img :src="require('../assets/bijouxHarry.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                                </td>
                                <td>
                                    <h3>
                                        Collier Vif d’or avec cristaux Swarovski
                                    </h3>
                                    Matière : Argent 925ème avec des cristaux de Swarovski®<br/>
                                    Taille : le pendentif mesure environ 1,5cm de haut et 1,5cm de large. Chaîne serpent de 45cm.<br/>
                                    <b>prix: 75€</b>
                                    <div>
                                        <v-btn rounded color="primary" dark>Ajouter au panier</v-btn>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <v-img :src="require('../assets/bijouxRelique.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                                </td>
                                <td>
                                    <h3>
                                        Collier Reliques de la mort avec cristaux de Swarovski
                                    </h3>
                                    Matière : Argent 925ème avec des cristaux Swarovski®<br/>
                                    Taille : le pendentif mesure environ 1,5cm de haut et 1,5cm de large. Chaîne serpent de 45cm.<br/>
                                    <b>prix: 75€</b>
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
