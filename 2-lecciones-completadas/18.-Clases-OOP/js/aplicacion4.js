// PROPIEDADES Y MÉTODOS ESTÁTICOS

class fecha{
    // Propiedad estática
    static mensaje = "Bienvenidos al curso de Marketing Digital";

    // Método estático
    static hoy(){
        const fechaHoy = new Date();
        const dia = fechaHoy.getDate();
        const mes = fechaHoy.getMonth();
        const año = fechaHoy.getFullYear();
        return `La fecha de hoy es: ${mes}-${dia}-${año}`
    }
}
console.log(fecha.mensaje);
console.log(fecha.hoy());