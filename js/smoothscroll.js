$(document).ready(function () {

 var offset = 100;
 var speed = 250;
 var duration = 500;
 $(window).scroll(function () {
  if ($(this).scrollTop() < offset) {
   $('.footer__container-top-link').fadeOut(duration);
  } else {
   $('.footer__container-top-link').fadeIn(duration);
  }
 });
 $('.footer__container-top-link').on('click', function () {
  $('html, body').animate({
   scrollTop: 0
  }, speed);
  return false;
 });

});