// Lista de turnos para el psicologo.

let continuar = true;
let turnos = [];

while (continuar) {
    let opcion = prompt("Selecciona una opción:\n1. Sacar turno\n2. Ver lista de turnos\n3. Salir");


if (opcion === null || opcion === "3") {
    continuar = false;
    console.log("No hay más pacientes.");
    } else {
    
switch (opcion) {

case "1":
    agregarTurno();
    break;

case "2":
    console.log("Lista de turnos:");
    mostrarTurnos();
    break;

default:
    console.log("Opción inválida.");
    break;
    }
    }
}

function agregarTurno() {
let nombre = prompt("Ingresa tu nombre:");
    turnos.push(nombre);
    console.log("Turno agregado correctamente.");
}

function mostrarTurnos() {
    if (turnos.length === 0) {
    console.log("No hay turnos en la lista.");
    } 
    else {
    for (let i = 0; i < turnos.length; i++) {
    console.log("Turno " + (i + 1) + ": " + turnos[i]);
    }
}
}