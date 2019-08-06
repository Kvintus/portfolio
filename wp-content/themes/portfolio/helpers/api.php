<?php

function getSection($data) {
     $section = get_posts([
        'post_type' => 'section',
        'name' => $data['type'],
    ]);
    if ($section) {
        return get_fields($section[0]->ID); 
    }
    return null;
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

function getServices() {
    $services = acf_get_posts([
        'post_type' => 'service',
    ]);

    
    return array_map(function ($service) {
        return [
            'iconClasses' => $service->icon,
            'title' => $service->post_title,
            'text' => $service->text,
            'id' => $service->ID,
        ];
    }, $services);
}

function getProjectName(int $projectId) {
    return get_post($projectId)->post_title;
}

function getTestimonials() {
    $testimonials = acf_get_posts([
        'post_type' => 'testimonial',
    ]);

    return array_map(function ($testimonial) {
        return [
            'name' => $testimonial->post_title,
            'position' => $testimonial->position,
            'image' => wp_get_attachment_image_src((int)$testimonial->image)[0],
            // 'test' => get_template_directory_uri(),
            'text' => $testimonial->text,
            'linkedin_url' => $testimonial->linkedin_url
        ];
    }, $testimonials);
}

function getTimelineEvents() {
    $events = acf_get_posts([
        'post_type' => 'timeline_event'
    ]);

    return array_map(function ($event) {
        return [
            'since' => $event->since,
            'to' => (int)$event->to ? $event->to : "Present",
            'text' => $event->text,
            'image_icon' => $event->image_icon,
            'icon' => $event->icon
        ];
    }, $events);
}

function getImageUrls($project) {
    $urls = [];
    $ids = explode(',', $project->gallery);
    if ($ids[0]) {
        foreach ($ids as $imageId) {
            array_push($urls, get_post($imageId)->guid);
        } 
    }
    return $urls;
}

function getProjects() {
    $projects = acf_get_posts([
        'post_type' => 'project'
    ]);    


    return array_map(function ($project) {
        $technologiesList = array_map(function ($id) {return getProjectName((int)$id);}, $project->technologies);
        if (!$technologiesList) $technologiesList = [];
        return [
            'name' => $project->post_title,
            'description' => $project->description,
            'title_image' => wp_get_attachment_url($project->title_image),
            'images' => getImageUrls($project),
            'video' => $project->video,
            'technologies' => $technologiesList
        ];
    }, $projects);;
}

add_action('rest_api_init', function () {

    register_rest_route('wp/v2', 'social_media', array(
        'methods'  => 'GET',
        'callback' => 'getSocialMedia'
    ));

    register_rest_route('wp/v2', 'testimonials', array(
        'methods'  => 'GET',
        'callback' => 'getTestimonials'
    ));

    register_rest_route('wp/v2', 'timeline_events', array(
        'methods'  => 'GET',
        'callback' => 'getTimelineEvents'
    ));

    register_rest_route('wp/v2', 'services', array(
        'methods'  => 'GET',
        'callback' => 'getServices'
    ));
    
    register_rest_route('wp/v2', 'projects', array(
        'methods'  => 'GET',
        'callback' => 'getProjects'
    ));

    register_rest_route('wp/v2', 'section/(?P<type>[\w-]+)', array(
        'methods'  => 'GET',
        'callback' => 'getSection'
    ));

    
});
