import { createSlice } from "@reduxjs/toolkit";
import product from './Product.json'
const Slice=createSlice({
    name:"bigbasket",
    initialState:{
        arr:product,
        count:0,
        brandname:[],
    },
    reducers:{
        handlearr:(state,action)=>{
            state.arr.dynamic=action.payload
        },
        handleprice:(state,action)=>{
            state.arr.static=action.payload
        },
        handlepro:(state,action)=>{
            state.arr=action.payload
        },
        handlecount:(state,action)=>{
            state.count=action.payload
        },
        handledis:(state,action)=>{
            state.bool=action.payload
        },
        handlebrand:(state,action)=>{
            state.brandname=action.payload
        }
    }
})
export default Slice.reducer
export const {handlearr,handleprice,handlepro,handlecount,handledis,handlebrand}=Slice.actions