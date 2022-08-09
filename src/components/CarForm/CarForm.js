import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { carActions } from '../../redux/slices/carSlice';

const CarForm = () => {

    const {reset,register,handleSubmit} = useForm();
    const dispatch = useDispatch();

    const submit = async (data)=> {
        await dispatch(carActions.addCar({car: data}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder='model' {...register('model')}/>
            <input type="text" placeholder='year' {...register('year')}/>
            <input type="text" placeholder='price' {...register('price')}/>
            <button>submit</button>
        </form>
    );
};

export {CarForm};