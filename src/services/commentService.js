import {axiosService} from "./axiosService";
import {urls} from "../constants";

const commentService = {
    getAll: ()=> axiosService.get(urls.comments)
};

export {commentService};