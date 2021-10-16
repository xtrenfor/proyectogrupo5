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

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">

                  <v-list-item>
                    <v-btn block @click="$router.push('agendar')">Agenda</v-btn>               
                  </v-list-item>
                  <v-list-item>
                    <v-btn block @click="$router.push('cliente')">Cliente</v-btn>               
                  </v-list-item>
                  <v-list-item>
                    <v-btn block @click="$router.push('profesional')">Profesional</v-btn>               
                  </v-list-item>
                  <v-list-item>
                    <v-btn block @click="$router.push('servicio')">Servicio</v-btn>               
                  </v-list-item>

              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <v-container>
              <H3> Formulario agendar </H3>

              <v-form>

                <v-text-field
                  input
                  v-model="Id_cedula_cli"
                  label="Nombre Cliente"
                  
                ></v-text-field>

                <v-text-field
                  v-model="Id_cedula_pro"
                  label="Nombre Profesional"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="Servicio_pro"
                  label="Nombre Servicio"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="Inicio"
                  label="Inicio Cita (aaaa-mm-dd hh:hh)"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="Fin"
                  label="Fin Cita (aaaa-mm-dd hh:hh)"
                  required
                ></v-text-field>

                <v-btn
                  color="success"
                  class="mr-4"
                  @click="guardar"
                >
                  Guardar
                </v-btn>

                <v-btn
                  color="error"
                  class="mr-4"
                  @click="$router.push('/listaCitas')"
                >
                  Listado de Citas
                </v-btn 
                >
              </v-form>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { insertCita } from '../services/CitasServices' 

  export default {
    
    data: () => ({
      Id_codigo_age: "",
      Inicio: "",
      Fin:"",
      Id_cedula_pro:"",
      Servicio_pro:"",
      Id_cedula_cli:""

    }),

    methods: {

      guardar () {
        const cita = {
          Id_codigo_age: this.Id_codigo_age,
          Inicio: this.Inicio,
          Fin: this.Fin,
          Id_cedula_pro: this.Id_cedula_pro,
          Servicio_pro: this.Servicio_pro,
          Id_cedula_cli: this.Id_cedula_cli
          }

          insertCita(cita)
          
      },
    
    }
  }
</script>