
const vowels = ["a", "e", "i", "o", "u"]
let input = "a";

function pigLatinizer(input) {
  let output = "";
  for (let i = 0; i < input.length; i += 1) {
    if(vowels.includes(input.charAt(i))){
      output += input + "way";
    }
  }
}
console.log(output);
Describe: pigLatinizer();

Test: "It will take using input from form and place value in input variable"
Expect: (input("I am a sentence.").toEqual("I am a sentence."))
Test: "It will take the input string and seperate each word into own individual string"
Expect: (input("I am a sentence.").toEqual("I", "am", "a", "sentence."))


Test: "It will add 'way' to the end of words that begin with a vowel"
Expect: (pigLatinizer("a")).toEqual("away");


//Test: "It takes input from user and create a variable"