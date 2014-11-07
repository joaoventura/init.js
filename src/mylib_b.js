/*
*  This file declares the sub-module 'b' for 'mylib'.
*  Everything in this module will be globally accessible
*  using the namespace 'mylib.b'.
*
*/
console.log("> mylib_b.js loaded..");


mylib.b = (function () {

    // Create the module namespace
    var b = {};

    // Use mylib.a namespace like an import!
    var a = mylib.a;

    // Some module functions which will be
    // accessible using mylib.b
    b.hello = function () {
        console.log("Hello from mylib.b");

        // We can call mylib.a directly
        // or using the 'a' object.
        mylib.a.hello();
        a.hello();

        // Everything defined in mylib is available
        console.log(mylib.CONST);
    }

    // Must return the "namespace" variable
    return b;

})();
