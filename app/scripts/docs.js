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
    var annoTemplate = '<dl class="popover anno anno-' + annoType + '" role="tooltip"><div class="arrow"></div><dt class="popover-title"></dt><dd class="popover-content"></dd></dl>';

    $(this).popover({
      template: annoTemplate,
      html: true,
      title: function() {
        return $(this).data('annotype');
      }
    });
  });

  // activate popover on enter since data-toggle="click" doesn't work for keyboard
  $popovers.keyup(function (e) {
    if (e.which === 13) {
      $(this).popover('toggle');
    }
  })

  // hide after tabbing to something new
  .blur(function () {
    $(this).popover('hide');
  })

  // hide all popovers on ESC
  .keyup(function (e) {
    if (e.which === 27) {
      $popovers.popover('hide');
    }
  });

  $('[data-toggle="photoswipe"]').photoswipe({
    bgOpacity: 0.7
  });
});
