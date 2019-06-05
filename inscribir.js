const principal = require('./principal');
const fs = require('fs');
const express = require('express');
const app = express();

const argv = require('yargs')
    .command('inscripcion', 'Inscribir Aspirante', principal.OPCIONES)
    .command('listar', 'listar cursos')
    .argv


let inicio = (callBack) => {
    if (argv._[0] == 'inscripcion') {
        console.log('Inicia el Proceso de Inscripción');
        callBack();
    } else {
        console.log('--Cursos ofertados:\n');
        principal.cursos.forEach(function(obj, index, array) {
            setTimeout(function() {
                console.log(`--${obj.id_curso}. ${obj.nom_curso}. Duración: ${obj.duracion} Horas. Valor: $${obj.valor}`);
            }, 2000 * (index + 1));
        });

        setTimeout(() => {
            console.log('\nPara Inscribirse en un curso, por favor digite:' +
                'la pa labra inscripcion seguido de -id=(Identificador del Curso) -nom=(Nombre) -ced=(Número de Cedula)');
        }, 8000);


    }
}

inicio(function() {

    let curso = principal.cursos.find(infcurso => infcurso.id == argv.i);

    if (curso) {
        text =
            'Finalizo con exito la inscripción al curso:' +
            '-Nombre del Aspirante: ' + argv.nom +
            '\nCedula del Aspirante: ' + argv.ced +
            '\nId del Curso: ' + curso.id_curso +
            '\nNombre del Curso: ' + curso.nom_curso +
            '\nDuración del Curso: ' + curso.duracion +
            '\nValor: $' + curso.valor;

        /*  fs.writeFile('Comprobante_Inscripción.txt', text, (error) => {
             if (error) throw (error)
             console.log(text)
         }) */


        app.get('/', function(req, res) {
            res.send(text)
        })

        app.listen(3000)
        return;
    } else if (argv._[0] == 'inscripcion') {
        console.log('El curso: ' + argv.id + ' No existe');
        principal.cursos.forEach(function(obj, index, array) {
            setTimeout(function() {
                console.log(`--${obj.id_curso}. ${obj.nom_curso}. Duración: ${obj.duracion} Horas. Valor: $${obj.valor}`);
            }, 2000 * (index + 1));
        });
    }
    console.log('\nPara Inscribirse en un curso, por favor digite:\n' +
        'la palabra inscripcion seguido de -id=(Identificador del Curso) -nom=(Nombre) -ced=(Número de Cedula)');
})