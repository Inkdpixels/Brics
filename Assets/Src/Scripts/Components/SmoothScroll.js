var $ = require('jquery');

module.exports = function(el) {
    var $el = $(el);
    var $scrollAnimated = $('body, html');
    var $target = $($el.data('target') || $el.attr('href'));

    $el.on('click', function(e) {
        e.preventDefault();

        $scrollAnimated.animate({
            'scrollTop':$target.offset().top
        }, 600);
    });
};