<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */
?>
<style>
/*    .slick-slide img{display: none!important;}
    .slick-slide .attachment-shop_thumbnail{display: block!important;}*/
.product-detail .product {
	max-width: unset;
	margin: 0 auto!important;
}
.primary__button .primary__button--transparent .animState .single_add_to_cart_button .alt {
	width: 100%!important;
}
  .products__list--item.product.type-product{
        padding: 0 1.5em!important;
        margin-right: 0px!important;
    }
    .woocommerce ul.products li.product a img{
        width: 8em!important;
        float: right;
    }
    .woocommerce-LoopProduct-link{
        width: 100%
    }
    @media (max-width: 768px) {
    .woocommerce ul.products[class*=columns-] li.product,
    .woocommerce-page ul.products[class*=columns-] li.product {
        width: 100%;
    }
    .attachment-woocommerce_thumbnail.size-woocommerce_thumbnail{
       margin-right: 1px!important;
}
}
.product-card--header {
    color: #000;
    float: left;
}
.button.product_type_simple.add_to_cart_button{
    margin-top: -85px!important;
}
.button.product_type_simple{
    margin-top: -85px!important;
}
.price {
width: 200px!important;
float: left;
text-align: left;
padding-top: 10px;
color: #000!important;
}

.star-rating {
width: 200px!important;
float: left;
text-align: left;
padding-top: 10px;
color: #000!important;
}

.attachment-woocommerce_thumbnail.size-woocommerce_thumbnail{
       margin-top: -85px !important;
       margin-right: -34px !important;
}
.products__list--item {
    margin-top: 91px!important;
}
.primary__button {
    border: 5px solid white!important;
    background: white!important;
    border-radius: 5em!important;
    box-shadow: 0 8px 8px -10px #000!important;
    direction: ltr!important;
	font-family: Roboto,sans-serif!important;
	font-size: .9375em!important;
}
.primary__button--transparent {
    background: #ffffff7d!important;
    border: 5px solid transparent!important;
    box-shadow: 0 4px 12px 0 #0000008c!important;
}
.product-warenkorb-link {
	direction: ltr!important;
	font-family: Roboto,sans-serif!important;
	font-size: .9375em!important;
	font-variation-settings: "wght" 400,"wdth" 100;
	font-weight: 400;
}
.products__list--item.product.type-product{
    width: 45%!important;;
}
.products.columns-4.products__list {
    margin-top: 80px;
}

</style>
<div class="product-detail container-content">
<div class="product-detail__inner">
<h1 class="main-headline">Woodsmoke</h1>
<div class="product-detail__wrapper section">
<div class="entry-content section__inner">
<?php
defined( 'ABSPATH' ) || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class( '', $product ); ?>>

	<?php
	/**
	 * Hook: woocommerce_before_single_product_summary.
	 *
	 * @hooked woocommerce_show_product_sale_flash - 10
	 * @hooked woocommerce_show_product_images - 20
	 */
	do_action( 'woocommerce_before_single_product_summary' );
	?>
 
                               
	<div class="summary entry-summary">
            <div class="product">
             <div class="product-card glas">
                                    <div class="product-card__inner">
		<?php
		/**
		 * Hook: woocommerce_single_product_summary.
		 *
		 * @hooked woocommerce_template_single_title - 5
		 * @hooked woocommerce_template_single_rating - 10
		 * @hooked woocommerce_template_single_price - 10
		 * @hooked woocommerce_template_single_excerpt - 20
		 * @hooked woocommerce_template_single_add_to_cart - 30
		 * @hooked woocommerce_template_single_meta - 40
		 * @hooked woocommerce_template_single_sharing - 50
		 * @hooked WC_Structured_Data::generate_product_data() - 60
		 */
		do_action( 'woocommerce_single_product_summary' );
		?>
	</div>
	</div>
	</div>
	</div>

	<?php
	/**
	 * Hook: woocommerce_after_single_product_summary.
	 *
	 * @hooked woocommerce_output_product_data_tabs - 10
	 * @hooked woocommerce_upsell_display - 15
	 * @hooked woocommerce_output_related_products - 20
	 */
	do_action( 'woocommerce_after_single_product_summary' );
	?>
</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>
                </div>
            </div>
        </div>
</div>