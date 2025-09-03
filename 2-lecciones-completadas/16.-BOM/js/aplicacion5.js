// EL OBJETO NAVIGATOR

// navigator.cookieEnabled: Boolean que indica si las cookies están habilitadas.
const cookies = navigator.cookieEnabled;
if(cookies){
    console.log("Las cookies están habilitadas")
} else{
    console.log("Las cookies están deshabilitadas, por favor, asegúrate de habilitarlas para poder visualizar esta página web")
}

// navigator.onLine: Boolean que indica si el navegador está conectado a Internet.
const conectado = navigator.onLine;
const resultado = conectado ? "El navegador está online" : "El navegador está offline o se ha perdido la conexión a Internet";
console.log(resultado);

// navigator.language: Cadena de texto que representa el idioma del navegador.
const idiomaNavegador = navigator.language;
console.log(`El idioma por defecto de este navegador es ${idiomaNavegador}`);

// navigator.userAgent: Verifica el agente de usuario del navegador del usuario.
const nombreNavegador = navigator.userAgent;
if(nombreNavegador.indexOf("Opera") != -1 ||  nombreNavegador.indexOf("OPR") != -1){
    console.log("El usuario está utilizando el navegador Opera");
} else if(nombreNavegador.indexOf("Firefox") != -1){
    console.log("El usuario está utilizando el navegador Firefox");
} else if(nombreNavegador.indexOf("Chrome") != -1){
    console.log("El usuario está utilizando el navegador Google Chrome");
} else{
    console.log("El usuario está utilizando un navegador diferente de Opera, Firefox o Google Chrome");
}