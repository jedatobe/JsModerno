//  WEB STORAGE API: SESSIONSTORAGE

const lenguajes = ["JavaScript", "PHP", "Python", "Java", "C++", "Go", "R", "SQL",];
sessionStorage.setItem("lenguajes", JSON.stringify(lenguajes));

const obtenerLenguajes = sessionStorage.getItem("lenguajes");
console.log(obtenerLenguajes);