<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">

        <v-btn @click="$router.push('/')">Página Principal</v-btn> 
        <v-spacer></v-spacer>

      </v-container>
    </v-app-bar>
    <v-main class="grey lighten-3" style="padding: 56px 0px 0px;">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg"> 
            <v-list color="transparent">

                <v-list-item                >
                  <v-btn block @click="$router.push('agendaProf_01')">Juan</v-btn>             
                </v-list-item>

                <v-list-item                >
                  <v-btn block @click="$router.push('agendaProf_02')">Luis</v-btn>             
                </v-list-item>

                <v-list-item>
                  <v-btn block @click="$router.push('agendaProf_03')">Ana</v-btn>               
                </v-list-item>

              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-card elevation="2" min-height="50px">
              <h2 class="text-center">Programa tu cita en 3 simples pasos</h2>
            </v-card>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              color="transparent"
            >    
              <v-container class="grey lighten-5">
              <v-row no-gutters>
                <v-col order="first">
                  <v-card class="mx-auto" max-width="250" margin="50px">
                    <v-img
                    src="..\..\assets\Paso1.jpg"
                    height="200px"
                    ></v-img>

                    <v-card-title class="card-header text-center">
                      <p style="width: 200px; white-space: normal;">
                      Paso 1 :
                      </p>
                      <p style="width: 200px; white-space: normal;">
                      Selecciona el <BR />Profesional <BR />de tu preferencia
                      </p>
                    </v-card-title>
                </v-card>
                </v-col>
                <v-col order="second">
                  <v-card class="mx-auto" max-width="250" margin="50px">
                    <v-img
                    src="..\..\assets\Paso2.jpg"
                    height="200px"
                    ></v-img>
                    <v-card-title class="card-header text-center">
                      <p style="width: 200px; white-space: normal;">
                      Paso 2 :
                      </p>
                      <p style="width: 200px; white-space: normal;">
                      Consulta su <BR />Disponibilidad en el <BR />horario que quieres
                      </p>
                    </v-card-title>
                </v-card>
                </v-col>
                <v-col order="last">
                  <v-card class="mx-auto" max-width="250" margin="50px">
                    <v-img
                    src="..\..\assets\Paso3.jpg"
                    height="200px"
                    ></v-img>
                    <v-card-title class="card-header text-center">
                      <p style="width: 200px; white-space: normal;">
                      Paso 3 :
                      </p>
                      <p style="width: 200px; white-space: normal;">
                      Comúnicate al <BR /> 123 45 67 <BR />y reserva tu cita<BR />
                      </p>
                    </v-card-title>
                </v-card>
                </v-col>
              </v-row>
            </v-container>

            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


