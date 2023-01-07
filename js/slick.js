$('.team-carousel').slick({
	autoplay: true,
	arrows: true,

	slidesToShow: 1,
	slidesToScroll: 1,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 568,
			settings: { slidesToShow: 2 }
		},
		{
			breakpoint: 992,
			settings: { slidesToShow: 3 }
		},
        {
			breakpoint: 1200,
			settings: { slidesToShow: 5 }
		},
        
	]
});

