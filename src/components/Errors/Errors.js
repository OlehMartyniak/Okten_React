import { useSelector } from "react-redux";

const Errors = () => {

    const {errors} = useSelector(state => state.cars);

    return (
        <div className="errors">
            <span>Error</span>
            {errors.model.map(value => <p>{value}</p>)}
            {errors.year.map(value => <p>{value}</p>)}
            {errors.price.map(value => <p>{value}</p>)}
        </div>
    );
};

export {Errors};