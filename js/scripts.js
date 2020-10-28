//Business Logic

const vowels = ["a", "e", "i", "o", "u"]

function pigLatinizer(words) {
  let output = [];
  for (let i = 0; i < words.length; i += 1) {
    if(vowels.includes(words.indexOf(i))) {
      output.push(words + "way");
    }
  }  
console.log(output);
}

//User Logic
$(document).ready(function(){
  $("#sentence").submit(function(event){
    event.preventDefault();
    let input = $("input#original").val();
    let words = input.split(" ");
    
    let pigLatinOutput = pigLatinizer(words);
    
    
    
    

  })

})
