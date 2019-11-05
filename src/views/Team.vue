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
                    <v-icon> mdi-account-group-outline</v-icon>
                    <FONT face="impact">Team</FONT>
                </h1>
            </v-flex>
            <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="700px" src="https://wir.skyrock.net/wir/v1/resize/?c=isi&im=%2F3282%2F94333282%2Fpics%2F3254460612_2_3_wqxvy1Ib.jpg&w=600">
        <v-card-title>Céline MARIN</v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">Elève à l'ESIEA</v-card-subtitle>
      <v-card-text class="text--primary">
        <div>Team Gryffondor</div>
        <div>Patronus: Renard</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text>
          <v-icon left="">mdi-linkedin</v-icon>
          <a href="https://fr.linkedin.com/in/c%C3%A9line-marin-83097791"> Mon Linkedin</a>
        </v-btn>
      </v-card-actions>
    </v-card>
     <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img class="white--text align-end" height="700px" src="https://wir.skyrock.net/wir/v1/resize/?c=isi&im=%2F3282%2F94333282%2Fpics%2F3254460612_2_3_wqxvy1Ib.jpg&w=600">
        <v-card-title>Ariella LEVY</v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">Elève à l'ESIEA</v-card-subtitle>
      <v-card-text class="text--primary">
        <div>Team Gryffondor</div>
        <div>Patronus: Lapin</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text>
          <v-icon left="">mdi-linkedin</v-icon>
          <a href="https://fr.linkedin.com/in/ariella-levy-968272b6"> Mon Linkedin</a>
        </v-btn>
      </v-card-actions>
    </v-card>
        </v-layout>
    </v-container>
</template>
