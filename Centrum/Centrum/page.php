<?php get_header(); ?>
  		
  	<!-- Content -->
 	<div  class="row">
		<div class="col-sm-10   col-sm-offset-1 content-wrapper">

		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();

			get_template_part( 'content', get_post_format() );

			endwhile;
		?>

		</div>
	</div>
	
	
<?php get_footer(); ?>
