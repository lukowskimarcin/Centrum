<?php get_header(); ?>
  		
  	<!-- Content -->
 	<div  class="row">
		<div class="col-sm-10   col-sm-offset-1 ">

		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();

			get_template_part( 'content', get_post_format() );
			
			// Previous/next post navigation.
			the_post_navigation( array(
					'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Next', 'twentyfifteen' ) . '</span> ' .
					'<span class="screen-reader-text">' . __( 'Next post:', 'twentyfifteen' ) . '</span> ' .
					'<span class="post-title">%title</span>',
					'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Previous', 'twentyfifteen' ) . '</span> ' .
					'<span class="screen-reader-text">' . __( 'Previous post:', 'twentyfifteen' ) . '</span> ' .
					'<span class="post-title">%title</span>',
			) );

		endwhile;
		?>

		</div>
	</div>
	
	
<?php get_footer(); ?>
