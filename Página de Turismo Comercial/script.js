import { barcelona, roma, paris, londres } from "./ciudades.js"

// Obtenemos los elementos del DOM.
let enlaces = document.querySelectorAll("a")
let tituloElemento = document.getElementById("titulo")
let subTituloElemento = document.getElementById("subtitulo")
let parrafoElemento = document.getElementById("parrafo")
let precioElemento = document.getElementById("precio")

//Agregamos un evento click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener("click",function () {
        //Removemos la clase active de todos los enlaces
        enlaces.forEach(function (enlace) {
          enlace.classList.remove("active");
        });
        //Agregamos la clase active al objeto seleccionado
        this.classList.add("active")

        //Obtenemos el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        //Mostramos el contenido en el dom
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
      });
    });
   
//Funciones para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres
  };
  return contenido[enlace];
}
