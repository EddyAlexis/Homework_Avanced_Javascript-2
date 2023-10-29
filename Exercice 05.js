/*⚠️ NE MODIFIEZ PAS LE NOM DES DÉCLARATIONS ⚠️*/
/*5️⃣ EXERCICE 05 5️⃣*/



function isPositive(num) {
   // The function receives an integer. Returns as a result a string that indicates whether the number
   // is positive or negative.
   // If the number is positive ---> "It is positive."
   // If the number is negative ---> "It is negative."
   // If the number is 0, return false.
   // Your code:
   let num = []
   if (num > 0){
      return "It is positive."
   }if(num < 0){
      return "It is negative."
   }if(num = 0){
      return false;
   }
}
console.log(isPositive);

function addSymbolExclamation(str) {
   // Add an exclamation mark to the end of the string "str" ​​and return it
   // Example: "hello world" ---> "hello world!"
   // Your code:
   let str = `Good morning all`;
   return `Goog morning all + "!" `;
}
console.log(`Goog morning all + "!" `)

function combineNames(firstName, LastName) {
   // Returns "first name" and "last name" combined in the same string but separated by a space.
   // Example: ("Webster", "Fever") ---> "Fever Webster"
   // Your code:
   let firstName = `Jean`;
   let lastName = `Nathoue`;
   return firstName.concat(` `).concat(lastName);
}
console.log(combineNames(firstName,lastName));

function getGreeting(name) {
   // Take the string "name" and concatenate another string into the string so that it takes the following form:
   // Example: "Martin" ---> "Hello Martin!"
   // Your code:
   let message = "Hello " + name;
   return message;
}
console.log(message);

function getRectangleArea(Height, width) {
   // Return the area of ​​a rectangle having its height and width.
   // Your code:
   let area = Height * width ;
   return area;
}
console.log(area);

function returnPerimeter(side) {
  // The function receives as an argument the measurement of one side of a square.
   // You must return its perimeter.
   // Your code:
   let side = 3 ;
   let perimeter = side * 4 ;
   return perimeter;
}

console.log(perimeter);

function trianglearea(base, height) {
    // Calculates the area of ​​a triangle and returns the result.
   // Your code:
   let baseValue = prompt(`Enter the base of a triangle: `);
   let heightValue = prompt(`Enter the height of a triangle: `);
   let areaValue = (baseValue * heightValue)/ 2 ;
   return areaValue ;
}
console.log(areaValue);





function FromEuroToDollar(euro) {
   // Suppose that 1 euro is equivalent to 1.20 dollars.
   // You must calculate the value received as an argument, converting it to dollars.
   // Your code:
   let euro = 1.20 
   let FromEuroToDollar = euro.value * 1.20
   return (FromEuroToDollar, + usd)
}
console.log(FromEuroToDollar, + usd)


function isVowel(letter) {
   // Write a function that takes a letter and, if it is a vowel, displays the message “It is a vowel.”
   // If the user enters a string of more than one character you must return the message: "Incorrect data".
   // If it is not a vowel, it must also return "Incorrect data".
   // Your code:
   let letter = letter.tolowarCase();
   let vowel = ["a","e","i","o","u"];
   for(let i = 0; i< vowel.length; i++){
      if(letter != vowel[i]){
         continue;
      }
      return "It is a vowel.";

   }if(letter == name){
      return "Incorrect data";
   }if(letter !== vowel){
      return "Incorrect data";
   }

}
console.log(isVowel);

