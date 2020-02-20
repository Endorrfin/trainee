



// ===|=== EXAMPLE call
{/* <input id="elem" value="привет"/> */}

// var elem = document.getElementById('elem');

// function func(surname, name) {
// 	console.log(this.elem.value + ', ' + surname + ' ' + name);
// }

// func.call(this, "Musk", "Elon"); //тут должно вывести 'привет, Musk Elon'





// ===|=== EXAMPLE apply
{/* <input id="elem" value="привет"/> */}

// var elem = document.getElementById('elem');

// function func(surname, name) {
// 	console.log(this.elem.value + ', ' + surname + ' ' + name);
// }

// func.apply(this, ["Kertis", "Rik"]); //тут должно вывести 'привет, Kertis Rik'



// ===|=== EXAMPLE bind
/* <input id="elem" value="привет"> */
// var elem = document.getElementById('elem');

// function func(surname, name) {
// 	console.log(this.elem.value + ', ' + surname + ' ' + name);
// }

// //Тут напишите конструкцию с bind()
// func.bind(elem.value);

// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'





// ===|=== EXAMPLE
/**
В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

Ответ: undefined.
Результатом работы bind является другой объект. У него уже нет свойства test.
 */
// function sayHi() {
//   console.log( this.name );
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася"
// });

// console.log( bound.test ); // что выведет? почему?





// ===|=== EXAMPLE
/**
 Исправьте функцию, теряющую "this"
 */

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword.call(this, user.loginOk, user.loginFail);



























