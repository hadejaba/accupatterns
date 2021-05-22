//  1

// Here we ask the user if they eat fish, and store the result (true/false) in a variable.
var eatFish = confirm("Do you eat fish?");

// If the user eats fish (eatFish === true) doument.write, "Fish is rich in B12".
if (eatFish) {
    document.write("Fish is rich in B12" + "<br>");
}

else {
    document.write("You must be a meateater" + "<br>");
};
// If the above condition isn't met (eatFish !== true), doument.write, "You must be a meateater".


// 2
// Ask the user what year they were born, and store their response to a variable.
var birthYear = prompt("What year were you born?");


// If the user was born before 1997, alert "You are in Generation Z"
if (birthYear > 1997) {
    document.write("You are Generation Z" + "<br>");
}
// Else if the user was born after 1997, alert "You are a millennial!"
else if (birthYear < 1997) {
    document.write("You are a millenial!" + "<br>");
}
// If neither of the previous conditions was true (birthYear === 1995) we alert "You inched by!"
else {
    document.write("You inched by!" + "<br>");
}


// 3//

// Create an array called  animals.
var animals = ["bird", "cat", "dog", "hamster", "turtle", "fish"];
// Log the length of the  animals array to the document
console.log(animals.length);

// Log an animal in the cat.
console.log(animals[1]);


// Log the animal dog.
console.log(animals[2]);


// Log the animal bird.
console.log(animals[0]);


// Log the animal[13]. //what result do you get
console.log(animals[13]);


// Add an new animal to the [2] position of the array with out changing the array

animals.splice(2, 0, 'bunny');
console.log(animals);



//4//

// Created an array named myBands.
var myBands = ["blackpink", "paramore", "pvris", "the aces", "hot milk", "meet me @ the altar"];
// // Created a prompt to get the user's favorite band.
var userGuess = prompt("Which band or artist do you like?");
// // Converts the user's answer to lowercase.
var userGuessLower = userGuess.toLowerCase();
// // Now we check the myBands array to see if it contains the user's answer.
// // If the user's band is not in the array...
if (myBands.indexOf(userGuessLower) === -1) {
    alert("ehhh... no thanks...");
}
// // If it is in the array...
else {
    alert("sweet. i love them too!");
};

//5//

// song-object
// Create a constructor function called Song. Song should take in two arguments, title and artist, which 
// should both be added as properties when the Song constructor function is used. The Song function 
// should also have a method called play on its prototype. When called, the play function should console.
// log the name of that specific song preceded by the word 'Playing:'.
// function should also have a method called play on its prototype. When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.


// THIS ONE CONFUSED ME ^^^ maybe it's just the wording? not sure.


/*6//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

// // // Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

// NOTE: always look at the test results to see further details about what the test is expecting.
// For example, the tests require that to complete this challenge, your function must return
// 0 if the input is empty. Please see the README file for an explanation of how to expand the test
// results on the index page in the browser.
// */

var numbers = [1, 2, 3, 4];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {

    sum += numbers[i]

};

console.log('Your sum is ' + sum);



//7/*
// ----------------------------------------
// CHALLENGE
// ----------------------------------------

// Write function named doubleLetters that will take a string and double every letter in the string

// Example: if you pass it "abc" then it should return "aabbcc"
// */



/*8//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

// Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

const num = [1, 2, 3], doubles = num.map(n => n * 2);
console.log(doubles);
