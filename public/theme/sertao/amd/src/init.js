/**
 * Theme Sertão initialization.
 *
 * @package    theme_sertao
 * @copyright  2026 Victor Kauê / Sertão Conecta
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery'], function($) {
    "use strict";

    return {
        /**
         * Initialise the theme frontpage effects.
         */
        init: function() {
            // Navbar scroll effect
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('.landing-navbar').addClass('scrolled');
                } else {
                    $('.landing-navbar').removeClass('scrolled');
                }
            });

            // Smooth scroll for anchor links
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 70
                    }, 800);
                }
            });
        }
    };
});
