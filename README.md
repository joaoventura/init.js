Init.js
=======

Init.js is a simple javascript synchronous module loader which helps you start producing your javascript library code for the browser in a modular away. 

Just give the URLs of the scripts, a callback function and init.js will call you back when all scripts are loaded.

## How does it work? ##

In a nutshell, init.js creates a 'script' tag for each source url and adds it to document.head. So, it is like if you did that yourself in your HTML document but saves you from that trouble.

## What is it good for? ##

Init.js is perfect while you are developing and testing simple library projects in a modular way without requiring complex solutions such as require.js, browserify, etc. When you are ready for production, just concat all the different module files into one and move on!

## Better than require.js? ##

No, simpler! If I just want to build and test a modular javascript library before I create a single monolithic file with all the modules, why would I need to use complex tools?

## Any example? ##

Yes, check the source code above.

Suppose we are building a javascript library called 'mylib' which have two sub-modules 'mylib.a' and 'mylib.b'. For greater modularity and ease of reading, each module and sub-module are in different source files. 

Then, in 'mylib.js' we declare the 'mylib' namespace and, in 'mylib_a.js' and 'mylib_b.js' we are appending the submodules 'a' and 'b' to mylib. In 'modules.html', which serves only as a test location, we just need to import all modules and submodules of 'mylib' and test them. Don't forget to add the init.js script to your document head.

'''var files = ['src/mylib.js', 'src/mylib_a.js', 'src/mylib_b.js'];

initjs.load(files, function() {
    console.log("All modules loaded");
    console.log(mylib);
    mylib.a.hello();
    mylib.b.hello();
});'''

Notice how we use 'mylib.a' and 'mylib.b' and everything works fine!

When our library is ready for production in a web application, we just need to concatenate the files into a single one (preferentially in the same order as they were tested in 'files'), and our one-file javascript library will work as expected. No need for complex tools.