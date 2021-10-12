<template>
<v-container>
    <H3> Formulario profesional </H3>

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >


    <v-text-field
      v-model="cedula"
      :counter="13"
      :rules="cedulaRules"
      label="Cedula servicio"
      required
    ></v-text-field>

    <v-text-field
      v-model="nombres"
      :counter="15"
      :rules="nombresRules"
      label="Nombres y apellidos"
      required
    ></v-text-field>

    <v-text-field
      v-model="celular"
      :counter="10"
      :rules="celularRules"
      label="Numero celular"
      required
    ></v-text-field>

<v-text-field
      v-model="jornada"
      :counter="1"
      :rules="jornadaRules"
      label="jornada es mañana 1 - jornada tarde 2 - jornada noche 3"
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
      @click="$router.push('/')"
    >
      
      Inicio
    </v-btn>

   
  </v-form>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      cedula: '',
      cedulaRules: [
        v => !!v || 'se requiere cedula',
        v => (v && v.length <= 15) || 'la cedula es menor a 15 caracteres',
      ],

      nombres: '',
      nombresRules: [
        v => !!v || 'se requiere nombre servicio',
      ],

      celular: '',
      celularRules: [
        v => !!v || 'se requiere el numero de celular',
        v => (v && v.length == 10) || 'el celular tiene 10 numeros',
      ],
      jornada: '',
      jornadaRules: [
        v => !!v || 'se requiere un tipo de jornada 1 o 2 o 3 ',
        v => (v && v.length == 1) || 'la jornada solo se da en una cifra',
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