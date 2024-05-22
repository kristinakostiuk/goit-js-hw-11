export const createGallery = (images) => {
    return images.map((image) => {
    return `<li class="img-card">
            <a href="${image.largeImageURL}" class="card-link">
                <img 
                class="img"
                src="${image.largeImageURL}" 
                alt="${image.tags}">
            </a>
        <ul class="params-list">
            <li class="params-items">Likes</li>
            <li class="params-items">Views</li>
            <li class="params-items">Comments</li>
            <li class="params-items">Downloads</li>
        </ul>
        <ul class="params-list">
            <li class="params-item">${image.likes}</li>
            <li class="params-item">${image.views}</li>
            <li class="params-item">${image.comments}</li>
            <li class="params-item">${image.downloads}</li>
        </ul>`
    }).join('');
}
