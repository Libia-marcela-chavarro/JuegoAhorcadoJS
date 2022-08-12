
const nivel1 = {
    'nivel': 1,
    'palabra': 'COMETA',
};
const nivel2 = {
    'nivel': 2,
    'palabra': 'COMIDA',
};
const nivel3 = {
    'nivel': 3,
    'palabra': 'ZAPATO',
};
const nivel4 = {
    'nivel': 4,
    'palabra': 'SAPITO',
};
const nivel5 = {
    'nivel': 5,
    'palabra': 'AREPAS',
};
const niveles = [nivel1, nivel2, nivel3, nivel4, nivel5];

function avanzarNivel() {
    if (nivelActual != niveles[niveles.length - 1]) {
        limpiarVisores();
        for (let i = 0; niveles.length > i; i++) {
            if (niveles[i] == nivelActual && i != niveles.length - 1) {
                nivelActual = niveles[i + 1];
                numVidas = VIDAS_INICIO_NIVEL;
                document.getElementById("ImagenAhorcado").src = imagenesMuniecoAhorcado[numVidas - 1];
                break;
            }
        };
        document.getElementById("VisorNivelActual").value = "Nivel " + nivelActual.nivel;
    } else {
        modalJuegoGanado.style.display = "block";
    }
    boton.disabled = true;
}
