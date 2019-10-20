<template>
    <v-container style="background-color:	#FFFFFF;">
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
                <v-simple-table>
                    <template v-slot:default>
                        <tbody>
                            <tr>
                                <td>
                                    <v-img :src="require('../assets/baguetteHermione.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                                </td>
                                <td>
                                    <h3>
                                        Baguette Hermione Granger
                                    </h3>
                                    <p>
                                        Bois: Vigne <br/>
                                        Coeur: Ventricule de Dragon<br/>
                                        Longeur: 27,30 centimètres<br/>
                                        <b>prix: 40€</b>
                                        <div>
                                         <v-btn rounded color="primary" dark>Ajouter au panier</v-btn>
                                        </div>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <v-img :src="require('../assets/baguetteHarry.jpg')" class="my-3" contain height="200" width="200"></v-img>
                                </td>
                                <td>
                                    <h3>
                                        Baguette Harry Potter
                                    </h3>
                                    <p>
                                        Bois: Houx<br/>
                                        Coeur: Plume de phénix<br/>
                                        Longeur: 27,50 centimètres
                                        très souple<br/>
                                        <b>prix: 40€</b>
                                        <div>
                                         <v-btn rounded color="primary" dark>Ajouter au panier</v-btn>
                                        </div>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <v-img :src="require('../assets/baguetteRon.jpg')" class="my-3" contain height="200" width="200"></v-img>
                                </td>
                                <td>
                                    <h3>
                                        Baguette Ronald Weasley
                                    </h3>
                                    <p>
                                        Bois: Saule<br/>
                                        Coeur: Crin de licorne<br/>
                                        Longeur: 35 centimètres<br/>
                                        <b>prix: 40€</b>
                                        <div>
                                         <v-btn rounded color="primary" dark>Ajouter au panier</v-btn>
                                        </div>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                         
                     </template>
                </v-simple-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>