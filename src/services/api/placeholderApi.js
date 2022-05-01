import axios from 'axios';

const placeholderData = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default placeholderData;
