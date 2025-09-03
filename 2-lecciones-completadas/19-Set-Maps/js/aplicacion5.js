// OBJETO MAP

const mapa = new Map([
    ["nombre", "Clint"],
    ["puesto", "Analista de datos"],
    ["edad", 35]
]);
console.log(mapa);

// MÉTODOS Y PROPIEDADES
// Propiedad size: devuelve la cantidad actual de elementos.
console.log(`El mapa tiene ${mapa.size} elementos`);

// Método map.set(clave, valor): almacena el valor asociado a la clave.
const mapa2 = new Map();
mapa2.set("a", "string");
mapa2.set(1, "número");
mapa2.set(true, "booleano");
mapa2.set({nombre: "Anna"}, "objeto");
console.log(mapa2);

// Método map.get(clave): devuelve el valor de la clave. Será undefined si la clave no existe en map.
const mapa3 = new Map([
    ["nombre", "Nathalie"],
    ["país", "España"],
    ["edad", 31]
]);
console.log(mapa3.get("nombre"));
console.log(mapa3.get("edad"));
console.log(mapa3.get("puesto")); // Devuelve undefined

// Método has(clave): devuelve true si la clave existe en map, false si no existe.
const mapa4 = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);
console.log(mapa4.has("b")); // true
console.log(mapa4.has(34)); // false

// Método delete(clave): elimina el elemento con esa clave.
const mapa5 = new Map([
    ["producto", "tablet"],
    ["precio", 450],
    ["tamaño", "10 pulgadas"]
]);
console.log(mapa5.delete("producto"));
console.log(mapa5.delete("color"));
console.log(mapa5);

// Método clear(): elimina todo de map.
const mapa6 = new Map([
    ["animal", "perro"],
    ["animal2", "cocodrilo"]
]);
mapa6.clear();
console.log(mapa6);