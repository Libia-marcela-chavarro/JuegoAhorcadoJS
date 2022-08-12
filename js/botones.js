
function precionarLetra(letra) {
    var letraCorrecta = false;
    var posiciones = encontrarPosicionesLetra(letra, nivelActual.palabra);

    if (visores.value == null) {
        visores.value = letra;
    }
    visores.forEach(element => {
        posiciones.forEach(posicion => {
            if (element.id == posicion) {
                element.value = letra;
                letraCorrecta = true;
            }
        })
    });
    if (!letraCorrecta) {
        decrementarVidas();
    }
    validarPalabraCompleta();
}


function rendirse() {
    modalRendirse.style.display = "block";
}
