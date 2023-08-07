import { createSlice } from "@reduxjs/toolkit";

// initial State
const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers:{
        increment: (state, action) => {
            state.count++
        },
        decrement: (state, action) => {
            // Only decrement if the count is greater than 0
            if (state.count > 0) {
                state.count--
            }
        }
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
