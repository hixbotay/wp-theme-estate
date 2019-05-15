<?php

function shortcode_estate_cat($atts) {
	extract(shortcode_atts(array(
			'cat' => FALSE,
			'limit' => 5,
			'offset' => 0,
			'name' => '',
			'link' => ''
    ), $atts));
    $cat= get_category( $atts['cat'] );
	$link = get_category_link( $atts['cat'] );
	$atts['limit'] = $atts['limit'] ? $atts['limit'] : 5;
	$posts = get_posts ( array (
				'numberposts' => $atts['limit'] ,
				'category_name' => $atts['cat'],
				'offset'=>$atts['offset']
		) );
		
	foreach($posts as &$post){			
		$post_thumbnail_id = get_post_thumbnail_id( $post );
		$post->link = wp_get_canonical_url ( $post );
		$post->image = wp_get_attachment_image_url( $post_thumbnail_id, 'medium', false );		
	}
	wp_enqueue_script( 'original-web', FVN_URL.'/assets/js/source.js',array(),'1.0.0',true);	
	ob_start();?>
	<div class="cat-title thiet-ke-biet-thu">
        <h2 class="cat-title-main"><a
                href="<?php echo $link ?>"
                title="<?php echo $cat->name ?>"><?php echo $cat->name ?></a></h2>
    </div>
    <div class="list_projects_slideshow list_projects_33 " id="list_projects_slideshow_33">       
        
        <?php foreach($posts as $post){ ?>
            <div class="item cls" itemscope="" itemtype="http://schema.org/Product">
                <link itemprop="url"
                    href="<?php echo $post->link?>">

                <figure>
                    <picture>
                        <a href="<?php echo $post->link?>"
                            title="<?php echo $post->post_title?>">
                            <img class="img-responsive"
                                alt="<?php echo $post->post_title?>"
                                src="<?php echo $post->image?>" />
                        </a>
                    </picture>
                </figure>
                <h2 class="name" itemprop="name">
                    <a href="<?php echo $post->link?>"
                        title="<?php echo $post->post_title?>">Biệt thự Vinhomes Mỹ Đình
                        - Gia chủ: Chị Trang</a>
                </h2>
                <div class="clear"></div>
                <div class="loca"><a
                        href="<?php echo $post->link?>"
                        title="<?php echo $post->post_title?>">VinHomes Mỹ Đình</a>
                </div>
                </a>
            </div>
        <?php }?>


    </div>
    <div class="link_cat"><a href="<?php echo $link ?>"
            title="<?php echo $cat->name ?>"> <span>››</span>Xem thêm</a></div>
	<?php
	$output = ob_get_contents();
	ob_end_clean();
	return $output;

}
add_shortcode('danh_sach_bai_viet','shortcode_estate_cat');
