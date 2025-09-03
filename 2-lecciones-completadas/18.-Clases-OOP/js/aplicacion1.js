// DEFINIR CLASES
// Sintaxis: class ClassName { constructor() { ... }}

// Declaración de clases
class libro {
    constructor(titulo, autor, isbn, precio){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.precio = precio;
    }
}
const libro1 = new libro("El hombre en el castillo", "Phillip K. Dick", 9788445075616, "$20.00");
console.log(`${libro1.titulo} de ${libro1.autor} ISBN: ${libro1.isbn} Precio: ${libro1.precio}`);

const libro2 = new libro("Trilogía cósmica", "C.S. Lewis", 1400232252, "$28.00");
console.log(`${libro2.titulo} de ${libro2.autor} ISBN: ${libro2.isbn} Precio: ${libro2.precio}`);

// Expresión de clases
const cliente = class {
    constructor(nombre, ordenID){
        this.nombre = nombre;
        this.ordenID = ordenID;
    }
}
const cliente1 = new cliente("Natasha B.", 1234);
console.log(`Nombre: ${cliente1.nombre}, Número de orden: ${cliente1.ordenID}`);

const cliente2 = new cliente("Kazuumi T.", 6789);
console.log(`Nombre: ${cliente2.nombre}, Número de orden: ${cliente2.ordenID}`);