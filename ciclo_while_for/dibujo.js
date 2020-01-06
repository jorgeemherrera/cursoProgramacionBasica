textoLinea = document.getElementById('texto_lineas');
boton = document.getElementById('botoncito');

boton.addEventListener('click', dibujoPorClick);

dibujo = document.getElementById('dibujo');
lienzo = dibujo.getContext('2d');
var ancho =  dibujo.width;
console.log(lienzo);


// While

// while(linea < lineas ) {
//   yi = 10 * linea;
//   xf = 10 * (linea + 1);
//   dibujarLinea('#aaf', 0, yi, xf, 300);
//   linea++;
// }



// Functions

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  var texto = parseInt(textoLinea.value);

  var lineas = textoLinea.value;
  var linea = 0;
  var yi, xf;
  var espacio = ancho / lineas;

  // For
  for(linea = 0; linea < lineas; linea++ ) {
    yi = espacio * linea;
    xf = espacio * (linea + 1);
    dibujarLinea('#aaf', 0, yi, xf, ancho);
  }
  
  dibujarLinea('#aaa', 1, 1, 1, ancho);
  dibujarLinea('#aaa', 1, ancho -1, ancho -1, ancho -1);
}
 




