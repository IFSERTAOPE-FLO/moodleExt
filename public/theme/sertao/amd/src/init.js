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
        init: function() {
            var $body = $('body');
            var $navbar = $('.landing-navbar');
            var $collapse = $('#scNav');

            var updateNavbarState = function() {
                if ($(window).scrollTop() > 28) {
                    $navbar.addClass('scrolled');
                } else {
                    $navbar.removeClass('scrolled');
                }
            };

            $(window).on('scroll', updateNavbarState);
            updateNavbarState();

            // Hamburger open/close lifecycle: lock body scroll while menu open.
            $collapse.on('show.bs.collapse', function() { $body.addClass('nav-open'); });
            $collapse.on('hide.bs.collapse', function() { $body.removeClass('nav-open'); });

            // Close menu when a nav link is clicked (mobile).
            $collapse.find('.nav-link, .btn-nav-login, .btn-nav-cta').on('click', function() {
                if ($collapse.hasClass('show')) {
                    var bsCollapse = window.bootstrap && window.bootstrap.Collapse
                        ? window.bootstrap.Collapse.getInstance($collapse[0]) || new window.bootstrap.Collapse($collapse[0], {toggle: false})
                        : null;
                    if (bsCollapse) {
                        bsCollapse.hide();
                    } else {
                        $collapse.removeClass('show');
                        $body.removeClass('nav-open');
                    }
                }
            });

            // Smooth scroll for anchor links.
            $('a[href^="#"]').on('click', function(e) {
                var hash = this.getAttribute('href');
                if (!hash || hash === '#') { return; }
                var target = $(hash);
                if (target.length) {
                    e.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 70
                    }, 600);
                }
            });
        }
    };
});
