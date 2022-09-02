const textInput = document.querySelector("#inputText");
const textOutput = document.querySelector("#outputText");

const buttonInput = document.querySelector("#buttonInput");
const buttonDesencriptar = document.querySelector("#buttonDesencriptar");
const buttonCopy = document.querySelector("#buttonCopy");

buttonInput.addEventListener("click", () => {
  Cifrado(textInput);
  textOutput.innerHTML = `${textInput.value}`;
});

buttonDesencriptar.addEventListener("click", () => {
  console.log("Presioné boton desencriptar");
});

buttonCopy.addEventListener("click", () => {
  console.log("Presioné el botón copiar");
});

function Cifrado() {
  for (let i = 0; i <= textInput.length; i++) {
    if (textInput[i].value === "a") textInput[i].value === "ai";
    console.log(text[i]);
  }
}