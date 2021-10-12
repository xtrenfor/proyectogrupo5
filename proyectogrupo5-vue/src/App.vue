
<template>

  <v-app>

    <v-app-bar
      app
      absolute
      color="white"
      hide-on-scroll
      extension-height 
      scroll-target="#scrolling-techniques-4"
      height="100%"
      width="auto"
      >
      <v-toolbar-title>
        <v-img
          src="../src/assets/nav/logo.png"
          max width= "60%"
          >
        </v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

   
    
    </v-app-bar>

    <v-main>

      <router-view/>
      <v-card class="mt-8 elevation-3"
        height="150"
        >
          <v-img
          class="mt-8 elevation-3"
          height="150"
          src="../src/assets/home/banner.png"
          max width= "100%">
          </v-img>
      </v-card>
      </v-main>


    <v-footer
      class="mx auto cyan darken-1 white--text"
      max-width="auto"
      >
      <v-container fluid>
      <v-column>
      <v-col
        :lg="auto">
        
      <v-card
        flat
        tile
        class=" mx auto cyan darken-1 white--text text-center"
        max-width="auto"
        
        >
        <v-col
        :lg="12">
        <v-card-text
        class="cyan darken-1 white--text text-center"
        
        >
          
          CONTACTO
          <v-divider></v-divider>
          <v-btn
            class="mx-auto white--text"
            icon>
            <v-icon size="24px">
              {{ 'mdi-facebook' }}
            </v-icon>
          </v-btn> @EasyAgenda+
          <v-spacer></v-spacer>

          <v-btn
            class="mx-auto white--text"
            icon>
            <v-icon size="24px">
              {{ 'mdi-instagram' }}
            </v-icon> 
          </v-btn> @EasyAgenda+
          <v-spacer></v-spacer>

            www.EasyAgenda+.com
        </v-card-text>

        <v-card-text 
        class="white--text">
          {{ new Date().getFullYear() }}  <strong> EasyAgenda+</strong>
        </v-card-text>
        </v-col>
        </v-card>

        </v-col>
      </v-column>
        </v-container>
      
    </v-footer>

  </v-app>
</template>

