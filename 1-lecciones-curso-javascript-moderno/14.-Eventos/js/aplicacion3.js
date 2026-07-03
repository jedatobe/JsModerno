// EVENTOS DE RATÓN

// Click: se produce cuando se pulsa el botón izquierdo del ratón.
const button = document.querySelector('#btn1');
button.addEventListener('click', (e) => {
    document.querySelector('#myDropdown').classList.toggle('mostrarMenu');
});

// dblclick: se produce cuando se pulsa dos veces el botón izquierdo del ratón.
document.querySelector('#dobleClick').addEventListener('dblclick', (e) => {
    e.currentTarget.style.color = 'blue';
    e.currentTarget.style.fontSize = '2rem';
});

/* mousedown: Se produce cuando se pulsa cualquier botón del ratón.
mouseup:se produce cuando se suelta cualquier botón del ratón que haya sido pulsado.
*/
const downUpEvent = document.querySelector('#downUp');
downUpEvent.addEventListener('mousedown', (e) => {
    e.currentTarget.innerHTML = 'Estás presionando un botón del mouse'
});
downUpEvent.addEventListener('mouseup', (e) => {
    e.currentTarget.innerHTML = 'Soltaste un botón del mouse'
});

/* mouseover: se produce cuando el usuario mueve el puntero hacia un lugar en el interior del elemento.
 mouseout: se produce cuando el puntero del ratón se encuentra en el interior de un elemento y el usuario mueve el puntero a un lugar fuera de ese elemento.
*/
const overOutEvent = document.querySelector('.overOut');
overOutEvent.addEventListener('mouseover', (e) => {
    e.currentTarget.innerHTML = 'El puntero está sobre este texto';
});
overOutEvent.addEventListener('mouseout', (e) => {
    e.currentTarget.innerHTML = 'El puntero ya no está sobre este texto';
});

// contextmenu: se produce cuando el usuario presiona el botón derecho del ratón sobre un elemento.
document.querySelector('#menuContextual').addEventListener('contextmenu', (e) => {
    e.preventDefault();
})

// mousemove: se produce (de forma continua) cuando el puntero del ratón se encuentra sobre un elemento.
document.querySelector('#figura').addEventListener('mousemove', (e) => {
    const x = document.querySelector('#coordenadas');
    x.innerText = `Coordenadas de la ventana X/Y: ${e.clientX}, ${e.clientY}
    Coordenadas de la pantalla X/Y: ${e.screenX}, ${e.screenY}
    Coordenadas de la página X/Y: ${e.pageX}, ${e.pageY}`;
});

// Detectar botones del ratón.
const buttonDetected = document.querySelector('#btn');
buttonDetected.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
buttonDetected.addEventListener('mouseup', (e) => {
    const text = document.querySelector('#mensaje');
    if (e.button == 0) {
        text.textContent = 'Presionaste el botón izquierdo';
    } else if (e.button == 1) {
        text.textContent = 'Presionaste el botón central';
    } else if (e.button == 2) {
        text.textContent = 'Presionaste el botón derecho';
    }
});

// Detectar tecla modificadoras
const modifyKey = document.querySelector('#btn2');
modifyKey.addEventListener('click', (e) => {
    const keys = []
    if (e.shiftKey) {
        keys.push('Shift');
    }
    if (e.ctrlKey) {
        keys.push('Ctrl');
    }
    if (e.altKey) {
        keys.push('Alt');
    }
    const result = document.querySelector('#mensaje2');
    result.textContent = 'Presionaste las teclas: '+ keys.join(' ')
})