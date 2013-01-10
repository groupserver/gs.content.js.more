// The More widget for GroupServer
jQuery.noConflict();

var GSMoreWidget = function (widgetId) {
    // Private variables
    var widget = null;
    var content = null;
    var moreButton = null;
    var lessButton = null;

    var compress = function() {
        content.removeClass('gs-content-js-more-content-large');
        content.addClass('gs-content-js-more-content-small');
        moreButton.show();
        lessButton.hide();
    };
    var enlarge = function() {
        content.removeClass('gs-content-js-more-content-small');
        content.addClass('gs-content-js-more-content-large');
        moreButton.hide();
        lessButton.show();
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
        moreButton = widget.find('.gs-content-js-more-button');

        moreButton.removeAttr('href');
        moreButton.css('cursor', 'pointer');
        moreButton.click(handle_click);

        lessButton = widget.find('.gs-content-js-less-button');
        lessButton.removeAttr('href');
        lessButton.css('cursor', 'pointer');
        lessButton.click(handle_click);

        compress();
    }(); // init. Note the () is deliberate, so it is run automatically.
};