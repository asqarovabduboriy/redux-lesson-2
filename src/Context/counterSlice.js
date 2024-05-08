import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
          value: 0
    },

    reducers :{
        inc(state,action){
            state.value += action.payload   
        },
        res(state){
            state.value = 0;
        },
        decriment(state,action){
            state.value -= action.payload
        }
    }
})

export const {inc,res,decriment} = counterSlice.actions
export default counterSlice.reducer