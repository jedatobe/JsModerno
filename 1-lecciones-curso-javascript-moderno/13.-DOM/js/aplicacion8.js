// ESTILOS Y CLASES

// style de un elemento
const header = document.querySelector('#seccionTres h2');
header.style.color = 'green';
header.style.fontSize = '2.5rem';

const button = document.querySelector('#seccionTres a');
button.style.backgroundColor = '#41db41';

// EL OBJETO CLASSLIST

const informationRequest = document.querySelector('#seccionCinco p');
informationRequest.classList.add('info', 'visible', 'especial');
informationRequest.classList.remove('visible');
informationRequest.classList.replace('info', 'important');

console.log(informationRequest.classList.contains('especial'));
console.log(informationRequest.classList.toggle('especial'));
console.log(informationRequest.classList.toggle('block'));