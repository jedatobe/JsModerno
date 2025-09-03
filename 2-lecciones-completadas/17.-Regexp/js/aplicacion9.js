// EJEMPLOS COMUNES DE EXPRESIONES REGULARES

// Validación: números
const numeros = "0123456789";
const comprobar = /^\d+$/g;
console.log(numeros.match(comprobar));

// Validación: Nombres y Apellido(s)
const nombresApellidos = "Nicole O'Hara-Mañán";
const comprobar2 = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'-\s]+$/gi;
console.log(nombresApellidos.match(comprobar2));

// Validación: Nombre de Usuario 
const nombreUsuario = "admin_21";
const comprobar3 = /^[a-z0-9_-]{3,16}$/g;
console.log(nombreUsuario.match(comprobar3));

// Validación: Email
const email = "ejemplo.10@email.com";
const comprobar4 = /[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,}$/gi
console.log(email.match(comprobar4));

// Validación: Contraseña
const password = "holaMundo!@#90412";
const comprobar5 = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
console.log(password.match(comprobar5));

// Validación: Teléfono
const telefono = "1-(234)-567-8910";
const comprobar6 = /^[\d{1}]?[- ]?\(?\d{3}\)?[- ]?(\d{3})[- ]?(\d{4})$/g;
console.log(telefono.match(comprobar6));


















// // Validación: Números
// const validarNumero = document.querySelector('#validarNum');
// validarNumero.addEventListener('input', funcionValidarNum);

// function funcionValidarNum(){
//     const introduceNumero = document.querySelector('#validarNum').value;

//     //Expresion Regular Solo Números
//     const ExpRegSoloNumeros="^[0-9]+$";

//     //Evaluación de Cadena Valida de Solo Números 
//     if(introduceNumero.match(ExpRegSoloNumeros) != null){
//         const result = document.querySelector('#demo');
//         result.innerHTML = "Número válido";
//      }

//      //Evaluación de Cadena Invalida de Solo Números     
//      if(introduceNumero.match(ExpRegSoloNumeros) == null){
//         const result = document.querySelector('#demo');
//         result.innerHTML = "Debes introducir un número válido";
//      }
// }

// // Validación: Nombres / Apellido(s)
// const nombre = document.querySelector('#validarNombre');
// nombre.addEventListener('input', funcionValidarNomb);

// function funcionValidarNomb(){
//     const introduceNombre = document.querySelector('#validarNombre').value;

//     //Expresión Regular Nombres y Apellidos
//     const ExpRegNomApe="^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";

//     //Evaluación de Cadena Valida de Nombres y Apellidos
//     if(introduceNombre.match(ExpRegNomApe)!=null){
//         const result = document.querySelector('#demo');
//         result.innerHTML = "Nombres y Apellidos Válido";
//     }    
//     //Evaluación de Cadena Invalida de Nombres y Apellidos   
//     if(introduceNombre.match(ExpRegNomApe)==null){
//         const result = document.querySelector('#demo');
//         result.innerHTML = "Nombres y Apellidos Invalido";
//     }
// }

// // Validación: Email
//     //Expresión Regular Email
//     const ExpRegEmail= "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
    
//     //Evaluación de Cadena Valida de Email 
//     if(EmailValido.match(ExpRegEmail)!=null)
//         console.log("Email Válido");
    
//     //Evaluación de Cadena Invalida de Email    
//     if(EmailInvalido.match(ExpRegEmail)==null)
//         console.log("Email Invalido");