// CONDICIONAL SWITCH

// Sintaxis: switch (expresión) {case valor1: [break;] case valor2: [break;] ... case valorN: [break;] default:[break;] } //
const frutas = "manzanas";
switch(frutas){
    default:
        console.log(`Lo sentimos, no tenemos ${frutas} en nuestro inventario en este momento.`);
        break;
    case "naranjas": 
        console.log('Las naranjas tienen un precio de $2.31/libra.');
        break
    case "bananas":
        console.log('Las bananas tienen un precio de $1.15/libra.');
        break;
    case "manzanas":
        console.log('Las manzanas tienen un precio de $2.32/libra.');
        break;
    case "cerezas":
        console.log('Las cerezas tienen un precio de $1.96/libra.');
        break;
    case "mangos":
        console.log('Las mangos tienen un precio de $2.24/libra.');
        break;
    case "peras":
        console.log('Las peras tienen un precio de $1.80/libra.');
        break;            
}

// Los valores y el tipo de dato deben coincidir
const x = 1;
switch(x){
case "1":
    console.log('Este valor es correcto.');
    break;
case 2:
    console.log('Este valor es incorrecto.');
    break;
case 3:
    console.log('Este valor es incorrecto.');
    break;
default:
    console.log('No se ha encontrado un valor que coincida');
}

// Operación única con múltiples casos
const calificacion = 10;
switch(calificacion){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('Su calificación es Insuficiente.');
        break;
    case 7:
        console.log('Su calificación es Suficiente.');
        break;
    case 8:
        console.log('Su calificación es Buena.');
        break;
    case 9:
        console.log('Su calificación es Muy buena.');
        break;
    case 10:
        console.log('Su calificación es Sobresaliente.');
        break;
    default:
        console.log('Este valor no es correcto.');    
}