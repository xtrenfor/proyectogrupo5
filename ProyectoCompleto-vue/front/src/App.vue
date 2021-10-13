<template>
  <v-app>
    <!--<Header/>-->
    <!--<Navbar/>-->
    
    <v-main style="padding: 56px 0px 0px;">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

//import Header from "./components/Header.vue"
//import Navbar from './components/Navbar.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components :{
    //Header,
    //Navbar,
  }
};
</script>
