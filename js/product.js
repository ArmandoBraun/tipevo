(function($) {

	var me = {};
	me._init = function() {
		me.setUpCarousel();
	}
	me.setUpCarousel = function() {
		$('.product-screens-mobile .carousel').slick({
			centerMode: true,
			centerPadding: '116px',
		  	slidesToShow: 1,
		  	dots: true,
		  	responsive: [
		  		{
		  			breakpoint: 950,
		  			settings: {
		  				centerMode: true,
		  				centerPadding: '35px',
		  				slidesToShow: 1
		  			}
		  		},
		  		{
		  			breakpoint: 450,
		  			settings: {
		  				centerMode: true,
		  				centerPadding: '15px',
		  				slidesToShow: 1
		  			}
		  		}
		  	]
		});
	}

	$(document).ready(function() {
		me._init();
	});

})(jQuery);