import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getGallery(queryName, page = 1, perPage = 15) {
    try {
        const response = await axios.get('', {
            params: {
                key: '42112521-3ff4dfc201bab0977369cd2bc',
                q: queryName,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page,
                per_page: perPage
            }
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to fetch images');
        }
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch images');
    }
}