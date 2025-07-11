<?php
if (!defined('ABSPATH')) {
    exit;
}
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
                <a href="?page=linklister-settings" class="nav-item">
                    <span class="nav-icon">⚙️</span>
                    <?php _e('Settings', 'linklister'); ?>
                </a>
                <a href="?page=linklister-faqs" class="nav-item">
                    <span class="nav-icon">❓</span>
                    <?php _e('FAQs', 'linklister'); ?>
                </a>
                <a href="?page=linklister-support" class="nav-item active">
                    <span class="nav-icon">🎧</span>
                    <?php _e('Support', 'linklister'); ?>
                </a>
            </nav>
        </div>

        <div class="linklister-content">
            <div class="support-container">
                <div class="support-icon">
                    <span>🎧</span>
                </div>
                
                <h2><?php _e('Help Center', 'linklister'); ?></h2>
                
                <p><?php _e('If you need help, please contact live chat support for fastest response', 'linklister'); ?></p>
                
                <div class="support-actions">
                    <a href="https://linklister.com/support" target="_blank" class="support-btn">
                        <?php _e('Contact Support', 'linklister'); ?>
                    </a>
                    
                    <a href="https://linklister.com/docs" target="_blank" class="docs-btn">
                        <?php _e('View Documentation', 'linklister'); ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>