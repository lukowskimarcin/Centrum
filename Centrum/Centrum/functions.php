<?php
  

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
			the_category(' </li><li> ');
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
  register_nav_menus(
    array(
      'menu_poziome' => __( 'Poziome menu' ) 
    )
  );
}


// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '')
{
    $args['container'] = false;
    return $args;
}
// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var)
{
    return is_array($var) ? array() : '';
}


 remove_all_filters( 'menu_breadcrumb_markup' );

    // add my own Menu Breadcrumb markup filter
    function my_menu_breadcrumb_markup( $markup ) {
        return   $markup ;
    }
    add_filter( 'menu_breadcrumb_markup', 'my_menu_breadcrumb_markup' );


remove_all_filters( 'menu_breadcrumb_item_markup' );

    // add my own Menu Breadcrumb item filter
    function my_menu_breadcrumb_item_markup( $markup, $breadcrumb ) {
        // $markup is in the format of <a href="{Menu Item URL}">{Menu Item Title}</a>
        // $breadcrumb is the Menu item object itself
        return '<li>' . $markup . '</li>';
    }
    add_filter( 'menu_breadcrumb_item_markup', 'my_menu_breadcrumb_item_markup', 10, 2 );


function modify_read_more_link() {
	return '<a class="read-more btn btn-info" href="' . get_permalink() . '">Czytaj dalej</a><div class="clearfix"></div>';
}
add_filter( 'the_content_more_link', 'modify_read_more_link' );

add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected classes
add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected ID
add_filter('page_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> Page ID's
 
add_action( 'init', 'register_my_menus' );
?>