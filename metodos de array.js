const estudiantes = [
  {
    nombre: 'Juan',
    edad: 20,
    carrera: 'Ing. Sistemas',
    notaMedia: 4.5,
  },
  {
    nombre: 'Maria',
    edad: 21,
    carrera: 'Ing. Sistemas',
    notaMedia: 4.8,
  },
  {
    nombre: 'Pedro',
    edad: 19,
    carrera: 'Ing. Sistemas',
    notaMedia: 4.0,
  },
  {
    nombre: 'Luis',
    edad: 20,
    carrera: 'Ing. Sistemas',
    notaMedia: 4.2,
  },
  {
    nombre: 'Ana',
    edad: 21,
    carrera: 'Ing. Sistemas',
    notaMedia: 4.9,
  },
  {
    nombre: 'Jose',
    edad: 19,
    carrera: 'Ing. Sistemas',
    notaMedia: 4.1,
  },
  {
    nombre: 'Diana',
    edad: 20,
    carrera: 'Ing. Sistemas',
    notaMedia: 4.3,
  },
  {
    nombre: 'Carlos',
    edad: 21,
    carrera: 'Ing. Sistemas',
    notaMedia: 4.7,
  },
  {
    nombre: 'Andrea',
    edad: 19,
    carrera: 'Ing. Sistemas',
    notaMedia: 4.4,
  },
  {
    nombre: 'Jorge',
    edad: 20,
    carrera: 'Ing. Sistemas',
    notaMedia: 4.6,
  },
]

//quiero un array con las notas de los estudiantes
//map tiene de parametro una funcion que recibe cada uno de los elementos del array y retorna un nuevo array con los elementos transformados

const notas = estudiantes.map(function (estudiante) {
  return estudiante.notaMedia
})
console.log(notas)

//quiero un array con las notas de los estudiantes superiores a 4.5 (aprobados)

const aprobados = estudiantes
  .filter((estudiante) => estudiante.notaMedia > 4.5)
  .map((estudiante) => estudiante.notaMedia)

console.log(aprobados)

//sacar un array con los nombre de los estudiantes suspensos (nota menor de 4.5)

const reprobados = estudiantes
  .filter((estudiante) => estudiante.notaMedia < 4.5)
  .map((estudiante) => estudiante.nombre)

console.log(reprobados)

//sacar un array con los nombre de los estudiantes suspensos (nota menor de 4.5) y su nota

const reprobados_nota = estudiantes
  .filter((estudiante) => estudiante.notaMedia < 4.5)
  .map((estudiante) => ({
    nombre: estudiante.nombre,
    notaMedia: estudiante.notaMedia,
  }))

console.log(reprobados_nota)

//destucturando
const reprobados_nota2 = estudiantes
  .filter((estudiante) => estudiante.notaMedia < 4.5)
  .map(({ nombre, notaMedia }) => ({ nombre, notaMedia }))
console.log(reprobados_nota2)
