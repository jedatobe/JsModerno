// PROPIEDADES DE CLASE

class usuario{
    nombre; // Propiedad sin definnir
    perfil = "Membresía básica"; // Propiedad definida

    constructor(nombre){
        this.nombre = nombre;
        console.log(`Bienvenido(a) ${this.nombre}`);
    }
}
const usuario1 = new usuario("Johanna");
usuario1.perfil = "Membresía premium"; // Modificamos el valor de la propiedad perfil
console.log(`Tipo de suscripción: ${usuario1.perfil}`);

// Propiedades privadas
class empleado {
    #nombre;
    departamento = "Económico-financiero";

    constructor(nombre){
        this.#nombre = nombre;
        console.log(`Nombre: ${this.#nombre}`);
    }
}
const empleado1 = new empleado("Mario");
console.log(`Departamento: ${empleado1.departamento}`);