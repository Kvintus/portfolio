<?php

function getSection($name) {
    $section = get_posts([
        'post_type' => 'section',
        'name' => $name,
    ]);
    if ($section) {
        return get_fields($section[0]->ID); 
    }
    return null;
}


function resolve_custom($data)
{
    return getSection($data['type']);
}

function getSocialMedia() {
    $media = acf_get_posts([
        'post_type' => 'social_media',
    ]);
    
    return array_map(function ($medium) {
        return [
            'link' => $medium->link,
            'iconClasses' => $medium->icon,
            'name' => $medium->post_name,
        ];
    }, $media);
}
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', 'social_media', array(
        'methods'  => 'GET',
        'callback' => 'getSocialMedia'
    ));
    register_rest_route('wp/v2', '(?P<type>[\w-]+)', array(
        'methods'  => 'GET',
        'callback' => 'resolve_custom'
    ));
    
});
