$(document).ready(function(){

$("#menu").click(function(){
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
});


  $('a[href="#home"]').click(function(){
    $("#menu").removeClass('fa-times');
    $('header').removeClass('toggle');
  });
  
  
  $('a[href="#about"]').click(function(){
    $("#menu").removeClass('fa-times');
    $('header').removeClass('toggle');
  });

  
  $('a[href="#services"]').click(function(){
    $("#menu").removeClass('fa-times');
    $('header').removeClass('toggle');
  });
  
  $('a[href="#portfolio"]').click(function(){
    $("#menu").removeClass('fa-times');
    $('header').removeClass('toggle');
  });
  

  $('a[href="#contact"]').click(function(){
    $("#menu").removeClass('fa-times');
    $('header').removeClass('toggle');
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




