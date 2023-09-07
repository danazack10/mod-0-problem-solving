// Start with an array of travel destinations.
// Print every travel destination in alphabetical order embedded in a sentence using string interpolation.
// For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"


// Overall Goal
// Create code that puts multiple strings within in an array in alphabetical order and then prints each string embedded into a sentence.

// Psuedocode
// I'll need the .sort() method to order the string in alphabetical order
// I'll need to use `${}` for string interpolation
// I'll need a loop in order to print out all of the strings one at a time into the embedded sentence

// Final Solution
var destinations = ["Utah", "Colorado", "New York", "Georgia", "Arizona"];
destinations.sort();
for (i = 0; i < destinations.length; i++){
    console.log(`I want to visit ${destinations[i]} next!`);
}



