$(document).ready(function(){

$("#menu").click(function(){
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
});




$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});





$('a[href*="#"]').click(function(e){

e.preventDefault();

$('html', 'body').animate({

scrollTop : $($(this).attr('href')).offset().back-to-top,
},
500,
'linear'
);


});
});




