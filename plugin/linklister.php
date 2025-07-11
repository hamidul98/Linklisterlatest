<?php
/**
 * Plugin Name: LinkLister
 * Plugin URI: https://linklister.com
 * Description: Smart link analysis plugin for WordPress that provides automatic link detection, analytics dashboard, and broken link detection.
 * Version: 1.0.0
 * Author: LinkLister Team
 * Author URI: https://linklister.com
 * License: GPL v2 or later
 * Text Domain: linklister
 * Domain Path: /languages
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('LINKLISTER_VERSION', '1.0.0');
define('LINKLISTER_PLUGIN_URL', plugin_dir_url(__FILE__));
define('LINKLISTER_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('LINKLISTER_API_URL', 'https://your-vercel-app.vercel.app/api/');

// Include required files
require_once LINKLISTER_PLUGIN_PATH . 'includes/class-linklister-admin.php';
require_once LINKLISTER_PLUGIN_PATH . 'includes/class-linklister-api.php';
require_once LINKLISTER_PLUGIN_PATH . 'includes/class-linklister-scanner.php';
require_once LINKLISTER_PLUGIN_PATH . 'includes/class-linklister-ajax.php';

/**
 * Main LinkLister Class
 */
class LinkLister {
    
    private static $instance = null;
    
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    private function __construct() {
        add_action('init', array($this, 'init'));
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));
    }
    
    public function init() {
        // Load text domain
        load_plugin_textdomain('linklister', false, dirname(plugin_basename(__FILE__)) . '/languages');
        
        // Initialize admin
        if (is_admin()) {
            new LinkLister_Admin();
        }
        
        // Initialize AJAX handlers
        new LinkLister_Ajax();
    }
    
    public function activate() {
        // Create database tables if needed
        $this->create_tables();
        
        // Set default options
        if (!get_option('linklister_api_key')) {
            add_option('linklister_api_key', '');
        }
        add_option('linklister_last_sync', 0);
        add_option('linklister_sync_status', 'idle');
        
        // Add admin notice for first-time setup
        add_option('linklister_show_setup_notice', true);
    }
    
    public function deactivate() {
        // Clean up scheduled events
        wp_clear_scheduled_hook('linklister_auto_sync');
    }
    
    private function create_tables() {
        global $wpdb;
        
        $table_name = $wpdb->prefix . 'linklister_data';
        
        $charset_collate = $wpdb->get_charset_collate();
        
        $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            post_id bigint(20) NOT NULL,
            post_url varchar(255) NOT NULL,
            internal_links int(11) DEFAULT 0,
            external_links int(11) DEFAULT 0,
            total_links int(11) DEFAULT 0,
            last_scanned datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            UNIQUE KEY post_id (post_id)
        ) $charset_collate;";
        
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
}

// Initialize the plugin
LinkLister::get_instance();