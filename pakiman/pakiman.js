var imagenes = [];
imagenes["Cauchín"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

// var cauchin = new Pakiman('Cauchín', 100, 30);
// var pokacho = new Pakiman('Pokacho', 80, 50);
// var tocinauro = new Pakiman('Tocinauro', 120, 40);

var coleccion = [];

coleccion.push(new Pakiman('Cauchín', 100, 30));
coleccion.push(new Pakiman('Pokacho', 80, 50));
coleccion.push(new Pakiman('Tocinauro', 120, 40));

for (var pakin of coleccion) {
  pakin.mostrarImg()
}

for(var x in coleccion[0]) {
  console.log(x)
}