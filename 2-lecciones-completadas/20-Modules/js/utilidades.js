// EXPORTAR CÓDIGO

// Exportar variable
export const nombre = "Cynthia";

// Exportar arreglo
export const producto = ["tablet", "laptop", "desktop", "printer"];

//  Exportar objeto
export const libro = {
    título: "Trilogía cósmica",
    autor: "C.S. Lewis",
    género: "Ciencia ficción",
}

// Exportar función
export const multiplicar = function(a, b){
    return a * b;
}

// Exportar clase
export class persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrarinfo(){
        return `Nombre: ${this.nombre} Edad: ${this.edad}`;
    }
}

// Exportar herencia
export class usuario extends persona{
    constructor(nombre, edad, ocupacion){
        super(nombre, edad);
        this.ocupacion = ocupacion
    }
    mostrarinfo(){
        return `Nombre: ${this.nombre} Edad: ${this.edad} Ocupación: ${this.ocupacion}`
    }
}