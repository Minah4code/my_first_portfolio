$(document).ready(function(){

$("#menu").click(function(){
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });










});




