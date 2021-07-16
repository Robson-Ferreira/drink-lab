import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 90000,
});

export async function getCategories() {
    return api.get(`/list.php?c=list`).then(({ data }) => data);
}

export async function getDrinksByCategory(category) {
    return api.get(`/filter.php/${category}`).then(({ data }) => data);
}

export async function getDrinkById(id) {
    return api.get(`/lookup.php?i=${id}`).then(({ data }) => data);
}