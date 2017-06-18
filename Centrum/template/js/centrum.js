$(window).scroll(function() {
		
	if ($(document).scrollTop() > 30) {
		$('nav').addClass('navbar-transparent-shrink');
		$('.navbar-nav > li > a').css({'line-height' : '50px','height' : '50px'	});
		$('.navbar-brand > a > img').css("height", "50px");
		
		$('.navbar-brand').addClass('navbar-height50');
		$('.navbar-header').addClass('navbar-height50');
		$('.navbar-toggle').addClass('navbar-toggle-shrink');
		
	} else {
		$('nav').removeClass('navbar-transparent-shrink');
		$('.navbar-nav > li > a').css({'line-height' : '80px','height' : '80px'	});
		$('.navbar-brand > a > img').css("height", "80px");
		
		$('.navbar-brand').removeClass('navbar-height50');
		$('.navbar-header').removeClass('navbar-height50');
		$('.navbar-toggle').removeClass('navbar-toggle-shrink');
		
	}
});


$(document).ready(function() {
	//Menu dodanie 
	$(".navbar-nav >  li").each(function(){
    	//$(this).append('<div class="menu_hover"></div>');
    });
	
	
	 $(".navbar-nav >  li").mouseenter(function(){
//	    	if ($(window).width() > 943) {
	    		$(this).children(".menu_hover").css('display', 'block');
	//    	}
	    });
	    
	    $(".navbar-nav >  li").mouseleave(function(){
	  //  	if ($(window).width() > 943) {
	    		$(this).children(".menu_hover").css('display', 'none');
	    //	}
	   });
	
	
	//Menu podswietlanie
	$('.nav > li').click(function() {
		$('.nav > li').removeClass('active');
		$(this).addClass('active');
	});
	
	$(".navbar-right > li > a").on('click', function(e) {
		$(document).scrollTo($(this).attr('href'), 1000, {offset: -50} );
	});
	
});