const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const buttonEncriptar = document.querySelector("#buttonInput");
const buttonDesencriptar = document.querySelector("#buttonOutput");
const buttonCopy = document.querySelector('#buttonCopy');

/**
 * 
 * @param {String} stringInput El texto que desea encriptar
 * @returns String ya cifrado
 */
function encriptar(stringInput) {
  let matrizCifrado = [
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"],
  ];

  stringInput = stringInput.toLowerCase();
  stringInput = removeAcentos(stringInput);

  console.log(stringInput);
  for (let i = 0; i < matrizCifrado.length; i++) {
    if (stringInput.includes(matrizCifrado[i][0])) {
      stringInput = stringInput.replaceAll(
        matrizCifrado[i][0],
        matrizCifrado[i][1]
      );
      console.log(stringInput);
    }
  }
  return stringInput;
}

/**
 * 
 * @param {String} stringDesencriptar String para desencriptar
 * @returns String desencriptado
 */
function desencriptar(stringDesencriptar) {
  let matrizDecifrado = [
    ["ai","a"],
    ["enter","e"],
    ["imes","i"],
    ["ober","o"],
    ["ufat","u"],
  ];
  
  stringDesencriptar = stringDesencriptar.toLowerCase();
  stringDesencriptar = removeAcentos(stringDesencriptar);

  for (let i = 0; i < matrizDecifrado.length; i++) {
    if (stringDesencriptar.includes(matrizDecifrado[i][1])) {
      stringDesencriptar = stringDesencriptar.replaceAll(
        matrizDecifrado[i][1],
        matrizDecifrado[i][0]
      );
    }
  }

  return stringDesencriptar;
}

/**
 * 
 * @param {String} stringModificado Para sacar los acentos
 * @returns String sin acentos
 */
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

buttonEncriptar.addEventListener("click", () => {
  outputText.innerHTML = encriptar(inputText.value);
});

buttonDesencriptar.addEventListener('click', () => {
  outputText.innerHTML = desencriptar(inputText.value);
});

/* 
  /^[a-zA-Z\u00C0-\u017F]+$/.test(name)) CÓDIGO REGEX ALTERNATIVO PARA LA BUSQUEDA DE ACENTOS EN UN STRING
*/
