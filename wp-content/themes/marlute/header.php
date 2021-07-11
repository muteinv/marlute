<!DOCTYPE html>
<html  <?php language_attributes(); ?>>

<head>
    <?php wp_head(); ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css">
    <script>
    var theme_url = '<?php echo get_template_directory_uri().'/' ?>';
    jQuery( document ).ready(function() {
    jQuery(".main-nav__list li a").addClass("navbar-links");  
    jQuery(".main-nav__list li").addClass("main-nav__link");  
    jQuery(".gender-nav__list li").addClass("gender-nav__link");  
    jQuery(".add_to_cart_button").addClass("primary__button primary__button--transparent animState");  
    jQuery(".product_type_simple").addClass("primary__button primary__button--transparent animState");  
//    jQuery(".main-nav__list li").addClass("main-nav__link");  
    });
</script>
<style>
  
body.woocommerce .star-rating span::before {
  content: “SSSSS” !important;
  color: #e0b22f !important;
}

.woocommerce .star-rating span{
font-family:star !important;
}

.star-rating::before {
    color: #e0b22f;
}
.star-rating {
    font-family: star !important;
}
.star-rating span {
    font-family: star !important;
}
</style>
    <title>
            <?php
        if (is_home() || is_front_page()) {
            bloginfo('name');
        } else {
            wp_title();
        } ?>
        </title> 
</head>

<body <?php body_class() ?>>
    <header class="header">
        <div class="header-wrapper">
            <div class="overlay has-fade hide-for-desktop"></div>
            <div class="header__wrapper">
                <nav class="main-nav">
                    <div class="logo">
                        <div class="logo__inner"><a class="icon icon--logo hide-for-desktop"
                                href="<?php echo get_home_url(); ?>"><svg aria-hidden="true" focusable="false" role="img">
                                    <use href="#icon--logo"></use>
                                </svg></a><a class="icon icon--logo-brand hide-for-mobile"
                                href="<?php echo get_home_url(); ?>/for-her"><span id="logo-brand"><svg aria-hidden="true"
                                        focusable="false" role="img">
                                        <use href="#icon--logo-brand"></use>
                                    </svg></span><span id="logo-logo"><svg aria-hidden="true" focusable="false"
                                        role="img">
                                        <use href="#icon--brand"></use>
                                    </svg></span></a></div>
                    </div>
                    <div class="header__links has-fade">
                        <?php wp_nav_menu(array('theme_location' => 'header-menu',
                                                        'container' => false,
                                                        'menu_class' => 'main-nav__list'));
                                                    ?>
                        <ul class="main-nav__list">
                            <li class="main-nav__link shoppingcard--link"><a class="navbar-links icon icon--link"
                                    href="<?php echo wc_get_cart_url(); ?>"><svg aria-hidden="true" focusable="false" role="img">
                                        <use href="#icon--shoppingcard"></use>
                                    </svg></a></li>
                        </ul>
                    </div><button class="header__toggle hide-for-desktop" id="btnHamburger"><span> </span><span>
                        </span><span> </span></button>
                </nav>
            </div>
            <div class="gender-nav">
                <nav class="gender-nav__inner">
                
                 <?php wp_nav_menu(array('theme_location' => 'sub-menu',
                                                        'container' => false,
                                                        'menu_class' => 'gender-nav__list'));
                 ?>
                    </nav>
            </div>
        </div>
    </header>            