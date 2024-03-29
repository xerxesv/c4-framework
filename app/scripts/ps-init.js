/******************
 * PHOTOSWIPE INITIALIZER
 * jQuery wrapper, modified by ESY from
 * http://webdesign.tutsplus.com/tutorials/the-perfect-lightbox-using-photoswipe-with-jquery--cms-23587
 ******************/
(function ($) {
  'use strict';

  var $pswp = $('.pswp');

  // photoswipe wrapper allows galleries can be initialized more easily
  // for example: $('div.psGallery').photoswipe({bgOpacity: 0.5});
  // takes any photoswipe options as config:
  // http://photoswipe.com/documentation/options.html
  $.fn.photoswipe = function (config) {

    // group ID allows multiple galleries on one page
    var gid = 0;

    $(this).each(function () {
      var $pics = $(this),
        items = [],
        getItems = function () {

          // each image is contained in a figure element
          // photoswipe galleries must use semantic figure>(a>img)+figcaption structure
          $pics.find('figure').each(function () {
            // find all the elements
            var $a = $(this).find('a'),
              $thumb = $(this).find('img'),
              $cap = $(this).find('figcaption');

            // get the link properties
            var $href = $a.data('href'),
              $size = $a.data('size').split('x'),
              $width = $size[0],
              $height = $size[1];

            // save properties to a photoswipe item
            var item = {
              src: $href,
              w: $width,
              h: $height,
              group: gid
            };

            // save the caption if it exists
            if ($cap.length > 0) {
              item.title = $cap.html();
            }

            // save thumbnail so we can get its dimensions/position later
            item.thumb = $thumb;

            // save item object to items array
            items.push(item);
          });
          return items;
        };

      // set the picture ID index as a data-attribute on each figure
      var pid = 0;
      $(this).find('figure').each(function () {
        $(this).attr('data-index', pid);
        pid += 1;
      });

      // also set the group ID on the gallery container
      gid += 1;
      $(this).attr('data-group', gid);

      items = getItems();

      // click event for the anchor (tuts+ used figure)
      $pics.on('click', 'a', function (event) {
        event.preventDefault();

        // only trigger on actual image links
        if ($(this).find('img').length === 0) {
          return;
        }

        // get the index from the anchor's parent figure, where we previously stored it as a data-attribute
        var $fig = $(this).closest('figure'),
          $index = $fig.data('index');

        // set options, including defaults
        var options = $.extend({
          // 70% opacity default (PS: 1)
          bgOpacity: 0.7,
          // animate opacity default (PS: false)
          showHideOpacity: true,
          index: $index,
          // get the group ID to ensure unique URI
          galleryUID: items[$index].group,
          // get position and bounds of thumbnail to ensure accurate animation
          getThumbBoundsFn: function (index) {
            var thumbnail = items[index].thumb,
              // jQuery .offset() gets position and accounts for window.pageYOffset
              rect = thumbnail.offset();
            return {
              x: rect.left,
              y: rect.top,
              w: thumbnail.width()
            };
          }
        }, config) || {};

        // initialize the photoswipe lightbox
        var lightBox = new PhotoSwipe($pswp[0], PhotoSwipeUI_Default, items, options);
        lightBox.init();

        // disable screen reader interaction on everything but the photoswipe lightbox
        $pswp.siblings().not('script').attr('aria-hidden', true);

        // trap focus inside the photoswipe lightbox
        $pswp.keydown(function (evt) {
          // remove the idle class so the UI doesn't disappear
          $('.pswp__ui').removeClass('pswp__ui--idle');
          // trigger the tabTrap plugin
          $(this).tabTrap(evt);
        });

        // function to retain focus on close
        lightBox.listen('close', function () {
          $pswp.siblings().not('script').attr('aria-hidden', false);
          // get index of the current image
          var currIndex = lightBox.getCurrentIndex();
          // set focus on it when the lightbox closes
          $pics.find('[data-index=' + currIndex + '] a').focus();
        });
      });
    });
  };
})(jQuery);
