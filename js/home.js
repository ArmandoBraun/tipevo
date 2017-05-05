;(function () {
  var video = document.querySelector('video');
  makeVideoPlayableInline(video);

  $('.home-carousel .carousel').slick({
  	vertical: true,
  	dots: true,
  	arrows: false,
  	draggable: false,
  	responsive: [
  		{
  			breakpoint: 768,
  			settings: {
  				vertical: false,
          adaptiveHeight: true
  			}
  		}
  	]
  });
})();