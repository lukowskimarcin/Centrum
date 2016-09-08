<?php get_header(); ?>
  		
  	<!-- Content -->
 	<div  class="row">
		<div id="content" class="col-sm-10   col-sm-offset-1 ">

		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();

			get_template_part( 'content', get_post_format() );
			
			// Previous/next post navigation.
			the_post_navigation( array(
					'next_text' => '<span class="post-title">%title</span>' .
					'<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"> </span> ',
					
					'prev_text' => '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"> </span> ' .					
					'<span class="post-title">%title</span>',
			) );

		endwhile;
		?>
        
		</div>
	</div>
	
	<script>
    	jQuery(document).ready(function() {
   	     var height = Math.max(jQuery(".nav-previous a").height(), jQuery(".nav-next a").height());
    	    jQuery(".nav-previous a").height(height);
    		jQuery(".nav-next a").height(height);
   	 	});
   	 	
   	 	jQuery(window).on ('resize', function() {
   	     var height = Math.max(jQuery(".nav-previous a").height(), jQuery(".nav-next a").height());
    	    jQuery(".nav-previous a").height(height);
    		jQuery(".nav-next a").height(height);
   	 	}
   	 	);
   	 	
	</script>
	
<?php get_footer(); ?>
