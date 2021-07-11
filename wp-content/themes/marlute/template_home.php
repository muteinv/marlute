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
                    <h1>The New Collection </h1>
                    <h3>Quality Perfumes </h3>
                </div>
            </div><button class="primary__button animState primary__button--transparent"><a href="<?php echo get_home_url(); ?>/shop">Shop
                    now</a></button>
        </div>
    </div>
    
<?php
get_footer();
?>

