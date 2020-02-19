// ===|=== LEXICAL ENVIRONMENT
// Global scope
// var B = 1000;
// var C = 2000;

// const btnClick1 = document.querySelector('.btn-1');

// {
//   btnClick1.addEventListener('click', function (event){
//         console.log(A + " " + B + " " + C); // 1, 1000, 2000
//     });

//   {
//     var A = 1;
//     let B = 2;
//     const C = 3;

//     {
//       // In closure
//       (function() { console.log(A, B, C)}) (); // 1, 2, 3

//       // In timeout callback
//       setTimeout(function(){
//           console.log(A, B, C); // 1, 2, 3
//       }, 1000);
//     }
//   }
// }




// ===|=== Конфликт имен и почему ()()
// function outside() {
//   var x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// outside()(10); // возвращает 20 вместо 10




// true + false // 1
// 12 / "6" // 2
// "number" + 15 + 3 // number153
// 15 + 3 + "number" // 18number
// "ba" + + "bar" // baNaN

// console.log(false == 0); // true
// console.log(false === 0); // false
// console.log({ a: 1 } == { a: 2 }); // false
// console.log({ a: 1 } == { a: 1 }); // false
// console.log(new Number(2) === 2); // false
// console.log(new Number(2) == 2); // false ? true
// console.log(1 + '5' == 15); // true
// console.log('1' + 5 === '15'); // true

// var a = [];
// if (a) {
//   console.log([] == ![]); // true
// }

// console.log(typeof(null)); // object
// console.log(typeof([])); // object
// console.log(typeof(function(){})); // function



// function makeGreeting () {
//   var myName = "Alex";

//   function greeting(personName) {
//     return "Hello, " + personName + "! My name's " + myName + ".";
//   };

//   return greeting;
// }

// var newGreeting = makeGreeting();
// console.log(newGreeting('Ivan'));
// console.log(makeGreeting);





















// function Book() { 
//   // unfinished code
// } 

// var myBook = new Book();
// console.log(myBook);





// function makeShout() {
//   var phrase = "Превет!"
//   var shout = function () {

//     console.log(phrase);

//   }

//   phrase = "Готово!"

//   return shout
// }

// shout = makeShout()

// // что выдаст?
// shout()

/**
 * Внутри makeShout() создается [[scope]]
 * В [[scope]] пишется: phrase="Превед!"
 * В [[scope]] пишется: shout=..функция..
 * 
 * При создании функция shout получает ссылку на [[scope]] внешней функции
 * [[scope]].phrase меняется на новое значение "Готово!"
 * 
 * При запуске shout()
 * Создается свой собственный объект [[scope2]]
 * Ищется phrase в [[scope2]] - не найден
 * Ищется phrase в [[scope]] внешней функции - найдено значение "Готово!"
 * console.log(phrase); // "Готово!"
 * То есть, внутренняя функция получает последнее значение внешних переменных.
 */





// console.log( sum(7)(3));
// console.log( sum(18)(16));
// console.log( sum(20)(10));


//  function sum (a) {
//    return function (b) {
//      return a - b;
//    }
//  }








/**
 * CLOSURE
 * source - https://javascript.ru/basic/closure
 */

// function addEvents(divs) {

//     for(var i=0; i<divs.length; i++) {  
//         divs[i].innerHTML = i
//         divs[i].onclick = function() { alert(i) }
//     }
// }


 
//  function makeDivs(parentId) {
//      for (var i=0;i<10;i++) {
//          var j = 9-i
//          var div = document.createElement('div')
//          div.style.backgroundColor = '#'+i+i+j+j+j+i
//          div.className="closure-div"
//          div.style.color = '#'+j+j+i+i+i+j
//          document.getElementById(parentId).appendChild(div-2)
//      }
//  }

//  makeDivs+addEvents








// function addEvents2(divs) {
//     for(var i=0; i<divs.length; i++) {  
//         divs[i].innerHTML = i
//         divs[i].onclick = function(x) {
//             return function() { alert(x) }
//         }(i)
//     }
// }


// makeDivs+addEvents2
 





// var a = 123;

// function func() {
//   var a = 22;
//   return function test(f) {
//     var a = 65;
//     f();
//   };
// }

// var b = func();

// b(function() {
//   console.log(a);
// });






/**
 * Есть одно исключение из общего правила присвоения [[Scope]], которое мы рассматривали в предыдущей главе.

При создании функции с использованием new Function, её свойство [[Scope]] ссылается не на текущий LexicalEnvironment, а на window.

 * Следующий пример демонстрирует как функция, созданная new Function, игнорирует внешнюю переменную a и выводит глобальную вместо неё:
 */
// var a = 1;

// function getFunc() {
//   var a = 2;

//   var func = new Function('', 'console.log(a)');

//   return func;
// }

// getFunc()(); // 1, из window




// /**
//  * Сравним с обычным поведением:
//  */

// var a = 1;

// function getFunc() {
//   var a = 2;

//   var func = function() { console.log(a); };

//   return func;
// }

// getFunc()(); // 2, из LexicalEnvironment функции getFunc

/**
 * Функции, создаваемые через new Function, имеют значением [[Scope]] не внешний объект переменных, а window.
Следствие – такие функции не могут использовать замыкание. Но это хорошо, так как бережёт от ошибок проектирования, да и при сжатии JavaScript проблем не будет. Если же внешние переменные реально нужны – их можно передать в качестве параметров.
 */






