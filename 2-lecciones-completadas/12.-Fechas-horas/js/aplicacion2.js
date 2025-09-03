// MODIFICAR EL FORMATO PREDETERMINADO DE LAS FECHAS Y HORAS

// toDateString(): devuelve formato sólo de fecha
const fecha = new Date(2025, 1, 9);
console.log(fecha.toDateString());

// toUTCString(): devuelve la fecha utilizando formato UTC
const d = new Date();
console.log(d.toUTCString());

// toTimeString(): devuelve formato sólo de hora
const hora = new Date();
console.log(hora.toTimeString());

// toLocaleTimeString(): devuelve formato sólo de hora, pero en el formato regional actual
const x = new Date();
console.log(x.toLocaleTimeString("en-US"));
console.log(x.toLocaleTimeString("en-GB"));
console.log(x.toLocaleTimeString("ko-KR"));
console.log(x.toLocaleTimeString("ar-AE"));