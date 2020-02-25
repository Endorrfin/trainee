
// ===|=== POLYFILL BIND Example I MDN
// if (!Function.prototype.bind) {
//   Function.prototype.bind = function(oThis) {

//     if (typeof this !== 'function') {
//       // ближайший аналог внутренней функции
//       // IsCallable в ECMAScript 5
//       throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
//     }

//     var aArgs = Array.prototype.slice.call(arguments, 1),
//         fToBind = this,
//         fNOP    = function() {},
//         fBound  = function() {
//           return fToBind.apply(this instanceof fNOP && oThis
//                  ? this
//                  : oThis,
//                  aArgs.concat(Array.prototype.slice.call(arguments)));
//         };

//     fNOP.prototype = this.prototype;
//     fBound.prototype = new fNOP();

//     return fBound;
//   };
// }



// ===|=== POLYFILL BIND Example II MDN
//  Yes, it does work with `new funcA.bind(thisArg, args)`
// if (!Function.prototype.bind) (function(){
//   var ArrayPrototypeSlice = Array.prototype.slice;
//   Function.prototype.bind = function(otherThis) {
//     if (typeof this !== 'function') {
//       // closest thing possible to the ECMAScript 5
//       // internal IsCallable function
//       throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
//     }

//     var baseArgs= ArrayPrototypeSlice .call(arguments, 1),
//         baseArgsLength = baseArgs.length,
//         fToBind = this,
//         fNOP    = function() {},
//         fBound  = function() {
//           baseArgs.length = baseArgsLength; // reset to default base arguments
//           baseArgs.push.apply(baseArgs, arguments);
//           return fToBind.apply(
//                  fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs
//           );
//         };

//     if (this.prototype) {
//       // Function.prototype doesn't have a prototype property
//       fNOP.prototype = this.prototype; 
//     }
//     fBound.prototype = new fNOP();

//     return fBound;
//   };
// })();



// ===|=== POLYFILL BIND Example II

// if (!Function.prototype.bind) {
//   Function.prototype.bind = function(context /* ...args */) {
//     var fn = this;
//     var args = Array.prototype.slice.call(arguments, 1);

//     if(typeof fn !== 'function') {
//       throw new TypeError('Function.prototype.bind - context must be a valid function')
//     }

//     return function () {
//       return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
//     };
//   };
// }




// if (typeof Function.prototype.bind != 'function') {
//   Function.prototype.bind = function (context) {
//     var leftArgs = Array.prototype.slice.call(arguments, 1),
//       fn = this;
//     return function () {
//       fn.apply(context, leftArgs.concat(arguments));
//     };
//   };
// }



















// ===|=== POLYFILL BIND Object.create 
// if(typeof Object.create !== 'function') {
//   Object.create = function(o, props) {
//     function F() {}
//     F.prototype = o;

//     if(typeof(props) === 'object') {
//       for (prop in props) {
//         if (props.hasOwnProperty((prop))) {
//           F[prop] = props[prop];
//         }
//       }
//     }
//     return new F();
//   };
// }


// var Foo = function() {};
// Foo.prototype.bar = 'bar';
// Foo.prototype.baz = 'baz';
// Foo.prototype.bang = 'bang';





// ===|=== POLYFILL BIND Object.create ***
// // Object.create partial Polyfill
// // Support for second parameter is non-standart
// if(typeof Object.create !== 'function') {
//   Object.create = function(o, props) {
//     // Create new Object whose prototype is o
//     function F () {}
//     F.prototype = o;
//     result = new F();
//     // Copy properties of second parameter into new object;
//     if(typeof (props) === 'object') {
//       for (prop in props) {
//         if (props.hasOwnProperty((prop))) {
//           // Even though we don't support all of the functionality that the second
//           // parameter would normally have, we respect the format for the object
//           // passed as that second parameter its specification.
//           result[prop] = props[prop].value;
//         }
//       }
//     }
//     // return new Object
//     return result
//   }
// }






// ===|=== POLYFILL BIND Object.create 
// Object.create = Object.create || function (obj) {

//   if (arguments.length !== 1) {
//       throw new Error('Object.create implementation only accepts one parameter.');
//   }

//   function F () {}
//   F.prototype = obj;
//   retun new F();
// };



// var Animal = function () {

//   var helloCount = 0;
//   var self = this;
//   //priviledge methods
//   this.AnimalHello = function() {
//       helloCount++;
//       console.log(self.Name + ' says hello (animalHello)');
//   };

//   this.GetHelloCount = function (callback) {
//       callback.call(null, helloCount);
//   }

// };

// Animal.prototype = {
//   Name: 'Generic',
//   IsAnimal: true
// };

// var Sheep = function (name) {

//   var sheep = new Animal();
//   //use parasitic inheritance to extend sheep
//   //http://www.crockford.com/javascript/inheritance.html
//   sheep.Name = name || 'Woolie'
//   sheep.SheepHello = function() {
//       this.AnimalHello();
//       var self = this;
//       this.GetHelloCount(function(count) {
//           console.log('i (' + self.Name + ') have said hello ' + count + ' times (sheepHello anon callback)');
//       });
//   }

//   return sheep;

// };

// Sheep.prototype = new Animal();
// Sheep.prototype.isSheep = true;

// var sheepie = new Sheep('Sheepie');
// var lambie = new Sheep('Lambie');

// sheepie.AnimalHello();
// sheepie.SheepHello();
// lambie.SheepHello();











// Javascript Classical Inheritance - Prototypes

// function Animal (name) {
//   this.name = name;
// }

// Animal.prototype.breathe = function () {
//   return "I'm breathing";
// };

// Animal.prototype.say_name = function () {
//   return this.name;
// };

// function Dog (name) {
//   Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.bark = function () {
//   return 'ow ow';
// };

// // Main
// var toto = new Dog('toto');
// console.log(toto.say_name());
// console.log(toto.bark());




// Javascript Crockford's Functional Inheritance
// spec receives instance properties
function animal (spec) {
  // interface object
  var that = {};

  // Private
  function breathe () {
    return "I'm breathing";
  }

  function say_name () {
    return spec.name || '';
  }

  // Public - goes into that
  that.breathe  = breathe;
  that.say_name = say_name;

  return that;
}

function dog (spec) {
  var that = animal(spec);

  // Private
  function bark () {
    return 'ow ow';
  }

  // Public
  that.bark = bark;

  return that;
}

// Main
var toto = dog({name: 'toto'});
console.log(toto.say_name());
console.log(toto.bark());








































