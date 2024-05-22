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

function onSearchFormSubmit(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.searchKeywords.value.trim();
    if (searchQuery === '') {
        refs.galleryList.innerHTML = '';
        event.target.reset()
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            maxWidth: '300px'
        })
        return
    }
    refs.loader.classList.remove('is-hidden');

    fetchPhotosByPixabay(searchQuery)
        .then(imagesData => {
            if (imagesData.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    maxWidth: '300px'
                })
            }
            return imagesData;
            refs.galleryList.innerHTML = '';
        })
        .then(imagesData => {
            const markup = createGallery(imagesData.hits);
            refs.galleryList.innerHTML = markup;
            const lightbox = new SimpleLightbox('.card-list a');
        })
        .catch(error => {
            console.error('Error:', error);
            iziToast.error({
                message: 'An error occurred while fetching images. Please try again later.',
                position: 'topRight',
                maxWidth: '300px'
            });
        })
        .finally(() => {
            event.target.reset()
            refs.loader.classList.add('is-hidden');
        })
}

refs.form.addEventListener('submit', onSearchFormSubmit);

