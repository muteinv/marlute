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

if (file_exists(ABSPATH . 'wp-content/themes/marlute/index.bundle.js')) {
            wp_register_script('marlute_index.bundle_js', trailingslashit(get_template_directory_uri()) . 'index.bundle.js', array('jquery'), '1.0', false);
            wp_enqueue_script('marlute_index.bundle_js');
        }
      

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

remove_action( 'woocommerce_after_shop_loop_item', 'second_button_single_variation', 30 );


add_action( 'woocommerce_after_shop_loop_item', 'second_button_single_variation', 30 );
function second_button_single_variation() {
    global $product;
$link = $product->get_permalink();

}
	
	
	
	
	

remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);
add_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);


if ( ! function_exists( 'woocommerce_template_loop_product_thumbnail' ) ) {
    function woocommerce_template_loop_product_thumbnail() {
        echo woocommerce_get_product_thumbnail();
    } 
}
if (!function_exists('woocommerce_get_product_thumbnail')) {

        function woocommerce_get_product_thumbnail($size = 'shop_catalog', $placeholder_width = 0, $placeholder_height = 0) {
            global $post, $woocommerce;
            $product = wc_get_product($post->ID);
            $permalink = $product->get_permalink();;
            $formatted_price = $product->get_price();
            $title = $product->get_title();
			$curency = get_woocommerce_currency_symbol();
               $output = '<a href="' . $permalink . '" class="imagewrapper">';
            $output .= '<div class="cust_p_left pcart_l"><div style="float: left;" class="cust_title"><h4>'.$title.'</h4></div></br>';
            $output .= '<div class="cust_price pcart_l">'.$curency . $formatted_price.'</div></br>';
            $output .= '<div class="cust_taxinc_left pcart_l"></div></div>';
			
            
            if (has_post_thumbnail()) {
                $output .= get_the_post_thumbnail($post->ID, $size);
            }
            $output .= '</a>';
            return $output;
        }

    }
	
}	




        
?>