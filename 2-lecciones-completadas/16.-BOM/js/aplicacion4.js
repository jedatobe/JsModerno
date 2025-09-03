// EL OBJETO LOCATION

// window.location.href: Muestra la URL completa de la página actual.
const url = location.href;
console.log(`La URL completa de esta página web es ${url}`);

// window.location.pathname: Muestra la ruta de la URL de la página actual.
const rutaPagina = location.pathname;
console.log(`La ruta de esta página web es ${rutaPagina}`);

// window.location.protocol: Muestra el protocolo empleado por la URL.
const protocolo = location.protocol;
console.log(`El protocolo de la URL es ${protocolo}`);

// Método assign(): carga la página que se pasa como parámetro.
location.assign("https://google.com");