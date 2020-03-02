

// ===|=== EVENTS
// let elem = document.getElementById('elem');

// class Menu {
//   handleEvent(event) {
//     let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
//     this[method] (event);
//   }

//   onMousedown() {
//     elem.innerHTML = 'Кнопка мыши нажата';
//   }

//   onMouseup() {
//     elem.innerHTML += "... и отжата";
//   }
// }


// let menu = new Menu();
// elem.addEventListener('mousedown', menu);
// elem.addEventListener('mouseup', menu)







// ===|=== EVENTS TASK I
/**
 * Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
 */
// let text = document.getElementById('text1');
// let btn = document.getElementById('btn-1');

// btn.onclick = function() {
//   text.hidden = true; // option I
//   text.style.display = 'none'; // option II
// }



// ===|=== EVENTS TASK II
/**
 * Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
 */
// let btn2 = document.getElementById('btn-2');

// btn2.onclick = function() {
//   // btn2.style.display = 'none';
//   btn2.hidden = true;
// }





// ===|=== EVENTS TASK III
/**
Какой обработчик запустится?
В переменной button находится кнопка. Изначально на ней нет обработчиков.
Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
 */


// let btn3 = document.getElementById('btn-3');
// btn3.addEventListener("click", () => console.log("click-1"));
// btn3.removeEventListener("click", () => console.log("remove-1"));
// btn3.onclick = () => console.log('click-2');


/**
Первый обработчик сработает, потому что он не был удалён методом removeEventListener. 
Чтобы удалить обработчик, необходимо передать именно ту функцию, которая была назначена в качестве обработчика. 
Несмотря на то, что код идентичен, в removeEventListener передаётся новая, другая функция.
Для того чтобы удалить функцию-обработчик, нужно где-то сохранить ссылку на неё, например:
 */

// function handler() {
//   console.log(1);
// }

// btn3.addEventListener("click", handler);
// btn3.removeEventListener("click", handler);





// ===|=== EVENTS TASK IV
/**
Передвиньте мяч по полю
Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:

Требования:

Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
CSS-анимация желательна, но не обязательна;
Мяч ни в коем случае не должен пересекать границы поля;
При прокрутке страницы ничего не должно ломаться;
Заметки:

Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.
 */

// let field = document.getElementById('field');
// let ball = document.getElementById('ball');


// field.onclick = function(event) {
//   // координаты поля относительно окна браузера
//   let fieldCoords = this.getBoundingClientRect();

//   // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
//   // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля

//   let ballCoords = {
//     top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
//     left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
//   };

//   // запрещаем пересекать верхнюю границу поля
//   if (ballCoords.top < 0) ballCoords.top = 0;

//   // запрещаем пересекать левую границу поля
//   if (ballCoords.left < 0) ballCoords.left = 0;

//   // запрещаем пересекать правую границу поля
//   if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//     ballCoords.left = field.clientWidth - ball.clientWidth;
//   }

//   // запрещаем пересекать нижнюю границу поля 
//   if (ballCoords.top + ball. clientHeight > field.clientHeight) {
//     ballCoords.top = field.clientHeight - ball.clientHeight;
//   }

//   ball.style.left = ballCoords.left + 'px';
//   ball.style.top = ballCoords.top + 'px';
// }


// const nav = document.querySelector('.js-nav');
// nav.addEventListener('click', handleClick);

// function handleClick(e) {
//   e.preventDefault();
//   console.log(event.target);
//   console.log(event.currentTarget);

//   if(e.target === e.currentTarget) {
//     return;
//   }


//   const currentLink = e.target; 
//   const activeLink = e.currentTarget.querySelector('.menu-link');

//   if(activeLink) {
//     activeLink.classList.remove('.menu-link')
//   }
//   currentLink.classList.add('.nav__item--link');
// }







// ===|=== EVENTS TASK V
// document.addEventListener('click', function(event) {
//   console.log('start');

//   var i = 5000000000;
//   while (i >= 0) {
//     i--;

//   }
//   console.log('end');
// });






















