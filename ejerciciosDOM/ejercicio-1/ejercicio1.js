//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const button = document.querySelector(".showme");
console.log(button.textContent)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1 = document.querySelector("#pillado");
console.log(h1.textContent)

//1.3 Usa querySelector para mostrar por consola todos los p

const p = document.querySelectorAll("p");

p.forEach(function(parrafo) {
    console.log(parrafo.textContent);
});

//1.4 Usa querySelector para mostrar por consola todos los elementos con 
//la clase.pokemon

const pokemon = document.querySelectorAll(".pokemon");
pokemon.forEach(function(pokemons) {
  console.log(pokemons.textContent)
})

//1.5 Usa querySelector para mostrar por consola todos los elementos con 
//el atributo data-function="testMe".

const dc = document.querySelectorAll('[data-function="testMe"]');
dc.forEach(function(heroe) {
  console.log(heroe.textContent)
})

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

const personaje = document.querySelectorAll('[data-function="testMe"]');
console.log(personaje[2].textContent)