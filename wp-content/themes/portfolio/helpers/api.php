<?php

function aboutSection() {
    $section = get_posts([
        'post_type' => 'section',
        'name' => "about-me",
    ]);
    if ($section) {
        return get_fields($section[0]->ID); 
    }
    return null;
}


function resolve_custom($data)
{
    switch ($data['type']) {
        case "about":
            return aboutSection();
            break;
        default:
            return "not found";
            break;
    }
}
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '(?P<type>\w+)', array(
        'methods'  => 'GET',
        'callback' => 'resolve_custom'
    ));
});
