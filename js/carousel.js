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

    var $caseGrid = $('#case-grid');
    var $empresasCarousel = $('#empresas-carousel');
    var $telasCarousel = $('#telas-carousel');

    if ($caseGrid.length) {
        $caseGrid.owlCarousel($.extend(true, {}, carouselBaseOptions, {
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
    }

    if ($empresasCarousel.length) {
        $empresasCarousel.owlCarousel($.extend(true, {}, carouselBaseOptions, {
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
    }

    if ($telasCarousel.length) {
        $telasCarousel.owlCarousel($.extend(true, {}, carouselBaseOptions, {
            margin: 24,
            autoplayTimeout: 2500,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 4
                },
                1400: {
                    items: 4
                }
            }
        }));
    }
});
