// MODIFICAR EL FORMATO PREDETERMINADO DE LAS FECHAS Y HORAS

// toDateString(): devuelve formato sólo de fecha
const date = new Date(2025, 01, 09);
console.log(date.toDateString());

// toUTCString(): devuelve la fecha utilizando formato UTC
const d = new Date();
console.log(d.toUTCString());

// toTimeString(): devuelve formato sólo de hora
// const hora = new Date();
// console.log(hora.toTimeString());

// toLocaleTimeString(): devuelve formato sólo de hora, pero en el formato regional actual
const hora = new Date();
console.log(hora.toLocaleTimeString('es-CO'));