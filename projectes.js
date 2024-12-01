// Variables per emmagatzemar les valoracions
var valoracionsProjecte1 = [];
var valoracionsProjecte2 = [];

// Funció per actualitzar les valoracions i mitjanes
function actualitzarValoracions() {
    // Projecte 1
    var elementValoracions1 = document.getElementById("valoracions-projecte1");
    var elementMitjana1 = document.getElementById("mitjana-projecte1");

    if (valoracionsProjecte1.length === 0) {
        elementValoracions1.innerHTML = "Valoracions: Sense valoracions";
        elementMitjana1.innerHTML = "Mitjana: Sense dades";
    } else {
        elementValoracions1.innerHTML = "Valoracions: " + valoracionsProjecte1.join(", ");
        var mitjana1 = calcularMitjana(valoracionsProjecte1);
        elementMitjana1.innerHTML = "Mitjana: " + mitjana1.toFixed(2);
    }

    // Projecte 2
    var elementValoracions2 = document.getElementById("valoracions-projecte2");
    var elementMitjana2 = document.getElementById("mitjana-projecte2");

    if (valoracionsProjecte2.length === 0) {
        elementValoracions2.innerHTML = "Valoracions: Sense valoracions";
        elementMitjana2.innerHTML = "Mitjana: Sense dades";
    } else {
        elementValoracions2.innerHTML = "Valoracions: " + valoracionsProjecte2.join(", ");
        var mitjana2 = calcularMitjana(valoracionsProjecte2);
        elementMitjana2.innerHTML = "Mitjana: " + mitjana2.toFixed(2);
    }
}

// Funció per calcular la mitjana de les valoracions
function calcularMitjana(valors) {
    var suma = 0;
    for (var i = 0; i < valors.length; i++) {
        suma += valors[i];
    }
    return suma / valors.length;
}

// Funció per enviar la valoració
function enviarValoracio(projecte) {
    var nom = document.querySelector(`#${projecte} input[type="text"]`).value;
    var valoracio = parseInt(document.querySelector(`#${projecte} select`).value);

    if (nom !== "" && !isNaN(valoracio)) {
        if (projecte === "projecte1") {
            valoracionsProjecte1.push(valoracio);
        } else if (projecte === "projecte2") {
            valoracionsProjecte2.push(valoracio);
        }
        actualitzarValoracions();
    } else {
        alert("Per favor, omple tots els camps.");
    }
}

// Funció per veure les valoracions individuals
function veureValoracions() {
    var contrasenya = prompt("Introdueix la contrasenya per veure les valoracions:");
    if (contrasenya === "La Web del aleix") {
        alert("Valoracions individuals:\nProjecte 1: " + valoracionsProjecte1.join(", ") + "\nProjecte 2: " + valoracionsProjecte2.join(", "));
    } else {
        alert("Contrasenya incorrecta.");
    }
}

// Funció per calcular les mitjanes
function calcularMitjanes() {
    var contrasenya = prompt("Introdueix la contrasenya per calcular les mitjanes:");
    if (contrasenya === "La Web del aleix") {
        var mitjana1 = calcularMitjana(valoracionsProjecte1);
        var mitjana2 = calcularMitjana(valoracionsProjecte2);
        alert("Mitjanes:\nProjecte 1: " + mitjana1.toFixed(2) + "\nProjecte 2: " + mitjana2.toFixed(2));
    } else {
        alert("Contrasenya incorrecta.");
    }
}

// Funció per esborrar totes les valoracions
function esborrarValoracions() {
    var contrasenya = prompt("Introdueix la contrasenya per esborrar totes les valoracions:");
    if (contrasenya === "La Web del aleix") {
        valoracionsProjecte1 = [];
        valoracionsProjecte2 = [];
        actualitzarValoracions();
        alert("Totes les valoracions han estat esborrades.");
    } else {
        alert("Contrasenya incorrecta.");
    }
}

// Afegir esdeveniments als botons
document.querySelector("#projecte1 .enviar").addEventListener("click", function() {
    enviarValoracio("projecte1");
});

document.querySelector("#projecte2 .enviar").addEventListener("click", function() {
    enviarValoracio("projecte2");
});

document.getElementById("veure-individuals").addEventListener("click", veureValoracions);
document.getElementById("calcular-mitjanes").addEventListener("click", calcularMitjanes);
document.getElementById("borrar-valoracions").addEventListener("click", esborrarValoracions);
