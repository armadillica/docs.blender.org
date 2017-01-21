/**
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2014 Blender
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

/* Collection of scripts for interactiveness */

/* FLIP */
$('.flip-it').click(function(){
    $(this).closest('.card').toggleClass('flipped');
});

$('.flip_toggle').each(function() {
    if ($(this).parent().find('.front').height() > $(this).parent().find('.back').height()) {
        $(this).parent().height($(this).parent().find('.front').height());
    }
});

/*
* Make all col-## the same height, when a flexbox can't be used
*/

function RowSameHeight() {
	$('.row-same-height').each(function() {

		var highest = -Infinity;

		$(this).find("div[class^='col-']").each(function() {
			var height_current = $(this).height();

			highest = Math.max(highest, parseFloat(height_current));
			$(this).children('.box').css('height', highest);
		});
	});
};

function isMobile() {
	var is_mobile = window.matchMedia("only screen and (max-width: 760px)");

	if (is_mobile.matches) {
		$('header.navbar.navbar-transparent').addClass('is-mobile');
	} else {
		$('header.navbar.navbar-transparent').removeClass('is-mobile');
	}
};

function NavbarTransparent() {

	isMobile();

	var startingpoint = 80;

	$(window).on("resize", function () {
		isMobile();
	});

	$(window).on("scroll", function () {
		if ($(this).scrollTop() > startingpoint) {
			$('.navbar-overlay, .navbar-transparent').addClass('is-active');
		} else {
			$('.navbar-overlay, .navbar-transparent').removeClass('is-active');
		};
	});
};

NavbarTransparent();
