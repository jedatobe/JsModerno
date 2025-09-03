// OBJETO WEAKSET

const computadores = {tipo: "laptops"};
const servidores = {tipo: "servidores"};
const componentes = {tipo: "memorias"};
const productos = new WeakSet([computadores, servidores]);

if(productos.has(computadores)){
    console.log("Tenemos este producto disponible para la venta");
} else{
    console.log("Este producto no está disponible");
}