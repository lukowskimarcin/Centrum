(function ($) {
	Drupal.behaviors.facultyReviewFormScripts = {
			attach: function (context, settings) { 

				$.each($("body.node-type-faculty-data div.description"),function(){
					$(this).insertAfter($(this).parent().find("label").first());
				});
			}
	}
})(jQuery);

;
