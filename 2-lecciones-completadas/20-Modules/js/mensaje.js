// EXPORTACIÓN POR DEFECTO

const presentacion = (minombre, miedad) => {
    return `${minombre} tiene ${miedad} años de edad`;
}

const mensajeBienvenida = function(){
    return "Hola te damos la bienvenida al curso";
}

export default presentacion;
export {mensajeBienvenida};