<template>
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
      @click="$router.push('/menu')"
    >
      Menu
    </v-btn 
    >
    

   
  </v-form>
  </v-container>
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
