// La función busca generar un número al azar entre el 1 y el 100.
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje")
let intento = document.getElementById("intento")
let intentos = 0
//Esta función se va a ejecutar al clckear el botón "chequear"
function chequearResultado() {
    intentos ++
    intento.textContent = intentos
  let numeroIngresado = parseInt(numeroEntrada.value);

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Por favor introduce un número válido entre 1 y 100";
    return;
  }
  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = "¡Felicidades! ¡Adivinaste el número!";
    mensaje.style.color = "green";
    numeroEntrada.disabled = true;
  }else if(numeroIngresado < numeroAzar){
    mensaje.textContent = "¡Más alto! ¡El número es mayor al que dijiste!";
    mensaje.style.color = "green";
  }else{
    mensaje.textContent = "¡Más bajo! ¡El número es menor al que dijiste!";
    mensaje.style.color = "green";
  }
}
