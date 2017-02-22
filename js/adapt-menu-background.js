define(["coreJS/adapt"], function(Adapt) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var menuBackground = Backbone.View.extend({

        className: "extension",

        initialize: function() {
        }
    });


    Adapt.on("menuView:ready", function() {
        $('.menu-container-inner').css('background', 'url(' + Adapt.course.get('_menuBackground')._link + ')');
        $('.menu-container-inner').css('padding-bottom', '15%');
        $('.menu-container-inner').css('background-size', 'cover');
    });

    return menuBackground;
});
