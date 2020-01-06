dibujo = document.getElementById('dibujo');
lienzo = dibujo.getContext('2d');
console.log(lienzo);
var lineas = 30;
var linea = 0;
var yi, xf ;

// While

// while(linea < lineas ) {
//   yi = 10 * linea;
//   xf = 10 * (linea + 1);
//   dibujarLinea('#aaf', 0, yi, xf, 300);
//   linea++;
// }

// For

for(linea = 0; linea < lineas; linea++ ) {
  yi = 10 * linea;
  xf = 10 * (linea + 1);
  dibujarLinea('#aaf', 0, yi, xf, 300);
}

dibujarLinea('#aaa', 1, 1, 1, 300);
dibujarLinea('#aaa', 1, 299, 299, 299);



// Function

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
 




