jQuery(document).ready(function($) {
    
    // Sync functionality
    $('#sync-now-btn').on('click', function() {
        var $btn = $(this);
        var forceSync = $('#force-sync').is(':checked');
        var action = forceSync ? 'linklister_force_sync' : 'linklister_sync';
        
        $btn.prop('disabled', true).text(linklister_ajax.strings.syncing);
        
        // Update progress circle
        updateProgressCircle(0);
        
        $.ajax({
            url: linklister_ajax.ajax_url,
            type: 'POST',
            data: {
                action: action,
                nonce: linklister_ajax.nonce
            },
            success: function(response) {
                if (response.success) {
                    updateProgressCircle(100);
                    showNotification(linklister_ajax.strings.sync_complete, 'success');
                    
                    // Update stats if on dashboard
                    if (response.data.stats) {
                        updateDashboardStats(response.data.stats);
                    }
                } else {
                    showNotification(response.data.message || linklister_ajax.strings.sync_error, 'error');
                }
            },
            error: function() {
                showNotification(linklister_ajax.strings.sync_error, 'error');
            },
            complete: function() {
                $btn.prop('disabled', false).text('Sync Now');
            }
        });
    });
    
    // Settings functionality
    $('#save-settings-btn').on('click', function() {
        var $btn = $(this);
        var apiKey = $('#api-key').val();
        
        if (!apiKey.trim()) {
            showNotification('Please enter your API key from LinkLister dashboard', 'error');
            return;
        }
        
        if (!apiKey.startsWith('ll_')) {
            showNotification('Invalid API key format. API keys must start with "ll_"', 'error');
            return;
        }
        
        $btn.prop('disabled', true).text('Saving...');
        
        $.ajax({
            url: linklister_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'linklister_save_settings',
                api_key: apiKey,
                nonce: linklister_ajax.nonce
            },
            success: function(response) {
                if (response.success) {
                    showNotification('Settings saved successfully!', 'success');
                } else {
                    showNotification(response.data.message || 'Error saving settings', 'error');
                }
            },
            error: function() {
                showNotification('Error saving settings', 'error');
            },
            complete: function() {
                $btn.prop('disabled', false).text('Save Settings');
            }
        });
    });
    
    // Toggle API key visibility
    $('#toggle-api-key').on('click', function() {
        var $input = $('#api-key');
        var type = $input.attr('type');
        
        if (type === 'password') {
            $input.attr('type', 'text');
            $(this).text('🙈');
        } else {
            $input.attr('type', 'password');
            $(this).text('👁️');
        }
    });
    
    // FAQ functionality
    $('.faq-question').on('click', function() {
        var $this = $(this);
        var $answer = $this.next('.faq-answer');
        var $toggle = $this.find('.faq-toggle');
        
        $this.toggleClass('active');
        $answer.toggleClass('show');
        
        if ($answer.hasClass('show')) {
            $answer.slideDown(200);
        } else {
            $answer.slideUp(200);
        }
    });
    
    // Scan links functionality
    $('.scan-links-btn').on('click', function() {
        var $btn = $(this);
        
        $btn.prop('disabled', true).text('Scanning...');
        
        $.ajax({
            url: linklister_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'linklister_sync',
                nonce: linklister_ajax.nonce
            },
            success: function(response) {
                if (response.success) {
                    showNotification('Scan completed successfully!', 'success');
                    if (response.data.stats) {
                        updateDashboardStats(response.data.stats);
                    }
                } else {
                    showNotification(response.data.message || 'Scan failed', 'error');
                }
            },
            error: function() {
                showNotification('Scan failed', 'error');
            },
            complete: function() {
                $btn.prop('disabled', false).text('Scan Links');
            }
        });
    });
    
    // Helper functions
    function updateProgressCircle(percentage) {
        var $circle = $('#progress-circle');
        var $text = $('#progress-percentage');
        
        $text.text(percentage + '%');
        
        var degrees = (percentage / 100) * 360;
        $circle.css('background', `conic-gradient(#3B82F6 ${degrees}deg, #E5E7EB ${degrees}deg)`);
    }
    
    function updateDashboardStats(stats) {
        $('.stat-card').each(function(index) {
            var $number = $(this).find('.stat-number');
            var value = 0;
            
            switch(index) {
                case 0: value = stats.total_posts; break;
                case 1: value = stats.total_links; break;
                case 2: value = stats.internal_links; break;
                case 3: value = stats.external_links; break;
            }
            
            $number.text(value);
        });
    }
    
    function showNotification(message, type) {
        var $notification = $('<div class="linklister-notification ' + type + '">' + message + '</div>');
        
        $notification.css({
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '600',
            zIndex: 9999,
            background: type === 'success' ? '#10B981' : '#EF4444'
        });
        
        $('body').append($notification);
        
        setTimeout(function() {
            $notification.fadeOut(300, function() {
                $(this).remove();
            });
        }, 3000);
    }
    
    // Initialize chart if on dashboard
    if ($('#sync-chart').length) {
        initSyncChart();
    }
    
    function initSyncChart() {
        var ctx = document.getElementById('sync-chart').getContext('2d');
        
        // Sample data - in real implementation, this would come from the server
        var data = {
            labels: Array.from({length: 30}, (_, i) => {
                var date = new Date();
                date.setDate(date.getDate() - (29 - i));
                return date.toLocaleDateString();
            }),
            datasets: [{
                label: 'Sync Data',
                data: Array.from({length: 30}, () => Math.random() * 100),
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        };
        
        // Simple chart implementation (you might want to include Chart.js library)
        var canvas = ctx.canvas;
        var width = canvas.width;
        var height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        // Draw a simple area chart
        ctx.beginPath();
        ctx.moveTo(0, height);
        
        data.datasets[0].data.forEach(function(value, index) {
            var x = (index / (data.datasets[0].data.length - 1)) * width;
            var y = height - (value / 100) * height;
            ctx.lineTo(x, y);
        });
        
        ctx.lineTo(width, height);
        ctx.closePath();
        
        ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(0, height - (data.datasets[0].data[0] / 100) * height);
        
        data.datasets[0].data.forEach(function(value, index) {
            var x = (index / (data.datasets[0].data.length - 1)) * width;
            var y = height - (value / 100) * height;
            ctx.lineTo(x, y);
        });
        
        ctx.strokeStyle = 'rgba(59, 130, 246, 1)';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
});