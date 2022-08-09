import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carActions } from "../../redux/slices/carSlice";
import { Car } from '..//../components';

const Cars = () => {

    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getCars())
    },[]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};