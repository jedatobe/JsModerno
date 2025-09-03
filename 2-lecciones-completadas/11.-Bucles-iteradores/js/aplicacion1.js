// BUCLE FOR

// Sintaxis: for (inicializador; condición de salida; expresión final) { Código a ejecutar }
for(let i = 0; i <= 10; i++){
    console.log("Este bucle muestra el número: " + i);
}

// Mostrar los números en orden descendente
for(let i = 10; i >= 0; i--){
    console.log(i);
}

// Mostrar números impares
for(let i = 1; i < 10; i+= 2){
    console.log(i);
}

// Mostrar números pares
for(let i = 0; i <= 10; i+= 2){
    console.log(i);
}

// Mostrar números pares e impares
for(let i = 0; i<= 10;i++){
    if(i % 2 == 0){
        console.log(`${i} es un número par.`);
    } else {
        console.log(`${i} es un número impar.`);
    }
}

// Omitir inicialización
let j = 0;
for(; j <= 5; j++){
    console.log(j);
}

// Omitir actualización
let k = 0;
for(; k <= 12;){
    console.log(k++);
}

// Mostrar la tabla de multiplicar de un número dado
const multiplicar = function(a, b){
    for(let i = 0; i <= b; i++){
            console.log(`${a} x ${i} = ${a * i}`);
    }
}

multiplicar(8, 12);