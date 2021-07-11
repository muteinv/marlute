<?php 

function load_styles_and_scripts(){
//load styles
		wp_enqueue_style(
		'main-styles',
		get_template_directory_uri() . '/style.css'
		);

// load scripts
}
add_action('wp_enqueue_scripts', 'load_styles_and_scripts');



add_action( 'widgets_init', 'my_register_sidebars' );
function my_register_sidebars() {

 /* Register the 'primary' sidebar. */
// register_sidebar(
//  array(
//   'id' => 'primary',
//   'name' => __( 'Primary' ),
//   'description' => __( 'A short description of the sidebar.' ),
//   'before_widget' => '<div id="%1$s" class="widget %2$s">',
//   'after_widget' => '</div>',
//   'before_title' => '<h3 class="right-bar-header">',
//   'after_title' => '</h3>'
//  )
// );
// 

 
 /* Repeat register_sidebar() code for additional sidebars. */
}
function wpse72692_login_language($ARGS){
    return 'en_US';
}

function init_action() {
//    add_filter('locale','wpse72692_login_language',10);

generate_post_types ();
add_theme_support('post-thumbnails');
  add_post_type_support('page', 'excerpt');
    register_nav_menu('header-menu',__( 'Header Menu' ));
    register_nav_menu('sub-menu',__( 'Sub Menu' ));
    register_nav_menu('footer',__( 'footer Menu' ));
    
    if (!is_admin()) {
        //stylesheets
//         if (file_exists(ABSPATH . 'wp-content/themes/adg/css/jquery.bxslider.css')) {
//            wp_register_style('adg_bxslide_css', trailingslashit(get_template_directory_uri()) . 'css/jquery.bxslider.css', false, '1.0', 'all');
//            wp_enqueue_style('adg_bxslide_css');
//        }
//         if (file_exists(ABSPATH . 'wp-content/themes/adg/css/style1.css')) {
//            wp_register_style('adg_style1_css', trailingslashit(get_template_directory_uri()) . 'css/style1.css', false, '1.0', 'all');
//            wp_enqueue_style('adg_style1_css');
//        }

       //javascripts

//        if (file_exists(ABSPATH . 'wp-content/themes/marlute/js/index.bundle.js')) {
//            wp_register_script('clubcrash_index.bundle_js', trailingslashit(get_template_directory_uri()) . 'js/index.bundle.js', array('jquery'), '1.0', false);
//            wp_enqueue_script('clubcrash_index.bundle_js');
//        }
      

//    
//    wp_localize_script('adg_script', 'wpadg', array('ajaxurl' => admin_url('admin-ajax.php'), 'PGNonce' => wp_create_nonce('wpadg-ajax-cc-nonce')));
//    
        
    }
}
add_action('init', 'init_action');


function generate_post_types () {
//    post_type_slideshow();
//    post_type_catalogos();
//    post_type_gallery();
}
add_filter( 'woocommerce_get_image_size_thumbnail', function( $size ) {
	return array(
	'width' => 500,
	'height' => 500,
	'crop' => 0,
	);
	} );
if(class_exists('WooCommerce')){
    function woocommerceshop_add_woocommerce_support(){
        add_theme_support('woocommerce', array(
            'default_columns' => 2,
            'min_columns' => 2,
            'max_columns' => 3));
    }
    add_action('after_setup_theme', 'woocommerceshop_add_woocommerce_support');

//remove woocommerce Style
//add_filter('woocommerce_enqueue_styles','__return_false');

//remove woocommerce Title
//add_filter('woocommerce_show_page_title','__return_false');
    
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');
    
    function woocommerce_template_loop_product_title() {
    echo wp_kses_post( '<h4 class="product-card--header">' . get_the_title() . '</h4>' );
}
		// Remove prices
// define the woocommerce_get_price_excluding_tax callback 
function filter_woocommerce_get_price_excluding_tax( $price, $qty, $product ) { 
    // make filter magic happen here... 
    return $price; 
}; 
         
// add the filter 
add_filter( 'woocommerce_get_price_excluding_tax', 'filter_woocommerce_get_price_excluding_tax', 10, 3 );	
    }

   $ddd = apply_filters( 'woocommerce_get_price_excluding_tax', $price, $qty, $product );     		
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );

add_filter( 'woocommerce_shop_loop_item_title' , 'custom_woocommerce_template_loop_product_title', 10);

function custom_woocommerce_template_loop_product_title () {
    echo '
    <div class="custom-title-wrapper">
    
    <h2>' . woocommerce_template_loop_price().  '</h2>
    </div>'
    ;
}	

        
?>