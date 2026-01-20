// SELECCIONAR ELEMENTOS DEL DOM (MÉTODOS MODERNOS)

// Método querySelector(): busca el primer elemento que coincide con el selector CSS especificado.
let item = document.querySelector('*')
console.log(item);

item = document.querySelector('h2')
console.log(item);

item = document.querySelector('.menu')
console.log(item);

item = document.querySelector('#principal')
console.log(item);

item = document.querySelector('div p')
console.log(item);

item = document.querySelector('a[href]')
console.log(item);

item = document.querySelector('a[href="acerca.html"]')
console.log(item);

item = document.querySelector('ul > li')
console.log(item);

item = document.querySelector('h2 + p')
console.log(item);

item = document.querySelector('li:nth-child(2)')
console.log(item);

item = document.querySelector('section .info')
console.log(item);

// Método querySelectorAll(): busca todos los elementos que coinciden con el selector CSS especificado.
let items = document.querySelectorAll('*')
console.log(items);

items = document.querySelectorAll('h2')
console.log(items);

items = document.querySelectorAll('.menu')
console.log(items);

items = document.querySelectorAll('section .info')
console.log(items);