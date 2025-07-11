<?php
if (!defined('ABSPATH')) {
    exit;
}

$api_key = get_option('linklister_api_key', '');
?>

<div class="linklister-container">
    <div class="linklister-header">
        <div class="linklister-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#gradient)"/>
                <path d="M8 12L12 8H20L24 12V20L20 24H12L8 20V12Z" stroke="white" stroke-width="2" fill="none"/>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#8B5CF6"/>
                        <stop offset="100%" style="stop-color:#3B82F6"/>
                    </linearGradient>
                </defs>
            </svg>
            <span>LinkListers</span>
        </div>
        <div class="linklister-header-icons">
            <span class="icon">🌙</span>
            <span class="icon">📶</span>
            <span class="icon">👤</span>
        </div>
    </div>

    <div class="linklister-layout">
        <div class="linklister-sidebar">
            <nav class="linklister-nav">
                <a href="?page=linklister" class="nav-item">
                    <span class="nav-icon">🔄</span>
                    <?php _e('Sync', 'linklister'); ?>
                </a>
                <a href="?page=linklister-dashboard" class="nav-item">
                    <span class="nav-icon">📊</span>
                    <?php _e('Dashboard', 'linklister'); ?>
                </a>
                <a href="?page=linklister-settings" class="nav-item active">
                    <span class="nav-icon">⚙️</span>
                    <?php _e('Settings', 'linklister'); ?>
                </a>
                <a href="?page=linklister-faqs" class="nav-item">
                    <span class="nav-icon">❓</span>
                    <?php _e('FAQs', 'linklister'); ?>
                </a>
                <a href="?page=linklister-support" class="nav-item">
                    <span class="nav-icon">🎧</span>
                    <?php _e('Support', 'linklister'); ?>
                </a>
            </nav>
        </div>

        <div class="linklister-content">
            <div class="settings-form">
                <div class="form-group">
                    <label for="api-key"><?php _e('API Key', 'linklister'); ?></label>
                    <div class="api-key-input">
                        <input type="password" id="api-key" value="<?php echo esc_attr($api_key); ?>" placeholder="<?php _e('Enter your API key', 'linklister'); ?>">
                        <button type="button" id="toggle-api-key" class="toggle-btn">👁️</button>
                    </div>
                </div>
                
                <button id="save-settings-btn" class="save-button">
                    <?php _e('Save Settings', 'linklister'); ?>
                </button>
                
                <div class="authentication-process">
                    <h3><?php _e('Authentication Process:', 'linklister'); ?></h3>
                    
                    <div class="step">
                        <h4><?php _e('Step 1: Get Your API Key from LinkLister Dashboard', 'linklister'); ?></h4>
                        <p><?php _e('Login/Register at', 'linklister'); ?> <a href="https://linklister.com" target="_blank">https://linklister.com</a></p>
                        <p><?php _e('Add this domain at', 'linklister'); ?> (<a href="<?php echo get_site_url(); ?>" target="_blank"><?php echo get_site_url(); ?></a>) <?php _e('on the app.', 'linklister'); ?></p>
                        <p><?php _e('Copy your unique API Key from the dashboard (starts with ll_).', 'linklister'); ?></p>
                        <button class="tutorial-btn"><?php _e('📺 Watch Tutorial', 'linklister'); ?></button>
                    </div>
                    
                    <div class="step">
                        <h4><?php _e('Step 2', 'linklister'); ?></h4>
                        <h4><?php _e('Paste API Key on LinkLister Plugin Settings', 'linklister'); ?></h4>
                        <p><?php _e('Paste the API Key inside the "API Key" field and click "Save Settings".', 'linklister'); ?></p>
                        <p><strong><?php _e('Note:', 'linklister'); ?></strong> <?php _e('API keys must start with "ll_" and are case-sensitive.', 'linklister'); ?></p>
                    </div>
                    
                    <div class="step">
                        <h4><?php _e('Step 3: Sync Site with LinkLister', 'linklister'); ?></h4>
                        <p><?php _e('Go to the "Sync" tab, click on "Prepare Data" and wait. Then click on "Sync Now" button.', 'linklister'); ?></p>
                        <p><?php _e('Your site data will be sent to LinkLister dashboard for analysis.', 'linklister'); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>