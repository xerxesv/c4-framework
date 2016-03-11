'use strict';

/******************
 * INITIALIZE!
 ******************/
$(function () {
  'use strict';

  // glossary path
  var glossaryPath = 'glossary.html#glossary';
  // save the glossary for later use
  var $terms = $(document.createElement('div')).load(glossaryPath);

  // define different types of popover tooltips
  var $termTips = $('.term[data-toggle="popover"]'),
    $annoTips = $('.anno[data-toggle="popover"]'),

    // all popovers
    $popovers = $('[data-toggle="popover"]');  

  // load basic tooltips
  $('[data-toggle="tooltip"]').tooltip();

  /* term definition tooltips as popovers */
  $termTips.popover({

    // use a more semantic template for definition terms
    template: '<dl class="popover term" role="tooltip"><div class="arrow"></div><dt class="popover-title"></dt><dd class="popover-content"></dd></dl>',

    // set html true so we can have rich text in the tooltip
    html: true,

    // trigger on focus to ensure keyboard accessibility
    trigger: 'focus',

    // pull the content from our definition list pairs
    content: function () {
      // the title attribute must match the dt text (case insensitive)
      var title = $(this).attr('data-original-title').toLowerCase();
      // find the exact term
      var $dt = $terms.find('dt').filter(function () {
        return $(this).text().toLowerCase() === title;
      });
      // return the following dd (description element)
      return $dt.next('dd').html();
    }
  });

  /* annotation tooltips */
  $annoTips.each(function () {
    var annoType = $(this).data('annotype');
    $(this).addClass('anno-' + annoType);
    var annoTemplate = '<div class="popover anno anno-' + annoType + '" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>';

    $(this).popover({
      template: annoTemplate,
      html: true,
      trigger: 'focus',
      title: function() {
        var type = $(this).data('annotype');
        return (type === 'block') ? '' : type;
      }
    });
  });
  
  // initialize all other kinds of popovers
  $popovers.popover();

  // hide all popovers on ESC
  $popovers.keyup(function (e) {
    if (e.which === 27) {
      $popovers.popover('hide');
    }
  });

  $('[data-toggle="photoswipe"]').photoswipe({
    bgOpacity: 0.7
  });
});

/******************
 * FIX HREFS FOR EPUB
 ******************/
$('a.thumbnail').each(function () {
  var link = $(this).attr('href');
  $(this).data('href', link).attr('href', '#');
});

// swapClass utility
$.fn.swapClass = function (oldClass, newClass) {
  $(this).toggleClass(oldClass).toggleClass(newClass);
};

/******************
 * TOGGLE BUTTONS
 ******************/
$('#pageNumbers').click(function () {
  $('.pagebreak').toggle();
  $('main .row div').swapClass('col-sm-9 col-md-7', 'col-sm-10 col-md-8');
  $(this).toggleClass('inactive');
});

$('#annotations').click(function () {
  var $btn = $(this);
  var $annos = $('[data-toggle="tooltip"], dfn[data-toggle="popover"]');
  $btn.toggleClass('inactive');
  $annos.each(function () {
    $(this).toggleClass('reset');
    var type = $(this).data('toggle');
    if ($btn.hasClass('inactive')) {
      $(this).removeAttr('tabindex');
      switch (type) {
      case 'tooltip':
        $(this).tooltip('disable');
        break;
      case 'popover':
        $(this).popover('disable');
      }
    } else {
      $(this).attr('tabindex', 0);
      switch (type) {
      case 'tooltip':
        $(this).tooltip('enable');
        break;
      case 'popover':
        $(this).popover('enable');
      }
    }
  });
});

/******************
 * Replace all SVG images with inline SVG
 * http://stackoverflow.com/questions/24933430/img-src-svg-changing-the-fill-color
 ******************/
jQuery('img.svg').each(function () {
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function (data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');

    // Add replaced image's ID to the new SVG
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
    }

    // Replace image with new SVG
    $img.replaceWith($svg);

  }, 'xml');

});
