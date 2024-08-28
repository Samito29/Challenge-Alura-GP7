// Para encriptar el texto
function encrypt() {
    const textArea = document.querySelector('.text-area');
    let text = textArea.value;

    if (!validateText(text)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return;
    }

    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    displayMessage(encryptedText);
}

// Para desencriptar el texto
function decrypt() {
    const textArea = document.querySelector('.text-area');
    let text = textArea.value;

    if (!validateText(text)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return;
    }

    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    displayMessage(decryptedText);
}

// Para copiar el texto al portapapeles
function copyText() {
    const messageTextArea = document.querySelector('.mensaje');
    navigator.clipboard.writeText(messageTextArea.value).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

// Para mostrar el mensaje en el área de resultado
function displayMessage(message) {
    const messageTextArea = document.querySelector('.mensaje');
    const muñeco = document.querySelector('.img-muñeco');
    const primerTexto = document.querySelector('.primer-texto');
    const segundoTexto = document.querySelector('.segundo-texto');
    const copyButton = document.querySelector('.boton-copiar');

    muñeco.style.display = 'none';
    primerTexto.style.display = 'none';
    segundoTexto.style.display = 'none';
    messageTextArea.value = message;
    copyButton.style.visibility = 'visible';
}

// Para validar el texto (solo letras minúsculas sin acentos)
function validateText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}