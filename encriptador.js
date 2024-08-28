
// Función para limpiar el texto de caracteres no permitidos
function limpiarTexto() {
    // Expresión regular para encontrar caracteres no permitidos
    const regex = /[^a-z\s]/g; // Solo permite letras minúsculas y espacios
    
    // Obtener el texto del campo de texto
    let texto_validar = document.getElementById("texto").value;

    // Encontrar y reemplazar caracteres no permitidos
    if (texto_validar.match(regex) != null) {
        alert("Solo se permiten letras minúsculas y espacios");
        const texto_limpio = texto_validar.replace(regex, '');
        document.getElementById("texto").value = texto_limpio;
        return texto_limpio; // Retornar el texto limpio
    }

    return texto_validar; // Retornar el texto original si ya está limpio
}

// Asignar la función al evento de entrada del campo de texto
document.getElementById("texto").addEventListener('input', limpiarTexto);

// Encriptar texto
function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Desencriptar texto
function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Manejo del botón de encriptar
document.getElementById('encriptarBtn').addEventListener('click', function() {
    const textoOriginal = limpiarTexto(); // Llama a la función para asegurar el texto válido
    
    if (textoOriginal) {
        const textoEncriptado = encriptar(textoOriginal);
        document.getElementById('resultado-texto').textContent = textoEncriptado;
        document.querySelector('.resultado-titulo').textContent = "Texto encriptado";
    } else {
        document.getElementById('resultado-texto').textContent = "Por favor, ingresa solo letras minúsculas sin acentos.";
        document.querySelector('.resultado-titulo').textContent = "Error";
    }
});

// Manejo del botón de desencriptar
document.getElementById('desencriptarBtn').addEventListener('click', function() {
    const textoOriginal = limpiarTexto(); // Llama a la función para asegurar el texto válido
    
    if (textoOriginal) {
        const textoDesencriptado = desencriptar(textoOriginal);
        document.getElementById('resultado-texto').textContent = textoDesencriptado;
        document.querySelector('.resultado-titulo').textContent = "Texto desencriptado";
    } else {
        document.getElementById('resultado-texto').textContent = "Por favor, ingresa solo letras minúsculas sin acentos.";
        document.querySelector('.resultado-titulo').textContent = "Error";
    }
});

// Manejo del botón de copiar
document.getElementById('copiarBtn').addEventListener('click', function() {
    const texto = document.getElementById('resultado-texto').textContent;
    if (texto) {
        navigator.clipboard.writeText(texto)
            .then(() => {
                alert('Texto copiado al portapapeles!');
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    } else {
        alert('No hay texto para copiar.');
    }
});

// Manejo del botón de pegar
document.getElementById('pegar').addEventListener('click', async function() {
    try {
        const textoPegado = await navigator.clipboard.readText();
        document.getElementById('texto').value = textoPegado;
        limpiarTexto(); // Limpiar el texto después de pegar
    } catch (err) {
        console.error('Error al pegar el texto: ', err);
    }
});

// Manejo del botón de resetear
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('texto').value = '';
    document.getElementById('resultado-texto').textContent = 'Ingresa el texto que deseas encriptar o desencriptar.';
    document.querySelector('.resultado-titulo').textContent = 'Ningún mensaje fue encontrado';
});
