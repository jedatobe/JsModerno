// BUCLE WHILE

// Sintaxis: while (condition) {code block to be executed}
let i = 0;
while(i <= 10){
    console.log(i);
    i+= 3;
}

// Mostrar los números pares e impares
let numeros = 0;
while(numeros <= 10){
    if(numeros % 2 == 0){
        console.log(`${numeros} es un número par.`);
    } else{
        console.log(`${numeros} es un número impar.`);
    }
    numeros++;
}