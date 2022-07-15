import {axiosService} from "./axiosService";
import {urls} from "../constants";

const postService = {
    getAll: ()=> axiosService.get(urls.posts)
};

export {postService};

