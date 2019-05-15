<?php
/**
 * The blog template file.
 *
 * @package flatsome
 */

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

	<?php do_action('flatsome_before_blog'); ?>

	<div class='main_wrapper container  '>
		<div class="main-area-full">
			<div class='project_catp'>
				<div class="cat_s">
					<?php foreach ($cats as $cat){?>

					<?php }?>
				</div>
			</div>
		</div>
	</div>
</div>

<?php
get_footer();
