 <template>
 
  <v-card>
    <v-app-bar
      app
      color="white"
      flat
    >
    </v-app-bar>
    <v-btn @click="guardar">Programar cita</v-btn>
    <v-card-title>
      Citas
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  import {
    
    getAllCitasAdmin,
    insertBook
  } from "../../services/CitasServices";

  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Id_codigo_age',
            align: 'start',
            value: 'Id_codigo_age',
          },
          { text: 'Id_cedula_pro', value: 'Id_cedula_pro' },
          { text: 'Servicio_pro', value: 'Servicio_pro' },
          { text: 'Inicio', value: 'Inicio' },
          { text: 'Fin', value: 'Fin' },
          { text: 'Id_cedula_cli', value: 'Id_cedula_cli' },
        ],
        desserts: [],
      }
    },
    mounted() {
      getAllCitasAdmin()
        .then((response) => {
          this.desserts = response.data;
          console.log(response.data)
        })
        .catch((err) => console.error(err));
    },
    methods: {
      guardar () {
        const book = {
          isbn: "sdfsdfsdf",
          titulo: "Nuevo libro",
          anio: "2021",
          autores: ["Autor"],
          genero: "sgfdsdfgs"
          }
          insertBook(book)
      }
    }
  }
  
</script>