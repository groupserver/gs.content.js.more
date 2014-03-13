"use strict";jQuery.noConflict();function GSMoreWidget(f){var e=null,i=null,j=null,b=null,g="gs-content-js-more-content-large",a="gs-content-js-more-content-small";
function c(){i.removeClass(g);i.addClass(a);j.show();b.hide()}function d(){i.removeClass(a);
i.addClass(g);j.hide();b.show()}function h(l,m){if(i.hasClass(a)){d()}else{c()}}function k(){e=jQuery(f);
i=e.find(".gs-content-js-more-content");j=e.find(".gs-content-js-more-buttons-more");
b=e.find(".gs-content-js-more-buttons-less");d();if(i.height()>80){j.removeAttr("href");
j.css("cursor","pointer");j.click(h);b.removeAttr("href");b.css("cursor","pointer");
b.click(h);c()}else{e.find(".gs-content-js-more-buttons").addClass("hide")}}k();return{is_small:function(){i.hasClass(a)
}}};