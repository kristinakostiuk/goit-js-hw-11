const refs = {
    form: document.querySelector('.form'),
    galleryList: document.querySelector('.card-list'),
    loader: document.querySelector('.loader')
}

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"; 
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchPhotosByPixabay } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";

const lightbox = new SimpleLightbox('.card-list a');

function showMessage(message, type = 'error') {
    iziToast[type]({
        message: message,
        position: 'topRight',
        maxWidth: '300px'
    });
}

function onSearchFormSubmit(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.searchKeywords.value.trim();
    if (searchQuery === '') {
        showMessage('Sorry, there are no images matching your search query. Please try again!');
        refs.galleryList.innerHTML = '';
        return;
    }
    refs.loader.classList.remove('is-hidden');

    fetchPhotosByPixabay(searchQuery)
        .then(imagesData => {
            if (imagesData.hits.length === 0) {
                showMessage('Sorry, there are no images matching your search query. Please try again!');
                refs.galleryList.innerHTML = '';
                return;
            }
            return imagesData;
        })
        .then(imagesData => {
            const markup = createGallery(imagesData.hits);
            refs.galleryList.innerHTML = markup;
            lightbox.refresh();
        })
        .catch(error => {})
        .finally(() => {
            event.target.reset();
            refs.loader.classList.add('is-hidden');
        });
}

refs.form.addEventListener('submit', onSearchFormSubmit);
