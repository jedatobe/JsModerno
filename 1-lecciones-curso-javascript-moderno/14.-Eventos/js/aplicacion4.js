// EVENTOS DE TECLADO

/* Keydown: se produce cuando se presiona cualquier tecla. También se produce de forma continua si se mantiene pulsada una tecla.
Keyup: se produce cuando se suelta una tecla que estaba pulsada. */

const key = document.querySelector('input')
key.addEventListener('keydown', (e) => {
    const keyValue = e.key
    console.log(`Presionaste la tecla ${keyValue}`)
})

key.addEventListener('keyup', (e) => {
    const keyCode = e.code
    console.log(`El código de esta tecla ${keyCode}`)
})

// Detectar tecla Caps Lock
const mayusDetected = document.querySelector('.detectarTeclas')
const message = document.querySelector('#mensaje')

mayusDetected.addEventListener('keydown', (e) => {
    if (e.getModifierState('CapsLock')) {
        message.style.color = 'red'
        message.innerHTML = 'La tecla Caps Lock está activada'
    } else {
        message.innerHTML = ''
    }
})