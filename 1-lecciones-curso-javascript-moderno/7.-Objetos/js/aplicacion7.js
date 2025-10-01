// DESESTRUCTURACIÓN DE OBJETOS (Sintaxis: const { var1, var2 } = { var1: …, var2… }

// Sintaxis clásica de JS
// const tablet = {
//     referencia: 098765432,
//     dimensiones: `10.2 pulgadas`,
//     memoria: `64 GB`,
//     precio: 300,
// }

// // Extraer datos del objeto
// const referencia = tablet.referencia
// const dimensiones = tablet.dimensiones
// const memoria = tablet.memoria
// const precio = tablet.precio

// console.log(referencia);
// console.log(dimensiones);
// console.log(memoria);
// console.log(precio);

// Sintaxis de JS moderno

const tablet = {
    referencia: 098765432,
    dimensiones: `10.2 pulgadas`,
    memoria: `64 GB`,
    precio: 300,
}

// Extraer datos del objeto
const {referencia: r, dimensiones: d, memoria: m, precio: p} = tablet

console.log(r);
console.log(d);
console.log(m);
console.log(p);

// Extraer solamente las propiedades que necesitamos
const directorio = {
    nombre: 'Stevie',
    apellido: 'McMiller',
    'numero Empleado': 0980,
    profesion: 'Científico de datos'
}

const {nombre, profesion} = directorio
console.log(nombre);
console.log(profesion);

// Declarar variables antes de asignarlas
const usuario = {
    nombreUsuario : `Jessica`,
    perfil: `Usuario destacado`
}

let nombreUsuario, perfil
({nombreUsuario, perfil} = usuario)

console.log(nombreUsuario);
console.log(perfil);

// Asignar valores predeterminados
const user = {
    sesionIniciada: true,
    email: 'email@email.com',
}

const {sesionIniciada, email, tipoCuenta = `premiun`} = user

console.log(sesionIniciada);
console.log(email);
console.log(tipoCuenta);

// Sintaxis del resto (...)
const mascota = {
    tipo : `perro`,
    raza : `golden retriever`,
    altura : `61 cm`,
    peso : `32 kg`,
    edad : 4,
}

const {tipo, edad, ...otras} = mascota

console.log(tipo);
console.log(edad);
console.log(otras);
