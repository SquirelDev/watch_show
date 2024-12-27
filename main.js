// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const embedId = urlParams.get('embed');
const season = urlParams.get('s');
const episode = urlParams.get('ep');
const type = urlParams.get('type');

// Create the iframe when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (embedId) {
        // Create iframe element
        const iframe = document.createElement('iframe');
        
        // Set iframe attributes
        const url = type === 'tv' ? 'embedtv' : 'emebed'
        iframe.src = `https://www.2embed.cc/${url}/${embedId}`;
        iframe.allowFullscreen = true;
        
        // Find container and append iframe
        const container = document.getElementById('video-container');
        if (container) {
            container.appendChild(iframe);
        }
    }
}); 