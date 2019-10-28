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
                    <v-icon>mdi-newspaper</v-icon>
                    <FONT face="impact">Nouveautés</FONT>
                </h1>
                <v-simple-table>
                    <template v-slot:default>
                        <tbody>
                            <tr>
                                <td>
                                    <v-img :src="require('../assets/robeSerpentard.jpeg')" class="my-3" contain height="200" width="200"></v-img>
                                </td>
                                <td>
                                    <h3>
                                        Robe de Sorcier Serpentard
                                    </h3>
                                    
                                        Description: La pièce de costume indispensable pour tout amateur de la maison Serpentard ou pour un costume de Drago Malefoy ! Unisexe.<br/>
                                        Matière : 100% polyester, Doublure satin en polyester<br/>
                                        Tailles Européennes: XS, S, M, L, XL<br/>
                                         <b>prix: 80€</b>
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
                                    <v-img :src="require('../assets/baguetteHarry.jpg')" class="my-3" contain height="200" width="200"></v-img>
                                </td>
                                <td>
                                    <h3>
                                        Baguette Harry Potter
                                    </h3>
                                    
                                        Bois: Houx<br/>
                                        Coeur: Plume de phénix<br/>
                                        Longeur: 27,50 centimètres
                                        très souple<br/>
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