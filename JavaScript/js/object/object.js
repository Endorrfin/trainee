
// ===|=== EXAMPLE PROTOTYPE

/**
 * Так же, как и в примере с классами A, B и C, в ECMAScript мы создаём объекты: a, b и c. При этом, объект a хранит общую часть объектов b и c. А объекты b и c в свою очередь хранят лишь собственные дополнительные свойства или методы.
  var b = Object.create(a, {y: {value: 20}});
  var c = Object.create(a, {y: {value: 30}});
 */



// var a = {
//   x: 10,
//   calculate: function (z) {
//     return this.x + this.y + z;
//   }
// };
 
// var b = {
//   y: 20,
//   __proto__: a
// };
 
// var c = {
//   y: 30,
//   __proto__: a
// };
 
// // вызываем унаследованный метод
// b.calculate(30); // 60
// c.calculate(40); // 80

// console.log(b.calculate(30));
// console.log(c.calculate(40));





// ===|=== EXAMPLE CONSTRUCTOR
// // функция-конструктор
// function Foo(y) {
//   // которая умеет создавать объекты
//   // по заданному шаблону: все эти объекты
//   // будут иметь родное свойство "y"
//   this.y = y;
// }
 
// // также "Foo.prototype" хранит ссылку
// // на прототип вновь создаваемых объектов,
// // поэтому мы можем использовать эту ссылку
// // для созданиях наследуемых или разделяемых
// // свойств; так же как и в предыдущем случае мы имеем:
 
// // унаследованное свойство "x"
// Foo.prototype.x = 10;
 
// // и унаследованный метод"calculate"
// Foo.prototype.calculate = function (z) {
//   return this.x + this.y + z;
// };
 
// // создаём наши объекты "b" и "c"
// // используя "шаблон" Foo
// var b = new Foo(20);
// var c = new Foo(30);
 
// // вызываем унаследованный метод
// b.calculate(30); // 60
// c.calculate(40); // 80
 
// // покажем, что мы работаем именно
// // с теми свойствами, которые ожидаем
 
// console.log(
 
//   b.__proto__ === Foo.prototype, // true
//   c.__proto__ === Foo.prototype, // true
 
//   // также "Foo.prototype" автоматически создает
//   // специальное свойство "constructor", являющееся
//   // ссылкой на саму функцию-конструктор, т.е. на "Foo";
//   // объекты "b" и "c" могут найти это свойство посредством
//   // делегации и использовать его для проверки своего конструктора
 
//   b.constructor === Foo, // true
//   c.constructor === Foo, // true
//   Foo.prototype.constructor === Foo, // true
 
//   b.calculate === b.__proto__.calculate, // true
//   b.__proto__.calculate === Foo.prototype.calculate // true
 
// );




// ===|=== EXAMPLE 
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   // ключи
//   console.log( key );  // name, age, isAdmin
//   // значения ключей
//   console.log( user[key] ); // John, 30, true
// }




// ===|=== EXAMPLE 



























