//1.1 Inserta dinamicamente en un html un div vacio con javascript.

const divVacio = document.createElement("div");

document.body.appendChild(divVacio);

console.log(divVacio)

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divConP = document.createElement("div");
const pDentroDeDiv = document.createElement("p");

pDentroDeDiv.textContent = "Parrafo dentro del nuevo div";

divConP.appendChild(pDentroDeDiv);
document.body.appendChild(divConP);

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
//	loop con javascript.

const nuevoDivCon6P = document.createElement("div");

for (let i = 1; i <= 6; i++) {
let nuevoP = document.createElement("p");
nuevoP.textContent = "Parrafo " + i;
nuevoDivCon6P.appendChild(nuevoP);
}

document.body.appendChild(nuevoDivCon6P);

//1.4 Inserta dinamicamente con javascript en un html una p con el 
//	texto 'Soy dinámico!'.

const pDinamico = document.createElement("p");

pDinamico.textContent = "Soy dinámico!";

document.body.appendChild(pDinamico);

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");

h2.textContent = 'Wubba Lubba dub dub';

//1.6 Basandote en el siguiente array crea una lista ul > li con 
//los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  const li = document.createElement("li");
  li.textContent = apps[i];
  ul.appendChild(li);

}

document.body.appendChild(ul);

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const borrarNodos = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < borrarNodos.length; i++) {
  borrarNodos[i].remove();
}

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

const primerDiv = document.querySelector("div");
const segundoDiv = document.querySelectorAll("div")[1];

const pIntermedio = document.createElement("p");
pIntermedio.textContent = "Voy en medio!";

primerDiv.parentNode.insertBefore(pIntermedio, segundoDiv);

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
//	.fn-insert-here

const insertarEnDivs = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < insertarEnDivs.length; i++) {
  const pDentro = document.createElement("p");
  pDentro.textContent = 'Voy dentro!';
  insertarEnDivs[i].appendChild(pDentro);
}

