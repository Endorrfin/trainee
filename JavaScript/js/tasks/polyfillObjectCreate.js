

// ===|=== POLYFILL BIND Object.create 
if(!Object.create) {
  Object.create = function (obj) {
    function func() {}
    func.prototype = obj;
    return new func();
  };
}


