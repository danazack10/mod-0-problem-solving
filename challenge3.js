// Write a method or function that removes all instances of the letter s in a string.
// The method or function should accept a string as an argument and 
// return the same string with every instance of the letter s removed.


// Overall Goal 
// Write a function that identifies all instances of "s" characters within a string
// Then remove all instances of "s" characters
// Finally, print the new string

// Pseudocode
var string = "A silly short sentence with several s words"
console.log(string.replaceAll("s", ""));

// Final solution
function removeLetterS(string){
    var solution = string.replaceAll("s", "").replaceAll("S", "");
    return solution
}
console.log(removeLetterS("So many sassy salamanders slithering..."))

