// Ejercicio 7.1: Declara una variable usando 'let' dentro de un bloque de código ('{}') y muestra que no está disponible fuera del bloque.
{   let nombre = 'Leo'  }
console.log(nombre);

// Ejercicio 7.2: Declara una constante 'PI' y asígnale el valor '3.14159'. Intenta reasignar otro valor a 'PI' y observa lo que ocurre.
const PI = 3.14159
PI = 123

// Ejercicio 7.3: Declara una variable 'mensaje' usando 'var' y asígnale el valor "Hola Mundo". Declara la misma variable 'mensaje' dentro de una función y asígnale un valor 
// diferente. Muestra ambos valores en la consola para ver cómo 'var' afecta el alcance de las variables.
var mensaje =  'Hola mundo'
console.log({mensaje});

const saludo = function () {
    var mensaje =  'Adios mundo'
    console.log({mensaje});
  }
  
 saludo()