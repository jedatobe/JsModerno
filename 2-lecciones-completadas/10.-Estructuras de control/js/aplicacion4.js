// CLÁUSULA ELSE IF

/* Sintaxis: if (condición1) {sentencia1} else if (condición2) {sentencia2} else if (condición3){sentencia3}...else{sentenciaN} */
const calificacion = 8;
if(calificacion <= 6){
    console.log('Su calificación es Insuficiente');
} else if(calificacion == 7){
    console.log('Su calificación es Suficiente');
} else if(calificacion == 8){
    console.log('Su calificación es Buena');
} else if(calificacion == 9){
    console.log('Su calificación es Muy buena');
} else {
    console.log('Su calificación es Sobresaliente');
}