// IMPORTAR CÓDIGO

import {nombre, producto as item, libro, multiplicar, persona, usuario} from './utilidades.js'
import {sum, areaTriangulo, raizCuadrada} from './calculos.js'
import introduccion, {mensajeBienvenida} from './mensaje.js';

console.log(nombre);
console.log(item);
console.log(libro);
console.log(multiplicar(23, 90));

const persona1 = new persona("Edward", 35);
console.log(persona1.mostrarinfo());

const usuario1 = new usuario("Nathalie", 30, "Gerente de Marketing");
console.log(usuario1.mostrarinfo());

const resultado = sum(320, 150);
console.log(resultado);

const area = areaTriangulo(400, 300);
console.log(area);

const resultado2 = raizCuadrada(25);
console.log(resultado2);

const saludo = introduccion("Jessie", 30);
console.log(saludo);

const bienvenida = mensajeBienvenida();
console.log(bienvenida);