
function encontrarPosicionesLetra(letra, palabra) {
    let posiciones = Array.from(palabra, (val, index) => val == letra && index);
    posiciones = posiciones.filter((item) => item !== false);
    return posiciones;
}

function validarPalabraCompleta() {
    var completo = true;
    for (var i = 0; i < visores.length; i++) {
        if (visores[i].value == "") {
            completo = false;
            break;
        }
    }

    if (completo == true) {
        boton.disabled = false;
    }
}


