
//===========================================================================
//===========================================================================
// <===||===> TASK 1

// function foo() {
//   setTimeout(foo, 0);
// }

// foo();
// console.log(foo()); // undefined



// <===||===> TASK 2
// function foo() {
//   Promise.resolve().then(foo);
// }

// foo();
// console.log(foo()); // грузит систему



// <===||===> TASK 3
// function f(b) {
//   var a = 12;
//   return a + b + 35;
// }


// function g(x) {
//   var m = 4;
//   return f(m * x)
// }


// g(21)
// console.log(g(21));



// <===||===> TASK 4
// (function () {
//   console.log('this is the start N1');

//   setTimeout(function cb() {
//     console.log('this is a msg from call back N2');
//   });

//   console.log('this is a just message N3');

//   setTimeout(function cb1() {
//     console.log('this is a msg from call back1 N4');
//   }, 0);

//   console.log('this is the end N5');
// })();




// <===||===> TASK 5
// function main() {
//   console.log('A');

//   setTimeout(function exec() {
//     console.log('B');
//   }, 0)

//   runWhileLOopForNSeconds(3)

//   console.log('C');
// }

// main();


// function runWhileLOopForNSeconds(sec) {
//   let start = Date.now(),
//   now = start
//   while(now - start < sec * 1000) {
//     now = Date.now()
//   }
// }




//===========================================================================
//===========================================================================
// <===||===> TASK 6

function foo() {
  throw new Error('Ops');
}

function bar () {
  foo();
}

function baz() {
  bar();
}

baz();






// <===||===> TASK 5




// <===||===> TASK 5



// <===||===> TASK 5





