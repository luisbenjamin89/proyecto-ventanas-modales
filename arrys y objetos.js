const nombres = ['pepe', 'marta', 'juan']
const nombre1 = nombres[0]
const nombre2 = nombres[1]
const nombre3 = nombres[2]
console.log(nombre1)
console.log(nombre2)
console.log(nombre3)

const [n1, , n3, n4 = 'nombres generico'] = nombres
console.log(n1)
//console.log(n2)
console.log(n3)
console.log(n4)

const clases = [
  ['pepe', 'marta', 'juan'],
  ['pepe', 'benjamin', 'juan'],
  ['eva', 'marta', 'karla'],
]

const [[alumno1, alumno2, alumno3], clase2, clase3] = clases

console.log(alumno1, alumno2, alumno3)

console.log(clase2)

console.log(clase3)

const pedido = ['judias verdes', 'ensalada']

let [primerPlato, segundoPlato] = pedido
console.log(primerPlato)
console.log(segundoPlato)

//cambiar el orden de los platos con una variable
const aux = primerPlato
primerPlato = segundoPlato
console.log(primerPlato)
segundoPlato = aux
console.log(segundoPlato)

// cambiar el orden de platos con destructuring
;[segundoPlato, primerPlato] = [primerPlato, segundoPlato]
console.log(primerPlato)
console.log(segundoPlato)

//en objetos -> elementos tienen propiedades.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tava e nti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
}
/* si el campo no exite, se puede poner un valor por defecto para iterar por que son arrays, el valor por defectoun array vacion*/
const {
  starterMenu: primero,
  mainMenu: segundo,
  dessert: postre = [],
} = restaurant
console.log(primero)
console.log(segundo)
console.log(postre)

// vamos a comprobar si esta abierto

const daysOfweek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const today = new Date()
const day = daysOfweek[today.getDay()]

console.log(day)

const { openingHours: horario } = restaurant

const { fri: horarioViernes } = horario
const { open: horaApertura, close: horacierre } = horarioViernes
console.log(horaApertura)
console.log(horacierre)

/*otra froma de hacerlo */

const {
  openingHours: {
    fri: { open: horaApertura1, close: horacierre2 },
  },
} = restaurant
console.log(horaApertura1)
console.log(horacierre2)
