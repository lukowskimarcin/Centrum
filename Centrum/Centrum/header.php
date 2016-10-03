<!DOCTYPE html>
<html lang="pl">
<head>
<title><?php wp_title(); ?> <?php bloginfo('name'); ?></title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-site-verification" content="RYKy-OxKhwkAVxtc2fvwZPWWaKU8j2heR6Xtt-87NLs" />

<meta http-equiv="content-language" content="pl">

<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/style.css"> 
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/megamenu.css">
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/ionicons.min.css">

<script src="https://code.jquery.com/jquery-1.12.4.min.js"   integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/megamenu.js"></script>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/scripts.js"></script>

<?php wp_head(); ?>
</head>
<body>
	  <?php include_once("analyticstracking.php") ?>
	  
	  <div class="container-fluid">
	 	<div class="row">
			<div class="col-sm-2 ">
				<a href="http://centrumstatystyczne.pl/">
					<img id="logo" alt="Centrum Statystyczne" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png" style="margin-bottom: -30px;"/>
				</a>
			</div>
			<div  class="col-sm-3 col-sm-push-6 ">
					<form action="<?php bloginfo('url'); ?>" role="search" method="get" accept-charset="utf-8" class="form-search">
					<div  id="search" class="input-group">
							<input name="s" type="text" class="form-control" placeholder="Szukaj...">
							<span class="input-group-btn">
								<button id="searchsubmit" name="submit" class="btn btn-info" type="submit">
									<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
								</button>
							</span>
					</div>
					</form>
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
  		
  		 