// NAVEGAR POR EL ÁRBOL DEL DOM

/*
Propiedades de elementos HTML
1. parentElement: retorna el elemento padre. Si no existe devuelve null. 
2. children: retorna una lista de elementos HTML hijos.
3. firstElementChild: devuelve el primer elemento hijo. Si no existe devuelve null.
4. lastElementChild: devuelve el último elemento hijo. Si no existe devuelve null.
5. previousElementSibling: retorna el elemento hermano anterior al especificado dentro de la lista de hijos de su padre. Null si no lo tiene.
6. nextElementSibling: devuelve el elemento hermano inmediatamente posterior al especificado dentro de la lista de hijos de su padre. Null si 
no lo tiene.*/
let elements = document.body.parentElement;
elements = document.body.children;
elements = document.body.firstElementChild;
elements = document.body.lastElementChild
elements = document.body.children[1];
elements = document.body.children[2];
elements = document.body.previousElementSibling;
elements = document.body.nextElementSibling;
console.log(elements);

// Acceder a los elementos hijos de esta sección

let staff = document.querySelector('article > section:nth-child(4)');
// console.log(staff);
// console.log(staff.parentElement);
// console.log(staff.children);
// console.log(staff.firstElementChild);
// console.log(staff.lastElementChild);
// console.log(staff.previousElementSibling);
// console.log(staff.nextElementSibling);

/*
Propiedades de nodos HTML
1. childNodes: retorna una lista de nodos hijos, incluyendo nodos de texto y comentarios.
2. parentNode: devuelve el nodo padre o null si no lo tiene.
3. firstChild: devuelve el primer nodo hijo.
4. lastChild: devuelve el último nodo hijo.
5. previousSibling: devuelve el nodo hermano anterior al nodo especificado o null si no tiene.
// 6. nextSibling: devuelve el nodo hermano siguiente al nodo especificado o null si no tiene.
*/

let elements2 = document.querySelector('#descripcion');
console.log(elements2.parentNode);
console.log(elements2.childNodes);
console.log(elements2.firstChild);
console.log(elements2.lastChild);
console.log(elements2.previousSibling);
console.log(elements2.nextSibling);
