var $ = require('jquery');

var AnimateDemo = function(el) {
    this.$el = $(el);
    this.$target = this.$el.next();
    this.className = this.$el.data('class');

    this.$el.on('click', function(e) {
        e.preventDefault();

        this.restartAnimation();
    }.bind(this));
};

AnimateDemo.prototype.restartAnimation = function() {
    var className = this.className;

    this.$target.removeClass(className);

    setTimeout(function() {
        this.$target.addClass(className);
    }.bind(this), 100);
};

module.exports = AnimateDemo;
