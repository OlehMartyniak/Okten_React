import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { carActions } from '../../redux';
import { Errors } from '../Errors/Errors';

const CarForm = () => {

    const {reset,register,handleSubmit,setValue} = useForm();
    const {carForUpdate,errors} = useSelector(state =>state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (carForUpdate) {
            setValue('model',carForUpdate.model)
            setValue('year',carForUpdate.year)
            setValue('price',carForUpdate.price)
        }
    },[carForUpdate,setValue])

    const submit = async (data)=> {
        if (carForUpdate) {
            await dispatch(carActions.updateCar({id:carForUpdate.id, car: data}))
        } else {
            await dispatch(carActions.addCar({car: data}))
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder='model' {...register('model')}/>
            <input type="text" placeholder='year' {...register('year')}/>
            <input type="text" placeholder='price' {...register('price')}/>
            <button>{ carForUpdate ? 'update' : 'create'}</button>
            {errors && <Errors key={1}/>}
        </form>
    );
};

export {CarForm};