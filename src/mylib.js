/*
*  This file declares the library 'mylib'.
*  It should be the first to be read.
*
*/
console.log("> mylib.js loaded..");


var mylib = (function () {

    // Create the module namespace
    var mylib = {}

    // Add anything relevant here
    mylib.CONST = "mylib";

    // Must return the "namespace" variable
    return mylib;

})();

