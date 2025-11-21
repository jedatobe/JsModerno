// SETTERS:  MÉTODOS PARA CAMBIAR FECHAS

// Método setDate(): modifica el día de la fecha especificada.
const cambiarDia = new Date();
cambiarDia.setDate(15);
console.log(cambiarDia.toDateString());

// Sumar o restar días a una fecha
const fechaActual = new Date();
fechaActual.setDate(fechaActual.getDate() + 60);
console.log(fechaActual);

// Método setMonth(): modifica el mes de la fecha especificada (enero = 0, febrero = 1...diciembre = 11).
const cambiarMes = new Date();
cambiarMes.setMonth(11);
console.log(cambiarMes);

// Método setFullYear(): cambia el año de la fecha especificada. Formato de 4 dígitos.
const cambiarAnnio = new Date();
cambiarAnnio.setFullYear("2010");
console.log(cambiarAnnio);

// Método setHours(): Altera la hora de la fecha actual.
const cambiarHora = new Date();
cambiarHora.setHours(16);
console.log(cambiarHora);

// Método setMinutes(): modifica los minutos de la fecha actual.
const cambiarMinutos = new Date();
cambiarMinutos.setMinutes(30);
console.log(cambiarMinutos);

// Método setSeconds(sec): cambia los segundos de la fecha actual.
const cambiarSegundos = new Date();
cambiarSegundos.setSeconds(30);
console.log(cambiarSegundos);

// Método setMilliseconds(ms): modifica los milisegundos de la fecha actual.
const cambiarMilisegundos = new Date();
cambiarMilisegundos.setMilliseconds(500);
console.log(cambiarMilisegundos);