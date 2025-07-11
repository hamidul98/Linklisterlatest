<?php
if (!defined('ABSPATH')) {
    exit;
}

$sync_status = get_option('linklister_sync_status', 'idle');
$last_sync = get_option('linklister_last_sync', 0);
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
                <a href="?page=linklister" class="nav-item active">
                    <span class="nav-icon">🔄</span>
                    <?php _e('Sync', 'linklister'); ?>
                </a>
                <a href="?page=linklister-dashboard" class="nav-item">
                    <span class="nav-icon">📊</span>
                    <?php _e('Dashboard', 'linklister'); ?>
                </a>
                <a href="?page=linklister-settings" class="nav-item">
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
            <div class="sync-container">
                <div class="sync-progress">
                    <div class="progress-circle" id="progress-circle">
                        <div class="progress-text">
                            <span id="progress-percentage">100%</span>
                        </div>
                    </div>
                </div>
                
                <div class="sync-info">
                    <p><?php _e('Click to Sync Now for a seamless experience, process may take a while', 'linklister'); ?></p>
                    
                    <div class="sync-options">
                        <label>
                            <input type="checkbox" id="force-sync">
                            <?php _e('Force Sync -', 'linklister'); ?>
                            <span class="force-sync-link"><?php _e('(to Sync all posts)', 'linklister'); ?></span>
                        </label>
                    </div>
                    
                    <button id="sync-now-btn" class="sync-button">
                        <?php _e('Sync Now', 'linklister'); ?>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>