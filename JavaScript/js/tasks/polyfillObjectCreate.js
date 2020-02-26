

// ===|=== POLYFILL BIND Object.create 
// if(!Object.create) {
//   Object.create = function (obj) {
//     function func() {}
//     func.prototype = obj;
//     return new func();
//   };
// }


// ===|=== POLYFILL BIND Object.create 
if(!Object.create) {
  Object.create = function(obj) {
    if (arguments.length > 1) {
      throw new Error ('Принимает только 1-й аргумент')
    };

    function F() {}
    F.prototype = obj;
    return new F;
  }
}