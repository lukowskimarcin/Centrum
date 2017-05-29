$(window).scroll(function() {
		
	if ($(document).scrollTop() > 50) {
		$('nav').addClass('navbar-transparent-shrink');
		$('.navbar-nav > li > a').css({'line-height' : '50px','height' : '50px'	});
		$('.navbar-brand img').css("height", "50px");
		$('.navbar-brand').addClass('navbar-height50');
		$('.navbar-header').addClass('navbar-height50');
		$('.navbar-toggle').addClass('navbar-toggle-shrink');
		
	} else {
		$('nav').removeClass('navbar-transparent-shrink');
		$('.navbar-nav > li > a').css({'line-height' : '80px','height' : '80px'	});
		$('.navbar-brand img').css("height", "80px");
		$('.navbar-brand').removeClass('navbar-height50');
		$('.navbar-header').removeClass('navbar-height50');
		$('.navbar-toggle').removeClass('navbar-toggle-shrink');
		
	}
});


$(document).ready(function() {
	//Menu podswietlanie
	$('.nav > li').click(function() {
		$('.nav > li').removeClass('active');
		$(this).addClass('active');
	});
	
	$(".navbar-right > li > a").on('click', function(e) {
		$(document).scrollTo($(this).attr('href'), 1000 );
	});
	
});