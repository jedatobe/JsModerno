// ITERACIÓN SOBRE MAP

const productos = new Map([
    ["laptop", 500],
    ["tablet", 599],
    ["monitor", 100]
]);

// map.keys(): devuelve un iterable con las claves.
for(const producto of productos.keys()){
    console.log(producto);
}

// map.values(): devuelve un iterable con los valores.
for(const precio of productos.values()){
    console.log(precio);
}

// map.entries(): devuelve un iterable para las entradas [clave, valor].
for(const entradas of productos.entries()){
    console.log(entradas);
}

// Iterar con .forEach()
productos.forEach(function(valor, clave){
    console.log(`${clave}:${valor}`);
});