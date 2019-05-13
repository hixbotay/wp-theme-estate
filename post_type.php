<?php

if ( ! function_exists('add_config_post_type') ) {

    // Register Custom Post Type
    function add_config_post_type() {
    
        $labels = array(
            'name'                  => _x( 'Config', 'Post Type General Name', 'fvn' ),
            'singular_name'         => _x( 'Config', 'Post Type Singular Name', 'fvn' ),
            'menu_name'             => __( 'Cấu hình báo giá', 'fvn' ),
            'name_admin_bar'        => __( 'Cấu hình báo giá', 'fvn' ),
            'archives'              => __( 'Item Archives', 'fvn' ),
            'attributes'            => __( 'Item Attributes', 'fvn' ),
            'parent_item_colon'     => __( 'Parent Item:', 'fvn' ),
            'all_items'             => __( 'All Items', 'fvn' ),
            'add_new_item'          => __( 'Add New Item', 'fvn' ),
            'add_new'               => __( 'Thêm cấu hình', 'fvn' ),
            'new_item'              => __( 'New Item', 'fvn' ),
            'edit_item'             => __( 'Edit Item', 'fvn' ),
            'update_item'           => __( 'Update Item', 'fvn' ),
            'view_item'             => __( 'View Item', 'fvn' ),
            'view_items'            => __( 'View Items', 'fvn' ),
            'search_items'          => __( 'Search Item', 'fvn' ),
            'not_found'             => __( 'Not found', 'fvn' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'fvn' ),
            'featured_image'        => __( 'Featured Image', 'fvn' ),
            'set_featured_image'    => __( 'Set featured image', 'fvn' ),
            'remove_featured_image' => __( 'Remove featured image', 'fvn' ),
            'use_featured_image'    => __( 'Use as featured image', 'fvn' ),
            'insert_into_item'      => __( 'Insert into item', 'fvn' ),
            'uploaded_to_this_item' => __( 'Uploaded to this item', 'fvn' ),
            'items_list'            => __( 'Bản ghi', 'fvn' ),
            'items_list_navigation' => __( 'Items list navigation', 'fvn' ),
            'filter_items_list'     => __( 'Filter items list', 'fvn' ),
        );
        $args = array(
            'label'                 => __( 'Config', 'fvn' ),
            'description'           => __( 'Cấu hình thi công', 'fvn' ),
            'labels'                => $labels,
            'supports'              => array( 'title','custom-fields'),
            'taxonomies'            =>false,
            'hierarchical'          => false,
            'public'                => false,
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
        );
        register_post_type( 'config_fvn', $args );
    
    }
    add_action( 'init', 'add_config_post_type', 0 );
    
}