import axios from 'axios';
 
 const instance = axios.create({
     baseURL: 'https://e-commerce-follow-along.onrender.com', // your server
     withCredentials: true, // crucial for sending cookies
 });
 
 export default instance;