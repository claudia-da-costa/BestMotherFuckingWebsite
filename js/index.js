"use strict";
var contrast = document.getElementById("changecontrast");
var mode = document.getElementById("invertedmode");
var bodycentent = document.getElementById("idtonotchange");

function contrastchager() {
    if (contrast.textContent == "Add more contrast") {
        bodycentent.classList.add("addcontrast");
        contrast.innerHTML = "Remove additional contrast";
    } else {
        bodycentent.classList.remove("addcontrast");
        contrast.innerHTML = "Add more contrast";
    }
}

function modechager() {
    if (mode.textContent == "Inverted mode") {
        bodycentent.classList.add("invertemode");
        mode.innerHTML = "Normal mode";
    } else {
        bodycentent.classList.remove("invertemode");
        mode.innerHTML = "Inverted mode";
    }
}