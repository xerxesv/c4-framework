/******************
* PHOTOSWIPE INITIALIZER
******************/
(function($) {
    'use strict';

    var $pswp = $('.pswp')[0];
    var image = [];

    $.fn.photoswipe = function(config) {

        var settings = $.extend({
            bgOpacity: 0.7,
            showHideOpacity: true
        }, config) || {};

        $(this).each( function() {
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
                            src : $href,
                            w   : $width,
                            h   : $height
                        };

                        if ($cap.length > 0) {
                            item.title = $cap.html();
                        }

                        item.thumb = $thumb;
                        items.push(item);
                    });
                    return items;
                };

            items = getItems();

            $.each(items, function(index, value) {
                image[index]     = new Image();
                image[index].src = value.src;
            });

            $pic.on('click', 'figure', function(event) {
                event.preventDefault();

                var $index = $('figure').index(this);
                var options = $.extend({
                    index: $index,
                    getThumbBoundsFn: function(index) {
                        var thumbnail   = items[index].thumb,
                            rect        = thumbnail.offset();
                        return {x:rect.left, y:rect.top, w:thumbnail.width()};
                    }
                }, settings);

                var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
            });
        });
    };
})(jQuery);
