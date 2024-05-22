export const preloadMedia = (url, type) => {
    return new Promise((resolve, reject) => {
        if (type === 'image') {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
        } else if (type === 'video') {
            const video = document.createElement('video');
            video.src = url;
            video.onloadeddata = resolve;
            video.onerror = reject;
        }
    });
};


