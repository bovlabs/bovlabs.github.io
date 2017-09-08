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
$(document).ready(function() {
  $('.particles').particleground({
    dotColor: '#eeeeee',
    lineColor: '#eeeeee'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
