var teclas =  {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
}

document.addEventListener('keyup', dibujarTeclado);
document.addEventListener('mouseup', dibujarMouse);

var cuadrito = document.getElementById('area_dibujo');
var papel = cuadrito.getContext('2d');

var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel)

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  console.log(evento)
  var color = "brown";
  var movimiento = 5;
  switch(evento.keyCode) {
    case teclas.LEFT:
      dibujarLinea(color, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(color, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    default:
      console.log('ninguna es flecha, por favor oprimir una flecha');
  }
}

function dibujarMouse(evento) {
  console.log(evento)
  var color = "green";
  var movimiento = 5;
  dibujarLinea(color, x, y, evento.offsetX, evento.offsetY, papel);
  x = evento.offsetX;
  y = evento.offsetY;
}