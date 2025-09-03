// WEB NOTIFICATIONS API

const btn = document.querySelector("button");
btn.addEventListener("click", recibirNotificaciones);

async function recibirNotificaciones(){
   // Comprobar si el usuario concede permiso
   const permiso = await Notification.requestPermission();
   if(permiso == "granted"){
      //  Crear notificación
      const notificacion = new Notification("Curso de JavaScript", {
         body: "Este es un demo de Notification API",
         icon: "img/js.png",
         vibrate: [200, 100, 200],
         silent: false,
      });
      notificacion.addEventListener("click", ()=>{
         window.open("https://google.com");
      });
   }
}