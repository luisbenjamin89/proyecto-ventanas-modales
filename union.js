// OBJECT Y ARRAY DESTRUCTURING

const estudiante = [ {
  nombre: 'Juan',
  edad: 22,
  carrera: 'Ingeniería en Computación',
},
{
  nombre: 'Pedro',
  edad: 23,
  carrera: 'Ingeniería en Computación',
},
{
  nombre: 'María',
  edad: 24,
  carrera: 'Ingeniería en Computación',
}
]

const [estudiante1, , estudiante3] = estudiante
console.log(estudiante3)

const nombreEstudiante3=estudiante3.nombre

//const {nombre,edad,carrera}= estudiante3 /*esta es la menera mas comun de sacer los campos del objeto*/

//const[,estudiante2]=estudiante
//const {edad:edadEstudiante2}=estudiante2
//console.log(edadEstudiante2)

/* o tambien se puede simplificar codigo asi */

const[,{edad:edadEstudiante2,nombre}]=estudiante
console.log (edadEstudiante2,nombre)

//Funcion mostrarNombre:recibimos  un objeto estudiente y sacamos por consola su nombre 

/*function mostrarNombre (estudiante){
console.log(estudiante.nombre)

}*/

const mostrarNombre=({nombre})=>nombre
console.log (mostrarNombre(estudiante[0]))

/*implementa la funcion obtener primerNombre , que recibe un array de objetos estudiantes 
y devuelve el nombre del primer estudiante*/

const obtnerPrimerNombre= ([{nombre}])=> nombre
console.log(obtnerPrimerNombre(estudiante))


// SPREAD OPERATOR -> "LO MISMO PERO SIN GUARDAR EN VARIABLES"

const numeroHASta5=[1,2,3,4,5]
const numerohasta10 = [...numeroHASta5, 6, 7, 8, 9, 10]

const comida ="pizza"
console.log(...comida)


// // REST PATTERN

const obtenerSegundoNombre=([,{nombre}])=>nombre
console.log(obtenerSegundoNombre(estudiante))

//funcion QuitarPrimerEstuante metodo antiguo

function QuitarPrimerEstudiante(estudiante){
  const estudiantesSinprimerEstudiante = estudiante.slice(1)
  return estudiantesSinprimerEstudiante
}
//

const quitarPrimerEstudiante2 = ([, ...restoDeEstudiantes]) =>
  restoDeEstudiantes
console.log(quitarPrimerEstudiante2(estudiante))

//const QuitarPrimerEstudiante = (estudiantes) => estudiantes.slice(1)