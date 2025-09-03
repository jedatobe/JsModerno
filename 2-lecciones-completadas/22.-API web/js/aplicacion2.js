// CLIPBOARD API

const btn = document.querySelector("button");
btn.addEventListener("click", copiarAlPortapapeles);

async function copiarAlPortapapeles(){
  const copiarTexto = document.querySelector("#content").innerText;
  try{
    await navigator.clipboard.writeText(copiarTexto);
    document.querySelector("#demo").innerHTML = "Copiado al portapapeles";
    setTimeout(()=>{
      document.querySelector("#demo").innerHTML = "";
    }, 3000);
  }
  catch(error){
    document.querySelector("#demo").innerHTML = "Error al copiar al portapapeles!";
  }
}
document.querySelector("#content").addEventListener("copy", ()=>{
  document.querySelector("#demo").innerHTML = "Copiado al portapapeles";
    setTimeout(()=>{
      document.querySelector("#demo").innerHTML = "";
    }, 3000);

});