const VIDAS_INICIO_NIVEL = 6;
var nivelActual = nivel4;

const visorNivel = document.getElementById("VisorNivelActual").value = "Nivel " + nivelActual.nivel;
var visores = Array.apply(null, document.querySelectorAll(".visor"));
var boton = document.getElementById('boton');
var modalJuegoTerminado = document.querySelector('.modal-1');
var modalJuegoGanado = document.querySelector('.modal-2');
var modalRendirse = document.querySelector('.modal-3');
var numVidas = VIDAS_INICIO_NIVEL;

boton.disabled = true;

var imagenesMuniecoAhorcado = [
    './img/6.jpg',
    './img/5.jpg',
    './img/4.jpg',
    './img/3.jpg',
    './img/2.jpg',
    './img/1.jpg',
]

function decrementarVidas() {
    if (numVidas > 1) {
        numVidas--;
        document.getElementById("ImagenAhorcado").src = imagenesMuniecoAhorcado[numVidas - 1];
    } else {
        modalJuegoTerminado.style.display = "block";
    }
}

function reinciarJuego() {
    nivelActual = nivel1;
    numVidas = VIDAS_INICIO_NIVEL;
    document.getElementById("VisorNivelActual").value = "Nivel " + nivelActual.nivel;
    document.getElementById("ImagenAhorcado").src = imagenesMuniecoAhorcado[numVidas - 1];
    cerrarModal();
    limpiarVisores();
    boton.disabled = true;
}

function limpiarVisores() {
    visores.forEach(element => {
        element.value = "";
    })
}