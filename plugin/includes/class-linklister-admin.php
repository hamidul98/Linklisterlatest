<?php
/**
 * Admin functionality for LinkLister
 */

if (!defined('ABSPATH')) {
    exit;
}

class LinkLister_Admin {
    
    public function __construct() {
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('admin_init', array($this, 'register_settings'));
        add_action('admin_notices', array($this, 'show_setup_notice'));
    }
    
    public function show_setup_notice() {
        if (get_option('linklister_show_setup_notice') && !get_option('linklister_api_key')) {
            ?>
            <div class="notice notice-warning is-dismissible">
                <p>
                    <strong><?php _e('LinkLister Plugin Setup Required', 'linklister'); ?></strong><br>
                    <?php _e('Please get your API key from', 'linklister'); ?> 
                    <a href="https://linklister.com" target="_blank">LinkLister Dashboard</a> 
                    <?php _e('and configure it in', 'linklister'); ?> 
                    <a href="<?php echo admin_url('admin.php?page=linklister-settings'); ?>">Settings</a>.
                </p>
            </div>
            <?php
        }
    }
    
    public function add_admin_menu() {
        add_menu_page(
            __('LinkLister', 'linklister'),
            __('LinkLister', 'linklister'),
            'manage_options',
            'linklister',
            array($this, 'sync_page'),
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDJMMTMgNUgxMVY5SDlWNUg3TDEwIDJaIiBmaWxsPSIjOTk5OTk5Ii8+CjxwYXRoIGQ9Ik0xOCAxMEMxOCAxNC40MTgzIDEzLjQxODMgMTggMTAgMThDNi41ODE3IDE4IDIgMTQuNDE4MyAyIDEwQzIgNS41ODE3IDYuNTgxNyAyIDEwIDJDMTMuNDE4MyAyIDE4IDUuNTgxNyAxOCAxMFoiIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=',
            30
        );
        
        add_submenu_page(
            'linklister',
            __('Sync', 'linklister'),
            __('Sync', 'linklister'),
            'manage_options',
            'linklister',
            array($this, 'sync_page')
        );
        
        add_submenu_page(
            'linklister',
            __('Dashboard', 'linklister'),
            __('Dashboard', 'linklister'),
            'manage_options',
            'linklister-dashboard',
            array($this, 'dashboard_page')
        );
        
        add_submenu_page(
            'linklister',
            __('Settings', 'linklister'),
            __('Settings', 'linklister'),
            'manage_options',
            'linklister-settings',
            array($this, 'settings_page')
        );
        
        add_submenu_page(
            'linklister',
            __('FAQs', 'linklister'),
            __('FAQs', 'linklister'),
            'manage_options',
            'linklister-faqs',
            array($this, 'faqs_page')
        );
        
        add_submenu_page(
            'linklister',
            __('Support', 'linklister'),
            __('Support', 'linklister'),
            'manage_options',
            'linklister-support',
            array($this, 'support_page')
        );
    }
    
    public function enqueue_scripts($hook) {
        if (strpos($hook, 'linklister') === false) {
            return;
        }
        
        wp_enqueue_script('linklister-admin', LINKLISTER_PLUGIN_URL . 'assets/js/admin.js', array('jquery'), LINKLISTER_VERSION, true);
        wp_enqueue_style('linklister-admin', LINKLISTER_PLUGIN_URL . 'assets/css/admin.css', array(), LINKLISTER_VERSION);
        
        // Localize script for AJAX
        wp_localize_script('linklister-admin', 'linklister_ajax', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('linklister_nonce'),
            'strings' => array(
                'syncing' => __('Syncing...', 'linklister'),
                'sync_complete' => __('Sync Complete!', 'linklister'),
                'sync_error' => __('Sync Error', 'linklister'),
            )
        ));
    }
    
    public function register_settings() {
        register_setting('linklister_settings', 'linklister_api_key');
    }
    
    public function sync_page() {
        include LINKLISTER_PLUGIN_PATH . 'templates/sync-page.php';
    }
    
    public function dashboard_page() {
        include LINKLISTER_PLUGIN_PATH . 'templates/dashboard-page.php';
    }
    
    public function settings_page() {
        include LINKLISTER_PLUGIN_PATH . 'templates/settings-page.php';
    }
    
    public function faqs_page() {
        include LINKLISTER_PLUGIN_PATH . 'templates/faqs-page.php';
    }
    
    public function support_page() {
        include LINKLISTER_PLUGIN_PATH . 'templates/support-page.php';
    }
}