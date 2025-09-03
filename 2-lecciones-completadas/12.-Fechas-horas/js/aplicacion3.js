// GETTERS: MÉTODOS PARA OBTENER FECHAS

// Método getDate(): devuelve el día del mes.
const diaHoy = new Date();
console.log(`Hoy es el día ${diaHoy.getDate()} del mes actual`);

// El método getDay(): devuelve el día de la semana. El día 0 es el Domingo... el día 6 es el Sábado.
const diaSemana = new Date();
console.log(`Hoy lunes, corresponde al día ${diaSemana.getDay()} de la semana en JS`);

// Método getMonth(): devuelve el mes. El mes 0 es Enero... el mes 11 es Diciembre.
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre","octubre", "noviembre", "diciembre",];
const mesActual = new Date();
console.log(meses[mesActual.getMonth()]);

// Devolver el mes actual en formato de número
console.log(mesActual.getMonth());

// Método getFullYear(): devuelve el año con 4 cifras.
const annioActual = new Date();
console.log("El año actual es " + annioActual.getFullYear());

// Método getHours(): devuelve la hora.
const hora = new Date();
console.log(hora.getHours());

// Método getMinutes(): devuelve los minutos.
const minutos = new Date();
console.log(minutos.getMinutes());

// Método getSeconds(): devuelve los segundos.
const segundos = new Date();
console.log(segundos.getSeconds());

// Método getMilliseconds(): devuelve los milisegundos.
const miliSegundos = new Date();
console.log(miliSegundos.getMilliseconds());

/* Método getTime(): Devuelve la cantidad de segundos transcurridos desde el 1 de enero de 1970.
Se emplea habitualmente para cálculos con fechas.*/
const fechaECMASCRIPT = new Date();
console.log(fechaECMASCRIPT.getTime());