//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
  const liCountries = document.createElement("li");
  liCountries.textContent = countries[i];
  ulCountries.appendChild(liCountries);
}

document.body.appendChild(ulCountries);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const borrar = document.querySelector(".fn-remove-me");
borrar.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divCars = document.querySelector("[data-function='printHere']");
const ulCars = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
const liCars = document.createElement("li");
liCars.textContent = cars[i];
ulCars.appendChild(liCars);
}

divCars.appendChild(ulCars);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];



for (let i = 0; i < countries2.length; i++) {
  const divCountries2 = document.createElement("div");
  const h4 = document.createElement("h4");
  const img = document.createElement("img");

  h4.textContent = countries2[i].title;
  img.setAttribute("src", countries2[i].imgUrl);

  divCountries2.appendChild(h4);
  divCountries2.appendChild(img);

  document.body.appendChild(divCountries2);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la serie de divs.

const buttonRemove = document.createElement("button");
buttonRemove.textContent = "Eliminar último div";
document.body.appendChild(buttonRemove);

buttonRemove.addEventListener("click", function() {
  const divs = document.querySelectorAll("div");
  const ultimoDiv = divs[divs.length - 1];
  ultimoDiv.remove()
})

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//divs que elimine ese mismo elemento del html.

const divs = document.querySelectorAll("div");

for (let i = 0; i < divs.length; i++) {
  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Borrar este div";
  divs[i].appendChild(buttonDelete);

  buttonDelete.addEventListener("click", function() {
    divs[i].remove();
  })
}
