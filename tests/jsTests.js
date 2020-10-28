
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
Test: "It will add 'way' to the end of words that begin with a vowel"
Expect: (pigLatinizer("a")).toEqual("away");


//Test: "It takes input from user and create a variable"