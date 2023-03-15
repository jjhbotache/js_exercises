function piConDosDecimales() {
  alert(Number(Math.PI.toFixed(2)));
}
function precioConIVA() {
  const precio = parseInt(prompt("Introduzca el precio del producto (Un entero)"));
  let iva = parseInt(prompt("Introduzca el iva (Hoy escriba cero para dejar vacío)"))  ;
  iva === 0 ? 19 : iva;
  const precioConIva = precio + precio * (iva / 100);
  alert(`total: ${precioConIva}`);
}
function textoAlReves() {
  const texto = prompt("Digite un texto para poner al revés");
  alert( texto.split("").reverse().join(""));
}
function generarNumeroAleatorio() {
  let min = parseInt(prompt("Digital el menor número posible"));
  let max = parseInt(prompt("Digital el mayor número posible"));
  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  alert(`El número aleatorio generado es: ${numeroAleatorio}`);
}
function generarNumerosAleatorios() {
  const numeros = new Set();
  
  while (numeros.size < 100) {
    const numero = Math.floor(Math.random() * 1000) + 1;
    numeros.add(numero);
  }
  
  alert(Array.from( numeros));
}
// ----------------------------------------------------------------------------------------------------
let numero1 = 0;
let numero2;

const pantalla = document.getElementById("resultado");
function agregarNumero(numero){
  pantalla.value += numero;
  if (numero2 == undefined) {numero1 = pantalla.value;}
  else{numero2 = pantalla.value;}
}

let operacion_a_ejecutar = "";
function operacion(operacion_recibida = operacion_a_ejecutar) {
  operacion_a_ejecutar = operacion_recibida;
  if (numero2 == undefined) {
    numero2 = numero1;
    pantalla.value = "";
  }
  else{
    switch (operacion_a_ejecutar) {
      case "+":
        numero1 = parseInt(numero1) + parseInt(numero2);
        break;
      case "-":
        numero1 = parseInt(numero1) - parseInt(numero2);
        break;
      case "*":
        numero1 = parseInt(numero1) * parseInt(numero2);
        break;
      case "/":
        numero1 = parseInt(numero1) / parseInt(numero2);
        break;
    }
    pantalla.value = numero1;
    numero2 = undefined;
  }
}

function borrar() {
  pantalla.value = "";
}
function borrarUno() {
  const str = pantalla.value;
  pantalla.value =  str.slice(0,pantalla.value.length-1);

}
