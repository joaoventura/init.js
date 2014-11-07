/*
*  This file declares the sub-module 'a' for 'mylib'.
*  Everything in this module will be globally accessible
*  using the namespace 'mylib.a'.
*
*/
console.log("> mylib_a.js loaded..");


mylib.a = (function () {

    // Create the module namespace
    var a = {};

    // Some module functions which will be
    // accessible using mylib.a
    a.hello = function () {
        console.log("Hello from mylib.a");
    }

    // Must return the "namespace" variable
    return a;

})();
