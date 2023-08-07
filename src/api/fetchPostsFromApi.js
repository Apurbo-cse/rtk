import axios from 'axios';

export async function fetchPostsFromApi(page, limit) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    return response;
}