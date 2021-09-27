
<template>

  <v-app>

    <v-app-bar
      app
      absolute
      color="white"
      hide-on-scroll
      extension-height 
      scroll-target="#scrolling-techniques-4"
      height="100%"
      width="auto"
      >
      <v-toolbar-title>
        <v-img
          src="../src/assets/nav/logo.png"
          max width= "60%"
          >
        </v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        width= "20%"
        color= "cyan darken-1"
        plain
      >
        loguin
      </v-btn>
      
      <v-btn 
        max width= "20%"
        color= "cyan darken-1"
        plain
      >
        calendario
      </v-btn>
    </v-app-bar>

    <v-main>

      <router-view/>
      <v-card class="mt-8 elevation-3"
        height="150"
        >
          <v-img
          class="mt-8 elevation-3"
          height="150"
          src="../src/assets/home/banner.png"
          max width= "100%">
          </v-img>
      </v-card>
      </v-main>
      <v-spacer dense></v-spacer>
        <v-main>
          <router-view/>
    <v-card
      class= "white white--text text-center"
      max-width="auto"
      plain
      flat 
      tile
    >
    <v-toolbar
      class="mx-auto cyan lighten-5 black--text text-center"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title> Servicios</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :text="card.text"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              height="250px"
            >
              
            </v-img
            >
            <v-card-title v-text="card.title"></v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-card-text v-text="card.text"> </v-card-text>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-card>
    </v-main>

    <v-main>
    <router-view/>
      <v-card
      class= "white white--text text-left"
      max-width="auto"
      plain
      flat 
      tile
    >
    <v-toolbar
      class="mx-auto cyan lighten-5 black--text text-center"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title> Noticias</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="card in noticias"
          :key="card.titulo"
          :text="card.text"
          :cols="card.flex"
        >
          <v-card>
            <v-card-title v-text="card.titulo"
            class= "mx-auto white black--text text-center"></v-card-title>
            <v-img
              :src="card.src"
              height="Auto"
            >
              
              
            </v-img
            >

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text v-text="card.text"> </v-card-text>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-card>

    </v-main>

    <v-main>
    <router-view/>
      <v-card
      class= "white white--text text-center"
      max-width="auto"
      plain
      flat 
      tile
    >
    <v-toolbar
      class="mx-auto cyan lighten-5 black--text text-center"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title> Equipo de programadores </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="card in programadores"
          :key="card.title"
          :text="card.text"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              height="200px"
              width="auto"
            >
            </v-img
            >

      <v-card-title v-text="card.title"></v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text v-text="card.text"> </v-card-text>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-card>
    </v-main>

    <v-footer
      class="mx auto cyan darken-1 white--text"
      max-width="auto"
      >
      <v-container fluid>
      <v-column>
      <v-col
        :lg="auto">
        
      <v-card
        flat
        tile
        class=" mx auto cyan darken-1 white--text text-center"
        max-width="auto"
        
        >
        <v-col
        :lg="12">
        <v-card-text
        class="cyan darken-1 white--text text-center"
        
        >
          
          CONTACTO
          <v-divider></v-divider>
          <v-btn
            class="mx-auto white--text"
            icon>
            <v-icon size="24px">
              {{ 'mdi-facebook' }}
            </v-icon>
          </v-btn> @EasyAgenda+
          <v-spacer></v-spacer>

          <v-btn
            class="mx-auto white--text"
            icon>
            <v-icon size="24px">
              {{ 'mdi-instagram' }}
            </v-icon> 
          </v-btn> @EasyAgenda+
          <v-spacer></v-spacer>

            www.EasyAgenda+.com
        </v-card-text>

        <v-card-text 
        class="white--text">
          {{ new Date().getFullYear() }} — <strong> EasyAgenda+</strong>
        </v-card-text>
        </v-col>
        </v-card>

        </v-col>
      </v-column>
        </v-container>
      
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Crea tu Propio Calendario',
          text:'Puedes crear el calendario de trabajo de los turnos de los trabajadores de tu empresa o negocio para que tus clientes puedan elegir el horario disponible y con quien desean tener su turno. ', 
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUbNKZ2Xk_AXDQWxxPt5jLGqE_MXLp6zffg&usqp=CAU', flex: 4 },
        { title: 'Administra tus Empleados', 
          text:'Puedes controlar los turnos y clientes de tus empleados con nuestro servicio, de manera rapida y eficaz gracias a nuestra base amplia base de datos.', 
          src:'https://conceptodefinicion.de/wp-content/uploads/2015/08/administrar.jpg', flex: 4 },
        { title: 'Genera Codigos para tus Citas',
          text:'Podras generar un codigo unico para cada cita con el cual podras tener claridad de todos los servicios ofrecidos y control sobre los ingresos de tu negocio de manera facil.', 
          src: 'http://placeimg.com/200/200/people', flex: 4 },
      ],
  
      noticias: [
        
        { titulo: '¿Cómo elegir el champú ideal para cada tipo de pelo?', 
          text:'Si tienes pelo rizado Necesitas un producto que te ayude a cuidar la elasticidad y controlar el volumen a través de la humectación; lo recomendable es que contengan aceites como nuez, albaricoque, jojoba, coco y oliva. Si tienes pelo lacio Debes buscar un champú que además de dar vida, pueda controlar también el frizz; aquellos que contienen colágeno, proteínas y/o keratina es una gran opción, pues penetran la cutícula dejándolo mucho más suave y controlable.',
          src: 'https://raw.githubusercontent.com/xtrenfor/proyectogrupo5/main/src/Images/elegir_champu.jpg', flex: 6 },
        
        { titulo: '¿Cada cuánto debería una mujer cortar su cabello?',
          text:'Si tienes pelo corto, Lo recomendable es cortarlo cada tres semanas, teniendo en cuenta que el cabello crece un poco más de un centímetro mensualmente; Si tienes cabello largo. Lo ideal es que lo cortes cada ocho semanas si tienes algún tipo de tinte, o tres meses si es completamente natural; esto debes acompañarlo siempre con el uso de mascarillas o tratamientos para su bienestar.', 
          src: 'https://raw.githubusercontent.com/xtrenfor/proyectogrupo5/main/src/Images/cada_cuanto_cortar.png', flex: 6 },
        
        { titulo: 'El corte de pelo ‘bob Kardashian’ ha vuelto',
          text:'Hace exactamente tres años que las Kardashian consiguieron que un corte de pelo de toda la vida -el blunt bob, carré o media melena recta- se convirtiera en el corte de pelo del momento.', 
          src: 'https://raw.githubusercontent.com/xtrenfor/proyectogrupo5/main/src/Images/carnashian.jpg', flex: 6 },
        
        { titulo: '¿Te verías bien con el pelo corto? ',
          text:'Pasos: 1. Ubica un lápiz de forma horizontal por debajo de tu barbilla. 2.Sin cambiar la posición del lápiz de tu barbilla, sujeta una regla por debajo de la oreja que quede en forma perpendicular con el lápiz. 3.Mide la distancia en la regla desde el lápiz hasta la oreja. Resultados: Si la distancia es menor a 5,7 centímetros es una muy buena señal, pues esto significa que si te cortaras el cabello te quedaría genial, por lo cual no deberías pensarlo más y tomar de una vez por todas esta decisión.', 
          src: 'https://raw.githubusercontent.com/xtrenfor/proyectogrupo5/main/src/Images/img_te_vez_bien.jpg', flex: 6 },
      ],

      programadores: [
        { title: 'Jonathan Rueda',
          text:'Estudiante de Ing. Industrial, con gusto por el deporte y participando en el programa del MinTic Ruta 2, de Bogotá y viviendo en Pereira.', 
          src: 'https://raw.githubusercontent.com/xtrenfor/proyectogrupo5/main/src/Images/Foto_Jonathan_Rueda.png', flex: 2 },
        
        { title: 'Genny Calderon',
          text:' En programación, lo que más le ha llamado la atención es la parte del diseño del frontend y la metodología ágil Scrum; en el futuro podría inclinarse laboralmente por alguno de esos temas. Necesita reforzar los conocimientos adquiridos en los lenguajes de programación python y java.', 
          src: 'https://raw.githubusercontent.com/xtrenfor/proyectogrupo5/main/src/Images/Foto_Genny_Calderon.png', flex: 2 },

        { title: 'Mayte Carvajal', 
          text:' Tripulante del programa del MinTic Ruta 2, de Pereira.', 
          src: 'https://raw.githubusercontent.com/xtrenfor/proyectogrupo5/main/src/Images/Foto_Mayte_Carvajal.png', flex: 2 },
        
        { title: 'Jair Salcedo', 
          text:' Tripulante del programa del MinTic Ruta 2, de Cucuta. ', 
          src: 'https://raw.githubusercontent.com/xtrenfor/proyectogrupo5/main/src/Images/Foto_Jair_Salcedo.png', flex: 2 },
        
        { title: 'Oscar Velandia', 
          text:' Tripulante del programa del MinTic Ruta 2, de Pereira.', 
          src: 'https://raw.githubusercontent.com/xtrenfor/proyectogrupo5/main/src/Images/Foto_Oscar_Valendia.png', flex: 2 },
        
        { title: 'Harold Sequeda', 
        text:'Tripulante del programa del MinTic Ruta 2, de Pereira. ', 
        src: 'https://raw.githubusercontent.com/xtrenfor/proyectogrupo5/main/src/Images/Foto_Harold_Sequeda.png', flex: 2 },
      ],
    }),
  }
</script>