$(document).ready(function () {

    //trigger nicescroll
    $("body").niceScroll({
        cursorcolor: '#1abc9c'
    });

    //add class active to a and remove class active
    $('.links li a').click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });

    //adjust header height
    $('.header').height($(window).height());

    $(window).resize(function () {
        $('.header').height($(window).height());

        $('.bxslider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2)
        });
    });

    //trigger bxslider    
    $('.bxslider').bxSlider({
        pager: false
    });
    //adjust bexslider to the center
    $('.bxslider').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });

    //smooth scroll to div
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    //make auto slider
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                })
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        })
    }());
});