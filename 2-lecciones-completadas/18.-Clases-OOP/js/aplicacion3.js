// MÉTODOS DE CLASE

class rectangulo {
    constructor(altura, base){
        this.altura = altura;
        this.base = base;
    }
    // Métodos de clase
    calcArea(){
        return this.altura * this.base;
    }
    calcPerimetro(){
        return 2 * (this.altura + this.base)
    }
}
const rectangulo1 = new rectangulo(10, 18);
console.log(`El área del rectángulo es igual a ${rectangulo1.calcArea()} cm2`);
console.log(`El perímetro del rectángulo es igual a ${rectangulo1.calcPerimetro()} cm`);

// Métodos privados
class persona{
    #nombre;
    #apellido;
    constructor(nombre, apellido){
        this.#nombre = nombre;
        this.#apellido = apellido
    }
    #nombreApellido(){
        return `${this.#nombre} ${this.#apellido}`;
    }
    fullName(){
        return this.#nombreApellido();
    }
}
const persona1 = new persona("Mark", "Smith");
console.log(persona1.fullName());