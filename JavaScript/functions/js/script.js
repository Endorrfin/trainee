


// ===|=== Function Declaration
// // Example I
// function square (number) {
//   return number * number;
// }


// // Example II 
// function myFunc(theObject) {
//   theObject.make = 'Toyota';
// }

// var mycar = {make: 'Honda', model: 'Accord', year: 1998};
// var x, y;

// x = mycar.make; // x получает значение "Honda"

// myFunc(mycar);
// y = mycar.make; // y получает значение "Toyota"
//                 // (свойство было изменено функцией)




// // Example III 
// var square = function(number) { return number * number; };
// var x = square(5); // x получает значение 16
// console.log(x);



// // Example IV
// /**
//  * функция принимает функцию, которая является function definition expression, и выполняет его для каждого элемента принятого массива вторым аргументом.
//  */

// function map(f, a) {
//   var result = []; // Create a new Array
//   var i; // Declare variable
//   for (i = 0; i != a.length; i++)
//     result[i] = f(a[i]);
//       return result;
// }
// var f = function(x) {
//    return x * x * x; 
// }
// var numbers = [0, 1, 2, 5, 10];
// var cube = map(f,numbers);
// console.log(cube);


// // Example V
// console.log(square(5));
// function square(n) { return n * n; }






// ===|=== SCOPE
// // Следующие переменные объявленны в глобальном scope
// var num1 = 20,
//     num2 = 3,
//     name = 'Chamahk';

// // Эта функция объявленна в глобальном scope
// function multiply() {
//   return num1 * num2;
// }

// multiply(); // вернет 60
// console.log(multiply());

// // Пример вложенной функции
// function getScore() {
//   var num1 = 2,
//       num2 = 3;
  
//   function add() {
//     return name + ' scored ' + (num1 + num2);
//   }
  
//   return add();
// }

// getScore(); // вернет "Chamahk scored 5"


// Example 
// function outside() {
//   var x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// // outside()(10); // возвращает 20 вместо 10
// console.log(outside()());





// ===|=== CLOSURE
// Example I
// function addSquares(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }
// a = addSquares(2, 3); // возвращает 13
// b = addSquares(3, 4); // возвращает 25
// c = addSquares(4, 5); // возвращает 41
// console.log(a = addSquares(2, 3));
// console.log(b = addSquares(3, 4));
// console.log(c = addSquares(4, 5));
// console.log();
// console.log();


// // Example II
// function outside(x) {
//   function inside(y) {
//     return x + y;
//   }
//   return inside;
// }
// fn_inside = outside(3); // Подумайте над этим: дайте мне функцию,
//                         // который передай 3
// console.log(fn_inside);

// result = fn_inside(5); // возвращает 8
// console.log(result);

// result1 = outside(3)(5); // возвращает 8
// console.log(result1);


// // Example III
// function A(x) {
//   function B(y) {
//     function C(z) {
//       console.log(x + y + z);
//     }
//     C(3);
//   }
//   B(2);
// }
// A(1); // в консоле выведится 6 (1 + 2 + 3)



// Example IV
// var pet = function(name) {   // Внешняя функция объявила переменную "name"
//   var getName = function() {
//     return name;             // Вложенная функция имеет доступ к "name" внешней функции
//   }
//   return getName;            // Возвращаем вложенную функцию, тем самым сохраняя доступ
//                              // к ней для другого scope
// }
// myPet = pet('Vivie');
   
// myPet();                     // Возвращается "Vivie",
//                              // т.к. даже после выполнения внешней функции
//                              // name сохранился для вложенной функции
// console.log(myPet);                             




// Example V
// var createPet = function(name) {
//   var sex;
  
//   return {
//     setName: function(newName) {
//       name = newName;
//     },
    
//     getName: function() {
//       return name;
//     },
    
//     getSex: function() {
//       return sex;
//     },
    
//     setSex: function(newSex) {
//       if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || 
//         newSex.toLowerCase() === 'female')) {
//         sex = newSex;
//       }
//     }
//   }
// }

// var pet = createPet('Vivie');
// pet.getName();                  // Vivie

// pet.setName('Oliver');
// pet.setSex('male');
// pet.getSex();                   // male
// pet.getName();                  // Oliver





// ===|=== ARROW FUNCTIONS


function myBigFunction() {
  var myValue = 1;
      
  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}

console.log(myBigFunction());





































