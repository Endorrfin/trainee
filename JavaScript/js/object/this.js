

/**
Ключевое слово this

Это слово ссылается на текущий объект, вызывающий функцию.
Все функции, объявленные в глобальном контексте, являются методами (в браузере) объекта window, так же все функции, вызванные без контекста в this, ссылаются на window.
Все довольно просто, пока не начинаешь разбираться с асинхронным программированием.
 */

// ===|=== EXAMPLE
// var a = {
//   property1: 1,
//   property2: 2,
//   func: function() {
//       console.log(this.property1 + this.property2, 'test');
//       return this.property1 + this.property2;
//   }
// }
// console.log(a.func());
// //this ссылается на объект 'a', которому принадлежит вызываемый метод.
// setTimeout(function() {
// console.log(a.func());
// //this все так же ссылается на объект 'a', потому что функция, переданная в таймаут, замкнула на себя объект 'a'
// },100);

// setTimeout(a.func,101);
// //результат будет уже другой, NaN (как результат сложения undefined + undefined)
// //потому, как здесь мы передаем лишь функцию, а сама по себе она не хранит ссылку на объект, к которому принадлежит





/**
Вместо setTimeout можно подставить setInterval или привязку обработчика события (например: elem.onclick или addEventListener), или любой другой способ выполнять отложенные вычисления, все они так или иначе вызывают потерю контекста исполнения. И чтобы сохранить this есть несколько путей.
Можно просто обернуть это в анонимную функцию, можно создать переменную var that = this и использовать that вместо this (переменную создать вне вызываемой функции, естественно), а также воспользоваться самым правильным способом — насильно привязать. Для этого у функций есть встроенный метод bind (стал доступен в стандарте EcmaScript 5, поэтому для старых браузеров нужно реализовывать его поддержку), который возвращает новую функцию, привязанную к нужному контексту и аргументам. Примеры:
 */



// ===|=== EXAMPLE
// function logCurrentThisPlease() {
//   console.log(this);
// }
// logCurrentThisPlease(); //window

// var a = {}
// a.logCurrentThisPlease = logCurrentThisPlease;
// a.logCurrentThisPlease(); //a
// setTimeout(a.logCurrentThisPlease, 100); //window, так как мы передаем только ссылку на функцию
// setTimeout(function() {
//   a.logCurrentThisPlease();
// }, 200);//a
// setTimeout(function() {
//   this.logCurrentThisPlease();
// }.bind(a), 200);//a

// var that = a;
// function logCurrentThatPlease() {
//   console.log(that);
// }
// logCurrentThatPlease(); //a
// setTimeout(logCurrentThatPlease, 200);//a

// var logCurrentBindedContextPlease = logCurrentThisPlease.bind(a); //первый аргумент — контекст, к которому нужно привязать, остальные аргументы — аргументы функции
// logCurrentBindedContextPlease(); //a
// setTimeout(logCurrentBindedContextPlease, 200); //a





// ===|=== EXAMPLE
/**
Ну и посложнее пример.
Потеря в рекурсивных функциях, работающих через определенные интервалы времени.
 */

// var a = {
// 	i: 0,
// 	infinityIncrementation: function() {
// 		console.log( this.i++ );
// 		if (this.i < Infinity) setTimeout(this.infinityIncrementation,500);
// 	}
// }
// a.infinityIncrementation(); // 0,undefined — не работает, потому что теряется контекст исполнения
// a.infinityIncrementation = a.infinityIncrementation.bind(a); //не правильный но работающий способ
// a.infinityIncrementation(); //0,1,2,3,4,5,6,7,8,9,10...Infinity-1
	
// //правильный способ
// var b = {
// 	i: 0,
// 	infinityIncrementation: function() {
// 		console.log( this.i++ );
// 		if (this.i < Infinity) setTimeout(function() {this.infinityIncrementation}.bind(this),500);
// 	}
// }
// b.infinityIncrementation(); //0,1,2,3,4,5,6,7,8,9,10...Infinity-1



/**
Методы функций, позволяющие менять контекст исполнения — bind,call,apply

Function.bind — метод, принимающий первый аргумент как контекст, в котором он будет исполняться (каким будет this), и остальные как неограниченное количество аргументов, с которыми будет вызываться возвращаемая функция.
Function.apply — метод, вызывающий функцию, первый аргумент – аргумент, который будет являться this в функции, второй — массив аргументов, с которыми будет вызвана функция.
Function.call — то же самое, что и apply, только вместо второго аргумента, неограниченное количество аргументов, которые будут переданы в функцию.
 */














