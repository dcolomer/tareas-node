const fs = require('fs');

let tareas = [];

const crear = (descripcion) => {

    leerBD();

    let porHacer = {
        descripcion,
        completado: false
    };

    tareas.push(porHacer);
    guardarBD();

    return porHacer;
}

const guardarBD = () => {
    let datos = JSON.stringify(tareas);
    fs.writeFile('bd/datos.json', datos, 'utf8', () => {
        console.log('Datos guardados')
    });
}

const leerBD = () => {
    try {
        tareas = require('../bd/datos.json');
    } catch(error) {
        tareas = [];
    }

}

const getListado = () => {
    leerBD();
    return tareas;
}

const actualizar = (descripcion, completado = true) => {
    leerBD();
    let indexTarea = tareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (indexTarea < 0)
        throw new Error("No hay ninguna tarea con esa descripción");
    let tarea = tareas[indexTarea];
    tarea.completado = true;
    guardarBD();
}

const borrar = (descripcion) => {
    leerBD();
    let indexTarea = tareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (indexTarea < 0)
        throw new Error("No hay ninguna tarea con esa descripción");
    let eliminado = tareas.splice(indexTarea, 1);
    guardarBD();
    return eliminado;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}