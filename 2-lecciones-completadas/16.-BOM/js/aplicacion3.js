// EL OBJETO SCREEN

// screen.width / screen.height: devuelven la anchura total en px y altura total en px de la pantalla del usuario.
// const anchuraTotal = screen.width;
// alert(`La anchura total de esta pantalla es igual a ${anchuraTotal}px`);

// const alturaTotal = screen.height;
// alert(`La altura total de esta pantalla es igual a ${alturaTotal}px`);

// screen.availWidth / screen.availHeight: devuelven la anchura y altura de la pantalla pero excluyendo la barra de tareas.
// const anchuraDisponible = screen.availWidth;
// alert(`La anchura disponible de esta pantalla es igual a ${anchuraDisponible}px`);

// const alturaDisponible = screen.availHeight;
// alert(`La altura disponible de esta pantalla es igual a ${alturaDisponible}px`);

// screen.colorDepth: devuelve el número de bits que utiliza la pantalla para desplegar un color.
const profundidadColor = screen.colorDepth;
alert(`La profundidad de color de esta pantalla es igual a ${profundidadColor}`);