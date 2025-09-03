// ITERACIÓN SOBRE SET

// Iterar entradas de Set con for...of
const usuarios = new Set(["Anna", "Lucas", "Kazuumi", "Vincent"]);
for(const usuario of usuarios){
    console.log(usuario);
}

// Iterar entradas de Set con forEach()
const productos = new Set(["Tablet", "Desktop", "Laptop", "Teclado"]);
productos.forEach(function(valor){
    console.log(valor);
});

// Iterar entradas de Set con .values()
const num = new Set([29, 24, 90, 21, 31]);
for(const x of num.values()){
    console.log(x);
}

// Iterar entradas de Set con .entries()
const letras = new Set(["a", "b", "c", "d", "e"]);
for(const letra of letras.entries()){
    console.log(letra);
}