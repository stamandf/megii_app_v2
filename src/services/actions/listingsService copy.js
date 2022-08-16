import axios from 'axios';
const baseUrl = '/properties'; // for production
// const baseUrl = 'http://localhost:3001/properties'; // for development

const getAll = () => {
    console.log('getALL!');
    const request =  axios.get(baseUrl);
    return request.then(response => response.data);
} 

const getAllFr = () => {
    console.log('getALL! EN FRANÇAIS');
    const frenchUrl = baseUrl.concat('/fr');
    const request =  axios.get(frenchUrl);
    return request.then(response => response.data);
} 

const getAllEn = () => {
    console.log('Get All IN ENGLISH!');
    const englishUrl = baseUrl.concat('/en');
    const request = axios.get(englishUrl);
    return request.then(response => response.data);
}

const listingsServices = {
    getAll,
    getAllFr,
    getAllEn
}
export default listingsServices;