// PROPAGACIÓN Y CAPTURA DE EVENTOS EN JAVASCRIPT

// Propagación de eventos
const greenContainer = document.querySelector('.contenedor1')
greenContainer.addEventListener('click', (e) => {
    e.stopPropagation()
    alert('Pulsaste sobre el contenedor verde')
})
const text = document.querySelector('#texto1')
text.addEventListener('click', (e) => {
    e.stopPropagation()
    alert('Pulsaste sobre el elemento de color de fondo blanco')
})

//Captura de eventos
const blueContainer = document.querySelector('.contenedor2')
blueContainer.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    alert('Pulsaste sobre el contenedor azul')
})
const text2 = document.querySelector('#texto2')
text2.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    alert('Pulsaste sobre el elemento de color de fondo blanco')
})