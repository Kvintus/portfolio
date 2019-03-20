<?php

function create_section_type()
{
    register_post_type(
        'section',
        array(
            'labels' => array(
                'name' => __('Sections'),
                'singular_name' => __('Section')
            ),
            'public' => true,
            'has_archive' => false,
            'show_in_rest' => true,
            'query_var' => true,
            'supports' => ['title', 'slug'],
            'menu_icon' => 'dashicons-exerpt-view'
        )
    );
}

function create_service_type()
{
    register_post_type(
        'service',
        array(
            'labels' => array(
                'name' => __('Services'),
                'singular_name' => __('Service')
            ),
            'public' => true,
            'show_in_rest' => true,
            'query_var' => true,
            'supports' => ['title', 'slug'],
            'menu_icon' => 'dashicons-hammer'
        )
    );
}


function create_project_type()
{
    register_post_type(
        'project',
        array(
            'labels' => array(
                'name' => __('Projects'),
                'singular_name' => __('Project')
            ),
            'public' => true,
            'show_in_rest' => true,
            'query_var' => true,
            'supports' => ['title', 'slug'],
            'menu_icon' => 'dashicons-media-code
            '
        )
    );
}


function create_timeline_event_type()
{
    register_post_type(
        'timeline_event',
        array(
            'labels' => array(
                'name' => __('Timeline Events'),
                'singular_name' => __('Timeline Events')
            ),
            'public' => true,
            'show_in_rest' => true,
            'query_var' => true,
            'supports' => ['title', 'slug'],
            'menu_icon' => 'dashicons-flag',
        )
    );
}

function create_testimonial_type()
{
    register_post_type(
        'testimonial',
        array(
            'labels' => array(
                'name' => __('Testimonials'),
                'singular_name' => __('Testimonial')
            ),
            'public' => true,
            'show_in_rest' => true,
            'query_var' => true,
            'supports' => ['title', 'slug'],
            'menu_icon' => 'dashicons-groups',
        )
    );
}

function create_social_media_type()
{
    register_post_type(
        'social_media',
        array(
            'labels' => array(
                'name' => __('Social Media'),
                'singular_name' => __('Social Medium')
            ),
            'public' => true,
            'show_in_rest' => true,
            'query_var' => true,
            'supports' => ['title', 'slug'],
            'menu_icon' => 'dashicons-share',
        )
    );
}

function create_technology_type()
{
    register_post_type(
        'technology',
        array(
            'labels' => array(
                'name' => __('Technologies'),
                'singular_name' => __('Technology')
            ),
            'public' => true,
            'show_in_rest' => true,
            'query_var' => true,
            'supports' => ['title', 'slug'],
            'menu_icon' => 'dashicons-editor-code',
        )
    );
}


add_action('init', 'create_section_type');
add_action('init', 'create_service_type');
add_action('init', 'create_technology_type');
add_action('init', 'create_project_type');
add_action('init', 'create_timeline_event_type');
add_action('init', 'create_testimonial_type');
add_action('init', 'create_social_media_type');


