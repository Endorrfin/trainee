


// === | === Function Declaration
// Example I
function square (number) {
  return number * number;
}


// Example II 
function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x получает значение "Honda"

myFunc(mycar);
y = mycar.make; // y получает значение "Toyota"
                // (свойство было изменено функцией)




// Example III 
var square = function(number) { return number * number; };
var x = square(5); // x получает значение 16
console.log(x);
