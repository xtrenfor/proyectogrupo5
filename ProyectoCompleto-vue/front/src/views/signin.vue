<template>
<v-container>

  <header class="header-section">       
    <div class="banner">
        <img src="..\assets\images\banner.jpg" alt="A banner image">
    </div>
  </header> 

    <H3> Inicio de sessión </H3>

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="8"
      :rules="nameRules"
      label="Contraseña"
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
      @click="$router.push('/agendar')"
    >
      Ingresar
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
      
      email: '',
      emailRules: [
        v => !!v || 'se requiere E-mail',
        v => /.+@.+\..+/.test(v) || 'E-mail no valido',
      ],
      contraseña: '',
      nameRules: [
        v => !!v || 'se requiere contraseña',
        v => (v && v == 12345) || 'la contraseña es de 5 caracteres',
      ],
  
      checkbox: false,
    }),
    methods: {
      Ingresar () {
        this.$refs.form.ingresar()
      },
      Inicio () {
        this.$refs.form.Inicio()
      },
    
    },
  }
</script>
