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

              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
          

                <v-text-field
                  v-model="cedula"
                  :counter="13"
                  :rules="cedulaRules"
                  label="Cedula cliente"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="cedulap"
                  :counter="13"
                  :rules="cedulapRules"
                  label="Cedula profesional"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="codigo"
                  :counter="4"
                  :rules="codigoRules"
                  label="codigo servicio"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="fecha"
                  :counter="8"
                  :rules="fechaRules"
                  label="fecha"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="Hora"
                  :counter="4"
                  :rules="horaRules"
                  label="hora"
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
  export default {
    data: () => ({
      valid: true,
      cedula: '',
      cedulaRules: [
        v => !!v || 'se requiere cedula cliente',
        v => (v && v.length <= 15) || 'la cedula es menor a 15 caracteres',
      ],

      cedulap: '',
      cedulapRules: [
        v => !!v || 'se requiere cedula profesional',
        v => (v && v.length <= 15) || 'la cedula es menor a 15 caracteres',
      ],

      codigo: '',
      codigoRules: [
        v => !!v || 'se requiere el codigo servicio',
        v => (v && v.length == 4) || 'el codigo tiene 4 numeros',
      ],

      fecha: '',
      fechaRules: [
        v => !!v || 'se requiere la fecha servicio',
        v => (v && v.length == 8) || 'la fecha tiene 8 digitos',
      ],

      hora: '',
      horaRules: [
        v => !!v || 'se requiere la hora servicio',
        v => (v && v.length == 4) || 'la hora tiene 4 digitos',
      ],
      
      
    }),
    methods: {
      Guardar () {
        this.$refs.form.Guardar()
      },
      Inicio () {
        this.$refs.form.Inicio()
      },
      
    },
  }
</script>