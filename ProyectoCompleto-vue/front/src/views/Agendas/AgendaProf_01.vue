<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">

        <v-btn @click="$router.push('/inicioagenda')">Inicio Agenda</v-btn>   

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

                <v-card class="mx-auto" max-width="143" margin="50px">
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    height="200px"
                    ></v-img>
                    <v-card-title>Juan</v-card-title>

                    <v-card-subtitle>
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Servicios:</v-list-item-title>
                        <v-list-item-subtitle>Corte</v-list-item-subtitle>
                        <v-list-item-subtitle>Cepillado</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                    </v-card-subtitle>
                </v-card>

                <v-list-item>
                  <v-btn block @click="$router.push('agendaProf_02')">Luis</v-btn>               
                </v-list-item>

                <v-list-item                >
                  <v-btn block @click="$router.push('agendaProf_03')">Ana</v-btn>             
                </v-list-item>

              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              height="70vh"
              rounded="lg"
              color="transparent"> 

              <div class="containerCalenda">
                  <v-row>
                    <v-col>
                    <v-sheet height="400">

                        <v-calendar
                        ref="calendar"
                        :now="today"
                        :value="today"
                        :events="events"
                        color="primary"
                        type="week"
                        ></v-calendar>
                    </v-sheet>
                    </v-col>
                </v-row>
              </div>
              <v-card height="130px">    
              <div>           
              <p class=" font-weight-medium text-center">
                <BR />
                <v-icon medium color="blue darken-2">mdi-calendar-multiselect</v-icon>
                Se representan en blanco los horarios disponibles.<BR /> 
                <v-icon medium color="red darken-2">mdi-clock-alert-outline</v-icon>
                Nuestro horario de atención es de 8:00am a 7:00pm. <BR /><BR />
                <v-icon medium color="green darken-2">mdi-phone</v-icon>
                Tras elegir el día y la hora de tu cita comunícate al 123 45 67 para programarla.<BR /> 
              </p>
              </div>   
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import {
    verAgendaProf_01,
  } from "../../services/CitasServices";

  
  export default {
    data: () => ({
      today: '2021-10-14',
      events:[],
    }
    ),
    
    

    mounted() {
      this.$refs.calendar.scrollToTime('08:00');

      
      verAgendaProf_01()
        .then((response) => {
          this.events = response.data;
          console.log(response.data)
        })
        .catch((err) => console.error(err));
    },
  }
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #2bb889;
  color: #ffffff;
  border: 1px solid #2bb889;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>