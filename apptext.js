const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < letras.length; i++){
        if(stringEncriptada.includes (letras[i][0])){
        
        stringEncriptada = stringEncriptada.replaceAll(letras[i][0], letras[i][1])

        }
    }

return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada){
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < letras.length; i++){
        if(stringDesencriptada.includes (letras[i][1])){
        
        stringDesencriptada = stringDesencriptada.replaceAll(letras[i][1], letras[i][0])

        }
    }

return stringDesencriptada
}

function copiarTexto() {
    var texto = document.getElementById("texto-a-copiar");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
  }
  
  