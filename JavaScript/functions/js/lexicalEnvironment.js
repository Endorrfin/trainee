


// ===|=== LEXICAL ENVIRONMENT
var B = 1000;
var A = 2000;

{
  document.addEventListener("click",
    function(){
        console.log(A + " " + " " + C);
    });

  {
    var A = 1;
    let B = 2;
    const C = 3;

    {
      // In closure
      (function() { console.log(A, B, C)}) (); // 

      // In timeout callback
      setTimeout(function(){
          console.log(A, B, C); // 
      }, 1000);
    }
  }
}













