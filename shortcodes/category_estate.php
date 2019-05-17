<?php

function shortcode_estate_cat($atts) {
	extract(shortcode_atts(array(
			'cat' => FALSE,
			'limit' => 5,
			'offset' => 0,
			'name' => '',
			'link' => ''
    ), $atts));
    $cat= get_category_by_slug( $atts['cat'] );
	$link = get_category_link( $atts['cat'] );
	$atts['limit'] = $atts['limit'] ? $atts['limit'] : 5;
	$posts = get_posts ( array (
				'numberposts' => $atts['limit'] ,
				'category_name' => $atts['cat'],
                'offset'=>$atts['offset'],
                'post_type' => 'estate'
		) );
		
	foreach($posts as &$post){			
		$post_thumbnail_id = get_post_thumbnail_id( $post );
		$post->link = wp_get_canonical_url ( $post );
		$post->image = wp_get_attachment_image_url( $post_thumbnail_id, 'medium', false );		
    }
    $time = rand(10,100000);
	wp_enqueue_style( 'original-web-slideshow', FVN_URL.'css/slideshow.css');
	wp_enqueue_script( 'original-slideshow', FVN_URL.'assets/js/slideshow.js',array(),'1.0.0',true);	
	ob_start();?>
    
    <div class="block_projects_home projects_home_0 blocks_project blocks0 block">
        <div class="wapper-content-page project_home_content">
        <div class="cat_item_store">       
        <div class="cat-title">
            <h2 class="cat-title-main"><a
                    href="<?php echo $link ?>"
                    title="<?php echo $cat->name ?>"><?php echo $cat->name ?></a></h2>
        </div>
        <div class="row ">
            <div class="row_inner">
                <div class="projects_home_slideshow" id="projects_home_slideshow_<?php echo $time?>">
                <?php foreach($posts as $i=>$post){ ?>
                    <div class="item  <?php echo $i>2 ? 'hide' : 'item-block'?>">					
                                <div class="frame_inner">
                                    <figure class="project_image ">
                                                                <a href="<?php echo $post->link?>" title='<?php echo $post->post_title?>'>
                                            <img class="" alt="<?php echo $post->post_title?>" src="<?php echo $post->image?>"  onerror="javascript:this.src='<?php echo $post->image?>'"/>
                                        </a>
                    
                                    </figure>
                    
                                    <a href="<?php echo $post->link?>" title = "<?php echo $post->post_title?>" class="name" >
                                    <?php echo $post->post_title?>        	</a>
                                    <div class="clear"></div>
                                    <div class="loca"></div>
                                    <div class="clear"></div> 
                                    
                                </div>   <!-- end .frame_inner -->	                                                   
                            </div> 
                <?php }?>	 
                </div>
            </div>
            <div class="link_cat"><a href="<?php echo $link ?>"
            title="<?php echo $cat->name ?>"> <span>››</span>Xem thêm</a></div>

        </div>
      


    </div>
        </div>
    </div>
    
    
	<?php
	$output = ob_get_contents();
	ob_end_clean();
	return $output;

}
add_shortcode('danh_sach_bai_viet','shortcode_estate_cat');
