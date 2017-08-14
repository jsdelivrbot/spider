/* Stacks! */

// functions: push, pop, peek, length
// we use the length of word instead of letters
// because the length of letters will be mutated

var letters = []; //this is our Stacks
var word = "meow";
var revWord = "";

//put letters of word into the stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    revWord += letters.pop();
}

if (word === revWord)
    console.log(word + " is a palindrome");
else
    console.log(word + " is NOT a palindrome");
