import { createSlice } from "@reduxjs/toolkit";

// initial State
const initialState = {
    count: 0,
}

const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState: initialState,
    reducers:{
        increment: (state, action) => {
            state.count += action.payload
        },
        decrement: (state, action) => {
            // Only decrement if the count is greater than 0
            if (state.count > 0) {
                state.count -= action.payload
            }
        }
    },

    extraReducers: {
        ["counter/increment"]: (state, action) => {
            state.count += 1
        }
    }
})

export const { increment, decrement } = dynamicCounterSlice.actions;

export default dynamicCounterSlice.reducer;
