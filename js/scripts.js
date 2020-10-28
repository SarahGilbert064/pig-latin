//Business Logic




//User Logic
$(document).ready(function(){
  $("#sentence").submit(function(event){
    event.preventDefault();
    let input = $("input#original").val();
    console.log(input);
  })

})
