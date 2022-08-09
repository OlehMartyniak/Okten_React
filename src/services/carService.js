import { urls } from "../constants";
import { axiosService } from "./axiosService";

const carService = {
    getAll: ()=> axiosService.get(urls.cars),
    createCar: (car)=> axiosService.post(urls.cars,car), 
    updateById: (id,data)=> axiosService.put(`${urls.cars}/${id}`,data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
};

export {carService};