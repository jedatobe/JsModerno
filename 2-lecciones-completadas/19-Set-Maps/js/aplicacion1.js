// OBJETO SET
// Sintaxis: new Set([it]);
const valores = new Set(["a", 1, true]);
console.log(valores);

//  El objeto Set no admite valores duplicados
const valoresUnicos = new Set(["a", "a", "b", "b", "c", "c", 4, 4]);
console.log(valoresUnicos);

// PROPIEDADES Y MÉTODOS DEL OBJETO SET
// Propiedad size: devuelve el número de valores contenidos en el objeto Set.
const frutas = new Set(["Manzana", "Mango", "Naranja", "Banana", "Piña"]);
console.log(frutas.size);

// Método add(): agrega un valor, y devuelve el Set en sí.
const frutas2 = new Set();
frutas2.add("Pomelo");
frutas2.add("Kiwi");
frutas2.add("Albaricoque");
frutas2.add("Durazno");
console.log(frutas2);

// Método has(): devuelve true si el valor existe en el Set, si no, devuelve false.
console.log(frutas2.has("Durazno")); // true
console.log(frutas2.has("Naranja")); // false

// Método delete(): elimina el valor, y devuelve true si el valor existía al momento de la llamada; si no, devuelve false.
console.log(frutas2.delete("Kiwi"));
console.log(frutas2.delete("Higo"));

// Método .clear(): elimina todo el contenido del Set.
const num = new Set([11, 23,44, 32]);
num.clear();
console.log(num);