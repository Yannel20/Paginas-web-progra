/* Ejercicio 1: Lista de tareas personalizable */
/* Crea un programa que permita al usuario ingresar una lista de tareas pendientes. El programa debe:
*Pedir al usuario que ingrese tareas una por una.
*Almacenar las tareas en un arreglo.
*Mostrar la lista de tareas actualizadas cada vez que se agrega una nueva tarea.
Permitir al usuario eliminar tareas de la lista.*/

let tareas = [];

function agregarTarea() {
  let nuevaTarea = prompt("Ingrese la nueva tarea:");
  if (nuevaTarea) {
    tareas.push(nuevaTarea);
    guardarTareas(); // Guarda las tareas en el almacenamiento local
    mostrarTareas();
  }
}

function eliminarTarea() {
  let indiceAEliminar = parseInt(prompt("Ingrese el número de la tarea que desea eliminar:"));
  if (indiceAEliminar >= 1 && indiceAEliminar <= tareas.length) {
    tareas.splice(indiceAEliminar - 1, 1);
    guardarTareas();
    mostrarTareas();
  } else {
    alert("Número de tarea es inválido.");
  }
}

function editarTarea() {
  let indiceAEditar = parseInt(prompt("Ingrese el número de la tarea que desea editar:"));
  if (indiceAEditar >= 1 && indiceAEditar <= tareas.length) {
    let nuevaTarea = prompt("Ingresa la nueva tarea:");
    if (nuevaTarea) {
      tareas[indiceAEditar - 1] = nuevaTarea;
      guardarTareas();
      mostrarTareas();
    }
  } else {
    alert("Número de tarea es inválido.");
  }
}

function mostrarTareas() {
  let listaTareas = "Lista de tareas:\n";
  if (tareas.length === 0) {
    listaTareas = "No hay tareas pendientes.\n";
  } else {
    for (let i = 0; i < tareas.length; i++) {
      listaTareas += (i + 1) + ". " + tareas[i] + "\n";
    }
  }
  alert(listaTareas);
}

function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function cargarTareas() {
  let tareasGuardadas = localStorage.getItem("tareas");
  if (tareasGuardadas) {
    tareas = JSON.parse(tareasGuardadas);
  }
}

// Carga las tareas al inicio
cargarTareas();
mostrarTareas();

// Ejemplo de uso:
agregarTarea();
editarTarea();
eliminarTarea();