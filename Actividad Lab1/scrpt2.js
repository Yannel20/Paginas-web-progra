/* Ejercicio 2: Registro de calificaciones*/
/* Crea un programa que permita al usuario ingresar las calificaciones de un estudiante en diferentes materias. El programa debe:

Pedir al usuario que ingrese el nombre de la materia y la calificación obtenida.
Almacenar las calificaciones en un arreglo de objetos. alcular el promedio de las calificaciones.
Mostrar las calificaciones individuales y el promedio.*/

let calificaciones = [];

function agregarCalificacion() {
  let materia = prompt("Ingrese el nombre de la materia:");
  let calificacion = parseFloat(prompt("Ingrese la calificación obtenida:")); // Convierte a número

  if (isNaN(calificacion)) { // Verifica si la calificación es un número válido
    alert("Calificación inválida. Debe ser un número.");
    return; // Sale de la función si la calificación no es válida
  }

  calificaciones.push({ materia: materia, calificacion: calificacion });
  guardarCalificaciones(); // Guarda las calificaciones en el almacenamiento local
  mostrarCalificaciones();
}

function calcularPromedio() {
  if (calificaciones.length === 0) {
    return 0; // Devuelve 0 si no hay calificaciones
  }

  let suma = 0;
  for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i].calificacion;
  }
  return suma / calificaciones.length;
}

function mostrarCalificaciones() {
  let listaCalificaciones = "Calificaciones:\n";
  if (calificaciones.length === 0) {
    listaCalificaciones = "No hay calificaciones registradas.\n";
  } else {
    for (let i = 0; i < calificaciones.length; i++) {
      listaCalificaciones += calificaciones[i].materia + ": " + calificaciones[i].calificacion + "\n";
    }
    listaCalificaciones += "Promedio: " + calcularPromedio().toFixed(2); // Muestra el promedio con 2 decimales
  }
  alert(listaCalificaciones);
}

function guardarCalificaciones() {
  localStorage.setItem("calificaciones", JSON.stringify(calificaciones));
}

function cargarCalificaciones() {
  let calificacionesGuardadas = localStorage.getItem("calificaciones");
  if (calificacionesGuardadas) {
    calificaciones = JSON.parse(calificacionesGuardadas);
  }
}

// Carga las calificaciones al inicio
cargarCalificaciones();
mostrarCalificaciones();

// Ejemplo de uso:
agregarCalificacion();