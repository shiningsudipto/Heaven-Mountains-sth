//Hamburger menu
$(document).ready(function () {

    /* Hamburger menu animation */
    $('.open-button').click(function () {
        $(this).toggleClass('open');
    });

    /* Menu fade/in out on mobile */
    $(".open-button").click(function (e) {
        e.preventDefault();
        $(".nav-menu").toggleClass('open');
    });

});

$(document).ready(function () {
    $(".nav-menu a").click(function () {
        $(".nav-menu").toggleClass('open');
        $(".open-button").removeClass('open');
    });
});


//Back to top button
$(function () {
    var btn = $('.backtotop');

    $(window).scroll(function () {
        if ($(window).scrollTop() < 100) {
            btn.addClass('hidden');
        } else {
            btn.removeClass('hidden');
        }
    });
});


//Smooth scroll
$(function () {
    $('a[href*=\\#]:not([href=\\#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
