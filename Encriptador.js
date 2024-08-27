document.getElementById('ingreseTextoIzquierda').addEventListener('click', function() {
    document.getElementById('inputText').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('BotonEncri').addEventListener('click', encrypt);
document.getElementById('BotonDes').addEventListener('click', decrypt);

function encrypt() {
    let text = document.getElementById('inputText').value;
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
    toggleImage('ningunMensajeDerecha', document.getElementById('outputText'));
    document.getElementById('outputParent').style.display = 'block'; // Mostrar la caja padre después de encriptar
    document.getElementById('BotonCop').style.display = 'block'; // Mostrar el botón de copiar
}

function decrypt() {
    let text = document.getElementById('inputText').value;
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
    toggleImage('ningunMensajeDerecha', document.getElementById('outputText'));
    document.getElementById('outputParent').style.display = 'block'; // Mostrar la caja padre después de desencriptar
    document.getElementById('BotonCop').style.display = 'block'; // Mostrar el botón de copiar
}

function copyToClipboard() {
    let text = document.getElementById('outputText').value;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

function toggleImage(imageId, textarea) {
    const image = document.getElementById(imageId);
    const outputParent = document.getElementById('outputParent');
    if (textarea.value.trim() === "") {
        image.style.display = 'block';
        textarea.style.display = 'none'; // Ocultar el textarea si está vacío
        outputParent.style.display = 'none'; // Ocultar la caja padre
    } else {
        image.style.display = 'none';
        textarea.style.display = 'block'; // Mostrar el textarea si tiene contenido
        outputParent.style.display = 'block'; // Mostrar la caja padre
    }
}
