var villa = document.getElementById('villaPlatzi');
var papel = villa.getContext('2d');

var fondo = {
  url: './img/tile.png',
  cargaOk: false
}

var vaca = {
  url: './img/vaca.png',
  cargaOk: false
}

var cerdo = {
  url: './img/cerdo.png',
  cargaOk: false
}

var pollo = {
  url: './img/pollo.png',
  cargaOk: false
}


cantidadV = aleatorio(1, 7);
cantidadC = aleatorio(1, 4);
cantidadP = aleatorio(1, 10);

// Objetos - Clase Image
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener('load', cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', cargarPollos);


function cargarFondo() {
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOk = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOk = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOk = true;
  dibujar();
}


function dibujar() {
  
  if (fondo.cargaOk) {
    papel.drawImage(fondo.imagen, 0, 0)
  } 
  
  if (vaca.cargaOk) {
    for (var v = 0; v < cantidadV; v ++) {
      var x = aleatorio(0, 10);
      var y = aleatorio(0, 40);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if (cerdo.cargaOk) {
    for (var c = 0; c < cantidadC; c ++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }

  if (pollo.cargaOk) {
    for (var p = 0; p < cantidadP; p ++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}