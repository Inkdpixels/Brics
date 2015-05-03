var Prism = require('./Vendor/Prism.js');
var $ = require('jquery');
var AnimationHeader = require('./Components/AnimationHeader.js');

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
        var instance;

        switch(componentName) {
            case 'FixedSectionNavigation':
                // console.log('yep');
                break;
            case 'AnimationHeader':
                instance = new AnimationHeader($el.get(0));
                break;
            default:
                break;
        }
    });
});