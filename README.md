# Encriptador de Texto

Este proyecto es una aplicación web que permite encriptar y desencriptar texto utilizando un conjunto específico de reglas de sustitución. También incluye la funcionalidad de copiar el texto encriptado al portapapeles.

## Funcionalidades

### Encriptar Texto
- **Descripción**: Convierte el texto ingresado en un formato encriptado utilizando las siguientes reglas de sustitución:
  - `e` se convierte en `enter`
  - `i` se convierte en `imes`
  - `a` se convierte en `ai`
  - `o` se convierte en `ober`
  - `u` se convierte en `ufat`
- **Uso**: Ingrese el texto en el área de texto de la izquierda y haga clic en la imagen de encriptar.

### Desencriptar Texto
- **Descripción**: Convierte el texto encriptado de vuelta a su formato original utilizando las reglas de sustitución inversas.
- **Uso**: Ingrese el texto encriptado en el área de texto de la izquierda y haga clic en la imagen de desencriptar.

### Copiar Texto
- **Descripción**: Copia el texto encriptado o desencriptado al portapapeles.
- **Uso**: Haga clic en la imagen de copiar que aparece en la parte inferior del cuadro de texto de la derecha.

## Estructura del Proyecto

### HTML
El archivo `index.html` contiene la estructura básica de la página, incluyendo las áreas de texto para ingresar y mostrar el texto, así como las imágenes que actúan como botones para encriptar, desencriptar y copiar.

### CSS
El archivo `styles.css` contiene los estilos para la página, asegurando que los elementos se muestren correctamente y que la interfaz sea atractiva y fácil de usar.

### JavaScript
El archivo `Encriptador.js` contiene la lógica para encriptar, desencriptar y copiar el texto. También maneja la visibilidad de los elementos en función del contenido del texto.

## Autor
Alexander Salas
