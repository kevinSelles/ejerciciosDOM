//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const divPrint = document.querySelector("[data-function='printHere']");
const ulPlaces = document.createElement("ul");

for (let i = 0; i < places.length; i++) {
  const liPlace = document.createElement("li");
  liPlace.textContent = places[i];

  ulPlaces.appendChild(liPlace);
}

divPrint.appendChild(ulPlaces);