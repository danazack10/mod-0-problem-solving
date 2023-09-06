// Start with an array of strings with a mix of uppercase and lowercase letters.
// Print every word in all lowercase letters.


// Overall Goal 
// Change all characters within each string in an array from mixed upper and lower case to lower case


// Pseudocode
// I'm not sure if I need a loop for this or not?
// Normally I would use a loop if I was trying to capitalize a specific character
// However, since it is the whole array, I may just be able to use the method "toLowerCase" on the array itself?
// It actually didn't work... so I'll try a for loop instead!


// Final solution
var letters = ["SiLLy", "WoRdS", "CHArAcTeRS"];
for (i = 0; i < letters.length; i++){
    console.log(letters[i].toLowerCase());
}


