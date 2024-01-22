//objec and array destructuring

const nombre = ['pepe', 'marta', 'juan']
const [n1, n2, n4 = 'nombre generico'] = nombre

//en objetos -> con llaves y obtiniendo los campos por el nombre dle mismo y no por e4l orden en el que estan declarados

//SPREAD OPERATOR -> "Lo mismo peros sin guardar en variables"

const pares = [2, 4, 6, 8, 10]
const impares = [1, 3, 5, 7, 9]

const numeros = [...pares, ...impares]
console.log(numeros)

const miDireccion = {
  calle: 'calle de piruleta',
  numero: 3,
  ciudad: 'Madrid',
}

const miNombre = {
  nombre: 'pepe',
  apellido: 'perez',
}

const miInfo = { ...miDireccion, ...miNombre }
console.log(miInfo)

//Rest pettern spread operator al reves -> converte a arrays o a objetos

const misNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [numero1, , ...resto] = misNumeros
console.log(resto)

const sumar = (a, b) => a + b
console.log(sumar(2, 3))
console.log(sumar(2, 3, 4, 5, 6))

// si quisiera hacer que sumara cualquier cantidad de numeros no solo dos seria asi

const sumar2 = (a) => {
  let suma = 0
  for (let index = 0; index < a.length; index++) {
    const element = a[index]
    suma += element
  }
  return suma
}
console.log(sumar2([2, 3, 4, 6]))
