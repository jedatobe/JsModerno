// EXPORTACIÓN POST-DECLARACIÓN

// adición o suma
function sum(a, b){
    return a + b;
}

// Calcular área del triángulo
function areaTriangulo(altura, base){
    return (altura * base) / 2;
}

// Calcular raíz cuadrada
function raizCuadrada(num){
    return Math.sqrt(num);
}

// Opción #1
// export {sum};
// export {areaTriangulo};
// export {raizCuadrada};

// Opción #2
export {sum, areaTriangulo, raizCuadrada};