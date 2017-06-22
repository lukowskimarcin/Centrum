$(window).scroll(function() {
		
	if ($(document).scrollTop() > 50) {
		$('nav').addClass('navbar-transparent-shrink');
		$('.navbar-nav > li > a').css({'line-height' : '50px','height' : '50px'	});
		$('.navbar-brand > a > img').css("height", "50px");
		
		$('.navbar-brand').addClass('navbar-height50');
		$('.navbar-header').addClass('navbar-height50');
		$('.navbar-toggle').addClass('navbar-toggle-shrink');
		
		$('.menu_hover').css("bottom", "10px");
		
	} else {
		$('nav').removeClass('navbar-transparent-shrink');
		$('.navbar-nav > li > a').css({'line-height' : '80px','height' : '80px'	});
		$('.navbar-brand > a > img').css("height", "80px");
		
		$('.navbar-brand').removeClass('navbar-height50');
		$('.navbar-header').removeClass('navbar-height50');
		$('.navbar-toggle').removeClass('navbar-toggle-shrink');
		
		$('.menu_hover').css("bottom", "25px");
	}
});


$(document).ready(function() {
	//Menu dodanie 
	i = 0;
	$(".navbar-nav >  li ").each(function(){
		if(i>0){
			$(this).append('<span class="menu_hover"></span>');	
		}
		i++;
    });
	
	
	 $(".navbar-nav li").not(".active").mouseenter(function(){
//	    	if ($(window).width() > 943) {
	 		$(this).children(".menu_hover").css('display', 'block');
	//    	}
	    });
	    
	    $(".navbar-nav li").not(".active").mouseleave(function(){
	  //  	if ($(window).width() > 943) {
	    	$(this).children(".menu_hover").css('display', 'none');
	    //	}
	   });
	
	
	//Menu podswietlanie
	$('.nav > li').click(function() {
		$('.nav > li').removeClass('active');
		$(this).addClass('active');
	});
	
	//Menu scrolowanie do pozycji
	$(".navbar-right > li > a").on('click', function(e) {
		$(document).scrollTo($(this).attr('href'), 1000, {offset: -50} );
	});
	
});