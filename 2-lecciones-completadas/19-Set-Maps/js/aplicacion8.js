// WEAKMAP

const mascostas = new WeakMap();
const perro = {nombre: "Cooper"};
const gato = {nombre: "Milo"};
const hamster = {nombre: "Jojo"};

// Métodos de WeakMap:.get(), .set(), .has() y .delete()
mascostas.set(perro, "Objeto1");
mascostas.set(gato, "Objeto2");
mascostas.set(hamster, "Objeto3");
console.log(mascostas);

console.log(mascostas.get(perro));
console.log(mascostas.has(gato));
console.log(mascostas.delete(hamster));