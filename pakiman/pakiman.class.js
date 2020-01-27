/**
 * Class Pakiman
 */
class Pakiman {
  constructor(n, v, a) {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    
    
    this.imagen.src = imagenes[this.nombre]
  }
  hablar() {
    alert(this.nombre)
  }

  mostrarImg() {
    document.body.appendChild(this.imagen)
    document.write('<p>')
    document.write('<strong>' + this.nombre + '</strong><br>')
    document.write('<strong> Vida:' + this.vida + '</strong><br>')
    document.write('<strong> Ataque' + this.ataque + '</strong>')
    document.write('</p>')
    document.write('<hr>')
  }
}
