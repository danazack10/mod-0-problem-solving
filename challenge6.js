// Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized.
// For example, if you were given "Turing is the best", return "Turing Is The Best" instead!


// Overall Goal 
// Change a string so that the first letter of every word is capitalized. 

// Pseudocode
// The method .split() should divide a string variable into an array of individual words

// Final Solution
var sentence = "Turing is the best."
var sentenceArray = sentence.split(" ");
for (i = 0; i < sentenceArray.length; i++){
    sentenceArray[i].charAt(0).toLowerCase() + sentenceArray[i].slice(1);
}
console.log(sentenceArray.join(" "));