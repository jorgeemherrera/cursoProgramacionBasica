/**
 * Class Billete
 */
class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() {
  var texto = document.getElementById('dinero')
  dinero = parseInt(texto.value);

  for (var bi of caja) {
    if (dinero > 0) {

      division = Math.floor(dinero / bi.valor);

      if (division > bi.cantidad) {
        papeles = bi.cantidad
      } else {
        papeles = division;
      }

      entregado.push( new Billete(bi.valor, papeles));
      dinero -= (bi.valor * papeles);

    }
  }
  if (dinero > 0) {
    resultado.innerHTML = "soy un cajero pobre"
  } else {
    for (var e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML += ` ${e.cantidad} billetes de $ ${e.valor} <br>`
      }
    }
  }
}

var caja = [];
var entregado = [];

caja.push( new Billete(100, 10) )
caja.push( new Billete(50, 10) )
caja.push( new Billete(20, 30) )
caja.push( new Billete(10, 10) )
caja.push( new Billete(5, 5))

var dinero = 0;
var division = 0;
var papeles = 0;

var resultado = document.getElementById('resultado')
var b = document.getElementById("retirar")
b.addEventListener('click', entregarDinero)