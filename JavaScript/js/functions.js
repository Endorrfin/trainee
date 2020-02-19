


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


// function myBigFunction() {
//   var myValue = 1;
      
//   subFunction1(myValue);
//   subFunction2(myValue);
//   subFunction3(myValue);
// }

// function subFunction1(value) {
//   console.log(value);
// }

// function subFunction2(value) {
//   console.log(value);
// }

// function subFunction3(value) {
//   console.log(value);
// }

// console.log(myBigFunction());







// ===|=== CLOSURE

// function makeCounter() {
//   var currentCount = 1;

//   return function () {
//     return currentCount++;
//   }
// }


// var counter = makeCounter();
// console.log(counter);

// // каждый вызов увеличивает счетчик и возвращает результат
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 


// // создаем другой счетчик, который будет независимым от первого
// var counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());




// ===|=== // TASK I
// say('Вася'); // Что выведет? Не будет ли ошибки?

// var phrase = 'Привет';
// // let phrase = 'Привет';

// function say(name) {
//   console.log( name + ", " + phrase );
// }





// ===|=== TASK II
// var value = 0;
// function f () {
//   if(1) {
//     value = true;
//   } else {
//     var value = false;
//   }

//   console.log(value);
// }

// f();

/**
 * Результатом будет true, т.к. var обработается и переменная будет создана до выполнения кода.
 * Соответственно, присвоение value=true сработает на локальной переменной, и alert выведет true.
 * Внешняя переменная не изменится.
 */




// var value = 0;
// console.log(value);
// function f () {
//   if(1) {
//     value = true;
//   } else {
//     value = false;
//   }

//   console.log(value);
// }

// f();
// console.log(value);

/**
 * P.S. Если var нет, то в функции переменная не будет найдена. Интерпретатор обратится за ней в window и изменит её там.
 * Так что без var результат будет также true, но внешняя переменная изменится.
 */





 // ===|=== TASK III
//  function test () {
//    console.log(window); // undefined

//    var window = 5

//    console.log(window); 5
//  }

//  test();

 /**
  Такой результат получился потому, что window – это глобальная переменная, но ничто не мешает объявить такую же локальную.
Директива var window обработается до начала выполнения кода функции и будет создана локальная переменная, т.е. свойство LexicalEnvironment.window:

LexicalEnvironment = {
  window: undefined
}
Когда выполнение кода начнётся и сработает alert, он выведет уже локальную переменную, которая на тот момент равна undefined.
Затем сработает присваивание, и второй alert выведет уже 5.
  */



// ===|=== TASK IV
// var a = 5

// (function fn () {
//   console.log(a);
// })();

/**
 Результат – ошибка. Попробуйте:

var a = 5

(function() {
  alert(a)
})()
Дело в том, что после var a = 5 нет точки с запятой.

JavaScript воспринимает этот код как если бы перевода строки не было:

var a = 5(function() {
  alert(a)
})()
То есть, он пытается вызвать функцию 5, что и приводит к ошибке.

Если точку с запятой поставить, все будет хорошо:

var a = 5;

(function() {
  alert(a)
})()
Это один из наиболее частых и опасных подводных камней, приводящих к ошибкам тех, кто не ставит точки с запятой.
 */




// ===|=== TASK V
// function makeCounter() {
//   var currentCount = 1;

//   return function() {
//     var currentCount;
//   }
// }

/**
 Если во внутренней функции есть своя переменная с именем currentCount – можно ли в ней получить currentCount из внешней функции?

 Нет, нельзя.
 Локальная переменная полностью перекрывает внешнюю.
 */






 // ===|=== TASK VI
 /**
  * Что выведут эти вызовы, если переменная currentCount находится вне makeCounter?
  */

// var currentCount = 1;

// function makeCounter () {
//   return function () {
//     return currentCount++;
//   }
// }

// var counter = makeCounter();
// var counter2 = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(counter2());
// console.log(counter2());

/**
Выведут 1,2,3,4,5.
Здесь внутренняя функция будет искать – и находить currentCount каждый раз в самом внешнем объекте переменных: глобальном объекте window.
В результате все счётчики будут разделять единое, глобальное текущее значение.
*/





// ===|=== TASK VII
/**
 * source - https://www.youtube.com/watch?v=8Keevo1jcZs&feature=youtu.be&t=2827
 */

// function room () {
//   function myCassette () {
//     var name = 'Sony';
//     var time = 30;

//     var lenta = ['la-la-la', 'na-na-na'];

//     return function getLenta() {
//       return lenta;
//     };
//   }
//   function magnitofon (cassette) {
//     var lenta = cassette(); // загрузили кассету
//     var songs = lenta();

//     console.info("Song: " + songs[0]);
//   }
  
//   magnitofon(myCassette);
// }

// room();







// ===|=== TASK VIII
// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?





// ===|=== TASK IX
// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     console.log(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)








// -------------------------
// Написать функцию sum так чтобы переменные в нее передавались в разных скобках,
// когда в нее ничего не передается(пустые скобки), возвращется результат
// Пример вызова:
// console.log(sum(1)(2)(3)());

// function sum (a) {
//   let result = a;
//   return function innerSum (a) {
//     if (a !== undefined) {
//       result += a;
//       return innerSum;
//     }
//     return result;
//   }
// }

// sum(1)(2)(3)(5)(7)(8)(11)();
// console.log(sum(1)(2)(3)(5)(7)(8)(11)());





// -------------------------
// Написать функцию sum так чтобы переменные в нее передавались в разных скобках,
// результат возвращается, когда больше нет передачи скобок.
// Подсказка: Тут нужно переопределять метод объекта toString
// Пример вызова:
// console.log(sum(1)(2)(3));

// function sum(a) {
//   let result = a;
//   return function innerSum(a) {
//     if (a === toString(String)) {
//       result += a;
//       return innerSum;
//     }
//   }
// }

// sum();









// ===|=== TASK I - CLOSURE (from Mentor)
// function foo() {
//   function x() { }
//   var x = 2;
//   console.log(typeof x); // number // function
// };
// foo();


// ===|=== TASK II - CLOSURE (from Mentor)
// function foo() {
//   function x() { }
//   var x;
//   console.log(typeof x);
// };
// foo();


// ===|=== TASK III - TDZ (from Mentor)
// let x = 'outer value';
// (function () {
//   // start TDZ for x 
//   console.log(x);
//   let x = 'inner value'; // declaration ends TDZ for x 
// }());



// ===|=== TASK IV - CLOSURE (from Mentor)
// ------------------------
// Написать функцию add так чтобы переменные в нее передавались в разных скобках, после второго вызова возвращается результат
// Пример вызова:
// add(1)(2);//3

// function add (a) {
  
//   return function (b) {
//     return a + b;
//   }
  
// }

// add (2)(3);




// ===|=== TASK V - CLOSURE (from Mentor)
// -------------------------
// Написать функцию sum так чтобы переменные в нее передавались в разных скобках,
// когда в нее ничего не передается(пустые скобки), возвращается результат
// Пример вызова:
// console.log(sum(1)(2)(3)());

// function sum (a) {
//   let result = a;
//   return function innerSum (a) {
//     if (a !== undefined) {
//       result += a;
//       return innerSum;
//     }
//     return result;
//   }
// }

// sum();




// ===|=== TASK VI - CLOSURE (from Mentor)
// -------------------------
// Написать функцию sum так чтобы переменные в нее передавались в разных скобках,
// результат возвращается, когда больше нет передачи скобок.
// Подсказка: Тут нужно переопределять метод объекта toString
// Пример вызова:
// console.log(sum(1)(2)(3));

// function sum(a) {
//   let result = a;
//   return function innerSum(a) {
//     if (a === toString(String)) {
//       result += a;
//       return innerSum;
//     }
//   }
// }

// sum();









































































































































































































































































































