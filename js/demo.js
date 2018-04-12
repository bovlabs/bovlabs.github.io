/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */
/*
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#eeeeee',
    lineColor: '#eeeeee'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
*/


// jQuery plugin example:
$(document).ready(function () {
  var $tooltip = $('.tooltip');
  var $tooltipText = $('.tooltiptext');
  $('.particles').particleground({
    dotColor: '#eeeeee',
    lineColor: '#eeeeee'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
  $tooltip.each(function (el) {
    var content = $(this).find('.tooltiptext p').text();
    if (content.length && content.length > 275) {
      content = content.substring(0, 270) + '... <span class="show"> show</span>';
    }
    $(this).find('.content').html(content);
  });
  $tooltip.find('.show').click(function (event) {
    $tooltipText.css({ "visibility": "hidden", "opacity": 0 });
    $(this).parent().siblings('.tooltiptext').css({ "visibility": "visible", "opacity": 1 });
  });

  $(document).click(function (event) {
    if (!$(event.target).hasClass('show') && !$(event.target).hasClass('descr')) {
      $tooltipText.css({ "visibility": "hidden", "opacity": 0 });
    }
  });
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      $tooltipText.css({ "visibility": "hidden", "opacity": 0 });
    }
  });
});
