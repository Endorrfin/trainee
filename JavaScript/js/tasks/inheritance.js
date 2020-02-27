
// ===|=== PROTOTYPE INHERITANCE
// function Animal (name, run) {
//   this.name = name;
//   this.run = run;
// };

// Animal.prototype.getName = function () {
//   return this.name;
// }

// Animal.prototype.getRun = function() {
//   return this.run;
// };




// function Rabbit(name, run, color) {
//   // вызываем super constructor
//   Animal.call(this, name, run)
//   this.color = color;
// }

// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.setColor = function(color) {
//   this.color = color;
// }

// Rabbit.prototype.getColor = function() {
//   return this.color;
// }

// let rabbit = new Rabbit('Willy', '38', 'white');
// console.log(rabbit);







// ===|=== CLASSES INHERITANCE
// class Animal{
//   constructor(name, run) {
//     this.name = name
//     this.run = run
//   }


//   getName () {
//     return this.name
//   };
  
//   getRun () {
//     return this.run
//   };
// }



// class Rabbit extends Animal {
//   constructor(name, run, color) {
//     super(name, run)
//     this.color = color
//   }

//   getColor() {
//     return this.color
//   }
// }


// function firstRabbit() {
//   let rabbit = new Rabbit('Willy', '38', 'white');
//   console.log(rabbit.getName());
//   console.log(rabbit.getRun());
//   console.log(rabbit.getColor());
// }















// ===|=== FUNCTIONAL INHERITANCE I VERSION
// function animal (spec) {
//   var obj = {};

// function getNane () {
//   return spec.name;
// }

// function getRun () {
//   return 'I can to run';
// }

// obj.getNane = getNane;
// obj.getRun = getRun;

// return obj;
// }


// function rabbit(spec) {
//   var obj = animal(spec);

//   function color () {
//     return 'white';
//   }

//   obj.color = color;
//   return obj;
// }

// var willy = rabbit({name: 'Willy', run: 38});
// console.log(willy.getNane());
// console.log(willy.getRun());
// console.log(willy.color());











// <+++|+++> FUNCTIONAL INHERITANCE II VERSION
// function Animal(name) {
//   this.name = name;
  
//   this.getName = function() {
//     return this.name;
//   }
// }


// function Rabbit() {
//   Animal.apply(this, arguments);

//   this.run = function() {
//     return 'Rabbit ' + this.getName() + 'is running';
//   }
// }


// var rabbit = new Rabbit('Willy');
// console.log(rabbit.getName());
// console.log(rabbit.run());







































