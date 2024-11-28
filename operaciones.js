const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8')); // Leer el archivo
    citas.push(nuevaCita); // Agregar la nueva cita
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2)); // Guardar el archivo
    console.log("Cita registrada con éxito:", nuevaCita);
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8')); // Leer el archivo
    console.log("Citas registradas:");
    console.log(citas);
}

module.exports = { registrar, leer };
