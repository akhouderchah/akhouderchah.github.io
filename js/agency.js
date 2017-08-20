// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    $(document).ready(function() {
		var prevScroll = 0;
		var listSpace = $('.list-spacer').css('margin-bottom');
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
				if(prevScroll <= 500) {
					$('.top-hidden').fadeIn(400, 'easeInCubic');
				}
            } else if(prevScroll > 500) {
                $('.top-hidden').fadeOut(300, 'linear');
            }
			prevScroll = $(this).scrollTop();
        });

		$('.list-hider').click(function(){
			var hideeElem = $(this).closest('.timeline-heading').find('.list-hidee');
			var spaceElem = $(this).closest('.timeline-heading').find('.list-spacer');
			if( hideeElem.css('display') == 'none' ) {
				hideeElem.last().fadeIn(300, 'linear');
				hideeElem.css('display', 'block');

				spaceElem.css('marginBottom', '-10px')
				spaceElem.animate({ marginBottom: '0px' }, 300);
			} else {
				hideeElem.last().fadeOut(300, function(){
					spaceElem.css('marginBottom', listSpace);
				} );
				/*
				setTimeout(function(){
					spaceElem.animate({ marginBottom: '100px' }, 50);
				}, 250);
*/
			}
			//$(this).closest('.timeline-heading').find('.list-hidee').last().fadeOut(300, 'linear');
		});
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

})(jQuery); // End of use strict
