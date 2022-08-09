import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { carService } from "../../services";

const initialState = {
    cars: [],
    errors: null
};

const getCars = createAsyncThunk(
    'carSlice/getCars',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const addCar = createAsyncThunk(
    'carSlice/addCar',
    async ({car},{rejectWithValue}) => {
        try {
            const {data} = await carService.createCar(car) 
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id},{rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            return id
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
        .addCase(getCars.fulfilled,(state,action) => {
            state.errors = null
            state.cars = action.payload
        })
        .addCase(addCar.fulfilled,(state,action) => {
            state.cars.push(action.payload)
        })
        .addCase(deleteCar.fulfilled,(state,action) => {
            const index = state.cars.findIndex(car => car.id === index.payload)
            state.cars.splice(index,1)
        })
        .addDefaultCase((state,action) => {
            const [type] = action.type.split('/').splice(-1);
            if (type === 'rejected') {
                state.errors = action.payload
            } else {
                state.errors = null
            }
        })
});

const {reducer: carReducer} = carSlice;
const carActions = {getCars,addCar,deleteCar};

export {carReducer,carActions};