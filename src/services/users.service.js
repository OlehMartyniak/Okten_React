import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const usersService = {
    getUsers: ()=> axiosService.get(urls.users)
}