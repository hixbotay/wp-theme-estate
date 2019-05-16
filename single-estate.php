<?php
/**
 * The blog template file.
 *
 * @package flatsome
 */
wp_enqueue_script( 'original-web', FVN_URL.'/assets/js/source.js',array(),'1.0.0',true);	
get_header();

$post = get_post();
$cat = get_the_category();
$relate_query = new WP_Query(array(
	'post_type' => 'estate',
	'posts_per_page' => 3,
	'ignore_sticky_posts' => 1,
	'post__not_in' => array($post->ID)
));
$meta = get_post_meta($post->ID);
$slide_show = unserialize($meta['slide_show'][0]); ?>


<div class='wrapper_content nohome'>

	<div class="home_pos_0">
		<div class="block_banners banners_0 blocks_banner blocks0 block" id="block_id_159">
			<div class="block_title"><span><?php echo $cat[0]->cat_name ?></span></div>
			<div class="banners  banners-default block_inner block_banner_banner" id="block_banner_159">
				<a class="adv-col banner_item  adv-col" href="" title="Banner cat product" id="banner_item_59">
					<img class="img-old img-responsive" alt="Banner cat product" src="<?php echo FVN_URL.'assets/images/bancat_1545301956.png'?>">
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
			<div class='project'>

				<h1 class="product_name"><?php the_title() ?></h1>


				<div id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:1170px;height:685px;overflow:hidden;visibility:hidden;">
					<!-- Loading Screen -->
					<div data-u="loading" class="jssorl-009-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
						<img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="../svg/loading/static-svg/spin.svg" />
					</div>
					<div data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:1170px;height:585px;overflow:hidden;">

						<?php foreach ($slide_show as $img) { ?>
							<div>
								<img data-u="image" src="<?php echo wp_get_attachment_image_src($img, 'origin')[0] ?>" />
								<img data-u="thumb" src="<?php echo wp_get_attachment_image_src($img, 'medium')[0] ?>" />
							</div>
						<?php } ?>

					</div>
					<!-- Thumbnail Navigator -->
					<div data-u="thumbnavigator" class="jssort101" style="position:absolute;left:0px;bottom:0px;width:1170px;height:100px;background-color:#000;" data-autocenter="1" data-scale-bottom="0.75">
						<div data-u="slides">
							<div data-u="prototype" class="p" style="width:190px;height:84px;">
								<div data-u="thumbnailtemplate" class="t"></div>
								<svg viewBox="0 0 16000 16000" class="cv">
									<circle class="a" cx="8000" cy="8000" r="3238.1"></circle>
									<line class="a" x1="6190.5" y1="8000" x2="9809.5" y2="8000"></line>
									<line class="a" x1="8000" y1="9809.5" x2="8000" y2="6190.5"></line>
								</svg>
							</div>
						</div>
					</div>
					<!-- Arrow Navigator -->
					<div data-u="arrowleft" class="jssora106" style="width:55px;height:55px;top:292px;left:30px;" data-scale="0.75">
						<svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
							<circle class="c" cx="8000" cy="8000" r="6260.9"></circle>
							<polyline class="a" points="7930.4,5495.7 5426.1,8000 7930.4,10504.3 "></polyline>
							<line class="a" x1="10573.9" y1="8000" x2="5426.1" y2="8000"></line>
						</svg>
					</div>
					<div data-u="arrowright" class="jssora106" style="width:55px;height:55px;top:292px;right:30px;" data-scale="0.75">
						<svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
							<circle class="c" cx="8000" cy="8000" r="6260.9"></circle>
							<polyline class="a" points="8069.6,5495.7 10573.9,8000 8069.6,10504.3 "></polyline>
							<line class="a" x1="5426.1" y1="8000" x2="10573.9" y2="8000"></line>
						</svg>
					</div>
				</div>

				<!-- #endregion Jssor Slider End -->

				<div class="project_base">
					<div class="descrip">
						<div class="des_title">Chi tiết dự án</div>
						<div class="des">
							<p><?php echo get_post()->post_content ?></p>
						</div>
					</div>
					<div class="detail">
						<div class="detail_title">Thông tin dự án</div>
						<div class="det">

							<div class="name"><span>Tên dự án: </span><?php the_title() ?></div>
							<?php if($meta['address']){?>
								<div class="name"><span>Địa điểm: </span><?php echo $meta['address'][0] ?></div>
							<?php }?>
							<?php if($meta['processing_status']){?>
								<div class="name"><span>Trạng thái hoàn thiện: </span><?php echo $meta['processing_status'][0] ?></div>
							<?php }?>
						</div>
						<div class="contact"><a href="/lien-he" title="Liên hệ">Liên hệ</a></div>
					</div>

					<div class="clear"></div>

				</div>


				<div id="prodetails_tab4" class="prodetails_tab mbl">


					<div class="products-list-related">
						<div class='tab_label'><span>Có thể bạn quan tâm</span></div>
						<div class="product_grid clearfix projectlist_slide vertical cls">
							<?php if ($relate_query->have_posts()) {
								while ($relate_query->have_posts()) : $relate_query->the_post(); ?>

									<div class="item " itemscope="" itemtype="">
										<link itemprop="url" href="">
										<a href="<?php the_permalink() ?>" title="<?php the_title() ?>">
											<figure>

												<picture>
													<?php the_post_thumbnail('medium', array('alt' => get_the_title(), 'class' => 'img-responsive')); ?>
												</picture>
											</figure>
											<h2 class="name" itemprop="name"><?php the_title()?></h2>
											<div class="clear"></div>
											<div class="loca">&nbsp;</div>

										</a>
									</div>
								<?php endwhile;
							wp_reset_query();
						} ?>


						</div>
					</div>
				</div>
			</div>
		</div>
		<div class='clear'></div>
	</div>
</div>

<?php
get_footer();
