const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./logica/logica');

let comando = argv._[0];

switch(comando) {
    case 'borrar':
        let resultado = porHacer.borrar(argv.descripcion);
        console.log(resultado);
        break;
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        console.log('======= Tareas ========'.green);
        for(let tarea of listado) {
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
        }
        console.log('=========================='.green);
        break;
    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    default:
        console.log('Orden no reconocida');

}