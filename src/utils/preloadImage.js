export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve()
        img.onerror = (err) => reject(err)
    })
}

export const preloadMedia = (src, mediaType) => {
    return new Promise((resolve, reject) => {

        if (mediaType==='video') {
            const video = document.createElement('video');
            video.src = src;
            video.onloadeddata = () => resolve();
            video.onerror = (err) => reject(err);
            video.load();
        } else if(mediaType==='image') {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = (err) => reject(err);
        }
    });
};
