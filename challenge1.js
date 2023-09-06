// Given an array of strings, print only the strings that have exactly 4 characters.


// Overall Goal 
// Print only the strings with exactly 4 characters.


// Pseudocode
// Each string in the array is likely to have a different number of characters
// I need to instruct the code to count the number of characters in each string
// In order to check each string individiually, I could use a for loop!
// I then need to instruct the code to only print out those with 4 characters


// Final solution
var stringArray = ["Molly", "Chad", "Anne", "Marley"];
for (i = 0; i < stringArray.length; i++){
    if (stringArray[i].length === 4){
        console.log(stringArray[i]);
    } else {
    }
}



