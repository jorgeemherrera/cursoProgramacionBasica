dibujo = document.getElementById('dibujo');
lienzo = dibujo.getContext('2d');
console.log(lienzo);

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100,100);
lienzo.lineTo(200,200);
lienzo.stroke();
lienzo.closePath();
