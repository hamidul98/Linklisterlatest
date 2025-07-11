<?php
if (!defined('ABSPATH')) {
    exit;
}

$faqs = array(
    array(
        'question' => __('Do links stay permanent?', 'linklister'),
        'answer' => __('Yes, once links are created through LinkLister, they remain permanent in your content unless manually removed.', 'linklister')
    ),
    array(
        'question' => __('How to purchase credits?', 'linklister'),
        'answer' => __('You can purchase credits through your LinkLister dashboard by visiting the billing section.', 'linklister')
    ),
    array(
        'question' => __('Interlink was created from Linkboss but why I am still not seeing the link on my site?', 'linklister'),
        'answer' => __('Please ensure you have synced your site after creating interlinks. Also check if the content has been published.', 'linklister')
    ),
    array(
        'question' => __('Error: LinkBoss functionality is currently disabled due to the deactivation of WordPress Cron', 'linklister'),
        'answer' => __('Please enable WordPress Cron in your wp-config.php file or contact your hosting provider.', 'linklister')
    ),
    array(
        'question' => __('How do I know all my contents are synced?', 'linklister'),
        'answer' => __('Check the sync status in your dashboard. All synced content will show up in your LinkLister account.', 'linklister')
    ),
    array(
        'question' => __('What languages do you support?', 'linklister'),
        'answer' => __('LinkLister supports multiple languages including English, Spanish, French, German, and more.', 'linklister')
    ),
    array(
        'question' => __('Will this work on sites designed with pagebuilder?', 'linklister'),
        'answer' => __('Yes, LinkLister works with all major page builders including Elementor, Divi, and Beaver Builder.', 'linklister')
    ),
    array(
        'question' => __('What is the Plugin version?', 'linklister'),
        'answer' => sprintf(__('Current plugin version is %s', 'linklister'), LINKLISTER_VERSION)
    )
);
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
                <a href="?page=linklister-faqs" class="nav-item active">
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
            <div class="faqs-container">
                <h2><?php _e('FAQ (Frequently asked questions)', 'linklister'); ?></h2>
                
                <div class="faqs-list">
                    <?php foreach ($faqs as $index => $faq): ?>
                    <div class="faq-item">
                        <div class="faq-question" data-faq="<?php echo $index; ?>">
                            <span><?php echo esc_html($faq['question']); ?></span>
                            <span class="faq-toggle">▼</span>
                        </div>
                        <div class="faq-answer" id="faq-<?php echo $index; ?>">
                            <p><?php echo esc_html($faq['answer']); ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>