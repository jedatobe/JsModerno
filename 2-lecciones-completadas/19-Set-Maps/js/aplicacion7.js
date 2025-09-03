// OPERACIONES BÁSICAS CON EL OBJETO MAP

// Convertir las claves de un mapa en un array
const mapa = new Map([
    ["nombre", "Jessie"],
    ["país", "Canadá"],
    ["edad", 30]
]);
const arreglo = [...mapa.keys()];
console.log(arreglo);

// Convertir los valores de un mapa en un array
const arreglo2 = [...mapa.values()];
console.log(arreglo2);

// Convertir un objeto en un mapa
const capitales = {
    "Argentina": "Buenos Aires",
    "Colombia": "Bogotá",
    "España": "Madrid",
    "Estados Unidos de América": "Washington D.C",
    "México": "Ciudad de México",
    "Perú": "Lima",
    "República Dominicana": "Santo Domingo",
}
const mapa2 = new Map(Object.entries(capitales));
console.log(mapa2);

// Convertir un mapa en un objeto
const productos = new Map([
    ["SmartTV", 500],
    ["Monitor", 100],
    ["Laptop", 450]
]);
const objeto = Object.fromEntries(productos);
console.log(objeto);