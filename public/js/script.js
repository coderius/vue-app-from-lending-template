/*


Author    : CodWorker
Github    : https://github.com/CodWorker
Portfolio : https://codworker.github.io/


*/

$(function() {
    "use strict";

    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });
    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    /* 
     * NAVBAR TOGGLE BG
     *-----------------*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function(e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function(e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })

    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    /*-----------------------------------
     * OWL CAROUSEL
     *-----------------------------------*/
    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            loop:true,
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });

        // $testimonialsDiv.on("mouseout",function(e){
        //     e.stopPropagation();
        //     $(this).trigger('play.owl.autoplay',[1000]);
        //     console.log('vf');
        // });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }

    /*-----------------------------------
     * DROPDOWN OPEN-CLOSE CONTENT
     *-----------------------------------*/
    var selectors = {
        block:   '.JSdropdown',
        content: '.JSdropdown-content-read-more',
        classClosed:  'JSdropdown-content-read-more-closed',
        btn:     '.JSdropdown-content-btn'
    };

    var dataBtn = {
        less: "content-less",
        more: "content-more",
    }

    $(selectors.btn).on('click', function(e){
        e.preventDefault();
        var btn = $(this);
        var block = $(this).parents(selectors.block);
        var content = block.find(selectors.content);

        // toggle content
        content.toggleClass(selectors.classClosed);

        // toggle button text
        var more = btn.data(dataBtn.more);
        var less = btn.data(dataBtn.less);
        if(btn.text() === more){
            btn.text(less);
        }else{
            btn.text(more);
        }

    })

    /*-----------------------------------
     * BURGER MENU ICON (TOGGLE)
     *-----------------------------------*/
	var burgerMenu = function() {

		$('body').on('click', '.navbar-toggler', function(event){

			var $this = $(this);
            $this.toggleClass('active');
			event.preventDefault();

		});

	}();

    // ------------------------

}); /* End Fn */