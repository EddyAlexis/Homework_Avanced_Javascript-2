/*⚠️ NE MODIFIEZ PAS LE NOM DES DÉCLARATIONS ⚠️*/
/*4️⃣ EXERCICE 04 4️⃣*/

// ⛔️ Remember that you must use the global object "Math".

function square(num) {
  // Returns the value of "num" squared (Renvoie la valeur de "num" au carré).
  // YOur code:
  let num = 6;
  let square = Math.pow(num, 2);
  return square;
}
console.log(square);

function raiseToCube(num) {
  // Returns the value of "num" cubed.
  // Your code:
  let num = 27;
  let result =  (Math.cbrt(num));
  return result;
}
console.log(result);

function raise(num, exponent) {
  // Returns the value of "num" raised to the exponent "exponent".
  // Your code:
  let result = 1;
  for (i = 0; i < exponent; i++ ) {
   result *= num;
  }
  return result;
}
console.log(result);

function roundNumber(num) {
   let round = Math.round(14.5);

}
console.log("Number after rounding : " + round);


function randomnumber() {
  // Generate a random number between 0 and 10 and return it.
  // Your code :
  let random = Math.random() * 10;
  return random;
}
console.log(random);
