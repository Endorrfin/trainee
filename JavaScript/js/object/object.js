
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
// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Peter'; // изменено по ссылке из переменной "admin"
// console.log(user.name); // 'Peter', изменения видны по ссылке из переменной "user"

// let security = user;

// security.name = 'Rik';
// console.log(user.name); // Rik , изменения видны по ссылке из переменной "user"





// ===|=== EXAMPLE 
// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {}; // новый пустой объект

// // скопируем все свойства user в него
// for (let key in user) {
//   clone[key] = user[key];
// }

// // теперь в переменной clone находится абсолютно независимый клон объекта.
// clone.name = "Pete"; // изменим в нём данные

// console.log( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – John.





// ===|=== EXAMPLE 
// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }






// ===|=== EXAMPLE 
/**
 * Мы также можем использовать Object.assign для простого клонирования:
 */

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);





// ===|=== EXAMPLE 
// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// console.log( user.sizes.height ); // 182


// ===|=== EXAMPLE 

/**
 Существует стандартный алгоритм глубокого клонирования, Structured cloning algorithm. Он решает описанную выше задачу, а также более сложные задачи. Чтобы не изобретать велосипед, мы можем использовать реализацию этого алгоритма из JavaScript-библиотеки lodash, метод _.cloneDeep(obj).
 */

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = Object.assign({}, user);

// console.log( user.sizes === clone.sizes ); // true, один и тот же объект

// // user и clone обращаются к одному sizes
// user.sizes.width++;       // меняем свойство в одном объекте
// console.log(clone.sizes.width); // 51, видим результат в другом объекте

















































































































































