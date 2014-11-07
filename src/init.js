/*
*  Init.js is a simple javascript synchronous module loader for the
*  browser which helps you start producing your javascript code in
*  a modular away.
*
*  Just give the URLs of the scripts, a callback function and init.js
*  will callback when all scripts are loaded.
*
*  In a nutshell, init.js creates a <script> tag  for each source url
*  and adds it to document.head. So, it is like if you did that yourself
*  but saves you from that trouble.
*
*  Init.js is perfect for the development phase to develop and test
*  simple library projects in a modular way without requiring complex
*  solutions such as require.js, browserify, etc.
*  When you are ready for production, just concat all modules and go!
*
*  Author: João Ventura (flatangleweb@gmail.com)
*
*/


var initjs = (function() {

    // Loads files synchronously and callback
    function load(files, callback) {

        var loaded = 0;
        for (var i=0; i<files.length; i++) {

            var script = document.createElement('script');
            script.src = files[i];
            script.async = false;
            document.head.appendChild(script);

            script.onload = function () {
                loaded += 1;
                if (loaded === files.length) {
                    callback();
                }
            };
        }
    }

    // Export load function as 'load'
    return {load: load};

})();
