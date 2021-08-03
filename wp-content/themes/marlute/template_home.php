<?php
/*
  Template Name: home
 */
get_header();
global $post;
?>

<div class="hero__teaser section">
        <div class="hero__teaser--image">
            <div class="animation-area">
                <ul class="box-area">
                    <li> </li>
                    <li> </li>
                    <li> </li>
                    <li> </li>
                    <li> </li>
                    <li></li>
                </ul>
            </div>
            <div class="overlay-area"></div>
        </div>
        <div class="section__inner">
            <div class="card__teaser--glas">
                <div class="card__inner">
                    <h1><?php echo get_post_meta($post->ID,'cus_title_1',true); ?> </h1>
                    <h3><?php echo get_post_meta($post->ID,'cus_title_2',true); ?> </h3>
                </div>
            </div><?php
           $link = get_term_link( 25, 'product_cat' );
            ?>
            <button class="primary__button animState primary__button--transparent"><a href="<?php echo $link ?>"><?php echo get_post_meta($post->ID,'cus_button_text',true); ?></a></button>
        </div>
    </div>
    
<?php
get_footer();
?>

