// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
let embedId = urlParams.get('embed');
const s = urlParams.get('s');
const ep = urlParams.get('ep');
const type = urlParams.get('type');

// Create the iframe when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (embedId) {
        // Create iframe element
        const iframe = document.createElement('iframe');
        
        // Set iframe attributes
        const url = type === 'tv' ? 'embedtv' : 'emebed'
        if(type=='tv'){
            iframe.src = `https://www.2embed.cc/embedtv/${embedId}&s=${s}&e=${ep}`;
        } else {
            embedId = embedId.split('-')[0]
            iframe.src = `https://www.2embed.cc/embed/${embedId}`;
        }
        iframe.allowFullscreen = true;
        
        // Find container and append iframe
        const container = document.getElementById('video-container');
        if (container) {
            container.appendChild(iframe);
        }
    }
}); 
