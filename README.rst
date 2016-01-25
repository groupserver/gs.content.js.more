======================
``gs.content.js.more``
======================
~~~~~~~~~~~
More Widget
~~~~~~~~~~~

:Author: `Michael JasonSmith`_
:Contact: Michael JasonSmith <mpj17@onlinegroups.net>
:Date: 2013-03-18
:Organization: `GroupServer.org`_
:Copyright: This document is licensed under a
  `Creative Commons Attribution-Share Alike 3.0 New Zealand License`_
  by `OnlineGroups.Net`_.

Introduction
============

This product provide the *More* widget_ for GroupServer_. It provides a
JavaScript_ resource that allows more information to be disclosed. Behind
the scenes, it relies on CSS_ for its operation.

Widget
======

The *More* widget is similar to the *Disclosure* button: show shows more
information when clicked. However, the *More* button is used to always show
some information, and reveal more when clicked, while the *Disclosure*
button is designed to hide **all** the information.

JavaScript
==========

The JavaScript for the *More* widget is contained in the resource
``gs-content-js-more-20130110.js``::

  <script type="text/javascript" 
          src="/++resource++gs-content-js-more-20130110.js">&#160;</script>

The widget is instantiated by passing it the selector for the widget::

  <script type="text/javascript">
    jQuery.noConflict();
    jQuery(document).ready( function () {
        GSMoreWidget('#id-of-widget');
    });
  </script>

Within the document the HTML for the widget is divided in two parts. The
first is the complete content, and the second contains the buttons::

  <div id="id-of-widget" class="gs-content-js-more">
    <div class="gs-content-js-more-content gs-content-js-more-content-small">
      A long bit of text.
    </div><!--gs-content-js-more-content-->
    <p class="gs-content-js-more-buttons">
      <a class="gs-content-js-more-buttons-more"
         href="#"><strong>More&#8230;</strong></a>
      <a class="gs-content-js-more-buttons-less"
         href="#"><span class="minor">Less</span></a>
    </p>
  </div><!--id-of-widget-->

The main content is given the class ``gs-content-js-more-content-small`` if
it should be small initially, or ``gs-content-js-more-content-large`` if
the default state should be expanded. 

After the content there are two buttons: one for revealing more of the
content, and one for revealing less. Clicking on the *More* button sets the
class of the content to ``gs-content-js-more-content-large``, while
clicking on *Less* sets it to ``gs-content-js-more-content-small``. What
these classes do is defined in the CSS_.

CSS
===

The default CSS for this product defines the *small* view as having a
maximum height of 4 units (5.538em). The CSS does specify a transition, to
make everything look nice. However, ``auto`` values for ``height`` and
``width`` are not animated.

Resources
=========

- Code repository: https://source.iopen.net/groupserver/gs.content.js.more
- Questions and comments to http://groupserver.org/groups/development
- Report bugs at https://redmine.iopen.net/projects/groupserver

.. _GroupServer: http://groupserver.org/
.. _GroupServer.org: http://groupserver.org/
.. _OnlineGroups.Net: https://onlinegroups.net
.. _Michael JasonSmith: http://groupserver.org/p/mpj17
.. _Creative Commons Attribution-Share Alike 3.0 New Zealand License:
   http://creativecommons.org/licenses/by-sa/3.0/nz/
.. _jQuery.UI: http://jqueryui.com/

..  LocalWords:  CSS
