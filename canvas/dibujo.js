dibujo = document.getElementById('dibujo');
lienzo = dibujo.getContext('2d');
console.log(lienzo);

// Function

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea('pink', 10, 300, 220, 10);
dibujarLinea('blue', 310, 10, 10, 220);
