<?php
//them shortcode
if(!defined('HBPRO_THEME_PATH')) define('HBPRO_THEME_PATH', (__DIR__));
//shortcode
foreach (glob(HBPRO_THEME_PATH.'/shortcodes/*.php') as $filename)
{
	require_once $filename;
}
require_once 'post_type.php';

//script
add_action( 'wp_enqueue_scripts', 'hbpro_scripts' );
function hbpro_scripts() {
	$root = get_stylesheet_directory_uri();	
	wp_enqueue_style( 'fontawesome', $root.'/css/fontawesome.min.css');
	wp_enqueue_style( 'fontawesome-light', $root.'/css/font-awesome-light.css');
	wp_enqueue_style( 'fontawesome-light', $root.'/css/source.css');
	wp_enqueue_script( 'fontawesome-light', $root.'/assets/js/source.js');	
}
//SEO
add_action( 'wp_head', 'theme_xyz_header_metadata' );
function theme_xyz_header_metadata(){
	global $post;
	/*
	if(is_home()){	
		$title = get_option('blogname');
		$desc = get_option('blogdescription');
	}else{	
		
	}
	*/
	$metas = get_post_meta($post->ID);
	$title = $metas['page_title'][0] ? $metas['page_title'][0] : $post->post_title;
	$desc = $metas['page_description'][0] ? $metas['page_description'][0] : $post->post_excerpt;
	$thumb_id = get_post_thumbnail_id();
	//echo ($thumb_id);die;
	if($thumb_id){
		$thumb_url_array = wp_get_attachment_image_src($thumb_id, 'thumbnail', true);
		$thumb_url = $thumb_url_array[0];
	}else{
		$thumb_url = flatsome_option('site_logo');
	}	
	
	echo '<meta property="og:locale" content="vi_VN" />'.PHP_EOL;
	echo '<meta property="og:type" content="article" />'.PHP_EOL;
	echo '<meta property="og:title" content="'.$title.'" />'.PHP_EOL;
	echo '<meta property="og:description" content="'.$desc.'" />'.PHP_EOL;
	echo '<meta property="og:site_name" content="'.home_url().'" />'.PHP_EOL;
	echo '<meta property="og:image" content="'.$thumb_url.'" />'.PHP_EOL;
	echo '<meta name="twitter:card" content="summary" />'.PHP_EOL;
	echo '<meta name="twitter:description" content="'.$desc.'" />'.PHP_EOL;
	echo '<meta name="twitter:title" content="'.$title.'" />'.PHP_EOL;
	echo '<meta name="twitter:image" content="'.$thumb_url.'" />'.PHP_EOL;
}

//contact form 7
//cho phep contact form-7 them shortcode
/*
add_filter( 'wpcf7_form_elements', 'mycustom_wpcf7_form_elements' );

function mycustom_wpcf7_form_elements( $form ) {
	$form = do_shortcode( $form );
	return $form;
}
*/


