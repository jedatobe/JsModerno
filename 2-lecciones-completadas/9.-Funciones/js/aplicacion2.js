// SCOPE O ÁMBITO DE LAS VARIABLES

// Ámbito global
let nombre = "Mike";
function mostrarNombre(){
    console.log(nombre);
}
mostrarNombre();
console.log(nombre);

// Ámbito local: alcance de la función
function mostrarMensaje(){
    let nombre2 = "Elizabeth";
    console.log(nombre2); // Podemos acceder a la variable
}
mostrarMensaje();
// console.log(nombre2); // No podemos acceder a la variable

// Si se declara una variable local con el mismo nombre que una global, la local sobreescribe la global
let nombreUsuario = "John";
function saludo(){
    let nombreUsuario = "Bob";
    console.log(nombreUsuario);
}
saludo();
console.log(nombreUsuario);

// Ámbito de bloque (block scope)
function edad(){
    if(true){
        let miEdad = 33;
        console.log(miEdad);
    }
    // console.log(miEdad); No se puede acceder a la variable
}
edad();

function edad2(){
    if(true){
        var miEdad2 = 33;
        console.log(miEdad2);
    }
    console.log(miEdad2);
}
edad2();