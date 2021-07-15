import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 90000,
});

export async function getDrinksByCategory(category) {
    return api.get(`/filter.php/${category}`).then(({ data }) => data);
}