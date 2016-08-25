<!DOCTYPE html>
<html lang="pl">
<head>
<title><?php wp_title(); ?> <?php bloginfo('name'); ?></title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/bootstrap.min.css">
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/style.css"> 
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/megamenu.css">
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/ionicons.min.css">

<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/jquery.min.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/bootstrap.min.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/megamenu.js"></script>

<?php wp_head(); ?>
</head>
<body>
	
	 <div class="container-fluid">
	 	<div class="row">
			<div class="col-sm-4 ">
				<img id="logo" alt="" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png" />
			</div>
			<div id="search" class="col-sm-2 col-sm-offset-5 ">
				 
				 <form class="szukaj" action="<?php bloginfo('url'); ?>" method="get" accept-charset="utf-8">
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Szukaj..." value="<?php the_search_query(); ?>">
						<span class="input-group-btn">
							<button class="btn btn-default" type="button">
								<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
							</button>
						</span>
					</div>
					</form>
			</div>
		</div>
	 </div>
	 
	 <div class="container-fluid">
	 	<div class="row">
			<div class="col-sm-1 ">
				<img id="logo" alt="" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png" style="margin-bottom: -30px;"/>
			</div>
			<div  class="col-sm-2 col-sm-push-8 ">
					<div  class="hidden-xs" style="height:60px;">
					</div>
					
					<form action="<?php bloginfo('url'); ?>" method="get" accept-charset="utf-8">
					<div  id="search" class="input-group">
						<input type="text" class="form-control" placeholder="Szukaj...">
						<span class="input-group-btn">
							<button class="btn btn-default" type="button">
								<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
							</button>
						</span>
					</div>
					</form>
			</div>
		</div>
	 </div>
	 
	 <div class="container-fluid wrapper">
	 
	 	<!-- Menu -->
		<div class="row">

				<div class="col-sm-12">
					<div class="menu-container">
						<div class="menu">
							<?php wp_nav_menu( array( 'theme_location' => 'menu_poziome', 'depth' => 3)); ?>
						</div>
					</div>

				</div>

			</div>
	  
	  	<!-- Karuzela -->
		<div class="row">
			<div class="col-sm-12 hidden-xs" >
				<div id="carousel-example-generic2" class="carousel slide ">
					<!-- Wskaźniki w postaci kropek -->
					<ol class="carousel-indicators">
						<li data-target="#carousel-example-generic2" data-slide-to="0"
							class="active"></li>
						<li data-target="#carousel-example-generic2" data-slide-to="1"></li>
						<li data-target="#carousel-example-generic2" data-slide-to="2"></li>
					</ol>

					<!-- Slajdy -->
					<div class="carousel-inner">
						<div class="item active">
							<img src="http://placehold.it/1900x200" alt="">
							<!-- Opis slajdu -->
							<div class="carousel-caption">
								<h3>To jest opis</h3>
								<p>pierwszego slajdu</p>
							</div>
						</div>

						<div class="item">
							<img src="http://placehold.it/1900x200" alt="">
							<!-- Opis slajdu -->
							<div class="carousel-caption">
								<h3>To jest opis</h3>
								<p>drugiego slajdu</p>
							</div>
						</div>

						<div class="item">
							<img src="http://placehold.it/1900x200" alt="">
							<!-- Opis slajdu -->
							<div class="carousel-caption">
								<h3>To jest opis</h3>
								<p>trzeciego slajdu</p>
							</div>
						</div>

					</div>

					<!-- Strzałki do przewijania -->
					<a class="left carousel-control" href="#carousel-example-generic2"
						data-slide="prev"> <span class="icon-prev"></span>
					</a> <a class="right carousel-control"
						href="#carousel-example-generic2" data-slide="next"> <span
						class="icon-next"></span>
					</a>
				</div>
			</div>
		</div>
  
  
  		<!-- PAGE -->
  
  		<div class="row">
  			<div class="col-sm-12">
  				<!-- BreadCumb -->
			<ol class="breadcrumb">
				<li><a href="#">Home</a></li>
				<li><a href="#">Library</a></li>
				<li class="active">Data</li>
			</ol>
  			
  			</div>
  		</div>
  		
	 	<div  class="row">
			<div class="col-sm-10   col-sm-offset-1 ">
				<div id="content" class="well">
					 
					 <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
 
						<div>
						    <h1>
						        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						    </h1>
						    
						    <?php the_content('czytaj dalej'); ?>
						</div>
						 
						<?php endwhile; else: ?>
						 
						<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
						 
						<?php endif; ?>
					 
				</div>
			</div>

		</div>
	
		<div  class="row text-center ">
			<div class="col-sm-12">
				<div id="footer" class="well">
					<p>Centrum Statystyczne &copy; 2016</p>
				</div>
			</div>
		</div>
	 </div>
	<?php wp_footer(); ?>
</body>
</html>