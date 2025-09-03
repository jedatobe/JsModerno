// MÉTODOS DE UN OBJETO

const usuario = {
    nombre: "Stephanie",
    pais: "México",
    usuarioDestacado: true,
    saludo: function() {
        console.log(`Hola, la sesión ha sido iniciada como: ${usuario.nombre.toUpperCase()}`)
    }
}
usuario.saludo();
// usuario["saludo"](); // Notación con corchetes

// Añadir un nuevo método a un objeto
usuario.edad = 28;
usuario.miEdad = function() {
    console.log(`Hola ${usuario.nombre}, tienes ${usuario.edad} años`);
}
usuario.miEdad();

// USAR THIS PARA REFERENCIAS A OBJETOS
const gerente = {
    nombre: "Anna",
    puesto: "Gerente financiero",
    mensajeBienvenida: function() {
        console.log(`Hola mi nombre es ${this.nombre} y ocupo el puesto de ${this.puesto}`)
    }
}
gerente.mensajeBienvenida();

const pasante = {
    nombre: "Robert",
    puesto: "Pasante analista financiero",
    mensajeBienvenida: function() {
        console.log(`Hola mi nombre es ${this.nombre} y ocupo el puesto de ${this.puesto}`)
    }
}
pasante.mensajeBienvenida();