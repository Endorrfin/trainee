
// ===|=== PROMISE I

// const promise = new Promise((resolve, reject) => {});

// console.log(promise);




// ===|=== PROMISE II

// const promise = new Promise((resolve, reject) => {
//   resolve('Promise resolved');
// });

// console.log(promise);




// ===|=== PROMISE III

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise resolved');
//   }, 2000);
// });

// console.log('before');


// promise.then(message => {
//   console.log(message);
// });


// console.log('after');




// ===|=== PROMISE IV

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.3;

//     if(success) {
//       resolve('Promise resolved!');
//     } else {
//       reject('Promise rejected!');
//     }

//   }, 1000);
// });

// console.log('before');


// promise.then(
//   message => {
//     console.log(message);
//   },
//     error => {
//       console.error(`Error - ${error}`);
//     },
// );


// console.log('after');




// ===|=== PROMISE V

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.3;

//     if(success) {
//       resolve('Promise resolved!');
//     } else {
//       reject('Promise rejected!');
//     }

//   }, 1000);
// });

// console.log('before');


// const onSuccess = message => {
//   console.log(message);
// };
// const onError = error => {
//   console.error(`Error - ${error}`);
// };


// promise.then(onSuccess, onError);


// console.log('after');





// ===|=== PROMISE VI

// const promise = new Promise (resolve => {
//   resolve(5);
// });

// /**
//  * Сам по себе then тоже возвращает promise
//  * И то что передаваемый callback вернет, то получит в качестве аргумента следующий then
//  */

// promise
// .then(value1 => {
//   console.log('value1 ' + value1);

//   return value1 + 5;
// })
// .then(value2 => {
//   console.log('value2 ' + value2);

//   // вызовем оператор throw - который выкидывает ошибку
//   // все последующие выполнения .then прерываются мгновенно и управление передается блоку catch, который ловит эту ошибку. 
//   throw new Error ('Error is my cool promise');

//   return value2 + 10;
// })
// .then(value3 => {
//   console.log('value3 ' + value3); 
// })
// .catch(error => {
//   console.error(error);
// });







// ===|=== EVENTS TASK VII
/**
 * the-promise-of-a-burger-party
 * https://habr.com/ru/company/nix/blog/323066/
 */

// // ассинхронная операция
// function cookBurger (type) {}

// // обычная операция 
// function makeMilkshake (type) {}

// // aerywbz заказа, которая возвращает промис
// function order (type) {
//   return new Promise(function(resolve, reject) {
//     var burger = cookBurger(type)
//     burger.ready = function (err, burger) {
//       if (err) {
//         return reject(Error('Error while cooking'))
//       }
//       return resolve(burger)
//     }
//   })
// }

// order('JakeBurger')
//   .then( burger => {
//     const milkshake = makeMilkshake('vanila')
//     return { burger: burger, shake: milkshake }
//   })
//   .then( foodItems => {
//     console.log('BURGER PARTY !', foodItems);
//   })
//   .catch( err => {
//     console.log(err);
//   })










//===========================================================================
//===========================================================================


// <===||===> TASK FROM MENTOR I
// Promise.reject('a')
//   .catch(p => p + 'b')
//   .catch(p => p + 'с')
//   .then(p => p + 'd')
//   .finally(p => p + 'e')
//   .then(p => console.log(p))






// <===||===> TASK FROM MENTOR II
// Promise.resolve('BatMan')
//   .then(function (val) {
//     console.log('then', val); // 
//     throw new Error('Error happen');
//     return 'OMG!';
//   })
//   .then((val) => console.log('then', val)) //  
//   .catch((val) => {
//     console.log('catch', val); // 
//     return Promise.reject();
//   })
//   .then(firstHandler, secondHandler) // 
//   .then(firstHandler, secondHandler) // 
//   .then(firstHandler, secondHandler); // 

// function firstHandler(val) {
//   console.log('first', val);
// }

// function secondHandler(val) {
//   console.log('second', val);
// }




// <===||===> TASK FROM MENTOR III
// const firstPromise = new Promise((res, rej) => setTimeout(res, 500, "один"));
// const secondPromise = new Promise((res, rej) => setTimeout(res, 100, "два"));

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res)); //
// Promise.all([firstPromise, secondPromise]).then(res => console.log(res)); // 









//===========================================================================
//===========================================================================
// <===||===> TASK 1

// doSomething().then(function() {
//   return doSomethingElse();
// });


// doSomething().then(function() {
//   doSomethingElse();
// });

// doSomething().then(doSomethingElse());
// doSomething().then(doSomthingElse);


















