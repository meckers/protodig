define([
        'controller/mine-controller',
        'lib/events'
    ],
    function(mineController, Events) {


        return {

            init: function() {

                console.log("Application init");

                //MyController.init();
                mineController.init();

            }
        };

    });