<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
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
defined('ABSPATH') || exit;

global $product;

// Ensure visibility.
if (empty($product) || !$product->is_visible()) {
    return;
}
?>
<style>
/*    .product-article::after {
	position: absolute;
	background: url(http://localhost/marlute/wp-content/themes/marlute/assets/8b6a0e9db72dcee20ea7.png);
	background-size: contain;
	background-repeat: no-repeat;
	content: "";
	top: -36px;
	right: 0;
	height: 14em;
	width: 6em;
	 content: ""; 
}*/
.woocommerce-loop-product__title {
    float: left;
}
</style>
<li <?php wc_product_class('products__list--item', $product); ?> >
    <article style="" class="product-article" id="woodsmoke">
        <div class="product-card glas animState">
            <div class="product-card__inner">
                <?php
                /**
                 * Hook: woocommerce_before_shop_loop_item.
                 *
                 * @hooked woocommerce_template_loop_product_link_open - 10
                 */
                do_action('woocommerce_before_shop_loop_item');

                /**
                 * Hook: woocommerce_before_shop_loop_item_title.
                 *
                 * @hooked woocommerce_show_product_loop_sale_flash - 10
                 * @hooked woocommerce_template_loop_product_thumbnail - 10
                 */
                do_action('woocommerce_before_shop_loop_item_title');

                /**
                 * Hook: woocommerce_shop_loop_item_title.
                 *
                 * @hooked woocommerce_template_loop_product_title - 10
                 */
                do_action('woocommerce_shop_loop_item_title');

                /**
                 * Hook: woocommerce_after_shop_loop_item_title.
                 *
                 * @hooked woocommerce_template_loop_rating - 5
                 * @hooked woocommerce_template_loop_price - 10
                 */
                do_action('woocommerce_after_shop_loop_item_title');

                /**
                 * Hook: woocommerce_after_shop_loop_item.
                 *
                 * @hooked woocommerce_template_loop_product_link_close - 5
                 * @hooked woocommerce_template_loop_add_to_cart - 10
                 */
                do_action('woocommerce_after_shop_loop_item');
                ?>
            </div>
        </div>
    </article>
</li>
