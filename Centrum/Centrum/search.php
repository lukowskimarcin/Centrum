<?php get_header(); ?>

<!-- Content -->
<div class="row">
	<div class="col-sm-10   col-sm-offset-1 content-wrapper">

		<?php if ( have_posts() ) : ?>


		<div class="alert alert-info alert_anim">
			<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			<h2 class="page-title"><?php printf( 'Wynik wyszukiwania dla: <strong>%s</strong>', get_search_query() ); ?></h2>
		</div>
		 

		<?php
		// Start the loop.
		while ( have_posts () ) :
			the_post ();
			?>

			<?php
			/*
			 * Run the loop for the search to output the results.
			 * If you want to overload this in a child theme then include a file
			 * called content-search.php and that will be used instead.
			 */
			get_template_part ( 'content', 'search' );
			
			// End the loop.
		endwhile;
		 		

		// If no content, include the "No posts found" template.
		else :
			get_template_part ( 'content', 'none' );
		

		endif;
		?>

		</div>
</div>

<?php get_footer(); ?>
