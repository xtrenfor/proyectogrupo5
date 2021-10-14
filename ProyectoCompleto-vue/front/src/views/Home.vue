<template>
  <v-app id="inspire">

    <header class="header-section">
    <div class="header-container">
        <v-app-bar
        app
        color="white"
        flat
        height="0px"
        >
        <v-container class="py-0 fill-height">

            <v-row>
                <v-col class="text-left">
                    <img src="../assets/images/logo.png"  height="55px">
                </v-col>
                <v-col class="text-right" magin="10px">
                    <v-btn x-large @click="$router.push('/inicioagenda')">Agenda</v-btn>   
                    <v-btn x-large @click="$router.push('/signin')">Login</v-btn> 
                </v-col>
            </v-row>

            <v-spacer></v-spacer>    
        </v-container>
        </v-app-bar>
    </div> 
        <!-- Fin menú navegación -->

        
    <div class="banner">
        <img src="..\assets\images\banner.jpg" alt="A banner image">
    </div>
    </header>
     
     

    <v-main class="grey lighten-3">
      <body>

         <!-- inicio contenido principal -->
        
            <!-- inicio sección de servicios -->
            <SeccionServicios/>
            <!-- fin sección de servicios -->
        
            <!-- inicio sección de noticias -->
            <div class="mt-7">
                <h2 class="titulos">Noticias</h2>
            <div id="noticias" class="seccion-noticias">
                <article class="news-info">
                    <div class="news-header">
                        <img class="news-info__imagen" src="../assets/images/img_te_vez_bien.jpg" alt="">
                        <h3 class="news-info__title"> ¿Te verías bien con el pelo corto? </h3>
                    </div>
                    <p class="news-info__text">
                        <b>Pasos:</b><br><br>

                        <b>1.</b> Ubica un lápiz de forma horizontal por debajo de tu barbilla.<br>
                        <b>2.</b>Sin cambiar la posición del lápiz de tu barbilla, sujeta una regla por debajo de la oreja que quede en forma perpendicular con el lápiz.<br>
                        <b>3.</b>Mide la distancia en la regla desde el lápiz hasta la oreja.<br><br>

                        <b>Resultados:</b><br><br>

                        Si la distancia es <b>menor a 5,7 centímetros</b> es una muy buena señal, pues esto significa que si te cortaras el cabello <b>te quedaría genial</b>, por lo cual no deberías pensarlo más y <b>tomar de una vez por todas esta decisión</b>.
                    
                    </p>
                </article>

                <article class="news-info">
                    <div class="news-header">
                        <img class="news-info__imagen" src="../assets/images/elegir_champu.jpg" alt="">
                        <h3 class="news-info__title">¿Cómo elegir el champú ideal para cada tipo de pelo?</h3>
                    </div>
                    <p class="news-info__text">
                        <b>Si tienes pelo rizado</b><br><br>
                        Necesitas un producto que te ayude a cuidar la elasticidad y <u> controlar el volumen a través de la humectación</u>; lo recomendable es que contengan aceites como <u>nuez, albaricoque, jojoba, coco y oliva</u>.<br><br>
        
                        <b>Si tienes pelo lacio</b><br><br>
                        Debes buscar un champú que además de dar vida, pueda controlar también el frizz; aquellos que contienen colágeno, proteínas y/o keratina es una gran opción, pues penetran la cutícula dejándolo mucho más <u>suave y controlable</u>.
        
                    </p>
                </article>

                <article class="news-info">
                    <div class="news-header">
                        <img class="news-info__imagen" src="../assets/images/cada_cuanto_cortar.png" alt="">
                        <h3 class="news-info__title">¿Cada cuánto debería una mujer cortar su cabello?</h3>
                    </div>
                    <p class="news-info__text">
                        <b>Si tienes pelo corto</b><br><br>
                        Lo recomendable es cortarlo cada tres semanas, teniendo en cuenta que el cabello crece un poco más de un centímetro mensualmente; <br><br>
                        
                        <b>Si tienes cabello largo</b><br><br>
                        Lo ideal es que lo cortes cada ocho semanas si tienes algún tipo de tinte, o tres meses si es completamente natural; esto debes acompañarlo siempre con el uso de mascarillas o tratamientos para su bienestar.

                    </p>
                </article>

                <article class="news-info">
                    <div class="news-header">
                        <img class="news-info__imagen" src="../assets/images/carnashian.jpg" alt="">
                        <h3 class="news-info__title">El corte de pelo bob Kardashian ha vuelto</h3>
                    </div>
                    <p class="news-info__text">
                        Hace exactamente tres años que las Kardashian consiguieron que un <u>corte de pelo</u> de toda la vida -el blunt bob, carré o media melena recta- se convirtiera en <u>el corte de pelo del momento</u>.
                    
                    </p>
                </article>
            </div>
            </div>
            <!-- fin sección de noticias -->

        <div>
            <h2 class="titulos">Equipo</h2>
            <!-- inicio sección de equipo -->
            <section id="team" class="seccion-equipo">

                <article class="team-info">
                    <img class="team-info__imagen" src="../assets/images/Foto_Jonathan_Rueda.png" alt="">
                    <h2 class="team-info__title">Jonathan Rueda</h2>
                    <p class="team-info__text">
                        Estudiante de Ing. Industrial, con gusto por el deporte y participando en el programa del MinTic Ruta 2, de Bogotá y viviendo en Pereira.
                    </p>
                    <a href="https://imaster.academy/user/view.php?id=4829&course=860" target="blank">iMaster</a>
                </article>

                <article class="team-info">
                    <img class="team-info__imagen" src="../assets/images/Foto_Genny_Calderon.png" alt="">
                    <h2 class="team-info__title">Genny Calderon</h2>
                    <p class="team-info__text">
                        En programación lo que más le ha llamado la atención es la parte del diseño del frontend y la metodología 
                        ágil Scrum; en el futuro podría inclinarse laboralmente por alguno de esos temas. Necesita reforzar los conocimientos 
                        adquiridos en los lenguajes de programación python y java.
                    </p>
                    <a href="https://imaster.academy/user/view.php?id=5475&course=860" target="blank">iMaster</a>
                </article>

                <article class="team-info">
                    <img class="team-info__imagen" src="../assets/images/Foto_Mayte_Carvajal.png" alt="">
                    <h2 class="team-info__title">Mayte Carvajal</h2>
                    <p class="team-info__text">
                        Tripulante del programa del MinTic Ruta 2, de Pereira.
                        Estudiante de Química en la Universidad del Valle ,procedente de Cali, actualmente recidiendo en Pereira.
                        Interesada en adquirir fundamentos de programación para aplicar a las electivas complementarias en Química computacional.
                    </p>
                    <a href="https://imaster.academy/user/view.php?id=5505&course=860" target="blank">iMaster</a>
                </article>

                <article class="team-info">
                    <img class="team-info__imagen" src="../assets/images/Foto_Jair_Salcedo.png" alt="">
                    <h2 class="team-info__title">Jair Salcedo</h2>
                    <p class="team-info__text">
                        Tripulante del programa del MinTic Ruta 2, de Cúcuta.
                    </p>
                    <a href="https://imaster.academy/user/view.php?id=5492&course=860" target="blank">iMaster</a>
                </article>
                
                <article class="team-info">
                    <img class="team-info__imagen" src="../assets/images/Foto_Oscar_Velandia.png" alt="">
                    <h2 class="team-info__title">Oscar Velandia</h2>
                    <p class="team-info__text">
                        Ingeniero Civil, apasionado por la tecnologia, de la ciudad de Bogotá.
                    </p>
                    <a href="https://imaster.academy/user/view.php?id=6474&course=860" target="blank">iMaster</a>
                </article>
                
                <article class="team-info">
                    <img class="team-info__imagen" src="../assets/images/Foto_Harold_Sequeda.png" alt="">
                    <h2 class="team-info__title">Harold Sequeda</h2>
                    <p class="team-info__text">
                        Tripulante del programa del MinTic Ruta 2, de Cúcuta.
                    </p>
                    <a href="https://imaster.academy/user/view.php?id=5495&course=860" target="blank">iMaster</a>
                </article>

            </section>
            <!-- fin sección de equipo -->

        </div>
    </body>
    </v-main>
  </v-app>
</template>


<style>

* {
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    max-width: 1400px;
    min-width: 375px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0;
    margin-bottom: 0;
    color: #222222;
}

/*Inicio Estilo Banner*/
.banner {
    width: 100%;
}

.banner>img {
    width: 100%;
    height: 200px;
    max-width: 1400px;
    object-fit: cover;
}

/*Inicio Estilo Servicios*/
.contenedor_servicios{            
    position: relative;
    background-color: none;
    margin: 5px;
}
.card_image{
    border-radius: 50%; 
    margin-right: auto;
    margin-left: auto;
    border-style: none;
    border-color: none;
}

.modal_image{
    size: 200px;
    margin: 20px;
    float: right;
}

.carousel-item{
    background-color:none;
    padding: 50px 150px 75px 150px;
    
}

.card-footer{
    background-color:white;
    
}

.card-body{
    background-color: none;
    text-decoration-color: black;
                
}

.card-title{
    color: black;
}

.card-text{
    color: black;
    
}


.card-buttom{
    background-color: none;
    
    
}

#fondo-card_image{
    padding: 15px;
    background-color:none;
    border-color: #3ba8cc;
}

.contenedor-modal_text{
    float: inline-end;
    padding: 10px;
    margin: 10px;
}

.modal-body{
    text-align: left;
}

.carousel .carousel-indicators li {background-color: #474545;}
.carousel .carousel-indicators li.active {background-color: black;}

.carousel-control-next-icon,
.carousel-control-prev-icon {
    filter: invert(1);
}

#Titulo-servicios{
    text-align: left;
}

#footer-buttom{
    background-color: #6963e7;
    padding: 10px;
    margin: 0px;
    margin-left: -20px;
    width: 113.5%;
}
/*Fin Estilo Servicios*/





/*Inicio Estilo Noticias*/
.titulos{
    text-align: center;
    color: rgb(20, 156, 190);
    font-size:xx-large;
}

.seccion-noticias,
.seccion-equipo {
    display: flex;
    justify-content: center;
    /*flex-wrap: wrap;*/
    
}
.seccion-noticias{
    flex-wrap: wrap;
    background-color: #ffffff;
    
} 

.news-info {
    width: 50%;
    padding: 20px;
    border: solid;
    border-width: 1px;
    border-color: #65a5cf;
    border-radius: 2%;
    
    
}
.news-info__imagen{
    
    width: 100%;
    max-width: 200px;
    margin-top: 10px;
    border-radius: 2%;
}

.news-header {
    display: flex;
    justify-content: space-around;
}

.news-info__title {
    align-self: center;
}

/*Inicio Estilo Equipo*/
.team-info{
    width: 100%;
    max-width: 25%;
    padding: 10px;
    background-color: #0ec9c90e;
    margin-bottom: 10px;
    
}

.team-info__imagen{
    width: 100%;
    max-width: 200px;
    margin-top: 15px;
    border-radius: 30%;
}

/*
.logo-image{
    width: 400px;
    height: 100px;
    overflow: hidden;
    margin-top: 10px;
}
*/


</style>

<script>
import SeccionServicios from "../components/SeccionServicios.vue"

export default {
  name: 'Home',

  data: () => ({
    //
  }),
  components :{
    SeccionServicios
  }
};
</script>