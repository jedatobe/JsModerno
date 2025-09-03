// OBJETOS ANIDADOS

const laptop = {
    pantalla: "15 pulgadas",
    ["disco duro"]: "1TB",
    CPU: "3.1 GHz",
      medidas: {
        peso: "2.8 libras",
        anchura: "11.98 pulgadas",
        altura: "0.16 - 0.63 pulgadas",
      }
}


// Modificar el valor de una propiedad
laptop.medidas.peso = "3 libras";

// Añadir nueva propiedad
laptop.medidas.color = "negro";

// Acceder a todas las propiedades del objeto "laptop"
console.log(laptop);

// Acceder a todas las propiedades del objeto "medidas"
console.log(laptop.medidas);

// Acceder a la propiedad "altura"
console.log(laptop.medidas.altura);