const API_KEY = '43997870-ac002090f9f8b16e802d8cd1f';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByPixabay = (query) => {
    const searchParams = new URLSearchParams({
        q: query,
        key: API_KEY,
        image_type: 'photo',
        safesearch: 'true',
        orientation: 'horizontal',
        height: '200px'
    })

    return fetch(`${BASE_URL}?${searchParams}`).then(response => {
        if (!response.ok) {
            throw new Error();
        }
        return response.json();
    })
}
