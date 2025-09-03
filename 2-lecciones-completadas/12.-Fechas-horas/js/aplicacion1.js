// OBJETO DATE()

/* Sintaxis: 
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds) */

// new Date(): Sin argumentos – crea un objeto Date para la fecha y la hora actuales:
const fecha = new Date();
console.log(fecha);

// new Date(date string): Convierte automáticamente un string a fecha.
const fechaString = new Date("2030/03/12");
console.log(fechaString);

const fechaString2 = new Date("March 12, 2030");
console.log(fechaString2);

/* new Date(year,month,day,hours,minutes,seconds,ms): Crea una fecha con los componentes pasados 
como argumentos en la zona horaria local. */
const a = new Date(2050,11);
console.log(a);

// Autocorrección
const b = new Date(2035,5,32, 16,35,3);
console.log(b);