// OBTENER EL VALOR DE LOS CAMPOS DE FORMULARIO: CAMPOS ALFANUMÉRICOS

/* Los elementos <input> alfanuméricos y textarea son:
- Campos alfanumérico corto: <input type="text">	
- Texto para búsquedas:	<input type="search">	
- Número de teléfono o móvil:	<input type="tel">
- Dirección URL:	<input type="url">
- Dirección de correo email:	<input type="email">
- Contraseña:	<input type="password">
- Campo oculto (no mostrar al usuario):	<input type="hidden">	
- Campo alfanumérico extenso:	<textarea>
*/
const button = document.querySelector('#send')

button.addEventListener('click', (e) => {
    e.preventDefault()

    const name = document.querySelector('#nombre').value
    const message = document.querySelector('#demo')

    message.innerHTML += name + '<br>'
})

button.addEventListener('click', (e) => {
    e.preventDefault()

    const textArea = document.querySelector('#mensaje').value
    const message = document.querySelector('#demo')

    message.innerHTML += textArea
})