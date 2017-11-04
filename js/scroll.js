/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".box1").removeClass("fadeInUp");
        $(".box2").removeClass("fadeInUp");
        $(".box3").removeClass("fadeInUp");
        $(".box4").removeClass("fadeInUp");
    }
});



$(window).scroll(function() {
    if ($(".navbar").offset().top > 150) {
        $(".text-vcenter").addClass("disable");
        $(".projetomenu").addClass("menuAtive");
    } else {
        $(".text-vcenter").removeClass("disable");
        $(".projetomenu").removeClass("menuAtive");
        $(".text-vcenter").addClass("disable2");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
