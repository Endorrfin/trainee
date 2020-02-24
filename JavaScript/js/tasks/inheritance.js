
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
class Animal{
  constructor(name, run) {
    this.name = name
    this.run = run
    return this
  }


  getName () {
    return this.name
  };
  
  getRun () {
    return this.run
  };
}



class Rabbit extends Animal {
  constructor(name, run, color) {
    super(name, run)
    this.color = color
    return this
  }

  getColor() {
    return this.color
  }
}

// const willy = new Animal('Willy', 'white', 38);
// willy.getName();
// console.log(willy.getName());
// willy.getColor();
// console.log(willy.getColor());
// willy.getSpeed();
// console.log(willy.getSpeed());


function firstRabbit() {
  let rabbit = new Rabbit('Willy', '38', 'white');
  console.log(rabbit.getName());
  console.log(rabbit.getRun());
  console.log(rabbit.getColor());
}















// ===|=== FUNCTIONAL INHERITANCE
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.run = function() {
//   console.log(this.name + "достигает скорости");
// }

// Animal.eat = function() {
//   return this;
// }



// let Rabbit = new Animal();
// let run = Rabbit.run;
// run();

// let eat = Animal.eat;
// eat();








































