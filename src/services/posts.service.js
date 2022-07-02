import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const postsService = {
    getPostsById: (id)=> axiosService.get(`${urls.posts}?userId=${id}`)
}