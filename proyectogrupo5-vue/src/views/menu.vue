<template>
    <div>
         
        <v-app-bar
        app
        absolute
        color="white"
        height="250px"
        width="auto"
        >
 
        <v-btn
            width="20%"
            class="mx-auto cyan darken-1 white--text text-center"
            height="150px"
            @click="$router.push('/profesional')"
            >
            Profesional
        </v-btn>
        <v-btn
            width="20%"
            class="mx-auto cyan darken-1 white--text text-center"
            height="150px"
            @click="$router.push('/servicio')"
            >
            Servicio
        </v-btn>
                <v-btn
            width="20%"
            class="mx-auto cyan darken-1 white--text text-center"
            height="150px"
            @click="$router.push('/cliente')"
            >
            Cliente
        </v-btn>
        <v-btn
            width="20%"
            class="mx-auto cyan darken-1 white--text text-center"
            height="150px"
            @click="$router.push('/agendar')"
          
            >
            Agenda
        </v-btn>
                <v-btn
            width="20%"
            class="mx-auto cyan darken-1 white--text text-center"
            height="150px"
            @click="$router.push('/')"

            >
            Salir
        </v-btn>
 
    </v-app-bar>
 
    </div>
</template>
 
<script>
export default {
     
}
</script>
 
<style>
 
</style>