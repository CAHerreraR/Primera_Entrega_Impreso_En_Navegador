let cursos = [{

        id_curso: 1,
        nom_curso: 'Fundamentos Node.js',
        duracion: 120,
        unidadtiempo: 'horas',
        valor: 0
    },
    {

        id_curso: 2,
        nom_curso: 'TypeScript y Angular',
        duracion: 120,
        unidadtiempo: 'horas',
        valor: 50000

    },
    {

        id_curso: 3,
        nom_curso: 'Metodologías Ágiles',
        duracion: 60,
        unidadtiempo: 'horas',
        valor: 0

    }

];

const OPCIONES = {

    identificador_curso: {

        default: 0,
        alias: 'id',


    },
    Nombre_interesado: {

        default: 0,
        alias: 'nom'

    },
    Identificacion_interesado: {

        demand: true,
        alias: 'ced'

    }


}



module.exports = {

    cursos,
    OPCIONES

};