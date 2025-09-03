// HERENCIA DE CLASES

class persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludo(){
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años de edad.`;
    }
}
// Extender la clase
class profesion extends persona{
    constructor(nombre, edad, ocupacion){
        super(nombre, edad);
        this.ocupacion = ocupacion;
    }
    mostrarinformacion(){
        return `Trabajo como: ${this.ocupacion}`;
    }
    saludo(){
        return `Nombre: ${this.nombre} Edad: ${this.edad} años.`;
    }
}
const profesion1 = new profesion("Amy S.", 35, "Científico de datos");
console.log(`${profesion1.saludo()} ${profesion1.mostrarinformacion()}`);