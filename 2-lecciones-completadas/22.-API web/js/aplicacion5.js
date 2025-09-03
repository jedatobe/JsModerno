// HTML DRAG AND DROP API

const permitirArrastrarSoltar = (e)=>{
  e.preventDefault();
}

const arrastrar = (e)=>{
  e.dataTransfer.setData("text", e.target.id);
}

const soltar = (e)=>{
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
}

const contenedores = document.querySelectorAll("div");
contenedores.forEach((div)=>{
  div.addEventListener("drop", soltar);
  div.addEventListener("dragover", permitirArrastrarSoltar);
});

const imagen = document.querySelector("img");
imagen.addEventListener("dragstart", arrastrar);