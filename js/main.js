$(document).ready(function () {

    if ($('.group-slider').length > 0) {
        $('.group-slider').bxSlider({
            speed: 1000,
            auto: true,
            pause: 4000
        });
    }
    if ($('.slider-section-four').length > 0) {
        $('.slider-section-four').owlCarousel({
            items: 2,
            margin: 20,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    slideBy: 1,
                    margin: 0
                },
                400: {
                    items: 1,
                    dots: false,
                    margin: 10
                },
                700: {
                    items: 1,
                    dots: false,
                    margin: 20
                },
                992: {
                    items: 2,
                    margin: 20
                },
                1100: {
                    items: 2,
                    margin: 20
                }
            }
        });
    }
    if ($('.section-five').length > 0) {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
    }
    
    if ($('.slider-ul').length > 0) {
        $(".slider-ul").owlCarousel({
            items: 6,
            margin: 70,
            dots: false,
            responsive: {
                0: {
                    items: 3,
                    slideBy: 3,
                    margin: 0
                },
                700: {
                    items: 3,
                    nav: false,
                    slideBy: 3,
                    margin: 40
                },
                1100: {
                    items: 6,
                    margin: 70
                }
            }
        });
    }
    ;

    $('.navbar-nav a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top
                },
                1000,
                'linear'
                );
    });
    
        //ANIMATION
    function animation() {
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }
    ;

    $(window).scroll(function () {
        animation();
    });
    animation();
    
    if($('.counter').length > 0){
        $('.counter').counterUp({
            time: 700
        });
    }
    
    
});
