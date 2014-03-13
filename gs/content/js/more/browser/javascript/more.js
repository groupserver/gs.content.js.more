// Copyright © 2013, 2014 OnlineGroups.net and Contributors.
// All Rights Reserved.
//
// This software is subject to the provisions of the Zope Public License,
// Version 2.1 (ZPL). http://groupserver.org/downloads/license/
//
// THIS SOFTWARE IS PROVIDED "AS IS" AND ANY AND ALL EXPRESS OR IMPLIED
// WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF TITLE, MERCHANTABILITY, AGAINST INFRINGEMENT, AND
// FITNESS FOR A PARTICULAR PURPOSE.
jQuery.noConflict();

function GSMoreWidget (widgetId) {
    // Private variables
    var widget = null, content = null, moreButton = null, lessButton = null, LARGE = 'gs-content-js-more-content-large', SMALL = 'gs-content-js-more-content-small';

    function compress() {
        content.removeClass(LARGE);
        content.addClass(SMALL);
        moreButton.show();
        lessButton.hide();
    };
    function enlarge() {
        content.removeClass(SMALL);
        content.addClass(LARGE);
        moreButton.hide();
        lessButton.show();
    };

    function handle_click(event, data) {
        if (content.hasClass(SMALL)) {
            enlarge();
        } else {
            compress();
        }
    }

    function init() {
        widget = jQuery(widgetId);

        content = widget.find('.gs-content-js-more-content');
        moreButton = widget.find('.gs-content-js-more-buttons-more');
        lessButton = widget.find('.gs-content-js-more-buttons-less');

        enlarge();

        if (content.height() > 80) {
            moreButton.removeAttr('href');
            moreButton.css('cursor', 'pointer');
            moreButton.click(handle_click);
            
            lessButton.removeAttr('href');
            lessButton.css('cursor', 'pointer');
            lessButton.click(handle_click);

            compress();
        } else { // content.height() <= 80
            widget.find('.gs-content-js-more-buttons').addClass('hide');
        }
    }

    init(); // Run the init automatically.

    return {
        is_small: function() {content.hasClass(SMALL);}
    }
}
