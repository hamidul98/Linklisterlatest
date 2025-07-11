<?php
/**
 * AJAX handlers for LinkLister
 */

if (!defined('ABSPATH')) {
    exit;
}

class LinkLister_Ajax {
    
    public function __construct() {
        add_action('wp_ajax_linklister_sync', array($this, 'handle_sync'));
        add_action('wp_ajax_linklister_force_sync', array($this, 'handle_force_sync'));
        add_action('wp_ajax_linklister_save_settings', array($this, 'handle_save_settings'));
        add_action('wp_ajax_linklister_get_stats', array($this, 'handle_get_stats'));
    }
    
    public function handle_sync() {
        check_ajax_referer('linklister_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die(__('Insufficient permissions', 'linklister'));
        }
        
        // Update sync status
        update_option('linklister_sync_status', 'syncing');
        
        // Scan all posts
        $data = LinkLister_Scanner::scan_all_posts();
        
        // Send data to API
        $result = LinkLister_API::send_data($data);
        
        if (is_wp_error($result)) {
            update_option('linklister_sync_status', 'error');
            wp_send_json_error(array(
                'message' => $result->get_error_message()
            ));
        } else {
            update_option('linklister_sync_status', 'completed');
            update_option('linklister_last_sync', current_time('timestamp'));
            
            wp_send_json_success(array(
                'message' => __('Sync completed successfully', 'linklister'),
                'data' => $data,
                'stats' => LinkLister_Scanner::get_stats()
            ));
        }
    }
    
    public function handle_force_sync() {
        check_ajax_referer('linklister_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die(__('Insufficient permissions', 'linklister'));
        }
        
        // Clear existing data
        global $wpdb;
        $table_name = $wpdb->prefix . 'linklister_data';
        $wpdb->query("TRUNCATE TABLE $table_name");
        
        // Perform regular sync
        $this->handle_sync();
    }
    
    public function handle_save_settings() {
        check_ajax_referer('linklister_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die(__('Insufficient permissions', 'linklister'));
        }
        
        $api_key = sanitize_text_field($_POST['api_key']);
        
        if (empty($api_key)) {
            wp_send_json_error(array(
                'message' => __('Please enter your API key from LinkLister dashboard.', 'linklister')
            ));
        }
        
        // Validate API key
        if (!LinkLister_API::validate_api_key($api_key)) {
            wp_send_json_error(array(
                'message' => __('Invalid API key. Please check your API key from LinkLister dashboard.', 'linklister')
            ));
        }
        
        update_option('linklister_api_key', $api_key);
        
        // Test connection after saving
        $connection_test = LinkLister_API::test_connection();
        if (is_wp_error($connection_test)) {
            wp_send_json_error(array(
                'message' => __('API key saved but connection test failed: ', 'linklister') . $connection_test->get_error_message()
            ));
        }
        
        wp_send_json_success(array(
            'message' => __('API key saved and connection verified successfully!', 'linklister'),
            'connection_status' => $connection_test
        ));
    }
    
    public function handle_get_stats() {
        check_ajax_referer('linklister_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die(__('Insufficient permissions', 'linklister'));
        }
        
        $stats = LinkLister_Scanner::get_stats();
        
        wp_send_json_success($stats);
    }
}