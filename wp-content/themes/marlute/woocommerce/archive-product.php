<style>

</style>
<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.4.0
 */
defined('ABSPATH') || exit;

get_header('shop');

/**
 * Hook: woocommerce_before_main_content.
 *
 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
 * @hooked woocommerce_breadcrumb - 20
 * @hooked WC_Structured_Data::generate_website_data() - 30
 */
?>
<style>
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
.product-card--header {
    margin-bottom: 10px!important;
}

</style>
<div class="products container-content">
    <div class="products__inner">
        <div class="products__wrapper section">
            <div class="entry-content section__inner">  

                <?php
                do_action('woocommerce_before_main_content');
                ?>
                <header class="woocommerce-products-header">
                <?php if (apply_filters('woocommerce_show_page_title', true)) : ?>
                        <h1 class="woocommerce-products-header__title page-title"><?php woocommerce_page_title(); ?></h1>
                    <?php endif; ?>

                    <?php
                    /**
                     * Hook: woocommerce_archive_description.
                     *
                     * @hooked woocommerce_taxonomy_archive_description - 10
                     * @hooked woocommerce_product_archive_description - 10
                     */
                    do_action('woocommerce_archive_description');
                    ?>
                </header>
                    <?php
                    if (woocommerce_product_loop()) {

                        /**
                         * Hook: woocommerce_before_shop_loop.
                         *
                         * @hooked woocommerce_output_all_notices - 10
                         * @hooked woocommerce_result_count - 20
                         * @hooked woocommerce_catalog_ordering - 30
                         */
                        do_action('woocommerce_before_shop_loop');

                        woocommerce_product_loop_start();

                        if (wc_get_loop_prop('total')) {
                            while (have_posts()) {
                                the_post();

                                /**
                                 * Hook: woocommerce_shop_loop.
                                 */
                                ?>

                            <?php do_action('woocommerce_shop_loop'); ?>



            <?php
            wc_get_template_part('content', 'product');
        }
    }

    woocommerce_product_loop_end();
    ?>

                    <?php
                    /**
                     * Hook: woocommerce_after_shop_loop.
                     *
                     * @hooked woocommerce_pagination - 10
                     */
                    do_action('woocommerce_after_shop_loop');
                } else {
                    /**
                     * Hook: woocommerce_no_products_found.
                     *
                     * @hooked wc_no_products_found - 10
                     */
                    do_action('woocommerce_no_products_found');
                }

                /**
                 * Hook: woocommerce_after_main_content.
                 *
                 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
                 */
                do_action('woocommerce_after_main_content');
                ?>

            </div>
        </div>
    </div>
</div>    
<?php
/**
 * Hook: woocommerce_sidebar.
 *
 * @hooked woocommerce_get_sidebar - 10
 */
//do_action( 'woocommerce_sidebar' );

get_footer('shop');
