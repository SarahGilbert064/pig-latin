//Business Logic




//User Logic
$(document).ready(function(){
  $("#sentence").submit(function(event){
    event.preventDefault();
    let input = $("input#original").val();
    
    let words = input.split(" ");

    console.log(words);




  })

})
