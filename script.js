const inputTexto = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const buttonInput = document.querySelector("#buttonInput");
const buttonOutput = document.querySelector("#buttonOutput");

function encriptar(stringInput) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];


  stringInput = stringInput.toLowerCase();
  stringInput = removeAcentos(stringInput);

  console.log(stringInput);
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringInput.includes(matrizCodigo[i][0])) {
      stringInput = stringInput.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
      console.log(stringInput);
    }
  }
  return stringInput;
}

function desencriptar(stringDesencriptar) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptar = stringDesencriptar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptar.includes(matrizCodigo[i][1])) {
      stringDesencriptar = stringDesencriptar.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDesencriptar;
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

buttonInput.addEventListener("click", () => {
  const textCifrdado = encriptar(inputTexto.value.toLowerCase());
  outputText.innerHTML = textCifrdado;
});

/* 
  /^[a-zA-Z\u00C0-\u017F]+$/.test(name))
*/
