// GETTERS Y SETTERS

class usuario {
    constructor(nombre){
        this._nombre = nombre;
    }
    get minombre(){
        return this._nombre;
    }
    set minombre(valor){
        return this._nombre = valor;
    }
}
const usuario1 = new usuario("Jane H.");
usuario1.minombre = "Jane S.";
console.log(usuario1.minombre);