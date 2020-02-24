
// ===|=== POLYFILL BIND Example 
if (!Function.prototype.bind) {
  Function.prototype.bind = function(otherThis) {
    if(typeof this !== 'function') throw new Error('Only function context can be bound to this');

    var bindThis = this;
    return function() {return bindThis.apply(otherThis, arguments)};
  }
}























