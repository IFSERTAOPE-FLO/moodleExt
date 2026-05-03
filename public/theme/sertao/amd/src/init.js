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
            var updateNavbarState = function() {
                if ($(window).scrollTop() > 28) {
                    $('.landing-navbar').addClass('scrolled');
                } else {
                    $('.landing-navbar').removeClass('scrolled');
                }
            };

            // Navbar scroll effect (pill on scroll).
            $(window).on('scroll', updateNavbarState);
            updateNavbarState();

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
