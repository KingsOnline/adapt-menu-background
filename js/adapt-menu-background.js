define(["coreJS/adapt"], function(Adapt) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var menuBackground = Backbone.View.extend({

        className: "extension",

        initialize: function() {}
    });


    Adapt.on("menuView:ready", function() {
      console.log(Adapt.course.get('_menuBackground')._menuHeaderLink);
        if (Adapt.course.get('_menuBackground')._menuHeaderLink != undefined || Adapt.course.get('_menuBackground')._menuHeaderLink === "") {
            $('.menu-header').css('background', 'url(' + Adapt.course.get('_menuBackground')._menuHeaderLink + ')');
        }
        if (Adapt.course.get('_menuBackground')._backgroundLink != undefined || Adapt.course.get('_menuBackground')._backgroundLink === "") {
            $('.menu-container-inner').css('background', 'url(' + Adapt.course.get('_menuBackground')._backgroundLink + ')');
            $('.menu-container-inner').css('padding-bottom', '22%');
            $('.menu-container-inner').css('background-size', 'cover');
            $('.menu-container-inner').css('background-position-y', '300px');
        }
    });

    return menuBackground;
});
