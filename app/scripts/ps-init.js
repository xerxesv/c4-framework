/******************
* PHOTOSWIPE INITIALIZER
* jQuery wrapper, modified by ESY from
* http://webdesign.tutsplus.com/tutorials/the-perfect-lightbox-using-photoswipe-with-jquery--cms-23587
******************/
(function($) {
    'use strict';

    var $pswp = $('.pswp')[0];
    var image = [];

    $.fn.photoswipe = function(config) {
        var gid = 0;

        $(this).each(function() {
            var $pic     = $(this),
                items    = [],
                getItems = function() {
                    $pic.find('figure').each(function() {
                        var $a      = $(this).find('a'),
                            $thumb  = $(this).find('img'),
                            $cap    = $(this).find('figcaption');

                        var $href   = $a.attr('href'),
                            $size   = $a.data('size').split('x'),
                            $width  = $size[0],
                            $height = $size[1];

                        var item = {
                            src     : $href,
                            w       : $width,
                            h       : $height,
                            group   : gid
                        };

                        if ($cap.length > 0) {
                            item.title = $cap.html();
                        }

                        item.thumb = $thumb;
                        items.push(item);
                    });
                    return items;
                };

            var pid = 0;
            $(this).find('figure').each(function() {
                $(this).attr('data-index', pid);
                pid += 1;
            });
            gid += 1;            
            $(this).attr('data-group', gid);            

            items = getItems();

            $.each(items, function(index, value) {
                image[index]     = new Image();
                image[index].src = value.src;
            });

            $pic.on('click', 'a', function(event) {
                event.preventDefault();

                var $fig    = $(this).closest('figure'),
                    $index  = $fig.data('index');
                var options = $.extend({
                    bgOpacity: 0.7,
                    showHideOpacity: true,
                    index: $index,
                    galleryUID: items[$index].group,
                    getThumbBoundsFn: function(index) {
                        var thumbnail   = items[index].thumb,
                            rect        = thumbnail.offset();
                        return {x:rect.left, y:rect.top, w:thumbnail.width()};
                    }
                }, config) || {};

                var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
            });
        });
    };
})(jQuery);
