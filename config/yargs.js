const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}

const completado: {
    default: true,
    alias: 'c',
    desc: 'Marcar una tarea como completada'
}

var argv = require('yargs')
    .usage('Uso: $0 <comando> [opciones]')
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Cambiar el estado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista las tareas pendientes', {
        descripcion
    })
    .help('h')
    .argv;

module.exports = {
    argv
}