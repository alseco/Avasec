$(document).ready(function(){
    $('.slider').slider({
    	height: 600,
    	indicators: false
    });
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
});