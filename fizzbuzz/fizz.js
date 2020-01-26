let numeros = 100;
let divisible = false;

for (var i = 1; i <= numeros; i++) {
  divisible = false;

  if(esDivisible(i,3)) {
    document.write(i, ': Fizz ')
    divisible = true;
  }
  if (esDivisible(i,5)) {
    document.write(i, ': Buzz ')
    divisible = true;

  }
  if(!esDivisible(i,3) && !esDivisible(i,5)) {
    document.write(i)
  } 
  document.write('<br>')
}

function esDivisible(num, divisor) {
  if (num % divisor == 0) {
    return true;
  } else {
    return false
  }
}