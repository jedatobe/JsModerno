// TIPO BOOLEANO

// Notación literal
const a = true;
const b = false;
console.log(a);
console.log(b);

// Función Boolean()
const d = Boolean(true);
const e = Boolean(false);
console.log(d);
console.log(e);

// Objeto booleano new Boolean (No recomendada)
const f = new Boolean(true);
const g = new Boolean(false);
console.log(f);
console.log(g);

// Comparar objetos booleanos
const h = new Boolean(false);
const i = new Boolean(false);

console.log(h == i);
console.log(h === i);

/* Todos los siguientes valores retornan `false`
* 0 (cero)
* -0 (cero negativo)
* "" (comillas vacías)
* null
* undefined
* NaN
* false
*/
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

// Cualquier otro valor retorna `true`
console.log(Boolean("Hola mundo"));
console.log(Boolean(100));
console.log(Boolean(" "));
console.log(Boolean(20 * 5));
console.log(Boolean("false"));