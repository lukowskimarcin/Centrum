<!DOCTYPE html>
<html lang="pl">
<head>
<title><?php wp_title(); ?> <?php bloginfo('name'); ?></title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-site-verification" content="RYKy-OxKhwkAVxtc2fvwZPWWaKU8j2heR6Xtt-87NLs" />

<meta http-equiv="content-language" content="pl">
<link hreflang="pl" href="http://centrumstatystyczne.pl/" rel="alternate" />

<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/bootstrap.min.css">
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/style.css"> 
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/megamenu.css">
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/ionicons.min.css">

<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/jquery.min.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/bootstrap.min.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/megamenu.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/scripts.js"></script>

<?php wp_head(); ?>
</head>
<body>
	  <?php include_once("analyticstracking.php") ?>
	  
	  <div class="container-fluid">
	 	<div class="row">
			<div class="col-sm-2 ">
				<img id="logo" alt="Centrum Statystyczne" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png" style="margin-bottom: -30px;"/>
			</div>
			<div  class="col-sm-3 col-sm-push-6 ">
					<div  class="hidden-xs contact" style="height:60px;">
						<a href="mailto:monika.nawrocka@centrumstatystyczne.pl" >
							<span class="glyphicon glyphicon-envelope"> </span>
							Kontakt
						</a>
					</div>
					<form action="<?php bloginfo('url'); ?>" method="get" accept-charset="utf-8" class="form-search">
					<div  id="search" class="input-group">
							<input type="text" class="form-control" placeholder="Szukaj...">
							<span class="input-group-btn">
								<button class="btn btn-info" type="submit">
									<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
								</button>
							</span>
					</div>
					</form>
					<div  class="visible-xs contact">
						<a href="mailto:monika.nawrocka@centrumstatystyczne.pl"  >
							<span class="glyphicon glyphicon-envelope"> </span>
							Kontakt
						</a>
					</div>
					<div class="clearfix"></div>
			</div>
		</div>
	 </div>
	 
	 <div class="container-fluid wrapper">
	 	<!-- Menu -->
		<div class="row">			
			<div class="menu-container">
				<div class="menu">
						<?php wp_nav_menu( array( 'theme_location' => 'menu_poziome', 'depth' => 3)); ?>
					</div>
			</div>
		</div>

		<!-- Carusel -->
		<div class="row" style="display: none;">
			<div class="hidden-xs" >
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
  
  		<div class="row">  			
  			<?php 
  		  	if ( function_exists( 'menu_breadcrumb') and is_page() ) { 
  		  		
		    	    menu_breadcrumb( 
        	    		'menu_poziome',                             // Menu Location to use for breadcrumb
	            		'  &raquo; ',		                        // separator between each breadcrumb
    	        		'<ol id="crumbs" class="breadcrumbs"><li style="margin-right: 5px;"><a href="'. get_option('home') .' ">Centrum</a><span class="sep"> &raquo; </span></li>',      // output before the breadcrumb
        	    		'</ol>'		        	                    // output after the breadcrumb
        			); 
    			} else {
    				the_breadcrumb();
    			}
			?>  			
  		</div>
  		
  		 