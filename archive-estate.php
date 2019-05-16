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
			<div class='project_cat'>
				<div class="note">
					<p style="text-align:justify"><strong><?php echo get_the_archive_description() ?></strong></p>
				</div>

				<div class="cat-title">
					<h1 class="cat-title-main"><span><?php echo single_cat_title('', false) ?></span></h1>
				</div>

				<div class="clearfix bg_white">
					<div class="list_projects_cat cls">
						<?php
						if (have_posts()) : $i = 0; ?>
								<?php
								/* Start the Loop */
								while (have_posts()) : the_post();
									?>
									<div class="item ">
										<div class="inner-item">
											<figure class="frame_img">

												<a class="item-img" href="<?php echo the_permalink() ?>">
													<?php echo get_the_post_thumbnail() ?>
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
									<?php ?>
								<?php
								$i++;
							endwhile;

							the_posts_navigation();

						else :

						endif; ?>
					</div>
				</div>

				<div class="contact"><a href="/lien-he" title="Liên ">Để xem công trình mới nhất, vui lòng liên hệ chúng tôi</a></div>

			</div>
		</div>
	</div>
</div>
<style>
	.project_cat .note {
		font-size: 18px;
		text-align: justify;
		margin-bottom: 20px
	}

	.project_cat .contact {
		text-align: center;
		margin: 15px 0
	}

	.project_cat .contact a {
		padding: 5px 15px;
		border-radius: 5px;
		background: var(--main-color);
		font-size: 16px
	}

	.project_cat .contact a:hover {
		color: #fff
	}

	.project_cat .list_projects_cat {
		margin: 0 -15px;
		display: flex;
		flex-wrap: wrap
	}

	@media all and (max-width: 1200px) {
		.project_cat .list_projects_cat {
			margin: 0 -10px
		}
	}

	@media all and (max-width: 800px) {
		.project_cat .list_projects_cat {
			margin: 0 -5px
		}
	}

	.project_cat .cat-title {
		margin-top: 10px;
		padding-bottom: 15px;
		border-bottom: 1px dotted #d6d6d6;
		position: relative;
		margin-bottom: 30px;
		margin-top: 10px;
		padding-bottom: 15px;
		text-align: center;
		border-bottom: 1px dotted #d6d6d6;
		border-bottom: 1px dotted #d6d6d6
	}

	@media all and (max-width: 800px) {
		.project_cat .cat-title {
			margin-bottom: 15px
		}
	}

	.project_cat .cat-title h1 {
		display: inline-block;
		position: relative;
		margin-left: 10px;
		z-index: 10
	}

	.project_cat .cat-title h1 span {
		font-size: 30px;
		text-transform: uppercase;
		color: #000;
		font-weight: normal;
		text-decoration: none;
		margin-left: 0;
		transition: 0.5s;
		-moz-transition: 0.5s;
		-webkit-transition: 0.5s;
		-o-transition: 0.5s;
		-o-transition: 0.5s
	}

	@media all and (max-width: 600px) {
		.project_cat .cat-title h1 span {
			font-size: 18px
		}
	}

	.project_cat .cat-title h1 span:hover {
		color: var(--main-color)
	}

	.project_cat .item {
		width: calc(33.333% - 30px);
		margin: 0px 15px 30px;
		float: left
	}

	@media all and (max-width: 1200px) {
		.project_cat .item {
			width: calc(33.333% - 20px);
			margin: 0 10px 20px
		}
	}

	@media all and (max-width: 800px) {
		.project_cat .item {
			width: calc(50% - 10px);
			margin: 0 5px 20px
		}
	}

	.project_cat .item figure {
		overflow: hidden;
		margin-bottom: 12px;
		position: relative
	}

	.project_cat .item figure img {
		width: 100%;
		transition: 0.5s;
		-moz-transition: 0.5s;
		-webkit-transition: 0.5s;
		-o-transition: 0.5s
	}

	.project_cat .item .name {
		line-height: 20px;
		color: #000;
		font-size: 16px;
		text-align: left;
		float: left
	}

	@media all and (max-width: 600px) {
		.project_cat .item .name {
			font-size: 15px
		}
	}

	.project_cat .item .loca {
		text-align: left;
		margin-top: 5px;
		color: #6f6f6f;
		line-height: 18px;
		font-size: 17px
	}

	.project_cat .item .loca a {
		color: #797979
	}

	.project_cat .item:hover img {
		transform: scale(1.1)
	}

	.project_cat .list_projects_cat .item:hover figure:before {
		left: 0;
		right: 0
	}

	.project_cat .list_projects_cat .item figure:before {
		content: "";
		position: absolute;
		left: 50%;
		right: 50%;
		bottom: 0;
		background: var(--main-color);
		height: 4px;
		-webkit-transition-property: left, right;
		transition-property: left, right;
		-webkit-transition-duration: .3s;
		transition-duration: .3s;
		-webkit-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
		z-index: 2
	}
</style>
<?php
get_footer();
