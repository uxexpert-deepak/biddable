 

var target = $('.blur-effect-scroll');
var targetHeight = target.outerHeight();

$(document).scroll(function (e) {
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if (scrollPercent >= 0) {
        target.css('opacity', scrollPercent);
    }
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height() - 190) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height() - 190) {
        $('.back-to-top').addClass('show-top');
    }
    else {
        $('.back-to-top').removeClass('show-top');
    }
});
$(document).ready(function () {
     

    
    $(".back-to-top").click(function () {
        $("html").animate({ scrollTop: 0 }, "slow");
    });


    $('.hamburger-icon').click(function () {
        $('body').toggleClass('nav-active');
    });

    $(".scroll-down").click(function () {
        $('html,body').animate({
            scrollTop: $(".work-info-container").offset().top
        },
            'slow');
    });



    $(".mimik-down").click(function () {
        debugger;
        $('html,body').animate({
            scrollTop: $(".project-mimik").offset().top
        },
            'slow');
    });
    $(".mashtal-down").click(function () {
        $('html,body').animate({
            scrollTop: $(".project-mashtal").offset().top
        },
            'slow');
    });
    $(".dope-down").click(function () {
        $('html,body').animate({
            scrollTop: $(".project-dope").offset().top
        },
            'slow');
    });
    $(".juvenex-down").click(function () {
        $('html,body').animate({
            scrollTop: $(".project-juvenex").offset().top
        },
            'slow');
    });
    $(".genpharma-down").click(function () {
        $('html,body').animate({
            scrollTop: $(".project-genpharma").offset().top
        },
            'slow');
    });
    $(".msdc-down").click(function () {
        $('html,body').animate({
            scrollTop: $(".project-msdc").offset().top
        },
            'slow');
    });
    $(".brd-down").click(function () {
        $('html,body').animate({
            scrollTop: $(".project-brd").offset().top
        },
            'slow');
    });



    window.setTimeout(function () {
        $('.inner-fill').addClass('fill-complete');
    }, 2000);




    window.setTimeout(function () {

        $('.progress').addClass('shrink-loader');
    }, 5500);
    window.setTimeout(function () {
        $('body').addClass('finsihed');
        $('.loading-screen-spinner').fadeOut();
        $('.banner-container').addClass('came-in-bg');
        $('header').fadeIn();
    }, 6200);

});