define([
        'controller/my-controller',
        'lib/events'
    ],
    function(MyController,
             Events) {


        return {

            init: function() {

                console.log("Application init");

                MyController.init();

            }
        };

    });