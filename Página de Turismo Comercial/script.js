import {barcelona, roma, paris, londres} from "./ciudades.js"

// Obtenemos los elementos del DOM.
let enlaces = document.querySelectorAll("a")
let tituloElemento = document.getElementById("titulo")
let subTituloElemento = document.getElementById("subtitulo")
let parrafoElemento = document.getElementById("parrafo")

//Agregamos un evento click a cada enlace
enlaces.forEach( function(enlace){
    enlace.addEventListener("click"), function(){

         //Removemos la clase active de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove("active")
        });
       

    }}

    //Aregamos el estado Active al elemento seleccionado

    //Traemos la informacion del objeto correspondiente

    //Mostramos el contenido en el dom

);

//Funciones para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        "Barcelona" : barcelona,
        "Roma" : roma,
        "París" : paris,
        "Londres" : londres
    };
    return contenido[enlace];
}