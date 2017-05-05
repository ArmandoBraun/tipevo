$(document).ready(function () {
	$('#open-button').click(function () {
		$(this).toggleClass('open');
	});

	$('.featured-carousel').slick({
        mobileFirst: true,
        slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		centerMode: true,
		initialSlide: 1,
		variableWidth: true,
		arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: 'unslick'
            }
        ]
    });
	$("select").selectBoxIt({
		autoWidth: false,
		showFirstOption: false
	});

});