<template>
    <div>
        <h2 class="titulos">Servicios</h2>
        <div id="noticias" class="seccion-noticias">      
            <v-carousel>
            <v-carousel-item>
                <v-sheet
                min-height="0vh"
                rounded="lg"
                color="transparent"
                >    
                <v-container>
                    <v-row>
                        <v-col order="first">
                            <v-card
                            class="mx-auto"
                            max-width="300"
                            >
                            <v-img
                            src="../assets/images/Peinado-1.jpg"
                            height="200px"
                            ></v-img>

                            <v-card-title>
                            Cepillado
                            </v-card-title>

                            <v-card-subtitle>
                            Luce tu cabello liso y con el volumen perfecto
                            </v-card-subtitle>

                            <v-card-actions>
                            <div class="text-center">
                                <v-dialog
                                v-model="dialog"
                                width="500"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    color= "rgb(20, 156, 190)"
                                    text
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    Detalles
                                    </v-btn>
                                </template>

                                <v-card>
                                    <v-card-title class="text-h5 grey lighten-2">
                                    Cepillado
                                    </v-card-title>

                                    <v-card-text>
                                    El cabello liso puede resultar muy versatil si se luce con el movimiento y volumen adecuado, adquiriendo estilos para toda ocasión. 
                                    Nuestros profesionales te brindarán su asesoría para que luzcas tu cabello liso de la mejor manera.
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="dialog = false"
                                    >
                                        Cerrar
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-dialog>
                                </div>
                            </v-card-actions>

                        </v-card>
                            
                        </v-col>
                        <v-col order="second">
                            <v-card
                            class="mx-auto"
                            max-width="300"
                            >
                            <v-img
                            src="../assets/images/Peinado-2.jpeg"
                            height="200px"
                            ></v-img>

                            <v-card-title>
                            Ondas
                            </v-card-title>

                            <v-card-subtitle>
                            Dale movimiento a tu cabello con ondas sueltas o rizos definidos
                            </v-card-subtitle>

                            <v-card-actions>
                            <div class="text-center">
                                <v-dialog
                                v-model="dialog2"
                                width="500"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    color= "rgb(20, 156, 190)"
                                    text
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    Detalles
                                    </v-btn>
                                </template>

                                <v-card>
                                    <v-card-title class="text-h5 grey lighten-2">
                                    Ondas
                                    </v-card-title>

                                    <v-card-text>
                                    Cambia tu estilo habitual o acentúa tus rizos naturales con unas ondas definidas y duraderas. 
                                    Para ocasiones especiales puedes refinar tu peinado agregando un pequeño recogido o trencita lateral.
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="dialog2 = false"
                                    >
                                        Cerrar
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-dialog>
                                </div>
                            </v-card-actions>
                        </v-card>
                        </v-col>

                        <v-col order="second">
                            <v-card
                            class="mx-auto"
                            max-width="300"
                            >
                            <v-img
                            src="../assets/images/Peinado-3.jpg"
                            height="200px"
                            ></v-img>

                            <v-card-title>
                            Recogido
                            </v-card-title>

                            <v-card-subtitle>
                            Refina tu estilo con el cabello recogido para ocasiones especiales
                            </v-card-subtitle>

                           <v-card-actions>
                            <div class="text-center">
                                <v-dialog
                                v-model="dialog3"
                                width="500"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    color= "rgb(20, 156, 190)"
                                    text
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    Detalles
                                    </v-btn>
                                </template>

                                <v-card>
                                    <v-card-title class="text-h5 grey lighten-2">
                                    Recogido
                                    </v-card-title>

                                    <v-card-text>
                                    El cabello recogido será siempre un símbolo de elegancia, ideal para lucir sofisticada en cualquier ocasión especial.
                                    con la aseoría de nuestros profesionales tendrás la combinación perfecta de peindado y maquillaje para el vestuario que deseas usar.
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="dialog3 = false"
                                    >
                                        Cerrar
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-dialog>
                                </div>
                            </v-card-actions>
                        </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
            </v-carousel-item>

            <v-carousel-item>
                <v-sheet
                min-height="0vh"
                rounded="lg"
                color="transparent"
                >    
                <v-container>
                    <v-row>
                        <v-col order="first">
                            <v-card
                            class="mx-auto"
                            max-width="300"
                            >
                            <v-img
                            src="../assets/images/Caballeros-1.jpeg"
                            height="200px"
                            ></v-img>

                            <v-card-title>
                            Corte Tradicional
                            </v-card-title>

                            <v-card-subtitle>
                            Mantén una presentación elegante e impecable
                            </v-card-subtitle>

                        </v-card>
                            
                        </v-col>
                        <v-col order="second">
                            <v-card
                            class="mx-auto"
                            max-width="300"
                            >
                            <v-img
                            src="../assets/images/Caballeros-2.jpeg"
                            height="200px"
                            ></v-img>

                            <v-card-title>
                            Cortes Modernos
                            </v-card-title>

                            <v-card-subtitle>
                            Encuentra tu estilo llevando un corte a la moda
                            </v-card-subtitle>

                        </v-card>
                        </v-col>

                        <v-col order="second">
                            <v-card
                            class="mx-auto"
                            max-width="300"
                            >
                            <v-img
                            src="../assets/images/Caballeros-3.jpeg"
                            height="200px"
                            ></v-img>

                            <v-card-title>
                            Barbería
                            </v-card-title>

                            <v-card-subtitle>
                            Cuida de tu barba del largo y estilo que deseas
                            </v-card-subtitle>

                        </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
            </v-carousel-item>

            <v-carousel-item>
                <v-sheet
                min-height="0vh"
                rounded="lg"
                color="transparent"
                >    
                <v-container>
                    <v-row>
                        <v-col order="first">
                            <v-card
                            class="mx-auto"
                            max-width="300"
                            >
                            <v-img
                            src="../assets/images/Esmaltes-1.jpeg"
                            height="200px"
                            ></v-img>

                            <v-card-title>
                            Manicure
                            </v-card-title>

                            <v-card-subtitle>
                            Luce tus uñas del largo y color que prefieres
                            </v-card-subtitle>

                        </v-card>
                            
                        </v-col>
                        <v-col order="second">
                            <v-card
                            class="mx-auto"
                            max-width="300"
                            >
                            <v-img
                            src="../assets/images/Esmaltes-2.jpeg"
                            height="200px"
                            ></v-img>

                            <v-card-title>
                            Uñas en Acrílico
                            </v-card-title>

                            <v-card-subtitle>
                            Estliza tus uñas alcanzando su largo ideal con un material resistente y duradero
                            </v-card-subtitle>

                        </v-card>
                        </v-col>

                        <v-col order="second">
                            <v-card
                            class="mx-auto"
                            max-width="300"
                            >
                            <v-img
                            src="../assets/images/Esmaltes-3.jpeg"
                            height="200px"
                            ></v-img>

                            <v-card-title>
                            Pedicure
                            </v-card-title>

                            <v-card-subtitle>
                            Cuida de tus pies y luce sus uñas en tu color favorito
                            </v-card-subtitle>

                        </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
            </v-carousel-item>

            </v-carousel>   
           
        </div>
    </div>        
        
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>

<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
      }
    },
  };

</script> 

<style>

.img-servicios {
    height: 200px;
    width: 200px
}
</style>