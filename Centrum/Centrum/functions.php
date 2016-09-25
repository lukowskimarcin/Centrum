<?php

add_action('init', 'myStartSession', 1);
add_action('wp_logout', 'myEndSession');
add_action('wp_login', 'myEndSession');

function myStartSession() {
	if(!session_id()) {
		session_start();
	}
}

function myEndSession() {
	session_destroy ();
}

function the_breadcrumb() {
	echo '<ol id="crumbs"  class="breadcrumbs" >';
	echo '<li><a href="';
	echo get_option('home');
	echo '">';
	echo 'Centrum';
	echo "</a></li>";
	
	
	if (!is_home()) {
	
		if (is_category() || is_single()) {
			echo '<li><span class="sep"> &raquo; </span>';
			the_category ( ' </li><li> ' );
			if (is_single()) {
				echo '</li><li><span class="sep"> &raquo; </span>';
				echo '<a href="' . get_permalink() . '">';
				the_title();
				echo '</a></li>';
			}
		} elseif (is_page()) {
			echo '<li>';
			echo the_title();
			echo '</li>';
		}
	}
	elseif (is_tag()) {single_tag_title();}
	elseif (is_day()) {echo"<li>Archive for "; the_time('F jS, Y'); echo'</li>';}
	elseif (is_month()) {echo"<li>Archive for "; the_time('F, Y'); echo'</li>';}
	elseif (is_year()) {echo"<li>Archive for "; the_time('Y'); echo'</li>';}
	elseif (is_author()) {echo"<li>Author Archive"; echo'</li>';}
	elseif (isset($_GET['paged']) && !empty($_GET['paged'])) {echo "<li>Blog                 Archives"; echo'</li>';}
	elseif (is_search()) {echo"<li>Search Results"; echo'</li>';}
	echo '</ol>';
}
function register_my_menus() {
	register_nav_menus ( array (
			'menu_poziome' => __ ( 'Poziome menu' ) 
	) );
}

// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '') {
	$args ['container'] = false;
	return $args;
}

// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var) {
	return is_array ( $var ) ? array () : '';
}

remove_all_filters ( 'menu_breadcrumb_markup' );

// add my own Menu Breadcrumb markup filter
function my_menu_breadcrumb_markup($markup) {
	return $markup;
}
add_filter ( 'menu_breadcrumb_markup', 'my_menu_breadcrumb_markup' );
remove_all_filters ( 'menu_breadcrumb_item_markup' );

// add my own Menu Breadcrumb item filter
function my_menu_breadcrumb_item_markup($markup, $breadcrumb) {
	// $markup is in the format of <a href="{Menu Item URL}">{Menu Item Title}</a>
	// $breadcrumb is the Menu item object itself
	return '<li>' . $markup . '</li>';
}
add_filter ( 'menu_breadcrumb_item_markup', 'my_menu_breadcrumb_item_markup', 10, 2 );
function modify_read_more_link() {
	return '<a class="read-more btn btn-info" href="' . get_permalink () . '">Czytaj dalej</a><div class="clearfix"></div>';
}
add_filter ( 'the_content_more_link', 'modify_read_more_link' );

add_filter ( 'wp_nav_menu_args', 'my_wp_nav_menu_args' ); // Remove surrounding <div> from WP Navigation
add_filter ( 'nav_menu_css_class', 'my_css_attributes_filter', 100, 1 ); // Remove Navigation <li> injected classes
add_filter ( 'nav_menu_item_id', 'my_css_attributes_filter', 100, 1 ); // Remove Navigation <li> injected ID
add_filter ( 'page_css_class', 'my_css_attributes_filter', 100, 1 ); // Remove Navigation <li> Page ID's

add_action ( 'init', 'register_my_menus' );

/*
 * Wysylanie maili
 */

add_action ( 'phpmailer_init', 'moja_funckja_smtp_email' );
function moja_funckja_smtp_email($phpmailer) {
	$phpmailer->isSMTP ();
	$phpmailer->Host = "mail-serwer15044.lh.pl"; // Adres serwera SMTP
	$phpmailer->Port = "465"; // Nr portu, zazwyczaj: 25|465|587
	
	$phpmailer->SMTPAuth = true; // Autoryzacja SMTP: true|false
	$phpmailer->SMTPSecure = "ssl"; // Typ szyfrowania, zazwyczaj: tls|ssl
	
	$phpmailer->Username = "powiadomienia@centrumstatystyczne.pl"; // Nazwa użytkownika dla serwera SMTP
	$phpmailer->Password = "Nightangels1"; // Hasło użytkownika dla serwera SMTP
}

function contactForm($atts) {
	include_once("contact-form.php");
}

add_shortcode( 'contact_form', 'contactForm' );

add_action( 'admin_post_mail_contact', 'sendContact' );
add_action( 'admin_post_nopriv_mail_contact', 'sendContact' );

function sendContact() {
	if (!empty($_POST)) {
		if( isset($_POST['cName'])
				&& isset($_POST['cEmail'])
				&& isset($_POST['cSubject'])
				&& isset($_POST['cMessage'])
				&& isset($_REQUEST['g-recaptcha-response'])
				)
		{
	
			$name = $_POST['cName'];
			$email = $_POST['cEmail'];
			$subject = $_POST['cSubject'];
			$message = $_POST['cMessage'];
			$reCAPTCHA = $_REQUEST['g-recaptcha-response'];
	
			//Sprawdzenie reCAPTCHA
			$url = 'https://www.google.com/recaptcha/api/siteverify';
			$myvars = 'secret=6LfHigcUAAAAADIP7wUxynAesVu_I_L_aMJ1e9LP&response=' . $reCAPTCHA;
	
			$ch = curl_init( $url );
			curl_setopt( $ch, CURLOPT_POST, 1);
			curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
			curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
			curl_setopt( $ch, CURLOPT_HEADER, 0);
			curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
	
			$response = curl_exec( $ch );
			$json = json_decode($response, true);
	
			if("true" == $json['success']) {
					
				//add_filter ( 'wp_mail_content_type', create_function ( '', 'return "text/html"; ' ) );
				$email = wp_mail('monika.nawrocka@centrumstatystyczne.pl', $subject, $message, array('From: '.$name.' <'.$email.'>') );
				//remove_filter ( 'wp_mail_content_type', 'set_html_content_type' );
				
				if($email) {
					$_SESSION['sendContactResult'] = 1;
				} else {
					$_SESSION['sendContactResult'] = 0;
				}
					
			} else {
				$_SESSION['sendContactResult'] = -1;
				/*error-codes:
					missing-input-secret	The secret parameter is missing.
					invalid-input-secret	The secret parameter is invalid or malformed.
					missing-input-response	The response parameter is missing.
					invalid-input-response	The response parameter is invalid or malformed
				 */
			}
		}
	}
	
	wp_redirect( get_permalink( $_REQUEST['origin'] ) );
	exit();
}

?>