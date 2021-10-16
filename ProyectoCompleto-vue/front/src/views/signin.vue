<template>
<v-container>

  <header class="header-section">       
    <div class="banner">
        <img src="..\assets\images\logo.png" alt="A banner image">
        <p></p>
        <p></p>
        <p></p>
    </div>
  </header> 

    <H2> Inicio de sesión </H2>

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
      type = 'password'
      :counter="5"
      :rules="nameRules"
      label="Contraseña"
      required
    ></v-text-field>

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
        v => (v && v == 12345) || 'Por favor ingrese una contraseña con las condiciones solicitadas',
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

<style scoped>

h2 {
  text-align:center;
  color: #06739edc;
  }

header {
  display:block;
  margin:auto;
  height:83%;
  width: 83%;
  }
</style>