var $ = require('jquery');

var FixedSectionNavigation = function(el) {
    var $el = $(el);
    this.el = el;
    this.$el = $el;
    this.$anchors = $el.find('a');
    this.origOffsetY = $el.offset().top;

    this.findAnchorTargets();
    this.evaluateState();
    document.addEventListener('scroll', this.evaluateState.bind(this));
};

FixedSectionNavigation.prototype.findAnchorTargets = function() {
    var anchorTargets = [];

    this.$anchors.each(function(index, el) {
        var $anchor = $(el);
        var $target = $($anchor.data('target') || $anchor.attr('href'));

        if($target.length) {
            anchorTargets.push({
                $anchor: $anchor,
                $target: $target
            });
        }
    });

    this.anchorTargets = anchorTargets;

    return anchorTargets;
};

FixedSectionNavigation.prototype.evaluateState = function() {
    this.evaluateFixedState();
    this.evaluateActiveItemsState();
};

FixedSectionNavigation.prototype.evaluateFixedState = function() {
    var el = this.el;
    var origOffsetY = this.origOffsetY;

    if(window.scrollY >= origOffsetY) {
        el.classList.add('sticky');
    } else {
        el.classList.remove('sticky');
    }
};

FixedSectionNavigation.prototype.evaluateActiveItemsState = function() {
    var anchorTargets = this.anchorTargets;
    var lastActiveObj;

    $.each(anchorTargets, function(index, obj) {
        var $target = obj.$target;
        var $anchor = obj.$anchor;

        if($target.offset().top - window.scrollY <= 5) {
            lastActiveObj = obj;
        }
    });

    if(lastActiveObj && lastActiveObj !== this.lastActiveItem) {
        this.lastActiveItem = lastActiveObj;

        this.$anchors.removeClass('active');
        this.lastActiveItem.$anchor.addClass('active');
    }
};

module.exports = FixedSectionNavigation;