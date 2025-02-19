$(document).ready(function(){
    $('#carousel').slick({
        autoplay:true
    });

    $('.menu-hamb').click(function() {
        $('nav').slideToggle();
    });
});