define(["coreJS/adapt"], function(Adapt) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var menuBackground = Backbone.View.extend({

        className: "extension",

        initialize: function() {}
    });


    Adapt.on("menuView:ready", function() {
        if (Adapt.course.get('_menuBackground')._menuHeaderLink != undefined) {
            $('.menu-header').css('background', 'url(' + Adapt.course.get('_menuBackground')._menuHeaderLink + ')');
        }
        if (Adapt.course.get('_menuBackground')._backgroundLink != undefined) {
            $('.menu-container-inner').css('background', 'url(' + Adapt.course.get('_menuBackground')._backgroundLink + ')');
            $('.menu-container-inner').css('padding-bottom', '15%');
            $('.menu-container-inner').css('background-size', 'cover');
            $('.menu-container-inner').css('background-position-y', '200px');
        }

    });

    return menuBackground;
});
