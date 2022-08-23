import axios from 'axios';
const baseUrl = '/api/listings'; // For production
// const baseUrl = 'http://localhost:3001/api/listings'; // For development

const getAll = () => {
    console.log('getALL!');
    const request =  axios.get(baseUrl);
    return request.then(response => response.data);
}

export default { getAll }