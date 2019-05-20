let notas = [{
        nombre: 'Juan',
        matematicas: 4,
        ingles: 3,
        programacion: 2
    },

    {
        nombre: 'Maria',
        matematicas: 5,
        ingles: 1,
        programacion: 3
    }
];

nombre = 'Juan';
let estudianteNota = notas.find(notaEst => notaEst.nombre == nombre);

console.log(estudianteNota);