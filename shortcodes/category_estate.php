<?php

function shortcode_estate_cat($atts) {
	extract(shortcode_atts(array(
			'cat' => FALSE,
			'limit' => 5,
			'offset' => 0,
			'name' => '',
			'link' => ''
	), $atts));
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
	
	ob_start();?>
	<div class="cat-title thiet-ke-biet-thu">
        <h2 class="cat-title-main"><a
                href="https://www.thietkeroyalhome.com/thiet-ke-biet-thu-pj.html"
                title="Thiết kế biệt thự">Thiết kế biệt thự</a></h2>
    </div>
    <div class="list_projects_slideshow list_projects_33 " id="list_projects_slideshow_33">       
        
        <?php foreach($posts as $p){ ?>
            <div class="item cls" itemscope="" itemtype="http://schema.org/Product">
                <link itemprop="url"
                    href="https://www.thietkeroyalhome.com/thiet-ke-biet-thu/biet-thu-vinhomes-my-dinh---gia-chu:-chi-trang-dpj6180.html">

                <figure>
                    <picture>
                        <a href="https://www.thietkeroyalhome.com/thiet-ke-biet-thu/biet-thu-vinhomes-my-dinh---gia-chu:-chi-trang-dpj6180.html"
                            title="Biệt thự Vinhomes Mỹ Đình - Gia chủ: Chị Trang">
                            <img class="img-responsive"
                                alt="Biệt thự Vinhomes Mỹ Đình - Gia chủ: Chị Trang"
                                src="https://www.thietkeroyalhome.com/images/projects/2019/03/09/resized/tang1-khachbep7_1552114366.jpg" />
                        </a>
                    </picture>
                </figure>
                <h2 class="name" itemprop="name">
                    <a href="https://www.thietkeroyalhome.com/thiet-ke-biet-thu/biet-thu-vinhomes-my-dinh---gia-chu:-chi-trang-dpj6180.html"
                        title="Biệt thự Vinhomes Mỹ Đình - Gia chủ: Chị Trang">Biệt thự Vinhomes Mỹ Đình
                        - Gia chủ: Chị Trang</a>
                </h2>
                <div class="clear"></div>
                <div class="loca"><a
                        href="https://www.thietkeroyalhome.com/thiet-ke-biet-thu/biet-thu-vinhomes-my-dinh---gia-chu:-chi-trang-dpj6180.html"
                        title="Biệt thự Vinhomes Mỹ Đình - Gia chủ: Chị Trang">VinHomes Mỹ Đình</a>
                </div>
                </a>
            </div>
        <?php }?>


    </div>
    <div class="link_cat"><a href="https://www.thietkeroyalhome.com/thiet-ke-biet-thu-pj.html"
            title="Thiết kế biệt thự"> <span>››</span>Xem thêm</a></div>
	<?php
	$output = ob_get_contents();
	ob_end_clean();
	return $output;

}
add_shortcode('blog_featured','shortcode_estate_cat');
