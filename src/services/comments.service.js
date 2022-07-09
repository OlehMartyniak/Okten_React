import {axiosService} from "./axios.service";
import {urls} from "../constants";

const createComment = (post) => axiosService.post(urls.comments,post);

export {createComment};