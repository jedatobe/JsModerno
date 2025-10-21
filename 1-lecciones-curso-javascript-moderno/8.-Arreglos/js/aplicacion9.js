// OTROS MÉTODOS DE LOS ARREGLOS

// Método toString(): devuelve una cadena de texto representando el arreglo y sus elementos. (Sintaxis: arr.toString())
const numeros = [1, 2, 3, 4, 5, 6,];
console.log(numeros.toString());


/* Método concat(): se utiliza para unir dos o más arrays y devuelve como resultado uno nuevo. 
(Sintaxis: arr.concat(value0, value1,...valueN)) */
const letras = ['a', 'b', 'c', 'd', ];
const letras2 = ['e', 'f', 'g',];
const letras3 = ['h', 'i', 'j', ];
const concatenar = letras.concat(letras2, letras3);
console.log(concatenar);

// Concatenando valores a un array
const miembros = ["Ernie", "Tiffany", "Laetitia", "Marcos", ];
console.log(miembros.concat('Petter'));

// Concatenando arrays anidados
const producto = ["tablet", "laptop", ];
const producto2 = ["desktop", ["tarjeta gráfica", "tarjeta madre", "memorias", ]];
console.log(producto.concat(producto2));


// Método join(): junta todos los elementos de un arreglo usando un separador  y regresa una cadena de texto. (Sintaxis: arr.join([separator]))
const deportes = ["baseball", "basketball", "fútbol", "volleyball", "natación", "ciclismo", ];
console.log(deportes.join());
console.log(deportes.join(''));
console.log(deportes.join(' '));
console.log(deportes.join('.'));
console.log(deportes.join('-'));
console.log(deportes.join('|'));
