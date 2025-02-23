// Este código se ejecutará cuando se cargue la página

// 1. Manipulación del DOM:
// Podemos obtener elementos del HTML y modificarlos

// Obtener el elemento con el id "intro"
const introSection = document.getElementById("intro");

// Cambiar el texto del subtítulo h2 dentro de la sección "intro"
const subtituloIntro = introSection.querySelector("h2");
subtituloIntro.textContent = "¡Hola!";

// Añadir un nuevo párrafo a la sección "intro"
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Estoy muy emocionada por todo lo que he aprendido gracias al ingeniero William Girón."; // Texto modificado
introSection.appendChild(nuevoParrafo);

// 2. Eventos:
// Podemos hacer que el código se ejecute cuando el usuario interactúa con la página

// Obtener todos los elementos con la clase "tema"
const temas = document.querySelectorAll(".tema");

// Agregar un evento "click" a cada tema
temas.forEach(tema => {
    tema.addEventListener("click", () => {
        alert("¡Has hecho clic en un tema!");
    });
});

// 3. Clases:
// Podemos crear clases para organizar mejor nuestro código

class Tema {
    constructor(elementoHTML) {
        this.elementoHTML = elementoHTML;
    }

    resaltar() {
        this.elementoHTML.style.backgroundColor = "#ffffcc"; // Amarillo claro
    }

    restaurarColor() {
        this.elementoHTML.style.backgroundColor = "#fff"; // Blanco
    }
}

// Crear objetos de la clase Tema para cada elemento ".tema"
const objetosTema = Array.from(temas).map(tema => new Tema(tema));

// Agregar eventos para resaltar y restaurar el color de los temas
objetosTema.forEach(tema => {
    tema.elementoHTML.addEventListener("mouseover", () => tema.resaltar());
    tema.elementoHTML.addEventListener("mouseout", () => tema.restaurarColor());
});