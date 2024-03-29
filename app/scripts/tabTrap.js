/******************
 * TAB TRAP
 * Plugin for trapping tab inside an object
 * Modified from
 * https://accessibility.oit.ncsu.edu/training/aria/modal-window/version-3/
 ******************/

(function ($) {
  'use strict';

  // jQuery formatted selector to search for focusable items
  var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';

  $.fn.tabTrap = function (evt) {
    var $obj = $(this);

    // if tab or shift-tab pressed
    if (evt.which === 9) {

      // get list of all children elements in given object
      var o = $obj.find('*');

      // get list of focusable items
      var focusableItems;
      focusableItems = o.filter(focusableElementsString).filter(':visible');

      // get currently focused item
      var focusedItem;
      focusedItem = $(':focus');

      // get the number of focusable items
      var numberOfFocusableItems;
      numberOfFocusableItems = focusableItems.length;

      // get the index of the currently focused item
      var focusedItemIndex;
      focusedItemIndex = focusableItems.index(focusedItem);

      if (evt.shiftKey) {
        //back tab
        // if focused on first item and user preses back-tab, go to the last focusable item
        if (focusedItemIndex === 0) {
          focusableItems.get(numberOfFocusableItems - 1).focus();
          evt.preventDefault();
        }

      } else {
        //forward tab
        // if focused on the last item and user preses tab, go to the first focusable item
        if (focusedItemIndex === numberOfFocusableItems - 1) {
          focusableItems[0].focus();
          evt.preventDefault();
        }
      }
    }

  };

})(jQuery);
