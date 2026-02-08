const { ipcRenderer } = require('electron');

// Network status detection
function updateNetworkStatus() {
    ipcRenderer.send('network-status', navigator.onLine);
}

window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);

// Listen for DOMContentLoaded event
window.addEventListener('DOMContentLoaded', () => {
    // Wire up retry button on offline page
    const retryBtn = document.getElementById('retry-btn');
    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            ipcRenderer.send('retry-connection');
        });
    }

    // Listen for click events and fire open-external-link as needed
    document.addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (link && link.href && link.href.startsWith('http')) {
            event.preventDefault();
            ipcRenderer.send('open-external-link', link.href);
        }
    });
});

// Handle keyboard shortcuts for zoom
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey) {
        if (event.key === '+') {
            ipcRenderer.send('zoom-in');
        } else if (event.key === '-') {
            ipcRenderer.send('zoom-out');
        } else if (event.key === '0') {
            ipcRenderer.send('zoom-reset');
        }
    }
});

// Handle mouse wheel zoom
document.addEventListener('wheel', (event) => {
    if (event.ctrlKey) {
        event.preventDefault(); // Prevent default scrolling
        if (event.deltaY < 0) {
            ipcRenderer.send('zoom-in');
        } else {
            ipcRenderer.send('zoom-out');
        }
    }
});
