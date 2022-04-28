/* x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = 500;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax()) */

/* var Numbers = [6, 2, 101, 45, 55, 1443];
var l = Numbers.length;
var max = Infinity;
var i;
for (i = 0; l > i; i++) {
  if (Numbers[i] < max) {
    console.log(i + ' lowest number' + Numbers[i]);
    max = Numbers[i];
  }
}
console.info(max); */

/* var array = [34, 15, 88, 2];

var minValue = array[0];

for (let i=0; i<array.length; i++) {

    if (minValue > array[i]) {
      minValue = array[i];
    }
} 

console.log(minValue()) */

// minimum value
    
  // elmentjuk az elso szamot
  let smallestNumber = args[0];
  
  //megvizsgaljuk a tobbit, osszehasonlitjuk a tobbivel - for loop
  for (let i = 0; i < args.length; i++){
    let currentNumber = args[i];
    //ha a current kisebb, felülírja a smallest értékét
    if (smallestNumber > currentNumber){
      smallestNumber = currentNumber
    }
  }
return smallestNumber