
const cifrado = () => {
  let textInput = document.querySelector("#inputText");
  let textOutput = document.querySelector("#outputText");

  
}

const buttonInput = document.querySelector("#buttonInput");
const buttonDesencriptar = document.querySelector("#buttonDesencriptar");
const buttonCopy = document.querySelector("#buttonCopy");

buttonInput.addEventListener('click', cifrado);

buttonDesencriptar.addEventListener("click", () => {
  console.log("Presioné boton desencriptar");
});

buttonCopy.addEventListener("click", () => {
  console.log("Presioné el botón copiar");
});