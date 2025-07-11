<?php
/**
 * Link scanning functionality
 */

if (!defined('ABSPATH')) {
    exit;
}

class LinkLister_Scanner {
    
    public static function scan_all_posts() {
        $posts = get_posts(array(
            'post_type' => array('post', 'page'),
            'post_status' => 'publish',
            'numberposts' => -1
        ));
        
        $data = array();
        
        foreach ($posts as $post) {
            $post_data = self::scan_post($post->ID);
            if ($post_data) {
                $data[] = $post_data;
            }
        }
        
        // Update last sync time
        update_option('linklister_last_sync', current_time('timestamp'));
        
        return $data;
    }
    
    public static function scan_post($post_id) {
        $post = get_post($post_id);
        if (!$post) {
            return false;
        }
        
        $content = $post->post_content;
        $url = get_permalink($post_id);
        
        // Count internal and external links
        $internal_links = self::count_internal_links($content);
        $external_links = self::count_external_links($content);
        $total_links = $internal_links + $external_links;
        
        // Get additional post data
        $word_count = str_word_count(strip_tags($content));
        $post_type = $post->post_type;
        $post_status = $post->post_status;
        $post_date = $post->post_date;
        
        // Store in database
        global $wpdb;
        $table_name = $wpdb->prefix . 'linklister_data';
        
        $wpdb->replace(
            $table_name,
            array(
                'post_id' => $post_id,
                'post_url' => $url,
                'internal_links' => $internal_links,
                'external_links' => $external_links,
                'total_links' => $total_links,
                'last_scanned' => current_time('mysql')
            ),
            array('%d', '%s', '%d', '%d', '%d', '%s')
        );
        
        return array(
            'url' => $url,
            'title' => $post->post_title,
            'post_type' => $post_type,
            'post_status' => $post_status,
            'post_date' => $post_date,
            'word_count' => $word_count,
            'internal_links' => $internal_links,
            'external_links' => $external_links,
            'total_links' => $total_links,
            'last_scanned' => current_time('mysql')
        );
    }
    
    private static function count_internal_links($content) {
        $site_url = get_site_url();
        $pattern = '/<a[^>]+href=["\']([^"\']+)["\'][^>]*>/i';
        preg_match_all($pattern, $content, $matches);
        
        $internal_count = 0;
        if (!empty($matches[1])) {
            foreach ($matches[1] as $url) {
                if (strpos($url, $site_url) !== false || strpos($url, '/') === 0) {
                    $internal_count++;
                }
            }
        }
        
        return $internal_count;
    }
    
    private static function count_external_links($content) {
        $site_url = get_site_url();
        $pattern = '/<a[^>]+href=["\']([^"\']+)["\'][^>]*>/i';
        preg_match_all($pattern, $content, $matches);
        
        $external_count = 0;
        if (!empty($matches[1])) {
            foreach ($matches[1] as $url) {
                if (strpos($url, 'http') === 0 && strpos($url, $site_url) === false) {
                    $external_count++;
                }
            }
        }
        
        return $external_count;
    }
    
    public static function get_stats() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'linklister_data';
        
        $total_posts = $wpdb->get_var("SELECT COUNT(*) FROM $table_name");
        $total_links = $wpdb->get_var("SELECT SUM(total_links) FROM $table_name");
        $internal_links = $wpdb->get_var("SELECT SUM(internal_links) FROM $table_name");
        $external_links = $wpdb->get_var("SELECT SUM(external_links) FROM $table_name");
        
        return array(
            'total_posts' => (int) $total_posts,
            'total_links' => (int) $total_links,
            'internal_links' => (int) $internal_links,
            'external_links' => (int) $external_links
        );
    }
}