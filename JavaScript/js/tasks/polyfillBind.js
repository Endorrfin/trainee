
// ===|=== POLYFILL BIND Example 

// if(!Function.prototype.bind) {
//   Function.prototype.bind = function(otherThis) {
//     if(typeof this !== 'function') throw new Error ('Only function context can be bound to this');

//     var bindThis = this;
//     return function() {
//       return bindThis.apply(otherThis, arguments);
//     };
//   }
// }




// ===|=== POLYFILL BIND  
if(typeof Function.prototype.bind !== 'function') {
  Function.prototype.bind = function(context) {
    var leftArgs = Array.prototype.slice.call(arguments, 1),
    fn = this; 
    return function () {
      fn.apply(context, leftArgs.concat(arguments));
    };
  };
}


















