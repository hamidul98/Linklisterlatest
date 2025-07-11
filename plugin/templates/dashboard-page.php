<?php
if (!defined('ABSPATH')) {
    exit;
}

$stats = LinkLister_Scanner::get_stats();
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
                <a href="?page=linklister-dashboard" class="nav-item active">
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
            <div class="dashboard-stats">
                <div class="stat-card">
                    <div class="stat-number"><?php echo $stats['total_posts']; ?></div>
                    <div class="stat-label"><?php _e('Total Post', 'linklister'); ?></div>
                    <div class="stat-sublabel"><?php _e('Posts & Pages', 'linklister'); ?></div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-number"><?php echo $stats['total_links']; ?></div>
                    <div class="stat-label"><?php _e('Total Links', 'linklister'); ?></div>
                    <div class="stat-sublabel"><?php _e('Posts & Pages', 'linklister'); ?></div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-number"><?php echo $stats['internal_links']; ?></div>
                    <div class="stat-label"><?php _e('Internal Link', 'linklister'); ?></div>
                    <div class="stat-sublabel"><?php _e('Posts & Pages', 'linklister'); ?></div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-number"><?php echo $stats['external_links']; ?></div>
                    <div class="stat-label"><?php _e('External Links', 'linklister'); ?></div>
                    <div class="stat-sublabel"><?php _e('Posts & Pages', 'linklister'); ?></div>
                </div>
            </div>
            
            <div class="scan-links-section">
                <button class="scan-links-btn"><?php _e('Scan Links', 'linklister'); ?></button>
            </div>
            
            <div class="chart-section">
                <h3><?php _e('Last 30 Days Sync Status', 'linklister'); ?></h3>
                <div class="chart-container">
                    <canvas id="sync-chart" width="800" height="300"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>