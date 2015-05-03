var Prism = require('./Vendor/Prism.js');
var $ = require('jquery');
var AnimationHeader = require('./Components/AnimationHeader.js');
var AnimateDemo = require('./Components/AnimateDemo.js');
var FixedSectionNavigation = require('./Components/FixedSectionNavigation.js');
var SmoothScroll = require('./Components/SmoothScroll.js');

$(function() {
    // Create a copy of each data-code section, and display it below with the Prism.js formatter.
    $('[data-code]').each(function(index, element) {
        var $el = $(element);
        var $code = $('<pre><code class="language-markup"></code></pre>');

        // Set the contents of the code element to it's parent containers escaped html fragment.
        $code.find('code').text($el.html()).html();

        // Insert the $code element.
        $el.after($code);

        // Hightlight the code element with Prism.js
        Prism.highlightAll();
    });

    // Initialize all components.
    $('[data-component]').each(function(index, el) {
        var $el = $(el);
        var componentName = $el.data('component');
        var Constructor;
        var instance;

        switch(componentName) {
            case 'FixedSectionNavigation':
                Constructor = FixedSectionNavigation;

                break;
            case 'AnimationHeader':
                Constructor = AnimationHeader;

                break;
            case 'SmoothScroll':
                Constructor = SmoothScroll;

                break;
            case 'AnimateDemo':
                Constructor = AnimateDemo;

                break;
            default:
                break;
        }

        if(Constructor) {
            instance = new Constructor($el.get(0));
        }
    });
});