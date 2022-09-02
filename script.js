const textInput = document.querySelector('#inputText');
const textOutput = document.querySelector('#outputText');

const buttonInput = document.querySelector('#buttonInput');
const buttonDesencriptar = document.querySelector('#buttonDesencriptar');
const buttonCopy = document.querySelector('#buttonCopy');

buttonInput.addEventListener('click',() =>{
    textOutput.innerHTML = `${textInput.value}`;
});

buttonDesencriptar.addEventListener('click',() => {
    console.log('Presioné boton desencriptar');
});

buttonCopy.addEventListener('click', () => {
    console.log('Presioné el botón copiar');
});

function Cifrado(){
    
}