var teclas =  {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
}

console.log(teclas);


document.addEventListener('keyup', dibujarTeclado);

function dibujarTeclado(evento) {
  // if (evento.keyCode == teclas.LEFT) {
  //   console.log('vamos pa izquierda')
  // }
  // if (evento.keyCode == teclas.UP) {
  //   console.log('vamos pa arriba')
  // }
  // if (evento.keyCode == teclas.RIGHT) {
  //   console.log('vamos pa derecha')
  // }
  // if (evento.keyCode == teclas.DOWN) {
  //   console.log('vamos pa abajo')
  // }

  switch(evento.keyCode) {
    case teclas.LEFT:
      console.log('vamos pa izquierda');
    break;
    case teclas.UP:  console.log('vamos pa arriba');
    break;
    case teclas.RIGHT:
      console.log('vamos pa derecha');
    break;
    case teclas.DOWN:
      console.log('vamos pa abajo');
    break;
    default:
      console.log('ninguna es flecha, por favor oprimir una flecha');
  }
}