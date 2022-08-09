import { useDispatch } from "react-redux";
import { carActions } from "../../redux/slices/carSlice";

const Car = ({car}) => {

    const {id,model,year,price}= car;
    const dispatch = useDispatch();

    return (
        <div className="car">
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>year: {year}</p>
            <p>price: {price}</p>
            <div className="carButtons">
                <button>update</button>
                <button onClick={dispatch(carActions.deleteCar(id))}>delete</button>
            </div>
        </div>
    );
};

export {Car};