// Ejercicio 5.1: Declara una variable 'cadenaNumero' y asígnale el valor "123". Convierte esta cadena a un número y almacénalo en una nueva variable 'numeroConvertido'. Muestra ambos valores en la consola.
let cadenaNumero = '123' // creo la variable y le asigno un valor string
console.log({cadenaNumero}, 'El tipo de dato es:', typeof cadenaNumero);
let numeroConvertido = Number.parseInt(cadenaNumero) // convierto el tipo de dato a string

console.log({numeroConvertido}, 'El tipo de dato es:', typeof numeroConvertido);

// Ejercicio 5.2: Declara una variable 'booleano' y asígnale el valor 'true'. Convierte este valor a una cadena y almacénalo en una nueva variable 'cadenaBooleano'. Muestra ambos valores en la consola.

let booleano =  true // creo la variable y le asigno un valor booleano
console.log({booleano}, 'El tipo de dato es:', typeof booleano);
const cadenaBooleano = booleano.toString()
console.log({cadenaBooleano}, 'El tipo de dato es:', typeof cadenaBooleano);
