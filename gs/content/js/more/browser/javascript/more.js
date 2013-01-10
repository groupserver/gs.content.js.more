// The More widget for GroupServer
jQuery.noConflict();

var GSMoreWidget = function (widgetId) {
    // Private variables
    var widget = null;
    var content = null;
    var button = null;

    var compress = function() {
        content.removeClass('gs-content-js-more-content-large');
        content.addClass('gs-content-js-more-content-small');
    };
    var enlarge = function() {
        content.removeClass('gs-content-js-more-content-small');
        content.addClass('gs-content-js-more-content-large');
    };

    var handle_click = function(event, data) {
        if (content.hasClass('gs-content-js-more-content-small')) {
            enlarge();
        } else {
            compress();
        }
    }

    var init = function () {
        widget = jQuery(widgetId);

        content = widget.find('.gs-content-js-more-content');

        button = widget.find('.gs-content-js-more-button');
        button.removeAttr('href');
        button.css('cursor', 'pointer');
        button.click(handle_click);
    }(); // init. Note the () is deliberate, so it is run automatically.
};