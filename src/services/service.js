import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

const getAlbums = ()=> axiosInstance('/albums').then(value => value.data);
const getComments = ()=> axiosInstance('/comments').then(value => value.data);
const getTodos = ()=> axiosInstance('/todos').then(value => value.data);
const getCurrentCommentPost = (id)=> axiosInstance('/posts/' + id).then(value => value.data);

export {getAlbums,getCurrentCommentPost,getComments,getTodos};