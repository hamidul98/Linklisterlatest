<?php
/**
 * API communication with LinkLister SaaS
 */

if (!defined('ABSPATH')) {
    exit;
}

class LinkLister_API {
    
    private static $api_url = 'https://your-vercel-app.vercel.app/api/';
    
    public static function send_data($data) {
        $api_key = get_option('linklister_api_key');
        
        if (empty($api_key)) {
            return new WP_Error('no_api_key', __('API key is required', 'linklister'));
        }
        
        $payload = array(
            'site_url' => get_site_url(),
            'pages' => $data,
            'api_key' => $api_key,
            'timestamp' => current_time('timestamp')
        );
        
        $response = wp_remote_post(self::$api_url . 'data-upload', array(
            'method' => 'POST',
            'timeout' => 30,
            'headers' => array(
                'Content-Type' => 'application/json',
                'User-Agent' => 'LinkLister WordPress Plugin/' . LINKLISTER_VERSION
            ),
            'body' => json_encode($payload)
        ));
        
        if (is_wp_error($response)) {
            return $response;
        }
        
        $response_code = wp_remote_retrieve_response_code($response);
        $response_body = wp_remote_retrieve_body($response);
        
        if ($response_code !== 200) {
            $error_message = sprintf(__('API returned error code: %d. Please check your API key.', 'linklister'), $response_code);
            if ($response_code === 401) {
                $error_message = __('Invalid API key. Please check your API key from LinkLister dashboard.', 'linklister');
            }
            return new WP_Error('api_error', $error_message);
        }
        
        $decoded_response = json_decode($response_body, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            return new WP_Error('json_error', __('Invalid JSON response from API', 'linklister'));
        }
        
        return $decoded_response;
    }
    
    public static function validate_api_key($api_key) {
        if (empty($api_key)) {
            return false;
        }
        
        // Validate API key format (should start with ll_)
        if (!preg_match('/^ll_[a-zA-Z0-9_]+$/', $api_key)) {
            return false;
        }
        
        $response = wp_remote_post(self::$api_url . 'validate-key', array(
            'method' => 'POST',
            'timeout' => 15,
            'headers' => array(
                'Content-Type' => 'application/json'
            ),
            'body' => json_encode(array(
                'api_key' => $api_key,
                'site_url' => get_site_url()
            ))
        ));
        
        if (is_wp_error($response)) {
            return false;
        }
        
        $response_code = wp_remote_retrieve_response_code($response);
        $response_body = wp_remote_retrieve_body($response);
        
        if ($response_code === 200) {
            $decoded_response = json_decode($response_body, true);
            return isset($decoded_response['valid']) && $decoded_response['valid'] === true;
        }
        
        return false;
    }
    
    public static function get_sync_status() {
        $api_key = get_option('linklister_api_key');
        
        if (empty($api_key)) {
            return false;
        }
        
        $response = wp_remote_get(self::$api_url . 'sync-status?api_key=' . urlencode($api_key), array(
            'timeout' => 15
        ));
        
        if (is_wp_error($response)) {
            return false;
        }
        
        $response_body = wp_remote_retrieve_body($response);
        return json_decode($response_body, true);
    }
    
    public static function test_connection() {
        $api_key = get_option('linklister_api_key');
        
        if (empty($api_key)) {
            return new WP_Error('no_api_key', __('No API key found. Please enter your API key first.', 'linklister'));
        }
        
        $response = wp_remote_post(self::$api_url . 'test-connection', array(
            'method' => 'POST',
            'timeout' => 15,
            'headers' => array(
                'Content-Type' => 'application/json'
            ),
            'body' => json_encode(array(
                'api_key' => $api_key,
                'site_url' => get_site_url(),
                'site_name' => get_bloginfo('name')
            ))
        ));
        
        if (is_wp_error($response)) {
            return $response;
        }
        
        $response_code = wp_remote_retrieve_response_code($response);
        $response_body = wp_remote_retrieve_body($response);
        
        if ($response_code === 200) {
            return json_decode($response_body, true);
        } else {
            return new WP_Error('connection_failed', sprintf(__('Connection test failed with code: %d', 'linklister'), $response_code));
        }
    }
}