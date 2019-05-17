<?php

if ( ! function_exists('add_config_post_type') ) {

    // Register Custom Post Type
    function add_config_post_type() {
    
        $labels = array(
            'name'                  => _x( 'Config', 'Post Type General Name'),
            'singular_name'         => _x( 'Config', 'Post Type Singular Name'),
            'menu_name'             => __( 'Cấu hình báo giá'),
            'name_admin_bar'        => __( 'Cấu hình báo giá'),
            'archives'              => __( 'Item Archives'),
            'attributes'            => __( 'Item Attributes'),
            'parent_item_colon'     => __( 'Parent Item:'),
            'all_items'             => __( 'All Items'),
            'add_new_item'          => __( 'Add New Item'),
            'add_new'               => __( 'Thêm cấu hình'),
            'new_item'              => __( 'New Item'),
            'edit_item'             => __( 'Edit Item'),
            'update_item'           => __( 'Update Item'),
            'view_item'             => __( 'View Item'),
            'view_items'            => __( 'View Items'),
            'search_items'          => __( 'Search Item'),
            'not_found'             => __( 'Not found'),
            'not_found_in_trash'    => __( 'Not found in Trash'),
            'featured_image'        => __( 'Featured Image'),
            'set_featured_image'    => __( 'Set featured image'),
            'remove_featured_image' => __( 'Remove featured image'),
            'use_featured_image'    => __( 'Use as featured image'),
            'insert_into_item'      => __( 'Insert into item'),
            'uploaded_to_this_item' => __( 'Uploaded to this item'),
            'items_list'            => __( 'Bản ghi'),
            'items_list_navigation' => __( 'Items list navigation'),
            'filter_items_list'     => __( 'Filter items list'),
        );
        $args = array(
            'label'                 => __( 'Config'),
            'description'           => __( 'Cấu hình thi công'),
            'labels'                => $labels,
            'supports'              => array( 'title','excerpt'),
            'taxonomies'            => array(),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 5,
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => false,
            'can_export'            => true,
            'has_archive'           => false,
            'exclude_from_search'   => true,
            'publicly_queryable'    => true,
            'capability_type'       => 'page',
            'menu_icon'           => 'dashicons-admin-generic'
        );
        register_post_type( 'config_fvn', $args );
		
		$labels = array(
            'name'                  => _x( 'Công trình', 'Post Type General Name'),
            'singular_name'         => _x( 'Công trình', 'Post Type Singular Name'),
            'menu_name'             => __( 'Công trình'),
            'name_admin_bar'        => __( 'Công trình'),
            'archives'              => __( 'Item Archives'),
            'attributes'            => __( 'Item Attributes'),
            'parent_item_colon'     => __( 'Parent Item:'),
            'all_items'             => __( 'Tất cả công trình'),
            'add_new_item'          => __( 'Add công trình'),
            'add_new'               => __( 'Thêm công trình'),
            'new_item'              => __( 'Thêm mới'),
            'edit_item'             => __( 'Chỉnh sửa'),
            'update_item'           => __( 'Cập nhật'),
            'view_item'             => __( 'View Item'),
            'view_items'            => __( 'View Items'),
            'search_items'          => __( 'Search Item'),
            'not_found'             => __( 'Not found'),
            'not_found_in_trash'    => __( 'Not found in Trash'),
            'featured_image'        => __( 'Featured Image'),
            'set_featured_image'    => __( 'Set featured image'),
            'remove_featured_image' => __( 'Remove featured image'),
            'use_featured_image'    => __( 'Use as featured image'),
            'insert_into_item'      => __( 'Insert into item'),
            'uploaded_to_this_item' => __( 'Uploaded to this item'),
            'items_list'            => __( 'Bản ghi'),
            'items_list_navigation' => __( 'Items list navigation'),
            'filter_items_list'     => __( 'Filter items list'),
        );
        $args = array(
            'label'                 => __( 'Công trình'),
            'description'           => __( 'Công trình'),
            'labels'                => $labels,
            'supports'              => array( 'title','editor','revisions','thumbnail','author'),
            'taxonomies'            => array('category'),
            'hierarchical'          => true,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'show_in_nav_menus'     => true,
            'show_in_admin_bar'     => true,
            'menu_position'         => 5,
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'capability_type'       => 'post',
            // 'rewrite' => array( 'slug' => 'danhsach' ),
            'query_var' => true,
            'menu_icon'           => 'dashicons-admin-home'
        );
        register_post_type( 'estate', $args );
    
    }
    add_action( 'init', 'add_config_post_type', 0 );
    
}

function fvn_get_config(){
    global $wpdb;

    $posts = get_posts ( array (
        'post_type' => 'config_fvn'
    ) );
    
    $result = [];
    foreach($posts as $post){
        $lines = explode(PHP_EOL,$post->post_excerpt);
        foreach($lines as $i=>$l){
            $value = explode('||',$l);
            $lines[$i] = [
                'value' => $l[0],
                'text' => $l[1]
            ];
        }
        $result[$post->post_name]=$lines;
    }
    return $result;
}

//allow estate in category view
add_filter('pre_get_posts', 'query_post_estate');
function query_post_estate($query) {
  if( is_category() ) {
    $post_type = get_query_var('post_type');
    
    if($post_type){
        $post_type = $post_type;
    }
    else{
        $post_type = array('nav_menu_item', 'post', 'estate'); // don't forget nav_menu_item to allow menus to work!
    }
    $query->set('post_type',$post_type);
    return $query;
    }
}
//register category
function tr_create_my_taxonomy() {

    register_taxonomy(
        'danhsach',
        'estate',
        array(
            'label' => __( 'Danh muc' ),
            'rewrite' => array( 'slug' => 'danhsach' ),
            'hierarchical' => true,
        )
    );
}
// add_action( 'init', 'tr_create_my_taxonomy' );

