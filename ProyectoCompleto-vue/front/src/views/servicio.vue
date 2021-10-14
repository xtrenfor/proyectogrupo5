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
                <H3> Formulario servicio </H3>

              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >


                <v-text-field
                  v-model="codigo"
                  :counter="4"
                  :rules="codigoRules"
                  label="Codigo servicio"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="nombres"
                  :counter="12"
                  :rules="nombresRules"
                  label="Nombre servicio"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="costo"
                  :counter="6"
                  :rules="costoRules"
                  label="Costo servicio"
                  required
                ></v-text-field>

            <v-text-field
                  v-model="tiempo"
                  :counter="3"
                  :rules="tiempoRules"
                  label="tiempo del servicio"
                  required
                ></v-text-field>
                


                <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'Selecciona para continuar!']"
                  label="Deseas continuar?"
                  required
                ></v-checkbox>

                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  Guardar
                </v-btn>

                <!--
                <v-btn
                  color="error"
                  class="mr-4"
                  @click="$router.push('/Menu')"
                >
                  Menu
                </v-btn>
                -->

              
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
  export default {
    data: () => ({
      valid: true,
      codigo: '',
      codigoRules: [
        v => !!v || 'se requiere codigo',
        v => (v && v.length == 4) || 'el codigo es de 4 caracteres',
      ],

      nombres: '',
      nombresRules: [
        v => !!v || 'se requiere nombre servicio',
      ],

      costo: '',
      costoRules: [
        v => !!v || 'se requiere costo del servicio',
        v => (v && v.length <= 5) || 'el servicio no puede exceder cinco cifras',
      ],
      tiempo: '',
      tiempoRules: [
        v => !!v || 'se requiere tiempo del servicio',
        v => (v && v.length <= 3) || 'el tiempo no puede ser mayor a 999 minutos',
      ],
      
    }),
    methods: {
      Ingresar () {
        this.$refs.form.Guardar()
      },
      Inicio () {
        this.$refs.form.Inicio()
      },
    
    },
  }
</script>
