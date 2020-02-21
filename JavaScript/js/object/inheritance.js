

// ===|=== FUNCTIONAL INHERITANCE EXAMPLE
// function Machine() {
//   var enabled = false;

//   this.enable = function() {
//     enabled = true;
//   };

//   this.disable = function() {
//     enabled = false;
//   };
// }


/**
 * Унаследуем от него кофеварку. При этом она получит эти методы автоматически:
 */

// function CoffeeMachine(power) {
//   Machine.call(this); // отнаследовать

//   var waterAmount = 0;

//   this.setWaterAmount = function(amount) {
//     waterAmount = amount;
//   };

// }

// var coffeeMachine = new CoffeeMachine(10000);

// coffeeMachine.enable();
// coffeeMachine.setWaterAmount(100);
// coffeeMachine.disable();



/**
Наследник не имеет доступа к приватным свойствам родителя.
Иначе говоря, если кофеварка захочет обратиться к enabled, то её ждёт разочарование:
Это естественно, ведь enabled – локальная переменная функции Machine. Она находится в другой области видимости.

Чтобы наследник имел доступ к свойству, оно должно быть записано в this.

При этом, чтобы обозначить, что свойство является внутренним, его имя начинают с подчёркивания _.
 */

// function Machine() {
//   this._enabled = false; // вместо var enabled

//   this.enable = function() {
//     this._enabled = true;
//   };

//   this.disable = function() {
//     this._enabled = false;
//   };
// }

// function CoffeeMachine(power) {
//   Machine.call(this);

//   this.enable();

//   console.log( this._enabled ); // true
// }

// var coffeeMachine = new CoffeeMachine(10000);





// ===|=== FUNCTIONAL INHERITANCE TASK
/**
Унаследуйте холодильник
Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():

Приватное свойство food хранит массив еды.
Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
Если холодильник выключен, то добавить еду нельзя, будет ошибка.
Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.
Код для проверки:

var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен
Ещё код для проверки:

// создать холодильник мощностью 500 (не более 5 еды)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
Код использования холодильника без ошибок:

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
 */


// Исходный код класса Machine, от которого нужно наследовать:

// function Machine(power) {
//   this._power = power;
//   this._enable = false;


//   var self = this;

//   this.enable = function() {
//     this._enable = true;
//   }

//   this.enable = function() {
//     this._enable = false;
//   };
// }



// SOLUTION
// function Fridge(power) {
//   Machine.apply(this, arguments);

//   var food = []; // приватное свойство food;

//   this.addFood = function() {
//     if (!this._enable) {
//       throw new Error('Холодильник выключен')
//     }

//     if (food.length + arguments.length > this._power / 100) {
//       throw new Error("Нельзя добавить, не хватает мощности");
//     }
//     for (var i = 0; i < arguments.length; i++) {
//       food.push(arguments[i]); // добавить всё из arguments
//     }
//   };

//   this.getFood = function() {
//     // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
//     return food.slice();
//   };
// }





// ===|=== PROTOTYPE INHERITANCE EXAMPLE
/**
Разберем ООП в JavaScript на примере игры, в которой по полю ездят танчики и стреляют друг в друга. При попадании в танчик у него уменьшается количество брони, пока он не взорвется.

Данный пример очень удобен, потому что каждый танчик по сути - это объект. У этого объекта есть методы (едь, стой, стрельни) и свойства (количество снарядов, количество брони, местоположение танчика в пространстве).
 */
// class Tank {
//   constructor () {
//     this.ammution = 10;
//   }

//   fireTo () {
//     if (this._canFire()) {
//       this.ammution = this.ammution - 1;
//     }
//   }

//   _canFire(ammution) { // приватный метод
//     if (this.ammution > 0){
//       return true;
//     } else {
//       return false;
//       console.log('У вас закончились снаряды');
//     }
//   }
// }


// var tank = new Tank(10);
// console.log(tank.ammution); // 10

// tank.fireTo(10, 20); // Стреляем по координатам
// console.log(tank.ammution); // Количество снарядов 9





// ===|=== PROTOTYPE __proto__ INHERITANCE EXAMPLE
/* # */ console.log(Function.__proto__ === Function.prototype);
/* # */ console.log(Function.prototype.__proto__ === Object.prototype);
/* # */ console.log(Object.__proto__ !== Object.prototype);
/* # */ console.log(Object.__proto__ === Function.prototype);
 
var A = function () {};
/* # */ console.log(A.__proto__ === Function.prototype);
A.prototype.b = 100;
 
var a = new A();
/* # */ console.log(A.prototype.constructor === A);
/* # */ console.log(A.prototype === a.__proto__);
/* # */ console.log(a instanceof A);
 
A.prototype.c = 101;
/* # */ console.log(a.c === 101);
 
a.c = -100;
/* # */ console.log(a.c === -100);
 
A.prototype = {};
/* # */ console.log(A.prototype.constructor !== A);
/* # */ console.log(A.prototype.constructor === Object);
/* # */ console.log(a.c === -100);
/* # */ console.log(a.__proto__.b == 100);
/* # */ console.log(a.__proto__.c == 101);
/* # */ console.log(a.__proto__.constructor === A);
/* # */ console.log(a.__proto__ !== A.prototype);
/* # */ console.log(!(a instanceof A));
/* # */ console.log(A.prototype.constructor === Object);
/* # */ console.log(a.__proto__.constructor.prototype.constructor === Object);
 
A.prototype.b = 536;
/* # */ console.log(a.b == 100);
/* # */ console.log(a.__proto__.constructor.prototype.b === 536);
 
var b = new A();
/* # */ console.log(a.__proto__.__proto__.constructor === a.__proto__.constructor.prototype.constructor);
 
/* # */ console.log(b instanceof A);
/* # */ console.log(b instanceof Object);
/* # */ console.log(a instanceof Object);














