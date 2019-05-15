<?php
/**
 * The blog template file.
 *
 * @package flatsome
 */
wp_enqueue_script('original-web', $root . '/assets/js/source.js', array(), '1.0.0', true);
get_header();

// $cat = get_the_category();
?>



<div class='wrapper_content nohome'>

	<div class="home_pos_0">
		<div class="block_banners banners_0 blocks_banner blocks0 block" id="block_id_159">
			<div class="block_title"><span><?php the_archive_title(); ?></span></div>
			<div class="banners  banners-default block_inner block_banner_banner" id="block_banner_159">
				<a class="adv-col banner_item  adv-col" href="" title="Banner cat product" id="banner_item_59">
					<img class="img-old img-responsive" alt="Banner cat product" src="<?php echo FVN_URL . 'assets/images/bancat_1545301956.png' ?>">
				</a>


				<div class="clear"></div>
			</div>
			<div class="clear"></div>

		</div>
		<div class="block_projects_menu projects_menu_1 blocks_projects_menu blocks1 block" id="block_id_158">
			<ul>
				<!--	CONTENT -->
				<li class="item active item_0 "><a href="/thi-cong-noi-that"><span> Thi công nội thất</span></a> </li>
				<li class="item  item_1 "><a href="/thiet-ke-noi-that"><span> Thiết kế nội thất</span></a> </li>
			</ul>
			<!--	end CONTENT -->
		</div>
	</div>

	<?php the_breadcrumb() ?>

	<div class='main_wrapper container  '>
		<div class="main-area-full">
			<div class='project_catp'>
				<div class="note">
					<p style="text-align:justify"><strong><?php get_the_archive_description() ?></strong></p>
				</div>

				<div class="cat-title">
					<h1 class="cat-title-main"><span><?php echo single_cat_title( '', false )?></span></h1>
				</div>

				<div class="cat_s">
					<?php
					if (have_posts()) : $i = 0; ?>
						<div class="row item-cat">
							<?php
							/* Start the Loop */
							while (have_posts()) : the_post();
								?>

								<div class="clearfix bg_white">
									<div class="list_projects_cat cls">
										<div class="item ">
											<div class="inner-item">
												<figure class="frame_img">

													<a class="item-img" href="<?php echo the_permalink() ?>">
														<?php echo get_the_post_thumbnail()?>
													</a>
												</figure>
												<div class="frame_title">
													<h2 class="name"><a href="<?php echo the_permalink() ?>" title="<?php the_title() ?>"><?php the_title() ?></a>

													</h2>
													<div class="clear"></div>
													<div class="loca"><a href="<?php echo the_permalink() ?>" title="<?php the_title() ?>">&nbsp;</a></div>
												</div>

											</div>
										</div>

									</div>
								</div>

								<?php ?>
							</div>
							<?php
							$i++;
						endwhile;

						the_posts_navigation();

					else :

						

					endif; ?>
				</div>

				<div class="contact"><a href="/lien-he" title="Liên ">Để xem công trình mới nhất, vui lòng liên hệ chúng tôi</a></div>

			</div>
		</div>
	</div>
</div>

<?php
get_footer();
