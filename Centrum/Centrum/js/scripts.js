/**
 * 
 */
jQuery(document).ready(function() {
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > 100) {
			jQuery(".scroll-to-top").fadeIn()
		} else {
			jQuery(".scroll-to-top").fadeOut()
		}
	});
	jQuery(".scroll-to-top").click(function() {
		jQuery("html, body").animate({
			scrollTop : 0
		}, 800);
		return false
	});
	
})
