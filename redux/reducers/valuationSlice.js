import { createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axiosConfig'
const valuationSlice = createSlice({
    name: 'valuation',
    initialState: {
        data: [],
        price: null
    },
    reducers: {
        setCarlist: (state, action) => {
            state.data = action.payload
        },
        setCarPrice: (state,action) => {
            state.price = action.payload
        }
    }
});
export const getCarList = async (dispatch) => {
    return axios.get('carcheck/listCar')
        .then((response) => {
            dispatch(setCarlist(response.data))
        })
        .catch((err) => {
            throw err
        })
}
export const predictCar = async (car,dispatch) => {
    return axios.post('carcheck/predictCar',car)
    .then((response)=>{
        dispatch(setCarPrice(response.data))
    })
    .catch((err)=>{
        throw err
    })
}
export const { setCarlist,setCarPrice } = valuationSlice.actions;
export const listCar = (state) => state.valuation.data
export const carPrice = (state) => state.valuation.price
export default valuationSlice.reducer
