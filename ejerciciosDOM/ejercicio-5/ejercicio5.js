//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
//que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ulAlbums = document.createElement("ul");

for (let i = 0; i < albums.length; i++) {
  const liAlbum = document.createElement("li");
  liAlbum.textContent = albums[i];

  ulAlbums.appendChild(liAlbum);
}

document.body.appendChild(ulAlbums);