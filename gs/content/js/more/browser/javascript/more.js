// The More widget for GroupServer
jQuery.noConflict();

var GSMoreWidget = function (widgetId) {
    // Private variables
    var widget = null;
    var content = null;
    var moreButton = null;
    var lessButton = null;

    var LARGE = 'gs-content-js-more-content-large';
    var SMALL = 'gs-content-js-more-content-small';

    var compress = function() {
        content.removeClass(LARGE);
        content.addClass(SMALL);
        moreButton.show();
        lessButton.hide();
    };
    var enlarge = function() {
        content.removeClass(SMALL);
        content.addClass(LARGE);
        moreButton.hide();
        lessButton.show();
    };

    var handle_click = function(event, data) {
        if (content.hasClass(SMALL)) {
            enlarge();
        } else {
            compress();
        }
    }

    var init = function () {
        widget = jQuery(widgetId);

        content = widget.find('.gs-content-js-more-content');
        moreButton = widget.find('.gs-content-js-more-buttons-more');

        moreButton.removeAttr('href');
        moreButton.css('cursor', 'pointer');
        moreButton.click(handle_click);

        lessButton = widget.find('.gs-content-js-more-buttons-less');
        lessButton.removeAttr('href');
        lessButton.css('cursor', 'pointer');
        lessButton.click(handle_click);

        compress();
    }(); // init. Note the () is deliberate, so it is run automatically.
};