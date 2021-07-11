<?php

get_header(); ?>

<div id="content" class="site-content">
    <?php while ( have_posts() ) : the_post(); ?>
<section>
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							
								<h3><?php the_title(); ?> </h3>
								<?php the_content(); ?>
						</div>
                                             <div class="industris-space-60"></div
                                             <div class="industris-space"></div>
						<div class="col-md-offset-1 col-md-12 col-sm-12 sm-center" style="margin-top: 30px;">
							<div class="about-img-right">                             
								<?php if ( has_post_thumbnail() && ! post_password_required() ) : ?>
						<div class="entry-thumbnail">
							<?php the_post_thumbnail(); ?>
						</div>
						<?php endif; ?>
								<div class="about-img-small">
										<div class="about-content">
									</div>
								</div>
							</div>
						</div>
					</div>
			    </div>
</section>
			    <div class="industris-space-60"></div>
			    <div class="industris-space"></div>
                            <?php endwhile; ?>
  </div>

	
<?php get_footer(); ?>