// META DIARIA

const meta = 8;


// OBTENER LOS VASOS GUARDADOS

let vasos = Number(localStorage.getItem("vasos")) || 0;


// MOSTRAR PANTALLA

function mostrarPantalla(nombre) {

    // Ocultar todas las pantallas

    document.querySelectorAll(".pantalla").forEach(function(pantalla) {

        pantalla.classList.remove("activa");

    });


    // Mostrar la pantalla seleccionada

    document.getElementById(nombre).classList.add("activa");


    // Actualizar información

    actualizar();
}


// AUMENTAR VASOS

function aumentar() {

    if (vasos < meta) {

        vasos++;

        guardar();

        actualizar();

    }
}


// DISMINUIR VASOS

function disminuir() {

    if (vasos > 0) {

        vasos--;

        guardar();

        actualizar();

    }
}


// GUARDAR INFORMACIÓN

function guardar() {

    localStorage.setItem("vasos", vasos);

}


// ACTUALIZAR INFORMACIÓN EN PANTALLA

function actualizar() {

    // Mostrar cantidad de vasos

    document.getElementById("vasos").textContent = vasos;

    document.getElementById("vasosProgreso").textContent = vasos;


    // Calcular porcentaje

    let porcentaje = (vasos / meta) * 100;


    // Actualizar barra

    document.getElementById("barraProgreso").style.width =
        porcentaje + "%";


    // Cambiar mensaje

    let mensaje = document.getElementById("mensaje");


    if (vasos === 0) {

        mensaje.textContent =
            "¡Vamos a comenzar!";

    } else if (vasos < 4) {

        mensaje.textContent =
            "¡Buen comienzo! Sigue tomando agua.";

    } else if (vasos < 8) {

        mensaje.textContent =
            "¡Muy bien! Ya llevas más de la mitad.";

    } else {

        mensaje.textContent =
            "🎉 ¡Meta diaria alcanzada!";

    }

}


// REINICIAR DÍA

function reiniciar() {

    vasos = 0;

    guardar();

    actualizar();

}


// ACTUALIZAR AL ABRIR

actualizar();