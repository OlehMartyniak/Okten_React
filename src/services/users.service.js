import {axiosService} from "./axios.service";
import {urls} from "../constants";

const createUser = (obj) => axiosService.post(urls.users,obj);

export {createUser};