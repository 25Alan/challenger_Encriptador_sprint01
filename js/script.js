import { responsiveMedia } from "./responsive.js";

const buttonEncriptar = document.querySelector("#buttonInput");
const buttonDesencriptar = document.querySelector("#buttonOutput");
const buttonCopy = document.querySelector("#buttonCopy");

function encriptarText() {
  let textResult = document.querySelector("#inputText").value;

  textResult = textResult.toLowerCase();
  textResult = removeAcentos(textResult);
  textResult = textResult.replace(/e/gm, "enter");
  textResult = textResult.replace(/i/gm, "imes");
  textResult = textResult.replace(/a/gm, "ai");
  textResult = textResult.replace(/o/gm, "ober");
  textResult = textResult.replace(/u/gm, "ufat");

  if (textResult.length === 0 || /^\s+$/.test(textResult)) {
    textResult = "No ingresó una palabra";
  }

  document.querySelector("#outputText").innerHTML = textResult;
}

function desencriptarText() {
  let textResultDes = document.querySelector("#inputText").value;

  textResultDes = textResultDes.toLowerCase();
  textResultDes = removeAcentos(textResultDes);
  textResultDes = textResultDes.replace(/enter/g, "e");
  textResultDes = textResultDes.replace(/imes/g, "i");
  textResultDes = textResultDes.replace(/ai/g, "a");
  textResultDes = textResultDes.replace(/ober/g, "o");
  textResultDes = textResultDes.replace(/ufat/g, "u");

  document.querySelector("#outputText").innerHTML = textResultDes;

  if (textResultDes.length === 0 || /^\s+$/.test(textResultDes)) {
    document.querySelector("#outputText").innerHTML = "NO INGRESÓ PALABRAS";
  }
}

function copyText() {
  const copyText = document.querySelector("#outputText").textContent;
  navigator.clipboard.writeText(copyText);
}

function removeAcentos(stringModificado) {
  var chars = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    à: "a",
    è: "e",
    ì: "i",
    ò: "o",
    ù: "u",
    ñ: "n",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    À: "A",
    È: "E",
    Ì: "I",
    Ò: "O",
    Ù: "U",
    Ñ: "N",
  };
  var expr = /[áàéèíìóòúùñ]/gi;
  var res = stringModificado.replace(expr, function (e) {
    return chars[e];
  });
  return res;
}

document.addEventListener("DOMContentLoaded", () => {
  buttonEncriptar.addEventListener("click", encriptarText);
  buttonDesencriptar.addEventListener("click", desencriptarText);
  buttonCopy.addEventListener("click", copyText);
  // responsiveMedia(
  //   "image",
  //   "(min-width: 1024px)",
  //   "",
  //   "ContenidoEscritorio"
  // );
});

// DIFERENCIA ENTRE LOAD Y DOMCONTENTLOADED
//DOMContentLoaded – el navegador HTML está completamente cargado y el árbol DOM está construido, pero es posible que los recursos externos como <img> y hojas de estilo aún no se hayan cargado. load – no solo se cargó el HTML, sino también todos los recursos externos: imágenes, estilos, etc