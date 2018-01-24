var caruselHeight;  
var actualScroll;  

function menuPosition() {
	caruselHeight = $('#centrum-carousel').height();
	actualScroll = $(document).scrollTop();

	if (actualScroll > caruselHeight) {
		console.log('add class navbar-fixed-top');
		$('.navbar').addClass('navbar-fixed-top');
	} else {
		$('.navbar').removeClass('navbar-fixed-top');
	}
}


$(window).scroll(function() {
	menuPosition();
		 
	if (actualScroll > caruselHeight ) {
		$('nav').addClass('navbar-transparent-shrink');
		$('.navbar-nav > li > a').css({'line-height' : '50px','height' : '50px'	});
		$('.navbar-brand  > img').css("height", "50px");
		$('.navbar-brand').addClass('navbar-height50');
		$('.navbar-header').addClass('navbar-height50');
		$('.navbar-toggle').addClass('navbar-toggle-shrink');
		$('.menu_hover').css("bottom", "8px");
	} else {
		$('nav').removeClass('navbar-transparent-shrink');
		$('.navbar-nav > li > a').css({'line-height' : '80px','height' : '80px'	});
		$('.navbar-brand  > img').css("height", "80px");
		$('.navbar-brand').removeClass('navbar-height50');
		$('.navbar-header').removeClass('navbar-height50');
		$('.navbar-toggle').removeClass('navbar-toggle-shrink');
		$('.menu_hover').css("bottom", "23px");
		$('.navbar-brand  > img').css("padding", "5px");
	}
});
 

$(window).on("resize",  function() {
	console.log('window resize event');
	menuPosition();
});



$(document).ready(function() {
	window.scrollTo(0, 0);
	
	//Menu dodanie 
	i = 0;
	$(".navbar-nav >  li ").each(function(){
		if(i>0){
			$(this).append('<span class="menu_hover"></span>');	
		}
		i++;
    });

 
	 $(".navbar-nav li").mouseenter(function() {
		if($(this).hasClass("active")) {
			$(this).removeClass('navbar-nav-hover');
			$(this).children(".menu_hover").css('display', 'none');
		} else {
			$(this).addClass('navbar-nav-hover');
			if ($(window).width() > 943) {
				$(this).children(".menu_hover").css('display', 'block');
			}
		}
	});
	 

	$(".navbar-nav li").not("active").mouseleave(function() {
		if($(this).hasClass("active")) {
			$(this).removeClass('navbar-nav-hover');
			$(this).children(".menu_hover").css('display', 'none');
		} else {
			$(this).removeClass('navbar-nav-hover'); 
			
			if ($(window).width() > 943) {
				$(this).children(".menu_hover").css('display', 'none');
			}
		}
	});
 
	
	
	// Menu podswietlanie
	$('.nav > li').click(function() {
		$('.nav > li').removeClass('active');
		$('.nav > li').removeClass('navbar-nav-hover');
		$('.nav > li').children(".menu_hover").css('display', 'none');
		
		$(this).addClass('active');
		
	});
	
	//Menu scrolowanie do pozycji
	$(".navbar-right > li > a").on('click', function(e) {
		$(document).scrollTo($(this).attr('href'), 1000, {offset: -50} );
		
		
	});
	
});