$(function () {
    var carouselBaseOptions = {
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 600,
        nav: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true
    };

    $('#case-grid').owlCarousel($.extend(true, {}, carouselBaseOptions, {
        margin: 18,
        autoplayTimeout: 4000,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1440: {
                items: 4
            }
        }
    }));

    $('#empresas-carousel').owlCarousel($.extend(true, {}, carouselBaseOptions, {
        margin: 30,
        autoplayTimeout: 2500,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1024: {
                items: 5
            },
            1400: {
                items: 6
            }
        }
    }));
});
