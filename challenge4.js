// Start with an array of hobbies. Print out only the words that end in "ing".


// Overall Goal 
// Print out only the strings within an array that end with "ing"


// Pseudocode
// I will need a loop for this so that the code can evaluate each string's ending
// I will need to google a method that will help code look at the ending specifically
// Google suggests: .endsWith()


// Final Solution
var hobbies = ["running", "dancing", "bikes", "books", "baking"];
for (i = 0; i < hobbies.length; i++){
    if (hobbies[i].endsWith("ing")){
        console.log(hobbies[i]);
    }
}