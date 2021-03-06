/*global $ */
function iconClick(){
	if ($(window).width() <= 943) {
    	//console.log('dropdown click');
        $(this).parent().children("ul").fadeToggle(150);
        
        if ($( this ).find(".glyphicon").css( "transform" ) == 'none' ){
            $(this).find(".glyphicon").css("transform","rotate(-180deg)");
        } else {
            $(this).find(".glyphicon").css("transform","" );
        }
    }
}


$(document).ready(function () {

    "use strict";

    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Nawigacja</a>");

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble
   
    
    $(".menu > ul > li").each(function(){
    	$(this).append('<div class="menu_hover"></div>');
    });
    
    //Dodaje ikony
    if ($(window).width() <= 943) {
	    $(".menu-dropdown-icon").each(function(){
			$(this).prepend('<div class="icon"><span class="glyphicon glyphicon-plus"></span></div>');
		});
	    
	    
	    $(".icon").click(iconClick);
    }
        
    $(".menu > ul > li").mouseenter(function(){
    	if ($(window).width() > 943) {
    		$(this).children(".menu_hover").css('display', 'block');
    	}
    });
    
    $(".menu > ul > li").mouseleave(function(){
    	if ($(window).width() > 943) {
    		$(this).children(".menu_hover").css('display', 'none');
    	}
   });
    
    
    $(".menu > ul > li").hover(function (e) {
        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    //If width is more than 943px dropdowns are displayed on hover
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
    
    var lastSize = $(window).width();
    
    $(window).on('resize', function(){
    	if ($(window).width() <= 943) {
        	$(".menu-dropdown-icon").each(function(){
        		
        		var icon = $(this).find(".icon");
        		if(!icon.length) {
        			$(this).prepend('<div class="icon"><span class="glyphicon glyphicon-plus"></span></div>');
        			//console.log('prepend icon');
        			 $(".icon").off().on('click', iconClick);
        		}
        	});
        } else {
        	$(".icon").off();	
        	$(".icon").remove();
        	
        	if(lastSize <= 943) {
        		$(".menu > ul > li > ul").css('display', 'none');
        		$(".menu > ul").removeClass('show-on-mobile');
        	}
        	//console.log('remove icons');
        }
        
        lastSize = $(window).width();
    });
    

});